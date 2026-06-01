"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import React from 'react'

function HowWePrintFaqs() {
    const faqs = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "We offer flexible MOQs starting as low as 10 meters for sampling, with scaled pricing for bulk orders of 500m and above.",
    },
    {
      question: "Which file formats do you accept for printing?",
      answer:
        "We recommend high-resolution TIFF, PDF, or AI files at 300 DPI for the best results. PSD files with layers are also accepted for color separation.",
    },
    {
      question: "Do you provide international door-to-door shipping?",
      answer:"Yes, we dispatch globally via DHL/FedEx for samples and manage sea/air freight for bulk, ensuring door-to-door delivery with full tracking.",
    },
    {
      question: "Can I request a physical sample before bulk?",
      answer:
        `Absolutely. We recommend a 2-meter  "Strike-off" to verify color accuracy and hand-feel before proceeding to bulk production.`,
    },
    {
      question: "Are your inks eco-friendly and safe?",
      answer:
        "Yes, we use OEKO-TEX Standard 100 certified digital pigment and reactive inks that are GOTS compliant and safe for skin contact.",
    },
    {
      question: "How long does the printing process take?",
      answer:
        "Standard lead time is 4–7 days for samples and 10–15 days for bulk orders, depending on fabric availability and order size.",
    },
     {
      question: "Do you offer fabric sourcing services?",
      answer:
        "Standard lead time is 4–7 days for samples and 10–15 days for bulk orders, depending on fabric availability and order size.",
    },
     {
      question: "How long does the printing process take?",
      answer:
        "Yes, we have a network of 50+ mills and can source custom weaves, GSMs, and sustainable fibers based on your brand's specifications.",
    },
    {
      question: "How do you handle color matching?",
      answer:
        "We use X-Rite spectrophotometers and match against Pantone TCX/TPG references or your physical lab dips for maximum precision.",
    },
     {
      question: "What is the washing fastness of your prints?",
      answer:
        "Our digital prints achieve a fastness rating of 4-5. They are machine washable and resistant to fading when handled according to care instructions.",
    },
    {
      question: "Can I send my own fabric for printing?",
      answer:
        "Yes, we offer Job-Work services. Fabric must be PFP (Prepared for Print) and we will require a small swatch for pre-production compatibility testing.",
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
        
                  {/* <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
                    Common Questions
                  </p> */}
        
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                    Frequently Asked Questions
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

export default HowWePrintFaqs