"use client";

import {
  Layers3,
  ShieldCheck,
  Wind,
  Sparkles,
  Shirt,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Layers3,
    title: "Balanced Fibre Performance",
    description:
      "Blended fabrics combine two or more fibres to deliver the ideal balance of softness, durability, comfort, and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Strong & Easy to Maintain",
    description:
      "Compared to single-fibre fabrics, blends are more durable, wrinkle-resistant, and require less maintenance for everyday use.",
  },
  {
    icon: Wind,
    title: "Comfortable & Breathable",
    description:
      "Excellent breathability, improved drape, and lasting comfort make blended fabrics suitable across seasons and applications.",
  },
  {
    icon: Sparkles,
    title: "Premium Look & Feel",
    description:
      "Blended textiles provide an elegant finish while maintaining the natural characteristics of different fibres.",
  },
];

export default function WhyChooseBlendedFabrics() {
  return (
    <section className=" bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
              Why Choose Blended Fabrics
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              Engineered for
              <span className="text-secondary italic">
                {" "}Performance & Comfort
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Blended fabrics combine two or more fibres to create textiles that
              bring together the best qualities of each material. By blending
              different fibres, these fabrics deliver the perfect balance of
              comfort, durability, softness, and performance for modern textile
              applications.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Compared to single-fibre fabrics, blended fabrics are stronger,
              more resistant to wrinkles, easier to maintain, and provide
              improved breathability, elegant drape, and lasting comfort.
            </p>

            {/* Bottom Highlight */}
            <motion.div
              whileHover={{ y: -5 }}
              className="mt-10 rounded-3xl border border-secondary/20 bg-secondary/5 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center flex-shrink-0">
                  <Shirt size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Perfect for Modern Textile Applications
                  </h3>

                  <p className="mt-3 text-gray-600 leading-8">
                    Whether you're creating fashion apparel, home textiles,
                    accessories, or commercial products, blended fabrics offer a
                    versatile and reliable solution for premium textile
                    manufacturing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-gray-200 p-7 shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Icon
                      size={30}
                      className="text-secondary"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

            {/* Bottom CTA Card */}
            {/* <motion.div
              whileHover={{ y: -8 }}
              className="sm:col-span-2 rounded-3xl bg-gradient-to-r from-secondary to-green-600 text-white p-8"
            >
              <div className="flex items-center gap-4">
                <Home size={34} />

                <div>
                  <h3 className="text-2xl font-semibold">
                    Versatile Across Every Industry
                  </h3>

                  <p className="mt-3 text-white/90 leading-8">
                    Ideal for fashion apparel, uniforms, home textiles,
                    furnishings, accessories, hospitality products, and premium
                    commercial fabric collections.
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}