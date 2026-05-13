"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    group: "Natural Fabrics",
    items: [
      {
        name: "Cotton",
        image: "/images/fabric-cotton.png",
        description: "Premium organic cotton ideal for fashion apparel and home textiles. Soft, breathable and sustainable.",
      },
      {
        name: "Linen",
        image: "/images/fabric-linen.png",
        description: "Luxurious natural linen with exceptional drape and texture. Perfect for summer collections.",
      },
    ],
  },
  {
    group: "Semi-Synthetic Fabrics",
    items: [
      {
        name: "Viscose",
        image: "/images/fabric-viscose.png",
        description: "Silky smooth viscose with vibrant color absorption. Excellent for fluid, draped garments.",
      },
    ],
  },
  {
    group: "Blended Fabrics",
    items: [
      {
        name: "Cotton-Linen",
        image: "/images/fabric-blends.png",
        description: "The best of both worlds — cotton softness meets linen structure for versatile design applications.",
      },
      {
        name: "Cotton-Viscose",
        image: "/images/fabric-viscose.png",
        description: "Breathable cotton paired with viscose sheen. Ideal for premium womenswear and resort collections.",
      },
      {
        name: "Cotton-Silk",
        image: "/images/silk-close-up.png",
        description: "Luxurious blend combining cotton durability with silk's elegant lustre for high-end apparel.",
      },
    ],
  },
];

export const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product-categories" className="py-24 md:py-32 bg-white relative" ref={ref}>
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
            <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Fabrics</span>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6">
            Exploring the Variety and Quality of <span className="text-secondary">Our Fabrics</span>
          </h2>
          <p className="text-accent/60 text-base md:text-lg leading-relaxed">
            From organic naturals to engineered blends — every fabric in our portfolio is curated for digital printing excellence.
          </p>
        </motion.div>

        {/* Category Groups */}
        {categories.map((category, groupIdx) => (
          <div key={groupIdx} className="mb-16 last:mb-0">
            {/* Group Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="flex items-center gap-4 mb-8"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent/40">{category.group}</h3>
              <span className="flex-1 h-[1px] bg-accent/5" />
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl overflow-hidden border border-accent/5 bg-bg-ivory hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-xl font-serif text-accent mb-2">{item.name}</h4>
                      <p className="text-sm text-accent/50 leading-relaxed mb-4">{item.description}</p>
                      <Link
                        href={`/fabrics?type=${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 text-secondary text-sm font-medium group/link hover:gap-3 transition-all duration-300"
                      >
                        View Details
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

