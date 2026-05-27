/** Same-origin proxy to the Express API (see rewrites in next.config.ts). */
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "/api/backend";

export function apiUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${API_BASE}/${normalized}`;
}
