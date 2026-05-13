"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Layers, Droplets, Thermometer, ShieldCheck, Zap, Leaf } from "lucide-react";

export default function DigitalPigmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/printing-machine.png" 
          alt="Digital Pigment Printing" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/70" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Digital <span className="text-secondary">Pigment</span> Printing</h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              The future of sustainable textile production. High-fidelity results without the environmental footprint of traditional dyeing.
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
              <div className="bg-bg-ivory p-8 rounded-4xl border border-accent/5 sticky top-40">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Technical Specs</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Droplets className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold text-accent">Ink Type</div>
                      <div className="text-xs text-accent/50">Water-based Bio-Pigments</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Thermometer className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold text-accent">Curing Temp</div>
                      <div className="text-xs text-accent/50">160°C - 180°C</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Layers className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold text-accent">Max Width</div>
                      <div className="text-xs text-accent/50">180cm (71 inches)</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Zap className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="text-sm font-bold text-accent">Resolution</div>
                      <div className="text-xs text-accent/50">Up to 2400 DPI</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <p className="text-xl text-accent font-serif leading-relaxed">
                  "Digital pigment printing represents the most significant leap in textile sustainability since the industrial revolution. By eliminating the wash-and-steam cycle, we save millions of liters of water annually while delivering a level of detail previously impossible."
                </p>
                
                <h2 className="text-3xl font-serif text-accent">Understanding the Process</h2>
                <p>
                  Digital pigment printing is often called "the dry process" of textile decoration. In contrast to reactive, acid, or disperse printing — which rely on a chemical reaction between the dye and the fiber inside a steaming chamber — pigment printing uses physical adhesion.
                </p>
                <p>
                  The process begins with the preparation of the fabric. At VastraaGlobal, we use a specialized organic pre-coating that enhances the fabric's affinity for the pigment. This coating ensures that the ink droplets stay on the surface of the fiber rather than being absorbed too deeply, which results in sharper lines and more vibrant colors.
                </p>
                
                <h3 className="text-2xl font-serif text-accent">Step 1: Digital Pre-Treatment</h3>
                <p>
                  Unlike traditional batch-coating, our digital pre-treatment is applied exactly where the ink will land. This reduces chemical usage by up to 60%. The coating creates a "receptor layer" that bonds the pigment particles to the textile fibers during the heat-fixation stage.
                </p>

                <h3 className="text-2xl font-serif text-accent">Step 2: The Printing Phase</h3>
                <p>
                  We utilize industrial-grade Piezoelectric print heads. These heads use a microscopic ceramic crystal that expands when an electric charge is applied, physically pushing a precisely measured droplet of ink onto the fabric. Our machines can fire over 30,000 droplets per second per nozzle, allowing for incredible speed without sacrificing the 2400 DPI resolution.
                </p>

                <div className="bg-accent p-12 rounded-4xl text-white my-12">
                  <h4 className="text-2xl font-serif mb-6 text-secondary">Why choose Pigment for B2B?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Sustainability</div>
                      <p className="text-sm text-white/60 leading-relaxed">Uses 90% less water and 50% less energy than reactive printing. No post-wash required.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Versatility</div>
                      <p className="text-sm text-white/60 leading-relaxed">Works perfectly on natural fibers (Cotton, Linen), synthetics (Polyester) and complex blends.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Color Fastness</div>
                      <p className="text-sm text-white/60 leading-relaxed">Exceptional light fastness makes it the industry standard for home decor and upholstery.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="font-bold text-secondary text-sm uppercase tracking-widest">Speed</div>
                      <p className="text-sm text-white/60 leading-relaxed">Since there is no steaming or washing, the fabric is ready for dispatch immediately after printing.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Sustainability at Scale</h2>
                <p>
                  For our international B2B clients, sustainability is no longer a "nice-to-have" — it is a compliance requirement. Many of our partners in the EU and North America operate under strict environmental reporting standards. By choosing digital pigment printing, they significantly reduce their scope 3 emissions.
                </p>
                <p>
                  Traditional screen printing or reactive digital printing generates massive amounts of wastewater contaminated with excess dyes and heavy metals. This water must be treated in expensive ETP (Effluent Treatment Plants) before being discharged. Our pigment process is essentially "zero-discharge." The only water used is for cleaning the print heads, which amounts to less than 5 liters per day.
                </p>

                <h3 className="text-2xl font-serif text-accent">Ink Chemistry & Certifications</h3>
                <p>
                  The pigments we use at VastraaGlobal are water-based and contain zero VOCs (Volatile Organic Compounds). They are GOTS (Global Organic Textile Standard) approved, which is the gold standard for organic fiber processing. Furthermore, our entire process is ZDHC (Zero Discharge of Hazardous Chemicals) compliant, ensuring that no harmful substances are used at any stage of production.
                </p>

                <div className="flex items-start gap-6 p-8 bg-secondary/5 rounded-3xl border border-secondary/20 my-12">
                  <Leaf className="text-secondary shrink-0" size={32} />
                  <div>
                    <h4 className="text-lg font-serif text-accent mb-2">Environmental Impact Snapshot</h4>
                    <p className="text-sm text-accent/70 leading-relaxed">
                      A single order of 5,000 meters printed using our digital pigment process saves approximately 150,000 liters of water compared to traditional reactive printing. That is equivalent to the daily water consumption of 1,000 people.
                    </p>
                  </div>
                </div>

                <div className="my-16 rounded-4xl overflow-hidden aspect-video relative">
                  <Image src="/images/process-digital-pigment.png" alt="Digital Pigment Process" fill className="object-cover" />
                </div>

                <h2 className="text-3xl font-serif text-accent">The VastraaGlobal Advantage</h2>
                <p>
                  With 40 years in the industry, we have seen technology come and go. What sets us apart is our deep understanding of the "hand-feel" or handle of the fabric. Historically, pigment printing was criticized for making fabrics feel stiff or "rubbery." We have solved this through our proprietary enzyme-wash and softening processes applied post-curing.
                </p>
                <p>
                  Our finished pigment-printed cottons and linens have a soft, breathable touch that is indistinguishable from reactive prints, but with the durability and color-pop that only pigment can provide.
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

