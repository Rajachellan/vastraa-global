"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Faq = {
  question: string;
  answer: string;
};

export function FabricFaqs({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: Faq[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs?.length) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-site max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
            Need Help?
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-black">
            {title}
          </h2>

          <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>
        </div>

        {/* FAQs */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-secondary shadow-xl bg-white"
                    : "border-gray-200 bg-white hover:border-secondary/40 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center gap-6 p-6 md:p-7 text-left"
                >
                  {/* Number */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${
                      isOpen
                        ? "bg-secondary text-white"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-black leading-8">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-secondary text-white"
                        : "bg-gray-100 text-secondary group-hover:bg-secondary/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 md:px-7 pb-7 pt-5">
                      <div className="pl-20">
                        <p className="text-gray-600 leading-8 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-1 bg-gradient-to-r from-secondary to-yellow-400 transition-all duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}