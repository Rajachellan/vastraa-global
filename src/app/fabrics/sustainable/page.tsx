"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Wind, Droplets, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import SustainableFaqs from "@/components/SustainableFaqs";

export default function SustainableFabricsPage() {
  const sustainablefabrics = [
  {
    title: "Organic Cotton Fabric",
    description:
      "Organic cotton fabrics are produced without harmful chemicals or pesticides, making them ideal for sustainable and eco-conscious fashion collections.",
  },
  {
    title: "Linen Fabric",
    description:
      "Linen fabrics are naturally sustainable textiles known for breathability, durability, and timeless elegance.",
  },
  {
    title: "Sustainable Viscose Fabric",
    description:
      "Responsibly sourced viscose fabrics provide lightweight comfort and luxurious drape with reduced environmental impact.",
  },
  {
    title:"Recycled Fabric",
    description:
      "Recycled fabrics are created using regenerated textile materials that help reduce waste and support circular fashion production.",
  },
  {
    title: "Hemp Fabric",
    description:
      "Hemp fabrics are durable, breathable, and environmentally friendly textiles increasingly used in sustainable fashion collections.",
  },
  {
    title: "Bamboo Fabric",
    description:
      "Bamboo fabrics offer softness, breathability, and a naturally eco-friendly textile alternative for modern apparel.",
  },
    ];

  const fabricUses=[
    "Eco-friendly apparel ",
    "Resort wear",
    "Casual fashion",
    "Designer collections",
    "Sustainable streetwear ",
    "Lounge wear",
    "Luxury minimal fashion",
    "Home textiles",
    "Contemporary ethnic wear",
    "Conscious lifestyle products"
  ]

   const fabricFeatures = [
    "Eco-conscious production",
    "Breathable comfort",
    "Soft natural textures",
    "Durable fabric quality",
    "Reduced environmental impact",
    "Skin-friendly materials",
     "Premium visual appeal",
     "Responsible sourcing practices"
    ];

    const bulkOrders = [
  "Sustainable fashion brands",
  "Apparel manufacturers",
  "Boutique labels",
  "Ethical clothing startups", 
  "Private labels ",
  "Export businesses",
  "Startup Clothing Brands",
    ];

     const chooseVastraa = [
  {
    title: "Sustainable Textile Manufacturing",
    description:
      "Responsible production processes designed for environmentally conscious fashion brands.",
  },
  {
    title: "Premium Fabric Quality",
    description:
      "High-quality sustainable fabrics crafted with superior finishing and durability.",
  },
  {
    title: "Custom Textile Printing",
    description:
      "Advanced printing solutions for eco-conscious fashion collections.",
  },
  {
    title: "Fast Sampling & Production",
    description:
      "Efficient development and bulk manufacturing workflows.",
  },
  {
    title: "Export-Ready Standards",
    description:
      "Global-quality textile solutions suitable for international apparel markets.",
  },
  {
    title: "Fashion-Focused Expertise",
    description:
      "Trend-aware textile solutions designed for modern apparel brands and creative collections.",
  },
    ];

    const popularSearches = [
  "Sustainable Fabrics",
  "Eco-Friendly Fashion Fabrics",
  "Organic Cotton Fabrics",
  "Sustainable Textile Manufacturer",
  "Eco-Conscious Fabrics",
  "Premium Sustainable Textiles",
  "Recycled Fashion Fabrics",
  "Sustainable Fabric Supplier",
  "Bulk Sustainable Fabrics",
  "Sustainable Apparel Fabrics",
    ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image 
          src="/images/viscos.jpg"
          alt="Sustainable Fabrics" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 inline-block">
              Eco-Conscious Excellence
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              Premium Quality <br />
              <span className="text-secondary italic">Responsible Sourcing</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Leading the shift towards a circular textile economy with low-impact materials and zero-waste production methods.
            </p>
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all shadow-2xl flex items-center gap-3">
              Explore Eco-Collection
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Designs */}
      <RelatedDesigns fabricId="f4" fabricName="Sustainable" />

      {/* Philosophy */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 mx-auto mb-8">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Eco-Friendly Materials</h3>
              <p className="text-accent/60 leading-relaxed">
                From GOTS certified organic cotton to Tencel™ Lyocell, we prioritize fibers that regenerate our planet.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8">
                <Droplets size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Water Conservation</h3>
              <p className="text-accent/60 leading-relaxed">
                Our digital printing processes use 90% less water than traditional screen printing methods.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-accent/5 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-8">
                <Recycle size={32} />
              </div>
              <h3 className="text-2xl font-serif text-accent mb-4">Low-Waste Production</h3>
              <p className="text-accent/60 leading-relaxed">
                Precision digital technology ensures minimal ink waste and fabric off-cuts in every production run.
              </p>
            </div>
          </div>
        </div>  
      </section>

       
        {/* Massive Content Section */}
      <section className="py-24 container mx-auto flex flex-col gap-[28px]">
      
      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Premium Sustainable  Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Discover premium sustainable fabrics crafted for conscious fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we combine responsible textile manufacturing with innovative fabric solutions to create eco-conscious materials for modern fashion collections. From custom textile printing to bulk production, our sustainable fabrics are designed for brands that value quality, creativity, and environmental responsibility. 
      </p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      About <span className="text-secondary italic">Sustainable Fabrics.</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Sustainable fabrics responsible are reshaping the future of the fashion industry by promoting environmentally textile production and conscious material sourcing. As fashion brands move toward ethical manufacturing and eco-friendly collections, sustainable fabrics have become essential for modern apparel design.
      </p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">These fabrics are developed using processes and materials that reduce environmental impact while maintaining premium quality, comfort, and durability.</p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we offer sustainable fabric solutions tailored for fashion brands seeking innovative, responsible, and export-quality textiles.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      What are <span className="text-secondary italic">Sustainable Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Sustainable fabrics are textiles produced using eco-conscious materials, responsible manufacturing methods, and reduced environmental impact throughout the production process. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">These fabrics may include:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Organic fibers </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Recycled textiles</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Low-impact dyed fabrics </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Natural fiber blends</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Eco-friendly textile processes</li>
      </ul>
      </div>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">These fabrics may include:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Reduced environmental footprint </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Ethical production practices</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Long-lasting quality</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Breathable comfort</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium aesthetics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Responsible sourcing</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">They help fashion brands create collections aligned with modern sustainability values and conscious consumer expectations.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
       Why Fashion Brands<span className="text-secondary italic"> Prefer Sustainable Fabrics?</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      Sustainable fabrics have become a major focus in contemporary fashion because consumers increasingly value ethical and environmentally responsible products. 
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Fashion brands choose Sustainable fabrics for:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Eco-conscious collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium natural aesthetics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Responsible brand positioning</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Long-term textile durability</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Modern fashion appeal</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Comfortable wearable fabrics</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Reduced environmental impact</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">From luxury fashion houses to emerging clothing brands, sustainable fabrics help businesses build stronger trust and meaningful brand identity.</p>
      </div>

      <div className="flex flex-col gap-[14px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      The Evolution of Sustainable  Fabrics<span className="text-secondary italic"> in Modern Fashion</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      The fashion industry has evolved rapidly toward sustainability as brands and consumers seek alternatives to fast-fashion manufacturing practices.
      </p>
      <div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Today’s fashion industry uses Sustainable fabrics not only for comfort but also for: </p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Ethical fashion collections </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Slow fashion movements</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Eco-conscious apparel manufacturing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable resort wear</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Premium lifestyle brands</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Contemporary designer collections</li>
      </ul>
      </div>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Modern textile innovation now combines sustainability with advanced fabric technology, premium finishing, and custom printing solutions.</p>
      </div>
      </section>

       <section className="container mx-auto flex flex-col gap-[14] pb-20">
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Types of <span className="text-secondary italic">Cotton Fabrics</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-6">
      {sustainablefabrics.map((item, index) => (
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
        Sustainable fabrics are suitable for a wide range of modern fashion and lifestyle applications.
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
          Sustainable fabrics stand out because they combine environmental responsibility with premium textile performance. 
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">Why Buy Sustainable Fabrics From <span className="text-secondary italic">Vastraa Global ?</span></h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">At Vastraa Global, we help fashion brands create responsible apparel collections through sustainable textile manufacturing and premium custom printing solutions.</p>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Why brands choose us:</p>
      <ul className="flex flex-col gap-[6px] mt-2 pl-4" style={{listStyleType:"disc"}}>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Sustainable manufacturing Process</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Eco-conscious textile solutions </li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Custom fabric printing</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Fast sampling support</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Bulk manufacturing capabilities</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Trend-focused textile collections</li>
      <li className="text-gray-500" style={{fontSize:"15px"}}>Global production standards </li>
     </ul>
       <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">We collaborate with fashion labels, designers, and apparel manufacturers to deliver sustainable fabrics tailored for modern creative and commercial needs.</p>
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
          From fabric sampling to large-scale production, we provide scalable textile solutions for modern conscious fashion businesses worldwide.
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

      <SustainableFaqs/>

      <FabricUpload/>

      <ExpertConsultation/>

      <Footer />
    </main>
  );
}
