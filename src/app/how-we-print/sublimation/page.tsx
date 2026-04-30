"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Droplets, Thermometer, Zap, Activity, Microscope, Layers } from "lucide-react";

export default function SublimationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/print-sublimation-premium.png" 
          alt="Digital Sublimation Transfer" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/60" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Sublimation <span className="text-secondary">Transfer</span> Printing</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Vibrant, permanent, and indestructible. The ultimate printing solution for high-performance activewear and polyester-rich textiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Massive Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar Stats/Highlights */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-bg-ivory p-8 rounded-4xl border border-accent/5 sticky top-40 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Technical Specs</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Ink Type</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Disperse Dye Sublimation Inks</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Thermometer size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Process</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Heat-Press Transfer (200°C)</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Base Fabric</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Polyester & Synthetic Blends</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Activity size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Durability</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Permanent Molecular Infusion</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Sublimation: Where Ink Becomes the Fiber</h2>
                <p>
                  Sublimation printing is a unique chemical process that relies on the transition of ink from a solid state directly to a gas, bypassing the liquid phase. When this gas meets the heated, open pores of a polyester fiber, it infuses itself into the material. As the fabric cools, the pores close, permanently trapping the ink inside.
                </p>
                <p>
                  At VastraaGlobal, our sublimation department is optimized for the high-performance demands of the modern activewear, swimwear, and technical apparel markets. 
                </p>
                
                <h3 className="text-2xl font-serif text-accent">The Two-Step Precision Method</h3>
                <p>
                  We utilize an indirect transfer method, which ensures the highest level of detail and color accuracy:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Step 1</div>
                    <div className="text-xl font-serif text-accent mb-2">Paper Printing</div>
                    <p className="text-sm text-accent/50 leading-relaxed">The design is printed in high-resolution onto specialized, FSC-certified heat-transfer paper using disperse inks.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Step 2</div>
                    <div className="text-xl font-serif text-accent mb-2">Calender Transfer</div>
                    <p className="text-sm text-accent/50 leading-relaxed">The paper and fabric are fed through a rotary calender at 200°C. The ink "sublimates" and infuses into the fabric instantly.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Performance Without Compromise</h2>
                <p>
                  The greatest advantage of sublimation is that it does not block the "breathability" of the fabric. Because the color is inside the fiber rather than on top of it, the moisture-wicking properties and airflow of technical textiles remain completely uncompromised.
                </p>
                <p>
                  Furthermore, sublimation prints are virtually indestructible. They will not crack, peel, or fade, even after years of intense UV exposure or aggressive laundering. This makes it the preferred choice for professional sports teams and high-end outdoor brands.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Shield size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Industrial B2B Capabilities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Photographic Detail</div>
                      <p className="text-sm text-white/60 leading-relaxed">Capable of reproducing complex photographic designs and gradients with 100% fidelity.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Neon & Fluorescent</div>
                      <p className="text-sm text-white/60 leading-relaxed">Specialized ink channels for high-visibility sportswear and vibrant fashion collections.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Eco-Paper Recycling</div>
                      <p className="text-sm text-white/60 leading-relaxed">Our transfer paper is collected and recycled post-production, minimizing operational waste.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Moisture Wicking</div>
                      <p className="text-sm text-white/60 leading-relaxed">The printing process maintains the technical "wicking" finish of high-end activewear bases.</p>
                    </div>
                  </div>
                </div>

                <div className="my-16 rounded-4xl overflow-hidden aspect-video relative">
                  <Image src="/images/process-sublimation.png" alt="Sublimation Printing Process" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-serif text-accent">Sustainable Synthetics</h2>
                <p>
                  While sublimation requires polyester, VastraaGlobal is a leader in printing on **Recycled Polyester (rPET)**. By pairing our waterless sublimation process with fabrics made from post-consumer plastic bottles, we provide a circular manufacturing solution for eco-conscious performance brands.
                </p>
                <p>
                  Our sublimation facility in India uses zero water in the transfer process and is powered by on-site renewable energy, making it one of the cleanest high-volume printing units in the region.
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

