"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FabricMedia } from "@/components/FabricMedia";
import { getStaticFabricCatalog } from "@/lib/fabricCategories";

export const FeaturedCategories = () => {
  const categories = getStaticFabricCatalog().slice(0, 4);

  return (
    <section className="section-y bg-bg-ivory">
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="section-title font-serif text-accent mb-6">
              Our Curated <span>Collections</span>
            </h2>
            <p className="text-accent/70 leading-relaxed">
              Explore our wide range of high-quality fabrics, each selected for its superior texture and printing compatibility.
            </p>
          </div>
          <Link
            href="/fabrics"
            className="text-secondary font-medium border-b border-secondary pb-1 hover:text-accent hover:border-accent transition-all"
          >
            View All Fabrics
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/fabrics/${encodeURIComponent(category.slug)}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <FabricMedia
                    image={category.image}
                    alt={category.name}
                    imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors pointer-events-none" />
                </div>
                <h3 className="text-xl font-serif text-accent group-hover:text-secondary transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-accent/60">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
