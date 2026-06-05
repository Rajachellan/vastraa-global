"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import { FabricMedia } from "@/components/FabricMedia";
import { fetchBlogs } from "@/lib/catalog";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { BlogPost } from "@/lib/types";

function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function blogCategory(post: BlogPost): string {
  return post.tags?.[0] || "Insights";
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const blogs = await fetchBlogs();
        if (!cancelled) setPosts(blogs);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) =>
      post.tags?.some((tag) => tag.toLowerCase() === activeCategory.toLowerCase())
    );
  }, [posts, activeCategory]);

  const featured = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

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

      {loading ? (
        <section className="py-20 text-center text-accent/40">Loading articles…</section>
      ) : posts.length === 0 ? (
        <section className="py-20 text-center">
          <p className="text-xl text-accent/40 mb-4">No blog posts yet.</p>
          <p className="text-sm text-accent/30">Publish articles from the admin panel under Blog Posts.</p>
        </section>
      ) : (
        <>
          {featured && (
            <section className="py-14">
              <div className="container mx-auto px-6">
                <Link href={`/blogs/${featured.slug}`} className="group block">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                      <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                        {featured.image ? (
                          <FabricMedia
                            image={featured.image}
                            alt={featured.title}
                            priority
                            imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-accent/10 flex items-center justify-center text-accent/30">
                            No image
                          </div>
                        )}
                        <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold text-accent uppercase tracking-widest z-10">
                          Featured Insight
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-5 space-y-8">
                      <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-secondary">
                        <span>{blogCategory(featured)}</span>
                        <span className="w-1 h-1 bg-accent/20 rounded-full" />
                        <span className="text-accent/40">{formatBlogDate(featured.createdAt)}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif text-accent leading-tight group-hover:text-secondary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-lg text-accent/50 leading-relaxed">
                        {featured.excerpt || "Read the full article for more details."}
                      </p>
                      <div className="flex items-center gap-4 text-accent font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                        Read Full Article <ArrowRight size={16} className="text-secondary" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          <section className="py-14 bg-bg-ivory">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <h2 className="text-4xl font-serif text-accent">
                  Latest <span className="text-secondary">Updates</span>
                </h2>
                {categories.length > 1 && (
                  <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
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
                )}
              </div>

              {gridPosts.length === 0 && !featured ? (
                <p className="text-center text-accent/40 py-12">No posts in this category.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {(gridPosts.length > 0 ? gridPosts : featured ? [] : filteredPosts).map((post) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <Link href={`/blogs/${post.slug}`} className="block">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                          {post.image ? (
                            <FabricMedia
                              image={post.image}
                              alt={post.title}
                              imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-accent/10 flex items-center justify-center text-accent/30 text-sm">
                              No image
                            </div>
                          )}
                          <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary">
                            <Tag size={12} /> {blogCategory(post)}
                          </div>
                          <h3 className="text-2xl font-serif text-accent group-hover:text-secondary transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-sm text-accent/50 leading-relaxed line-clamp-3">
                            {post.excerpt || "Read the full article for more details."}
                          </p>
                          <div className="pt-4 flex items-center justify-between border-t border-accent/5">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/30">
                              <Clock size={12} /> {post.readTime || "5 min read"}
                            </div>
                            <ChevronRight size={16} className="text-secondary group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}

              <NewsletterSignup
                source="blogs"
                description="Join our monthly newsletter for technical reports, fabric trends and B2B pricing updates."
              />
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
};
