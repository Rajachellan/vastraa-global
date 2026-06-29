import type { FabricCategory, FabricItem } from "@/lib/types";

export type FabricNavItem = {
  name: string;
  href: string;
  slug?: string;
};

export const FABRIC_NAV_ITEMS: FabricNavItem[] = [
  { name: "All Fabrics", href: "/fabrics" },
  { name: "Cotton", href: "/fabrics/cotton", slug: "cotton" },
  { name: "Silk", href: "/fabrics/silk", slug: "silk" },
  { name: "Blends", href: "/fabrics/blends", slug: "blends" },
  { name: "Linen", href: "/fabrics/linen", slug: "linen" },
  { name: "Sustainable", href: "/fabrics/sustainable", slug: "sustainable" },
  { name: "Viscose", href: "/fabrics/viscose", slug: "viscose" },
  // { name: "Viscose", href: "/fabrics?category=viscose", slug: "viscose" },
];

const fabricItems: FabricItem[] = [
  {
    _id: "f1",
    id: "f1",
    name: "Cotton",
    description: "Soft, breathable and highly durable for versatile applications.",
    image: "/images/cotton.png",
    images: [
      "/images/cotton.png",
      "/images/fabric-cotton.png",
      "/images/fabric-cotton-2.png",
      "/images/fabric_cotton_texture.png",
    ],
    type: "Cotton",
    gsm: "150 GSM",
    specs: "100% organic cotton, combed yarn",
    usage: "Premium shirts, light dresses, childrenwear, luxury bed linens",
    care: "Machine wash cold with gentle detergent, tumble dry low, warm iron",
    printing: "Digital pigment & reactive printing",
    moq: "500 meters",
    customization: "Pantone color matching, custom widths (up to 160cm), enzyme soft wash",
    categoryId: "cotton",
  },
  {
    _id: "f2",
    id: "f2",
    name: "Linen",
    description: "Strong, cool and undeniably premium with a natural texture.",
    image: "/images/fabric-linen.png",
    images: [
      "/images/fabric-linen.png",
      "/images/fabric-linen-premium.png",
      "/images/fabric-linen-2.png",
      "/images/linen.png",
    ],
    type: "Linen",
    gsm: "180 GSM",
    specs: "100% premium European flax",
    usage: "Luxury summer suits, light trousers, draperies, tabletop linens",
    care: "Hand wash or professional dry clean only, reshape while damp, steam iron",
    printing: "Reactive printing for high depth & wash fastness",
    moq: "300 meters",
    customization: "Custom slub count, stone-washed finishing, width adjustments",
    categoryId: "linen",
  },
  {
    _id: "f3",
    id: "f3",
    name: "Viscose",
    description: "Silky, smooth and excellent at holding vibrant digital prints.",
    image: "/images/fabric-viscose.png",
    images: ["/images/fabric-viscose.png", "/images/viscos.jpg", "/images/textile_gallery_showroom.png"],
    type: "Viscose",
    gsm: "140 GSM",
    specs: "100% regenerated beech wood cellulose",
    usage: "Flowing dresses, premium scarves, soft blouses, lining fabrics",
    care: "Gentle cycle warm wash, dry flat in shade, iron inside out with low heat",
    printing: "Digital reactive & pigment printing",
    moq: "400 meters",
    customization: "Luster control (semi-dull to bright), custom drape stiffness",
    categoryId: "viscose",
  },
  {
    _id: "f4",
    id: "f4",
    name: "Modal",
    description: "Incredibly soft and durable, perfect for luxurious drapes.",
    image: "/images/silk-close-up.png",
    images: ["/images/silk-close-up.png", "/images/mulberry_silk_texture.png", "/images/textile_gallery_showroom.png"],
    type: "Modal",
    gsm: "130 GSM",
    specs: "Eco-friendly Lenzing Modal fibers",
    usage: "Luxury activewear, high-end loungewear, premium bedding collections",
    care: "Machine wash warm, do not wring, tumble dry medium, iron low",
    printing: "Sublimation & reactive dye printing",
    moq: "350 meters",
    customization: "Silk-touch finish, anti-pilling treatment, customized weights",
    categoryId: "viscose",
  },
  {
    _id: "f5",
    id: "f5",
    name: "Cotton-Linen",
    description: "Combining cotton's softness with linen's structured elegance.",
    image: "/images/fabric-blends.png",
    images: ["/images/fabric-blends.png", "/images/fabric-blend.png", "/images/fabric-linen.png", "/images/cotton.png"],
    type: "Cotton‑Linen Blend",
    gsm: "160 GSM",
    specs: "50% organic cotton / 50% Belgian linen",
    usage: "Casual blazers, summer shorts, breathable shirts, interior cushion covers",
    care: "Machine wash cold with similar colors, line dry in shade, warm iron",
    printing: "Digital pigment & digital reactive printing",
    moq: "250 meters",
    customization: "Blend ratio customization (e.g. 70/30), slub intensity options",
    categoryId: "blends",
  },
  {
    _id: "f6",
    id: "f6",
    name: "Cotton-Viscose",
    description: "Breathable and luminous, ideal for high‑end fashion garments.",
    image: "/images/fabric-viscose.png",
    images: ["/images/fabric-viscose.png", "/images/viscos.jpg", "/images/cotton.png"],
    type: "Cotton‑Viscose Blend",
    gsm: "150 GSM",
    specs: "70% organic cotton / 30% premium viscose",
    usage: "Fitted shirts, structured blouses, luxury resort wear",
    care: "Machine wash cold on delicate cycle, do not bleach, warm iron",
    printing: "Reactive printing for ultra-vibrant details",
    moq: "300 meters",
    customization: "Brushed finish, customized blend options, water-repellent coating",
    categoryId: "blends",
  },
  {
    _id: "f7",
    id: "f7",
    name: "Cotton-Silk",
    description: "The ultimate luxury blend offering durability and a lustrous finish.",
    image: "/images/silk-close-up.png",
    images: [
      "/images/silk-close-up.png",
      "/images/mulberry_silk_texture.png",
      "/images/cotton.png",
      "/images/fabric-silk-2.png",
    ],
    type: "Cotton‑Silk Blend",
    gsm: "140 GSM",
    specs: "60% combed organic cotton / 40% Grade 6A mulberry silk",
    usage: "Evening dresses, bridal party apparel, premium shawls, designer drapery",
    care: "Professional dry clean highly recommended, otherwise hand wash cold, iron low",
    printing: "Digital reactive & dye-sublimation print techniques",
    moq: "200 meters",
    customization: "Hand-rolled edge stitching, satin weave vs. plain weave options",
    categoryId: "blends",
  },
  {
    _id: "f8",
    id: "f8",
    name: "Linen-Viscose",
    description: "A beautifully textured fabric with a smooth, flowing drape.",
    image: "/images/fabric-linen.png",
    images: ["/images/fabric-linen.png", "/images/fabric-linen-premium.png", "/images/fabric-viscose.png"],
    type: "Linen‑Viscose Blend",
    gsm: "155 GSM",
    specs: "55% natural linen / 45% premium viscose",
    usage: "Midi skirts, wide-leg trousers, lightweight summer dresses",
    care: "Hand wash cold, lay flat to dry, do not tumble dry, steam iron on low",
    printing: "Digital pigment printing for detailed color palettes",
    moq: "220 meters",
    customization: "Soft-laundering prewash, custom dye lot matching, flame retardant treatment",
    categoryId: "blends",
  },
  {
    _id: "f9",
    id: "f9",
    name: "Mulberry Silk",
    description: "Luxurious natural protein fiber with exceptional drape, sheen, and softness.",
    image: "/images/silk-close-up.png",
    images: ["/images/silk-close-up.png", "/images/mulberry_silk_texture.png", "/images/fabric-silk-2.png"],
    type: "Silk",
    gsm: "120 GSM",
    specs: "100% Grade 6A mulberry silk",
    usage: "Evening wear, luxury scarves, designer blouses, couture collections",
    care: "Professional dry clean recommended, hand wash cold with silk detergent",
    printing: "Digital reactive & pigment printing for fine detail",
    moq: "200 meters",
    customization: "Custom finishes, hand-rolled hems, width and weight options",
    categoryId: "silk",
  },
];

const categoryMeta: Record<
  string,
  { name: string; description: string; image: string }
> = {
  cotton: {
    name: "Cotton",
    description: "Soft, breathable natural fabrics ideal for everyday and premium apparel.",
    image: "/images/cotton.png",
  },
  silk: {
    name: "Silk",
    description: "Luxurious silks with natural luster for designer and couture collections.",
    image: "/images/silk-close-up.png",
  },
  blends: {
    name: "Blends",
    description: "Engineered fabric blends combining comfort, structure, and performance.",
    image: "/images/fabric-blends.png",
  },
  linen: {
    name: "Linen",
    description: "Cool, textured linens crafted for elevated summer and resort collections.",
    image: "/images/fabric-linen.png",
  },
  sustainable: {
    name: "Sustainable",
    description: "Eco-conscious fabrics produced with responsible sourcing and finishing.",
    image: "/images/fabric-cotton.png",
  },
  viscose: {
    name: "Viscose",
    description: "Smooth, fluid fabrics that hold vibrant prints with a silky hand feel.",
    image: "/images/fabric-viscose.png",
  },
};

const categoryItemIds: Record<string, string[]> = {
  cotton: ["f1"],
  silk: ["f9"],
  blends: ["f5", "f6", "f7", "f8"],
  linen: ["f2"],
  sustainable: ["f1", "f2", "f4"],
  viscose: ["f3", "f4"],
};

function buildCategory(slug: string): FabricCategory {
  const meta = categoryMeta[slug];
  const itemIds = categoryItemIds[slug] || [];

  return {
    _id: slug,
    id: slug,
    name: meta.name,
    slug,
    description: meta.description,
    image: meta.image,
    items: itemIds
      .map((id) => fabricItems.find((item) => item.id === id))
      .filter((item): item is FabricItem => Boolean(item)),
  };
}

export function getStaticFabricCatalog(): FabricCategory[] {
  return FABRIC_NAV_ITEMS.filter((item) => item.slug).map((item) => buildCategory(item.slug!));
}

export function getStaticFabricCategoryBySlug(slug: string): FabricCategory | undefined {
  if (!categoryMeta[slug]) return undefined;
  return buildCategory(slug);
}

export function getStaticFabricById(id: string): FabricItem | null {
  return fabricItems.find((item) => item.id === id || item._id === id) ?? null;
}

export function getStaticFabricCategoryNameForItem(item: FabricItem): string {
  const categoryId =
    typeof item.categoryId === "string"
      ? item.categoryId
      : item.categoryId?.slug || item.categoryId?.name || "";

  return categoryMeta[categoryId]?.name || "";
}

export function getRelatedFabricsForItem(item: FabricItem, limit = 4): FabricItem[] {
  const categoryId = typeof item.categoryId === "string" ? item.categoryId : item.categoryId?.slug;
  if (!categoryId) {
    return fabricItems.filter((fabric) => fabric.id !== item.id).slice(0, limit);
  }

  const category = buildCategory(categoryId);
  return category.items.filter((fabric) => fabric.id !== item.id).slice(0, limit);
}
