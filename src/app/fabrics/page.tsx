"use client";

import React, { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FabricMedia } from "@/components/FabricMedia";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import {
  FABRIC_NAV_ITEMS,
  getStaticFabricCatalog,
  getStaticFabricCategoryBySlug,
} from "@/lib/fabricCategories";
import type { FabricItem } from "@/lib/types";

export default function FabricsMainPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg-ivory pt-40 text-center text-accent/40">Loading…</div>}>
      <FabricsPageContent />
    </Suspense>
  );
}

function FabricsPageContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category") || "";
  const categories = useMemo(() => getStaticFabricCatalog(), []);

  const activeCategory = categorySlug
    ? categories.find((category) => category.slug === categorySlug) ||
      getStaticFabricCategoryBySlug(categorySlug)
    : null;

  const activeFilter = activeCategory?.name || "All";
  const displayedCategories = activeCategory ? [activeCategory] : categories;

  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });
  const { toggleWishlist, isInWishlist } = useStore();

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const handleToggleWishlist = (item: FabricItem) => {
    toggleWishlist(item);
    if (!isInWishlist(item.id)) {
      showToast(`${item.name} added to your favorites!`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />

      <Toast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/printing-cloths (5).jpg"
          alt="Premium fabrics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              {activeCategory ? (
                <>
                  Explore Our <span className="text-secondary">{activeCategory.name}</span> Collection
                </>
              ) : (
                <>
                  Explore Our <span className="text-secondary">Collection</span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
              {activeCategory?.description ||
                "Premium textile solutions tailored for your unique brand. From fabric selection to final print, we handle the rest."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            {FABRIC_NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  (item.slug ? activeFilter === item.name : activeFilter === "All")
                    ? "bg-accent text-white shadow-xl"
                    : "bg-white text-accent/60 hover:bg-secondary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {displayedCategories.length === 0 ? (
            <div className="text-center py-20 text-accent/40">
              No fabrics found for this category.
            </div>
          ) : (
            <div className="space-y-32">
              {displayedCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-4xl font-serif text-accent">{category.name}</h2>
                    <div className="flex-1 h-[1px] bg-accent/10" />
                  </div>

                  {category.items.length === 0 ? (
                    <p className="text-accent/40">No items in this category yet.</p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {category.items.map((item: FabricItem) => (
                        <Link href={`/fabrics/${item.id}`} key={item.id} className="group">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm border border-accent/5 hover:shadow-2xl transition-all duration-500"
                          >
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                              {item.image ? (
                                <FabricMedia
                                  image={item.image}
                                  alt={item.name}
                                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                                  sizes="(max-width: 768px) 100vw, 40vw"
                                />
                              ) : (
                                <Image
                                  src="/images/cotton.png"
                                  alt={item.name}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 40vw"
                                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              )}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleToggleWishlist(item);
                                }}
                                className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-md transition-all duration-300 z-20 ${
                                  isInWishlist(item.id)
                                    ? "bg-secondary text-white"
                                    : "bg-white/80 text-accent hover:bg-secondary hover:text-white"
                                }`}
                              >
                                <Heart size={18} fill={isInWishlist(item.id) ? "currentColor" : "none"} />
                              </button>
                            </div>

                            <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                              <h3 className="text-3xl font-serif text-accent mb-4">{item.name}</h3>
                              <p className="text-accent/60 leading-relaxed mb-8">{item.description}</p>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                                View details →
                              </span>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
