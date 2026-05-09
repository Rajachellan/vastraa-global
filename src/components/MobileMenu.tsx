"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  ChevronRight,
  User,
  Heart,
  ShoppingBag,
  X,
  ArrowRight,
} from "lucide-react";

import { useStore } from "@/context/StoreContext";

const menuData = [
  { title: "Home", href: "/" },

  {
    title: "How We Print",
    href: "/how-we-print",
    subItems: [
      {
        name: "Digital Pigment",
        href: "/how-we-print/digital-pigment",
      },
      {
        name: "Reactive",
        href: "/how-we-print/reactive",
      },
      {
        name: "Sublimation",
        href: "/how-we-print/sublimation",
      },
      {
        name: "Screen",
        href: "/how-we-print/screen",
      },
      {
        name: "Quality Control",
        href: "/how-we-print/quality-control",
      },
    ],
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
      {
        name: "Sustainable",
        href: "/fabrics/sustainable",
      },
    ],
  },

  { title: "Printable Designs", href: "/designs" },
  { title: "Blogs", href: "/blogs" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeAccordion, setActiveAccordion] = useState<
    string | null
  >(null);

  const { cart } = useStore();

  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

 const sidebarVariants: Variants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 260,
      staggerChildren: 0.05,
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },

    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
          />

          {/* Sidebar */}
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-[100%] w-[86%] max-w-[380px] bg-white z-[9999] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-accent/10 bg-white">
              <Link
                href="/"
                onClick={onClose}
                className="flex flex-col"
              >
                <h2 className="text-[30px] leading-none font-vollkorn font-bold text-accent">
                  VASTRAA{" "}
                  <span className="text-secondary">
                    GLOBAL
                  </span>
                </h2>

                <p className="text-[10px] uppercase tracking-[0.28em] text-accent/40 font-semibold mt-2">
                  Luxury Textile Excellence
                </p>
              </Link>

              <button
                onClick={onClose}
                className="w-14 h-14 rounded-full bg-accent/5 hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <motion.nav className="px-5 py-5 space-y-1">
                {menuData.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className="group"
                  >
                    {item.subItems ? (
                      <div className="rounded-2xl overflow-hidden">
                        <button
                          onClick={() =>
                            setActiveAccordion(
                              activeAccordion === item.title
                                ? null
                                : item.title
                            )
                          }
                          className={`flex items-center justify-between w-full px-4 py-5 text-[30px] leading-tight font-vollkorn transition-all duration-300 ${
                            activeAccordion === item.title
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        >
                          <span>{item.title}</span>

                          <ChevronRight
                            size={18}
                            className={`transition-all duration-300 ${
                              activeAccordion === item.title
                                ? "rotate-90 text-secondary"
                                : "text-accent/30"
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeAccordion === item.title && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.3,
                              }}
                              className="bg-accent/[0.03] mx-2 rounded-2xl overflow-hidden"
                            >
                              <div className="p-5 space-y-3">
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-secondary mb-5"
                                >
                                  Explore All
                                  <ArrowRight size={14} />
                                </Link>

                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={onClose}
                                    className="block text-lg text-accent/70 hover:text-secondary transition-all duration-300 py-1"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={onClose}
                        className="flex items-center justify-between px-4 py-5 text-[30px] leading-tight font-vollkorn text-accent hover:text-secondary rounded-2xl transition-all duration-300"
                      >
                        {item.title}

                        <ArrowRight
                          size={18}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-secondary"
                        />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            {/* Bottom Buttons */}
            <div className="p-5 border-t border-accent/10 bg-bg-ivory/50">
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href="/signin"
                  onClick={onClose}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-accent/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <User
                    size={22}
                    className="text-accent/70"
                  />

                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-accent/50">
                    Profile
                  </span>
                </Link>

                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-accent/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Heart
                    size={22}
                    className="text-accent/70"
                  />

                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-accent/50">
                    Saved
                  </span>
                </Link>

                <Link
                  href="/cart"
                  onClick={onClose}
                  className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-accent/5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <ShoppingBag
                    size={22}
                    className="text-accent/70"
                  />

                  {cartCount > 0 && (
                    <span className="absolute top-3 right-4 w-5 h-5 rounded-full bg-secondary text-white text-[9px] font-bold flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}

                  <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-accent/50">
                    Cart
                  </span>
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};