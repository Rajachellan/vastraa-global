import { apiUrl, resolveMediaUrl } from "@/lib/api";
import {
  getRelatedFabricsForItem,
  getStaticFabricById,
  getStaticFabricCatalog,
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
  return getStaticFabricCatalog();
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
  return getStaticFabricById(id);
}

export function getFabricCategoryName(item: FabricItem): string {
  return getStaticFabricCategoryNameForItem(item);
}

export function getRelatedFabrics(item: FabricItem, limit = 4): FabricItem[] {
  return getRelatedFabricsForItem(item, limit);
}
