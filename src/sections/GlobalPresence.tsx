"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

const offices = [
  {
    city: "Lincoln",
    country: "United Kingdom",
    address: "101 Astwick Road,Lincoln,Lincolnshire, United Kingdom, LN6 7LL ",
    phone: "+44 7584573793",
    email: "info@vastraaglobal.com",
    role: "UK Office",
    isMain: false,
  },
   
];

const globalLocations = [
  { name: "India", top: "47%", left: "62.5%", label: "Manufacturing Hub" },
  { name: "United Kingdom", top: "37%", left: "46%", label: "Design & Sales" },
  { name: "USA", top: "43%", left: "26%", label: "Key Market" },
  { name: "Canada", top: "38%", left: "26%", label: "Strategic Growth" },
  { name: "UAE", top: "48%", left: "56%", label: "Distribution" },
  { name: "Australia", top: "62%", left: "77%", label: "Oceania Reach" },
];


export const GlobalPresence = () => {
  return (
    <section id="global-presence" className="section-y bg-accent text-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-[0.25em] uppercase text-[10px]">Strategic Footprint</span>
            </div>
            <h2 className="section-title font-serif mb-8 leading-[1.1]">
              Exporting Excellence <br />
              <span className="text-secondary italic">Worldwide</span>
            </h2>
            <p className="text-primary/60 text-lg mb-12 leading-relaxed max-w-xl">
              From the textile heartland of India to the fashion hubs of the UK and North America, we bridge premium manufacturing with global design standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {offices.map((office, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-secondary/20 hover:bg-white/10 transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-serif text-white">{office.city}, {office.country}</h3>
                      {office.isMain && (
                        <span className="text-[9px] font-bold uppercase tracking-widest bg-secondary text-white px-2 py-0.5 rounded-full">HQ</span>
                      )}
                    </div>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em] mb-4 opacity-70">{office.role}</p>
                    <p className="text-primary/40 text-sm mb-6 leading-relaxed max-w-xs">{office.address}</p>

                    <div className="flex flex-col gap-3 text-sm">
                      <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-primary/60 hover:text-secondary transition-colors group/link">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-secondary/20">
                          <Phone size={14} />
                        </div>
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-primary/60 hover:text-secondary transition-colors group/link">
                         <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-secondary/20">
                          <Mail size={14} />
                        </div>
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Real World Map Backdrop */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <Image
                src="/images/world-map.png"
                alt="Vastraa Global Presence Map"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="w-full h-full relative">
              {/* Map Markers */}
              {globalLocations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute group cursor-pointer z-10"
                  style={{ top: loc.top, left: loc.left }}
                >
                  {/* Pin Pulse */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-secondary/30 rounded-full animate-ping opacity-20 group-hover:bg-secondary/50 transition-all" />
                    <div className="relative w-4 h-4 bg-secondary rounded-full border-2 border-accent shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Hover Label */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap bg-accent/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                  >
                    <div className="text-white font-serif text-sm">{loc.name}</div>
                    <div className="text-secondary text-[9px] uppercase tracking-widest font-bold">{loc.label}</div>
                  </motion.div>

                  {/* Small Label (Always Visible on Desktop) */}
                  <div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap transition-colors group-hover:text-white">
                    {loc.name}
                  </div>
                </motion.div>
              ))}

              {/* Connections (Abstract arcs) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
                <defs>
                  <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* Arc from India (52%, 40%) to others */}
                <path d="M 520 240 Q 480 180 460 150" fill="none" stroke="url(#grad-line)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M 520 240 Q 350 150 150 210" fill="none" stroke="url(#grad-line)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M 520 240 Q 300 120 120 150" fill="none" stroke="url(#grad-line)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M 520 240 Q 550 240 580 270" fill="none" stroke="url(#grad-line)" strokeWidth="1" strokeDasharray="5,5" />
                <path d="M 520 240 Q 700 350 850 450" fill="none" stroke="url(#grad-line)" strokeWidth="1" strokeDasharray="5,5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

