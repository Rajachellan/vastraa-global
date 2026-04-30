"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Experience Cutting-Edge Printing with Unmatched Quality",
    image: "/images/hero-b2b-new.png",
    ctaText: "Explore Our Designs",
    ctaLink: "/design-studio",
  },
  {
    id: 2,
    title: "Bring Your Custom Designs to Life",
    image: "/images/print-sublimation.png",
    ctaText: "Explore Our Premium Collection",
    ctaLink: "/fabrics",
  },
  {
    id: 3,
    title: "Creative Excellence Delivered with Precision",
    image: "/images/warehouse.png",
    ctaText: "Know About Us",
    ctaLink: "/about",
  }
];

export const B2BHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-accent">
      {/* Background Images Carousel */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt="Vastraa Global Hero"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 mt-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-4 mb-8"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-accent bg-secondary flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                      {i === 1 ? <Shield size={12} /> : i === 2 ? <Globe size={12} /> : <Zap size={12} />}
                    </div>
                  ))}
                </div>
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-[10px]">
                  Global Manufacturing Excellence
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                {slides[current].title.split(' ').map((word, i) => (
                  <span key={i}>
                    {i === 3 || i === 4 ? <span className="text-secondary">{word} </span> : `${word} `}
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light">
                Elevating global brands with 40+ years of textile heritage and state-of-the-art digital printing. Precision in every fiber.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={slides[current].ctaLink}
                  className="inline-flex items-center justify-center gap-4 bg-secondary text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 group shadow-2xl"
                >
                  {slides[current].ctaText}
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </Link>
                <Link
                  href="/how-we-print"
                  className="inline-flex items-center justify-center gap-4 border border-white/20 text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
                >
                  Our Process
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="flex items-center gap-4 mt-16">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full h-1 ${current === idx ? "w-12 bg-secondary" : "w-6 bg-white/30"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            {[
              { label: "Legacy", val: "40+ Years" },
              { label: "Capacity", val: "75K Meters" },
              { label: "Reach", val: "20+ Nations" },
              { label: "Lead Time", val: "4-7 Days" }
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="text-secondary font-bold uppercase tracking-widest text-[10px] opacity-80">{item.label}</div>
                <div className="text-2xl font-serif text-white">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

