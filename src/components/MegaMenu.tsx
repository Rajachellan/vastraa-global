"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const menuData = [
  {
    title: "Custom Fabrics by Property",
    links: [
      "Waterproof", "Organic", "Stretch", "Natural", "Sheer", "Vegan", "Soft", "See All Custom Fabrics"
    ]
  },
  {
    title: "Labels, Tags & Samples",
    links: [
      "Fabric Labels", "Swatch Pack & Color Charts", "Fabric Test Prints", "Transfer Paper", "Card Swing Tags", "Leather Swing Tags", "See All"
    ]
  },
  {
    title: "Fabrics by Printing Method",
    links: [
      "Reactive Printing", "Pigment Printing", "Sublimation Printing", "Search All Fabrics"
    ]
  },
  {
    title: "Custom Fabric Types",
    links: [
      "Cotton", "Jersey", "Satin", "Silk", "Canvas", "Velvet", "Lycra", "See All Custom Fabrics"
    ]
  },
  {
    title: "Custom Fabrics by Usage",
    links: [
      "Canvas", "Outdoor", "Upholstery", "Dress", "Cushion", "Curtain", "T-Shirt", "Quilting", "See All Custom Fabrics"
    ]
  }
];

export const MegaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-accent/5 z-50 py-12 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {menuData.map((column, idx) => (
          <div key={idx} className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent/40 border-b border-accent/5 pb-2">
              {column.title}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    href={`/fabrics?category=${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[15px] text-accent hover:text-secondary transition-colors duration-200 block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Featured Banner in Mega Menu (Optional Premium Touch) */}
      <div className="container mx-auto mt-12 pt-8 border-t border-accent/5 flex justify-between items-center">
        <p className="text-xs text-accent/40">
          Free Swatch Pack on orders over $50. <Link href="/about" className="text-secondary underline">Learn more</Link>
        </p>
        <div className="flex gap-4">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-tighter text-secondary">New Sustainable Collection Out Now</span>
        </div>
      </div>
    </motion.div>
  );
};

