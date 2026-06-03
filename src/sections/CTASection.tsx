"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { Upload } from "lucide-react";
export const CTASection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <section className="py-14 ">
        <div className="container mx-auto px-6">
          <div className="premium-gradient rounded-[3rem] p-12 md:p-14 text-center shadow-xl border border-accent/5 overflow-hidden relative">
            
            {/* Decorative Circles */}
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-serif text-accent mb-8 leading-tight">
                Ready to <span>Transform</span> <br />
                Your Designs?
              </h2>

              <p className="text-accent/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Join thousands of designers who trust Vastraa Global for their
                premium fabric needs. Start your custom printing journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowQuoteForm(true)}
                >
                  Create Now
                </Button>

                <Button variant="outline" size="lg">
                  <Link href="/contact-us">Talk to a Designer</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-hidden">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#F8F5F0] p-8 md:p-12 shadow-2xl overflow-hidden">

            {/* Close */}
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-8">
               <img
                    src="/images/logo.png"
                    alt="Vastraa Global"
                    className="h-20 mx-auto mb-4"
                  />
              <h2 className="text-4xl font-serif font-bold text-[#0A2342]">
                Request a Custom Quote
              </h2>

              <div className="flex items-center justify-center gap-4 my-5">
                <div className="w-16 h-px bg-[#D4AF37]" />
                <div className="text-[#D4AF37]">✦</div>
                <div className="w-16 h-px bg-[#D4AF37]" />
              </div>

              <p className="text-gray-600">
                Share your requirements and our team will contact you shortly.
              </p>
            </div>

            {/* Form */}
         <form className="space-y-6">

  {/* Row 1 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Full Name *
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Email Address *
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid md:grid-cols-2 gap-5">
    

    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Phone / WhatsApp *
      </label>
      <input
        type="tel"
        placeholder="+91 XXXXX XXXXX"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Fabric Type
      </label>

      <input
        type="text"
        placeholder="Cotton, Silk, Linen..."
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Product Category
      </label>

      <select className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
        <option>Select Category</option>
        <option>Printed Fabrics</option>
        <option>Home Textiles</option>
        <option>Fashion Fabrics</option>
        <option>Custom Textile Design</option>
      </select>
    </div>
 <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Fabric GSM
      </label>
      <input
        type="text"
        placeholder="Enter fabric GSM"
       className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
    
  </div>

  {/* Row 4 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Quantity Required
      </label>

      <input
        type="text"
        placeholder="500 Meters"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Delivery Timeline
      </label>

      <input
        type="text"
        placeholder="Within 30 Days"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
  </div>

  {/* Description */}
  <div>
    <label className="block text-sm font-medium text-[#0A2342] mb-2">
      Query *
    </label>

    <textarea
      rows={6}
      placeholder="Describe your requirements, design ideas, printing preferences, colors, dimensions, quantity and any special instructions..."
      className="w-full rounded-xl border border-[#D4AF37] px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
    />
  </div>

  {/* Upload */}
  <div>
    <label className="block text-sm font-medium text-[#0A2342] mb-3">
      Upload Design / Artwork
    </label>

    <div
      className="
        border-2
        border-dashed
        border-[#D4AF37]
        rounded-3xl
        p-10
        text-center
        bg-white
        cursor-pointer
        hover:bg-[#FFFDF8]
        transition-all
      "
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
        <Upload size={32} className="text-[#D4AF37]" />
      </div>

      <h4 className="text-lg font-semibold text-[#0A2342]">
        Upload Your Design Files
      </h4>

      <p className="text-sm text-gray-500 mt-2">
        Drag & Drop or Click to Upload
      </p>

      <p className="text-xs text-gray-400 mt-3">
        JPG, PNG, PDF, AI, PSD (Max 20MB)
      </p>
<div className="flex justify-center mt-5">
  <input
    type="file"
    className="
      text-sm
      text-gray-500
      file:py-2
      file:px-6
      file:mx-5
      file:rounded-full
      file:border-0
      file:text-sm
      file:font-semibold
      file:bg-[#D4AF37]
      file:text-white
      hover:file:bg-[#C99A2E]
      cursor-pointer
    "
  />
</div>
    </div>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      w-full
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-[#C99A2E]
      to-[#D4AF37]
      text-white
      text-lg
      font-semibold
      shadow-lg
      hover:opacity-90
      transition-all 
    "
  >
    Request Custom Quote
  </button>

</form>
          </div>
        </div>
      )}
    </>
  );
};