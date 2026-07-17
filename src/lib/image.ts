import { resolveMediaUrl } from "@/lib/api";

/** Normalize upload URLs for same-origin /uploads proxy or CDN. */
export function normalizeImageSrc(url: string): string {
  return resolveMediaUrl(url);
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
  if (srcNorm.includes("assets.vastraaglobal.com")) return true;
  if (srcNorm.includes("videodelivery.net")) return true;
  if (srcNorm.includes("cloudflarestream.com")) return true;
  if (srcNorm.includes("127.0.0.1")) return true;
  return false;
}
