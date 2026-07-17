"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight, History, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const recentSearches = ["Organic Cotton", "Silk Satin", "Sustainable Printing", "Bulk Orders"];
const popularCategories = [
  { name: "Premium Silk", href: "/fabrics/wholesale-silk-fabrics" },
  { name: "Organic Cotton", href: "/fabrics/wholesale-cotton-fabrics" },
  { name: "Digital Printing", href: "/how-we-print" },
  { name: "Sustainability", href: "/fabrics" },
];

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex flex-col">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-accent/95 backdrop-blur-xl"
        />

        {/* Search Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="relative w-full bg-white/5 border-b border-white/10 px-6 py-10 md:py-20 flex justify-center"
        >
          <div className="container max-w-4xl relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary" size={32} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fabrics, printing methods, or services..."
              className="w-full bg-transparent border-none text-3xl md:text-5xl font-serif text-white placeholder:text-white/20 outline-none pl-12 md:pl-16 pr-10"
            />
            <button 
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative flex-1 overflow-y-auto py-12 md:py-20"
        >
          <div className="container max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Recent & Trending */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                    <History size={14} /> Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((item) => (
                      <button
                        key={item}
                        onClick={() => setQuery(item)}
                        className="px-5 py-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all text-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
                    <TrendingUp size={14} /> Quick Links
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {popularCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all"
                      >
                        <span className="text-white/80 group-hover:text-white font-medium">{item.name}</span>
                        <ArrowRight size={16} className="text-white/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Suggestions / Visual Links */}
              <div>
                <div className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">Featured Services</div>
              <div className="space-y-8">

  {/* Card 1 */}
  <div className="relative group rounded-3xl overflow-hidden aspect-[16/9] cursor-pointer">
    
    <Image
      src="/images/service-printing.png"
      alt="Custom Printing"
      fill
      priority
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
      <h4 className="text-white text-xl font-serif">
        Custom Digital Printing
      </h4>

      <p className="text-white/80 text-sm">
        Explore our high-precision solutions
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative group rounded-3xl overflow-hidden aspect-[16/9] cursor-pointer">

    <Image
      src="/images/consultation.png"
      alt="Sustainability"
      fill
      priority
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
      <h4 className="text-white text-xl font-serif">
        Sustainable Collection
      </h4>

      <p className="text-white/80 text-sm">
        Eco-friendly textile innovation
      </p>
    </div>
  </div>

</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
