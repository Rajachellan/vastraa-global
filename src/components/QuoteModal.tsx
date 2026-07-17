"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Image as ImageIcon, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { submitInquiry } from "@/lib/submitInquiry";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialImage?: string | null;
  productName?: string;
  designId?: string;
  designTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialImage,
  productName,
  designId,
  designTitle,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setIsSuccess(false);
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await submitInquiry({
        fullName,
        companyName,
        email,
        inquirytype: "Design Studio Quote",
        message: productName || `Design Studio Quote — ${designTitle || "Custom design"}`,
        image:
          initialImage && !initialImage.startsWith("blob:")
            ? initialImage
            : undefined,
        designId,
        designTitle: designTitle || productName,
        quantity,
        notes,
      });
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit quote request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-accent/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-bg-ivory flex items-center justify-center text-accent hover:bg-secondary hover:text-white transition-all"
          >
            <X size={20} />
          </button>

          <div className="w-full md:w-5/12 bg-bg-ivory p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-accent mb-2">Quote Request</h3>
              <p className="text-xs text-accent/40 uppercase tracking-widest font-bold">
                {productName || "Custom Solution"}
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center py-10">
              {initialImage ? (
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image src={initialImage} alt="Sample Reference" fill className="object-cover" />
                </div>
              ) : (
                <div className="w-full aspect-square rounded-3xl border-2 border-dashed border-accent/10 flex flex-col items-center justify-center text-accent/20 gap-4">
                  <ImageIcon size={48} />
                  <p className="text-xs font-bold uppercase tracking-widest">No Image Attached</p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-7/12 p-8 md:p-12">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="mb-8">
                  <div className="flex gap-2 mb-6">
                    <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-secondary" : "bg-bg-ivory"}`} />
                    <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-secondary" : "bg-bg-ivory"}`} />
                  </div>
                  <h2 className="text-3xl font-serif text-accent">
                    {step === 1 ? "Your Details" : "Project Brief"}
                  </h2>
                </div>

                <div className="flex-1 space-y-6">
                  {step === 1 ? (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/40">Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/40">Work Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/40">Company</label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Luxe Apparel"
                          className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/40">
                          Expected Quantity (MOQ 50m)
                        </label>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="e.g. 500 meters"
                          className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-accent/40">
                          Additional Notes
                        </label>
                        <textarea
                          rows={4}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Describe your print requirements, color preferences, etc."
                          className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {error ? <p className="text-sm text-red-600 mt-4">{error}</p> : null}

                <div className="mt-10 flex gap-4">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-8 py-4 text-accent/40 font-bold uppercase tracking-widest hover:text-accent transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type={step === 1 ? "button" : "submit"}
                    onClick={() => step === 1 && setStep(2)}
                    disabled={isSubmitting}
                    className="flex-1 bg-accent text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-secondary transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {step === 1 ? "Next Step" : "Submit Request"}
                        {step === 1 && <ArrowRight size={18} />}
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-8 shadow-2xl shadow-green-500/20">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-4xl font-serif text-accent mb-4">Request Sent!</h2>
                <p className="text-accent/60 leading-relaxed mb-10 max-w-sm">
                  Our experts have received your inquiry. We will contact you within 24 hours with a tailored quote.
                </p>
                <button
                  onClick={onClose}
                  className="bg-accent text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-secondary transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
