"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

export function ClientQuoteButton({ productName }: { productName: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-secondary/20"
      >
        Get Custom Quote
        <ArrowRight size={18} />
      </motion.button>
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={productName}
      />
    </>
  );
}
