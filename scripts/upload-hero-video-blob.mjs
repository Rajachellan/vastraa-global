/**
 * One-time upload of the hero video to Vercel Blob.
 *
 * 1. Create a Blob store in the Vercel project (Storage → Blob).
 * 2. Copy BLOB_READ_WRITE_TOKEN from the store settings.
 * 3. Run:  BLOB_READ_WRITE_TOKEN=xxx node scripts/upload-hero-video-blob.mjs
 * 4. Add the printed URL as NEXT_PUBLIC_HERO_VIDEO_URL in Vercel → Settings → Environment Variables.
 * 5. Redeploy.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { put } from "@vercel/blob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const videoPath = path.join(__dirname, "..", "public", "vastraa_home_banner.mp4");
const MIN_BYTES = 10 * 1024 * 1024;

const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN. Create a Vercel Blob store and copy its token.");
  process.exit(1);
}

if (!fs.existsSync(videoPath)) {
  console.error(`Missing ${videoPath}. Run: git lfs pull`);
  process.exit(1);
}

const size = fs.statSync(videoPath).size;
if (size < MIN_BYTES) {
  console.error(`${videoPath} is only ${size} bytes. Run: git lfs pull`);
  process.exit(1);
}

console.log(`Uploading ${(size / 1024 / 1024).toFixed(1)} MB (multipart)...`);

const blob = await put("vastraa_home_banner.mp4", fs.readFileSync(videoPath), {
  access: "public",
  token,
  multipart: true,
  contentType: "video/mp4",
  addRandomSuffix: false,
});

console.log("\nUpload complete. Add this in Vercel → Project → Settings → Environment Variables:\n");
console.log(`NEXT_PUBLIC_HERO_VIDEO_URL=${blob.url}\n`);
console.log("Then redeploy the project.");
