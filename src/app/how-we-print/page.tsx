"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Microscope, PackageCheck, HeartHandshake,Upload } from "lucide-react";
import {History,Factory, TimerReset,Paintbrush2,Globe,} from "lucide-react";
import Image1 from '../../../public/images/Media (3).jpg'
import Viscoseimg from '../../../public/images/viscose.png'
import orangecottonimg from '../../../public/images/orangecotton.png'
import linenimg from '../../../public/images/linenimg.png'
import modalimage from '../../../public/images/modal.png'
import cottonlinen from '../../../public/images/cottonlinen.png'
import cottonviscose from '../../../public/images/cottonviscose.png'
import cottonsilk from '../../../public/images/cottonsilk.png'
import linensilk from '../../../public/images/linenviscose.png'
import bgimg1 from '../../../public/images/stepbgimg.png'
import step5img from '../../../public/images/print_machine.jpg'
import howWePrintImg2 from '../../../public/images/Howweprintimg2.png'
import { Leaf, Palette, Cog } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";
import {
  ScanSearch,
  Waves,
  Layers3,
  Box,
  ShieldCheck,Search,
  PanelsTopLeft,
  Ruler,
  FlaskConical,
  Quote,  Package,
  FolderOpen,
  Boxes,
  
  Truck,
  Route,
} from "lucide-react";
import HowWePrintFaqs from "@/components/HowWePrintFaqs";
// const steps = [
//   {
//     icon: FileText,
//     title: "Step 1: Product Specification",
//     points: [
//       "Fabric details",
//       "Design submission or selection",
//       "Design customization support"
//     ]
//   },
//   {
//     icon: Microscope,
//     title: "Step 2: Quality Control",
//     points: [
//       "Design approval",
//       "Sample testing",
//       "Eco-friendly process"
//     ]
//   },
//   {
//     icon: PackageCheck,
//     title: "Step 3: Sampling & Approval",
//     points: [
//       "Swatch delivery",
//       "Client approval",
//       "Bulk production"
//     ]
//   },
//   {
//     icon: HeartHandshake,
//     title: "Step 4: After-Sales Support",
//     points: [
//       "Feedback collection",
//       "Ongoing client relationship"
//     ]
//   }
// ];

export default function HowWePrintPage() {
const [showQuoteForm, setShowQuoteForm] = useState(false);
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // API call can be added here later

  setSubmitted(true);
};
  const highlights = [
  {
    icon: History,
    title: "40+ Years Textile Heritage",
  },
 
  {
    icon: TimerReset,
    title: "4–7 Day Lead Time",
  },
  {
    icon: Paintbrush2,
    title: "Digital Pigment Printing",
  },
  {
    icon: Globe,
    title: "Global Dispatch",
  },
   {
    icon: Factory,
    title: "75K Meters Monthly Capacity",
  },
  ];

  const processSteps = [
  {
    number: "01",
    title: "Upload",
    description: "Securely send your high-res design files.",
  },
  {
    number: "02",
    title: "Review",
    description: "Technical check for repeat and color accuracy.",
  },
  {
    number: "03",
    title: "Fabric Selection",
    description: "Choose from 50+ premium fabric bases.",
  },
  {
    number: "04",
    title: "Sampling",
    description: "Physical proofing of design on fabric.",
  },
  {
    number: "05",
    title: "Printing",
    description: "High-fidelity digital pigment application.",
  },
  {
    number: "06",
    title: "Finishing",
    description: "Heat setting and fabric softening treatments.",
  },
  {
    number: "07",
    title: "QC Audit",
    description: "Rigorous defect and color matching inspection.",
  },
  {
    number: "08",
    title: "Logistics",
    description: "Secure packing and express global shipping.",
  },
    ];

  const painPoints = [
  {
    title: "Color Mismatch",
    description:
      "Designs looking vibrant on screen but dull on fabric are a thing of the past with our calibrated color profiles.",
  },
  {
    title: "Repeat Alignment",
    description:
      "Visible seams or disjointed patterns at the repeat line can ruin high-end yardage; our tech team audits every file.",
  },
  {
    title: "Wrong Fabric Choice",
    description:
      "Matching design detail with fabric weave is critical. We provide technical consultation for every order.",
  },
  {
    title: "Bulk Inconsistency",
    description:
      "Ensuring meter 1 matches meter 1,000 is our core promise through digital industrial standardization.",
  },
    ];

    const fabrics = [
  {
    id: 1,
    title: "Organic Cotton",
    description:
      "Soft, breathable and highly durable for versatile fashion and home applications.",
    image: orangecottonimg,
  },
  {
    id: 2,
    title: "Premium Linen",
    description:
      "Strong, cool and undeniably premium with a natural texture and exceptional drape.",
    image: linenimg
  },
  {
    id: 3,
    title: "Viscose",
    description:
      "Silky, smooth and excellent at holding vibrant digital prints for fluid garments.",
    image: Viscoseimg,
  },
  {
    id: 4,
    title: "Modal",
    description:
      "Incredibly soft and durable, perfect for luxurious drapes and premium comfort.",
    image: modalimage
  },
  {
    id: 5,
    title: "Cotton-Linen",
    description:
      "Combining cotton's softness with linen's structured elegance for versatile designs.",
    image: cottonlinen
  },
  {
    id: 6,
    title: "Cotton-Viscose",
    description:
      "Breathable and luminous, ideal for high-end fashion garments and resort wear.",
    image: cottonviscose
  },
  {
    id: 7,
    title: "Cotton-Silk",
    description:
      "The ultimate luxury blend offering durability and a lustrous finish for high-end apparel.",
    image: cottonsilk
  },
  {
    id: 8,
    title: "Linen-Viscose",
    description:
      "A beautifully textured fabric with a smooth, flowing drape and excellent color pickup.",
    image: linensilk
  },
    ];
    
    const finishingData = [
  {
    icon: ShieldCheck,
    title: "Fixing / curing",
    description:
      "Thermal stabilization to lock in vibrant colors and ensure long-term wash fastness.",
  },
  {
    icon: ScanSearch,
    title: "Fabric inspection",
    description:
      "Rigorous 100% manual check for weaving flaws, print spots, and color consistency.",
  },
  {
    icon: Waves,
    title: "Finishing support",
    description:
      "Softening and dimensional treatments to achieve the perfect premium hand-feel.",
  },
  {
    icon: PackageCheck,
    title: "Rolling or folding",
    description:
      "Tension-free handling to prevent creases and maintain fabric structure for shipping.",
  },
  {
    icon: Layers3,
    title: "Batch handling",
    description:
      "Organized sorting by SKU and design for efficient bulk inventory management.",
  },
  {
    icon: Box,
    title: "Production-ready packing",
    description:
      "Moisture-proof industrial-grade wrapping for secure global export transit.",
  },
    ];

    const packingData = [
  {
    icon: Package,
    title: "Roll packing",
    description:
      "Heavy-duty tubes to prevent creases in bulk fabric runs.",
  },
  {
    icon: FolderOpen,
    title: "Fold packing",
    description:
      "Precise folding for cut pieces and shorter meterage orders.",
  },
  {
    icon: Boxes,
    title: "Bulk packing",
    description:
      "Seaworthy corrugated boxes for large-scale production runs.",
  },
  {
    icon: ShieldCheck,
    title: "Export-ready handling",
    description:
      "Full documentation and customs-compliant packaging standards.",
  },
  {
    icon: Truck,
    title: "Courier support",
    description:
      "Partnered with FedEx/DHL for priority door-to-door delivery.",
  },
  {
    icon: Route,
    title: "Dispatch coordination",
    description:
      "Real-time tracking and logistics management for all orders.",
  },
    ];

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />
      {/* Hero Section */}
      {/* <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/print-sublimation.png"
          alt="How We Print"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-accent/60" />
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
              Our Fabric Printing <span className="text-secondary">Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              A transparent, meticulous and collaborative approach to bringing your textile visions to life.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Step UI (Timeline/Cards) */}
      {/* <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
              >
                
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 bottom-[-4rem] w-[2px] bg-secondary/20 group-hover:bg-secondary/50 transition-colors" />
                )}

               
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-accent/5 border border-accent/5 flex items-center justify-center shrink-0 z-10 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <step.icon size={40} strokeWidth={1.5} />
                </div>

                
                <div className="flex-1 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-accent/5 group-hover:shadow-xl transition-shadow duration-500 w-full">
                  <h2 className="text-3xl font-serif text-accent mb-6">{step.title}</h2>
                  <ul className="space-y-4">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-4 text-accent/70 text-lg">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-24 bg-accent text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif">Ready to bring your designs to life?</h2>
            <p className="text-white/60 text-lg">Partner with us for your next custom fabric printing project.</p>
            <button className="bg-secondary text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors duration-300">
              Get Started Now
            </button>
          </motion.div>
        </div>
      </section> */}

      {/* NEW CONTENT STARTS HERE  */}
      <section className="py-16 md:py-20 bg-[#f7f4ef] border-t border-black/5 mt-20">

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-start">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[#C9A14A] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-6">
          How We Print
        </p>

        <h2 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.95] font-semibold text-black mb-8">
          How We Print Custom Fabrics
        </h2>

        <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] max-w-2xl mb-12">
          From design file to export-ready printed fabric, Vastraa Global
          follows a controlled digital fabric printing process built for
          designers, fashion brands, exporters, private labels, and home
          textile businesses.
        </p>



        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">

         
            <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowQuoteForm(true)}
                >
              Upload Your Design
                </Button>
          <button className='group relative bg-[#D4AF37] text-white px-8 h-[58px] text-sm font-semibold uppercase tracking-[0.5px] hover:bg-[#c29b2f] transition-all duration-300 flex items-center justify-center gap-3 rounded-full overflow-hidden hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]'>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            {/* Chat Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>

<a
  href="https://wa.me/919361394323"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white relative z-10"
>
  Contact Fabric Export
</a>
          </button>

        </div>
        <p className="text-[#7b7b7b] italic text-base sm:text-lg">
          Not sure which fabric is right for your design? Our team can help
          you choose.
        </p>
      </motion.div>



      {/* Right Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white border border-[#D4AF37]/10 rounded-[24px] p-8 sm:p-10 shadow-[0_10px_40px_rgba(212,175,55,0.05)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.12)] transition-shadow duration-500"
      >

        <div className="flex items-start justify-between gap-5 mb-8">

          <h3 className="text-2xl sm:text-3xl font-semibold text-black leading-snug">
            Your Design to Printed Fabric
          </h3>
        </div>
      
      <div className="border-t border-black/10 pt-8 flex flex-col gap-8">

          {[
            "Design Submission & Format Check",
            "Artwork Review & Repeat Scale",
            "Fabric Selection & Pre-Treatment",
            "Sampling & Color Proofing",
            "Bulk Digital Printing",
            "Finishing & Global Shipping",
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_1fr] gap-4 items-start"
            >

              <span className="text-[#C9A14A] text-sm font-semibold tracking-[2px] pt-[2px]">
                0{index + 1}
              </span>

              <p className="text-black text-lg leading-relaxed">
                {item}
              </p>

            </div>
          ))}

        </div>

      </motion.div>

    </div>

  </div>

      </section>

      <section className="border-y border-black/5 bg-[#f7f4ef] py-3">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 py-10">

      {highlights.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index}
            className="flex items-center justify-center gap-3 text-center group"
          >

            <Icon
              size={18}
              className="text-[#C9A14A] flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
            />

            <p className="text-[8px] sm:text-[11px] tracking-[2px] uppercase font-semibold text-[#555] leading-relaxed group-hover:text-black transition-colors duration-300">
              {item.title}
            </p>

          </motion.div>
        );
      })}

    </div>

  </div>

      </section>

      <section className="py-16 md:py-14 bg-[#f7f4ef]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-16">

      <p className="text-[#C9A14A] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5">
        Process Overview
      </p>

      <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-semibold text-black">
        Our Fabric Printing Process at a Glance
      </h2>

    </div>



    {/* Process Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {processSteps.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          key={index}
          className="group rounded-[28px] border border-black/8 bg-white/50 backdrop-blur-sm p-8 min-h-[240px] transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A] hover:shadow-[0_10px_40px_rgba(201,161,74,0.12)] hover:bg-white"
        >

          {/* Number */}
          <span className="text-[54px] leading-none font-medium text-[#D8C3A0] block mb-10 group-hover:scale-110 group-hover:text-[#C9A14A] transition-all duration-300 origin-left">
            {item.number}
          </span>
        {/* Content */}
          <div>
          <h3 className="text-[28px] sm:text-[25px] leading-none font-semibold text-black mb-5 group-hover:text-[#C9A14A] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.8]">
              {item.description}
            </p>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

      </section>

      <section className="py-16 md:py-14 bg-[#f7f4ef]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
    <p className="text-[#C9A14A] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-6">
          Why Process Matters
        </p>

        <h2 className="text-[30px] sm:text-[45px] lg:text-[50px] leading-[1.02] font-semibold text-black mb-8">
          Printing Fabric Should Not Feel Like Guesswork
        </h2>

        <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] max-w-xl">
          In textile manufacturing, minor oversights lead to costly
          rejections. We’ve optimized every step to eliminate the common
          friction points between creative vision and industrial reality.
        </p>

      </motion.div>
    
    {/* Right Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {painPoints.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index}
            className="bg-white rounded-[28px] border border-black/8 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A14A] hover:shadow-[0_10px_40px_rgba(201,161,74,0.12)] group"
          >

            <h3 className="text-[25px] leading-none font-semibold text-black mb-6 group-hover:text-[#C9A14A] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9]">
              {item.description}
            </p>

          </motion.div>
        ))}
    </div>
    </div>
    </div>
      </section>

      {/* STEP 1 & 2 */}
      <section className="py-16 md:py-14 bg-[#f7f4ef]">

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden rounded-[30px] group"
      >

        <Image
          src={howWePrintImg2}
          alt="Share Your Design File"
          className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[#C9A14A] text-[34px] leading-none font-medium mb-5">
          Step 01
        </p>

        <h2 className="text-[20px] sm:text-[30px] lg:text-[40px] leading-[1.02] font-semibold text-black mb-5">
          Share Your Design File
        </h2>

        <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] max-w-xl mb-5">
          Initiate your project by uploading your creative assets. Our secure
          portal handles large-scale technical files with ease.
        </p>



        {/* Points Box */}
        <div className="border border-black/8 rounded-[28px] p-8 bg-transparent">

          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full border-2 border-[#4D7C59] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#4D7C59]"></div>
              </div>

              <p className="text-black text-base sm:text-lg leading-relaxed">
                Accepted Formats: TIFF, PSD, AI, High-res PDF
              </p>

            </div>



            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full border-2 border-[#4D7C59] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#4D7C59]"></div>
              </div>

              <p className="text-black text-base sm:text-lg leading-relaxed">
                Minimum 300 DPI Resolution
              </p>

            </div>



            <div className="flex items-center gap-4">

              <div className="w-5 h-5 rounded-full border-2 border-[#4D7C59] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#4D7C59]"></div>
              </div>

              <p className="text-black text-base sm:text-lg leading-relaxed">
                Seamless Repeat Metadata Included
              </p>

            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 rounded-full border-2 border-[#4D7C59] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#4D7C59]"></div>
              </div>

              <p className="text-black text-base sm:text-lg leading-relaxed">
                CMYK or Pantone TCX References
              </p>
          </div> 
            </div>
        </div>
      </motion.div>
    </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mt-15">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[#C9A14A] text-[34px] leading-none font-medium mb-5">
          Step 02
        </p>

        <h2  className="text-[20px] sm:text-[30px] lg:text-[40px] leading-[1.02] font-semibold text-black mb-5">
          Artwork, Repeat & Scale Review
        </h2>

        <p className="text-[#3d4b63] text-base sm:text-lg leading-[1.9] max-w-xl mb-10">
          Our expert studio team performs a 12-point technical audit on every
          file before it touches the fabric base.
        </p>



        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Card 1 */}
          <div className="border border-black/8 rounded-[18px] p-6 bg-white hover:border-[#C9A14A] hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-xl font-semibold text-black mb-3">
              Scale Check
            </h3>

            <p className="text-[#3d4b63] text-base leading-relaxed">
              Real-world dimension audit
            </p>

          </div>



          {/* Card 2 */}
          <div className="border border-black/8 rounded-[18px] p-6 bg-white hover:border-[#C9A14A] hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-xl font-semibold text-black mb-3">
              Seamlessness
            </h3>

            <p className="text-[#3d4b63] text-base leading-relaxed">
              Zero-line repeat verification
            </p>

          </div>



          {/* Card 3 */}
          <div className="border border-black/8 rounded-[18px] p-6 bg-white hover:border-[#C9A14A] hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-xl font-semibold text-black mb-3">
              Color Profile
            </h3>

            <p className="text-[#3d4b63] text-base leading-relaxed">
              Gamut matching for pigment
            </p>

          </div>



          {/* Card 4 */}
          <div className="border border-black/8 rounded-[18px] p-6 bg-white hover:border-[#C9A14A] hover:-translate-y-1 transition-all duration-300">

            <h3 className="text-xl font-semibold text-black mb-3">
              Clarity
            </h3>

            <p className="text-[#3d4b63] text-base leading-relaxed">
              Edge sharpness optimization
            </p>

          </div>

        </div>

      </motion.div>



      {/* Right Image */}
      <div>

      <div className="overflow-hidden rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

      <Image
            src={Image1}
            alt="Artwork Review"
            className="w-full h-[420px] object-cover hover:scale-[1.02] transition-all duration-700"
          />

        </div>

      </div>

    </div>
    
    </div>
      </section>

      {/* STEP 3  */}
      <section className="w-full bg-[#f5f1ea] py-18 border-t border-[#e6dfd3]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <p className="text-[#c89b5d] text-4xl font-medium mb-4">
        Step 03
      </p>

      <h2 className="text-[40px] leading-tight font-semibold text-black">
        Choose the Right Fabric Base
      </h2>

      <p className="text-[#4d4d4d] text-[18px] leading-[42px] mt-6 max-w-4xl mx-auto">
        From organic naturals to engineered blends — every fabric in our
        portfolio is curated for digital printing excellence.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {fabrics.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          key={item.id}
          className="bg-[#f5f1ea] border border-[#ddd4c7] rounded-[26px] overflow-hidden hover:shadow-[0_10px_30px_rgba(200,155,93,0.15)] hover:border-[#c89b5d]/50 transition-all duration-500 group"
        >
          <div className="overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-7">
            <h3 className="text-[22px] font-semibold text-black mb-4 group-hover:text-[#c89b5d] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-[#444] text-[15px] leading-[34px]">
              {item.description}
            </p>
               <Button
                              variant="primary"
                              size="lg"
                              onClick={() => setShowQuoteForm(true)}
                              className="text-sm my-5"
                            >
                             Get a Custom Quote
                            </Button>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
      </section>

      {/* STEP 4 */}
      <section className="w-full bg-black py-14 overflow-hidden">
     <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[#d29d57] text-4xl font-medium mb-6">
          Step 04
        </p>

        <h2 className="text-white text-[45px] leading-tight font-semibold max-w-3xl">
          Sample Printing Before Bulk
        </h2>

        <p className="text-[#d7d7d7] text-[18px] leading-[35px] mt-8 max-w-2xl">
          We never go into bulk production without your approval of a
          physical strike-off. Sampling minimizes risk and ensures
          perfection.
        </p>

        {/* Points */}
        <div className="mt-14 flex flex-col gap-8">

          <div className="flex items-center gap-5">

            <div className="min-w-[30px] min-h-[30px] rounded-full border-2 border-[#d29d57] flex items-center justify-center">
              <span className="text-[#d29d57] text-sm">✓</span>
            </div>

            <p className="text-white text-[20px]">
              Check actual color saturation on the chosen fabric base
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="min-w-[30px] min-h-[30px] rounded-full border-2 border-[#d29d57] flex items-center justify-center">
              <span className="text-[#d29d57] text-sm">✓</span>
            </div>

            <p className="text-white text-[15px]">
              Verify pattern scale for garment construction
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="min-w-[30px] min-h-[30px] rounded-full border-2 border-[#d29d57] flex items-center justify-center">
              <span className="text-[#d29d57] text-sm">✓</span>
            </div>

            <p className="text-white text-[15px]">
              Audit fabric hand-feel after ink fixing
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="min-w-[30px] min-h-[30px] rounded-full border-2 border-[#d29d57] flex items-center justify-center">
              <span className="text-[#d29d57] text-sm">✓</span>
            </div>

            <p className="text-white text-[20px]">
              Confirm print sharpness for fine-line details
            </p>

          </div>

        </div>
      </motion.div>

      {/* Right Image Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#0d0d11] border border-[#1d1d22] rounded-[34px] p-8 hover:border-[#d29d57]/30 transition-colors duration-500"
      >

        <Image
          src={bgimg1}
          alt="Sample Printing"
          className="w-full h-[620px] object-cover rounded-[22px]"
        />

        {/* Bottom Badge */}
        <div className="absolute bottom-0 right-0 bg-[#d2a15d] px-10 py-5 rounded-tl-[22px] rounded-br-[34px]">
          <p className="text-white text-lg font-medium uppercase tracking-wide">
            SAMPLE APPROVED
          </p>
        </div>

      </motion.div>

    </div>

  </div>
      </section>

      {/* STEP 5 */}
      <section className="w-full bg-[#f5f1ea] py-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[#cf9b58] text-4xl font-medium mb-6">
          Step 05
        </p>

        <h2 className="text-black text-[45px] leading-tight font-semibold max-w-3xl">
          Digital Pigment Printing
        </h2>

        <p className="text-[#444] text-[22px] leading-[42px] mt-8 max-w-2xl">
          Using state-of-the-art industrial printers, we apply pigment inks
          that offer superior wash fastness and vibrant reproduction on both
          natural and synthetic fibers.
        </p>

      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <Image
          src={step5img}
          alt="Digital Pigment Printing"
          className="w-full h-[430px] object-cover rounded-[30px] hover:shadow-[0_20px_50px_rgba(207,155,88,0.15)] transition-shadow duration-500"
        />

      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">

      {/* Card 1 */}
      <div className="border border-[#ddd4c7] rounded-[28px] p-10 bg-[#f5f1ea]">

         <div className="mb-5">
          <Leaf className="w-7 h-7 text-[#d09a57]" strokeWidth={1.8} />
        </div>


        <h3 className="text-[24px] font-semibold text-black mb-5">
          Sustainable Process
        </h3>

        <p className="text-[#444] text-[15px] leading-[36px]">
          Low water consumption and Oeko-Tex certified inks for
          eco-conscious brands.
        </p>

      </div>

      {/* Card 2 */}
      <div className="border border-[#ddd4c7] rounded-[28px] p-10 bg-[#f5f1ea]">

        <div className="mb-5">
          <Palette className="w-7 h-7 text-[#d09a57]" strokeWidth={1.8} />
        </div>


        <h3 className="text-[24px] font-semibold text-black mb-5">
          Vibrant Gamut
        </h3>

        <p className="text-[#444] text-[15px] leading-[36px]">
          Rich blacks and vivid primary colors across diverse fabric
          constructions.
        </p>

      </div>

      {/* Card 3 */}
      <div className="border border-[#ddd4c7] rounded-[28px] p-10 bg-[#f5f1ea]">

         <div className="mb-5">
          <Cog className="w-7 h-7 text-[#d09a57]" strokeWidth={1.8} />
        </div>


        <h3 className="text-[24px] font-semibold text-black mb-5">
          Industrial Speed
        </h3>

        <p className="text-[#444] text-[15px] leading-[36px]">
          Capable of producing 3,000+ meters per day with consistent
          quality.
        </p>

      </div>

    </div>

    </div>
     </section>

     {/* STEP 6 */}
     <section className="w-full bg-[#f5f1ea] py-10 pb-15">
   <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <p className="text-[#cf9b58] text-4xl font-medium mb-4">
        Step 06
      </p>

      <h2 className="text-black text-[30px] leading-tight font-semibold max-w-5xl mx-auto">
        Fixing, Finishing & Fabric Handling
      </h2>

      <p className="text-[#444] text-[22px] leading-[42px] mt-5 max-w-4xl mx-auto">
        Ensuring the highest quality output through precise post-print
        processing and expert textile care.
      </p>

    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-15">

      {finishingData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index}
            className="bg-[#f8f6f2] border border-[#ddd4c7] rounded-[28px] px-7 py-10 text-center hover:border-[#cf9b58]/50 hover:shadow-[0_10px_30px_rgba(207,155,88,0.1)] transition-all duration-300 group"
          >

            <div className="flex justify-center mb-7 group-hover:scale-110 transition-transform duration-300">
              <Icon
                className="w-7 h-7 text-[#cf9b58]"
                strokeWidth={1.8}
              />
            </div>

            <h3 className="text-[20px] leading-[30px] font-semibold text-black mb-5 group-hover:text-[#cf9b58] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-[#555] text-[16px] leading-[30px]">
              {item.description}
            </p>

          </motion.div>
        );
      })}

    </div>

  </div>
    </section>

    {/* STEP 7 */}
    <section className="w-full bg-[#f5f1ea] py-15">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

      {/* Left Card */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border border-[#ddd4c7] rounded-[34px] p-14 bg-[#f5f1ea] hover:shadow-[0_10px_40px_rgba(207,155,88,0.05)] transition-shadow duration-500"
      >

        <p className="text-[#cf9b58] text-4xl font-medium mb-6">
          Step 07
        </p>

        <h2 className="text-black text-[30px] leading-tight font-semibold max-w-4xl">
          Quality Check Before Dispatch
        </h2>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 mt-10">

          {/* Item 1 */}
          <div className="flex gap-5">

            <Search
              className="w-7 h-7 text-[#cf9b58] mt-1"
              strokeWidth={1.8}
            />

            <div>
              <h3 className="text-[24px] font-medium text-black mb-3">
                Visual Inspection
              </h3>

              <p className="text-[#444] text-[16px] leading-[30px]">
                Each meter is inspected for weaving flaws or print spots.
              </p>
            </div>

          </div>

          {/* Item 2 */}
          <div className="flex gap-5">

            <Ruler
              className="w-7 h-7 text-[#cf9b58] mt-1"
              strokeWidth={1.8}
            />

            <div>
              <h3 className="text-[24px] font-medium text-black mb-3">
                Dimensional Stability
              </h3>

              <p className="text-[#444] text-[16px] leading-[30px]">
                Checking fabric width and GSM post-finishing.
              </p>
            </div>

          </div>

          {/* Item 3 */}
          <div className="flex gap-5">

            <PanelsTopLeft
              className="w-7 h-7 text-[#cf9b58] mt-1"
              strokeWidth={1.8}
            />

            <div>
              <h3 className="text-[24px] font-medium text-black mb-3">
                Color Consistency
              </h3>

              <p className="text-[#444] text-[16px] leading-[30px]">
                Light box comparison against approved strike-offs.
              </p>
            </div>

          </div>

          {/* Item 4 */}
          <div className="flex gap-5">

            <FlaskConical
              className="w-7 h-7 text-[#cf9b58] mt-1"
              strokeWidth={1.8}
            />

            <div>
              <h3 className="text-[24px] font-medium text-black mb-3">
                Fastness Report
              </h3>

              <p className="text-[#444] text-[16px] leading-[30px]">
                Random batch testing for wash and rub fastness.
              </p>
            </div>

          </div>

        </div>

      </motion.div>

      {/* Right Quote Card */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black rounded-[34px] p-14 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf9b58]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <Quote
          className="w-10 h-10 text-[#cf9b58] mb-10 relative z-10"
          strokeWidth={2}
        />

        <h3 className="text-white text-[25px] leading-[62px] italic font-semibold relative z-10">
          “Quality is not an act, it is a habit. In B2B exports, there is
          zero margin for error.”
        </h3>

        <p className="text-white text-[15px] mt-6 relative z-10">
          Production Lead, Vastraa Global
        </p>
      </motion.div>
      </div>
    </div>
    </section>

    {/* STEP 8 */}
    <section className="w-full bg-[#f5f1ea] py-15">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >

      <p className="text-[#cf9b58] text-4xl font-medium mb-4">
        Step 08
      </p>

      <h2 className="text-black text-[35px] leading-tight font-semibold">
        Packing and Dispatch
      </h2>

      <p className="text-[#444] text-[16px] leading-[42px] mt-5">
        Safe, secure, and compliant shipping for global delivery.
      </p>

    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-10">

      {packingData.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            key={index}
            className="bg-[#f8f6f2] border border-[#ddd4c7] rounded-[28px] px-7 py-10 text-center hover:shadow-[0_15px_40px_rgba(207,155,88,0.12)] hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="flex justify-center mb-7 group-hover:scale-125 transition-transform duration-300">
              <Icon
                className="w-7 h-7 text-[#cf9b58]"
                strokeWidth={1.8}
              />
            </div>

            <h3 className="text-[20px] leading-[30px] font-semibold text-black mb-5 group-hover:text-[#cf9b58] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-[#555] text-[16px] leading-[34px]">
              {item.description}
            </p>

          </motion.div>
        );
      })}

    </div>

  </div>
    </section>

     <section className="max-w-7xl mx-auto bg-[#1d1d1d] my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen ">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-8 md:px-16 py-16 text-white"
        >
          <h1 className="text-5xl md:text-7xl leading-tight font-serif font-medium max-w-[520px]">
            Ready to Print Your Custom Fabric?
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-[540px] leading-8">
            Join 200+ international fashion brands that trust Vastraa Global
            for their production needs. Start your journey with a quote today.
          </p>

          <div className="flex items-center gap-16 mt-14">
            <div>
              <h2 className="text-5xl text-[#d89b52] font-serif">98%</h2>
              <p className="text-gray-300 mt-1">Client Retention</p>
            </div>

            <div>
              <h2 className="text-5xl text-[#d89b52] font-serif">15+</h2>
              <p className="text-gray-300 mt-1">Export Countries</p>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f5f3ef] flex items-center justify-center px-6 py-16"
        >
          <div className="w-full max-w-[560px]">
            <h2 className="text-5xl font-serif text-black mb-10">
              Get Your Custom Quote
            </h2>

            <form onSubmit={handleSubmit}  className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-16 px-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 focus:border-[#D4AF37] outline-none bg-transparent transition-colors duration-300"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                  className="h-16 px-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 focus:border-[#D4AF37] outline-none bg-transparent transition-colors duration-300"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full h-16 px-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 focus:border-[#D4AF37] outline-none bg-transparent transition-colors duration-300"
              />

              <select className="w-full h-16 px-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 focus:border-[#D4AF37] outline-none bg-transparent text-gray-700 transition-colors duration-300">
                <option>Estimated Monthly Volume</option>
                <option>Sample Only (Under 10m)</option>
                <option>Small Batch Only (10m - 100m)</option>
                <option>Bulk Order (100m - 100m+)</option>
                </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full p-5 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 focus:border-[#D4AF37] outline-none resize-none bg-transparent transition-colors duration-300"
              ></textarea>

              <button className="w-full h-16 rounded-2xl bg-black text-white text-lg font-medium hover:bg-[#D4AF37] transition-colors duration-500">
                Submit Request
              </button>
                {submitted && (
    <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-center">
      <p className="font-medium text-green-700">
        ✓ Successfully Submitted!
      </p>
      <p className="text-sm text-green-600 mt-1">
        Our team will contact you shortly.
      </p>
    </div>
  )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
     {/* Popup Form */}
      {showQuoteForm && (
     <div
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-hidden"
  onClick={() => setShowQuoteForm(false)}
>
         <div
  className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#F8F5F0] p-8 md:p-12 shadow-2xl overflow-hidden"
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
              <h2 className="text-4xl font-serif font-bold text-[#0A2342]">
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
        placeholder="500 Meters/pieces"
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


    <HowWePrintFaqs/>

    <Footer />
    </main>
  );
}

