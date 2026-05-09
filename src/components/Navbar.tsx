"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { SubNavbar } from "./SubNavbar";
import { useStore } from "@/context/StoreContext";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const { cart, wishlist } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const isSolid =
    isScrolled || isHovered || pathname !== "/" || activeDropdown !== null;

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "How We Print",
      href: "/how-we-print",
      subItems: [
        { name: "Overview", href: "/how-we-print" },
        { name: "Digital Pigment", href: "/how-we-print/digital-pigment" },
        { name: "Reactive", href: "/how-we-print/reactive" },
        { name: "Sublimation", href: "/how-we-print/sublimation" },
        { name: "Screen", href: "/how-we-print/screen" },
        { name: "Quality Control", href: "/how-we-print/quality-control" },
      ],
    },
    {
      name: "Our Fabrics",
      href: "/fabrics",
      subItems: [
        { name: "All Fabrics", href: "/fabrics" },
        { name: "Cotton", href: "/fabrics/cotton" },
        { name: "Linen", href: "/fabrics/linen" },
        { name: "Viscose", href: "/fabrics/viscose" },
        { name: "Blends", href: "/fabrics/blends" },
        { name: "Silk", href: "/fabrics/silk" },
        { name: "Sustainable", href: "/fabrics/sustainable" },
      ],
    },
    { name: "Printable Designs", href: "/designs" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  const getSubNavItems = () => {
    if (pathname.startsWith("/fabrics")) {
      return menuItems.find((i) => i.name === "Our Fabrics")?.subItems || null;
    }
    if (pathname.startsWith("/how-we-print")) {
      return menuItems.find((i) => i.name === "How We Print")?.subItems || null;
    }
    return null;
  };

  const subNavItems = getSubNavItems();

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveDropdown(null);
        }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          isSolid
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-neutral-200/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10">
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 ${
                  isSolid ? "text-black" : "text-white"
                }`}
              >
                <Menu size={24} />
              </button>

              <Link href="/" className="flex flex-col items-center">
                <Image
                  src="/images/logo.png"
                  alt="Vastraa Global"
                  width={70}
                  height={70}
                  priority
                  unoptimized
                />
                <span className={`text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold mt-1 ${isSolid ? "text-gray/50" : "text-white/60"}`}>
                 Global Print Experts
                </span>
              </Link>
            </div>

            {/* CENTER MENU */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-12">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group py-2"
                  onMouseEnter={() =>
                    item.subItems
                      ? setActiveDropdown(item.name)
                      : setActiveDropdown(null)
                  }
                >
                  <Link
                    href={item.href}
                    className={`relative text-[20px]  font-vollkorn font-medium tracking-tight transition-all duration-300 flex items-center gap-1.5 ${
                      pathname === item.href ||
                      (item.subItems && pathname.startsWith(item.href))
                        ? "text-secondary"
                        : isSolid
                        ? "text-black/80"
                        : "text-white/90"
                    } hover:text-secondary group-hover:scale-105 transition-transform`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-500 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {/* UNDERLINE */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-500 ease-out rounded-full ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {item.subItems && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-neutral-100 overflow-hidden"
                      >
                        <div className="p-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-3 text-[15px] font-vollkorn font-medium text-gray-600 hover:text-secondary hover:bg-secondary/5 rounded-xl transition-all duration-300"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT ICONS */}
            <div
              className={`flex items-center gap-2 md:gap-4 ${
                isSolid ? "text-black/70" : "text-white/90"
              }`}
            >
              <button className="p-2.5 hover:text-secondary transition-all duration-300 hover:scale-110 hidden md:block">
                <Search size={21} />
              </button>

              <Link href="/signin" className="p-2.5 hover:text-secondary transition-all duration-300 hover:scale-110">
                <User size={21} />
              </Link>

              <Link href="/wishlist" className="p-2.5 relative hover:text-secondary transition-all duration-300 hover:scale-110">
                <Heart size={21} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-lg">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="p-2.5 relative hover:text-secondary transition-all duration-300 hover:scale-110">
                <ShoppingBag size={21} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* SUB NAV */}
      {subNavItems && <SubNavbar items={subNavItems} />}

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};