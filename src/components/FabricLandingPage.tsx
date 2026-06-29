"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  Package,
  Palette,
  Truck,
} from "lucide-react";
import { fabricProductHref } from "@/lib/fabricUrls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FabricMedia } from "@/components/FabricMedia";
import { FabricFaqs } from "@/components/FabricFaqs";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { QuoteModal } from "@/components/QuoteModal";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import { Toast } from "@/components/Toast";
import type { FabricCategory } from "@/lib/types";

type Props = {
  page: FabricCategory;
};

export function FabricLandingPage({ page }: Props) {
  const content = page.pageContent || {};
  const hero = content.hero || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const heroImage = hero.image || page.image || "/images/fabric-cotton.png";
  const heroTitle = hero.title || page.name;
  const heroHighlight = hero.highlight || page.name;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={page.name}
      />

      <Toast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src={heroImage} alt={page.name} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
              {heroTitle} <span className="text-secondary">{heroHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              {hero.subtitle || page.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-secondary/20"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products from admin — posted to this fabric page */}
      {page.items.length > 0 && (
        <section className="py-20 bg-bg-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-3">
                Our Collection
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-accent">
                {page.name} <span className="text-secondary">Products</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.items.map((item) => (
                <Link
                  key={item.id}
                  href={fabricProductHref(item)}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-accent/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <FabricMedia
                      image={item.image}
                      alt={item.name}
                      imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-accent group-hover:text-secondary transition-colors mb-2">
                      {item.name}
                    </h3>
                    {item.type && (
                      <p className="text-xs uppercase tracking-widest text-secondary/80 mb-2">{item.type}</p>
                    )}
                    <p className="text-sm text-accent/60 line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-secondary">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedDesigns fabricId={page.id} fabricName={page.name} />

      {/* Technical cards */}
      {content.technicalCards && content.technicalCards.length > 0 && (
        <section className="py-24 bg-bg-ivory">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.technicalCards.map((card, i) => {
                const icons = [Layers, Palette, Package, Truck];
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={card.title}
                    className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-serif text-accent mb-4">{card.title}</h4>
                    <ul className="space-y-3 text-sm text-accent/60">
                      {card.items.map((line) => (
                        <li key={line} className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-500 shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SEO content sections */}
      {content.sections && content.sections.length > 0 && (
        <section className="py-24 container mx-auto flex flex-col gap-10 px-6">
          {content.sections.map((section) => (
            <div key={section.id || section.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
                {section.heading}{" "}
                {section.highlight && (
                  <span className="text-secondary italic">{section.highlight}</span>
                )}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="text-gray-500 text-sm md:text-base">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Type cards (SEO) — shown when no products posted yet */}
      {page.items.length === 0 && content.typeCards && content.typeCards.length > 0 && (
        <section className="container mx-auto px-6 pb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
            Types of <span className="text-secondary italic">{page.name}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.typeCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold text-black mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Uses + features */}
      {(content.uses?.length || content.features?.length) && (
        <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.uses && content.uses.length > 0 && (
              <div className="bg-white rounded-[32px] p-8 border border-[#D4AF37]/20 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                  Best Uses of {page.name}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {content.uses.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {content.features && content.features.length > 0 && (
              <div className="bg-[#D4AF37] rounded-[32px] p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unique Characteristics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.features.map((item) => (
                    <div key={item} className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Why choose */}
      {content.whyChoose && content.whyChoose.length > 0 && (
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
            Why Choose <span className="text-secondary italic">Vastraa Global?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {content.faqs && <FabricFaqs faqs={content.faqs} title={`FAQs About ${page.name}`} />}

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
