export interface Design {
  id: string;
  name: string;
  category: string;
  designer: string;
  image: string;
  images: string[];
  description: string;
  resolution: string;
  format: string;
  defaultFabricId: string;
  suggestedFabrics: string[];
}

export const designs: Design[] = [
  {
    id: "d1",
    name: "Midnight Blossom",
    category: "Floral",
    designer: "Sarah Jenkins",
    image: "/images/trending1.png",
    images: ["/images/trending1.png", "/images/fabric-silk-2.png", "/images/textile_gallery_showroom.png"],
    description: "Intricate floral patterns on a deep indigo background, perfect for evening wear.",
    resolution: "300 DPI",
    format: "TIFF/PSD",
    defaultFabricId: "f7", // Cotton-Silk Blend
    suggestedFabrics: ["f1", "f3", "f7"]
  },
  {
    id: "d2",
    name: "Golden Meridian",
    category: "Geometric",
    designer: "Studio Luxe",
    image: "/images/trending2.png",
    images: ["/images/trending2.png", "/images/fabric-cotton-premium.png", "/images/fabric_cotton_texture.png"],
    description: "Sharp, elegant geometric lines infused with metallic gold accents.",
    resolution: "600 DPI",
    format: "AI/PDF",
    defaultFabricId: "f1", // Cotton
    suggestedFabrics: ["f1", "f2", "f5"]
  },
  {
    id: "d3",
    name: "Oceanic Flow",
    category: "Abstract",
    designer: "Marcello V.",
    image: "/images/trending3.png",
    images: ["/images/trending3.png", "/images/silk-close-up.png", "/images/mulberry_silk_texture.png"],
    description: "Fluid abstract movements inspired by deep sea currents and coral life.",
    resolution: "300 DPI",
    format: "TIFF",
    defaultFabricId: "f4", // Modal
    suggestedFabrics: ["f3", "f4", "f7"]
  },
  {
    id: "d4",
    name: "Royal Ikat",
    category: "Traditional",
    designer: "Anita Rao",
    image: "/images/trending_textile_design_4.png",
    images: ["/images/trending_textile_design_4.png", "/images/fabric-linen-premium.png", "/images/fabric-linen-2.png"],
    description: "A modern take on traditional Ikat weaving patterns with vibrant pigments.",
    resolution: "450 DPI",
    format: "PSD",
    defaultFabricId: "f2", // Linen
    suggestedFabrics: ["f1", "f2", "f5", "f8"]
  },
  {
    id: "d5",
    name: "Cyber Grid",
    category: "Modern",
    designer: "Neo Textile",
    image: "/images/grid.jpg",
    images: ["/images/grid.jpg", "/images/fabric-cotton-2.png", "/images/fabric_cotton_texture.png"],
    description: "Futuristic grid patterns designed for contemporary streetwear collections.",
    resolution: "300 DPI",
    format: "JPG/PNG",
    defaultFabricId: "f1", // Cotton
    suggestedFabrics: ["f1", "f3", "f6"]
  },
  {
    id: "d6",
    name: "Wild Peonies",
    category: "Floral",
    designer: "Elena G.",
    image: "/images/Wild-Peonies.jpg",
    images: ["/images/Wild-Peonies.jpg", "/images/silk-close-up.png", "/images/mulberry_silk_texture.png"],
    description: "Hand-painted peonies with a soft watercolor effect, ideal for summer dresses.",
    resolution: "600 DPI",
    format: "TIFF/PSD",
    defaultFabricId: "f4", // Modal (Silk-like drape)
    suggestedFabrics: ["f3", "f4", "f7"]
  },
  {
    id: "d7",
    name: "Saffron Paisley",
    category: "Traditional",
    designer: "Rajesh K.",
    image: "/images/Saffron-Paisley.jpg",
    images: ["/images/Saffron-Paisley.jpg", "/images/fabric-linen-premium.png", "/images/fabric-blend.png"],
    description: "Ornate paisley motifs in rich saffron and crimson tones, inspired by heritage tapestries.",
    resolution: "400 DPI",
    format: "TIFF",
    defaultFabricId: "f5", // Cotton-Linen Blend
    suggestedFabrics: ["f2", "f5", "f8"]
  },
  {
    id: "d8",
    name: "Urban Glitch",
    category: "Modern",
    designer: "Pixel Art",
    image: "/images/Urban-Glitch.jpg",
    images: ["/images/Urban-Glitch.jpg", "/images/fabric-viscose.png", "/images/textile_gallery_showroom.png"],
    description: "Distorted digital textures and neon accents for an edgy, tech-wear aesthetic.",
    resolution: "300 DPI",
    format: "PNG",
    defaultFabricId: "f3", // Viscose
    suggestedFabrics: ["f1", "f3", "f6"]
  },
  {
    id: "d9",
    name: "Tropical Breeze",
    category: "Floral",
    designer: "Isabella S.",
    image: "/images/Tropical-Breeze.jpg",
    images: ["/images/Tropical-Breeze.jpg", "/images/silk-close-up.png", "/images/mulberry_silk_texture.png"],
    description: "Vibrant tropical leaves and exotic birds in a lush, jungle-inspired composition.",
    resolution: "500 DPI",
    format: "PSD/TIFF",
    defaultFabricId: "f7", // Cotton-Silk Blend
    suggestedFabrics: ["f3", "f7", "f4"]
  },
  {
    id: "d10",
    name: "Lattice Work",
    category: "Geometric",
    designer: "Geometrica",
    image: "/images/Lattice-Work.jpg",
    images: ["/images/Lattice-Work.jpg", "/images/fabric-cotton-premium.png", "/images/fabric-cotton-2.png"],
    description: "Intricate interlocking shapes inspired by classical architectural lattice screens.",
    resolution: "600 DPI",
    format: "AI/SVG",
    defaultFabricId: "f1", // Cotton
    suggestedFabrics: ["f1", "f2", "f5"]
  },
  {
    id: "d11",
    name: "Nebula Mist",
    category: "Abstract",
    designer: "Cosmos Design",
    image: "/images/Nebula-Mist.jpg",
    images: ["/images/Nebula-Mist.jpg", "/images/fabric-viscose.png", "/images/mulberry_silk_texture.png"],
    description: "Ethereal, swirling gaseous patterns mimicking the beauty of deep space nebulae.",
    resolution: "300 DPI",
    format: "TIFF/PSD",
    defaultFabricId: "f3", // Viscose
    suggestedFabrics: ["f3", "f4", "f7"]
  },
  {
    id: "d12",
    name: "Vintage Rose",
    category: "Floral",
    designer: "Clara M.",
    image: "/images/Vintage-Rose.jpg",
    images: ["/images/Vintage-Rose.jpg", "/images/fabric-silk-2.png", "/images/mulberry_silk_texture.png"],
    description: "Delicate, faded rose patterns for a nostalgic and romantic textile feel.",
    resolution: "600 DPI",
    format: "PSD",
    defaultFabricId: "f7", // Cotton-Silk Blend
    suggestedFabrics: ["f1", "f3", "f7"]
  }
];
