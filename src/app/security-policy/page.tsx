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
             Last Updated: June 2026 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            {/* <h2 className="text-3xl font-serif text-accent mb-8">Platform Security</h2> */}
            <p className="text-accent/70 mb-3">
             At Vastraa Global, we take website security and customer information protection seriously. This Security Policy explains how we handle and protect the information shared through our website, enquiry forms, quote requests, sample requests, and file upload options. 
            </p>
               <p className="text-accent/70 mb-3">
              When visitors submit details such as name, email address, phone number, WhatsApp number, company details, fabric printing requirements, or uploaded design files, we handle the information carefully and use it only for business communication, quotation, sampling, production discussion, or support purposes. 
            </p>
               <p className="text-accent/70 mb-3">
            We follow reasonable security practices to reduce unauthorized access, misuse, loss, or disclosure of submitted information. These may include secure website hosting, SSL protection, safe form handling, restricted admin access, and careful management of uploaded files. 
            </p>
               <p className="text-accent/70 mb-3">
            Uploaded design files, artwork, patterns, logos, and reference images are treated as confidential business information. We do not share them publicly or use them for unrelated purposes without permission. 
            </p>
               <p className="text-accent/70 mb-3">
            While we take reasonable steps to protect submitted information, no online system or data transmission method can be guaranteed to be completely secure. Users are advised to share accurate information and avoid submitting unnecessary sensitive details through website forms. 
            </p>
                <p className="text-accent/70 mb-3">
          We may update this Security Policy from time to time. Any changes will be published on this page with the updated date. 
            </p>
       <p className="text-accent/70 mb-12">
For any questions about this Security Policy, please contact us: 
            </p>
            <table>
              <tr>
                <td className="font-bold">Email:</td>
                <td className="text-accent/70">info@vastraaglobal.com</td>
              </tr>
              <tr>
                <td className="font-bold">Phone:</td>
                <td className="text-accent/70">+44 7584573793 / +91 93613 94323</td>
              </tr><tr>
                <td className="font-bold pr-5">Location:</td>
                <td className="text-accent/70"> India-74A, Attayampalayam, Chithode, Erode 638102</td>
              </tr>
              
            </table>

          

    
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
            {/* <a href="mailto:info@vastraaglobal.com" className="bg-accent text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all inline-block">Report Vulnerability</a> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
