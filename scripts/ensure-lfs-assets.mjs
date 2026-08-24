import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  downloadGitHubLfsFile,
  resolveGitHubRepo,
} from "./download-github-lfs.mjs";

const videoPath = path.join("public", "vastraa_home_banner.mp4");
const MIN_BYTES = 10 * 1024 * 1024;
const remoteUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();

function fileSize(file) {
  return fs.statSync(file).size;
}

function isPointer(content) {
  return content.startsWith("version https://git-lfs.github.com/spec/v1");
}

function isVideoReady() {
  if (!fs.existsSync(videoPath)) return false;
  const size = fileSize(videoPath);
  if (size < MIN_BYTES) return false;
  const head = fs.readFileSync(videoPath, { encoding: "utf8", end: 80 });
  return !isPointer(head);
}

if (remoteUrl) {
  console.log(
    "[ensure-lfs-assets] Using remote hero video (NEXT_PUBLIC_HERO_VIDEO_URL)",
  );
  process.exit(0);
}

if (isVideoReady()) {
  console.log(`[ensure-lfs-assets] Hero video OK (${fileSize(videoPath)} bytes)`);
  process.exit(0);
}

function tryGitLfsPull() {
  try {
    const root = execSync("git rev-parse --show-toplevel", {
      encoding: "utf8",
    }).trim();
    execSync("git lfs install", { cwd: root, stdio: "inherit" });
    execSync("git lfs pull", { cwd: root, stdio: "inherit" });
    return isVideoReady();
  } catch {
    return false;
  }
}

if (fs.existsSync(videoPath)) {
  const size = fileSize(videoPath);
  const head = fs.readFileSync(videoPath, { encoding: "utf8", end: 80 });
  if (isPointer(head)) {
    console.log(
      `[ensure-lfs-assets] ${videoPath} is a Git LFS pointer (${size} bytes).`,
    );
  }
} else {
  console.log(`[ensure-lfs-assets] ${videoPath} is missing.`);
}

console.log("[ensure-lfs-assets] Running git lfs pull...");
if (tryGitLfsPull()) {
  console.log(`[ensure-lfs-assets] Hero video ready (${fileSize(videoPath)} bytes)`);
  process.exit(0);
}

const repo = resolveGitHubRepo();
if (repo && fs.existsSync(videoPath)) {
  console.log(
    `[ensure-lfs-assets] Fetching LFS object from GitHub (${repo.owner}/${repo.repo})...`,
  );
  try {
    const bytes = await downloadGitHubLfsFile({
      owner: repo.owner,
      repo: repo.repo,
      pointerPath: videoPath,
      destPath: videoPath,
    });
    console.log(`[ensure-lfs-assets] Hero video downloaded (${bytes} bytes)`);
    process.exit(0);
  } catch (error) {
    console.error(
      `[ensure-lfs-assets] GitHub LFS download failed: ${error.message}`,
    );
    if (!process.env.GITHUB_TOKEN && !process.env.GITHUB_ACCESS_TOKEN) {
      console.error(
        "[ensure-lfs-assets] For a private repo, add GITHUB_TOKEN in Vercel env vars (read access).",
      );
    }
  }
}

const isVercel = process.env.VERCEL === "1";

if (isVercel) {
  console.warn(
    "[ensure-lfs-assets] Could not fetch hero video on Vercel (Git LFS is not available in this build).\n" +
      "The site will use the hero poster image until you set NEXT_PUBLIC_HERO_VIDEO_URL.\n" +
      "Recommended: upload with `node scripts/upload-hero-video-blob.mjs`, add the URL in Vercel → Settings → Environment Variables, then redeploy.",
  );
  process.exit(0);
}

console.error(
  "[ensure-lfs-assets] Could not resolve hero video for this build.\n" +
    "Option A (Vercel): set NEXT_PUBLIC_HERO_VIDEO_URL to a CDN/Blob URL.\n" +
    "Option B: run `git lfs pull` locally, or `npm run dev:assets`.\n" +
    "Option C: add GITHUB_TOKEN if the repository is private.",
);
process.exit(1);
