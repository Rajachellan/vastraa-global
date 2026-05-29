import { API_ORIGIN, resolveMediaUrl } from "@/lib/api";

/** Normalize upload URLs for dev rewrites or production API host. */
export function normalizeImageSrc(url: string): string {
  const resolved = resolveMediaUrl(url);
  if (!resolved) return "";
  if (resolved.startsWith("blob:")) return resolved;
  if (!API_ORIGIN && resolved.startsWith("/uploads/")) return resolved;
  if (API_ORIGIN && resolved.startsWith(API_ORIGIN + "/uploads/")) {
    return resolved.slice(API_ORIGIN.length);
  }
  try {
    const parsed = new URL(resolved);
    if (!API_ORIGIN && parsed.pathname.startsWith("/uploads/")) {
      return parsed.pathname;
    }
  } catch {
    // relative or invalid
  }
  return resolved;
}

/** Use for next/image when the URL may be Cloudflare Images or local API uploads */
export function shouldUnoptimizeImage(src: string): boolean {
  const srcNorm = normalizeImageSrc(src);
  if (!srcNorm) return false;
  if (srcNorm.startsWith("blob:")) return true;
  if (srcNorm.startsWith("/uploads/")) return true;
  if (srcNorm.startsWith("http://localhost")) return true;
  if (srcNorm.includes("api.vastraaglobal.com")) return true;
  if (srcNorm.includes("imagedelivery.net")) return true;
  return false;
}
