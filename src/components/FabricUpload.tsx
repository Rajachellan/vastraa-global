"use client";

import React, { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteModal } from "./QuoteModal";

export const FabricUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setIsSuccess(false);
      
      // Create preview URL
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setIsModalOpen(true);
  };

  const reset = () => {
    setFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setIsSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section className="section-y bg-white overflow-hidden">
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialImage={previewUrl}
        productName="Custom Fabric Submission"
      />
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title font-serif text-accent mb-6">
              Upload Your Cloth Image & <span className="text-secondary italic">Get Expert Suggestions</span>
            </h2>
            <p className="text-lg text-accent/60 max-w-2xl mx-auto">
              Share your fabric idea — we&apos;ll recommend the best print solution, material quality and customization options.
            </p>
          </div>

          <div className="relative p-12 rounded-[3rem] bg-bg-ivory border-2 border-dashed border-accent/10 hover:border-secondary/30 transition-colors group">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="upload-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-secondary shadow-xl mb-8 group-hover:scale-110 transition-transform overflow-hidden">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload size={32} />
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-serif text-accent mb-4">
                    {file ? file.name : "Drag & Drop your fabric image"}
                  </h3>
                  {previewUrl && (
                    <div className="mb-6 w-full max-w-xs aspect-video relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                       <img src={previewUrl} alt="Large Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <p className="text-accent/40 mb-10 max-w-sm">
                    Supports JPG, PNG and PDF. Max file size: 10MB.
                  </p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf"
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    {!file ? (
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-accent text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-xl"
                      >
                        Choose File
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={handleUpload}
                          disabled={isUploading}
                          className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-accent disabled:opacity-50 transition-all shadow-xl flex items-center gap-2"
                        >
                          {isUploading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            "Get Custom Quote"
                          )}
                        </button>
                        <button
                          onClick={reset}
                          className="px-10 py-5 text-accent/60 font-bold uppercase tracking-widest hover:text-accent transition-all"
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/20 mb-8">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-serif text-accent mb-6">Inquiry Received Successfully</h3>
                  <p className="text-xl text-accent/70 leading-relaxed max-w-2xl bg-white p-8 rounded-3xl shadow-sm italic">
                    “Our team will analyze your fabric image and suggest the best printing method, material quality and customization options.”
                  </p>
                  <button
                    onClick={reset}
                    className="mt-12 text-secondary font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
                  >
                    <X size={16} />
                    Submit Another Reference
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
