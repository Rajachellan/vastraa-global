"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, Globe, Award, Droplets, Zap, Activity, Recycle } from "lucide-react";

export default function SustainableFabricsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image 
          src="/images/fabric-sustainable-premium.png" 
          alt="Sustainable Textile Innovation" 
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Sustainable <span className="text-secondary">Innovation</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              Redefining the future of textiles. From recycled ocean plastics to hemp and bamboo, our sustainable collection is designed for a circular fashion economy.
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
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Eco Intelligence</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Recycle size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Circular Economy</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Upcycled and recycled fibers for zero-waste production.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Droplets size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Water Conscious</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Low-impact dyeing and waterless digital printing.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Award size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Fully Certified</div>
                      <div className="text-xs text-accent/50 leading-relaxed">GRS, GOTS, and OEKO-TEX compliant.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0 shadow-sm">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-accent">Traceable</div>
                      <div className="text-xs text-accent/50 leading-relaxed">Full transparency from raw material to finished meter.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-lg prose-accent max-w-none text-accent/70 space-y-8">
                <h2 className="text-4xl font-serif text-accent">Sustainability: The New Standard</h2>
                <p>
                  At VastraaGlobal, sustainability is not a marketing trend; it is the core of our manufacturing philosophy. We recognize that the textile industry is one of the most resource-intensive sectors in the world. Our "Sustainable Innovation" collection is our answer to the global call for a more ethical and circular fashion industry.
                </p>
                <p>
                  We have invested heavily in R&D to bring together a portfolio of fabrics that minimize environmental impact without sacrificing the luxury feel and performance that our B2B clients expect.
                </p>

                <h3 className="text-2xl font-serif text-accent">Our Next-Gen Eco Fabrics</h3>
                <p>
                  Beyond organic cotton and linen, we are pioneering the use of alternative fibers:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Recycled Polyester (rPET)</div>
                    <p className="text-sm text-accent/50">Made from post-consumer plastic bottles. GRS certified and perfect for high-performance sublimation printing.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Hemp Textiles</div>
                    <p className="text-sm text-accent/50">One of the most eco-friendly fibers on Earth. Naturally anti-bacterial and ultra-durable.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Bamboo Viscose</div>
                    <p className="text-sm text-accent/50">Fast-growing and requiring zero irrigation. Offers a silky, cool-to-the-touch feel.</p>
                  </div>
                  <div className="bg-bg-ivory p-8 rounded-3xl border border-accent/5">
                    <div className="text-2xl font-serif text-accent mb-2">Upcycled Cotton</div>
                    <p className="text-sm text-accent/50">Repurposed from textile waste, reducing the need for virgin cotton and saving thousands of liters of water.</p>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">Waterless Digital Printing</h2>
                <p>
                  The most significant environmental impact of our sustainable fabrics comes from how we decorate them. Traditional dyeing and screen printing are notorious for wastewater generation. At VastraaGlobal, we use **Waterless Digital Pigment Printing** for our sustainable collection.
                </p>
                <p>
                  This process uses 90% less water and 50% less energy than traditional methods. Because it requires no post-washing or steaming, the environmental footprint of each printed meter is drastically reduced. We use GOTS-certified, water-based inks that are free from heavy metals and toxic chemicals.
                </p>

                <div className="p-12 bg-accent text-white rounded-4xl relative overflow-hidden my-20 shadow-xl">
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Activity size={120} />
                  </div>
                  <h4 className="text-2xl font-serif mb-6 text-secondary relative z-10">B2B Ethical Compliance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">GRS Certified</div>
                      <p className="text-sm text-white/60">Global Recycled Standard verification for our recycled collections.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">ZDHC Compliant</div>
                      <p className="text-sm text-white/60">Zero Discharge of Hazardous Chemicals across our entire supply chain.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Life Cycle Analysis</div>
                      <p className="text-sm text-white/60">We provide environmental impact data (water/carbon savings) for your sustainability reports.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-secondary text-xs font-bold uppercase tracking-widest">Fair Trade</div>
                      <p className="text-sm text-white/60">Ensuring safe working conditions and fair wages for all our textile artisans.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-serif text-accent">The Path to Zero Waste</h2>
                <p>
                  Our goal is to become a zero-waste facility by 2030. We are already halfway there. All our paper waste from sublimation printing is recycled, and our fabric scraps are sold to local artisanal groups who repurpose them into rugs and home decor items.
                </p>
                <p>
                  When you partner with VastraaGlobal, you aren't just buying fabric; you are investing in a cleaner, more ethical future for the textile industry. Together, we can prove that fashion can be both beautiful and responsible.
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

