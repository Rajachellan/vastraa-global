"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Star, Globe, Zap, Heart, Droplets, Sparkles, Activity, Send, CheckCircle, Truck, Package, Layers, Palette, ArrowRight } from "lucide-react";
import { Toast } from "@/components/Toast";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { QuoteModal } from "@/components/QuoteModal";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import SilkFaqs from "@/components/SilkFaqs";

export default function SilkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleGetQuote = () => {
    setIsModalOpen(true);
  };

  const cottonFabrics = [
  {
    title: "Pure Silk Fabric",
    description:
      "Pure silk fabrics offer unmatched softness, natural shine, and luxurious drape suitable for premium designer garments and couture collections. ",
  },
  {
    title: "Silk Satin Fabric",
    description:
      "Silk satin fabrics feature a glossy smooth finish commonly used for luxury evening wear and elegant apparel.",
  },
  {
    title: "Silk Organza Fabric",
    description:
      "Silk organza fabrics are lightweight and sheer, ideal for layered garments, couture designs, and occasion wear.",
  },
  {
    title: "Silk Blend Fabric",
    description:
      "Silk blend fabrics combine the richness of silk with enhanced durability and versatility for contemporary fashion applications.",
  },
  {
    title:"Printed Silk Fabric",
    description:
      "Custom printed silk fabrics are widely used for luxury scarves, designer collections, and premium apparel manufacturing.",
  },
  {
    title: "Silk Chiffon Fabric",
    description:
      "Silk chiffon fabrics provide airy movement and delicate elegance perfect for dresses, overlays, and flowing silhouettes.",
  },
    ];

  const fabricUses = [
    "Designer dresses",
    "Luxury ethnic wear",
    "Bridal collections",
    "Evening gowns",
    "Scarves and accessories",
    "Resort wear",
    "Couture fashion",
    "Premium shirts and blouses",
    "Occasion wear",
    "High-end fashion collections"
    ];

    const fabricFeatures = [
      "Natural glossy sheen",
      "Ultra-soft texture",
      "Lightweight comfort",
      "Breathable structure",
      "Fluid drape",
      "Premium visual appeal",
      "Excellent color richness",
      "Timeless sophistication"
    ];

    const silkTrends=[
      "Minimal luxury aesthetics ",
      "Botanical silk prints ",
      "Contemporary fusion wear", 
      "Soft pastel silk collections",
     " Statement digital prints", 
     " Sustainable luxury fashion", 
     " Fluid draped silhouettes",
      "High-fashion resort collections "
    ]

    const bulkOrders=[
      "Luxury fashion brands",
      "Designer labels",
      "Bridal wear collections",
      "Boutique fashion houses",
      "Apparel manufacturers",
      "Export businesses"
    ]

    const chooseVastraa = [
  {
    title: "Premium Textile Manufacturing",
    description:
      "Luxury-quality silk fabrics crafted with superior finishing and precision.",
  },
  {
    title: "Custom Textile Printing ",
    description:
      "Advanced printing solutions designed for premium silk fashion collections.",
  },
  {
    title: "Export-Ready Standards ",
    description:
      "Global-quality textile production suitable for international luxury markets.",
  },
  {
    title: "Fast Sampling & Production",
    description:
      "Efficient workflows for rapid development and bulk manufacturing.",
  },
  {
    title: "Reliable Bulk Manufacturing ",
    description:
      "Scalable production support for growing apparel and textile businesses.",
  },
  {
    title: "Fashion-Focused Expertise",
    description:
      "Textile solutions tailored for designer labels and luxury fashion brands.",
  },
    ];

    const popularSearches = [
  "Premium Silk Fabrics",
  "Printed Silk Fabrics",
  "Luxury Fashion Fabrics ",
  "Pure Silk Fabrics ",
  "Silk Fabrics for Dresses",
  "Silk Satin Fabrics",
  "Designer Silk Textiles ",
  "Custom Printed Silk Fabrics",
  "Bulk Silk Fabric Suppliers",
  "Silk Fabric Manufacturer "
    ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Premium Mulberry Silk"
      />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/silk-close-up.png" 
          alt="Premium Mulberry Silk" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/30" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Mulberry <span className="text-secondary">Silk</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              The queen of textiles. Unrivaled luster, fluid drape and the ultimate canvas for high-definition digital printing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetQuote}
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-secondary/20"
            >
              Get Custom Quote
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f7" fabricName="Silk" />

      {/* Technical Details Section */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Fabric Quality</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Grade 6A Mulberry</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 12mm - 40mm Weights</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> OEKO-TEX® Certified</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Palette size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Printing Technique</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Reactive Dye Printing</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Double-Sided Support</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Vibrant Color Depth</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Package size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Minimum Orders</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 20 Meters MOQ</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Sample Runs Avail.</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Custom Widths</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Delivery & Bulk</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Express Air Cargo</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 5-10 Days Production</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Tiered Bulk Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Content Section */}

       <section className="py-24 container mx-auto flex flex-col gap-[28px]">
      
      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Premium Silk Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
     Discover premium silk fabrics crafted for luxury fashion brands, designers, and apparel manufacturers worldwide. At Vastraa Global, we offer elegant silk fabric solutions designed for sophistication, fluid drape, and timeless beauty. From custom textile printing to bulk manufacturing, our silk fabrics are tailored for premium fashion collections and export-quality apparel production.
      </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      About <span className="text-secondary italic">Slik Fabrics.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Silk fabric has long been associated with luxury, elegance, and refined craftsmanship. Known for its smooth texture, natural sheen, and graceful movement, silk remains one of the most desired textiles in the global fashion industry.
      </p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Its premium appearance and lightweight comfort make silk fabrics ideal for couture fashion, occasion wear, designer collections, and luxury apparel.</p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we provide high-quality silk fabrics suitable for custom printing, fashion manufacturing, and global textile production.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      What are <span className="text-secondary italic">Silk Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Silk fabrics are natural textiles made from fibers produced by silkworms. These fibers are woven into luxurious fabrics known for their softness, shine, and elegant drape.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Silk fabrics are valued for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Smooth luxurious texture </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Natural sheen</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight comfort </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Breathability </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant drape</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium aesthetic appeal</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Excellent dye and print absorption</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Because of their rich appearance and timeless elegance, silk fabrics are widely used in premium fashion and designer apparel collections.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
       Why Fashion Brands<span className="text-secondary italic"> Prefer Silk Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Silk fabrics continue to define luxury fashion because they combine sophistication, comfort, and timeless style.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Fashion brands choose Silk fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium luxury appeal</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant garment flow </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Soft and smooth texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>High-end fashion collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Rich color absorption</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight breathable comfort </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Couture and occasion wear</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">From runway collections to bridal fashion, silk fabrics help create garments that feel refined, graceful, and visually luxurious. </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      The Evolution of Cotton Fabrics<span className="text-secondary italic"> in Modern Fashion</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Cotton fabrics have evolved significantly from traditional weaving techniques to advanced textile manufacturing and digital printing processes. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Today’s fashion industry uses cotton fabrics not only for comfort but also for: </p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable fashion production</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Digital textile printing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Performance apparel</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Eco-conscious collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Contemporary fashion aesthetics </li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Modern cotton fabrics now combine traditional craftsmanship with innovative textile technology to meet the changing demands of global fashion brands.</p>
      </div>
      </section>

       <section className="container mx-auto flex flex-col gap-[14] pb-20">
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Types of <span className="text-secondary italic">Silk Fabrics</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-6">
      {cottonFabrics.map((item, index) => (
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
              Best Uses of Silk Fabrics
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
          Silk fabrics are widely used across luxury fashion and premium lifestyle applications.
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
          Silk fabrics are admired for their elegance, softness, and luxurious finish.
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Why Buy Silk Fabrics From <span className="text-secondary italic">Vastraa Global ?</span></h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we help fashion brands create luxurious apparel collections through premium silk fabric manufacturing and custom textile printing solutions.</p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Why brands choose us:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Export-quality silk fabrics </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium fabric finishing </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Advanced custom textile printing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fast fabric sampling</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Bulk production capabilities</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Luxury-focused textile expertise</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>PGlobal manufacturing standards </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Trend-driven fabric collections </li>
      </ul>
       <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">We collaborate with fashion brands, designers, and apparel manufacturers to deliver silk fabrics tailored for luxury fashion and modern creative needs.</p>
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
        Silk Fabric <span className="text-secondary italic">Trends 2026</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Silk fabrics continue to evolve with changing luxury fashion trends and modern textile innovation.
      </p>
    </div>



    {/* Trend Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {silkTrends.map((trend, index) => (
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
          Vastraa Global supports bulk Silk fabric manufacturing for:
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
           From fabric sampling to large-scale production, we provide scalable textile solutions for premium fashion businesses worldwide.
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

    <SilkFaqs/>

      {/* Upload Section */}
      <FabricUpload />

      {/* Expert Consultation */}
      <ExpertConsultation />

      <Footer />
    </main>
  );
}

