"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Faq = { question: string; answer: string };

export function FabricFaqs({ faqs, title = "FAQs" }: { faqs: Faq[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs?.length) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-10 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#D4AF37]/20 rounded-2xl overflow-hidden bg-[#faf7f2]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-semibold text-black text-sm md:text-base">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-[#D4AF37] shrink-0" />
                  ) : (
                    <Plus size={18} className="text-[#D4AF37] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
