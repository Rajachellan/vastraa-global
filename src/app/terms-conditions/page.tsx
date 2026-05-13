"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, Gavel, Scale } from "lucide-react";

export default function TermsConditionsPage() {
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
              <Gavel size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-accent mb-6">Terms & <span className="text-secondary italic">Conditions</span></h1>
            <p className="text-accent/60 leading-relaxed">
              Last updated: May 13, 2026. Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">1. Acceptance of Terms</h2>
            <p className="text-accent/70 mb-12">
              By accessing and using the services provided by Vastraa Global, you agree to comply with and be bound by these Terms and Conditions. These terms apply to all visitors, users, and others who access or use our service.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">2. Business Relationship</h2>
            <p className="text-accent/70 mb-12">
              Vastraa Global operates primarily as a B2B (Business-to-Business) textile service provider. All orders, including bulk printing and custom fabric sourcing, are subject to specific manufacturing contracts and quality agreements defined during the consultation phase.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">3. Intellectual Property</h2>
            <p className="text-accent/70 mb-12">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Vastraa Global and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Vastraa Global.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">4. Custom Orders & Returns</h2>
            <p className="text-accent/70 mb-12">
              Due to the bespoke nature of our custom printing services, returns are only accepted in cases of manufacturing defects as defined by the American 4-Point Inspection System or deviation from approved strike-offs.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">5. Limitation of Liability</h2>
            <p className="text-accent/70 mb-12">
              In no event shall Vastraa Global, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <div className="mt-20 p-12 bg-bg-ivory rounded-[3rem] border border-accent/5">
              <div className="flex gap-6 items-start">
                <Shield className="text-secondary shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-serif text-accent mb-4">Legal Questions?</h4>
                  <p className="text-sm text-accent/50 mb-6">
                    If you have any questions about our Terms & Conditions, please contact our legal department.
                  </p>
                  <a href="mailto:ramesh85cloud@gmail.com" className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline">Contact Legal →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
