"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { submitInquiry, uploadInquiryFile } from "@/lib/submitInquiry";

export const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fabricType, setFabricType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

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
        [
          fabricType ? `Fabric: ${fabricType}` : "",
          quantity ? `Quantity: ${quantity}` : "",
          notes ? `Notes: ${notes}` : "",
        ]
          .filter(Boolean)
          .join("\n") || "Digital printing inquiry from homepage quote form";

      await submitInquiry({
        fullName,
        companyName: fullName,
        email,
        inquirytype: "Digital Printing Inquiry",
        message,
        quantity: quantity || undefined,
        notes: notes || undefined,
        fabricType: fabricType || undefined,
        image: imageUrl || undefined,
      });
      setIsSubmitted(true);
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="section-y bg-white">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-bg-ivory border border-secondary/20 shadow-xl shadow-secondary/5"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">Quote Request Received</h2>
            <p className="text-accent/60 text-lg mb-8">
              Thank you for reaching out to VastraaGlobal. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Send Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="section-y-lg bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Partner With Us</span>
            </div>
            <h2 className="section-title font-serif text-accent mb-8 leading-tight">
              Request a <span className="text-secondary">Custom Quote</span>
            </h2>
            <p className="text-accent/60 text-base md:text-lg md:mb-10 leading-relaxed">
              Ready to bring your fabric designs to life? Fill out the form with your project details and our export specialists will provide a tailored solution for your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bg-ivory p-8 md:p-12 rounded-3xl border border-accent/5 shadow-2xl shadow-accent/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Fabric Type</label>
                  <select
                    value={fabricType}
                    onChange={(e) => setFabricType(e.target.value)}
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary appearance-none"
                  >
                    <option value="">Select Fabric</option>
                    <option>Organic Cotton</option>
                    <option>Premium Linen</option>
                    <option>Viscose Rayon</option>
                    <option>Cotton-Linen Blend</option>
                    <option>Other / Custom Sourcing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Quantity (Meters)</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Min 300m"
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Design Upload</label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-white border-2 border-dashed border-accent/10 rounded-xl py-6 px-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Upload size={24} className="text-accent/20" />
                      <span className="text-sm text-accent/50">
                        {file?.name || "Drop design files here or click to upload"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Company Details</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work Email"
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Additional requirements or special instructions..."
                  rows={4}
                  className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary resize-none"
                />
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <Button type="submit" variant="primary" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? "Submitting…" : "Get Custom Quote"}
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
