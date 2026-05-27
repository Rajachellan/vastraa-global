"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, Globe, Award, Droplets, Sparkles, Zap, Activity, TreeDeciduous, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { RelatedDesigns } from "@/components/RelatedDesigns";

export default function ViscosePage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Sustainable Viscose sent successfully!" });
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/printing-cloths (1).jpg"
          alt="Premium Sustainable Viscose" 
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Sustainable <span className="text-secondary">Viscose</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              The silky touch of nature. Derived from certified wood pulp, our viscose offers a luxurious drape and vibrant color clarity for the modern wardrobe.
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

      {/* Related Designs */}
      <RelatedDesigns fabricId="f3" fabricName="Viscose" />

      {/* Massive Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar Highlights */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-bg-ivory p-10 rounded-4xl border border-accent/5 sticky top-40 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Viscose Intelligence</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Silky Lustre</div>
                      <div className="text-xs text-accent/50 leading-relaxed">High-reflectivity fibers for elegant, fluid shine.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Droplets size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Superior Drapability</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Mimics the movement and feel of natural silk.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <TreeDeciduous size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Wood-Based</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Sourced from sustainably managed forests.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Color Vividness</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Excellent ink absorption for rich, deep tones.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Viscose: The Bridge Between Nature and Science</h2>
                <p>
                  Viscose (often called Rayon) is a semi-synthetic fiber that offers the best of both worlds: the breathability and comfort of a natural fiber with the consistency and performance of a manufactured one. At VastraaGlobal, we specialize in <strong>Lenzing™ Ecovero™</strong> and other FSC-certified viscose sources, ensuring that our production never contributes to the deforestation of ancient or endangered forests.
                </p>
                <p>
                  For our B2B clients in the contemporary womenswear and resort-wear markets, viscose is the undisputed leader for items requiring a soft "handle" and a fluid, feminine silhouette.
                </p>

                <h3 className="text-2xl font-serif text-accent">Technical Characteristics</h3>
                <p>
                  Viscose is unique in its ability to take on the characteristics of other fibers. Depending on the processing, it can feel like silk, wool, or cotton. At VastraaGlobal, we focus on high-twist viscose yarns that provide:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Viscose Challis</div>
                    <p className="text-sm text-accent/50">80-110 GSM. The most popular choice for printed dresses and skirts. Exceptional drape.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Viscose Georgette</div>
                    <p className="text-sm text-accent/50">Semi-transparent with a grainy texture. Ideal for luxury blouses and evening overlays.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Viscose Crepe</div>
                    <p className="text-sm text-accent/50">Highly textured with a beautiful "bounce." Perfect for premium tailoring and trousers.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Viscose-Modal</div>
                    <p className="text-sm text-accent/50">Enhanced softness and shrinkage resistance. The gold standard for luxury loungewear.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Digital Printing on Viscose</h2>
                <p>
                  Viscose is a dream canvas for digital printers. Because it is highly absorbent, the ink penetrates deeply into the fiber, resulting in a richness of color that is often superior to cotton. We primarily use <strong>Reactive Digital Printing</strong> for our viscose collections.
                </p>
                <p>
                  The chemical bond formed during reactive printing ensures that the vibrant designs are locked into the fiber, resisting fading even after multiple washes. Our precision print heads allow for the reproduction of intricate, high-definition patterns that make viscose garments stand out in the competitive retail market.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Activity size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Sustainable B2B Sourcing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">FSC® Certified</div>
                      <p className="text-sm text-white/60">100% of our wood pulp source is traceable to sustainably managed forests.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Closed-Loop Production</div>
                      <p className="text-sm text-white/60">Minimizing chemical emissions and recycling water during fiber manufacturing.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">No-Azo Dyes</div>
                      <p className="text-sm text-white/60">All our reactive inks are free from harmful Azo compounds.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Rapid Prototyping</div>
                      <p className="text-sm text-white/60">Digital workflow enables sample turnaround in as little as 48 hours.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Ethical Responsibility</h2>
                <p>
                  Historically, viscose production has been criticized for its chemical usage. At VastraaGlobal, we have made it our mission to only partner with fiber manufacturers who employ modern, closed-loop technology. This means that 99% of the solvents used to turn wood pulp into fiber are recovered and reused, preventing harmful chemicals from entering the local ecosystem.
                </p>
                <p>
                  When you choose VastraaGlobal viscose, you are choosing a fabric that is as gentle on the planet as it is on the skin.
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

