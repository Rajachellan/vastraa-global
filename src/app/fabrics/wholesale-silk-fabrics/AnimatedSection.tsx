"use client";

import {
  Crown,
  Waves,
  Feather,
  Shirt,
  Palette,
  Sparkles,
  Gem,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Crown,
    title: "Premium Luxury Appeal",
    description:
      "Silk fabrics offer an unmatched luxurious appearance, making them the preferred choice for premium fashion brands.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Waves,
    title: "Elegant Garment Flow",
    description:
      "The natural fluidity of silk creates graceful draping and elegant movement in every garment.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Feather,
    title: "Soft & Smooth Texture",
    description:
      "Silk delivers exceptional softness and a smooth finish that provides superior comfort and sophistication.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Shirt,
    title: "High-End Fashion Collections",
    description:
      "Luxury designers choose silk for premium apparel, creating timeless collections with refined elegance.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Palette,
    title: "Rich Color Absorption",
    description:
      "Silk beautifully absorbs dyes, producing vibrant colors and brilliant finishes for premium fashion designs.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Sparkles,
    title: "Lightweight Comfort & Couture",
    description:
      "Its lightweight, breathable feel makes silk ideal for couture, occasion wear, bridal fashion, and luxury evening garments.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferSilk() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Silk
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Silk Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Silk fabrics continue to define luxury fashion because they combine
            sophistication, comfort, and timeless style.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands prefer silk fabrics for:
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
            From runway collections to bridal fashion, silk fabrics help create
            garments that feel refined, graceful, and visually luxurious.
          </p>
        </div>
      </div>
    </section>
  );
}