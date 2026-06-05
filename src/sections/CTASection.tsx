"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Upload, CheckCircle2 } from "lucide-react";
import { fetchFabricCatalog } from "@/lib/catalog";
import { submitInquiry, uploadInquiryFile } from "@/lib/submitInquiry";

export const CTASection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fabricType, setFabricType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [fabricGSM, setFabricGSM] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryTimeline, setDeliveryTimeline] = useState("");
  const [query, setQuery] = useState("");
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (!showQuoteForm) return;
    fetchFabricCatalog()
      .then((catalog) =>
        setCategories(catalog.map((c) => ({ id: c.id || c._id || c.name, name: c.name })))
      )
      .catch(() => setCategories([]));
  }, [showQuoteForm]);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setFabricType("");
    setProductCategory("");
    setFabricGSM("");
    setQuantity("");
    setDeliveryTimeline("");
    setQuery("");
    setDesignFile(null);
    setFileName("");
    setError("");
    setIsSubmitted(false);
  };

  const closeForm = () => {
    setShowQuoteForm(false);
    resetForm();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDesignFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      let imageUrl: string | undefined;
      if (designFile) {
        imageUrl = await uploadInquiryFile(designFile);
      }

      await submitInquiry({
        fullName,
        email,
        phone,
        inquirytype: "Custom Quote Request",
        message: query,
        image: imageUrl,
        quantity,
        notes: query,
        fabricType,
        productCategory,
        fabricGSM,
        deliveryTimeline,
      });

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-14 ">
        <div className="container mx-auto px-6">
          <div className="premium-gradient rounded-[3rem] p-12 md:p-14 text-center shadow-xl border border-accent/5 overflow-hidden relative">
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
                  <Link href="/contact-us">Talk to Export</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {showQuoteForm && (
<<<<<<< Updated upstream
        <div
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-hidden"
  onClick={() => setShowQuoteForm(false)}
>
          <div
  className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#F8F5F0] p-8 md:p-12 shadow-2xl overflow-hidden"
  onClick={(e) => e.stopPropagation()}
>
            {/* Close */}
=======
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-hidden">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#F8F5F0] p-8 md:p-12 shadow-2xl overflow-hidden">
>>>>>>> Stashed changes
            <button
              onClick={closeForm}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#0A2342] mb-4">
                  Quote Request Received
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your requirements and contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeForm}
                  className="h-14 px-10 rounded-2xl bg-gradient-to-r from-[#C99A2E] to-[#D4AF37] text-white font-semibold hover:opacity-90 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
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

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Fabric Type
                      </label>
                      <input
                        type="text"
                        value={fabricType}
                        onChange={(e) => setFabricType(e.target.value)}
                        placeholder="Cotton, Silk, Linen..."
                        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Product Category
                      </label>
                      <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Fabric GSM
                      </label>
                      <input
                        type="text"
                        value={fabricGSM}
                        onChange={(e) => setFabricGSM(e.target.value)}
                        placeholder="Enter fabric GSM"
                        className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#0A2342] mb-2">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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
                        value={deliveryTimeline}
                        onChange={(e) => setDeliveryTimeline(e.target.value)}
                        placeholder="Within 30 Days"
                        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A2342] mb-2">
                      Query *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Describe your requirements, design ideas, printing preferences, colors, dimensions, quantity and any special instructions..."
                      className="w-full rounded-xl border border-[#D4AF37] px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0A2342] mb-3">
                      Upload Design / Artwork
                    </label>

                    <div className="border-2 border-dashed border-[#D4AF37] rounded-3xl p-10 text-center bg-white hover:bg-[#FFFDF8] transition-all">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                        <Upload size={32} className="text-[#D4AF37]" />
                      </div>

<<<<<<< Updated upstream
      <input
        type="text"
        placeholder="500 Meters/Pieces"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
=======
                      <h4 className="text-lg font-semibold text-[#0A2342]">
                        Upload Your Design Files
                      </h4>
>>>>>>> Stashed changes

                      <p className="text-sm text-gray-500 mt-2">
                        Drag & Drop or Click to Upload
                      </p>

                      <p className="text-xs text-gray-400 mt-3">
                        JPG, PNG, PDF, AI, PSD (Max 20MB)
                      </p>

                      {fileName ? (
                        <p className="text-sm text-[#0A2342] mt-3 font-medium">{fileName}</p>
                      ) : null}

                      <div className="flex justify-center mt-5">
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.ai,.psd,image/*"
                          onChange={handleFileChange}
                          className="text-sm text-gray-500 file:py-2 file:px-6 file:mx-5 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-white hover:file:bg-[#C99A2E] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {error ? <p className="text-sm text-red-600 text-center">{error}</p> : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#C99A2E] to-[#D4AF37] text-white text-lg font-semibold shadow-lg hover:opacity-90 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Request Custom Quote"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
