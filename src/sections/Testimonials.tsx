"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The print quality on their mulberry silk is unlike anything I've seen. The colors are vibrant and the detail is razor-sharp.",
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
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-accent mb-4">Kind Words</h2>
          <p className="text-accent/60">From our global community of designers and creators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-ivory p-10 rounded-3xl shadow-sm border border-accent/5 hover:shadow-md transition-shadow relative"
            >
              <Quote className="text-secondary opacity-20 absolute top-8 right-8" size={40} />
              <p className="text-accent/80 mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-serif text-lg text-accent">{t.author}</h4>
                <p className="text-secondary text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

