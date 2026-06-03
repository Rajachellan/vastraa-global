import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const videoPath = path.join("public", "vastraa_home_banner.mp4");
const MIN_BYTES = 10 * 1024 * 1024;
const remoteUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();

function fileSize(file) {
  return fs.statSync(file).size;
}

function isPointer(content) {
  return content.startsWith("version https://git-lfs.github.com/spec/v1");
}

if (remoteUrl) {
  console.log(
    `[ensure-lfs-assets] Using remote hero video (NEXT_PUBLIC_HERO_VIDEO_URL)`,
  );
  process.exit(0);
}

if (process.env.VERCEL === "1") {
  console.error(
    "[ensure-lfs-assets] Vercel deploy requires NEXT_PUBLIC_HERO_VIDEO_URL.\n" +
      "  1. Run: git lfs pull\n" +
      "  2. Run: BLOB_READ_WRITE_TOKEN=<token> node scripts/upload-hero-video-blob.mjs\n" +
      "  3. Add the printed URL as NEXT_PUBLIC_HERO_VIDEO_URL in Vercel env vars\n" +
      "  4. Redeploy\n" +
      "See .env.example",
  );
  process.exit(1);
}

if (!fs.existsSync(videoPath)) {
  console.error(`[ensure-lfs-assets] Missing ${videoPath}`);
  process.exit(1);
}

let size = fileSize(videoPath);
if (size >= MIN_BYTES) {
  console.log(`[ensure-lfs-assets] Hero video OK (${size} bytes)`);
  process.exit(0);
}

const head = fs.readFileSync(videoPath, { encoding: "utf8", end: 80 });
if (!isPointer(head)) {
  console.error(
    `[ensure-lfs-assets] ${videoPath} is only ${size} bytes and is not a valid video file.`,
  );
  process.exit(1);
}

console.log(
  `[ensure-lfs-assets] ${videoPath} is a Git LFS pointer (${size} bytes). Running git lfs pull...`,
);

try {
  const root = execSync("git rev-parse --show-toplevel", {
    encoding: "utf8",
  }).trim();
  execSync("git lfs install", { cwd: root, stdio: "inherit" });
  execSync("git lfs pull", { cwd: root, stdio: "inherit" });
} catch {
  console.error(
    "[ensure-lfs-assets] git lfs pull failed. Install Git LFS on the build agent and ensure the job can access LFS objects.",
  );
  process.exit(1);
}

size = fileSize(videoPath);
if (size < MIN_BYTES || isPointer(fs.readFileSync(videoPath, { encoding: "utf8", end: 80 }))) {
  console.error(
    `[ensure-lfs-assets] ${videoPath} is still not a full video after git lfs pull (${size} bytes).`,
  );
  process.exit(1);
}

console.log(`[ensure-lfs-assets] Hero video ready (${size} bytes)`);
