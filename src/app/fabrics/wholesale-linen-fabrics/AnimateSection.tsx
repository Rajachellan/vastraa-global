"use client";

import {
  Gem,
  Wind,
  Leaf,
  Shirt,
  Sparkles,
  Brush,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Gem,
    title: "Premium Natural Texture",
    description:
      "Linen fabrics offer a rich natural texture that adds sophistication and a premium look to every fashion collection.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Wind,
    title: "Breathable Summer Wear",
    description:
      "Highly breathable and moisture-wicking, linen keeps garments cool and comfortable, making it ideal for warm-weather apparel.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Leaf,
    title: "Sustainable Fashion Collections",
    description:
      "Made from natural flax fibers, linen supports eco-friendly fashion with a lower environmental impact and long-lasting quality.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Shirt,
    title: "Relaxed Luxury Aesthetics",
    description:
      "Its effortless elegance and soft drape create timeless garments that perfectly blend comfort with luxury.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Sparkles,
    title: "Lightweight & Elegant Draping",
    description:
      "Linen provides lightweight construction with graceful draping, making it suitable for dresses, shirts, trousers, and resort wear.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Brush,
    title: "Minimal & Timeless Fashion",
    description:
      "Fashion brands rely on linen to create contemporary designs with clean silhouettes that remain stylish season after season.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferLinen() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Linen
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Linen Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Linen fabrics have become a staple in modern fashion because they
            combine sophistication with comfort and sustainability.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands prefer linen fabrics for:
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
            From resort wear to designer collections, linen fabrics help brands
            create garments that feel refined, natural, and contemporary.
          </p>
        </div>
      </div>
    </section>
  );
}