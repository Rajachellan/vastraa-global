"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Droplets, Thermometer, Zap, Activity, Microscope, Wind } from "lucide-react";

export default function ReactivePrintingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/print-reactive-premium.png" 
          alt="Reactive Digital Printing" 
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
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Reactive <span className="text-secondary">Digital</span> Printing</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Deep fiber penetration for unrivaled color depth and softness. The gold standard for natural textiles like silk, cotton, and linen.
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
                      <Droplets size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Ink Type</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Fiber-Reactive Dyes</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Thermometer size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Fixation</div>
                      <div className="text-xs text-accent/50 leading-relaxed">High-Pressure Steaming</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Wind size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Hand-Feel</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Zero Surface Handle</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Activity size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Wash Fastness</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Grade 4-5 (ISO 105-C06)</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Reactive Printing: Bonding at a Molecular Level</h2>
                <p>
                  Unlike pigment printing, which sits on the surface of the fabric, reactive digital printing creates a covalent bond between the dye molecules and the textile fibers. This molecular fusion is what gives reactive prints their legendary color depth, vibrant brilliance, and absolute "no-feel" handle.
                </p>
                <p>
                  At VastraaGlobal, we utilize reactive printing primarily for our high-end natural fiber collections — Silk, Cotton, and Linen. For a designer, this process offers the ultimate creative freedom, as the colors become an integral part of the fabric's DNA.
                </p>
                
                <h3 className="text-2xl font-serif text-accent">The Reactive Workflow</h3>
                <p>
                  The reactive process is more complex and time-intensive than pigment printing, requiring multiple stages of treatment:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Stage 1</div>
                    <div className="text-xl font-serif text-accent mb-2">Coating</div>
                    <p className="text-sm text-accent/50 leading-relaxed">The fabric is padded with a specialized alkaline coating that prepares the fibers for the dye reaction.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Stage 2</div>
                    <div className="text-xl font-serif text-accent mb-2">Jet Printing</div>
                    <p className="text-sm text-accent/50 leading-relaxed">High-precision print heads deposit reactive dyes onto the coated surface in high resolution.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Stage 3</div>
                    <div className="text-xl font-serif text-accent mb-2">Steaming</div>
                    <p className="text-sm text-accent/50 leading-relaxed">The printed fabric is steamed in a pressurized chamber, triggering the chemical bond between dye and fiber.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-secondary font-bold text-xs uppercase mb-2">Stage 4</div>
                    <div className="text-xl font-serif text-accent mb-2">Washing</div>
                    <p className="text-sm text-accent/50 leading-relaxed">Extensive washing removes all unreacted dyes and chemicals, leaving only pure, bonded color.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Unrivaled Color Clarity</h2>
                <p>
                  Because reactive dyes are translucent and bond directly with the fiber, they allow the natural luster of the fabric to shine through. This is particularly evident on silk, where reactive printing produces a luminosity that pigment inks simply cannot match. The blacks are deeper, the reds more vibrant, and the gradients more fluid.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Microscope size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">B2B Technical Advantages</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Penetration</div>
                      <p className="text-sm text-white/60 leading-relaxed">Excellent through-print, ensuring the design is visible on the reverse side (crucial for scarves).</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Durability</div>
                      <p className="text-sm text-white/60 leading-relaxed">The highest possible wash-fastness. The print lasts as long as the garment itself.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Drape</div>
                      <p className="text-sm text-white/60 leading-relaxed">No change to the fabric's weight or flow. Perfect for fluid silhouettes.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Certified Inks</div>
                      <p className="text-sm text-white/60 leading-relaxed">Oeko-Tex Standard 100 and GOTS certified chemistry.</p>
                    </div>
                  </div>
                </div>

                <div className="my-16 rounded-4xl overflow-hidden aspect-video relative">
                  <Image src="/images/process-reactive.png" alt="Reactive Printing Process" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-serif text-accent">The VastraaGlobal Edge</h2>
                <p>
                  Managing the reactive process requires technical mastery. At VastraaGlobal, our chemists monitor every batch to ensure that the PH levels during pre-treatment and the humidity during steaming are perfectly balanced. This obsession with technical detail is why we are the preferred partner for premium fashion brands requiring flawless, museum-quality prints.
                </p>
                <p>
                  While the process takes longer than digital pigment, the result is a textile that is undeniably superior in touch and visual depth.
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

