"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, Lock, Database } from "lucide-react";
import Link from "next/link";
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
              Last updated: June, 2026. Welcome to <Link href="/" className="font-bold underline">Vastraa Global</Link>.We respect your privacy and are committed to protecting the information you share with us through our website, enquiry forms, quote requests, sample requests, and communication channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">1. Information We Collect</h2>
            <p className="text-accent/70 mb-12 text-justify">
             When you contact Vastraa Global, we may collect details such as your name, email address, phone or WhatsApp number, company name, country, fabric printing requirement, uploaded design files, and any message shared through our forms. 
<br />
We collect this information only when you voluntarily submit it to us. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">2. How We Use Your Information</h2>
            <p className="text-accent/70 mb-12 text-justify">
             We use your information to respond to enquiries, understand your fabric printing requirements, share quote or sample details, contact you through email, phone, or WhatsApp, and provide support related to custom fabric printing, bulk orders, sampling, and export enquiries. 
<br />
We do not sell your personal information to third parties. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">3. Design Files and Artwork </h2>
            <p className="text-accent/70 mb-12 text-justify">
              If you upload design files, artwork, patterns, or reference images, we use them only to understand your printing requirement and provide relevant support. 
 <br />
Uploaded files are handled as confidential business information and will not be shared publicly without your permission. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">4. Cookies and Tracking </h2>
            <p className="text-accent/70 mb-12 text-justify">
          Our website may use cookies or tracking tools such as Google Analytics or Meta Pixel to understand website performance, visitor behaviour, and improve user experience. 
<br />
You can disable cookies through your browser settings if you prefer. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">5. Sharing of Information </h2>
            <p className="text-accent/70 mb-12 text-justify">
             We may share limited information only when required for business operations, such as website hosting, email communication, technical support, logistics coordination, or legal requirements. 
<br />
We do not share your information for unrelated or unauthorized purposes. 
            </p>
 <h2 className="text-3xl font-serif text-accent mb-8">6. Data Security  </h2>
            <p className="text-accent/70 mb-12 text-justify">
            Vastraa Global takes reasonable steps to protect the information submitted through our website. 
<br />
However, no online method of data transmission is completely secure, so we cannot guarantee absolute security. 
            </p>
 <h2 className="text-3xl font-serif text-accent mb-8">7. Data Retention </h2>
            <p className="text-accent/70 mb-12 text-justify">
             We may keep enquiry details, communication records, and uploaded files for as long as needed to respond to enquiries, manage business discussions, process orders, or meet legal and business requirements. 
            </p>
 <h2 className="text-3xl font-serif text-accent mb-8">8. Your Rights  </h2>
            <p className="text-accent/70 mb-12 text-justify">
             You may contact us to request access to your information, correct your details, ask for deletion where applicable, or ask how your information is being used. 
<br />
We will review such requests based on applicable laws and business requirements.  
            </p>
 <h2 className="text-3xl font-serif text-accent mb-8">9. Third-Party Links  </h2>
            <p className="text-accent/70 mb-12 text-justify">
           Our website may include links to third-party websites or platforms. 
Vastraa Global is not responsible for the privacy practices, content, or security of external websites. 
            </p>
 <h2 className="text-3xl font-serif text-accent mb-8">10. Updates to This Privacy Policy  </h2>
            <p className="text-accent/70 mb-12 text-justify">
            We may update this Privacy Policy from time to time. Any changes will be published on this page with the updated date. 
            </p>
<h2 className="text-3xl font-serif text-accent mb-8"> 15.Contact Us</h2>
            <p className="text-accent/70 mb-12">
       
For any questions about these Privacy & Policy, please contact us: 
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
            <div className="mt-20 p-12 bg-accent text-white rounded-[3rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <Lock size={120} />
              </div>
              <h4 className="text-2xl font-serif text-secondary mb-4 relative z-10">Data Protection Officer</h4>
              <p className="text-sm text-white/60 mb-6 relative z-10">
                For any data-related inquiries or to exercise your right to be forgotten, please reach out to our privacy team.
              </p>
                                <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vastraaglobal.com"
  target="_blank"
  rel="noopener noreferrer"className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline">Email Privacy Team →</a>
           
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
