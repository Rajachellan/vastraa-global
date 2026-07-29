"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { getHeroVideoSrc, getHeroVideoPoster } from "@/lib/heroVideo";

const metrics = [
  { label: "Legacy", value: "40+ Years" },
  { label: "Capacity", value: "75K Meters" },
  { label: "Reach", value: "20+ Nations" },
  { label: "Lead Time", value: "4-7 Days" },
];

export const B2BHero = () => {
  const heroVideoSrc = getHeroVideoSrc();
  const heroPoster = getHeroVideoPoster();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative hero-viewport flex items-start lg:items-center overflow-hidden w-full max-w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">



        
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster || undefined}
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: heroPoster ? `url(${heroPoster})` : undefined }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-l from-accent/70 via-accent/30 to-black/20" />
      </div>

      {/* Content — generous spacing below lg; laptop layout unchanged */}
      <div className="container-site relative z-10 w-full pt-[calc(var(--site-header-height)+3rem)] pb-10 sm:pb-12 md:pb-16 md:pt-[calc(var(--site-header-height)+3.5rem)] lg:pt-[max(0.75rem,calc(var(--site-header-height)+0.5rem))] lg:pb-8">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="inline-flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-7 lg:mb-4 hero-badge-offset">
            <div className="flex -space-x-2 shrink-0">
              {[Shield, Globe, Zap].map((Icon, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-accent bg-secondary flex items-center justify-center text-white shadow-lg"
                >
                  <Icon size={11} />
                </div>
              ))}
            </div>
            <span className="text-secondary font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[9px] sm:text-[10px]">
              Global Manufacturing Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading font-serif text-white mb-5 sm:mb-6 md:mb-7 lg:mb-5 break-words">
           Premium 
            <span className="text-secondary">  Digital Fabric Printing 
            </span>{" "}
            for Global Fashion Brands
          </h1>

          {/* Description */}
          <p className="hero-subtext text-white/90 mb-6 sm:mb-8 md:mb-10 lg:mb-8 max-w-2xl break-words">
          Transform your designs into vibrant, high-quality printed fabrics with our advanced digital     printing    technology. Choose from a wide range of premium fabrics, enjoy expert support, and benefit from reliable worldwide delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 lg:gap-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-secondary text-white px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 shadow-2xl group"
            >
              Get a Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform shrink-0"
              />
            </Link>
            <Link
              href="/how-we-print"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/20 text-white px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
            >
              Our Process
            </Link>
          </div>

          {/* Metrics */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 border-t border-white/10 pt-6 sm:pt-8 md:pt-10 lg:pt-8 pb-6 sm:pb-8 lg:pb-1">
            {metrics.map((item) => (
              <div key={item.label} className="min-w-0">
                <div className="text-secondary font-bold uppercase tracking-widest text-[9px] sm:text-[10px] mb-2 sm:mb-2 lg:mb-2 truncate">
                  {item.label}
                </div>
                <div className="hero-metric-value text-base sm:text-lg lg:text-xl xl:text-2xl font-serif text-white break-words">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
