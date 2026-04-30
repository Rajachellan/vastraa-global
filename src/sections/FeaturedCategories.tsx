"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Organic Cotton",
    image: "/images/cotton.png",
    href: "/fabrics?type=cotton",
    description: "Breathable and versatile"
  },
  {
    name: "Mulberry Silk",
    image: "/images/silk.png",
    href: "/fabrics?type=silk",
    description: "Luxurious and elegant"
  },
  {
    name: "Premium Linen",
    image: "/images/linen.png",
    href: "/fabrics?type=linen",
    description: "Natural and textured"
  },
  {
    name: "Custom Prints",
    image: "/images/custom.png",
    href: "/fabrics?type=custom",
    description: "Unique and personal"
  }
];

export const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-bg-ivory">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-accent mb-6">
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
              <Link href={category.href} className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/0 transition-colors" />
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

