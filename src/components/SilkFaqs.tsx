"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import React from 'react'

function SilkFaqs() {
  const faqs = [
      {
        question: "What are Silk fabrics used for?",
        answer:
          "Silk fabrics are commonly used for luxury dresses, bridal wear, scarves, couture fashion, premium ethnic wear, and designer apparel collections.",
      },
      {
        question: " Why are silk fabrics considered luxurious?",
        answer:
          "Silk fabrics are valued for their natural sheen, smooth texture, lightweight comfort, and elegant drape, making them a premium fashion textile.",
      },
      {
        question: " Are silk fabrics breathable?",
        answer:
          "Yes. Silk fabrics are naturally breathable and lightweight, making them comfortable for both warm and cool climates.",
      },
      {
        question: "Are silk fabrics suitable for custom printing? ",
        answer:"Absolutely. Silk fabrics absorb dyes beautifully and provide vibrant, high-quality print results for luxury fashion collections.",
      },
      {
        question: "How should silk fabrics be maintained?",
        answer:
          "Silk fabrics should be handled gently and cleaned according to fabric care instructions to maintain their softness and luxurious appearance.",
      },
      {
        question: " Can Vastraa Global handle bulk Silk fabric orders?",
        answer:
          "Yes. Vastraa Global offers bulk Silk fabric manufacturing, custom printing, sampling, and export-quality textile production for fashion brands worldwide.",
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

export default SilkFaqs