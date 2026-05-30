"use client";

import React, { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { notFound, useRouter } from "next/navigation";
import { Heart, ChevronDown, Check, Info, FileCode, Layers, ShieldCheck, ChevronRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { QuoteModal } from "@/components/QuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import { fetchDesignById, fetchFabricCatalog } from "@/lib/catalog";
import { designHref } from "@/lib/designs";
import type { ApiDesign, FabricItem } from "@/lib/types";

export default function DesignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [design, setDesign] = useState<ApiDesign | null>(null);
  const [relatedDesigns, setRelatedDesigns] = useState<ApiDesign[]>([]);
  const [allFabrics, setAllFabrics] = useState<FabricItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const [fetched, catalog] = await Promise.all([
        fetchDesignById(id),
        fetchFabricCatalog(),
      ]);
      if (cancelled) return;
      if (!fetched) {
        setLoading(false);
        return;
      }
      if (fetched.slug && fetched.slug !== id) {
        router.replace(designHref(fetched));
        return;
      }
      setDesign(fetched);
      setRelatedDesigns(fetched.relatedDesigns || []);
      const flatFabrics = catalog.flatMap((c) => c.items);
      const suggested = flatFabrics.filter((f) =>
        (fetched.suggestedFabrics || []).includes(f.id)
      );
      setAllFabrics(suggested.length > 0 ? suggested : flatFabrics.slice(0, 8));
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [id, router]);

  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedFabricId, setSelectedFabricId] = useState<string>("");
  const [activeAccordion, setActiveAccordion] = useState<string | null>("specs");

  useEffect(() => {
    if (design?.defaultFabricId) {
      setSelectedFabricId(design.defaultFabricId);
    } else if (allFabrics[0]?.id) {
      setSelectedFabricId(allFabrics[0].id);
    }
  }, [design, allFabrics]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col bg-bg-ivory">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-accent/40 pt-40">Loading design…</div>
      </main>
    );
  }

  if (!design) {
    notFound();
    return null;
  }

  const selectedFabric = allFabrics.find((f) => f.id === selectedFabricId) || allFabrics[0];
  const galleryImages = design.images && design.images.length > 0 ? design.images : [design.image];
  const designName = design.name || design.title;

  const showToast = (msg: string) => setToast({ show: true, message: msg });

  const handleToggleWishlist = () => {
    toggleWishlist({
      id: design.id,
      name: designName,
      image: design.image,
    });
    if (!isInWishlist(design.id)) {
      showToast(`${designName} added to your favorites!`);
    } else {
      showToast(`${designName} removed from your favorites!`);
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
        productName={`${designName} Pattern printed on ${selectedFabric?.name || "fabric"}`}
        initialImage={design.image}
        designId={design.id}
        designTitle={designName}
      />

      <section className="container mx-auto px-6 pt-36 pb-24">
        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Gallery - Sticky */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-40">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-accent/5 bg-white group">
              <Image 
                src={galleryImages[activeImageIdx]} 
                alt={`${design.name} Pattern Print`} 
                fill 
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              
              {/* Badge Overlay */}
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="bg-accent/80 backdrop-blur-md text-[10px] text-white font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  {design.category}
                </span>
                <span className="bg-secondary/90 backdrop-blur-md text-[10px] text-white font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                  {design.resolution}
                </span>
              </div>

              {/* Wishlist button */}
              <button
                onClick={handleToggleWishlist}
                className={`absolute top-8 right-8 p-4 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${
                  isInWishlist(design.id) 
                  ? "bg-secondary text-white" 
                  : "bg-white/80 text-accent hover:bg-secondary hover:text-white"
                }`}
              >
                <Heart size={20} fill={isInWishlist(design.id) ? "currentColor" : "none"} />
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
                  <Image src={img} alt="Thumbnail design view" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Detail Info, Selector & Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Header info */}
            <div>
              <div className="text-secondary text-xs uppercase tracking-[0.2em] font-bold mb-3">
                Design Studio / Curated Pattern
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-accent mb-3 leading-tight">
                {design.name}
              </h1>
              <div className="text-xs text-accent/40 font-bold uppercase tracking-widest mb-6">
                Designed by <span className="text-secondary">{design.designer}</span>
              </div>
              <p className="text-accent/60 text-lg leading-relaxed font-light">
                {design.description}
              </p>
            </div>

            {/* Fabric Selector Area */}
            <div className="border-y border-accent/5 py-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                <Layers size={14} className="text-secondary" />
                Select Fabric Print Medium:
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {allFabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabricId(fabric.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all ${
                      selectedFabricId === fabric.id
                      ? "border-secondary bg-white shadow-md ring-2 ring-secondary/15"
                      : "border-accent/5 bg-white/50 hover:bg-white hover:border-secondary/35"
                    }`}
                  >
                    <span className="flex items-center justify-between w-full">
                      <span className="font-serif text-sm font-bold text-accent">{fabric.name}</span>
                      {selectedFabricId === fabric.id && (
                        <span className="w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-white">
                          <Check size={10} strokeWidth={3} />
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] text-accent/40 uppercase font-bold tracking-tight mt-1">{fabric.gsm} • {fabric.type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-accent text-white hover:bg-secondary px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl transition-all duration-300"
              >
                Inquire With Selected Base
              </button>
              
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-white text-accent hover:text-secondary border border-accent/10 hover:border-secondary px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300"
              >
                Request Modification
              </button>
            </div>

            {/* Accordion Specs Section - Auto Updates based on Dynamic Base Selector */}
            <div className="space-y-4">
              {/* Technical Specifications */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("specs")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    Print & Fabric Specifications
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
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Selected Base:</strong> <span>{selectedFabric.name}</span></div>
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Composition:</strong> <span>{selectedFabric.specs}</span></div>
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Density / Weight:</strong> <span>{selectedFabric.gsm}</span></div>
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Resolution Available:</strong> <span>{design.resolution}</span></div>
                        <div className="flex justify-between py-1"><strong className="text-accent/60">Digital File Format:</strong> <span>{design.format}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Usage & Applications */}
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
                        <h4 className="font-bold text-accent mb-2">Recommended Application for {selectedFabric.name}:</h4>
                        <p>{selectedFabric.usage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Care Instructions */}
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
                        <p>{selectedFabric.care}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOQ & Printing Tech details */}
              <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleAccordion("printing")}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg hover:text-secondary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Info size={16} className="text-secondary" />
                    MOQ & Print Technology
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent/40 transition-transform duration-300 ${activeAccordion === "printing" ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeAccordion === "printing" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-accent/5 bg-bg-ivory/35"
                    >
                      <div className="p-6 text-sm text-accent/70 space-y-3">
                        <div className="flex justify-between py-1 border-b border-accent/5"><strong className="text-accent/60">Minimum Order:</strong> <span>{selectedFabric.moq}</span></div>
                        <div className="flex justify-between py-1"><strong className="text-accent/60">Printing Method:</strong> <span>{selectedFabric.printing}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* RELATED DESIGNS */}
        {relatedDesigns.length > 0 && (
          <div className="mt-32 pt-20 border-t border-accent/5">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
              <h2 className="text-4xl font-serif text-accent">
                More <span className="text-secondary italic">{design.category}</span> Patterns
              </h2>
              <Link 
                href="/designs" 
                className="text-secondary hover:text-accent font-bold uppercase tracking-widest text-xs border-b-2 border-secondary hover:border-accent pb-1 transition-all"
              >
                Browse Design Studio
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedDesigns.map((item: any) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-750 group-hover:scale-105" />
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-serif text-accent group-hover:text-secondary transition-colors">{item.name}</h3>
                      <span className="text-[10px] text-accent/40 font-bold uppercase tracking-wider">{item.category}</span>
                    </div>
                    <p className="text-accent/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-2">{item.description}</p>
                    <Link 
                      href={designHref(item)} 
                      className="text-accent group-hover:text-secondary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      View Pattern Details
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
