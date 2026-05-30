"use client";

import React, { Suspense, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { submitInquiry } from "@/lib/submitInquiry";

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
      await submitInquiry({ fullName, companyName, email, inquirytype, message });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-bg-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-accent mb-8 leading-tight">
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Info Blocks (4 cols) */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-serif text-accent">
                      {isBulk ? "Bulk Sales Division" : isConsultation ? "Expert Support" : "General Inquiries"}
                    </h3>
                  </div>
                  <p className="text-accent/50 text-sm pl-16">
                    {isBulk ? "sales@vastraaglobal.com" : isConsultation ? "consult@vastraaglobal.com" : "info@vastraaglobal.com"}
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <h3 className="text-xl font-serif text-accent">Direct Hotline</h3>
                  </div>
                  <p className="text-accent/50 text-sm pl-16">+91 424 221 XXXX (Erode)</p>
                  <p className="text-accent/50 text-sm pl-16">+44 20 XXXX XXXX (London)</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
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

              <div className="p-8 bg-accent text-white rounded-4xl space-y-6">
                <h4 className="text-xl font-serif text-secondary">Our Office Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest">Mon — Fri</span>
                    <span>9:00 AM — 6:00 PM (IST)</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/40 uppercase tracking-widest">Saturday</span>
                    <span>9:00 AM — 1:00 PM (IST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form (8 cols) */}
            <div className="lg:col-span-8 bg-white p-12 rounded-[4rem] shadow-2xl border border-accent/5">
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
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <section className="py-24 bg-bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-accent mb-16">Supporting Global <span className="text-secondary">Export</span> Channels</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            {[
              { region: "North America", ports: "NY, LA, Houston" },
              { region: "Europe / UK", ports: "London, Hamburg, Rotterdam" },
              { region: "Middle East", ports: "Dubai, Doha, Riyadh" },
              { region: "Canada", ports: "Toronto, Vancouver" },
              { region: "Asia Pacific", ports: "Singapore, Tokyo, Sydney" }
            ].map((node, i) => (
              <div key={i} className="space-y-3">
                <Globe className="text-secondary/40 mx-auto" size={48} />
                <h4 className="text-lg font-serif text-accent">{node.region}</h4>
                <p className="text-[10px] uppercase tracking-widest text-accent/40">{node.ports}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
