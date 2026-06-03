"use client";
import { Quote } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Exceptional fabric printing quality with rich colors, sharp detailing and consistent results across every production batch.",
    author: "Elena Rossi",
    role: "Fashion Designer"
  },
  {
    quote: "Vastraa Global has been instrumental in my last three collections. Their turnaround time and fabric selection are top-notch.",
    author: "Jameson Lee",
    role: "Textile Artist"
  },
  {
    quote: "Seamless process from upload to delivery. The organic cotton feels premium and holds the dye perfectly.",
    author: "Sophia Chen",
    role: "Independent Maker"
  },
  {
    quote:
      "From concept to final fabric, the entire process was seamless. Reliable quality and professional global service.",
    author: "Amelia Carter",
    role: "Apparel Manufacturer",
  },
  {
    quote:
      "Outstanding textile precision and premium finishing that perfectly matched our international quality standards.",
    author: "Sophia Bennett",
    role: "Luxury Fashion House",
  },
  {
    quote:
      "Professional service, fast delivery and world-class fabric printing support for our growing apparel brand.",
    author: "Ethan Walker",
    role: "Garment Exporter",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-14 bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-secondary text-md font-bold mb-4">
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-accent mb-6 leading-tight">
            Trusted By Global Textile Brands
          </h2>

          <p className="text-accent/70 text-lg leading-relaxed">
            Delivering premium fabric printing solutions with precision,
            consistency and world-class quality for fashion and textile
            businesses worldwide.
          </p>
        </div>

        {/* Slider */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials
            .slice(current, current + 3)
            .map((t, index) => (
              <div
                key={index}
                className="bg-bg-ivory p-15 rounded-3xl shadow-sm border border-accent/5 hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote
                  className="text-secondary opacity-20 absolute top-8 right-8"
                  size={42}
                />

                <p className="text-accent/80 mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-accent">
                    {t.author}
                  </h4>

                  <p className="text-secondary text-sm mt-2">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({
            length: testimonials.length - 2,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${current === index
                  ? "bg-secondary w-8"
                  : "bg-secondary/30 w-3"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

