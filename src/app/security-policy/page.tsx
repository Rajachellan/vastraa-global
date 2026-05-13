"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldAlert, Server, HardDrive, Key } from "lucide-react";

export default function SecurityPolicyPage() {
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
              <ShieldAlert size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-accent mb-6">Security <span className="text-secondary italic">Policy</span></h1>
            <p className="text-accent/60 leading-relaxed">
              Ensuring the security of our clients' data and intellectual property is the foundation of our B2B operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">Platform Security</h2>
            <p className="text-accent/70 mb-12">
              Our website uses SSL (Secure Sockets Layer) encryption to protect all data transmissions between your browser and our servers. This ensures that sensitive information like login credentials and design files are transmitted securely.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">Design Protection</h2>
            <p className="text-accent/70 mb-12">
              We understand that your textile designs are valuable business assets. Our servers employ robust firewalls and intrusion detection systems to prevent unauthorized access. Once uploaded, designs are stored in encrypted environments accessible only to relevant production technicians during the printing phase.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">Regular Audits</h2>
            <p className="text-accent/70 mb-12">
              Vastraa Global conducts regular security audits of its digital infrastructure. We stay updated with the latest security patches for our web frameworks and database systems to mitigate potential vulnerabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="p-10 bg-accent text-white rounded-4xl">
                <Server className="text-secondary mb-6" size={32} />
                <h4 className="text-xl font-serif mb-4">Secure Hosting</h4>
                <p className="text-sm text-white/50 leading-relaxed">Infrastructure hosted on world-class data centers with 24/7 physical and digital security monitoring.</p>
              </div>
              <div className="p-10 bg-bg-ivory rounded-4xl border border-accent/5">
                <Key className="text-secondary mb-6" size={32} />
                <h4 className="text-xl font-serif text-accent mb-4">Encryption</h4>
                <p className="text-sm text-accent/50 leading-relaxed">AES-256 encryption for data at rest, ensuring your business documents and designs remain private.</p>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-accent mb-8">Contact Our Security Team</h2>
            <p className="text-accent/70 mb-12">
              If you discover a potential security vulnerability on our platform, we encourage you to report it to us immediately. We appreciate your assistance in keeping Vastraa Global secure.
            </p>
            <a href="mailto:ramesh85cloud@gmail.com" className="bg-accent text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all inline-block">Report Vulnerability</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
