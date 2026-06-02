"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, Settings, ShieldAlert, MousePointer2 } from "lucide-react";
import Link from "next/link";
export default function CookiePolicyPage() {
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
              <Database size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-accent mb-6">Cookie <span className="text-secondary italic">Policy</span></h1>
            <p className="text-accent/60 leading-relaxed">
              Last updated: June, 2026.<Link href="/" className="font-bold underline">Vastraa Global</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            {/* <h2 className="text-3xl font-serif text-accent mb-8">What Are Cookies?</h2>
            <p className="text-accent/70 mb-12">
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p> */}

            {/* <h2 className="text-3xl font-serif text-accent mb-8">How Vastraa Global Uses Cookies</h2> */}
            <p className="text-accent/70 mb-5 text-justify">
            At <Link href="/">Vastraa Global</Link>, we may use cookies and similar tracking tools on our website to improve user experience, understand visitor behaviour, and monitor website performance
            </p>
            <p className="text-accent/70 mb-5 text-justify">
           Cookies are small files stored on your browser when you visit a website. They help us understand how visitors use our website, which pages they visit, and how we can improve the overall browsing experience. 
            </p>
            <p className="text-accent/70 mb-5 text-justify">
          Our website may use cookies for basic functions, analytics, performance tracking, and marketing purposes. These may include tools such as Google Analytics, Meta Pixel, or similar platforms. 
            </p>
            <p className="text-accent/70 mb-5 text-justify">
              You can choose to disable cookies through your browser settings. However, some website features may not work properly if cookies are turned off. 
            </p>
            <p className="text-accent/70 mb-5 text-justify">
             We do not use cookies to collect sensitive personal information. Any information collected through cookies is used only to improve our website, marketing, and user experience. 
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">Your Choices Regarding Cookies</h2>
            <p className="text-accent/70 mb-12 text-justify" >
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
            </p>
   <h2 className="text-3xl font-serif text-accent mb-8">Contact Us</h2>
            <p className="text-accent/70 mb-12 text-justify">
       
For any questions about our Cookie Policy, please contact us: 
            </p>
            <table>
              <tr>
                <td className="font-bold">Email:</td>
                <td className="text-accent/70">info@vastraaglobal.com</td>
              </tr>
              <tr>
                <td className="font-bold">Phone:</td>
                <td className="text-accent/70">+44 7776698505 / +91 93613 94323</td>
              </tr><tr>
                <td className="font-bold pr-5">Location:</td>
                <td className="text-accent/70"> India-74A, Attayampalayam, Chithode, Erode 638102</td>
              </tr>
              
            </table>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="p-8 bg-bg-ivory rounded-3xl border border-accent/5">
                <Settings className="text-secondary mb-4" size={24} />
                <h4 className="text-lg font-bold text-accent mb-2">Essential Cookies</h4>
                <p className="text-sm text-accent/50">Necessary for the website to function correctly, such as session management and secure logins.</p>
              </div>
              
              <div className="p-8 bg-bg-ivory rounded-3xl border border-accent/5">
                <MousePointer2 className="text-secondary mb-4" size={24} />
                <h4 className="text-lg font-bold text-accent mb-2">Performance Cookies</h4>
                <p className="text-sm text-accent/50">Help us understand how visitors use our site, so we can improve the fabric selection experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
