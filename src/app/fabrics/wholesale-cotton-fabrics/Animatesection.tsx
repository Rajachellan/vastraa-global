"use client";

import {
  Shirt,
  Palette,
  Leaf,
  Wind,
  Sparkles,
  Brush,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shirt,
    title: "Comfortable Everyday Wear",
    description:
      "Soft, breathable cotton fabrics that provide exceptional comfort for daily apparel.",
    animation: {
      y: [0, -8, 0],
    },
  },
  {
    icon: Palette,
    title: "Excellent Print Clarity",
    description:
      "Ideal surface for vibrant digital textile printing with rich color reproduction.",
    animation: {
      rotate: [0, 12, -12, 0],
    },
  },
  {
    icon: Leaf,
    title: "Sustainable Collections",
    description:
      "Natural cotton supports eco-conscious fashion and responsible manufacturing.",
    animation: {
      scale: [1, 1.15, 1],
    },
  },
  {
    icon: Wind,
    title: "Breathable & Lightweight",
    description:
      "Keeps garments fresh, cool and comfortable throughout every season.",
    animation: {
      x: [0, 6, -6, 0],
    },
  },
  {
    icon: Sparkles,
    title: "Premium Texture & Finish",
    description:
      "High-quality cotton delivers an elegant appearance with luxurious softness.",
    animation: {
      rotate: [0, 360],
    },
  },
  {
    icon: Brush,
    title: "Easy Dyeing & Customization",
    description:
      "Perfect for dyeing, printing and creating unique custom fabric collections.",
    animation: {
      y: [0, -5, 0],
      scale: [1, 1.08, 1],
    },
  },
];

export default function WhyFashionBrandsPreferCotton() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">

      <div className="container-site">

        {/* Heading */}
        <div className="max-w-7xl mx-auto ">

          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Why Choose Cotton
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
            Why Fashion Brands{" "}
            <span className="text-secondary italic">
              Prefer Cotton Fabrics?
            </span>
          </h2>

          {/* <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div> */}

          <p className="mt-3 text-gray-600 text-lg leading-9">
            Cotton fabrics are one of the most preferred materials in modern
            fashion because they adapt effortlessly to different styles,
            seasons and apparel categories.
          </p>

          <p className="mt-2 text-gray-600 text-lg leading-9">
            Fashion brands choose cotton fabrics for: 
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-5">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
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

      </div>

    </section>
  );
}