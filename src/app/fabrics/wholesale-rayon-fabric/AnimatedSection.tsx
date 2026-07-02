"use client";

import {
  Feather,
  Waves,
  Wind,
  Palette,
  Sparkles,
  Shirt,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Feather,
    title: "Soft Premium Feel",
    description:
      "Rayon fabrics provide a luxuriously soft texture that delivers exceptional comfort for premium fashion apparel.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Waves,
    title: "Elegant Garment Drape",
    description:
      "Its natural fluidity creates graceful silhouettes, making rayon ideal for dresses, tops, skirts, and flowing garments.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Wind,
    title: "Breathable Everyday Wear",
    description:
      "Lightweight and breathable, rayon keeps garments comfortable for everyday wear across different seasons.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Palette,
    title: "Excellent Print Quality",
    description:
      "Rayon offers an excellent printing surface that produces sharp details, vibrant designs, and premium-quality textile prints.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Sparkles,
    title: "Rich Colour Appearance",
    description:
      "The smooth fibre structure absorbs dyes beautifully, resulting in rich colours and an elegant fabric finish.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Shirt,
    title: "Lightweight & Versatile Fashion",
    description:
      "Perfect for casual wear, occasion wear, and contemporary fashion collections that combine style with lasting comfort.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferRayon() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Rayon
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Rayon Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Rayon fabrics have become a favorite among fashion brands because
            they offer both style and comfort while supporting diverse garment
            designs.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands prefer rayon fabrics for:
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Top Gradient */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-secondary to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Animated Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <motion.div
                    animate={item.animation}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={2}
                      className="text-secondary"
                    />
                  </motion.div>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Content */}
        <div className="max-w-7xl mx-auto mt-10">
          <p className="text-gray-600 text-lg leading-9">
            From casual wear to occasion wear, rayon fabrics help brands create
            garments that look sophisticated while offering exceptional comfort.
          </p>
        </div>
      </div>
    </section>
  );
}