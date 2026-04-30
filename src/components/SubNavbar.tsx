"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SubNavbarProps {
  items: { name: string; href: string }[];
}

export const SubNavbar: React.FC<SubNavbarProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="bg-bg-ivory/50 backdrop-blur-md border-b border-accent/5 sticky top-[72px] z-[90]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto no-scrollbar">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative group whitespace-nowrap"
              >
                <span className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                  isActive ? "text-secondary" : "text-accent/40 group-hover:text-accent"
                }`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="subnav-active"
                    className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-secondary"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
