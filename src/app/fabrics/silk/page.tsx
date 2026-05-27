"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Star, Globe, Zap, Heart, Droplets, Sparkles, Activity, Send, CheckCircle, Truck, Package, Layers, Palette, ArrowRight } from "lucide-react";
import { Toast } from "@/components/Toast";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { QuoteModal } from "@/components/QuoteModal";
import { RelatedDesigns } from "@/components/RelatedDesigns";

export default function SilkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleGetQuote = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Premium Mulberry Silk"
      />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/silk-close-up.png" 
          alt="Premium Mulberry Silk" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/30" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Mulberry <span className="text-secondary">Silk</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              The queen of textiles. Unrivaled luster, fluid drape and the ultimate canvas for high-definition digital printing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetQuote}
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-secondary/20"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f7" fabricName="Silk" />

      {/* Technical Details Section */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Fabric Quality</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Grade 6A Mulberry</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 12mm - 40mm Weights</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> OEKO-TEX® Certified</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Palette size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Printing Technique</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Reactive Dye Printing</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Double-Sided Support</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Vibrant Color Depth</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Package size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Minimum Orders</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 20 Meters MOQ</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Sample Runs Avail.</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Custom Widths</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Delivery & Bulk</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Express Air Cargo</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 5-10 Days Production</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Tiered Bulk Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar Highlights */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-accent text-white p-10 rounded-4xl sticky top-40 shadow-2xl">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Silk Mastery</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Sparkles className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold">Natural Luster</div>
                      <div className="text-xs text-white/50 leading-relaxed">Unique triangular prism fiber structure.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Activity className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold">Protein Fiber</div>
                      <div className="text-xs text-white/50 leading-relaxed">18 essential amino acids for skin health.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Droplets className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold">Moisture Wicking</div>
                      <div className="text-xs text-white/50 leading-relaxed">Can absorb 30% of its weight in moisture.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Globe className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold">Grade 6A</div>
                      <div className="text-xs text-white/50 leading-relaxed">Highest possible quality rating for silk.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Mulberry Silk: The Pinnacle of Luxury</h2>
                <p>
                  At VastraaGlobal, we specialize in Grade 6A Mulberry Silk — the finest silk available in the global market. Unlike wild silk (Tussah), which is harvested from various moths, Mulberry silk is produced by the Bombyx mori silkworm, which feeds exclusively on the leaves of the mulberry tree. This controlled diet and environment result in a fiber that is incredibly long, uniform and pure white.
                </p>

                <h3 className="text-2xl font-serif text-accent">Understanding "Momme" Weight</h3>
                <p>
                  Silk weight is measured in "momme" (pronounced moe-me), denoted by 'mm'. One momme is equal to 4.340 grams per square meter. At VastraaGlobal, we stock a range of weights tailored for specific applications:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">12 — 16 mm</div>
                    <p className="text-sm text-accent/50">Ideal for luxury scarves and light blouses. Offers a delicate, ethereal drape.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">19 — 22 mm</div>
                    <p className="text-sm text-accent/50">The industry standard for premium bedding and heavy-weight apparel. Incredibly durable.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Digital Printing on Silk: A Technical Challenge</h2>
                <p>
                  Silk is a protein fiber, which means it requires a different chemical approach than cellulose fibers like cotton or linen. To print on silk, we use specialized <strong> Reactive Inks</strong>. 
                </p>

                <div className="bg-accent text-white p-12 rounded-[4rem] my-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Shield size={160} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Luxury B2B Standards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Hand-Rolled Hems</div>
                      <p className="text-sm text-white/50">We offer artisanal hand-finishing for scarf collections.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Color Matching</div>
                      <p className="text-sm text-white/50">Precise matching to Pantone® Fashion, Home + Interiors (FHI) system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <FabricUpload />

      {/* Expert Consultation */}
      <ExpertConsultation />

      <Footer />
    </main>
  );
}

