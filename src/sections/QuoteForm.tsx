"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";

export const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    inquirytype: "Custom Fabric Development",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      let uploadedImageUrl = "";

      // 1. Upload file if selected
      if (file) {
        const uploadData = new FormData();
        uploadData.append("image", file);
        const uploadRes = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          body: uploadData
        });
        if (uploadRes.ok) {
          const uploadResult = await uploadRes.json();
          uploadedImageUrl = uploadResult.url;
        } else {
          console.warn("Upload failed, submitting form without image");
        }
      }

      // 2. Submit form details
      const res = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          image: uploadedImageUrl
        })
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await res.json();
        setErrorMessage(errorData.message || "Failed to submit quote request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error connecting to quote service.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-24 bg-white">
        <div className="container mx-auto px-6">
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
              Thank you for reaching out to VastraaGlobal. Our team will review your requirements and get back to you with a custom quote within 24 hours.
            </p>
            <Button variant="outline" onClick={() => {
              setIsSubmitted(false);
              setFileName("");
              setFile(null);
              setFormData({ fullName: "", companyName: "", email: "", inquirytype: "Custom Fabric Development", message: "" });
            }}>
              Send Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-8 leading-tight">
              Request a <span className="text-secondary">Custom Quote</span>
            </h2>
            <p className="text-accent/60 text-base md:text-lg mb-10 leading-relaxed">
              Ready to bring your fabric designs to life? Fill out the form with your project details and our export specialists will provide a tailored solution for your brand.
            </p>
            
            <ul className="space-y-6">
              {[
                "Bulk discounts for 1000+ meters",
                "Custom fabric sourcing options",
                "International door-to-door shipping",
                "Complimentary design audit",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-accent/80">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
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
                  <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Inquiry Type</label>
                  <select 
                    value={formData.inquirytype}
                    onChange={(e) => setFormData({ ...formData, inquirytype: e.target.value })}
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary appearance-none"
                  >
                    <option value="Custom Fabric Development">Custom Fabric Development</option>
                    <option value="Bulk Fabric Sourcing">Bulk Fabric Sourcing</option>
                    <option value="Digital Printing Inquiry">Digital Printing Inquiry</option>
                    <option value="Sample Yardage Request">Sample Yardage Request</option>
                    <option value="Other">Other / Custom Sourcing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Estimated Quantity</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 500 meters"
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary" 
                    onChange={(e) => {
                      const val = e.target.value;
                      // Add quantity info dynamically to message body prefix or local state
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Design Reference Upload</label>
                <div className="relative">
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="w-full bg-white border-2 border-dashed border-accent/10 rounded-xl py-6 px-4 text-center hover:border-secondary transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <Upload size={24} className="text-accent/20" />
                      <span className="text-sm text-accent/50">
                        {fileName || "Drop sample image here or click to upload"}
                      </span>
                      <span className="text-[10px] text-accent/30 uppercase tracking-tighter">PNG, JPG, JPEG (Max 10MB)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Company Details</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary" 
                  />
                  <input 
                    type="text" 
                    placeholder="Company Name"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary" 
                  />
                  <input 
                    type="email" 
                    placeholder="Work Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea 
                  placeholder="Additional requirements or special instructions..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-accent/10 rounded-xl py-4 px-4 text-accent focus:outline-none focus:border-secondary resize-none"
                ></textarea>
              </div>

              {errorMessage && (
                <p className="text-xs text-red-500 font-bold">{errorMessage}</p>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full group" disabled={loading}>
                {loading ? "Submitting Request..." : "Get Custom Quote"}
                {!loading && <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

