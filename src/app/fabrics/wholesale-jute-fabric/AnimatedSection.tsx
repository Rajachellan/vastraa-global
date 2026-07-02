"use client";

import {
  Leaf,
  ShieldCheck,
  Gem,
  Palette,
  Package,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Alternative",
    description:
      "Jute fabrics provide an eco-friendly alternative to synthetic materials, supporting environmentally responsible product manufacturing.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: ShieldCheck,
    title: "Exceptional Durability",
    description:
      "Strong natural fibres make jute fabrics durable enough for repeated use across a variety of commercial applications.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Gem,
    title: "Premium Natural Texture",
    description:
      "The distinctive rustic appearance of jute adds a premium natural look to bags, packaging, décor, and lifestyle products.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Palette,
    title: "Ideal for Custom Branding",
    description:
      "Its woven surface is well suited for custom branding, digital printing, screen printing, and promotional product applications.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Package,
    title: "Affordable Bulk Manufacturing",
    description:
      "Cost-effective production and wholesale availability make jute fabrics an excellent choice for large-scale manufacturing.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Layers,
    title: "Versatile Industry Applications",
    description:
      "Suitable for packaging, shopping bags, home textiles, agriculture, gifting, and many other commercial industries.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyBusinessesChooseJute() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container-site">
        {/* Heading */}
        <div className="max-w-7xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Jute
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Businesses{" "}
            <span className="text-secondary italic">
              Choose Wholesale Jute Fabrics?
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Businesses across industries prefer wholesale jute fabrics because
            they offer both environmental and commercial benefits.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Benefits include:
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
            As demand for sustainable products continues to grow, wholesale
            jute fabrics have become a preferred material for eco-conscious
            brands worldwide, offering an ideal combination of sustainability,
            durability, and commercial value.
          </p>
        </div>
      </div>
    </section>
  );
}