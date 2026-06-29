/** Dev: `/api` (Next rewrite → backend). Production: `https://api.vastraaglobal.com/api` */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "/api";

export const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN?.replace(/\/$/, "") ||
  (API_BASE.startsWith("http") ? API_BASE.replace(/\/api$/, "") : "");

export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${API_BASE}/${normalized}`;
}

/** Browser-safe media URL — same-origin /uploads for Next.js proxy, or absolute CDN/API URL. */
export async function subscribeNewsletter(
  email: string,
  source = "blogs"
): Promise<{ message: string }> {
  const res = await fetch(apiUrl("newsletter/subscribe"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Could not subscribe. Please try again.");
  }
  return data;
}

/** Same-origin /uploads paths — proxied to API via next.config rewrites, or direct API origin when set. */
export function resolveMediaUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("blob:")) return url;

  if (url.startsWith("/uploads/") || url.startsWith("/assets/")) {
    return API_ORIGIN ? `${API_ORIGIN}${url}` : url;
  }

  if (url.startsWith("http")) {
    try {
      const parsed = new URL(url);
      if (
        parsed.pathname.startsWith("/uploads/") ||
        parsed.pathname.startsWith("/assets/")
      ) {
        return API_ORIGIN ? `${API_ORIGIN}${parsed.pathname}` : parsed.pathname;
      }
    } catch {
      return url;
    }
    return url;
  }

  return url;
}
