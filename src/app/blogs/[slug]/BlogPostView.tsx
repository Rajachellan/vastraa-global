"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/BlogContent";
import { resolveMediaUrl } from "@/lib/api";
import { FabricMedia } from "@/components/FabricMedia";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";

export type BlogPostData = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image?: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  createdAt?: string;
  category?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonical?: string;
  };
};

type Props = {
  post: BlogPostData | null;
  loading: boolean;
  notFound: boolean;
};

export function BlogPostView({ post, loading, notFound }: Props) {
  const tagLabel =
    post?.tags && post.tags.length > 0 ? post.tags[0] : post?.category || "Insights";

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent/50 hover:text-secondary transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to articles
          </Link>

          {loading ? (
            <p className="text-accent/50">Loading article…</p>
          ) : notFound || !post ? (
            <div className="text-center py-20">
              <h1 className="text-3xl font-serif text-accent mb-4">Article not found</h1>
              <Link href="/blogs" className="text-secondary font-bold text-sm uppercase tracking-widest">
                View all blogs
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-secondary mb-6">
                <span className="flex items-center gap-1">
                  <Tag size={12} /> {tagLabel}
                </span>
                <span className="w-1 h-1 bg-accent/20 rounded-full" />
                <span className="text-accent/40">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent leading-tight mb-8">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-accent/55 leading-relaxed mb-10 border-l-4 border-secondary pl-6">
                  {post.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-accent/40 mb-12 pb-8 border-b border-accent/10">
                <span className="flex items-center gap-2">
                  <User size={14} /> {post.author || "Vastraa Global"}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {post.readTime || "5 min read"}
                </span>
              </div>

              {post.image && (
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-14 shadow-xl">
                  <FabricMedia
                    image={post.image}
                    alt={post.title}
                    priority
                    sizes="(max-width: 896px) 100vw, 896px"
                    imageClassName="object-cover"
                  />
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-bg-ivory text-[10px] font-bold uppercase tracking-widest text-accent/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <BlogContent html={post.content} />
            </>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
