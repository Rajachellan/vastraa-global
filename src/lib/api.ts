/** Dev: `/api/backend` (Next rewrite). Production: `https://api.vastraaglobal.com/api` */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "/api/backend";

export const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN?.replace(/\/$/, "") ||
  (API_BASE.startsWith("http") ? API_BASE.replace(/\/api$/, "") : "");

export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${API_BASE}/${normalized}`;
}

export function resolveMediaUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("blob:")) return url;
  if (url.startsWith("/uploads/") && API_ORIGIN) return `${API_ORIGIN}${url}`;
  return url;
}
