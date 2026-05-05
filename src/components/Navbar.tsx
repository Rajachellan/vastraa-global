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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isSolid
            ? "bg-white/70 backdrop-blur-lg py-3 shadow-sm border-b border-neutral-200"
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
                  src="/images/logo3.png"
                  alt="Vastraa Global"
                  width={80}
                  height={80}
                />
                <span className={`text-[8px] uppercase tracking-[0.2em] font-bold mt-1 ${isSolid ? "text-primary/60" : "text-white/60"}`}>
                  Precision in Print
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
                    className={`relative text-[13px] uppercase tracking-[0.18em] font-semibold transition-all flex items-center gap-1 ${
                      pathname === item.href ||
                      (item.subItems && pathname.startsWith(item.href))
                        ? "text-secondary"
                        : isSolid
                        ? "text-black"
                        : "text-white/80"
                    } hover:text-secondary`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {/* UNDERLINE */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-secondary transition-all duration-300 ease-out ${
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
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white shadow-xl rounded-2xl border border-neutral-200 overflow-hidden"
                      >
                        <div className="p-4">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-3 text-[12px] uppercase tracking-wider font-medium text-gray-600 hover:text-secondary hover:bg-gray-50 rounded-lg transition-all"
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
              className={`flex items-center gap-3 md:gap-5 ${
                isSolid ? "text-black" : "text-white"
              }`}
            >
              <button className="p-2 hover:text-secondary hidden md:block">
                <Search size={20} />
              </button>

              <Link href="/signin" className="p-2 hover:text-secondary">
                <User size={20} />
              </Link>

              <Link href="/wishlist" className="p-2 relative hover:text-secondary">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="p-2 relative hover:text-secondary">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
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