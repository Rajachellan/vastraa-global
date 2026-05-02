"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Shield, Globe, Award, Droplets, Sun, Wind, Activity, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";

export default function CottonPage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Organic Cotton sent successfully!" });
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
          src="/images/fabric_cotton.png"
          alt="Organic Cotton"
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Organic <span className="text-secondary">Cotton</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              The world's most beloved fiber, elevated. Sourced ethically, processed naturally, and printed with precision.
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
              <div className="bg-bg-ivory p-10 rounded-4xl border border-accent/5 sticky top-40">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Cotton Intelligence</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Leaf size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">100% Organic</div>
                      <div className="text-xs text-accent/50 leading-relaxed">GOTS certified, zero chemical pesticides or fertilizers.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Sun size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Breathability</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Natural air-flow for superior temperature regulation.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Wind size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Hypoallergenic</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Gentle on even the most sensitive skin.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Premium ELS</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Extra Long Staple fibers for unparalleled strength.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">The White Gold: A Journey from Seed to Loom</h2>
                <p>
                  Cotton has been the cornerstone of the global textile industry for centuries. At VastraaGlobal, we treat this humble fiber with the reverence it deserves. Our cotton is not just a commodity; it is a meticulously managed agricultural product that forms the base of some of the world's most luxurious fashion collections.
                </p>
                <p>
                  Our sourcing begins in the fertile plains of India and Egypt, where we partner with small-scale cooperatives that practice organic farming. By avoiding synthetic fertilizers and pesticides, we ensure that the soil remains healthy for future generations while producing a fiber that is naturally stronger and softer than its conventional counterparts.
                </p>

                <h3 className="text-2xl font-serif text-accent">Why Organic? The B2B Rationale</h3>
                <p>
                  For our B2B partners, choosing organic cotton is as much a business decision as it is an ethical one. Consumers today are increasingly conscious of the provenance of their clothing. Providing garments made from certified organic cotton allows brands to command a premium price while ensuring compliance with international environmental standards.
                </p>

                <div className="bg-bg-ivory p-12 rounded-4xl border border-accent/5 my-12">
                  <h4 className="text-xl font-serif text-accent mb-6">Our Cotton Varieties</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                      <div>
                        <div className="font-bold text-accent">Pima Cotton</div>
                        <div className="text-xs text-accent/50">Extra-long staple, silk-like feel.</div>
                      </div>
                      <span className="text-xs font-bold text-secondary">Premium</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                      <div>
                        <div className="font-bold text-accent">Giza 45</div>
                        <div className="text-xs text-accent/50">The "Queen" of Egyptian cotton.</div>
                      </div>
                      <span className="text-xs font-bold text-secondary">Elite</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-accent/5 pb-4">
                      <div>
                        <div className="font-bold text-accent">Supima®</div>
                        <div className="text-xs text-accent/50">US-grown, superior strength and color retention.</div>
                      </div>
                      <span className="text-xs font-bold text-secondary">Luxury</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Manufacturing Excellence: The Spinning & Weaving Process</h2>
                <p>
                  The quality of cotton fabric is determined long before it hits the printing machine. It starts with the "ginning" process, where fibers are separated from the seeds. Our fibers then undergo a "combing" process, which removes short fibers and impurities, leaving only the longest and strongest strands.
                </p>
                <p>
                  These strands are then spun into high-twist yarns. A higher twist results in a smoother yarn that is less prone to pilling and offers a more crisp "hand" to the finished fabric. Our weaving facility uses state-of-the-art air-jet looms that maintain perfect tension, ensuring that every meter of fabric has a consistent GSM (Grams per Square Meter) and zero defects.
                </p>

                <div className="grid grid-cols-2 gap-8 my-16">
                  <div className="space-y-4">
                    <div className="aspect-square relative rounded-3xl overflow-hidden shadow-lg">
                      <Image src="/images/fabric-cotton-2.png" alt="Cotton Texture" fill className="object-cover" />
                    </div>
                    <p className="text-xs text-accent/50 text-center">Macro view of our 60s combed cotton weave.</p>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="aspect-square relative rounded-3xl overflow-hidden">
                      <Image src="/images/printing-machine.png" alt="Cotton Printing" fill className="object-cover" />
                    </div>
                    <p className="text-xs text-accent/50 text-center">Precision digital pigment printing on organic base.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">The VastraaGlobal Printing Standard on Cotton</h2>
                <p>
                  Cotton is a highly absorbent fiber, making it an excellent candidate for digital printing. However, this absorbency can also lead to "wicking" — where the ink spreads along the fibers, resulting in blurry edges.
                </p>
                <p>
                  To prevent this, we apply a proprietary organic pre-treatment that "holds" the ink droplets on the surface of the fiber. This allows us to achieve incredibly sharp details, even in complex photographic prints or fine line-work. For our B2B clients, this means their designs are rendered with 100% accuracy, exactly as seen on the digital screen.
                </p>

                <h3 className="text-2xl font-serif text-accent">Longevity & Care</h3>
                <p>
                  One of the key concerns with printed cotton is "fading." Through our specialized heat-curing process, we ensure that the pigment particles are deeply bonded with the cotton fibers. Our printed cottons consistently achieve a Grade 4 or 5 on the ISO wash-fastness scale, meaning they will remain vibrant for years of regular use and laundering.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Activity size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Technical Performance Data</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Shrinkage</div>
                      <p className="text-sm text-white/60">Less than 3% in warp and weft after first wash.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">PH Value</div>
                      <p className="text-sm text-white/60">Maintained between 5.8 and 6.2 (Skin Neutral).</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Tensile Strength</div>
                      <p className="text-sm text-white/60">Exceeds ASTM D5034 standards for durability.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Breathability</div>
                      <p className="text-sm text-white/60">High Moisture Vapor Transmission Rate (MVTR).</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">A Commitment to the Future</h2>
                <p>
                  As we move towards a more circular economy, VastraaGlobal is pioneering the use of recycled cotton blends. By incorporating post-industrial cotton waste into our premium yarns, we reduce the demand for virgin cotton and prevent textile waste from ending up in landfills. This is the future of the industry, and we are proud to lead the way.
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

