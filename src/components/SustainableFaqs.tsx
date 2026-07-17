"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function SustainableFaqs() {
   const faqs = [
      {
        question: "What are sustainable fabrics?",
        answer:
          "Sustainable fabrics are textiles produced using eco-conscious materials and responsible manufacturing methods that reduce environmental impact. ",
      },
      {
        question: " Why are sustainable fabrics important in fashion?",
        answer:
          "Sustainable fabrics help reduce waste, support ethical production, and promote environmentally responsible fashion practices.",
      },
      {
        question: " Are sustainable fabrics comfortable to wear?",
        answer:
          "Yes. Many sustainable fabrics are breathable, soft, lightweight, and designed for long-lasting comfort.",
      },
      {
        question: " Which fabrics are considered sustainable?",
        answer:"Organic cotton, linen, hemp, bamboo, recycled textiles, and responsibly sourced viscose are commonly considered sustainable fabrics.",
      },
      {
        question: "Are sustainable fabrics suitable for premium fashion?",
        answer:
          "Absolutely. Sustainable fabrics are widely used in luxury fashion, designer collections, and contemporary premium apparel.",
      },
      {
        question: "Can Vastraa Global handle bulk sustainable fabric orders?",
        answer:
          "Yes. Vastraa Global offers bulk sustainable fabric manufacturing, custom printing, sampling, and export-quality textile production for fashion brands worldwide.",
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

export default SustainableFaqs