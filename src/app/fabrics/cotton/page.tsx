"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { QuoteModal } from "@/components/QuoteModal";
import { CheckCircle, Truck, Package, Layers, Palette, ArrowRight, } 
from "lucide-react";
import { Toast } from "@/components/Toast";
import { Leaf, Sun, Wind, Award, } from "lucide-react";
import { RelatedDesigns } from "@/components/RelatedDesigns";
export default function CottonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleGetQuote = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Organic Cotton"
      />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image
          src="/images/fabric-cotton.png"
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
              Premium Textile Solutions Tailored For You. From fabric selection to final print, we handle the rest.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetQuote}
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-secondary/20"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f1" fabricName="Cotton" />

      {/* Technical Details Section */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Fabric Quality</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 60s x 60s Combed</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 120 - 150 GSM</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> GOTS Certified</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Palette size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Printing Technique</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Digital Reactive</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> High-Density Pigment</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 300+ DPI Precision</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Package size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Minimum Orders</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 50 Meters MOQ</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Custom Width Options</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Multi-Design Support</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Delivery & Bulk</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 4-7 Days Delivery</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Global Doorstep Cargo</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Bulk Discounts Avail.</li>
              </ul>
            </div>
          </div>
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
                <h2 className="text-4xl font-serif text-accent">Custom Printing Solutions for Organic Cotton</h2>
                <p>
                  Cotton has been the cornerstone of the global textile industry for centuries. At VastraaGlobal, we treat this humble fiber with the reverence it deserves. Our cotton is not just a commodity; it is a meticulously managed agricultural product that forms the base of some of the world's most luxurious fashion collections.
                </p>
                <p>
                  Our sourcing begins in the fertile plains of India and Egypt, where we partner with small-scale cooperatives that practice organic farming. By avoiding synthetic fertilizers and pesticides, we ensure that the soil remains healthy for future generations while producing a fiber that is naturally stronger and softer than its conventional counterparts.
                </p>

                <h3 className="text-2xl font-serif text-accent">Tailored Textile Services: The B2B Rationale</h3>
                <p>
                  For our B2B partners, choosing organic cotton is as much a business decision as it is an ethical one. Consumers today are increasingly conscious of the provenance of their clothing. Providing garments made from certified organic cotton allows brands to command a premium price while ensuring compliance with international environmental standards.
                </p>

                <div className="bg-bg-ivory p-12 rounded-4xl border border-accent/5 my-12">
                  <h4 className="text-xl font-serif text-accent mb-6">Available Customization Options</h4>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <FabricUpload />

      {/* Expert Consultation */}
      <ExpertConsultation />

      <Footer />
    </main>
  );
}

