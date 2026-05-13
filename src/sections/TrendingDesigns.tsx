"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const designs = [
  {
    id: "td1",
    title: "Ethereal Florals",
    designer: "Sarah Jenkins",
    image: "/images/trending1.png"
  },
  {
    id: "td2",
    title: "Golden Hour",
    designer: "Studio Luxe",
    image: "/images/trending2.png"
  },
  {
    id: "td3",
    title: "Abstract Geometry",
    designer: "Marcello V.",
    image: "/images/trending3.png"
  },
  {
    id: "td4",
    title: "Heritage Motifs",
    designer: "Anita Rao",
    image: "/images/trending_textile_design_4.png"
  }
];

export const TrendingDesigns = () => {
  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleGetQuote = (design: any) => {
    setToast({ show: true, message: `Quote request for ${design.title} submitted! Our team will contact you.` });
  };

  const handleToggleWishlist = (design: any) => {
    toggleWishlist({
      id: design.id,
      name: design.title,
      image: design.image
    });
    if (!isInWishlist(design.id)) {
      setToast({ show: true, message: `${design.title} added to your favorites!` });
    }
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-accent text-center md:text-left mb-6 md:mb-0">
            Trending <span>Designs</span>
          </h2>
          <p className="text-accent/60 max-w-sm text-center md:text-right">
            Curated patterns and designer collaborations that are currently defining the season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-20">
                  <button 
                    onClick={() => handleToggleWishlist(design)}
                    className={`p-4 rounded-full transition-all duration-300 ${isInWishlist(design.id) ? "bg-secondary text-white" : "bg-white text-accent hover:bg-secondary hover:text-white"}`}
                  >
                    <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                  </button>
                  <button 
                    onClick={() => handleGetQuote(design)}
                    className="flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">Get Custom Quote</span>
                  </button>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-serif text-white mb-2">{design.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-secondary text-sm tracking-widest uppercase">By {design.designer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
