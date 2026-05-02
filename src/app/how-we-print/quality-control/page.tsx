"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Microscope, Award, Activity, CheckCircle2, Search } from "lucide-react";

export default function QualityControlPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/quality-control-premium.png" 
          alt="Quality Control and Technical Standards" 
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Quality <span className="text-secondary">Excellence</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              Precision is our religion. Explore our rigorous 4-stage audit system and technical standards that ensure zero defects for every meter.
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">Audit Highlights</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Inspection System</div>
                      <div className="text-xs text-accent/50 leading-relaxed">American 4-Point System</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Microscope size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Lab Testing</div>
                      <div className="text-xs text-accent/50 leading-relaxed">ISO 105 Compliant</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Search size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Color Review</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Spectrophotometer Analysis</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Tolerance</div>
                      <div className="text-xs text-accent/50 leading-relaxed">&lt; 0.5% Variation Goal</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">The VastraaGlobal Quality Manifesto</h2>
                <p>
                  At VastraaGlobal, we understand that for our B2B partners, quality is not just a preference — it is a contractual obligation. A single defect in a 1,000-meter roll can disrupt entire production lines. That's why we have implemented a "Zero-Defect" culture across our facility, powered by the industry-leading American 4-Point Inspection System.
                </p>
                <p>
                  Our quality control process is not just a final check; it is a continuous thread that runs from the moment raw fabric enters our warehouse to the final second before a shipment is sealed.
                </p>
                
                <h3 className="text-2xl font-serif text-accent">Our 4-Stage Quality Protocol</h3>
                <p>
                  Every order undergoes four distinct layers of scrutiny:
                </p>

                <div className="space-y-6 my-12">
                  <div className="flex gap-6 p-8 bg-bg-ivory rounded-3xl border border-accent/5 items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="text-2xl font-serif font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-accent mb-2">Grey Fabric Audit</h4>
                      <p className="text-sm text-accent/50 leading-relaxed">Before printing, raw (grey) fabric is checked for GSM accuracy, weaving defects, and moisture content. Any roll failing this audit is immediately rejected.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-8 bg-bg-ivory rounded-3xl border border-accent/5 items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="text-2xl font-serif font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-accent mb-2">Strike-Off Approval</h4>
                      <p className="text-sm text-accent/50 leading-relaxed">For every new design, a physical "strike-off" (sample) is printed and reviewed under controlled D65 light conditions against the digital master file.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-8 bg-bg-ivory rounded-3xl border border-accent/5 items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="text-2xl font-serif font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-accent mb-2">In-Process Monitoring</h4>
                      <p className="text-sm text-accent/50 leading-relaxed">Our printers are equipped with high-speed cameras and sensors that monitor ink flow and tension in real-time, instantly alerting technicians to any deviation.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-8 bg-bg-ivory rounded-3xl border border-accent/5 items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <span className="text-2xl font-serif font-bold">04</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-accent mb-2">Final 100% Inspection</h4>
                      <p className="text-sm text-accent/50 leading-relaxed">Every meter of finished fabric is passed over light-tables for a manual 4-point audit, checking for print consistency, handle, and width uniformity.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Technical Lab Standards</h2>
                <p>
                  Beyond visual aesthetics, we ensure the technical longevity of our textiles. Our in-house laboratory performs rigorous testing on every batch:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary" size={20} />
                      <span className="font-bold text-accent">Wash Fastness:</span>
                    </div>
                    <p className="text-sm text-accent/50 leading-relaxed">Tested according to ISO 105-C06 standards. We guarantee minimal color loss even after 50 intensive wash cycles.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary" size={20} />
                      <span className="font-bold text-accent">Rub Fastness:</span>
                    </div>
                    <p className="text-sm text-accent/50 leading-relaxed">Ensuring no color transfer (bleeding) occurs during physical friction. We consistently achieve Grade 4-5 (Dry).</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary" size={20} />
                      <span className="font-bold text-accent">Light Fastness:</span>
                    </div>
                    <p className="text-sm text-accent/50 leading-relaxed">Critical for home decor. Our pigment inks achieve Grade 6-7, ensuring designs remain vibrant under UV exposure.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-secondary" size={20} />
                      <span className="font-bold text-accent">Dimensional Stability:</span>
                    </div>
                    <p className="text-sm text-accent/50 leading-relaxed">We monitor shrinkage in both warp and weft directions, maintaining a strict tolerance of &lt; 3% for all natural fibers.</p>
                  </div>
                </div>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Shield size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">Global Certification & Compliance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">GOTS Approved</div>
                      <p className="text-sm text-white/60 leading-relaxed">Ensuring organic integrity throughout the printing and finishing chain.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">OEKO-TEX Standard 100</div>
                      <p className="text-sm text-white/60 leading-relaxed">Guaranteed free from harmful substances and safe for skin contact (even for infants).</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">ZDHC Compliant</div>
                      <p className="text-sm text-white/60 leading-relaxed">Zero discharge of hazardous chemicals across our entire production process.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">ISO 9001:2015</div>
                      <p className="text-sm text-white/60 leading-relaxed">Certified quality management systems that prioritize customer satisfaction and continuous improvement.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">The VastraaGlobal Guarantee</h2>
                <p>
                  Every shipment from our facility is accompanied by a comprehensive Quality Audit Report. We don't just ask you to trust us; we provide the data to prove our excellence. This transparency is why VastraaGlobal is the preferred partner for high-end export brands worldwide. 
                </p>
                <p>
                  When you choose VastraaGlobal, you aren't just choosing a printer; you are choosing a partner dedicated to protecting your brand's reputation through uncompromising quality.
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

