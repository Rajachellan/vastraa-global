import type { ApiDesign } from "@/lib/types";

/** URL path segment for a design (prefers slug, falls back to Mongo id). */
export function designPath(design: Pick<ApiDesign, "slug" | "id" | "_id">): string {
  if (design.slug) return design.slug;
  return design.id || design._id;
}

export function designHref(design: Pick<ApiDesign, "slug" | "id" | "_id">): string {
  return `/designs/${designPath(design)}`;
}
