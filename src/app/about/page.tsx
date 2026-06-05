"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Printer, Layers,Upload } from "lucide-react";
import { Button } from "@/components/Button";
import aboutusimg from '../../../public/images/aboutusimg1.png'
import gotsimg from '../../../public/images/GOTS.png'
import { Certifications } from "@/sections/Certifications";
import gots from "../../../public/images/GOTS.png"
import seedex from "../../../public/images/seedex.png"
import oeko from "../../../public/images/oeko.png"
import Link from "next/link";
import global from "../../../public/images/globalrecycled.png"
import { ArrowRight } from "lucide-react";
import deliveryImg from '../../../public/images/deliveryImg.png'
import bgbanner from '../../../public/images/aboutherbg.png'
import { useState } from "react";
export default function AboutPage() {
   const [showQuoteForm, setShowQuoteForm] = useState(false);
  const certifications = [
   {
    name: "OEKO-TEX",
    image: oeko,
    fullName: "Standard 100",
    description: "Tested for harmful substances to ensure textile safety and consumer confidence.",
    color: "#00BCD4",
  },
  {
    image:gots,
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    description: "The world's leading processing standard for textiles made from organic fibers.",
    color: "#4CAF50",
  },
{
  name: "GRS",
  image: global,
  fullName: "Global Recycled Standard",
  description:
    "Ensures products contain recycled materials while meeting environmental and social responsibility standards.",
  color: "#2196F3",
},
  {
    name: "Sedex",
    image:seedex,
    fullName: "Empowering Responsible Supply Chains",
    description: "Ensuring ethical and responsible business practices across the global supply chain.",
    color: "#FF9800",
  },
 
];

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden mt-30">

  {/* Background Image */}
  <Image
    src={bgbanner}
    alt="Custom printed fabrics from India for global export markets."
    fill
    priority
    className="object-cover"
  />

 
 
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

    <div className="max-w-4xl">

      <h1 className="text-[25px] sm:text-[35px] lg:text-[45px] leading-[1.05] font-semibold mb-4 text-black">
        Custom Fabric Printing,
        <br />
        <span className="text-[#D4AF37]">
          Made Export-Ready
        </span>
      </h1>

      <p className="text-[#3d4b63] text-[15px] sm:text-[17px] leading-[1.8] mb-3">
        Vastraa Global is a custom digital fabric printing manufacturer and
        export partner from India, helping fashion, home textile, and
        lifestyle brands create premium printed fabrics for bulk and global
        orders.
      </p>

      <p className="text-[#3d4b63] text-[15px] sm:text-[17px] leading-[1.8] mb-3">
        Backed by 40+ years of textile heritage, modern digital pigment
        printing, certified quality standards, and export-ready support,
        we bring original fabric ideas to life with precision and
        consistency.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">

        <button className="px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#c8a32e] text-white font-medium transition-all duration-300">
         <Link href="/how-we-print"> Explore Our Printing Process</Link>
        </button>
         <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowQuoteForm(true)}
                >
                 Get a Custom Quote
                </Button>
       

      </div>

 {/* Popup Form */}
      {showQuoteForm && (
       <div
  className="fixed inset-0 z-[9999] pt-30 flex items-center justify-center bg-black/70 backdrop-blur-sm   overflow-hidden"
  onClick={() => setShowQuoteForm(false)}
>
         <div
  className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[24px] bg-[#F8F5F0] p-6 md:p-8 shadow-2xl"
  onClick={(e) => e.stopPropagation()}
>
            {/* Close */}
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-8">
               <img
                    src="/images/logo.png"
                    alt="Vastraa Global"
                    className="h-20 mx-auto mb-4"
                  />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2342]">
                Request a Custom Quote
              </h2>

              <div className="flex items-center justify-center gap-4 my-5">
                <div className="w-16 h-px bg-[#D4AF37]" />
                <div className="text-[#D4AF37]">✦</div>
                <div className="w-16 h-px bg-[#D4AF37]" />
              </div>

              <p className="text-gray-600">
                Share your requirements and our team will contact you shortly.
              </p>
            </div>

            {/* Form */}
         <form className="space-y-6">

  {/* Row 1 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Full Name *
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Email Address *
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid md:grid-cols-2 gap-5">
    

    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Phone / WhatsApp *
      </label>
      <input
        type="tel"
        placeholder="+91 XXXXX XXXXX"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Fabric Type
      </label>

      <input
        type="text"
        placeholder="Cotton, Silk, Linen..."
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Product Category
      </label>

      <select className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
        <option>Select Category</option>
        <option>Printed Fabrics</option>
        <option>Home Textiles</option>
        <option>Fashion Fabrics</option>
        <option>Custom Textile Design</option>
      </select>
    </div>
 <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Fabric GSM
      </label>
      <input
        type="text"
        placeholder="Enter fabric GSM"
       className="w-full h-14 rounded-xl px-4 border border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
    
  </div>

  {/* Row 4 */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Quantity Required
      </label>

      <input
        type="text"
        placeholder="500 Meters/Pieces"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-[#0A2342] mb-2">
        Delivery Timeline
      </label>

      <input
        type="text"
        placeholder="Within 30 Days"
        className="w-full h-14 rounded-xl border border-[#D4AF37] px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
    </div>
  </div>

  {/* Description */}
  <div>
    <label className="block text-sm font-medium text-[#0A2342] mb-2">
      Query *
    </label>

    <textarea
      rows={6}
      placeholder="Describe your requirements, design ideas, printing preferences, colors, dimensions, quantity and any special instructions..."
      className="w-full rounded-xl border border-[#D4AF37] px-4 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37] required"
    />
  </div>

  {/* Upload */}
  <div>
    <label className="block text-sm font-medium text-[#0A2342] mb-3">
      Upload Design / Artwork
    </label>

    <div
      className="
        border-2
        border-dashed
        border-[#D4AF37]
        rounded-3xl
        p-10
        text-center
        bg-white
        cursor-pointer
        hover:bg-[#FFFDF8]
        transition-all
      "
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
        <Upload size={32} className="text-[#D4AF37]" />
      </div>

      <h4 className="text-lg font-semibold text-[#0A2342]">
        Upload Your Design Files
      </h4>

      <p className="text-sm text-gray-500 mt-2">
        Drag & Drop or Click to Upload
      </p>

      <p className="text-xs text-gray-400 mt-3">
        JPG, PNG, PDF, AI, PSD (Max 20MB)
      </p>
<div className="flex justify-center mt-5">
  <input
    type="file"
    className="
      text-sm
      text-gray-500
      file:py-2
      file:px-6
      file:mx-5
      file:rounded-full
      file:border-0
      file:text-sm
      file:font-semibold
      file:bg-[#D4AF37]
      file:text-white
      hover:file:bg-[#C99A2E]
      cursor-pointer
    "
  />
</div>
    </div>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      w-full
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-[#C99A2E]
      to-[#D4AF37]
      text-white
      text-lg
      font-semibold
      shadow-lg
      hover:opacity-90
      transition-all 
    "
  >
    Request Custom Quote
  </button>

</form>
          </div>
        </div>
      )}


      {/* Trust Line */}
      <div className="flex flex-wrap items-center gap-3 mt-6 text-[#5b6575] text-sm sm:text-base">

        <span>40+ Years Heritage</span>

        <span className="text-[#D4AF37]">•</span>

        <span>Certified Quality</span>

        <span className="text-[#D4AF37]">•</span>

        <span>Global Export Support</span>

      </div>

      {/* Supporting Line */}
      <p className="mt-4 max-w-3xl text-[#6b7280] text-sm sm:text-base leading-relaxed">
        Printed on cotton, linen, viscose, organic cotton, and premium fabric
        blends for brands in India and global markets.
      </p>

    </div>

  </div>

</section>

      {/* Our Story & Digital Evolution */}
      {/* <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-secondary" />
                <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Our Heritage</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
                Since <span className="text-secondary">1975</span>
              </h2>
              <div className="space-y-6 text-accent/70 leading-relaxed text-lg">
                <p>
                  Our journey began in 1975, rooted in the rich traditions of screen printing. Over four decades, we honed our craft, developing a deep understanding of fabric behavior, color chemistry and textile art.
                </p>
                <p>
                  In 2018, we embraced the future of fabric printing by integrating advanced digital technologies into our operations. This evolution allowed us to achieve unparalleled precision, vibrant colors and intricate designs that were previously impossible.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/digital_printing_closeup.png"
                alt="Digital Printing Evolution"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ISC & VastraaGlobal Link */}
      {/* <section className="py-24 bg-bg-ivory border-y border-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
              Trust & <span className="text-secondary">Transparency</span>
            </h2>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-secondary/20">
  <p className="text-accent/80 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
    VastraaGlobal delivers premium textile printing solutions for global brands with a strong focus on quality, sustainability, innovation and responsible manufacturing standards.
  </p>

  <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-secondary">
    <span className="px-6 py-3 bg-secondary/5 rounded-full">GOTS Certified</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">GRS Certified</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">Sedex Member</span>
    <span className="px-6 py-3 bg-secondary/5 rounded-full">OEKO-TEX 100</span>
  </div>
</div>
          </div>
        </div>
      </section> */}

      {/* Manufacturing Excellence */}
      {/* <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-accent mb-8">
                Manufacturing <span className="text-secondary">Excellence</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-accent mb-2">Erode Facility</h4>
                    <p className="text-accent/60 leading-relaxed">
                      74A, Attayampalayam, East Colony, <br />
                      Gangapuram Post, Chithode, <br />
                      Erode 638102, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <p className="text-accent/70 leading-relaxed italic">
                  "At VastraaGlobal, we believe in turning your creative visions into reality, focusing on perfection, one print at a time."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/textile_gallery_showroom.png"
                alt="Factory Location"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

    {/* NEW CONTENT STARTS HERE */}
     <section className="py-16 md:py-14 bg-[#f7f4ef]">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* Left Image */}
      <div className="relative">

        <div className="overflow-hidden rounded-[32px]">

          <Image
            src={aboutusimg}
            alt="Custom Fabric Printing"
             width={700}
            height={800} className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
          />

        </div>

        {/* Floating Stat */}
        <div className="absolute -bottom-6 right-6 bg-white rounded-[24px] px-8 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          <h3 className="text-4xl font-semibold text-[#D4AF37]">
            75K+
          </h3>

          <p className="text-gray-600 text-sm mt-1">
            Meters Monthly Capacity
          </p>

        </div>

      </div>



      {/* Right Content */}
      <div>
      <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-3">
          About Vastraa Global
        </p>

        <h2 className="text-[28px] sm:text-[35px] lg:text-[45px] leading-[1.05] font-semibold text-black mb-3">
          Turning Creative Ideas Into
          <br />
          Premium Printed Fabrics
        </h2>

        <div className="space-y-3 mt-6">

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.3]">
          Every great fabric starts with a clear idea. At Vastraa Global, we help brands turn artwork, patterns, colour concepts, and product requirements into high-quality printed fabrics ready for production.
          </p>

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
          Our process covers design support, sampling, digital pigment printing, bulk production, quality inspection, and dispatch. Whether it is cotton, linen, viscose, organic cotton, or premium blends, each order is handled with attention to colour accuracy, fabric feel, print clarity, and finish. 
          </p>

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
            With a 75,000-meter monthly capacity, 300-meter MOQ, fast timelines, and trusted certifications, Vastraa Global is built for brands that need dependable custom fabric printing at scale.
          </p> 

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
          Premium Printed Fabrics, Made for Growing Brands. 
          </p> 

        </div>



        {/* Highlights */}
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-black/10">

          <div>
            <h3 className="text-3xl font-semibold text-[#D4AF37]">
              40+
            </h3>
            <p className="text-gray-600 mt-1">
              Years Textile Heritage
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#D4AF37]">
              300m
            </h3>
            <p className="text-gray-600 mt-1">
              Minimum Order Quantity
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#D4AF37]">
              Export
            </h3>
            <p className="text-gray-600 mt-1">
              Ready Production
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-[#D4AF37]">
              Global
            </h3>
            <p className="text-gray-600 mt-1">
              Shipping Support
            </p>
          </div>

    </div>
    </div>
    </div>
    </div>
     </section>

     <section className="py-16 md:py-14 bg-[#f7f4ef]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

      {/* Left Side */}
      <div>

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
          Our Story
        </p>

        <p className="text-[#D4AF37] text-lg font-medium mb-6">
          Custom Fabric Printing, Made Export-Ready.
        </p>

        <h2 className="text-[32px] sm:text-[42px] lg:text-[54px] leading-[1.05] font-semibold text-black">
          From Textile Heritage to Modern Fabric Printing Excellence
        </h2>

      </div>



      {/* Right Side */}
      <div className="border-l border-[#D4AF37]/20 pl-0 lg:pl-10">

        <div className="space-y-6">

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
            Our journey began in 1975 with a strong foundation in traditional
            screen printing and textile craftsmanship. Over the decades, we
            built our expertise through a deep commitment to quality,
            consistency, and customer satisfaction.
          </p>

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
            In 2018, we evolved into advanced digital fabric printing by
            integrating modern printing technologies under Indian Soft Colours
            (ISC), enabling us to deliver vibrant colours, intricate designs,
            and precision printing across a wide range of premium fabrics.
          </p>

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
            Today, Vastraa Global represents our export-focused vision, created
            to serve fashion brands, designers, home textile companies, and
            global buyers with high-quality custom printed fabrics crafted for
            modern international markets.
          </p>

          <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
            From cotton and linen to viscose and premium blends, every fabric
            we produce reflects our dedication to craftsmanship, innovation,
            and global-quality manufacturing.
          </p>

        </div>

      {/* Bottom Statement */}
        <div className="mt-3 pt-4 border-t border-black/10">
      <p className="text-[14px] sm:text-[18px] font-medium text-black italic">
            Built on experience. Driven by innovation. Trusted for quality.
          </p>
        </div>
        </div>
      </div>
    </div>
    </section>

    
    <section className="py-10 md:py-15 bg-[#f7f4ef]">

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-7xl mx-auto">

      <p className="text-[#D4AF37] uppercase tracking-[4px] text-xs sm:text-sm font-medium mb-4">
        Certifications & Quality Standards
      </p>

      <h2 className="text-[25px] sm:text-[35px] lg:text-[45px] leading-[1.05] font-semibold text-black mb-8">
        Certified Manufacturing,
       
        Built on Quality and Trust
      </h2>

      <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] mb-4">
        At Vastraa Global, quality is part of every stage — from fabric
        selection and print preparation to production, inspection, and
        dispatch.
      </p>

      <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
        Our manufacturing operations are supported by globally recognized
        certifications under Indian Soft Colours (ISC), reflecting our
        commitment to responsible textile production, product safety,
        ethical practices, and consistent quality standards.
      </p>

    </div>

    {/* Certification Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {certifications.map((cert, i) => (
        
      <div className="p-8 rounded-2xl bg-white border border-accent/5 hover:border-secondary/20 transition-all duration-500 h-full flex flex-col items-center text-center hover:shadow-lg hover:shadow-secondary/5 mt-6" key={i}>
         
      {/* Image */}
    <div className="w-full h-44 flex items-center justify-center overflow-hidden mb-6 rounded-2xl bg-white">
      <Image
        src={cert.image}
        alt={cert.name}
        width={220}
        height={160}
        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    
            {/* Badge Name */}
            {/* <h3 className="text-xl font-serif font-bold text-accent mb-1">
              {cert.name}
            </h3> */}
    
            {/* <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-4">
              {cert.fullName}
            </p> */}
    
            {/* Description */}
            {/* <p className="text-sm text-accent/50 leading-relaxed">
              {cert.description}
            </p> */}
    
            {/* Bottom accent line */}
            {/* <div
              className="mt-6 w-8 h-[2px] rounded-full transition-all duration-500 group-hover:w-16"
              style={{ backgroundColor: cert.color }}
            /> */}
          </div>
       
      ))}
          </div>

  {/* Bottom Content */}
  <div className="max-w-7xl mx-auto text-center">

      <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] mb-4 mt-15">
        With advanced digital printing technology, strict quality checks,
        and export-focused production processes, Vastraa Global ensures every
        printed fabric is made to meet the expectations of modern global brands.
      </p>

      <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] mb-4">
        Trusted standards. Responsible production. Fabrics made for global markets.
      </p>
    </div>
    </div>
    </section>


    <section className="bg-[#F8F5F0] py-20 max-w-7xl mx-auto">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-block text-[#B88A44] font-medium mb-4">
          Global Export Support
        </span>

        <h2 className="text-[25px] sm:text-[35px] lg:text-[45px] leading-[1.05] font-semibold text-black mb-8">
        Printed In India
        <br />
        Built on Quality and Trust
      </h2>

        <div className="w-16 h-[3px] bg-[#B88A44] mb-4"></div>

        <p className="text-lg text-gray-700 leading-8 mb-4">
          Vastraa Global works with fashion labels, home textile brands,
          designers, and sourcing teams that need high-quality custom
          printed fabrics from India.
        </p>

        <p className="text-lg text-gray-700 leading-8 mb-4">
          Our export-ready production setup helps brands manage bulk fabric
          printing with better consistency, careful quality checks, secure
          packing, and smooth dispatch support.
        </p>

        <div className="mb-4">
          <p className="text-[#B88A44] font-semibold mb-4">
            We serve buyers across:
          </p>

        <div className="flex flex-wrap items-center gap-3">
  {[
    "United Kingdom",
    "United States",
    "Canada",
    "Europe",
    "UAE",
    "Australia",
  ].map((country, index, arr) => (
    <div key={country} className="flex items-center gap-3">
      <span className="px-5 py-3 border border-[#D9C9AF] rounded-full bg-white text-[#0F2341] text-sm font-medium">
        {country}
      </span>
    
    <span className="text-[#B88A44] text-lg">→</span>
    
    </div>
  ))}
</div>
          
        </div>

        <p className="text-lg text-gray-700 leading-8 mb-3">
          Whether you need fabrics for a new collection, repeat production,
          or international sourcing, our team ensures every order is handled
          with clarity, care, and dependable timelines.
        </p>

        <div className="border border-[#D9C9AF] rounded-2xl p-8 bg-white">
          <h3 className="text-3xl font-serif text-[#0F2341] leading-snug">
            Premium printed fabrics,
            <br />
            produced in India for global markets.
          </h3>
        </div>
      </div>

      {/* Right Side Image */}
   <div className="h-full">

  <Image
    src={deliveryImg}
    alt="Printed in India Supplied to Global Brands"
    className="w-full h-full object-cover rounded-2xl"
  />

</div>

    </div>
  </div>
    </section>

    <section className="py-20 md:py-10 bg-[#F8F5F0] max-w-7xl mx-auto">

  <div className="max-w-7xl mx-auto px-4 ">

    <div className="relative overflow-hidden rounded-[40px] bg-white border border-[#D4AF37]/20 p-10 sm:p-14 lg:p-20 text-center">

      {/* Accent */}
      <div className="w-20 h-[3px] bg-[#D4AF37] mx-auto mb-8"></div>

      <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] leading-[1.05] font-semibold text-black mb-8">
        Build Your Next
        
        Fabric Collection
      </h2>

      <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] max-w-3xl mx-auto mb-8">
        Partner with Vastraa Global for premium custom fabric printing,
        reliable bulk production, and export-ready manufacturing support.
      </p>

      <p className="text-xl sm:text-2xl font-medium text-[#D4AF37] mb-12">
        Crafted for Brands. Produced for Global Markets.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

       
        <Button
  variant="primary"
  size="lg"
  onClick={() => setShowQuoteForm(true)}
  className="
    !bg-[#D4AF37]
    !text-white
    hover:!bg-[#c39f2f]
    border-0
  "
>
  Request a Quote
</Button>
 <Button
  variant="primary"
  size="lg"
  onClick={() => setShowQuoteForm(true)}
  className="
  "
>
  Get Fabric Samples
</Button>      
  </div>
    </div>
    </div>
    </section>


    <Footer/>
    </main>
  );
}

