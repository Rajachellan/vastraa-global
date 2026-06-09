"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FabricMedia } from "@/components/FabricMedia";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Search, ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { fetchDesigns, fetchDesignStyles } from "@/lib/catalog";
import { designHref } from "@/lib/designs";
import type { ApiDesign, DesignStyle } from "@/lib/types";

export default function DesignsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-ivory pt-40 text-center text-accent/40">Loading…</div>}>
      <DesignsPageContent />
    </Suspense>
  );
}

function DesignsPageContent() {
  const searchParams = useSearchParams();
  const styleParam = searchParams.get("style") || "";

  const [designs, setDesigns] = useState<ApiDesign[]>([]);
  const [designStyles, setDesignStyles] = useState<DesignStyle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const [designList, styles] = await Promise.all([
          fetchDesigns(styleParam || undefined),
          fetchDesignStyles(),
        ]);
        if (!cancelled) {
          setDesigns(designList);
          setDesignStyles(styles);
          if (styleParam) {
            const match = styles.find(
              (s) => s.slug === styleParam || s.name.toLowerCase() === styleParam.toLowerCase()
            );
            if (match) setActiveCategory(match.name);
          }
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [styleParam]);

  const categoryFilters = [
    "All",
    ...designStyles.map((s) => s.name),
  ];

  const filteredDesigns = designs.filter((design) => {
    const styleName = design.style || design.category || "";
    const matchesCategory =
      activeCategory === "All" ||
      styleName.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      (design.name || design.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (design.designer || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      <Toast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      
      />

      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif text-accent mb-8"
            >
              Custom <span className="text-secondary italic">Artistry</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-accent/60 leading-relaxed max-w-2xl"
            >
              Upload your design or choose from our curated patterns. Premium textile solutions tailored for your unique brand requirements.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white/50 backdrop-blur-md sticky top-[176px] z-30 border-y border-accent/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
            <div className="flex flex-wrap gap-3">
              {categoryFilters.map((cat) => (
                <Link
                  key={cat}
                  href={cat === "All" ? "/designs" : `/designs?style=${encodeURIComponent(cat)}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-white shadow-lg"
                      : "bg-white text-accent/40 hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

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

      <section className="py-24">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20 text-accent/40">Loading designs…</div>
          ) : filteredDesigns.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-accent/40">No designs found. Add designs in the admin panel.</p>
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
                  <Link href={designHref(design)} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <FabricMedia
                        image={design.image}
                        alt={design.name || design.title || "Design"}
                        imageClassName="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleToggleWishlist(design);
                          }}
                          className={`p-4 rounded-full transition-all duration-300 ${
                            isInWishlist(design.id)
                              ? "bg-secondary text-white"
                              : "bg-white text-accent hover:bg-secondary hover:text-white"
                          }`}
                        >
                          <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
                        </button>
                      </div>

                      <div className="absolute top-6 left-6 z-20">
                        <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full text-accent shadow-sm">
                          {design.style || design.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="p-10">
                    <Link href={designHref(design)} className="block">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-serif text-accent mb-1 group-hover:text-secondary transition-colors">
                            {design.name || design.title}
                          </h3>
                          {design.designer ? (
                            <p className="text-xs text-secondary font-bold uppercase tracking-widest">
                              By {design.designer}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </Link>

                    {design.description ? (
                      <p className="text-sm text-accent/60 leading-relaxed mb-8 line-clamp-2">
                        {design.description}
                      </p>
                    ) : null}

                    <div className="flex items-center justify-between pt-6 border-t border-accent/5">
                      <div className="flex gap-4 text-[10px] text-accent/40 font-bold uppercase tracking-tighter">
                        {design.resolution ? <span>{design.resolution}</span> : null}
                        {design.resolution && design.format ? <span>•</span> : null}
                        {design.format ? <span>{design.format}</span> : null}
                      </div>
                      <Link
                        href={designHref(design)}
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
          )}
        </div>
      </section>

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
