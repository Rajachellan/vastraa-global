"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { QuoteFormModal } from "@/components/QuoteFormModal";

export const CTASection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <section className="section-y">
        <div className="container-site">
          <div className="premium-gradient rounded-[3rem] p-12 md:p-14 text-center shadow-xl border border-accent/5 overflow-hidden relative">
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="section-title font-serif text-accent mb-8 leading-tight">
                Ready to <span>Transform</span> <br />
                Your Designs?
              </h2>

              <p className="text-accent/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Join thousands of designers who trust Vastraa Global for their
                premium fabric needs. Start your custom printing journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowQuoteForm(true)}
                >
                  Create Now
                </Button>

                <Button variant="outline" size="lg">
                  <Link href="/contact-us">Talk to Expert</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteFormModal isOpen={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
    </>
  );
};
