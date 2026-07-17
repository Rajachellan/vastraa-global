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
const CDN_ORIGIN =
  process.env.NEXT_PUBLIC_CDN_URL?.replace(/\/$/, "") ||
  "https://assets.vastraaglobal.com";

const MEDIA_FALLBACK =
  process.env.NEXT_PUBLIC_MEDIA_FALLBACK?.replace(/\/$/, "") ||
  "https://admin.vastraaglobal.com";

function uploadPathname(url: string): string {
  if (!url) return "";
  if (url.startsWith("/uploads/")) return url.split("?")[0];
  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith("/uploads/")) return parsed.pathname;
  } catch {
    // ignore
  }
  return "";
}

/** Ordered URL candidates so missing disk files can still resolve from CDN or API. */
export function mediaCandidates(url: string): string[] {
  if (!url?.trim()) return [];
  const raw = url.trim();
  const list: string[] = [];
  const push = (u: string) => {
    if (u && !list.includes(u)) list.push(u);
  };

  if (raw.startsWith("blob:")) {
    push(raw);
    return list;
  }

  const path = uploadPathname(raw);
  if (path) {
    if (raw.startsWith("http")) push(raw);
    // Shared production uploads volume (admin nginx) first — API /uploads often 404s
    if (MEDIA_FALLBACK) push(`${MEDIA_FALLBACK}${path}`);
    push(`${CDN_ORIGIN}${path}`);
    if (API_ORIGIN && API_ORIGIN !== MEDIA_FALLBACK) {
      push(`${API_ORIGIN}${path}`);
    }
    push(path);
    return list;
  }

  if (raw.startsWith("http")) {
    push(raw);
    return list;
  }

  if (raw.startsWith("/assets/") && API_ORIGIN) {
    push(`${API_ORIGIN}${raw}`);
  }
  push(raw);
  return list;
}

export function resolveMediaUrl(url: string): string {
  return mediaCandidates(url)[0] || "";
}
