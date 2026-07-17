"use client";

import React, { Suspense, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { submitInquiry } from "@/lib/submitInquiry";
import Location from "./location"
import Image from "next/image";
import { Tag, MessageCircle } from "lucide-react";
function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const isBulk = type === "bulk";
  const isConsultation = type === "consultation";

  const defaultInquiry = isBulk
    ? "Bulk Fabric Sourcing"
    : isConsultation
      ? "Custom Fabric Development"
      : "Digital Printing Inquiry";

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [inquirytype, setInquirytype] = useState(defaultInquiry);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await submitInquiry({
        fullName,
        companyName: companyName || fullName,
        email,
        inquirytype,
        message: message.trim() || `${inquirytype} inquiry from contact page`,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="section-y bg-bg-ivory relative overflow-hidden"
        style={{ paddingTop: "max(3rem, var(--site-header-height))" }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
        <div className="container-site relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-accent mb-8 pt-10 leading-tight">
                {isBulk ? (
                  <>Bulk & <span className="text-secondary">Custom</span> <br />Business Enquiries</>
                ) : isConsultation ? (
                  <>Expert <span className="text-secondary">Fabric</span> <br />Consultation</>
                ) : (
                  <>Global <span className="text-secondary">Partnerships</span> <br />Start Here</>
                )}
              </h1>
              <p className="text-lg sm:text-xl text-accent/60 leading-relaxed max-w-2xl">
                {isBulk 
                  ? "Looking for large-scale production? Our bulk division handles everything from custom textile development to global export logistics for high-volume orders."
                  : isConsultation
                  ? "Not sure which material suits your vision? Our textile engineers provide one-on-one guidance on fabric properties, GSM selection and printing compatibility."
                  : "From technical fabric specifications to bulk export logistics, our team of textile experts is ready to support your brand's growth."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="section-y">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
            
            {/* Left: Info Blocks (4 cols) */}
            <div className="lg:col-span-4 space-y-12 lg:mt-10">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center gap-4 ">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-serif text-accent">
                      {isBulk ? "Bulk Sales Division" : isConsultation ? "Expert Support" : "General Inquiries"}
                    </h3>
                  </div>
                  <p className="text-accent/50 text-sm pl-16">
                    {isBulk ? "sales@vastraaglobal.com" : isConsultation ? "info@vastraaglobal.com" : "info@vastraaglobal.com"}
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-xl font-serif text-accent">Direct Hotline</h3>
                  </div>
                  <p className="text-accent/50 text-sm pl-16">+91 93613 94323 (Erode)</p>
                  <p className="text-accent/50 text-sm pl-16">+44 777 669 8505  (London)</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 ">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-serif text-accent">Headquarters</h3>
                  </div>
                  <p className="text-accent/50 text-sm pl-16 leading-relaxed">
                    VastraaGlobal Industrial Park,<br />
                    Erode, Tamil Nadu 638001, India
                  </p>
                </div>
              </div>

              <div className="p-8 bg-accent text-white rounded-4xl space-y-3">
                <h4 className="text-xl font-serif text-secondary">Our Office Hours (IST/BST)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest">Mon — Sat</span>
                    <span>9:00 AM — 6:00 PM </span>
                  </div>
                  {/* <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest">Saturday</span>
                    <span>9:00 AM — 1:00 PM (IST)</span>
                  </div> */}
                </div>
                  
             
              </div>
            
<div className="space-y-4">
  {/* Indian Users */}
  <a
    href="https://wa.me/919361394323"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-5 rounded-2xl bg-[#F9F4E8] p-5 transition-all duration-300 hover:bg-[#F4E8C8] hover:shadow-md"
  >
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F3E8CC] text-[#B88A14] transition-transform duration-300 group-hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.8 11.8 0 005.65 1.44h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.24-6.15-3.39-8.42z" />
      </svg>
    </div>

    <div>
      <h4 className="text-2xl font-serif text-[#2F2A24]">
        Chat on WhatsApp
      </h4>

      <p className="mt-1 text-[#A67C00] font-medium">
        For Indian Customers
      </p>
    </div>
  </a>

  {/* International Users */}
  <a
    href="https://wa.me/447776698505"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-5 rounded-2xl bg-[#F9F4E8] p-5 transition-all duration-300 hover:bg-[#F4E8C8] hover:shadow-md"
  >
    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F3E8CC] text-[#B88A14] transition-transform duration-300 group-hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.8 11.8 0 005.65 1.44h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.24-6.15-3.39-8.42z" />
      </svg>
    </div>

    <div>
      <h4 className="text-2xl font-serif text-[#2F2A24]">
        Chat on WhatsApp
      </h4>

      <p className="mt-1 text-[#A67C00] font-medium">
        For International Customers
      </p>
    </div>
  </a>
</div>
            </div>

            {/* Right: Form (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl md:rounded-[4rem] shadow-2xl border border-accent/5 w-full min-w-0">
              <div className="mb-12">
                <h2 className="text-3xl font-serif text-accent mb-4">
                  {isBulk ? "Request a Bulk Quotation" : isConsultation ? "Book a Fabric Consultation" : "Request a Professional Quote"}
                </h2>
                <p className="text-accent/50">
                  {isBulk 
                    ? "Provide your volume requirements and target destination for a custom business quote."
                    : isConsultation
                    ? "Tell us about your design goals and our experts will suggest the best fabric and printing match."
                    : "Complete the form below and an account manager will contact you within 24 business hours."}
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-serif text-accent mb-4">Inquiry Submitted</h3>
                  <p className="text-accent/60">We will contact you within 24 business hours.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">Full Name</label>
                  <input 
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary/20 transition-all text-accent outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">Company Name</label>
                  <input 
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Luxe Apparel Co."
                    className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary/20 transition-all text-accent outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">Professional Email</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary/20 transition-all text-accent outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">Inquiry Type</label>
                  <select
                    value={inquirytype}
                    onChange={(e) => setInquirytype(e.target.value)}
                    className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary/20 transition-all text-accent outline-none appearance-none"
                  >
                    <option>Digital Printing Inquiry</option>
                    <option>Bulk Fabric Sourcing</option>
                    <option>Sample Yardage Request</option>
                    <option>Custom Fabric Development</option>
                    <option>Design Studio Quote</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/40">Message / Project Brief</label>
                  <textarea 
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isBulk ? "Please include estimated quantity (MOQ 100m) and target fabric..." : "Describe your project or design vision..."}
                    className="w-full bg-bg-ivory border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary/20 transition-all text-accent outline-none resize-none"
                  />
                </div>
                {error ? <p className="md:col-span-2 text-sm text-red-600">{error}</p> : null}
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-6 rounded-3xl font-bold uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting…" : isBulk ? "Submit Bulk Request" : isConsultation ? "Request Consultation" : "Submit Inquiry"}
                    <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
              )}
            </div>

          </div>
        </div>
      </section>

  <section className="relative py-14 overflow-hidden bg-gradient-to-b from-[#FAF8F4] to-white">
  
  {/* Background */}
  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#0A2342_1px,_transparent_1px)] bg-[length:30px_30px]" />

  <div className="container mx-auto px-6 relative z-10">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <span className="inline-flex px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-medium">
        Global Distribution Network
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#0A2342]">
        Supporting Global
        <span className="block text-[#D4AF37] italic">
          Export Channels
        </span>
      </h2>

      <p className="mt-6 text-lg text-[#0A2342]/60">
        Delivering premium textiles and custom printed fabrics
        across international markets through trusted logistics
        and export partnerships.
      </p>
    </div>

    {/* Center Hub */}
    <div className="relative">

      {/* Connection Lines */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-40 -translate-x-1/2 w-px h-[400px] bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
      </div>

      <div className="grid lg:grid-cols-5 gap-8">

        {[
          {
            region: "United States",
            ports: "New York • Los Angeles • Houston",
            flag: "🇺🇸",
            image1:"/images/us-flag.jpg",
          },
          {
            region: "Europe ",
            ports: "Germany • Italy • France • Netherlands",
            flag: "🇬🇧",
            image1:"/images/europe_flag.jpg",

          },
          {
            region: "United Kingdom",
            ports: "London • Manchester • Birmingham",
            flag: "🇬🇧",
            image1:"/images/ukimg.png",

          },
          {
            region: "Canada",
            ports: "Toronto • Vancouver • Montreal",
            flag: "🇨🇦",
            image1:"/images/canada_flag.jpg",

          },
          {
            region: "UAE",
            ports: "Dubai • Abu Dhabi • Sharjah",
            flag: "ua🇪",
            image1:"/images/uae_flag.jpg",

          },
          // {
          //   region: "Asia Pacific",
          //   ports: "Singapore • Tokyo",
          //   flag: "🇸🇬",
          // },
        ].map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              rounded-[32px]
              bg-white
              border
              border-[#D4AF37]/10
              p-8
              text-center
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              hover:-translate-y-2
              hover:border-[#D4AF37]/40
              transition-all
              duration-500
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex justify-center mb-4">
<div className="flex justify-center mb-5">
  <Image
    src={item.image1}
    alt={item.region}
    width={128}
    height={80}
    className="w-32 h-20 object-cover rounded-lg border border-[#D4AF37]/20 shadow-sm"
    priority={index < 2}
  />
</div>
</div>

              <h3 className="text-xl font-serif text-[#0A2342] mb-3">
                {item.region}
              </h3>

              <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-4" />

              <p className="text-xs tracking-[0.25em] uppercase text-[#0A2342]/50">
                {item.ports}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Export Hub */}
      <div className="mt-16 flex justify-center">
        <div
          className="
            relative
            px-10
            py-6
            rounded-full
            bg-[#0A2342]
            text-white
            shadow-2xl
          "
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/20" />

          <div className="relative">
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              Export Hub
            </p>


            <h4 className="text-2xl font-serif text-center mt-2">
              India
            </h4>
          </div>
        </div>
      </div>

    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-3 gap-8 mt-24">
      {[
        ["25+", "Countries Served"],
        ["1000+", "Global Clients"],
        ["98%", "On-Time Deliveries"],
      ].map(([number, label]) => (
        <div
          key={label}
          className="text-center p-8 rounded-[28px] bg-white border border-[#D4AF37]/10"
        >
          <div className="text-4xl font-serif text-[#D4AF37]">
            {number}
          </div>

          <div className="mt-2 text-[#0A2342]/60">
            {label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
{/* <Location/> */}
      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
