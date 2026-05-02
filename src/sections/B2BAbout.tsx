"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Advanced digital printing technology",
  "Custom-tailored solutions",
  "Sustainable & eco-friendly production",
  "Premium quality fabrics",
  "Wide material selection",
  "Trend-focused expertise",
  "Competitive pricing",
  "Fast turnaround time",
];

export const B2BAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-section" className="py-20 md:py-32 bg-white relative overflow-hidden" ref={ref}>

      <div className="container mx-auto px-6 relative z-10">

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-[0.25em] uppercase text-[10px] md:text-xs">Our Heritage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-8 leading-tight">
              About <span className="text-secondary">Vastraa Global</span>
            </h2>
            <div className="space-y-6 text-accent/60 text-base md:text-lg leading-relaxed">
              <p>
                Established in 1975, Vastraa Global began with traditional screen printing and evolved into a leader in digital textile printing.
              </p>
              <p>
                In 2018, we adopted advanced digital printing technologies, delivering precision, vibrant colors, and intricate designs across diverse fabrics.
              </p>
              <p>
                We transform creative ideas into reality with innovation, sustainability, and craftsmanship.
              </p>
            </div>
          </motion.div>

          {/* Overlapping Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white hidden md:block">
              <Image
                src="/images/warehouse.png"
                alt="Vastraa Global Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -left-10 bottom-0 w-[60%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white hidden md:block">
              <Image
                src="/images/textile_gallery_showroom.png"
                alt="Showroom"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Why Choose Us</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-accent">
            The Vastraa <span className="text-secondary">Advantage</span>
          </h3>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-bg-ivory border border-accent/5 hover:border-secondary/30 hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <CheckCircle2 size={24} className="text-secondary" />
                </div>
                <p className="font-serif text-base md:text-lg text-accent group-hover:text-secondary transition-colors duration-300">
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

