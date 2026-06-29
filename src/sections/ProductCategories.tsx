"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FabricMedia } from "@/components/FabricMedia";
import { getStaticFabricCatalog } from "@/lib/fabricCategories";

export const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const categories = getStaticFabricCatalog();

  return (
    <section id="product-categories" className="section-y-lg bg-white relative" ref={ref}>
      <div className="container-site">
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
          <h2 className="section-title font-serif text-accent mb-6">
            Exploring the Variety and Quality of <span className="text-secondary">Our Fabrics</span>
          </h2>
          <p className="text-accent/60 text-base md:text-lg leading-relaxed">
            From organic naturals to engineered blends — every fabric in our portfolio is curated for digital printing excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 3xl:gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-accent/5 bg-bg-ivory hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <FabricMedia
                    image={category.image}
                    alt={category.name}
                    imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-serif text-accent mb-2 capitalize">{category.name}</h4>
                  <p className="text-sm text-accent/50 leading-relaxed mb-4">
                    {category.description ||
                      `${category.items?.length || 0} premium fabric${(category.items?.length || 0) === 1 ? "" : "s"} available for custom printing.`}
                  </p>
                  <Link
                    href={`/fabrics?category=${encodeURIComponent(category.slug)}`}
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
    </section>
  );
};
