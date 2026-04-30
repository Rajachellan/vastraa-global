"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shirt, UploadCloud, Truck } from "lucide-react";

const steps = [
  {
    icon: <Shirt size={32} />,
    title: "Choose Your Fabric",
    description: "Select from our premium range of cotton, silk, linen, and sustainable blends."
  },
  {
    icon: <UploadCloud size={32} />,
    title: "Upload Your Design",
    description: "Upload your patterns or artwork. Our system supports high-resolution formats for precision."
  },
  {
    icon: <Truck size={32} />,
    title: "Print & Deliver",
    description: "We use state-of-the-art digital printing and ship your custom fabric directly to your door."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 charcoal-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            The Art of <span className="text-secondary">Creation</span>
          </h2>
          <p className="text-primary/70">
            A seamless process from concept to fabric. Bring your vision to life in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-primary/10 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary mb-8 transition-all duration-500 group-hover:bg-secondary group-hover:text-accent group-hover:border-secondary">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">{step.title}</h3>
              <p className="text-primary/60 leading-relaxed max-w-[280px]">
                {step.description}
              </p>
              
              <div className="mt-8 text-secondary font-serif text-3xl opacity-20">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

