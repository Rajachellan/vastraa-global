"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Palette, Printer, Scissors, Home, Shirt, ShoppingBag, Fingerprint } from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Sampling",
    description: "Rapid prototyping and sample development for perfect color and design accuracy.",
    image: "/images/service-sampling.png"
  },
  {
    icon: Printer,
    title: "Fabric Printing",
    description: "High-definition digital pigment printing on a wide variety of premium fabrics.",
    image: "/images/service-printing.png"
  },
  {
    icon: Palette,
    title: "Textile Studio",
    description: "In-house design and consultation to bring your creative vision to reality.",
    image: "/images/service-studio.png"
  },
  {
    icon: Scissors,
    title: "Scarf Manufacturing",
    description: "End-to-end production of luxury scarves with precision hemming.",
    image: "/images/service-scarf.png"
  },
  {
    icon: ShoppingBag,
    title: "Accessory Manufacturing",
    description: "Bespoke production of textile accessories including bags and pouches.",
    image: "/images/service-accessory.png"
  },
  {
    icon: Home,
    title: "Homeware Manufacturing",
    description: "Custom printing and finishing for premium home decor and textiles.",
    image: "/images/service-homeware.png"
  },
  {
    icon: Shirt,
    title: "Garment Production",
    description: "Full-scale apparel manufacturing tailored to your exact specifications.",
    image: "/images/service-garment.png"
  },
];

export const ManufacturingCapabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-accent relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border border-white/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Services</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
            Comprehensive <span className="text-secondary">Capabilities</span>
          </h2>
          <p className="text-primary/50 text-lg leading-relaxed">
            From initial sampling to full-scale garment production, we offer end-to-end solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`group ${i === 6 ? "lg:col-start-2" : ""}`}
            >
              <div className="relative p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-700 h-full overflow-hidden group/card">
                {/* Background Image on Hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-110 group-hover/card:scale-100 transition-transform duration-1000"
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full text-center items-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-8 group-hover/card:bg-secondary/20 transition-colors duration-500">
                    <service.icon className="text-secondary" size={32} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-primary mb-4 group-hover/card:text-secondary transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary/50 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

