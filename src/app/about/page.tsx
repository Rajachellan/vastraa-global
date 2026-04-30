"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Printer, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/warehouse.png"
          alt="About Vastraa Global"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-accent/70 backdrop-blur-[1px]" />
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Identity</span>
              <span className="w-12 h-[1px] bg-secondary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              About <span className="text-secondary">Vastraa Global</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              "Vastraa Global is a leading textile printing company specializing in digital fabric solutions for fashion, interiors, and lifestyle industries."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-accent">
              Our <span className="text-secondary">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-[2.5rem] bg-bg-ivory border border-accent/5 flex flex-col items-center text-center group hover:bg-accent hover:text-white transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
                <MapPin size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-white text-accent">UK Expertise</h3>
              <p className="text-accent/60 group-hover:text-white/70 leading-relaxed">
                Strategic insights and market understanding driven by our deep-rooted presence in the United Kingdom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-bg-ivory border border-accent/5 flex flex-col items-center text-center group hover:bg-accent hover:text-white transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
                <Printer size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-white text-accent">Digital Specialization</h3>
              <p className="text-accent/60 group-hover:text-white/70 leading-relaxed">
                State-of-the-art digital pigment printing technology for unparalleled detail and vibrant color reproduction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-10 rounded-[2.5rem] bg-bg-ivory border border-accent/5 flex flex-col items-center text-center group hover:bg-accent hover:text-white transition-all duration-500 hover:shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
                <Layers size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-white text-accent">Wide Fabric Range</h3>
              <p className="text-accent/60 group-hover:text-white/70 leading-relaxed">
                An extensive portfolio of natural, semi-synthetic, and blended fabrics curated for diverse applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

