"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/Button";
import { Navbar } from "@/components/Navbar";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-ivory relative overflow-hidden">
      <Navbar />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-0" />

      <div className="flex-1 flex items-center justify-center p-6 pt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl border border-accent/5"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-accent mb-3">Welcome <span>Back</span></h1>
            <p className="text-accent/60 text-sm">Enter your details to access your Vastraa account</p>
          </div>

          <form className="space-y-6">
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
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-widest text-accent/40">Password</label>
                <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-secondary hover:text-accent transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30" size={18} />
                <input 
                  type="password" 
                  className="w-full bg-bg-ivory border border-accent/5 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-secondary transition-colors text-accent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button className="w-full group">
              Sign In
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-accent/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest text-accent/30 font-bold">
              <span className="bg-white px-4">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
{/* Google Button */}
<button
  onClick={() =>
    window.open(
      "https://accounts.google.com/signin",
      "_blank"
    )
  }
  className="flex items-center justify-center gap-3 border border-accent/5 rounded-2xl py-3 hover:bg-bg-ivory transition-colors text-accent text-sm font-medium"
>
  <Globe size={18} />
   Google
</button>

{/* GitHub Button */}
<button
  onClick={() => window.open("https://github.com", "_blank")}
  className="flex items-center justify-center gap-3 border border-accent/5 rounded-2xl py-3 hover:bg-bg-ivory transition-colors text-accent text-sm font-medium"
>
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-accent"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.82-.26.82-.58v-2.02c-3.26.71-3.95-1.39-3.95-1.39-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.79.42-1.31.76-1.61-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.2a11.5 11.5 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.65.24 2.88.12 3.18.76.82 1.22 1.86 1.22 3.14 0 4.49-2.75 5.47-5.37 5.77.43.37.81 1.1.81 2.22v3.3c0 .32.22.69.83.57A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
  GitHub
</button>
          </div>


          <p className="text-center mt-10 text-sm text-accent/60">
            Don't have an account?{" "}
            <Link href="/signup" className="text-secondary font-bold hover:underline underline-offset-4">Sign Up</Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}

