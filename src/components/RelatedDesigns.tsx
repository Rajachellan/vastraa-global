"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { designs } from "@/app/designs/data";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { motion } from "framer-motion";

interface RelatedDesignsProps {
  fabricId: string;
  fabricName: string;
}

export const RelatedDesigns: React.FC<RelatedDesignsProps> = ({ fabricId, fabricName }) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  
  const relatedDesigns = designs.filter(d => d.suggestedFabrics.includes(fabricId)).slice(0, 3);

  if (relatedDesigns.length === 0) return null;

  const handleToggleWishlist = (design: any) => {
    toggleWishlist({
      id: design.id,
      name: design.name,
      image: design.image
    });
    if (!isInWishlist(design.id)) {
      setToast({ show: true, message: `${design.name} added to your favorites!` });
    }
  };

  const handleGetQuote = (design: any) => {
    setToast({ show: true, message: `Quote request for ${design.name} submitted! Our team will contact you.` });
  };

  return (
    <section className="py-24 bg-bg-ivory border-t border-accent/5">
      <div className="container mx-auto px-6">
        <Toast
          isVisible={toast.show}
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif text-accent mb-4">
              Designs for <span className="text-secondary italic">{fabricName}</span>
            </h2>
            <p className="text-accent/60">
              Explore curated patterns and designs that perfectly complement the texture and drape of {fabricName.toLowerCase()}.
            </p>
          </div>
          <Link href="/designs" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-secondary transition-colors group">
            View All Designs
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {relatedDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-2xl transition-all duration-500"
            >
              <Link href={`/designs/${design.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={design.image}
                    alt={design.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                    <button
                      onClick={(e) => { e.preventDefault(); handleToggleWishlist(design); }}
                      className={`p-4 rounded-full transition-all duration-300 ${isInWishlist(design.id)
                        ? "bg-secondary text-white"
                        : "bg-white text-accent hover:bg-secondary hover:text-white"
                        }`}
                    >
                      <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); handleGetQuote(design); }}
                      className="bg-white text-accent px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest">Get Custom Quote</span>
                    </button>
                  </div>

                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full text-accent shadow-sm">
                      {design.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-10">
                <Link href={`/designs/${design.id}`} className="block">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-accent mb-1 group-hover:text-secondary transition-colors">{design.name}</h3>
                      <p className="text-xs text-secondary font-bold uppercase tracking-widest">By {design.designer}</p>
                    </div>
                  </div>
                </Link>

                <p className="text-sm text-accent/60 leading-relaxed mb-8 line-clamp-2">
                  {design.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-accent/5">
                  <div className="flex gap-4 text-[10px] text-accent/40 font-bold uppercase tracking-tighter">
                    <span>{design.resolution}</span>
                    <span>•</span>
                    <span>{design.format}</span>
                  </div>
                  <Link
                    href={`/designs/${design.id}`}
                    className="text-accent hover:text-secondary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors group/btn"
                  >
                    View Details
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Link href="/designs" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-secondary transition-colors">
            View All Designs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
