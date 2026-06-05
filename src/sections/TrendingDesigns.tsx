"use client";

import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FabricMedia } from "@/components/FabricMedia";
import { QuoteModal } from "@/components/QuoteModal";
import { fetchDesigns } from "@/lib/catalog";
import { designHref } from "@/lib/designs";
import type { ApiDesign } from "@/lib/types";

export const TrendingDesigns = () => {
  const { toggleWishlist, isInWishlist } = useStore();
  const [designs, setDesigns] = useState<ApiDesign[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const [quoteDesign, setQuoteDesign] = useState<ApiDesign | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const list = await fetchDesigns();
        if (!cancelled) setDesigns(list.slice(0, 4));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

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
    <section className="py-10 overflow-hidden relative">
      <Toast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <QuoteModal
        isOpen={!!quoteDesign}
        onClose={() => setQuoteDesign(null)}
        productName={quoteDesign?.name || quoteDesign?.title}
        initialImage={quoteDesign?.image}
        designId={quoteDesign?.id}
        designTitle={quoteDesign?.name || quoteDesign?.title}
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

        {loading ? (
          <div className="text-center py-16 text-accent/40">Loading designs…</div>
        ) : designs.length === 0 ? (
          <div className="text-center py-16 text-accent/40">
            No designs yet. Add designs in the admin panel under Design Studio.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group"
              >
                <Link href={designHref(design)} className="block">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <FabricMedia
                      image={design.image}
                      alt={design.name || design.title || "Design"}
                      imageClassName="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />

                    <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-20">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleWishlist(design);
                        }}
                        className={`p-4 rounded-full transition-all duration-300 ${isInWishlist(design.id) ? "bg-secondary text-white" : "bg-white text-accent hover:bg-secondary hover:text-white"}`}
                      >
                        <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setQuoteDesign(design);
                        }}
                        className="flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest">Get Custom Quote</span>
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 pointer-events-none">
                      <h3 className="text-2xl font-serif text-white mb-2">{design.name || design.title}</h3>
                      {design.designer ? (
                        <p className="text-secondary text-sm tracking-widest uppercase">By {design.designer}</p>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {designs.length > 0 ? (
          <div className="text-center mt-12">
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs border-b border-secondary pb-1 hover:text-accent hover:border-accent transition-all"
            >
              View all designs
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
