/** Normalize API upload URLs to same-origin /uploads paths (Next rewrite → backend). */
export function normalizeImageSrc(url: string): string {
  if (!url) return "";
  if (url.startsWith("/uploads/")) return url;
  if (url.startsWith("blob:")) return url;
  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith("/uploads/")) {
      return parsed.pathname;
    }
  } catch {
    // relative or invalid
  }
  return url;
}

/** Use for next/image when the URL may be Cloudflare Images or local API uploads */
export function shouldUnoptimizeImage(src: string): boolean {
  const srcNorm = normalizeImageSrc(src);
  if (!srcNorm) return false;
  if (srcNorm.startsWith("blob:")) return true;
  if (srcNorm.startsWith("/uploads/")) return true;
  if (srcNorm.startsWith("http://localhost")) return true;
  if (srcNorm.includes("imagedelivery.net")) return true;
  return false;
}
