"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Leaf, Globe, Award, Droplets, Thermometer, Wind, Activity, Send } from "lucide-react";
import { Toast } from "@/components/Toast";
import { useState } from "react";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import LinenFaqs from "@/components/LinenFaqs";

export default function LinenPage() {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  const handleRequestSample = () => {
    setToast({ show: true, message: "Sample request for Premium Linen sent successfully!" });
  };

   const leninfabrics = [
  {
    title: "Pure Linen Fabric",
    description:
      "Pure linen fabrics offer maximum breathability, natural texture, and timeless elegance suitable for luxury apparel and premium garments.",
  },
  {
    title: "Linen Cotton Blend Fabric",
    description:
      "Linen cotton blends combine the softness of cotton with the texture and sophistication of linen for versatile fashion applications.",
  },
  {
    title: "Printed Linen Fabric",
    description:
      "Custom printed linen fabrics are ideal for contemporary fashion collections, designer apparel, and premium lifestyle textiles.",
  },
  {
    title: "Linen Slub Fabric",
    description:
      "Linen slub fabrics feature textured surfaces and organic visual depth, perfect for relaxed and artisanal fashion aesthetics.",
  },
  {
    title: "Washed Linen Fabric ",
    description:
      "Washed linen fabrics provide a softer finish and relaxed appearance ideal for modern casualwear and resort fashion. ",
  },
  {
    title: "Lightweight Linen Fabric",
    description:
      "Lightweight linen fabrics are commonly used for breathable summer garments, dresses, shirts, and premium apparel collections.",
  },
    ];

     const leninuses = [
  "Resort wear",
  "Summer dresses",
  "Shirts and co-ords",
  "Premium casualwear",
  "Luxury ethnic wear",
  "Lounge wear ",
  "Women’s fashion ",
  "Ethnic Apparel",
  "Home Textiles",
  "Designer collections",
  "Home textiles",
  "Contemporary apparel"
    ];

    const leninFeatures = [
  "Breathable and airy texture ",
  "Lightweight feel",
  "Natural cooling effect",
  "Luxurious organic appearance",
  "Strong and durable fibers",
  "Moisture-wicking properties",
  "Eco-friendly production",
  "Timeless premium aesthetic ",
    ];


    const cottonTrends = [
  "Earth-tone linen collections",
  "Minimal natural aesthetics",
  "Soft washed linen textures",
  "Botanical and abstract prints",
  "Sustainable luxury apparel",
  "Oversized relaxed silhouettes",
  "Resort and vacation wear ",
  "Contemporary handcrafted looks",
    ]   ;

   const bulkOrders = [
  "Fashion Brands",
  "Resort wear labels",
  "Boutique designers",
  "Private clothing labels",
  "Apparel Manufacturers",
  "Export businesses",
    ];

     const chooseVastraa = [
  {
    title: "Sustainable Manufacturing",
    description:
      "Eco-conscious textile production focused on responsible fabric sourcing and modern manufacturing practices.",
  },
  {
    title: "Premium Linen Quality",
    description:
      "Carefully crafted Linen fabrics with superior texture, durability, and finishing.",
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
  "Premium Linen Fabrics",
  "Sustainable Linen Fabrics",
  "Printed Linen Fabrics",
  "Custom Textile Printing",
  "Digital Printed Linen Fabrics",
  "Linen Fabrics for Dresses",
  "Export Quality Linen Fabrics",
  "Linen Fabric Manufacturer",
  "Fashion Fabrics for Apparel Brands",
  "Bulk Linen Fabric Suppliers",
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
          src="/images/fabric-linen-premium.png" 
          alt="Premium Belgian Linen" 
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">Premium <span className="text-secondary">Linen</span></h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Timeless, durable and naturally cool. Sourced from the finest flax fields in Belgium and France. The ultimate choice for sustainable luxury.
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
      <RelatedDesigns fabricId="f2" fabricName="Linen" />

      {/* Massive Content Section */}
     
      <section className="py-20 container mx-auto flex flex-col gap-[28px]">
      
      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Premium Linen Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Discover premium linen fabrics crafted for modern fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we offer sustainable linen fabric solutions designed for breathable comfort, elegant texture, and premium fashion applications. From custom textile printing to bulk manufacturing, our linen fabrics are tailored for contemporary apparel collections and export-quality production.
      </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      About <span className="text-secondary italic">linen Fabrics.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Linen fabric is one of the oldest and most luxurious natural textiles used in fashion and lifestyle industries. Known for its breathable texture, lightweight comfort, and timeless elegance, linen remains a preferred choice for premium apparel and sustainable fashion collections.
      </p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Its natural aesthetic and sophisticated finish make linen fabrics ideal for modern designers seeking effortless style with functional comfort.</p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we provide high-quality linen fabrics suitable for custom printing, fashion manufacturing, and global apparel production.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      What are <span className="text-secondary italic">Linen  Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
     Linen fabrics are natural textiles made from flax plant fibers. These fibers are carefully processed into durable, breathable, and lightweight fabrics widely used in premium fashion and home textiles.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Linen fabrics are valued for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Natural breathability</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Luxurious texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Moisture absorption </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight comfort </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Durable fiber strength</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable production</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant drape</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Because of their premium appearance and comfort, linen fabrics are highly popular among luxury fashion brands and contemporary apparel designers.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
       Why Fashion Brands<span className="text-secondary italic"> Prefer Linen Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Linen fabrics have become a staple in modern fashion because they combine sophistication with comfort and sustainability. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Fashion brands choose Linen fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium natural texture</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Breathable summer wear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable fashion collections </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Relaxed luxury aesthetics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Lightweight garment construction</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Elegant draping </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Minimal and timeless fashion styles</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">From resort wear to designer collections, linen fabrics help brands create garments that feel refined, natural, and contemporary.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      The Evolution of linen Fabrics<span className="text-secondary italic"> in Modern Fashion</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Linen fabrics have evolved from traditional handcrafted textiles into a modern luxury material widely used in global fashion.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Today’s fashion industry uses linen fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable fashion </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Luxury resort wear </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Minimalist apparel collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium casual wear </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Contemporary ethnic fashion</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Digital textile printing</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Modern linen production now blends traditional craftsmanship with advanced textile finishing and printing technologies to meet the needs of evolving fashion trends.</p>
      </div>
      </section>

       <section className="container mx-auto flex flex-col gap-[14] pb-20">
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Types of <span className="text-secondary italic">Linen Fabrics</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-6">
      {leninfabrics.map((item, index) => (
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
              Best Uses of Lenen Fabrics
            </h2>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
        Linen fabrics are suitable for a wide range of premium fashion and lifestyle applications. 
        </p>

        <div className="flex flex-wrap gap-3">
          {leninuses.map((item, index) => (
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
          Linen fabrics are admired for their natural elegance and functional comfort. 
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leninFeatures.map((item, index) => (
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Why Buy Linen Fabrics From <span className="text-secondary italic">Vastraa Global ?</span></h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we help fashion brands create premium apparel collections through high-quality linen fabric manufacturing and custom textile printing solutions.</p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Why brands choose us:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable textile manufacturing </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Export-quality linen fabrics </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Custom fabric printing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fast sampling support</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Bulk production capabilities </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium fabric finishing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Trend-focused textile collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Reliable global manufacturing standards</li>
      </ul>
       <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">We collaborate with fashion labels, designers, and apparel brands to deliver linen fabrics tailored to modern creative and commercial needs.</p>
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
        Linen Fabric <span className="text-secondary italic">Trends 2026</span>
      </h2>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Linen fabrics continue to dominate premium fashion trends as consumers increasingly seek breathable, sustainable, and timeless textiles. 
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
          Vastraa Global supports bulk Linen fabric manufacturing for:
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
           From fabric sampling to large-scale production, we provide scalable textile solutions for growing fashion businesses worldwide. 
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
      <LinenFaqs/>
      <Footer />
    </main>
  );
}

