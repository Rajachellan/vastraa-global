"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Upload, Sliders, Eye, CheckCircle2, Info, FileType, Palette, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function DesignStudio() {
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-bg-ivory relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6 leading-tight">
              Design <span className="text-secondary">Studio</span>
            </h1>
            <p className="text-xl text-accent/60 leading-relaxed max-w-2xl">
              From creative concept to technical reality. Upload your artwork and visualize it on our premium base fabrics with instant B2B quote generation.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Controls */}
            <div className="lg:col-span-4 space-y-10">
              {/* Progress */}
              <div className="flex justify-between items-center bg-bg-ivory p-6 rounded-3xl border border-accent/5">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      step >= s ? "bg-secondary text-white shadow-lg" : "bg-white text-accent/30"
                    }`}>
                      {step > s ? <CheckCircle2 size={20} /> : s}
                    </div>
                    <span className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                      step >= s ? "text-accent" : "text-accent/30"
                    }`}>
                      {s === 1 ? "Upload" : s === 2 ? "Adjust" : "Review"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-bg-ivory p-10 rounded-[3rem] shadow-sm border border-accent/5 space-y-10">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl font-serif text-accent">Upload Artwork</h3>
                        <p className="text-sm text-accent/50 leading-relaxed">Please ensure your files are in RGB color mode for maximum digital printing accuracy.</p>
                      </div>
                      
                      <div className="border-2 border-dashed border-accent/10 rounded-3xl p-12 text-center cursor-pointer hover:border-secondary transition-all group bg-white">
                        <Upload size={40} className="text-secondary mx-auto mb-6 group-hover:-translate-y-2 transition-transform" />
                        <p className="text-accent/60 text-sm mb-2 font-bold">Drag & Drop Files</p>
                        <p className="text-[10px] text-accent/30 uppercase tracking-widest">Max file size: 500MB</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-accent/60">
                          <FileType size={18} className="text-secondary" />
                          <span className="text-xs font-bold uppercase tracking-widest">TIFF, PSD, PNG, JPG</span>
                        </div>
                        <div className="flex items-center gap-3 text-accent/60">
                          <Palette size={18} className="text-secondary" />
                          <span className="text-xs font-bold uppercase tracking-widest">Adobe RGB (1998)</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-serif text-accent">Adjust Pattern</h3>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-accent/40">
                            <span>Scale</span>
                            <span>100%</span>
                          </div>
                          <input type="range" className="w-full accent-secondary" />
                        </div>
                        
                        <div className="space-y-4">
                          <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Repeat Style</label>
                          <div className="grid grid-cols-2 gap-3">
                            {["Basic Grid", "Half Drop", "Half Brick", "Mirror"].map((style) => (
                              <button key={style} className={`p-4 border rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                                style === "Basic Grid" ? "bg-secondary text-white border-secondary" : "bg-white text-accent/50 border-accent/5"
                              }`}>
                                {style}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-serif text-accent">Technical Review</h3>
                      <div className="bg-white p-6 rounded-3xl space-y-4 text-sm">
                        <div className="flex justify-between border-b border-accent/5 pb-3">
                          <span className="text-accent/50 uppercase tracking-widest text-[10px] font-bold">Resolution</span>
                          <span className="font-bold text-accent">300 DPI</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-3">
                          <span className="text-accent/50 uppercase tracking-widest text-[10px] font-bold">Dimensions</span>
                          <span className="font-bold text-accent">50cm x 50cm</span>
                        </div>
                        <div className="flex justify-between border-b border-accent/5 pb-3">
                          <span className="text-accent/50 uppercase tracking-widest text-[10px] font-bold">Color Profile</span>
                          <span className="font-bold text-accent">Adobe RGB</span>
                        </div>
                        <div className="flex justify-between text-secondary pt-2">
                          <span className="uppercase tracking-widest text-[10px] font-bold">Status</span>
                          <span className="font-bold">Ready for Print</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-4 pt-6">
                  {step > 1 && (
                    <button 
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-8 py-5 rounded-2xl border border-accent/10 text-xs font-bold uppercase tracking-widest text-accent/60 hover:border-secondary transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    onClick={() => step < 3 ? setStep(step + 1) : null}
                    className="flex-1 px-8 py-5 rounded-2xl bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    {step === 3 ? "Finalize Quote" : "Continue"}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Mockup */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/design-workspace.png" 
                  alt="Studio Workspace" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/10 transition-colors duration-500" />
                
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-2xl p-10 rounded-4xl border border-white/20">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-white p-2 shadow-xl">
                      <Image src="/images/trending1.png" alt="Swatch" width={80} height={80} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-serif text-white">Live Render Preview</h4>
                      <p className="text-white/60 text-sm">Visualizing "Botanical Noir" on Mulberry Silk Satin (19 Momme)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Content - 2000 Word Depth Start */}
      <section className="py-32 bg-bg-ivory">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="prose prose-xl prose-accent mx-auto space-y-16 text-accent/70">
            <div>
              <h2 className="text-5xl font-serif text-accent mb-10 leading-tight">Mastering the Digital Canvas</h2>
              <p className="text-xl leading-relaxed">
                Textile design is a unique discipline that bridges the gap between 2D graphic art and 3D industrial manufacturing. At VastraaGlobal, we provide the technical infrastructure that allows your digital creations to translate perfectly onto physical fabric.
              </p>
              <p className="mt-8">
                The most critical aspect of digital textile design is understanding the <strong>Repeat</strong>. A design must not only look good as a single tile but must flow seamlessly across hundreds of meters of fabric. Our Studio tool allows you to test various repeat styles — from the standard Grid to the more complex Half-Drop and Half-Brick configurations — in real-time. This prevents the "laddering" effect often seen in poorly constructed patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-serif text-accent mb-6">Technical File Preparation</h3>
                <p>
                  To achieve high-fidelity prints, your source files must meet our industrial standards. We recommend working in <strong>Adobe RGB (1998)</strong> color space. While sRGB is common for web, Adobe RGB offers a much wider gamut, particularly in the greens and cyans, which our 8-color ink system can reproduce faithfully.
                </p>
                <p className="mt-4">
                  Resolution is equally vital. For intricate patterns, we require a minimum of <strong>300 DPI</strong> (Dots Per Inch) at actual print size. Scaling up low-resolution images will result in pixelation and a loss of the "premium" feel that VastraaGlobal is known for.
                </p>
              </div>
              <div className="bg-white p-12 rounded-4xl border border-accent/5 shadow-sm space-y-8">
                <h4 className="text-xl font-serif text-secondary flex items-center gap-3">
                  <Info size={24} /> Designer's Checklist
                </h4>
                <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
                  <li className="flex items-center gap-4 text-accent/60">
                    <CheckCircle2 size={18} className="text-secondary" /> Color Mode: RGB
                  </li>
                  <li className="flex items-center gap-4 text-accent/60">
                    <CheckCircle2 size={18} className="text-secondary" /> Format: TIFF (LZA) or PNG
                  </li>
                  <li className="flex items-center gap-4 text-accent/60">
                    <CheckCircle2 size={18} className="text-secondary" /> Resolution: 300+ DPI
                  </li>
                  <li className="flex items-center gap-4 text-accent/60">
                    <CheckCircle2 size={18} className="text-secondary" /> Seamless Repeats Checked
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-accent mb-6">Color Management & Lab Dips</h3>
              <p>
                In the B2B world, color consistency is non-negotiable. A design approved on a monitor in London must match the fabric printed in Erode. However, because fabric absorbs light differently than a back-lit screen, "what you see is what you get" (WYSIWYG) is a challenge we tackle through rigorous calibration.
              </p>
              <p className="mt-4">
                We offer a <strong>Digital Lab Dip</strong> service. Before committing to a large production run, we print a "Strike-Off" — a 1-meter sample of your design on the chosen fabric. This allows you to verify color accuracy, detail retention and fabric handle (hand-feel) under real-world lighting conditions.
              </p>
            </div>

            <div className="bg-accent p-16 rounded-[4rem] text-white">
              <h3 className="text-4xl font-serif mb-10 text-secondary text-center">B2B Design Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-xl font-serif">IP Protection</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Your designs are stored on our secure, encrypted servers. We sign NDAs with all our B2B partners.</p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6">
                    <Palette size={32} />
                  </div>
                  <h4 className="text-xl font-serif">Color Matching</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Our specialists can match specific Pantone TPG or TCX codes within a Delta-E of 1.0.</p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6">
                    <Sliders size={32} />
                  </div>
                  <h4 className="text-xl font-serif">Pattern Services</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Need help making a design seamless? our in-house team offers technical cleanup services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

