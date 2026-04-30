"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag, Heart, CheckCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";

const categories = [
  {
    id: "natural",
    name: "Natural Fabrics",
    items: [
      { id: "f1", name: "Cotton", description: "Soft, breathable, and highly durable for versatile applications.", image: "/images/fabric_cotton.png", price: "$12.00/m" },
      { id: "f2", name: "Linen", description: "Strong, cool, and undeniably premium with a natural texture.", image: "/images/fabric-linen.png", price: "$18.00/m" }
    ]
  },
  {
    id: "semi-synthetic",
    name: "Semi-Synthetic",
    items: [
      { id: "f3", name: "Viscose", description: "Silky, smooth, and excellent at holding vibrant digital prints.", image: "/images/fabric-viscose.png", price: "$15.00/m" },
      { id: "f4", name: "Modal", description: "Incredibly soft and durable, perfect for luxurious drapes.", image: "/images/silk-close-up.png", price: "$16.00/m" }
    ]
  },
  {
    id: "blended",
    name: "Blended",
    items: [
      { id: "f5", name: "Cotton-Linen", description: "Combining cotton's softness with linen's structured elegance.", image: "/images/fabric-blends.png", price: "$20.00/m" },
      { id: "f6", name: "Cotton-Viscose", description: "Breathable and luminous, ideal for high-end fashion garments.", image: "/images/fabric-viscose.png", price: "$19.00/m" },
      { id: "f7", name: "Cotton-Silk", description: "The ultimate luxury blend offering durability and a lustrous finish.", image: "/images/silk-close-up.png", price: "$28.00/m" },
      { id: "f8", name: "Linen-Viscose", description: "A beautifully textured fabric with a smooth, flowing drape.", image: "/images/fabric-linen.png", price: "$22.00/m" }
    ]
  }
];

export default function FabricsMainPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const displayedCategories = activeFilter === "All"
    ? categories
    : categories.filter(c => c.name === activeFilter);

  const handleRequestSample = (itemName: string) => {
    showToast(`Sample request for ${itemName} has been sent!`);
  };

  const handleAddToCart = (item: any) => {
    addToCart(item);
    showToast(`${item.name} added to your bag!`);
  };

  const handleToggleWishlist = (item: any) => {
    toggleWishlist(item);
    if (!isInWishlist(item.id)) {
      showToast(`${item.name} added to your wishlist!`);
    }
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
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/silk-close-up.png"
          alt="Our Fabric Collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Explore Our <span className="text-secondary">Collection</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
              A curated selection of premium textiles, meticulously prepared for high-fidelity digital printing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeFilter === "All" ? "bg-accent text-white shadow-xl" : "bg-white text-accent/60 hover:bg-secondary/10"}`}
            >
              All Fabrics
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.name)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${activeFilter === cat.name ? "bg-accent text-white shadow-xl" : "bg-white text-accent/60 hover:bg-secondary/10"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="space-y-32">
            {displayedCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-4xl font-serif text-accent">{category.name}</h2>
                  <div className="flex-1 h-[1px] bg-accent/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {category.items.map((item) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      key={item.id}
                      className="group flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Image side */}
                      <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Wishlist Button */}
                        <button 
                          onClick={() => handleToggleWishlist(item)}
                          className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-md transition-all duration-300 z-20 ${isInWishlist(item.id) ? "bg-secondary text-white" : "bg-white/80 text-accent hover:bg-secondary hover:text-white"}`}
                        >
                          <Heart size={18} fill={isInWishlist(item.id) ? "currentColor" : "none"} />
                        </button>
                      </div>

                      {/* Content side */}
                      <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-3xl font-serif text-accent">{item.name}</h3>
                          <span className="text-secondary font-bold font-sans">{item.price}</span>
                        </div>
                        <p className="text-accent/60 leading-relaxed mb-8">{item.description}</p>

                        <div className="mt-auto flex items-center gap-4">
                          <button 
                            onClick={() => handleRequestSample(item.name)}
                            className="flex-1 bg-accent/5 text-accent hover:bg-secondary hover:text-white px-6 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
                          >
                            Request Sample
                          </button>
                          <button 
                            onClick={() => handleAddToCart(item)}
                            className="bg-accent text-white hover:bg-secondary px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                            title="Add to Bag"
                          >
                            <ShoppingBag size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Add to Bag</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Can't find what you're looking for?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">We source custom fabrics for exclusive production runs. Get in touch with our textile experts to discuss your bespoke requirements.</p>
          <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors duration-300 shadow-xl">
            Contact Our Experts
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

