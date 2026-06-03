"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import google from "../../public/images/google-removebg-preview.png"
const slides = [
  {
    id: 1,
    title: "Premium Textile Solutions Tailored For You",
    image: "/images/hero-b2b-new.png",
    ctaText: "Get Expert Consultation",
    ctaLink: "/contact-us",
  },
  {
    id: 2,
    title: "From Fabric Selection To Final Print",
    image: "/images/mulberry_silk_texture.png",
    ctaText: "Explore Printing Methods",
    ctaLink: "/how-we-print",
  },
  {
    id: 3,
    title: "Smart Printing Suggestions Based On Your Fabric",
    image: "/images/warehouse.png",
    ctaText: "Upload Your Design",
    ctaLink: "/fabrics",
  }
];

export const B2BHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // <section className="relative h-screen min-h-[1000px] md:min-h-[1200px] xl:min-h-[900px] flex items-center overflow-hidden bg-accent">
 
    //   <AnimatePresence mode="popLayout">
    //     <motion.div
    //       key={current}
    //       initial={{ opacity: 0, scale: 1.05 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 1.5, ease: "easeInOut" }}
    //       className="absolute inset-0 z-0"
    //     >
    //       <Image
    //         src={slides[current].image}
    //         alt="Vastraa Global Hero"
    //         fill
    //         className="object-cover opacity-70"
    //         priority
    //       />
    //       <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
    //       <div className="absolute inset-0 bg-gradient-to-t from-accent via-transparent to-transparent" />
    //     </motion.div>
    //   </AnimatePresence>

    //   <div className="container mx-auto px-6 relative z-10 mt-10">
    //     <div className="max-w-4xl">
    //       <AnimatePresence mode="wait">
    //         <motion.div
    //           key={current}
    //           initial={{ opacity: 0, y: 30 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: -30 }}
    //           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    //         >
    //           <motion.div
    //             initial={{ opacity: 0, x: -20 }}
    //             animate={{ opacity: 1, x: 0 }}
    //             transition={{ delay: 0.3, duration: 0.6 }}
    //             className="inline-flex items-center gap-4 mb-8"
    //           >
    //             <div className="flex -space-x-2 mt-20 md:mt-10 xl:mt-30">
    //               {[1, 2, 3].map((i) => (
    //                 <div key={i} className="w-8 h-8 rounded-full border-2 border-accent bg-secondary flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
    //                   {i === 1 ? <Shield size={12} /> : i === 2 ? <Globe size={12} /> : <Zap size={12} />}
    //                 </div>
    //               ))}
    //             </div>
    //             <span className="text-secondary mt-20 md:mt-10 xl:mt-30 font-bold tracking-[0.3em] uppercase text-[10px]">
    //               Global Manufacturing Excellence
    //             </span>
                
    //           </motion.div> 
    //           <br />
            
    //         <div className="inline-flex items-center mb-5 gap-2 px-4 py-1.5 md:py-2 text-xs md:text-base rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
    //           <span className="text-yellow-400 text-lg">★</span>
    //           <span className="text-white font-medium">
    //             <span className="font-semibold">4.8/5</span>
    //             <span className="opacity-80 ml-1">Rating on</span>
    //           </span>
    //           <span className="font-semibold text-white">Google</span>
    //           <Image src={google} alt="Google" width={18} height={18} className="object-contain" />
    //         </div>

    //           <h1 className="text-4xl sm:text-5xl md:text-6xl  font-serif text-white mb-8 leading-[1.1]">
    //             {slides[current].title.split(' ').map((word, i) => (
    //               <span key={i}>
    //                 {i === 3 || i === 4 ? <span className="text-secondary">{word} </span> : `${word} `}
    //               </span>
    //             ))}
    //           </h1>
 
    //           <p className="text-lg sm:text-xl md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl font-medium">
    //             Precision in Print, Excellence in Fabric. Elevating global brands with 40+ years of textile heritage and state-of-the-art digital printing.
    //           </p>

    //           <div className="flex flex-col sm:flex-row gap-6">
    //             <Link
    //               href={slides[current].ctaLink}
    //               className="inline-flex items-center justify-center gap-4 bg-secondary text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 group shadow-2xl"
    //             >
    //               {slides[current].ctaText}
    //               <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
    //             </Link>
    //             <Link
    //               href="/how-we-print"
    //               className="inline-flex items-center justify-center gap-4 border border-white/20 text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
    //             >
    //               Our Process
    //             </Link>
    //           </div>
    //         </motion.div>
    //       </AnimatePresence>

          
    //       <div className="flex items-center gap-4 mt-10">
    //         {slides.map((_, idx) => (
    //           <button
    //             key={idx}
    //             onClick={() => setCurrent(idx)}
    //             className={`transition-all duration-500 rounded-full h-1 ${current === idx ? "w-12 bg-secondary" : "w-6 bg-white/30"}`}
    //             aria-label={`Go to slide ${idx + 1}`}
    //           />
    //         ))}
    //       </div>

         
    //       <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
    //         {[
    //           { label: "Legacy", val: "40+ Years" },
    //           { label: "Capacity", val: "75K Meters" },
    //           { label: "Reach", val: "20+ Nations" },
    //           { label: "Lead Time", val: "4-7 Days" }
    //         ].map((item, i) => (
    //           <div key={i} className="space-y-2">
    //             <div className="text-secondary font-bold uppercase tracking-widest text-[9px] md:text-[10px] opacity-80">{item.label}</div>
    //             <div className="text-xl md:text-2xl font-serif text-white">{item.val}</div>
    //           </div>
    //         ))}
    //       </div>


          
    //     </div>
    //   </div>
    // </section>
<section className="relative min-h-screen flex items-center overflow-hidden">
  
  {/* Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/vastraa_home_banner.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-accent/60 to-black/40" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-0">
    <div className="max-w-4xl pt-16 lg:pt-30">

      {/* Top Badge */}
      <div className="inline-flex flex-wrap items-center gap-3 mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-accent bg-secondary flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
            >
              {i === 1 ? (
                <Shield size={12} />
              ) : i === 2 ? (
                <Globe size={12} />
              ) : (
                <Zap size={12} />
              )}
            </div>
          ))}
        </div>

        <span className="text-secondary font-bold tracking-[0.25em] uppercase text-[10px] sm:text-xs">
          Global Manufacturing Excellence
        </span>
      </div>
<br />
      {/* Google Rating */}
      <div className="inline-flex items-center mb-6 gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
        <span className="text-yellow-400 text-lg">★</span>

        <span className="text-white font-medium text-sm md:text-base">
          <span className="font-semibold">4.8/5</span>
          <span className="opacity-80 ml-1">Rating on</span>
        </span>

        <span className="font-semibold text-white text-sm md:text-base">
          Google
        </span>

        <Image
          src={google}
          alt="Google"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-6 leading-tight">
        Premium Textile
        <span className="text-secondary"> Manufacturing</span>
        <br />
        for Global Fashion Brands
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
        Precision in Print, Excellence in Fabric. Elevating global brands with
        40+ years of textile heritage, advanced manufacturing capabilities, and
        state-of-the-art digital printing technology.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 shadow-2xl group"
        >
          Get a Quote

          <ArrowRight
            size={18}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>

        <Link
          href="/how-we-print"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all duration-500 backdrop-blur-sm"
        >
          Our Process
        </Link>
      </div>

      {/* Metrics */}
      <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 border-t border-white/10 pt-8">
        {[
          {
            label: "Legacy",
            value: "40+ Years",
          },
          {
            label: "Capacity",
            value: "75K Meters",
          },
          {
            label: "Reach",
            value: "20+ Nations",
          },
          {
            label: "Lead Time",
            value: "4-7 Days",
          },
        ].map((item, index) => (
          <div key={index}>
            <div className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">
              {item.label}
            </div>

            <div className="text-lg sm:text-xl lg:text-2xl font-serif text-white">
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

