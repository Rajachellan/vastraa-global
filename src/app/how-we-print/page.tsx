"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Microscope, PackageCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Step 1: Product Specification",
    points: [
      "Fabric details",
      "Design submission or selection",
      "Design customization support"
    ]
  },
  {
    icon: Microscope,
    title: "Step 2: Quality Control",
    points: [
      "Design approval",
      "Sample testing",
      "Eco-friendly process"
    ]
  },
  {
    icon: PackageCheck,
    title: "Step 3: Sampling & Approval",
    points: [
      "Swatch delivery",
      "Client approval",
      "Bulk production"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Step 4: After-Sales Support",
    points: [
      "Feedback collection",
      "Ongoing client relationship"
    ]
  }
];

export default function HowWePrintPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/print-sublimation.png"
          alt="How We Print"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-accent/60" />
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
              Our Fabric Printing <span className="text-secondary">Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              A transparent, meticulous, and collaborative approach to bringing your textile visions to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step UI (Timeline/Cards) */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
              >
                {/* Timeline connector */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 bottom-[-4rem] w-[2px] bg-secondary/20 group-hover:bg-secondary/50 transition-colors" />
                )}

                {/* Icon */}
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-accent/5 border border-accent/5 flex items-center justify-center shrink-0 z-10 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <step.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-accent/5 group-hover:shadow-xl transition-shadow duration-500 w-full">
                  <h2 className="text-3xl font-serif text-accent mb-6">{step.title}</h2>
                  <ul className="space-y-4">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-4 text-accent/70 text-lg">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif">Ready to bring your designs to life?</h2>
            <p className="text-white/60 text-lg">Partner with us for your next custom fabric printing project.</p>
            <button className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

