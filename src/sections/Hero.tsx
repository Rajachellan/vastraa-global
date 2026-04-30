"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Premium Fabric Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-ivory/80 via-bg-ivory/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6">
              Exquisite Craftsmanship
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-accent mb-8 leading-[1.1]">
              Design Your Fabric, <br />
              <span>Define Your Style</span>
            </h1>
            <p className="text-lg text-accent/80 mb-10 leading-relaxed max-w-lg">
              Unlock your creativity with our premium custom printing services. From luxurious silks to organic cottons, bring your unique patterns to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="group">
                Explore Fabrics
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="outline" size="lg">
                Start Designing
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 right-[-10%] translate-y-[-50%] pointer-events-none hidden lg:block"
      >
        <span className="text-[20vw] font-serif font-bold text-accent whitespace-nowrap opacity-10">
          VASTRAA
        </span>
      </motion.div>
    </section>
  );
};
