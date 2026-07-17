"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import React from 'react'

function CottonFaqs() {
  const faqs = [
  {
    question: "What are cotton fabrics used for?",
    answer:
      "Cotton fabrics are widely used for apparel, dresses, shirts, kidswear, resort wear, home textiles, and premium fashion collections because of their comfort and versatility.",
  },
  {
    question: "Why are cotton fabrics popular in fashion?",
    answer:
      "Cotton fabrics are breathable, soft, durable, and skin-friendly, making them one of the most preferred textiles in the fashion industry.",
  },
  {
    question: "Are cotton fabrics suitable for custom printing?",
    answer:
      "Yes. Cotton fabrics provide excellent print clarity and are ideal for digital, reactive, and custom textile printing applications.",
  },
  {
    question: "Are cotton fabrics sustainable?",
    answer:
      "Natural and organic cotton fabrics are considered more sustainable compared to many synthetic textiles, especially when responsibly sourced and manufactured.",
  },
  {
    question: "Do cotton fabrics shrink after washing?",
    answer:
      "Some cotton fabrics may shrink slightly after the first wash if not pre-treated. Proper washing and care help maintain fabric quality and fit.",
  },
  {
    question: "Can Vastraa Global handle bulk cotton fabric orders?",
    answer:
      "Yes. Vastraa Global offers bulk cotton fabric manufacturing, custom printing, and export-quality production for fashion brands worldwide.",
  },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="py-16 md:py-24 bg-[#faf7f2]">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-6 text-center">

          <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
            Common Questions
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            FAQs About Cotton Fabrics
          </h2>

        </div>



        {/* FAQ List */}
        <div className="flex flex-col">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#D4AF37]/15 py-6"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-5 text-left"
                >

                  <h3 className="text-lg sm:text-xl font-semibold text-black leading-snug">
                    {item.question}
                  </h3>

                  <div className="mt-1 text-[#D4AF37] flex-shrink-0">
                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>

                </button>



                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>

     </section>
    </>
  )
}

export default CottonFaqs