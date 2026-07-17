"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import React from 'react'

function LinenFaqs() {
  const faqs = [
    {
      question: "What are Linen fabrics used for?",
      answer:
        "Linen fabrics are commonly used for resort wear, dresses, shirts, luxury apparel, lounge wear, and home textiles because of their breathable and elegant nature.",
    },
    {
      question: "Why are linen fabrics popular in fashion?",
      answer:
        "Linen fabrics are valued for their lightweight comfort, premium texture, natural cooling properties, and timeless fashion appeal.",
    },
    {
      question: "Are Linen fabrics sustainable?",
      answer:
        "Natural and organic cotton fabrics are considered more sustainable compared to many synthetic textiles, especially when responsibly sourced and manufactured.",
    },
    {
      question: " Are linen fabrics good for summer wear?",
      answer:
        "Absolutely. Linen fabrics are highly breathable and moisture-wicking, making them ideal for warm-weather and summer fashion collections. ",
    },
    {
      question: "Do linen fabrics wrinkle easily?",
      answer:
        "Yes. Linen naturally develops soft wrinkles, which are often appreciated as part of its relaxed and luxurious aesthetic.",
    },
    {
      question: " Can Vastraa Global handle bulk linen fabric orders?",
      answer:
        "Yes. Vastraa Global offers bulk linen fabric manufacturing, custom printing, sampling, and export-quality textile production for fashion brands worldwide.",
    },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(0);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
     <section className="py-10 md:py-18 bg-[#faf7f2]">
    
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

export default LinenFaqs