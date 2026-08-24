"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Palette, Printer, Scissors, Home, Shirt, ShoppingBag, Fingerprint } from "lucide-react";

const services = [
  {
    icon: Fingerprint,
    title: "Digital Fabric Printing ",
    description: "Advanced printing technology for vibrant and durable fabric prints. ",
    image: "/images/service-sampling.png"
  },
  {
    icon: Printer,
    title: "Custom Fabric Printing ",
    description: "Personalized printing solutions for fashion brands and designers.",
    image: "/images/service-printing.png"
  },
  {
    icon: Palette,
    title: "Fabric Sourcing ",
    description: "Premium fabrics carefully selected for digital fabric printing.",
    image: "/images/service-studio.png"
  },
  {
    icon: Scissors,
    title: "Design Support ",
    description: "Expert assistance to prepare artwork for the best printing results. ",
    image: "/images/service-scarf.png"
  },
  {
    icon: ShoppingBag,
    title: "Color Matching ",
    description: "Precise color reproduction for consistent print quality. ",
    image: "/images/service-accessory.png"
  },
  {
    icon: Home,
    title: "Quality Inspection ",
    description: "Every order is inspected to ensure high-quality printed fabrics. ",
    image: "/images/service-homeware.png"
  },
  {
    icon: Shirt,
    title: "Global Shipping ",
    description: "Fast and reliable delivery to customers across the world. ",
    image: "/images/service-garment.png"
  },
];

export const ManufacturingCapabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-y-lg bg-accent relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border border-white/5" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Digital Fabric Printing Services</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="section-title font-serif text-primary mb-6">
          Our <span className="text-secondary"> Digital Fabric Printing </span> Services
          </h2>
          <p className="text-primary/50 text-base md:text-lg leading-relaxed">
          Discover our end-to-end digital fabric printing solutions and expert services. 
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

