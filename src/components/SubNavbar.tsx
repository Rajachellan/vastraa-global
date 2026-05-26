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
    <div className="bg-bg-ivory/95 backdrop-blur-md border-b mt-[114px] border-accent/5 sticky top-[114px] z-[90] overflow-hidden">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto overflow-y-hidden no-scrollbar">
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative group whitespace-nowrap flex-shrink-0"
              >
                <span
                  className={`text-[14px] font-vollkorn font-semibold transition-colors duration-300 ${isActive
                      ? "text-secondary"
                      : "text-accent/50 group-hover:text-accent"
                    }`}
                >
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="subnav-active"
                    className="absolute -bottom-[13px] left-0 right-0 h-[3px] bg-secondary rounded-full"
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