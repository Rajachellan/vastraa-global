"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Tag, ChevronRight } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Shift to Digital: Why Pigment is Winning in 2024",
    excerpt: "Traditional dyeing methods are being challenged by the rapid rise of digital pigment printing. Explore the economic and environmental drivers behind this shift.",
    image: "/images/print-sublimation.png",
    category: "Industry Trends",
    date: "April 15, 2024",
    author: "Arjun V.",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding GSM: A Technical Guide for Fashion Designers",
    excerpt: "From lightweight chiffons to heavy twills, mastering fabric weight is crucial for successful garment construction. Here is everything you need to know.",
    image: "/images/design-workspace.png",
    category: "Technical Guide",
    date: "April 10, 2024",
    author: "Sarah L.",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Sustainability in Export: Meeting EU Environmental Standards",
    excerpt: "The regulatory landscape for textile exports is changing. Learn how GOTS and OEKO-TEX certifications can protect your brand's future.",
    image: "/images/fabric-sustainable.png",
    category: "Compliance",
    date: "April 05, 2024",
    author: "Elena R.",
    readTime: "15 min read"
  }
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Technical" && post.category.includes("Technical")) return true;
    if (activeCategory === "Trends" && post.category.includes("Trends")) return true;
    if (activeCategory === "Compliance" && post.category.includes("Compliance")) return true;
    return false;
  });

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg-ivory relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-serif text-accent mb-8 leading-tight">
              Textile <span className="text-secondary">Intelligence</span>
            </h1>
            <p className="text-xl text-accent/60 leading-relaxed max-w-2xl">
              Insights, technical guides and industry reports from the forefront of digital textile manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <Link href="/blogs/digital-pigment-shift" className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image src="/images/consultation.png" alt="Featured Post" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold text-accent uppercase tracking-widest">
                    Featured Insight
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-secondary">
                  <span>Industry Trends</span>
                  <span className="w-1 h-1 bg-accent/20 rounded-full" />
                  <span className="text-accent/40">April 28, 2024</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-accent leading-tight group-hover:text-secondary transition-colors">
                  The Future of Digital Pigment Printing in Luxury Fashion
                </h2>
                <p className="text-lg text-accent/50 leading-relaxed">
                  As luxury brands face increasing pressure to reduce their carbon footprint, digital pigment printing is emerging as the gold standard for sustainable high-end production. We explore the latest breakthroughs in binder chemistry and color gamut expansion.
                </p>
                <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                  Read Full Article <ArrowRight size={16} className="text-secondary" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-4xl font-serif text-accent">Latest <span className="text-secondary">Updates</span></h2>
            <div className="flex flex-wrap gap-3">
              {["All", "Technical", "Trends", "Compliance"].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? "border-secondary text-white bg-secondary" 
                      : "border-accent/10 text-accent/40 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                    <Tag size={12} /> {post.category}
                  </div>
                  <h3 className="text-2xl font-serif text-accent group-hover:text-secondary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-accent/50 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-accent/5">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/30">
                      <Clock size={12} /> {post.readTime}
                    </div>
                    <ChevronRight size={16} className="text-secondary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-12 p-16 bg-accent rounded-[4rem] text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h3 className="text-4xl font-serif text-white">Stay Ahead of the <span className="text-secondary">Market</span></h3>
              <p className="text-white/50">Join our monthly newsletter for technical reports, fabric trends and B2B pricing updates.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-accent transition-all w-full sm:w-auto">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

