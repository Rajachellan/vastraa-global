import { apiUrl, resolveMediaUrl } from "@/lib/api";
import { isEnabledFabricSlug } from "@/lib/enabledFabricRoutes";
import {
  getRelatedFabricsForItem,
  getStaticFabricById,
  getStaticFabricCatalog,
  getStaticFabricCategoryBySlug,
  getStaticFabricCategoryNameForItem,
} from "@/lib/fabricCategories";
import type { ApiDesign, BlogPost, DesignStyle, FabricCategory, FabricItem } from "@/lib/types";

function normalizeDesign(raw: ApiDesign): ApiDesign {
  return {
    ...raw,
    id: raw.id || raw._id,
    name: raw.name || raw.title,
    image: resolveMediaUrl(raw.image),
    images: (raw.images || []).map(resolveMediaUrl),
    category: raw.style || raw.category || "",
    style: raw.style || raw.category || "",
  };
}

export async function fetchDesigns(style?: string): Promise<ApiDesign[]> {
  const query = style ? `?style=${encodeURIComponent(style)}` : "";
  const res = await fetch(apiUrl(`designs${query}`), { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data.map(normalizeDesign) : [];
}

export async function fetchDesignById(idOrSlug: string): Promise<ApiDesign | null> {
  const res = await fetch(apiUrl(`designs/${encodeURIComponent(idOrSlug)}`), {
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  const design = normalizeDesign(data);
  if (Array.isArray(data.relatedDesigns)) {
    design.relatedDesigns = data.relatedDesigns.map(normalizeDesign);
  }
  return design;
}

export async function fetchDesignStyles(): Promise<DesignStyle[]> {
  const res = await fetch(apiUrl("designstyles"), { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function fetchFabricCatalog(): Promise<FabricCategory[]> {
  const res = await fetch(apiUrl("fabrics/catalog"), { cache: "no-store" });
  if (!res.ok) return getStaticFabricCatalog();
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data
    .map(normalizeFabricCategory)
    .filter((category) => isEnabledFabricSlug(category.slug));
}

function normalizeFabricItem(raw: FabricItem): FabricItem {
  return {
    ...raw,
    id: raw.id || raw._id,
    image: resolveMediaUrl(raw.image),
    images: (raw.images || []).map(resolveMediaUrl),
  };
}

function normalizeFabricCategory(raw: FabricCategory): FabricCategory {
  return {
    ...raw,
    id: raw.id || raw._id,
    image: raw.image ? resolveMediaUrl(raw.image) : undefined,
    video: raw.video ? resolveMediaUrl(raw.video) : undefined,
    videoHls: raw.videoHls ? resolveMediaUrl(raw.videoHls) : undefined,
    pageContent: raw.pageContent,
    items: (raw.items || []).map(normalizeFabricItem),
  };
}

export async function fetchFabricPage(slug: string): Promise<FabricCategory | null> {
  try {
    const res = await fetch(apiUrl(`fabric-pages/${encodeURIComponent(slug)}`), {
      cache: "no-store",
    });
    if (!res.ok) {
      const legacy = await fetch(apiUrl(`categories/slug/${encodeURIComponent(slug)}`), {
        cache: "no-store",
      });
      if (!legacy.ok) {
        return getStaticFabricCategoryBySlug(slug) || null;
      }
      return normalizeFabricCategory(await legacy.json());
    }
    return normalizeFabricCategory(await res.json());
  } catch (error) {
    return getStaticFabricCategoryBySlug(slug) || null;
  }
}

function normalizeBlogPost(raw: BlogPost): BlogPost {
  return {
    ...raw,
    id: raw.id || raw._id,
    image: raw.image ? resolveMediaUrl(raw.image) : undefined,
  };
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await fetch(apiUrl("blogs"), { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data
    .filter((b) => b.status !== "draft")
    .map(normalizeBlogPost);
}

export async function fetchFabricById(id: string): Promise<FabricItem | null> {
  const staticItem = getStaticFabricById(id);
  if (staticItem) return staticItem;

  const res = await fetch(apiUrl(`products/${encodeURIComponent(id)}`), {
    cache: "no-store",
  });
  if (res.ok) return normalizeFabricItem(await res.json());

  const legacy = await fetch(apiUrl(`fabrics/${encodeURIComponent(id)}`), {
    cache: "no-store",
  });
  if (!legacy.ok) return null;
  return normalizeFabricItem(await legacy.json());
}

const OBJECT_ID = /^[a-f0-9]{24}$/i;

/** Load a fabric product by MongoDB id or URL slug. */
export async function fetchFabricProduct(param: string): Promise<FabricItem | null> {
  if (!param?.trim()) return null;

  if (!OBJECT_ID.test(param)) {
    const staticBySlug = getStaticFabricById(param);
    if (staticBySlug) return staticBySlug;
  }

  return fetchFabricById(param);
}

export function getFabricCategoryName(item: FabricItem): string {
  if (typeof item.categoryId === "object" && item.categoryId?.name) {
    return item.categoryId.name;
  }
  return getStaticFabricCategoryNameForItem(item);
}

export function getRelatedFabrics(item: FabricItem, limit = 4): FabricItem[] {
  return getRelatedFabricsForItem(item, limit);
}

export async function fetchRelatedFabricProducts(
  item: FabricItem,
  limit = 4
): Promise<FabricItem[]> {
  const categorySlug =
    typeof item.categoryId === "object" && item.categoryId?.slug
      ? item.categoryId.slug
      : undefined;

  if (!categorySlug) {
    return getRelatedFabricsForItem(item, limit);
  }

  const page = await fetchFabricPage(categorySlug);
  if (!page?.items?.length) return [];

  return page.items
    .filter((candidate) => candidate.id !== item.id && candidate.slug !== item.slug)
    .slice(0, limit);
}
