"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Database, Settings, ShieldAlert, MousePointer2 } from "lucide-react";

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
              We use cookies to enhance your experience and analyze our website traffic to provide better textile services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-accent">
            <h2 className="text-3xl font-serif text-accent mb-8">What Are Cookies?</h2>
            <p className="text-accent/70 mb-12">
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p>

            <h2 className="text-3xl font-serif text-accent mb-8">How Vastraa Global Uses Cookies</h2>
            <p className="text-accent/70 mb-12">
              When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="space-y-4 text-accent/70 mb-12 list-disc pl-6">
              <li>To enable certain functions of the Service (e.g., maintaining your cart items).</li>
              <li>To provide analytics on how users interact with our design studio.</li>
              <li>To store your preferences for fabric categories and search history.</li>
            </ul>

            <h2 className="text-3xl font-serif text-accent mb-8">Your Choices Regarding Cookies</h2>
            <p className="text-accent/70 mb-12">
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
            </p>

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
