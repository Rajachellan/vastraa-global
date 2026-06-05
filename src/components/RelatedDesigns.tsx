"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FabricMedia } from "@/components/FabricMedia";
import { Heart, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { motion } from "framer-motion";
import { fetchDesigns } from "@/lib/catalog";
import { designHref } from "@/lib/designs";
import type { ApiDesign } from "@/lib/types";

interface RelatedDesignsProps {
  fabricId: string;
  fabricName: string;
}

export const RelatedDesigns: React.FC<RelatedDesignsProps> = ({ fabricId, fabricName }) => {
  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const [relatedDesigns, setRelatedDesigns] = useState<ApiDesign[]>([]);

  useEffect(() => {
    fetchDesigns()
      .then((designs) =>
        setRelatedDesigns(
          designs
            .filter((d) => (d.suggestedFabrics || []).includes(fabricId))
            .slice(0, 3)
        )
      )
      .catch(() => setRelatedDesigns([]));
  }, [fabricId]);

  if (relatedDesigns.length === 0) return null;

  const handleToggleWishlist = (design: ApiDesign) => {
    toggleWishlist({
      id: design.id,
      name: design.name || design.title,
      image: design.image,
    });
    if (!isInWishlist(design.id)) {
      setToast({ show: true, message: `${design.name || design.title} added to your favorites!` });
    }
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
              Explore curated patterns that complement {fabricName.toLowerCase()}.
            </p>
          </div>
          <Link
            href="/designs"
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:text-secondary transition-colors group"
          >
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
              <Link href={designHref(design)} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <FabricMedia
                    image={design.image}
                    alt={design.name || design.title || "Design"}
                    imageClassName="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggleWishlist(design);
                    }}
                    className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-md transition-all duration-300 z-20 ${
                      isInWishlist(design.id)
                        ? "bg-secondary text-white"
                        : "bg-white/80 text-accent hover:bg-secondary hover:text-white"
                    }`}
                  >
                    <Heart size={18} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                  </button>
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full text-accent shadow-sm">
                      {design.style || design.category}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="p-10">
                <Link href={designHref(design)} className="block">
                  <h3 className="text-2xl font-serif text-accent mb-1 group-hover:text-secondary transition-colors">
                    {design.name || design.title}
                  </h3>
                </Link>
                {design.description ? (
                  <p className="text-sm text-accent/60 leading-relaxed mb-8 line-clamp-2">{design.description}</p>
                ) : null}
                <Link
                  href={designHref(design)}
                  className="text-accent hover:text-secondary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
