"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Globe, Award, Droplets, Sparkles, Zap, Activity, Layers, Binary } from "lucide-react";

export default function BlendsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/fabric-blend.png"
          alt="Premium Fabric Blends" 
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Engineered <span className="text-secondary">Blends</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              The best of both worlds. Combining natural luxury with technical performance. Explore our proprietary blends designed for the next generation of fashion.
            </p>
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Blend Intelligence</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Binary size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Hybrid Performance</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Combining the best traits of two or more fibers.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Layers size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Dimensional Stability</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Reduced shrinkage and improved wrinkle resistance.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Unique Textures</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Innovative surfaces that single-fiber fabrics can't achieve.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Print Versatility</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Engineered for both pigment and reactive digital inks.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Blends: The Science of Textile Synergy</h2>
                <p>
                  At VastraaGlobal, we view fabric blending as a scientific endeavor. By strategically combining different fibers, we can overcome the inherent limitations of each. Cotton provides softness but lacks the luster of silk; linen offers cooling but wrinkles easily; polyester adds strength but lacks breathability. Our engineered blends solve these challenges, providing B2B brands with textiles that perform as beautifully as they look.
                </p>
                <p>
                  Our R&D team in Erode, India, works continuously to develop proprietary blend ratios that optimize for digital print reception, hand-feel and longevity.
                </p>

                <h3 className="text-2xl font-serif text-accent">Our Signature Blends</h3>
                <p>
                  Explore some of our most popular hybrid textiles:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Silk-Cotton (Mashru)</div>
                    <p className="text-sm text-accent/50">Combining the luxury of silk on the face with the comfort of cotton on the back. A heritage luxury blend.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Linen-Viscose</div>
                    <p className="text-sm text-accent/50">The crisp, organic look of linen with the soft drape and wrinkle resistance of viscose. Perfect for contemporary tailoring.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Cotton-Modal-Silk</div>
                    <p className="text-sm text-accent/50">An ultra-soft, lightweight blend designed for premium scarves and luxury loungewear. Indistinguishable from pure silk.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Bamboo-Organic Cotton</div>
                    <p className="text-sm text-accent/50">Naturally anti-bacterial and incredibly absorbent. The ideal choice for sustainable activewear and towels.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Technical Challenges in Printing Blends</h2>
                <p>
                  Printing on blends is significantly more complex than printing on single-fiber fabrics. Because different fibers have different affinities for various ink types, achieving color uniformity requires deep technical expertise. 
                </p>
                <p>
                  At VastraaGlobal, we solve this through our <strong> Hybrid Ink Strategy</strong>. For natural-rich blends, we use high-viscosity reactive inks that can bridge the gap between different fiber types. For synthetic blends, our digital pigment process offers a "one-ink-fits-all" solution that delivers consistent color across the entire surface of the textile.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Activity size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Why B2B Brands Choose Blends</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Wrinkle Resistance</div>
                      <p className="text-sm text-white/60">Significantly reduces the need for ironing, improving consumer satisfaction.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Cost Optimization</div>
                      <p className="text-sm text-white/60">Achieve a luxury look and feel at a more competitive price point through smart fiber mixing.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Durability</div>
                      <p className="text-sm text-white/60">Engineered to withstand more wash cycles than pure natural fibers.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Unique "Hand"</div>
                      <p className="text-sm text-white/60">Create a signature feel for your brand that competitors can't easily replicate.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Innovation in the Weave</h2>
                <p>
                  Beyond just fiber ratios, we innovate in how these fibers are woven together. Our "Intelligent Weaves" can place silk fibers primarily on the surface of the fabric for maximum luster, while keeping breathable cotton against the wearer's skin. This technical sophistication is why VastraaGlobal is the preferred partner for innovative fashion brands worldwide.
                </p>
                <p>
                  Whether you are looking for a standard linen-cotton mix or a complex multi-fiber performance textile, we have the technical capability to develop and print it at scale.
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

