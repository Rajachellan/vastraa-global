"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, Globe, Award, Droplets, Thermometer, Wind, Activity, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";

export default function LinenPage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Premium Linen sent successfully!" });
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
          src="/images/fabric-linen-premium.png" 
          alt="Premium Belgian Linen" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Premium <span className="text-secondary">Linen</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Timeless, durable, and naturally cool. Sourced from the finest flax fields in Belgium and France. The ultimate choice for sustainable luxury.
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
              <div className="bg-bg-ivory p-10 rounded-4xl border border-accent/5 sticky top-40 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Linen Intelligence</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Thermometer size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Thermo-Regulating</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Naturally cools in summer and warms in winter.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Droplets size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Highly Absorbent</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Absorbs up to 20% of its weight in moisture.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Shield size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Incredibly Strong</div>
                      <div className="text-xs text-accent/50 leading-relaxed">2-3 times stronger than cotton, lasting for decades.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Leaf size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Low Impact</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Flax requires minimal water and no pesticides.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Linen: The Ancient Fiber of the Future</h2>
                <p>
                  Linen is one of the oldest textiles in human history, yet its properties make it more relevant today than ever. Derived from the resilient flax plant, linen is inherently sustainable. At VastraaGlobal, we source our flax from the European Flax® certified fields of Belgium and France, where the climate and soil provide the perfect conditions for long, high-quality fibers.
                </p>
                <p>
                  For our B2B partners, linen offers a unique value proposition: it is a "slow fashion" staple that never goes out of style. Its natural slub texture and characteristic "crispness" provide a tactile depth that synthetic fibers simply cannot mimic.
                </p>

                <h3 className="text-2xl font-serif text-accent">Our Linen Portfolio</h3>
                <p>
                  We offer a curated selection of linen weights and finishes, each optimized for digital printing:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">100% Pure Linen</div>
                    <p className="text-sm text-accent/50">160-200 GSM. The classic choice for resort wear, trousers, and luxury bedding.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Linen-Cotton Blend</div>
                    <p className="text-sm text-accent/50">Combines the durability of linen with the softness of cotton. High versatility.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Hand-Loomed Linen</div>
                    <p className="text-sm text-accent/50">For boutique collections requiring an artisanal, irregular texture.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Washed Linen</div>
                    <p className="text-sm text-accent/50">Enzyme-washed for an immediate "lived-in" softness and beautiful drape.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Digital Printing on Linen</h2>
                <p>
                  Linen's irregular surface texture (slubs) poses a challenge for traditional printing, but it is where **Digital Pigment Printing** truly shines. The digital print heads can "fly" over the surface irregularities, delivering ink precisely without the smearing that can occur with screen printing.
                </p>
                <p>
                  The result is a print that looks like it is part of the fiber's history. The natural flax color (often called 'oatmeal' or 'greige') serves as a beautiful base for muted, earthy tones and sophisticated botanical designs.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Activity size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Premium Export Standards</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">European Flax®</div>
                      <p className="text-sm text-white/60">Guaranteed origin and traceability for all our linen fibers.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Anti-Bacterial</div>
                      <p className="text-sm text-white/60">Naturally resistant to bacteria, mold, and moths.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">No-Chemical Finishing</div>
                      <p className="text-sm text-white/60">Mechanical softening processes used to avoid harsh chemicals.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Global Logistics</div>
                      <p className="text-sm text-white/60">Fast shipping to fashion hubs in the UK, Europe, and North America.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">The Sustainability of Flax</h2>
                <p>
                  Flax is a remarkable plant. It requires significantly less water than cotton and can grow in poor soil conditions where other crops would fail. Every part of the flax plant is used — the seeds for oil and food, the long fibers for linen, and the shorter fibers for paper and rope.
                </p>
                <p>
                  At VastraaGlobal, we champion linen as the ultimate "circular" textile. It is 100% biodegradable and, because of its extreme durability, garments made from our linen are meant to be passed down through generations, actively combating the "throwaway" culture of fast fashion.
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

