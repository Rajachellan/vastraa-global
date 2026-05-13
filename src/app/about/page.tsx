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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight">
              About <span className="text-secondary">Vastraa Global</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              "Precision in Print, Excellence in Fabric. Turning your creative visions into reality, one print at a time."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story & Digital Evolution */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-secondary" />
                <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Heritage</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
                Since <span className="text-secondary">1975</span>
              </h2>
              <div className="space-y-6 text-accent/70 leading-relaxed text-lg">
                <p>
                  Our journey began in 1975, rooted in the rich traditions of screen printing. Over four decades, we honed our craft, developing a deep understanding of fabric behavior, color chemistry and textile art.
                </p>
                <p>
                  In 2018, we embraced the future of fabric printing by integrating advanced digital technologies into our operations. This evolution allowed us to achieve unparalleled precision, vibrant colors and intricate designs that were previously impossible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/digital_printing_closeup.png"
                alt="Digital Printing Evolution"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ISC & VastraaGlobal Link */}
      <section className="py-24 bg-bg-ivory border-y border-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
              Trust & <span className="text-secondary">Transparency</span>
            </h2>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-secondary/20">
  <p className="text-accent/80 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
    VastraaGlobal delivers premium textile printing solutions for global brands with a strong focus on quality, sustainability, innovation and responsible manufacturing standards.
  </p>

  <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-secondary">
    <span className="px-6 py-3 bg-secondary/5 rounded-full">GOTS Certified</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">GRS Certified</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">Sedex Member</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">OEKO-TEX 100</span>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
                Manufacturing <span className="text-secondary">Excellence</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-accent mb-2">Erode Facility</h4>
                    <p className="text-accent/60 leading-relaxed">
                      74A, Attayampalayam, East Colony, <br />
                      Gangapuram Post, Chithode, <br />
                      Erode 638102, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <p className="text-accent/70 leading-relaxed italic">
                  "At VastraaGlobal, we believe in turning your creative visions into reality, focusing on perfection, one print at a time."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/textile_gallery_showroom.png"
                alt="Factory Location"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

