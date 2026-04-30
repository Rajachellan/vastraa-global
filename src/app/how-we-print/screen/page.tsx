"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Layers, Globe, Zap, Activity, Clock, Award } from "lucide-react";

export default function ScreenPrintingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/print-screen-premium.png" 
          alt="Traditional & Automated Screen Printing" 
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
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Master <span className="text-secondary">Screen</span> Printing</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Heritage meets high-volume efficiency. Our industrial screen printing facility bridges the gap between artisanal texture and global scale.
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
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Method</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Flat-Bed & Rotary Automated</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Capacity</div>
                      <div className="text-xs text-accent/50 leading-relaxed">50,000+ Meters / Day</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Special Effects</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Gold Foil, Puff, Metallic, Discharge</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Scale</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Ideal for 1,000+ meter runs</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Screen Printing: The Bedrock of Textile Art</h2>
                <p>
                  While digital printing offers incredible flexibility, industrial screen printing remains the undisputed king of volume and tactile special effects. At VastraaGlobal, we have maintained our heritage in screen printing since our inception in 1975, evolving from manual tables to high-speed, multi-color automated flat-bed and rotary lines.
                </p>
                <p>
                  For our B2B partners in mass-market fashion and home furnishings, screen printing provides the most cost-effective solution for large-scale production while offering a "richness" of color that is uniquely its own.
                </p>
                
                <h3 className="text-2xl font-serif text-accent">Our Screen Printing Portfolio</h3>
                <p>
                  We offer a range of screen-based techniques tailored for different fabric types and aesthetic goals:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-xl font-serif text-accent mb-2">Automated Flat-Bed</div>
                    <p className="text-sm text-accent/50 leading-relaxed">Maximum precision for large-scale designs. Ideal for home decor like table linens and curtains.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-xl font-serif text-accent mb-2">Rotary High-Speed</div>
                    <p className="text-sm text-accent/50 leading-relaxed">Unbeatable efficiency for continuous patterns. Best for fast-fashion garment production.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-xl font-serif text-accent mb-2">Discharge Printing</div>
                    <p className="text-sm text-accent/50 leading-relaxed">Removes the base color of the fabric while adding new color, resulting in an ultra-soft feel on dark fabrics.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-xl font-serif text-accent mb-2">Specialty Finishes</div>
                    <p className="text-sm text-accent/50 leading-relaxed">Incorporating foils, glitters, metallic inks, and high-density "puff" prints for boutique collections.</p>
                  </div>
                </div>

                <div className="my-16 rounded-4xl overflow-hidden aspect-video relative">
                  <Image src="/images/process-screen.png" alt="Screen Printing Process" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-serif text-accent">The VastraaGlobal Advantage</h2>
                <p>
                  The secret to great screen printing lies in the "screen" itself. We utilize high-tension mesh and laser-exposed emulsions to ensure that even our traditional prints have a level of detail that rivals digital. Our color-matching laboratory is equipped with automated dispensing systems, ensuring that color consistency is maintained across 100,000 meters just as accurately as it is for 1,000.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Globe size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">B2B Volume Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Economies of Scale</div>
                      <p className="text-sm text-white/60 leading-relaxed">Significantly lower per-meter costs for volume production (1,000m+).</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Color Vibrancy</div>
                      <p className="text-sm text-white/60 leading-relaxed">Thicker ink deposits allow for unmatched saturation on both light and dark bases.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Specialty Inks</div>
                      <p className="text-sm text-white/60 leading-relaxed">Access to textures and finishes (Foil, Puff) that digital printing cannot yet achieve.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Versatility</div>
                      <p className="text-sm text-white/60 leading-relaxed">Effective on almost any fabric type, from fine silks to heavy upholstery canvas.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Eco-Responsible Volume</h2>
                <p>
                  Volume manufacturing doesn't have to be environmentally destructive. VastraaGlobal has invested in a closed-loop screen washing system that recycles over 80% of the water used to clean printing frames. We have also transitioned our entire screen printing department to phthalate-free and PVC-free inks, ensuring that our high-volume output meets the most stringent global safety and environmental standards.
                </p>
                <p>
                  By partnering with us, brands can achieve mass-market price points while maintaining an ethical and sustainable supply chain.
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

