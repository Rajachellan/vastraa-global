"use client";

import React, { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FabricMedia } from "@/components/FabricMedia";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { Heart, ChevronDown, Award, Sparkles, Droplets, Info, Upload, CheckCircle } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { QuoteModal } from "@/components/QuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import { fetchFabricById, fetchFabricCatalog } from "@/lib/catalog";
import type { FabricItem } from "@/lib/types";

export default function FabricDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [fabric, setFabric] = useState<FabricItem | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [related, setRelated] = useState<FabricItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const [item, catalog] = await Promise.all([fetchFabricById(id), fetchFabricCatalog()]);
      if (cancelled) return;
      if (!item) {
        setLoading(false);
        return;
      }
      setFabric(item);
      const catId =
        typeof item.categoryId === "object" && item.categoryId
          ? item.categoryId._id
          : item.categoryId;
      const cat = catalog.find((c) => String(c._id || c.id) === String(catId));
      setCategoryName(cat?.name || (typeof item.categoryId === "object" ? item.categoryId.name : "") || "");
      setRelated(
        cat?.items.filter((i) => i.id !== item.id) ||
          catalog.flatMap((c) => c.items).filter((i) => i.id !== item.id).slice(0, 4)
      );
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("specs");

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col bg-bg-ivory">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-accent/40 pt-40">Loading fabric…</div>
      </main>
    );
  }

  if (!fabric) {
    notFound();
    return null;
  }

  const galleryImages = fabric.images && fabric.images.length > 0 ? fabric.images : [fabric.image];

  const showToast = (msg: string) => setToast({ show: true, message: msg });

  const handleToggleWishlist = () => {
    toggleWishlist(fabric);
    if (!isInWishlist(fabric.id)) {
      showToast(`${fabric.name} added to your favorites!`);
    } else {
      showToast(`${fabric.name} removed from your favorites!`);
    }
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />
      
      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productName={`${fabric.name} Fabric`}
        initialImage={galleryImages[activeImageIdx]}
      />

      {/* Related Designs */}
      <RelatedDesigns fabricId={fabric.id} fabricName={fabric.name} />

      <section className="container mx-auto px-6 pt-36 pb-24">
        {/* Main Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Image Gallery - Sticky */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-40">
            {/* Active Display Panel */}
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-accent/5 bg-white">
              <FabricMedia
                image={galleryImages[activeImageIdx]}
                alt={`${fabric.name} Detail View`}
                priority
                imageClassName="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="bg-accent/80 backdrop-blur-md text-[10px] text-white font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {fabric.gsm}
                </span>
                <span className="bg-secondary/90 backdrop-blur-md text-[10px] text-white font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                  {fabric.type}
                </span>
              </div>

              {/* Wishlist Button Overlay */}
              <button
                onClick={handleToggleWishlist}
                className={`absolute top-8 right-8 p-4 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${
                  isInWishlist(fabric.id) 
                  ? "bg-secondary text-white" 
                  : "bg-white/80 text-accent hover:bg-secondary hover:text-white"
                }`}
              >
                <Heart size={20} fill={isInWishlist(fabric.id) ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Thumbnail Slide Grid */}
            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin">
              {galleryImages.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIdx === idx 
                    ? "border-secondary scale-105 shadow-md" 
                    : "border-accent/10 hover:border-secondary/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <FabricMedia image={img} alt="Thumbnail view" imageClassName="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Detail Information & Specifications */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Header info */}
            <div>
              <div className="text-secondary text-xs uppercase tracking-[0.2em] font-bold mb-3">
                {categoryName}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6 leading-tight">
                {fabric.name}
              </h1>
              <p className="text-accent/60 text-lg leading-relaxed font-light">
                {fabric.description}
              </p>
            </div>

            {/* Visual Specs Indicators */}
            <div className="grid grid-cols-3 gap-4 border-y border-accent/5 py-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-accent/5">
                <Award className="text-secondary mx-auto mb-2" size={20} />
                <span className="block text-[10px] font-bold text-accent/40 uppercase tracking-wider">Weight</span>
                <span className="block text-sm font-semibold text-accent mt-1">{fabric.gsm}</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-accent/5">
                <Sparkles className="text-secondary mx-auto mb-2" size={20} />
                <span className="block text-[10px] font-bold text-accent/40 uppercase tracking-wider">Print Type</span>
                <span className="block text-xs font-semibold text-accent mt-1 leading-tight">{fabric.printing.split(' & ')[0]}</span>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-accent/5">
                <Droplets className="text-secondary mx-auto mb-2" size={20} />
                <span className="block text-[10px] font-bold text-accent/40 uppercase tracking-wider">MOQ</span>
                <span className="block text-sm font-semibold text-accent mt-1">{fabric.moq}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-accent text-white hover:bg-secondary px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl transition-all duration-300"
              >
                Inquire for Quote
              </button>
              
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-white text-accent hover:text-secondary border border-accent/10 hover:border-secondary px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Upload size={14} />
                Upload Design
              </button>
            </div>

            {/* Custom Interactive Accordion Section */}
            <div className="space-y-4">
              {/* Section 1: Specs */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("specs")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    Technical Specifications
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent/40 transition-transform duration-300 ${activeAccordion === "specs" ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === "specs" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/5 bg-bg-ivory/35"
                    >
                      <div className="p-6 text-sm text-accent/70 space-y-3">
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Composition:</strong> <span>{fabric.specs}</span></div>
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Fabric Type:</strong> <span>{fabric.type}</span></div>
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Weight Density:</strong> <span>{fabric.gsm}</span></div>
                        <div className="flex justify-between py-1"><strong className="text-accent/60">Printing Technology:</strong> <span>{fabric.printing}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Section 2: Usage */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("usage")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    Usage & Applications
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent/40 transition-transform duration-300 ${activeAccordion === "usage" ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === "usage" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/5 bg-bg-ivory/35"
                    >
                      <div className="p-6 text-sm text-accent/70 leading-relaxed">
                        <h4 className="font-bold text-accent mb-2">Recommended Applications:</h4>
                        <p>{fabric.usage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Section 3: Care */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("care")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    Care Instructions
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent/40 transition-transform duration-300 ${activeAccordion === "care" ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === "care" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/5 bg-bg-ivory/35"
                    >
                      <div className="p-6 text-sm text-accent/70 leading-relaxed">
                        <p>{fabric.care}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Section 4: Customization */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("customization")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    MOQ & Customization Details
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent/40 transition-transform duration-300 ${activeAccordion === "customization" ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === "customization" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/5 bg-bg-ivory/35"
                    >
                      <div className="p-6 text-sm text-accent/70 space-y-3">
                        <div><strong className="text-accent/60 block">Minimum Order Quantity:</strong> <span>{fabric.moq}</span></div>
                        <div><strong className="text-accent/60 block">Custom Options Available:</strong> <span>{fabric.customization}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-32 pt-20 border-t border-accent/5">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
              <h2 className="text-4xl font-serif text-accent">
                Related <span className="text-secondary italic">{categoryName}</span> Fabrics
              </h2>
              <Link 
                href="/fabrics" 
                className="text-secondary hover:text-accent font-bold uppercase tracking-widest text-xs border-b-2 border-secondary hover:border-accent pb-1 transition-all"
              >
                View Collection
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.slice(0, 3).map((item: any) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <FabricMedia
                      image={item.image}
                      alt={item.name}
                      imageClassName="object-cover transition-transform duration-750 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-serif text-accent group-hover:text-secondary transition-colors">{item.name}</h3>
                      <span className="text-[10px] text-accent/40 font-bold uppercase tracking-wider">{item.gsm}</span>
                    </div>
                    <p className="text-accent/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-2">{item.description}</p>
                    <Link 
                      href={`/fabrics/${item.id}`} 
                      className="text-accent group-hover:text-secondary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      View Product Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}
