/**
 * Hero background video source.
 * - Production override: set NEXT_PUBLIC_HERO_VIDEO_URL (CDN/Blob URL).
 * - Default: /vastraa_banner_video.mp4 (committed to git, works on Vercel).
 * - Optional local HQ clip: /vastraa_home_banner.mp4 (Git LFS — `npm run dev:assets`).
 */
export function getHeroVideoSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
  if (fromEnv) return fromEnv;
  return "/vastraa_banner_video.mp4";
}

/** Poster while hero video loads (or if MP4 is missing locally). */
export function getHeroVideoPoster(): string {
  return process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() || "/images/hero-b2b-new.png";
}
