/**
 * Hero background video source.
 * - Production: set NEXT_PUBLIC_HERO_VIDEO_URL to Cloudflare Stream MP4 URL.
 * - Local: /vastraa_home_banner.mp4 (Git LFS — run `npm run prebuild` to fetch).
 * - Dev fallback: first uploaded hero clip on the API (/uploads/…).
 */
export function getHeroVideoSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
  if (fromEnv) return fromEnv;
  return "/vastraa_home_banner.mp4";
}

/** Poster while hero video loads (or if MP4 is missing locally). */
export function getHeroVideoPoster(): string {
  return process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() || "/images/hero-b2b-new.png";
}
