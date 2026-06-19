"use client";

import { Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    quote: "Exceptional fabric printing quality with rich colors, sharp detailing and consistent results across every production batch.",
    author: "Elena Rossi",
    role: "Fashion Designer",
  },
  {
    quote: "Vastraa Global has been instrumental in my last three collections. Their turnaround time and fabric selection are top-notch.",
    author: "Jameson Lee",
    role: "Textile Artist",
  },
  {
    quote: "Seamless process from upload to delivery. The organic cotton feels premium and holds the dye perfectly.",
    author: "Sophia Chen",
    role: "Independent Maker",
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

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="testimonial-card bg-bg-ivory p-8 sm:p-10 rounded-3xl shadow-sm border border-accent/5 hover:shadow-xl transition-shadow duration-300 relative">
      <Quote
        className="text-secondary opacity-20 absolute top-6 right-6 sm:top-8 sm:right-8"
        size={36}
      />
      <p className="text-accent/80 mb-6 sm:mb-8 relative z-10 leading-relaxed text-sm sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-accent">{author}</h4>
        <p className="text-secondary text-sm mt-1 sm:mt-2">{role}</p>
      </div>
    </div>
  );
}

export const Testimonials = () => {
  const carouselItems = [...testimonials, ...testimonials];

  return (
    <section className="section-y bg-primary/30 overflow-hidden">
      <div className="container-site">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[0.2em] text-secondary text-md font-bold mb-4">
            Client Testimonials
          </p>
          <h2 className="section-title font-semibold text-accent mb-6 leading-tight">
            Trusted By Global Textile Brands
          </h2>
          <p className="section-subtitle text-accent/70 max-w-3xl mx-auto">
            Delivering premium fabric printing solutions with precision,
            consistency and world-class quality for fashion and textile
            businesses worldwide.
          </p>
        </div>

        {/* Continuous carousel — 2 cards visible on sm+, seamless loop */}
        <div className="relative w-full overflow-hidden">
          <div className="testimonial-carousel-track">
            {carouselItems.map((t, index) => (
              <TestimonialCard
                key={`${t.author}-${index}`}
                quote={t.quote}
                author={t.author}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
