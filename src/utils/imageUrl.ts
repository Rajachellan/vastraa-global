/** Rewrites backend upload URLs to a same-origin path (proxied by Next.js). */
export function normalizeImageUrl(url: string): string {
  if (!url || url.startsWith("/")) return url;

  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith("/uploads/")) {
      return parsed.pathname;
    }
  } catch {
    // not a valid absolute URL
  }

  return url;
}
