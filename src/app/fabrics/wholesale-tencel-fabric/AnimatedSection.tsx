"use client";

import {
  Leaf,
  Waves,
  Sparkles,
  Shirt,
  Droplets,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sparkles,
    title: "Ultra-Soft Feel",
    description:
      "Tencel™ fabrics offer an exceptionally soft and smooth texture, providing luxurious comfort for premium fashion collections.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Waves,
    title: "Premium Draping",
    description:
      "The natural fluidity of Tencel™ creates elegant draping and graceful movement, making garments look refined and sophisticated.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Leaf,
    title: "Sustainable Fashion Collections",
    description:
      "Produced from responsibly sourced wood fibres, Tencel™ supports eco-conscious fashion with environmentally responsible manufacturing.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Shirt,
    title: "Breathable Everyday Wear",
    description:
      "Its lightweight and breathable nature keeps garments comfortable throughout the day while maintaining a premium appearance.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Droplets,
    title: "Moisture Management",
    description:
      "Tencel™ naturally manages moisture, helping garments stay fresh, cool, and comfortable even during extended wear.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Palette,
    title: "Excellent Print Quality",
    description:
      "The smooth fibre surface delivers outstanding colour absorption and crisp digital printing for premium custom textile designs.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferTencel() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Tencel™
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Tencel™ Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Tencel™ fabrics have become a leading choice for modern fashion
            because they combine luxury, comfort, and sustainability.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands prefer Tencel™ fabrics for:
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
            From premium basics to luxury fashion collections, Tencel™ fabrics
            help brands deliver garments that are comfortable, elegant, and
            environmentally responsible.
          </p>
        </div>
      </div>
    </section>
  );
}