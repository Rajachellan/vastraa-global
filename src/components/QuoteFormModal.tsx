"use client";

import React from "react";
import { Upload } from "lucide-react";

type QuoteFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 z-10"
          aria-label="Close quote form"
        >
          ✕
        </button>

        <div className="text-center mb-6 sm:mb-8">
          <img
            src="/images/logo.png"
            alt="Vastraa Global"
            className="w-24 sm:w-32 h-auto object-contain mx-auto mb-3 sm:mb-4"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0A2342]">
            Request a Custom Quote
          </h2>
          <div className="flex items-center justify-center gap-4 my-4 sm:my-5">
            <div className="w-12 sm:w-16 h-px bg-[#D4AF37]" />
            <div className="text-[#D4AF37]">✦</div>
            <div className="w-12 sm:w-16 h-px bg-[#D4AF37]" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base px-2">
            Share your requirements and our team will contact you shortly.
          </p>
        </div>

        <form className="space-y-4 sm:space-y-6">
          <div className="quote-form-grid">
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-12 sm:h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
          </div>

          <div className="quote-form-grid">
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Fabric Type
              </label>
              <input
                type="text"
                placeholder="Cotton, Silk, Linen..."
                className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div className="quote-form-grid">
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Product Category
              </label>
              <select className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
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
                className="w-full h-12 sm:h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div className="quote-form-grid">
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Quantity Required
              </label>
              <input
                type="text"
                placeholder="500 Meters/Pieces"
                className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A2342] mb-2">
                Delivery Timeline
              </label>
              <input
                type="text"
                placeholder="Within 30 Days"
                className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2">
              Query *
            </label>
            <textarea
              rows={4}
              placeholder="Describe your requirements, design ideas, printing preferences, colors, dimensions, quantity and any special instructions..."
              className="w-full rounded-xl border border-[#D4AF37] px-4 py-3 sm:py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[120px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0A2342] mb-2 sm:mb-3">
              Upload Design / Artwork
            </label>
            <div className="border-2 border-dashed border-[#D4AF37] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center bg-white">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <Upload size={28} className="text-[#D4AF37] sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-[#0A2342]">
                Upload Your Design Files
              </h4>
              <p className="text-sm text-gray-500 mt-2">Drag & Drop or Click to Upload</p>
              <p className="text-xs text-gray-400 mt-2 sm:mt-3">
                JPG, PNG, PDF, AI, PSD (Max 20MB)
              </p>
              <div className="flex justify-center mt-4 sm:mt-5">
                <input
                  type="file"
                  className="text-sm text-gray-500 file:py-2 file:px-4 sm:file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-white hover:file:bg-[#C99A2E] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-[#C99A2E] to-[#D4AF37] text-white text-base sm:text-lg font-semibold shadow-lg hover:opacity-90 transition-all"
          >
            Request Custom Quote
          </button>
        </form>
      </div>
    </div>
  );
}
