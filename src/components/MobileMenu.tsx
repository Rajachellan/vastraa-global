"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, User, Heart, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const menuData = [
  { title: "Home", href: "/" },
  { 
    title: "How We Print", 
    href: "/how-we-print",
    subItems: [
      { name: "Digital Pigment", href: "/how-we-print/digital-pigment" },
      { name: "Reactive", href: "/how-we-print/reactive" },
      { name: "Sublimation", href: "/how-we-print/sublimation" },
      { name: "Screen", href: "/how-we-print/screen" },
      { name: "Quality Control", href: "/how-we-print/quality-control" },
    ]
  },
  { 
    title: "Our Fabrics", 
    href: "/fabrics",
    subItems: [
      { name: "Cotton", href: "/fabrics/cotton" },
      { name: "Linen", href: "/fabrics/linen" },
      { name: "Viscose", href: "/fabrics/viscose" },
      { name: "Silk", href: "/fabrics/silk" },
      { name: "Blends", href: "/fabrics/blends" },
      { name: "Sustainable", href: "/fabrics/sustainable" },
    ]
  },
  { title: "Design Studio", href: "/design-studio" },
  { title: "Blogs", href: "/blogs" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const { cart, wishlist } = useStore();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-accent/5 flex justify-between items-center bg-bg-ivory/50">
              <span className="text-xl font-serif font-bold tracking-tighter text-accent">
                VASTRAA <span className="text-secondary">GLOBAL</span>
              </span>
              <button onClick={onClose} className="p-2 text-accent hover:text-secondary transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8">
              <nav className="px-8 space-y-4">
                {menuData.map((item) => (
                  <div key={item.title} className="border-b border-accent/5 pb-4">
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setActiveAccordion(activeAccordion === item.title ? null : item.title)}
                          className="flex items-center justify-between w-full text-2xl font-serif text-accent py-2 group"
                        >
                          <span className="group-hover:text-secondary transition-colors">{item.title}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-500 text-secondary ${activeAccordion === item.title ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeAccordion === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-4 ml-4 space-y-3"
                            >
                              <Link 
                                href={item.href} 
                                onClick={onClose}
                                className="text-sm font-bold text-secondary uppercase tracking-[0.2em] block mb-4"
                              >
                                Overview
                              </Link>
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={onClose}
                                  className="text-lg text-accent/60 hover:text-secondary block py-1 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={onClose}
                        className="text-2xl font-serif text-accent py-2 block hover:text-secondary transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="p-8 border-t border-accent/5 bg-bg-ivory/80">
              <div className="flex justify-around items-center">
                <Link href="/signin" onClick={onClose} className="flex flex-col items-center gap-2 text-accent/60 hover:text-secondary transition-colors">
                  <User size={24} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Profile</span>
                </Link>
                <Link href="/wishlist" onClick={onClose} className="flex flex-col items-center gap-2 text-accent/60 hover:text-secondary transition-colors">
                  <Heart size={24} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Wishlist</span>
                </Link>
                <Link href="/cart" onClick={onClose} className="flex flex-col items-center gap-2 text-accent/60 hover:text-secondary transition-colors relative">
                  <ShoppingBag size={24} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                  <span className="text-[10px] uppercase font-bold tracking-widest">Cart</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
