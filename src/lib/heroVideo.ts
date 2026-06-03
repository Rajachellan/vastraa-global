/**
 * Hero background video source.
 * - Local / Jenkins: uses /vastraa_home_banner.mp4 from public/ (Git LFS).
 * - Vercel: set NEXT_PUBLIC_HERO_VIDEO_URL (e.g. Vercel Blob CDN URL).
 */
export function getHeroVideoSrc(): string {
  const fromEnv = process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim();
  if (fromEnv) return fromEnv;
  return "/vastraa_home_banner.mp4";
}
