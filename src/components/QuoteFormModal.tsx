"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
import { submitInquiry, uploadInquiryFile } from "@/lib/submitInquiry";

type QuoteFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  fabricType: "",
  productCategory: "",
  fabricGSM: "",
  quantity: "",
  deliveryTimeline: "",
  notes: "",
};

export function QuoteFormModal({ isOpen, onClose }: QuoteFormModalProps) {
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const update = (key: keyof typeof emptyForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetAndClose = () => {
    setForm(emptyForm);
    setFile(null);
    setSubmitted(false);
    setError("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      let imageUrl = "";
      if (file) {
        imageUrl = await uploadInquiryFile(file);
      }

      const message =
        form.notes.trim() ||
        [
          form.fabricType && `Fabric: ${form.fabricType}`,
          form.productCategory && `Category: ${form.productCategory}`,
          form.quantity && `Quantity: ${form.quantity}`,
          form.deliveryTimeline && `Timeline: ${form.deliveryTimeline}`,
        ]
          .filter(Boolean)
          .join("\n") ||
        "Custom quote request from website";

      await submitInquiry({
        fullName: form.fullName.trim(),
        companyName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        inquirytype: "Custom Quote Request",
        message,
        quantity: form.quantity.trim() || undefined,
        notes: form.notes.trim() || undefined,
        fabricType: form.fabricType.trim() || undefined,
        productCategory:
          form.productCategory && form.productCategory !== "Select Category"
            ? form.productCategory
            : undefined,
        fabricGSM: form.fabricGSM.trim() || undefined,
        deliveryTimeline: form.deliveryTimeline.trim() || undefined,
        image: imageUrl || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-modal-overlay" onClick={resetAndClose}>
      <div className="quote-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={resetAndClose}
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

        {submitted ? (
          <div className="text-center py-10 px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-5">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-serif text-[#0A2342] mb-2">Request received</h3>
            <p className="text-gray-600 mb-8">
              Thank you. Our team will get back to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="h-12 px-8 rounded-xl bg-[#0A2342] text-white font-semibold hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="quote-form-grid">
              <div>
                <label className="block text-sm font-medium text-[#0A2342] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
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
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
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
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
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
                  value={form.fabricType}
                  onChange={(e) => update("fabricType", e.target.value)}
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
                <select
                  value={form.productCategory}
                  onChange={(e) => update("productCategory", e.target.value)}
                  className="w-full h-12 sm:h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <option value="">Select Category</option>
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
                  value={form.fabricGSM}
                  onChange={(e) => update("fabricGSM", e.target.value)}
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
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
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
                  value={form.deliveryTimeline}
                  onChange={(e) => update("deliveryTimeline", e.target.value)}
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
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
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
                <p className="text-sm text-gray-500 mt-2">
                  {file ? file.name : "Drag & Drop or Click to Upload"}
                </p>
                <p className="text-xs text-gray-400 mt-2 sm:mt-3">
                  JPG, PNG, PDF, AI, PSD (Max 20MB)
                </p>
                <div className="flex justify-center mt-4 sm:mt-5">
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,image/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="text-sm text-gray-500 file:py-2 file:px-4 sm:file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-white hover:file:bg-[#C99A2E] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {error ? <p className="text-sm text-red-600 text-center">{error}</p> : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-[#C99A2E] to-[#D4AF37] text-white text-base sm:text-lg font-semibold shadow-lg hover:opacity-90 transition-all disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                "Request Custom Quote"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
