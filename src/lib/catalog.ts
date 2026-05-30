import { apiUrl, resolveMediaUrl } from "@/lib/api";
import type { ApiDesign, DesignStyle, FabricCategory, FabricItem } from "@/lib/types";

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
    items: (raw.items || []).map(normalizeFabricItem),
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
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data.map(normalizeFabricCategory) : [];
}

export async function fetchFabricById(id: string): Promise<FabricItem | null> {
  const res = await fetch(apiUrl(`fabrics/${encodeURIComponent(id)}`), {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return normalizeFabricItem(await res.json());
}
