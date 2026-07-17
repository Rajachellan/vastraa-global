"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingBag, Menu, ChevronDown, Mail, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenu } from "./MobileMenu";
import { SubNavbar } from "./SubNavbar";
import { SearchOverlay } from "./SearchOverlay";
import { FABRIC_NAV_ITEMS } from "@/lib/fabricCategories";
import { useStore } from "@/context/StoreContext";
import Image from "next/image";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);

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
      name: "About",
      href: "/about",
      // subItems: [
      //   { name: "Our Story", href: "/about" },
      //   { name: "Manufacturing", href: "/about#manufacturing" },
      //   { name: "Sustainability", href: "/about#sustainability" },
      //   { name: "Certifications", href: "/about#certifications" },
      // ],
    },
    {
      name: "How We Print",
      href: "/how-we-print",
      // subItems: [
      //   { name: "Printing Overview", href: "/how-we-print" },
      //   { name: "Digital Pigment", href: "/how-we-print/digital-pigment" },
      //   { name: "Reactive Printing", href: "/how-we-print/reactive" },
      //   { name: "Sublimation", href: "/how-we-print/sublimation" },
      //   { name: "Quality Standards", href: "/how-we-print/quality-control" },
      // ],
    },
    {
      name: "Our Fabrics",
      href: "/fabrics",
      subItems: FABRIC_NAV_ITEMS,
    },

    { name: "Design Studio", href: "/designs" },
    {
      name: "Blogs",
      href: "/blogs",
      // subItems: [
      //   { name: "Textile Trends", href: "/blogs?cat=trends" },
      //   { name: "Printing Guides", href: "/blogs?cat=guides" },
      //   { name: "Case Studies", href: "/blogs?cat=case-studies" },
      // ],
    },
    { name: "Expert Help", href: "/contact-us" },
  ];

  const getSubNavItems = () => {
    if (pathname.startsWith("/fabrics")) {
      return menuItems.find((i) => i.name === "Our Fabrics")?.subItems || null;
    }
    if (pathname.startsWith("/how-we-print")) {
      return menuItems.find((i) => i.name === "How We Print")?.subItems || null;
    }
    if (pathname.startsWith("/blogs")) {
      return menuItems.find((i) => i.name === "Blogs")?.subItems || null;
    }
    if (pathname.startsWith("/about")) {
      return menuItems.find((i) => i.name === "About")?.subItems || null;
    }
    return null;
  };

  const subNavItems = getSubNavItems();
  const pagePathTitle = pathname.startsWith("/designs") ? "Designs" : null;

  return (
    <>
    {/* ANNOUNCEMENT BAR */}

    {/* ANNOUNCEMENT BAR */}
<div className="fixed top-0 left-0 w-full z-[120] bg-[#243661] text-white border-b border-white/10 h-10 flex items-center px-4 md:px-8 text-[13px] justify-between">
  {/* MARQUEE */}
  <div className="overflow-hidden flex-1 hidden md:flex mr-6">
    <div className="marquee">
      <div className="marquee-content">
        {[
          "Factory Price Digital Fabric Printing",
          "Direct From Our Production Unit • No Middleman Margin",
          "Custom Digital Printed Fabric for Every Order Size",
          "Premium Quality Prints",
          "Fast Production Support",
          "Export Ready Fabric Printed from India",
        ].map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>

      {/* Duplicate Content */}
      <div className="marquee-content" aria-hidden="true">
        {[
          "Factory Price Digital Fabric Printing",
          "Direct From Our Production Unit • No Middleman Margin",
          "Custom Digital Printed Fabric for Every Order Size",
          "Premium Quality Prints",
          "Fast Production Support",
          "Export Ready Fabric Printed from India",
        ].map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  </div>

  {/* CONTACT INFO */}
  <div className="flex items-center gap-2.5 md:gap-4 flex-shrink-0 z-10 bg-[#243661]">
    <a href="mailto:info@vastraaglobal.com" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors font-semibold border border-white/10">
      <Mail size={13} className="text-secondary" /> <span className="hidden sm:inline tracking-wide">info@vastraaglobal.com</span>
    </a>
    <div className="relative">
      <button 
        onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
        onBlur={() => setTimeout(() => setIsPhoneDropdownOpen(false), 200)}
        className="flex items-center gap-1.5 bg-secondary text-white px-3 py-1 rounded-full hover:brightness-110 transition-all font-bold shadow-lg shadow-secondary/30"
      >
        <Phone size={13} /> <span className="tracking-wide">+44 7584573793</span>
        <ChevronDown size={13} className={`transition-transform duration-300 ml-0.5 ${isPhoneDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {isPhoneDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col">
              <a href="https://wa.me/447584573793" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50">
                <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                   <MessageCircle size={14} />
                </div>
                <span className="font-semibold text-sm">WhatsApp</span>
              </a>
              <a href="tel:+447584573793" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <div className="bg-blue-100 p-1.5 rounded-full text-blue-600">
                  <Phone size={14} />
                </div>
                <span className="font-semibold text-sm">Phone Call</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
</div>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveDropdown(null);
        }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${isSolid
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-neutral-200/50"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container-site mt-10">
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 ${isSolid ? "text-black" : "text-white"
                  }`}
              >
                <Menu size={24} />
              </button>

              <Link href="/" className="flex flex-col items-center">
                <Image
                  src="/images/logo.png"
                  alt="Vastraa Global"
                  width={40}
                  height={40}
                  priority
                  unoptimized
                  style={{ width: "auto", height: "auto", maxHeight: 25 }}
                />
                <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-bold mt-1 ${isSolid ? "text-gray/50" : "text-white/60"}`}>
                  Printed with Passion
                </span>
              </Link>
            </div>

            {/* CENTER MENU */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-14 3xl:gap-16">
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
                    className={`relative text-[17px]  font-vollkorn font-medium tracking-tight transition-all duration-300 flex items-center gap-1.5 ${pathname === item.href ||
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
                        className={`transition-transform duration-500 ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    )}

                    {/* UNDERLINE */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-500 ease-out rounded-full ${pathname === item.href
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
              className={`flex items-center gap-2 md:gap-4 ${isSolid ? "text-black/70" : "text-white/90"
                }`}
            >
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 hover:text-secondary transition-all duration-300 hover:scale-110 hidden md:block"
              >
                <Search size={21} />
              </button>

              {/* <Link href="/signin" className="p-2.5 hover:text-secondary transition-all duration-300 hover:scale-110">
                <User size={21} />
              </Link> */}

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

      {/* SUB NAV / PAGE PATH */}
      {pagePathTitle ? (
        <SubNavbar title={pagePathTitle} />
      ) : (
        subNavItems && <SubNavbar items={subNavItems} />
      )}

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* MARQUEE ANIMATION */}

      <style jsx>{`
  .marquee {
    display: flex;
    width: max-content;
    animation: marquee 28s linear infinite;
  }

  .marquee-content {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .marquee-content span {
    white-space: nowrap;
    padding: 0 3rem;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.03em;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .marquee:hover {
    animation-play-state: paused;
  }
`}</style>
    </>
  );
};
