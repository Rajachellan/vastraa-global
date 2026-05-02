"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Globe, X } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-primary pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="grid grid-cols-2">
              <div>
                <Link href="/" className="inline-block">
              <Image
                src="/images/logo3.png"
                alt="Vastraa Global"
                width={140}
                height={140}
                className=""
                />
            </Link>
              </div>
              <div>
                <p>Vastraa Global</p>
              </div>
            </div>
            
            <p className="text-sm text-primary/50 leading-relaxed max-w-xs">
              Global leaders in digital fabric printing and sustainable textile manufacturing. Decades of expertise, precision quality, and ethical production.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300">
                <Globe size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300">
                <Send size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300">
                <Mail size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all duration-300">
                <X size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Quick Links</h4>
            <ul className="space-y-4 text-sm text-primary/50">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/how-we-print" className="hover:text-secondary transition-colors">How We Print</Link></li>
              <li><Link href="/fabrics" className="hover:text-secondary transition-colors">Our Fabrics</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Get a Quote</Link></li>
              <li><Link href="/blogs" className="hover:text-secondary transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Policies</h4>
            <ul className="space-y-4 text-sm text-primary/50">
              <li><Link href="/terms-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/security-policy" className="hover:text-secondary transition-colors">Security Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-secondary">Contact Us</h4>
            <ul className="space-y-6 text-sm text-primary/50">
              <li className="flex gap-4">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>
                  <strong>UK:</strong> Derby, DE22 3FE <br />
                  <strong>India:</strong> 74A, Attayampalayam, Chithode, Erode 638102
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+44 7776698505 / +91 9865050303</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>ramesh85cloud@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-primary/30">
            © {new Date().getFullYear()} Vastraa Global. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-primary/30">
            <span>Designed for Excellence</span>
            <span className="text-secondary">Export Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

