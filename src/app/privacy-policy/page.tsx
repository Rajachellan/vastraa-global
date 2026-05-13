"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, Lock, Database } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-ivory">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-8">
              <Eye size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-accent mb-6">Privacy <span className="text-secondary italic">Policy</span></h1>
            <p className="text-accent/60 leading-relaxed">
              Your privacy is of paramount importance to Vastraa Global. We are committed to protecting your personal and business data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">1. Information We Collect</h2>
            <p className="text-accent/70 mb-12">
              We collect information that you provide directly to us when you request a quote, create an account, or contact our consultation team. This may include your name, business email, company details, phone number, and any textile designs you upload for printing.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">2. How We Use Your Data</h2>
            <p className="text-accent/70 mb-12">
              We use the collected data to provide and maintain our Service, to notify you about changes to our Service, and to provide customer support. For B2B clients, we use company information to generate tailored quotes and manage logistics for bulk orders.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">3. Design Confidentiality</h2>
            <p className="text-accent/70 mb-12">
              Vastraa Global acknowledges that designs uploaded for custom printing are the intellectual property of the client. We maintain strict confidentiality protocols to ensure your designs are not shared with third parties or used for any purpose other than your specific orders.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">4. Data Security</h2>
            <p className="text-accent/70 mb-12">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">5. Cookies</h2>
            <p className="text-accent/70 mb-12">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <div className="mt-20 p-12 bg-accent text-white rounded-[3rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lock size={120} />
              </div>
              <h4 className="text-2xl font-serif text-secondary mb-4 relative z-10">Data Protection Officer</h4>
              <p className="text-sm text-white/60 mb-6 relative z-10">
                For any data-related inquiries or to exercise your right to be forgotten, please reach out to our privacy team.
              </p>
              <a href="mailto:ramesh85cloud@gmail.com" className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline relative z-10">Email Privacy Team →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
