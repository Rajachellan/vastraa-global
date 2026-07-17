"use client";

import {
  Gem,
  Wind,
  Waves,
  Palette,
  Shirt,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Gem,
    title: "Luxury-Inspired Texture",
    description:
      "Viscose fabrics offer a soft, premium feel with a refined texture that enhances modern fashion collections.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Wind,
    title: "Lightweight Breathable Garments",
    description:
      "Lightweight and breathable, viscose provides exceptional comfort while keeping garments cool throughout the day.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Waves,
    title: "Elegant Fabric Drape",
    description:
      "Its fluid nature creates graceful draping, making viscose perfect for flowing dresses, tops, and premium apparel.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Palette,
    title: "Vibrant Print Results",
    description:
      "Viscose delivers outstanding print quality with rich colors and detailed patterns for contemporary fashion designs.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Shirt,
    title: "Comfortable Everyday Wear",
    description:
      "Its smooth texture and soft feel make viscose an excellent choice for stylish, everyday clothing collections.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Sparkles,
    title: "Contemporary Fashion Silhouettes",
    description:
      "Fashion brands use viscose to create premium apparel with elegant silhouettes for modern, effortless style.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferViscose() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Viscose
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Viscose Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Viscose fabrics have become a favorite in modern fashion because
            they combine softness, fluid movement, and refined aesthetics.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands prefer viscose fabrics for:
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
            From dresses and co-ords to resort wear and designer garments,
            viscose fabrics help create effortlessly stylish fashion pieces.
          </p>
        </div>
      </div>
    </section>
  );
}