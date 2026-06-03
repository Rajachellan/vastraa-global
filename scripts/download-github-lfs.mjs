import { createWriteStream } from "node:fs";
import fs from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import { execSync } from "node:child_process";

export function parseLfsPointer(pointerPath) {
  const text = fs.readFileSync(pointerPath, "utf8");
  const oidMatch = text.match(/oid sha256:([a-f0-9]+)/i);
  const sizeMatch = text.match(/size (\d+)/);
  if (!oidMatch || !sizeMatch) {
    throw new Error(`Invalid Git LFS pointer: ${pointerPath}`);
  }
  return { oid: oidMatch[1], size: Number(sizeMatch[1]) };
}

export function resolveGitHubRepo() {
  const owner = process.env.VERCEL_GIT_REPO_OWNER?.trim();
  const repo = process.env.VERCEL_GIT_REPO_SLUG?.trim();
  if (owner && repo) return { owner, repo };

  try {
    const remote = execSync("git remote get-url origin", { encoding: "utf8" }).trim();
    const match = remote.match(/github\.com[:/]([^/]+)\/([^/.]+)/i);
    if (match) return { owner: match[1], repo: match[2] };
  } catch {
    // ignore
  }

  return null;
}

/**
 * Download a Git LFS object from GitHub into destPath (streaming).
 */
export async function downloadGitHubLfsFile({
  owner,
  repo,
  pointerPath,
  destPath,
}) {
  const { oid, size } = parseLfsPointer(pointerPath);
  const batchUrl = `https://github.com/${owner}/${repo}.git/info/lfs/objects/batch`;
  const token =
    process.env.GITHUB_TOKEN?.trim() ||
    process.env.GITHUB_ACCESS_TOKEN?.trim();

  const headers = {
    Accept: "application/vnd.git-lfs+json",
    "Content-Type": "application/vnd.git-lfs+json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const batchRes = await fetch(batchUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      operation: "download",
      transfers: ["basic"],
      objects: [{ oid, size }],
    }),
  });

  if (!batchRes.ok) {
    const body = await batchRes.text();
    throw new Error(
      `GitHub LFS batch failed (${batchRes.status}): ${body.slice(0, 200)}`,
    );
  }

  const batch = await batchRes.json();
  const entry = batch.objects?.[0];
  if (entry?.error) {
    throw new Error(`GitHub LFS error: ${JSON.stringify(entry.error)}`);
  }

  const download = entry?.actions?.download;
  if (!download?.href) {
    throw new Error("GitHub LFS batch returned no download URL");
  }

  const dlHeaders = { ...(download.header || {}) };
  const videoRes = await fetch(download.href, { headers: dlHeaders });
  if (!videoRes.ok) {
    throw new Error(`GitHub LFS download failed (${videoRes.status})`);
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  await pipeline(
    Readable.fromWeb(videoRes.body),
    createWriteStream(destPath),
  );

  const written = fs.statSync(destPath).size;
  if (written < size * 0.99) {
    throw new Error(
      `Downloaded ${written} bytes, expected ~${size} bytes`,
    );
  }

  return written;
}
