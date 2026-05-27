"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, Droplets, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { RelatedDesigns } from "@/components/RelatedDesigns";

export default function SustainableFabricsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/viscos.jpg"
          alt="Sustainable Fabrics" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 inline-block">
              Eco-Conscious Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Premium Quality <br />
              <span className="text-secondary italic">Responsible Sourcing</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Leading the shift towards a circular textile economy with low-impact materials and zero-waste production methods.
            </p>
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all shadow-2xl flex items-center gap-3">
              Explore Eco-Collection
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f4" fabricName="Sustainable" />

      {/* Philosophy */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 mx-auto mb-8">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Eco-Friendly Materials</h3>
              <p className="text-accent/60 leading-relaxed">
                From GOTS certified organic cotton to Tencel™ Lyocell, we prioritize fibers that regenerate our planet.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8">
                <Droplets size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Water Conservation</h3>
              <p className="text-accent/60 leading-relaxed">
                Our digital printing processes use 90% less water than traditional screen printing methods.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-8">
                <Recycle size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Low-Waste Production</h3>
              <p className="text-accent/60 leading-relaxed">
                Precision digital technology ensures minimal ink waste and fabric off-cuts in every production run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Printing Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-accent mb-8 leading-tight">
                Sustainable <br />
                <span className="text-secondary italic">Printing Methods</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent">
                    <Wind size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-2">Zero-VOC Inks</h4>
                    <p className="text-accent/60 leading-relaxed">
                      We use water-based pigment inks that are free from volatile organic compounds and heavy metals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent">
                    <Droplets size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-2">Eco-Curing Technology</h4>
                    <p className="text-accent/60 leading-relaxed">
                      Low-energy heat fixation processes that significantly reduce our carbon footprint compared to traditional steaming.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square relative rounded-[4rem] overflow-hidden border-8 border-bg-ivory shadow-2xl">
                <Image src="/images/sustainable-printing.png" alt="Eco Printing" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Our Global Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center gap-4">
              <Award size={48} className="text-secondary" />
              <span className="text-xs uppercase tracking-widest font-bold">GOTS Certified</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck size={48} className="text-secondary" />
              <span className="text-xs uppercase tracking-widest font-bold">OEKO-TEX® Standard 100</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Recycle size={48} className="text-secondary" />
              <span className="text-xs uppercase tracking-widest font-bold">Global Recycled Standard</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Leaf size={48} className="text-secondary" />
              <span className="text-xs uppercase tracking-widest font-bold">Better Cotton Initiative</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
