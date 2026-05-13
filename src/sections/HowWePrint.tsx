"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Palette, Printer, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Design Submission",
    description: "Upload your custom designs or choose from our curated pattern library. We accept all major file formats.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Fabric Selection",
    description: "Choose from our premium fabric range — cotton, linen, viscose, or blends. We guide you to the perfect match.",
  },
  {
    icon: Printer,
    number: "03",
    title: "Digital Printing",
    description: "Your designs are printed using advanced digital pigment technology for vibrant, long-lasting colors.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Quality Check",
    description: "Every meter undergoes rigorous inspection — color accuracy, fastness, hand-feel and dimensional stability.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Dispatch",
    description: "Carefully packed and dispatched globally with full documentation for seamless customs clearance.",
  },
];

export const HowWePrint = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-print" className="py-24 md:py-32 bg-bg-ivory relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Process</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6">
            How We <span className="text-secondary">Print</span>
          </h2>
          <p className="text-accent/60 text-base md:text-lg leading-relaxed">
            From your design file to delivered fabric — a streamlined, transparent process built for global brands.
          </p>
        </motion.div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number + Icon */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-accent/5 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-secondary/20 transition-all duration-500 group-hover:-translate-y-2">
                      <step.icon className="text-accent group-hover:text-secondary transition-colors duration-500" size={28} strokeWidth={1.5} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-serif text-accent mb-3">{step.title}</h4>
                  <p className="text-sm text-accent/50 leading-relaxed max-w-[220px]">{step.description}</p>
                </div>

                {/* Arrow connector (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-[1px] h-8 bg-secondary/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

