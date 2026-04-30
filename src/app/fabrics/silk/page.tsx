"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Star, Globe, Zap, Heart, Droplets, Sparkles, Activity, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";

export default function SilkPage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Mulberry Silk sent successfully!" });
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Mulberry <span className="text-secondary">Silk</span></h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              The queen of textiles. Unrivaled luster, fluid drape, and the ultimate canvas for high-definition digital printing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRequestSample}
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-secondary/20"
            >
              <Send size={18} />
              Request Sample
            </motion.button>
          </motion.div>
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
                  At VastraaGlobal, we specialize in Grade 6A Mulberry Silk — the finest silk available in the global market. Unlike wild silk (Tussah), which is harvested from various moths, Mulberry silk is produced by the Bombyx mori silkworm, which feeds exclusively on the leaves of the mulberry tree. This controlled diet and environment result in a fiber that is incredibly long, uniform, and pure white.
                </p>
                <p>
                  The "6A" rating is a technical certification that accounts for evenness, cleanness, and tensile strength. For our B2B clients in the luxury evening-wear and scarf sectors, this level of purity is essential. It ensures that when the fabric is passed through our digital printers, the ink penetrates evenly, resulting in a vibrant, consistent color from the first meter to the thousandth.
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
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">30 — 40 mm</div>
                    <p className="text-sm text-accent/50">Heavy Crepe-de-Chine or Satin. Used for high-end tailoring and bridal couture.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">8 mm</div>
                    <p className="text-sm text-accent/50">Silk Chiffon. Transparent and fluid, perfect for overlays and multi-layered designs.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Digital Printing on Silk: A Technical Challenge</h2>
                <p>
                  Silk is a protein fiber, which means it requires a different chemical approach than cellulose fibers like cotton or linen. To print on silk, we use specialized **Reactive Inks**. 
                </p>
                <p>
                  The process involves pre-treating the silk with a specific chemical coating that prepares the protein chains to receive the dye. After printing, the silk must be steamed at a precise temperature and pressure. During steaming, the reactive dye forms a covalent bond with the silk fibers, becoming an integral part of the fabric rather than just sitting on the surface.
                </p>
                <p>
                  The result is a print with incredible depth of color and a "soft handle." The natural luster of the silk shines through the print, creating a luminosity that no other fiber can replicate.
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
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Ethical Silk</div>
                      <p className="text-sm text-white/50">Partnerships with cruelty-free "Ahimsa" silk farms available upon request.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Eco-Curing</div>
                      <p className="text-sm text-white/50">Low-energy steaming processes that protect the delicate protein structure.</p>
                    </div>
                  </div>
                </div>

                <div className="my-16 rounded-4xl overflow-hidden aspect-video relative shadow-2xl">
                  <Image src="/images/fabric-silk-2.png" alt="Silk Flow" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-serif text-accent">The Sustainability of Silk</h2>
                <p>
                  Silk is naturally one of the most sustainable fibers in the world. It is a renewable resource, fully biodegradable, and uses significantly less water than cotton production. At VastraaGlobal, we ensure that our silk sourcing is linked to sustainable forestry, as mulberry trees are excellent carbon sinks.
                </p>
                <p>
                  We also implement a "Zero-Waste" silk program, where off-cuts and spinning waste are collected and processed into recycled silk yarns or used as high-end insulation material, ensuring that nothing from this precious fiber is wasted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

