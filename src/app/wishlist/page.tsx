"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useStore } from "@/context/StoreContext";
import Image from "next/image";
import { Heart, ShoppingBag, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  return (
    <main className="flex min-h-screen flex-col pt-32">
      <Navbar />

      <section className="flex-1 py-16 bg-bg-ivory/30">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif text-accent mb-12">Your <span>Wishlist</span></h1>

          {wishlist.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[3rem] shadow-sm border border-accent/5">
              <Heart size={64} className="mx-auto text-accent/10 mb-6" />
              <p className="text-xl text-accent/60 mb-8">Your wishlist is currently empty.</p>
              <Link href="/fabrics">
                <Button>Explore Collections</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {wishlist.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={item.id}
                    className="group bg-white p-6 rounded-[2.5rem] shadow-sm border border-accent/5 relative"
                  >
                    <button 
                      onClick={() => toggleWishlist(item)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-accent/30 hover:text-red-500 transition-colors shadow-sm"
                    >
                      <X size={18} />
                    </button>

                    <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-serif text-accent mb-1">{item.name}</h3>
                        <p className="text-sm text-accent/40">{item.type || "Premium Fabric"}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-serif text-accent">{item.price}</span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group"
                          onClick={() => {
                            addToCart(item);
                            toggleWishlist(item);
                          }}
                        >
                          Move to Bag
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

