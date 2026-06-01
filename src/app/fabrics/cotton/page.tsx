"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { QuoteModal } from "@/components/QuoteModal";
import { CheckCircle, Truck, Package, Layers, Palette, ArrowRight, } 
from "lucide-react";
import { Toast } from "@/components/Toast";
import { Leaf, Sun, Wind, Award, } from "lucide-react";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import CottonFaqs from '../../../components/CottonFaqs'

export default function CottonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleGetQuote = () => {
    setIsModalOpen(true);
  };

    const cottonFabrics = [
  {
    title: "Organic Cotton Fabric",
    description:
      "Organic cotton fabrics are produced without harmful chemicals or pesticides, making them ideal for sustainable and eco-conscious fashion collections.",
  },
  {
    title: "Cotton Poplin Fabric",
    description:
      "Cotton poplin features a smooth surface and lightweight structure, commonly used for shirts, dresses, and premium apparel.",
  },
  {
    title: "Cotton Slub Fabric",
    description:
      "Cotton slub fabrics offer natural texture and visual depth, perfect for casual wear and contemporary fashion styles.",
  },
  {
    title: "Cotton Cambric Fabric",
    description:
      "Lightweight and soft, cotton cambric fabrics are ideal for summer garments, women’s wear, and breathable apparel collections.",
  },
  {
    title: "Cotton Satin Fabric",
    description:
      "Cotton satin combines the comfort of cotton with a smooth luxurious finish suitable for premium fashion garments.",
  },
  {
    title: "Printed Cotton Fabrics",
    description:
      "Custom printed cotton fabrics are widely used for designer collections, resort wear, ethnic fashion, and modern apparel manufacturing.",
  },
    ];

    const fabricUses = [
  "Dresses",
  "Shirts",
  "Co-ord Sets",
  "Kidswear",
  "Women’s Fashion",
  "Resort Wear",
  "Lounge Wear",
  "Ethnic Apparel",
  "Home Textiles",
  "Designer Collections",
    ];

    const fabricFeatures = [
  "Soft and Breathable Feel",
  "Lightweight Comfort",
  "Skin-Friendly Texture",
  "Excellent Moisture Absorption",
  "Durable Fabric Structure",
  "Easy Maintenance",
  "High Print Compatibility",
  "Natural Aesthetic Appeal",
    ];

   const cottonTrends = [
  "Minimal Earthy Tones",
  "Botanical & Floral Prints",
  "Digital Textile Printing",
  "Soft Pastel Palettes",
  "Lightweight Resort Fabrics",
  "Sustainable Fashion Textiles",
  "Textured Cotton Surfaces",
  "Contemporary Ethnic Fusion Designs",
    ]   ;

   const bulkOrders = [
  "Fashion Brands",
  "Apparel Manufacturers",
  "Private Labels",
  "Boutique Designers",
  "Export Businesses",
  "Startup Clothing Brands",
    ];

    const chooseVastraa = [
  {
    title: "Sustainable Manufacturing",
    description:
      "Eco-conscious textile production focused on responsible fabric sourcing and modern manufacturing practices.",
  },
  {
    title: "Premium Fabric Quality",
    description:
      "Carefully crafted cotton fabrics with superior texture, durability, and finishing.",
  },
  {
    title: "Custom Printing Solutions",
    description:
      "Advanced digital, reactive, and sublimation printing tailored for fashion brands.",
  },
  {
    title: "Fast Sampling & Production",
    description:
      "Efficient sampling and streamlined bulk production workflows.",
  },
  {
    title: "Export-Ready Manufacturing",
    description:
      "Global-quality textile standards suitable for international fashion markets.",
  },
  {
    title: "Fashion-Focused Expertise",
    description:
      "Trend-aware textile solutions designed for modern apparel brands and creative collections.",
  },
    ];

    const popularSearches = [
  "Premium Cotton Fabrics",
  "Sustainable Cotton Fabrics",
  "Printed Cotton Fabrics",
  "Custom Textile Printing",
  "Digital Printed Cotton Fabrics",
  "Cotton Fabrics for Dresses",
  "Export Quality Cotton Fabrics",
  "Cotton Fabric Manufacturer",
  "Fashion Fabrics for Apparel Brands",
  "Bulk Cotton Fabric Suppliers",
    ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName="Organic Cotton"
      />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image
          src="/images/fabric-cotton.png"
          alt="Organic Cotton"
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Organic <span className="text-secondary">Cotton</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium Textile Solutions Tailored For You. From fabric selection to final print, we handle the rest.
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
      <RelatedDesigns fabricId="f1" fabricName="Cotton" />

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
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 60s x 60s Combed</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 120 - 150 GSM</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> GOTS Certified</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Palette size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Printing Technique</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Digital Reactive</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> High-Density Pigment</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 300+ DPI Precision</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Package size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Minimum Orders</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 50 Meters MOQ</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Custom Width Options</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Multi-Design Support</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Delivery & Bulk</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> 4-7 Days Delivery</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Global Doorstep Cargo</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Bulk Discounts Avail.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Content Section */}
      <section className="py-24 container mx-auto flex flex-col gap-[28px]">
      
      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Premium Cotton Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Discover premium cotton fabrics crafted for modern fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we combine sustainable textile manufacturing with custom fabric printing to deliver export-quality cotton fabrics for every fashion need. From fast sampling to bulk production, our cotton fabric solutions are designed to support brands that value comfort, quality, and creativity.
      </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      About <span className="text-secondary italic">Cotton Fabrics.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Cotton fabric has remained one of the most loved textiles in the fashion industry for generations. Known for its softness, breathability, and versatility, cotton is widely used across apparel, lifestyle, and home textile industries. Whether for casual wear, luxury fashion collections, or sustainable clothing brands, cotton fabrics continue to be a preferred choice because of their natural comfort and timeless appeal. 
      </p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we offer premium cotton fabrics suitable for custom printing, fashion manufacturing, and export production. </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      What are <span className="text-secondary italic">Cotton Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Cotton fabrics are textiles made from natural cotton fibers harvested from the cotton plant. These fibers are spun into yarn and woven or knitted into different types of fabrics suitable for apparel and textile applications. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Cotton fabrics are valued for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Breathability</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Soft texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Moisture absorption</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Durability</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Print compatibility</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Skin-friendly comfort </li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">They are widely used by fashion brands because they balance comfort, aesthetics, and functionality.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
       Why Fashion Brands<span className="text-secondary italic"> Prefer Cotton Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Cotton fabrics are one of the most preferred materials in modern fashion because they adapt effortlessly to different styles, seasons, and apparel categories. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Fashion brands choose cotton fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Comfortable everyday wear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Excellent print clarity </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable fashion collections </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight and breathable garments</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium texture and finish</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Long-lasting fabric quality</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Easy dyeing and customization</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">From luxury labels to emerging streetwear brands, cotton fabrics remain essential in apparel manufacturing.</p>
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

      {/* TYPES OF COTTON FABRICS SECTION */}
      <section className="container mx-auto flex flex-col gap-[14] pb-20">
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Types of <span className="text-secondary italic">Cotton Fabrics</span></h2>
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
              Best Uses of Cotton Fabrics
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
          Cotton fabrics are suitable for a wide range of fashion and textile
          applications, making them ideal for both casual and premium fashion
          brands.
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
            Cotton fabrics stand out because of their natural comfort,
            durability, and adaptability across modern fashion applications.
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

       {/* WHY BUY COTTON SECTION */}
        <section className="container mx-auto flex flex-col gap-[14] py-15">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Why Buy Cotton Fabrics From <span className="text-secondary italic">Vastraa Global ?</span></h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we help fashion brands transform ideas into high-quality textile products through premium cotton fabric manufacturing and custom printing solutions.</p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Why brands choose us:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable textile manufacturing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Export-quality cotton fabrics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Custom textile printing solutions</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fast fabric sampling</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Bulk production capabilities</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Trend-driven fabric collectionsc</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium finishing standards</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Global fashion industry expertisea</li>
      </ul>
       <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">We work closely with fashion labels, apparel manufacturers, startups, and designers to deliver fabrics tailored to their creative vision.</p>
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
        Cotton Fabric <span className="text-secondary italic">Trends 2026</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        The demand for premium cotton fabrics continues to grow as fashion
        brands shift toward sustainability, comfort, and expressive design.
        Modern consumers increasingly prefer breathable, natural, and
        eco-conscious fabrics, making cotton a leading choice for future
        collections.
      </p>
    </div>



    {/* Trend Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {cottonTrends.map((trend, index) => (
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

      {/* BULK ORDERS SECTION */}
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
          Vastraa Global supports bulk cotton fabric manufacturing for:
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
            From sampling to large-scale production, we provide scalable textile
            solutions tailored to your business requirements.
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

      <CottonFaqs/>


      {/* Upload Section */}
      <FabricUpload />

      {/* Expert Consultation */}
      <ExpertConsultation />

      <Footer />
    </main>
  );
}

