"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Search, Filter, ArrowRight, CheckCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { useRouter } from "next/navigation";

const designCategories = ["All", "Floral", "Geometric", "Abstract", "Traditional", "Modern"];

const designs = [
  {
    id: "d1",
    name: "Midnight Blossom",
    category: "Floral",
    designer: "Sarah Jenkins",
    price: "₹3,750",
    image: "/images/trending1.png",
    description: "Intricate floral patterns on a deep indigo background, perfect for evening wear.",
    resolution: "300 DPI",
    format: "TIFF/PSD"
  },
  {
    id: "d2",
    name: "Golden Meridian",
    category: "Geometric",
    designer: "Studio Luxe",
    price: "₹4,350",
    image: "/images/trending2.png",
    description: "Sharp, elegant geometric lines infused with metallic gold accents.",
    resolution: "600 DPI",
    format: "AI/PDF"
  },
  {
    id: "d3",
    name: "Oceanic Flow",
    category: "Abstract",
    designer: "Marcello V.",
    price: "₹3,200",
    image: "/images/trending3.png",
    description: "Fluid abstract movements inspired by deep sea currents and coral life.",
    resolution: "300 DPI",
    format: "TIFF"
  },
  {
    id: "d4",
    name: "Royal Ikat",
    category: "Traditional",
    designer: "Anita Rao",
    price: "₹4,000",
    image: "/images/trending_textile_design_4.png",
    description: "A modern take on traditional Ikat weaving patterns with vibrant pigments.",
    resolution: "450 DPI",
    format: "PSD"
  },
  {
    id: "d5",
    name: "Cyber Grid",
    category: "Modern",
    designer: "Neo Textile",
    price: "₹2,950",
    image: "/images/trending2.png",
    description: "Futuristic grid patterns designed for contemporary streetwear collections.",
    resolution: "300 DPI",
    format: "JPG/PNG"
  },
  {
    id: "d6",
    name: "Wild Peonies",
    category: "Floral",
    designer: "Elena G.",
    price: "₹3,500",
    image: "/images/trending1.png",
    description: "Hand-painted peonies with a soft watercolor effect, ideal for summer dresses.",
    resolution: "600 DPI",
    format: "TIFF/PSD"
  },
  {
    id: "d7",
    name: "Saffron Paisley",
    category: "Traditional",
    designer: "Rajesh K.",
    price: "₹4,200",
    image: "/images/trending_textile_design_4.png",
    description: "Ornate paisley motifs in rich saffron and crimson tones, inspired by heritage tapestries.",
    resolution: "400 DPI",
    format: "TIFF"
  },
  {
    id: "d8",
    name: "Urban Glitch",
    category: "Modern",
    designer: "Pixel Art",
    price: "₹3,100",
    image: "/images/trending2.png",
    description: "Distorted digital textures and neon accents for an edgy, tech-wear aesthetic.",
    resolution: "300 DPI",
    format: "PNG"
  },
  {
    id: "d9",
    name: "Tropical Breeze",
    category: "Floral",
    designer: "Isabella S.",
    price: "₹3,800",
    image: "/images/trending3.png",
    description: "Vibrant tropical leaves and exotic birds in a lush, jungle-inspired composition.",
    resolution: "500 DPI",
    format: "PSD/TIFF"
  },
  {
    id: "d10",
    name: "Lattice Work",
    category: "Geometric",
    designer: "Geometrica",
    price: "₹3,400",
    image: "/images/trending2.png",
    description: "Intricate interlocking shapes inspired by classical architectural lattice screens.",
    resolution: "600 DPI",
    format: "AI/SVG"
  },
  {
    id: "d11",
    name: "Nebula Mist",
    category: "Abstract",
    designer: "Cosmos Design",
    price: "₹4,500",
    image: "/images/trending3.png",
    description: "Ethereal, swirling gaseous patterns mimicking the beauty of deep space nebulae.",
    resolution: "300 DPI",
    format: "TIFF/PSD"
  },
  {
    id: "d12",
    name: "Vintage Rose",
    category: "Floral",
    designer: "Clara M.",
    price: "₹3,300",
    image: "/images/trending1.png",
    description: "Delicate, faded rose patterns for a nostalgic and romantic textile feel.",
    resolution: "600 DPI",
    format: "PSD"
  }
];

export default function DesignsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const router = useRouter();

  const filteredDesigns = designs.filter(design => {
    const matchesCategory = activeCategory === "All" || design.category === activeCategory;
    const matchesSearch = design.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          design.designer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (design: any) => {
    addToCart({
      id: design.id,
      name: design.name,
      price: design.price,
      image: design.image,
      type: "Printable Design"
    });
    setToast({ show: true, message: `${design.name} added to your bag!` });
  };

  const handleBuyNow = (design: any) => {
    addToCart({
      id: design.id,
      name: design.name,
      price: design.price,
      image: design.image,
      type: "Printable Design"
    });
    router.push("/cart");
  };

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif text-accent mb-8"
            >
              Printable <span className="text-secondary italic">Artistry</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-accent/60 leading-relaxed max-w-2xl"
            >
              Discover high-fidelity textile designs ready for immediate digital printing. From traditional motifs to contemporary abstracts, source the perfect pattern for your next collection.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white/50 backdrop-blur-md sticky top-24 z-30 border-y border-accent/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {designCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                    ? "bg-accent text-white shadow-lg" 
                    : "bg-white text-accent/40 hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/20" size={18} />
              <input 
                type="text" 
                placeholder="Search designs or designers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-accent/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {filteredDesigns.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-accent/40">No designs found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredDesigns.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image 
                      src={design.image} 
                      alt={design.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                      <button 
                        onClick={() => toggleWishlist({ id: design.id, name: design.name, price: design.price, image: design.image })}
                        className={`p-4 rounded-full transition-all duration-300 ${
                          isInWishlist(design.id) 
                          ? "bg-secondary text-white" 
                          : "bg-white text-accent hover:bg-secondary hover:text-white"
                        }`}
                      >
                        <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                      </button>
                      <button 
                        onClick={() => handleAddToCart(design)}
                        className="p-4 bg-white text-accent rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
                      >
                        <ShoppingBag size={20} />
                      </button>
                    </div>

                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full text-accent shadow-sm">
                        {design.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-serif text-accent mb-1">{design.name}</h3>
                        <p className="text-xs text-secondary font-bold uppercase tracking-widest">By {design.designer}</p>
                      </div>
                      <span className="text-xl font-bold text-accent">{design.price}</span>
                    </div>
                    
                    <p className="text-sm text-accent/60 leading-relaxed mb-8 line-clamp-2">
                      {design.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-accent/5">
                      <div className="flex gap-4 text-[10px] text-accent/40 font-bold uppercase tracking-tighter">
                        <span>{design.resolution}</span>
                        <span>•</span>
                        <span>{design.format}</span>
                      </div>
                      <button 
                        onClick={() => handleBuyNow(design)}
                        className="text-accent hover:text-secondary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors group/btn"
                      >
                        Buy Now
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-24 bg-accent text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Image src="/images/trending3.png" alt="Pattern Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Exclusive Design Partnership?</h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Are you a textile designer looking to showcase your work to global fashion brands? Join our curated design studio and reach premium B2B buyers.
            </p>
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 shadow-2xl">
              Apply as a Designer
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
