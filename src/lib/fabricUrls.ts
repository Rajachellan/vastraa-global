import { ENABLED_FABRIC_SLUGS } from "@/lib/enabledFabricRoutes";

/** Fixed fabric category routes — product slugs must not collide with these. */
export const FABRIC_CATEGORY_SLUGS = new Set<string>(ENABLED_FABRIC_SLUGS);

export function fabricProductHref(item: { slug?: string; id: string }): string {
  const slug = item.slug?.trim();
  if (slug && !FABRIC_CATEGORY_SLUGS.has(slug.toLowerCase())) {
    return `/fabrics/${slug}`;
  }
  return `/fabrics/${item.id}`;
}
