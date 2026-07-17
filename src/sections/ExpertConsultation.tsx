"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
export const ExpertConsultation = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 40%)",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 inline-block">
              Premium Textile Services
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Not sure which fabric suits your design? <br />
              <span className="text-secondary italic">Our experts will guide you.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              From choosing the right GSM to selecting the perfect printing technique, our textile engineers are here to ensure your collection meets the highest standards of luxury.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Live Consultation</h4>
                  <p className="text-sm text-white/40">Real-time advice from fabric experts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Tailored Solutions</h4>
                  <p className="text-sm text-white/40">Customized to your brand's vision.</p>
                </div>
              </div>
            </div>

            <Button  className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-500 shadow-2xl flex items-center gap-3">
            <Link href="/contact-us">Book a Free Consultation</Link>
              
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-[4rem] overflow-hidden border-8 border-white/5">
              <Image 
                src="/images/hero-b2b-new.png" 
                alt="Expert Consultation" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-xs text-accent/40 font-bold uppercase tracking-widest">Available Now</div>
                  <div className="text-accent font-bold">Today, 2:30 PM</div>
                </div>
              </div>
              <p className="text-sm text-accent/60 italic leading-relaxed">
                "Our team will help you select the most suitable printing method based on your fabric choice."
              </p>
            </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
