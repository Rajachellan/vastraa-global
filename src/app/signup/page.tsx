"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-ivory relative overflow-hidden">
      <Navbar />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="flex-1 flex items-center justify-center p-6 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl border border-accent/5"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-accent mb-3">Create <span>Account</span></h1>
            <p className="text-accent/60 text-sm">Join Vastraa Global and start your design journey</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30" size={18} />
                <input 
                  type="text" 
                  className="w-full bg-bg-ivory border border-accent/5 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-secondary transition-colors text-accent"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30" size={18} />
                <input 
                  type="email" 
                  className="w-full bg-bg-ivory border border-accent/5 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-secondary transition-colors text-accent"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30" size={18} />
                <input 
                  type="password" 
                  className="w-full bg-bg-ivory border border-accent/5 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-secondary transition-colors text-accent"
                  placeholder="Min. 8 characters"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-1">
              <input type="checkbox" id="terms" className="accent-secondary w-4 h-4" />
              <label htmlFor="terms" className="text-xs text-accent/60">
                I agree to the <Link href="#" className="text-secondary underline">Terms of Service</Link> and <Link href="#" className="text-secondary underline">Privacy Policy</Link>
              </label>
            </div>

            <Button className="w-full group">
              Create Account
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </form>

          <p className="text-center mt-10 text-sm text-accent/60">
            Already have an account?{" "}
            <Link href="/signin" className="text-secondary font-bold hover:underline underline-offset-4">Sign In</Link>
          </p>

          <div className="mt-8 pt-8 border-t border-accent/5 flex items-center justify-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-accent/20">
            <ShieldCheck size={14} /> Secure & Encrypted
          </div>
        </motion.div>
      </div>
    </main>
  );
}

