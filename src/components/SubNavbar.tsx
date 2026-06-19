"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SubNavbarProps {
  items?: { name: string; href: string }[];
  title?: string;
}

export const SubNavbar: React.FC<SubNavbarProps> = ({ items, title }) => {
  const pathname = usePathname();

  if (title) {
    return (
      <div className="bg-bg-ivory/95 backdrop-blur-md border-b mt-[var(--site-header-height)] border-accent/5 sticky top-[var(--site-header-height)] z-[90]">
        <div className="container-site">
          <p className="py-3 text-center text-sm font-vollkorn font-semibold tracking-wide text-secondary uppercase">
            {title}
          </p>
        </div>
      </div>
    );
  }

  if (!items?.length) return null;

  return (
    <div className="bg-bg-ivory/95 backdrop-blur-md border-b mt-[var(--site-header-height)] border-accent/5 sticky top-[var(--site-header-height)] z-[90] overflow-hidden pt-3">
      <div className="container-site overflow-hidden">
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