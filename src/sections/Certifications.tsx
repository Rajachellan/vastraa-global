"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    description: "Certified organic textiles from harvesting to manufacturing, ensuring environmental and social responsibility.",
    color: "#4CAF50",
  },
  {
    name: "GRS",
    fullName: "Global Recycle Standard",
    description: "Verifies the recycled content of products and sets stringent environmental and social criteria.",
    color: "#2196F3",
  },
  {
    name: "Sedex",
    fullName: "Supplier Ethical Data Exchange",
    description: "Ethical trade membership ensuring responsible and sustainable business practices across the supply chain.",
    color: "#FF9800",
  },
  {
    name: "OEKO-TEX",
    fullName: "Standard 100",
    description: "Tested for harmful substances — every component meets stringent human-ecological requirements.",
    color: "#00BCD4",
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 bg-bg-ivory relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Trust & Compliance</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6">
            Our <span className="text-secondary">Certifications</span>
          </h2>
          <p className="text-accent/60 text-base md:text-lg leading-relaxed">
            We maintain the highest industry standards through internationally recognized certifications.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl bg-white border border-accent/5 hover:border-secondary/20 transition-all duration-500 h-full flex flex-col items-center text-center hover:shadow-lg hover:shadow-secondary/5">
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${cert.color}10` }}
                >
                  <ShieldCheck size={32} style={{ color: cert.color }} strokeWidth={1.5} />
                </div>

                {/* Badge Name */}
                <h3 className="text-xl font-serif font-bold text-accent mb-1">{cert.name}</h3>
                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-4">{cert.fullName}</p>

                {/* Description */}
                <p className="text-sm text-accent/50 leading-relaxed">{cert.description}</p>

                {/* Bottom accent line */}
                <div className="mt-6 w-8 h-[2px] rounded-full transition-all duration-500 group-hover:w-16" style={{ backgroundColor: cert.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

