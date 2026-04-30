"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const offices = [
  {
    city: "Derby",
    country: "United Kingdom",
    address: "58 Lyttleton Street, Derby, DE22 3FE",
    phone: "+44 7776698505",
    email: "ramesh85cloud@gmail.com",
    role: "UK Office",
    isMain: false,
  },
  {
    city: "Erode",
    country: "India",
    address: "74-A, Attayampalayam, East Colony, Gangapuram Post, Chithode, Erode, Tamil Nadu 638107",
    phone: "+91 9865050303",
    email: "ramesh85cloud@gmail.com",
    role: "India Office",
    isMain: true,
  }
];

export const GlobalPresence = () => {
  return (
    <section id="global-presence" className="py-24 bg-accent text-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-[0.25em] uppercase text-xs">Global Reach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Exporting Excellence <br />
              <span className="text-secondary">Worldwide</span>
            </h2>
            <p className="text-primary/60 text-lg mb-10 leading-relaxed">
              With our roots in India's textile capital and a strategic presence in the UK, we bridge the gap between world-class manufacturing and international design standards.
            </p>

            <div className="space-y-8">
              {offices.map((office, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-serif">{office.city}, {office.country}</h3>
                      {office.isMain && (
                        <span className="text-[10px] uppercase tracking-tighter bg-secondary text-white px-2 py-0.5 rounded">HQ</span>
                      )}
                    </div>
                    <p className="text-xs text-secondary font-medium uppercase tracking-widest mb-3">{office.role}</p>
                    <p className="text-primary/40 text-sm mb-4">{office.address}</p>

                    <div className="flex flex-wrap gap-6 text-sm">
                      <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-primary/60 hover:text-secondary transition-colors">
                        <Phone size={14} />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-primary/60 hover:text-secondary transition-colors">
                        <Mail size={14} />
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Map/Abstract Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center lg:justify-end"
          >
            {/* This would be an interactive map or premium SVG in a real app */}
            <div className="w-full max-w-lg aspect-square rounded-full border border-white/5 flex items-center justify-center relative">
              <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-secondary/20 flex items-center justify-center">
                  <span className="text-8xl font-serif font-bold text-secondary/10">VG</span>
                </div>
              </div>

              {/* Floating nodes representing countries */}
              {[
                { top: '20%', left: '30%', label: 'UK' },
                { top: '60%', left: '70%', label: 'India' },
                { top: '40%', left: '85%', label: 'USA' },
                { top: '15%', left: '75%', label: 'UAE' },
                { top: '75%', left: '25%', label: 'AUS' },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                  className="absolute p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center gap-1 shadow-2xl"
                  style={{ top: node.top, left: node.left }}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                  <span className="text-[10px] font-bold text-primary/40 tracking-widest">{node.label}</span>
                </motion.div>
              ))}

              {/* Connection lines (abstract) */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                <line x1="30%" y1="20%" x2="70%" y2="60%" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="70%" y1="60%" x2="85%" y2="40%" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="70%" y1="60%" x2="75%" y2="15%" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="70%" y1="60%" x2="25%" y2="75%" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

