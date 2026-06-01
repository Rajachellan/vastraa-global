"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, Globe, Award, Droplets, Sparkles, Zap, Activity, TreeDeciduous, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import ViscoseFaqs from '../../../components/ViscoseFaqs'

export default function ViscosePage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Sustainable Viscose sent successfully!" });
  };
    const viscoseFabrics = [
  {
    title: "Pure Viscose Fabric",
    description:
      "Pure viscose fabrics offer exceptional softness, fluid drape, and lightweight comfort ideal for elegant apparel collections.",
  },
  {
    title: "Lightweight Viscose Fabric",
    description:
      "Lightweight viscose fabrics are ideal for breathable summer wear, resort fashion, and flowy garments.",
  },
  {
    title: "Viscose Rayon Fabric",
    description:
      "Viscose rayon fabrics are widely used for dresses, tops, and contemporary fashion garments because of their smooth texture and luxurious feel.",
  },
  {
    title: "Printed Viscose Fabric ",
    description:
      "Custom printed viscose fabrics are perfect for designer collections, modern apparel brands, and premium fashion manufacturing.",
  },
  {
    title: "Viscose Slub Fabric ",
    description:
      "Viscose slub fabrics provide subtle texture and visual depth suitable for relaxed and artisanal fashion aesthetics.",
  },
  {
    title: "Viscose Blend Fabric",
    description:
      "Viscose blends combine softness with enhanced durability and versatility for various apparel applications.",
  },
    ];

    const fabricUses = [
  "Dresses",
  "Co-ord Sets",
  "Kidswear",
  "Women’s Fashion",
  "Resort Wear",
  "Lounge Wear",
  "Ethnic Apparel",
  "Home Textiles",
  "Designer Collections",
  "Casualwear",
  "Scarves and overlays",
  "Contemporary ethnic wear",
  "Premium fashion collections"
    ];

    const fabricFeatures = [
  "Smooth silky texture",
  "Excellent drape",
  "Breathable structure",
  "Vibrant print clarity",
  "Soft touch against skin",
  "Easy Maintenance",
  "Elegant fabric movement",
  "Premium aesthetic appeal"
    ];

    const viscoseTrends = [
      "Abstract digital prints",
      "Soft pastel collections",
      "Botanical-inspired patterns",
      "Fluid resort wear",
      "Contemporary ethnic fusion styles",
      "Minimal luxury aesthetics",
      "Lightweight layered fashion",
      "Sustainable-inspired apparel collections",
    ];

    const bulkOrders = [
  "Fashion Brands",
  "Apparel Manufacturers",
  "Private Clothing Labels",
  "Boutique Lables",
  "Export Businesses",
  "Resort wear collections "
    ];

    const chooseVastraa = [
  {
    title: "Sustainable Manufacturing",
    description:
      "Modern textile production focused on responsible and efficient manufacturing practices.",
  },
  {
    title: "Premium Fabric Quality",
    description:
      "High-quality viscose fabrics crafted with superior softness, finish, and durability.",
  },
  {
    title: "Custom Textile Printing",
    description:
      "Advanced printing solutions designed for contemporary fashion collections.",
  },
  {
    title: "Fast Sampling & Production",
    description:
      "Efficient workflows for rapid development and bulk manufacturing.",
  },
  {
    title: "Export-Ready Standards",
    description:
      "Global-quality textile production suitable for international apparel markets.",
  },
  {
    title: "Fashion-Focused Expertise",
    description:
      "Textile solutions tailored for modern fashion brands and creative collections",
  },
    ];

    const popularSearches = [
  "Premium Viscose Fabrics",
  "Sustainable Viscose Fabrics",
  "Printed Viscose Fabrics",
  "Soft Viscose Fabrics",
  "Custom Printed Viscose Fabrics ",
  "Lightweight Fashion Fabrics",
  "Viscose Fabric For Dresses",
  "Bulk Viscose Fabric Suppliers",
   "Viscose Fabric Manufacturer ",
   "Viscose Rayon Fabrics "
    ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/printing-cloths (1).jpg"
          alt="Premium Sustainable Viscose" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Sustainable <span className="text-secondary">Viscose</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              The silky touch of nature. Derived from certified wood pulp, our viscose offers a luxurious drape and vibrant color clarity for the modern wardrobe.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRequestSample}
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-secondary/20"
            >
              <Send size={18} />
              Request Sample
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f3" fabricName="Viscose" />

      {/* Massive Content Section */}
      <section className="py-24 container mx-auto flex flex-col gap-[28px]">
      
      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Premium Linen Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Discover premium viscose fabrics crafted for modern fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we provide high-quality viscose fabric solutions designed for softness, fluid drape, and luxurious comfort. From custom textile printing to bulk manufacturing, our viscose fabrics are tailored for contemporary fashion collections and export-quality apparel production.
      </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      About <span className="text-secondary italic">Viscose  Fabrics.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Viscose fabric is one of the most versatile and elegant textiles used in modern fashion. Known for its silky softness, lightweight feel, and graceful drape, viscose is widely preferred for premium apparel and designer collections.
      </p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Its ability to blend comfort with luxury aesthetics makes viscose fabrics a popular choice among fashion brands seeking sophisticated and breathable textiles.</p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we offer premium viscose fabrics suitable for custom printing, fashion manufacturing, and large-scale apparel production.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      What are <span className="text-secondary italic">Viscose Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Viscose fabrics are semi-natural textiles made from regenerated cellulose fibers derived from wood pulp. These fibers are processed to create soft, breathable, and smooth fabrics commonly used in fashion and lifestyle applications.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Viscose fabrics are valued for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Silky-soft texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight comfort </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant drape</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Breathability</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Moisture absorption </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Vibrant print compatibility</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Smooth luxurious finish</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Because of their premium appearance and versatility, viscose fabrics are widely used across contemporary fashion collections.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
       Why Fashion Brands<span className="text-secondary italic"> Prefer Viscose Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Viscose fabrics have become a favorite in modern fashion because they combine softness, fluid movement, and refined aesthetics.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Fashion brands choose Viscose fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Luxury-inspired texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight breathable garments</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant fabric drape </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight and breathable garments</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Vibrant print results</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Comfortable everyday wear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Contemporary fashion silhouettes</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium apparel collections</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">From dresses and co-ords to resort wear and designer garments, viscose fabrics help create effortlessly stylish fashion pieces.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      The Evolution of Viscose Fabrics<span className="text-secondary italic"> in Modern Fashion</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Viscose fabrics evolved as an innovative alternative to silk and quickly became a major textile in global fashion.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Today’s fashion industry uses Linen fabrics not only for comfort but also for: </p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable-inspired fashion </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Digital textile printing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Contemporary designer wear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Luxury casualwear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Resort and vacation collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Soft-flowing apparel designs</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Modern textile manufacturing has further enhanced viscose fabrics with advanced finishing techniques, improved durability, and premium print compatibility.</p>
      </div>
      </section>

       <section className="container mx-auto flex flex-col gap-[14] pb-20">
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Types of <span className="text-secondary italic">Viscose Fabrics</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-6">
      {viscoseFabrics.map((item, index) => (
      <div
      key={index}
      className="bg-white border border-[#D4AF37]/30 rounded-3xl p-5 md:p-7 shadow-sm hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 leading-snug">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {item.description}
      </p>
    </div>
    ))}
    </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Uses Card */}
      <div className="bg-white rounded-[32px] p-6 md:p-10 border border-[#D4AF37]/20 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
            <span className="text-[#D4AF37] text-xl">✦</span>
          </div>

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[3px] text-xs font-medium">
              Fashion Applications
            </p>

            <h2 className="text-2xl md:text-4xl font-semibold text-black">
              Best Uses of Viscose Fabrics
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
         Viscose fabrics are suitable for a wide range of premium fashion applications
        </p>

        <div className="flex flex-wrap gap-3">
          {fabricUses.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm md:text-base text-black font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>



      {/* Features Card */}
      <div className="bg-[#D4AF37] rounded-[32px] p-6 md:p-10 text-white relative overflow-hidden">

        <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-xl">✦</span>
            </div>

            <div>
              <p className="uppercase tracking-[3px] text-xs font-medium text-white/80">
                Fabric Advantages
              </p>

              <h2 className="text-2xl md:text-4xl font-semibold">
                Unique Characteristics
              </h2>
            </div>
          </div>

          <p className="text-white/90 leading-relaxed text-sm sm:text-base mb-8">
            Viscose fabrics are admired for their luxurious appearance and comfortable feel. 
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fabricFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
              >
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </div>
      </section>

       <section className="container mx-auto flex flex-col gap-[14] py-15">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Why Buy Viscose Fabrics From <span className="text-secondary italic">Vastraa Global ?</span></h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we help fashion brands create premium apparel collections through high-quality viscose fabric manufacturing and custom textile printing solutions.</p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Why brands choose us:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable textile manufacturing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Export-quality Viscose fabrics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Reliable global manufacturing standards</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Advanced custom printing </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fast sampling support</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Bulk production capabilities </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium Fabric Finishing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fashion-focused textile expertise</li>
      </ul>
       <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">We work closely with fashion brands, designers, and apparel manufacturers to deliver fabrics tailored to modern creative and commercial requirements.</p>
       </section>

      <section className="container mx-auto relative overflow-hidden py-16 md:py-24 bg-[#faf7f2]">

    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className=" text-center mb-14">

      <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
        Fashion Industry Insights
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
        Viscose Fabric <span className="text-secondary italic">Trends 2026</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Viscose fabrics continue to grow in popularity as fashion trends move toward fluid silhouettes, comfort-driven styling, and expressive prints.
      </p>
    </div>



    {/* Trend Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {viscoseTrends.map((trend, index) => (
        <div
          key={index}
          className="group relative bg-white border border-[#D4AF37]/15 rounded-[28px] p-6 md:p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >

          {/* Top Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#f4df9b]"></div>

          {/* Number */}
          <div className="text-5xl font-bold text-[#D4AF37]/15 mb-10">
            0{index + 1}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-black leading-snug mb-5">
              {trend}
            </h3>

            <div className="flex items-center gap-2">
              <div className="w-10 h-[2px] bg-[#D4AF37] rounded-full group-hover:w-16 transition-all duration-500"></div>

              <span className="text-xs uppercase tracking-[2px] text-gray-500">
                Trending
              </span>
            </div>
          </div>

        </div>
      ))}

    </div>

  </div>
      </section>

      <section className="md:py-15 bg-[#faf7f2] mt-7">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="relative overflow-hidden bg-white border border-[#D4AF37]/20 rounded-[36px] p-6 sm:p-10 lg:p-14">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center">

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-5">
          Bulk Manufacturing
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8">
          We Take Bulk Orders Too!
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Vastraa Global supports bulk Viscose fabric manufacturing for:
        </p>



        {/* Tags */}
        <div className="flex flex-wrap gap-4 mb-10" style={{justifyContent:"center"}}>

          {bulkOrders.map((item, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-full bg-[#faf7f2] border border-[#D4AF37]/20 text-black text-sm sm:text-base font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
              {item}
            </div>
          ))}

        </div>
       {/* Bottom Text */}
        <div className="border-t border-[#D4AF37]/15 pt-2">

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          From fabric development to large-scale production, we provide scalable textile solutions tailored for growing fashion businesses. 
          </p>
        </div>
      </div>
      </div>
    </div>
      </section>

      <section className="py-12 md:py-18 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14 ">

      <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
        Why Brands Choose Us
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
        Why Choose Vastraa Global?
      </h2>

    </div>



    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {chooseVastraa.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white border border-[#D4AF37]/15 rounded-[30px] p-6 md:p-8 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
        >

          {/* Top Line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

          {/* Number */}
          <div className="text-5xl font-bold text-[#D4AF37]/15 mb-10">
            0{index + 1}
          </div>

          {/* Content */}
          <div>

            <h3 className="text-xl md:text-2xl font-semibold text-black leading-snug mb-4 group-hover:text-[#D4AF37] transition-all duration-300">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

          </div>

        </div>
      ))}

    </div>
    </div>
      </section>

       <section className="py-16 md:py-24 bg-[#faf7f2]">

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-10">

      <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
        Trending Keywords
      </p>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
        Popular Searches
      </h2>

    </div>



    {/* Search Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">

      {popularSearches.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >

          <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed hover:text-[#D4AF37] transition-all duration-300 cursor-pointer">
            {item}
          </p>

        </div>
      ))}

    </div>

  </div>

       </section>

       <ViscoseFaqs/>

      <Footer />
    </main>
  );
}

