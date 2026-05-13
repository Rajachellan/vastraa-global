"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useStore } from "@/context/StoreContext";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Toast } from "@/components/Toast";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: "" });

  return (
    <main className="flex min-h-screen flex-col pt-32">
      <Navbar />

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

      <section className="flex-1 py-16 bg-bg-ivory/30">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif text-accent mb-12">Your <span>Quote Request Bag</span></h1>

          {cart.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[3rem] shadow-sm border border-accent/5">
              <ShoppingBag size={64} className="mx-auto text-accent/10 mb-6" />
              <p className="text-xl text-accent/60 mb-8">Your quote request bag is currently empty.</p>
              <Link href="/fabrics">
                <Button>Explore Solutions</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-8 space-y-6">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={item.id}
                      className="bg-white p-6 rounded-3xl shadow-sm border border-accent/5 flex items-center gap-6"
                    >
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-serif text-accent mb-1">{item.name}</h3>
                        <p className="text-xs text-accent/40 uppercase tracking-widest font-bold mb-4">{item.type}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 bg-bg-ivory rounded-full px-4 py-2 border border-accent/5">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-accent hover:text-secondary">
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-bold w-4 text-center text-accent">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-accent hover:text-secondary">
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-6">
                            <button onClick={() => removeFromCart(item.id)} className="text-accent/30 hover:text-red-500 transition-colors">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Summary */}
              <div className="lg:col-span-4">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-accent/5 sticky top-40">
                  <h3 className="text-2xl font-serif text-accent mb-8">Quote Summary</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-accent/60">
                      <span>Items for Review</span>
                      <span>{cart.length}</span>
                    </div>
                    <div className="flex justify-between text-accent/60">
                      <span>Service Level</span>
                      <span className="text-secondary font-bold uppercase tracking-widest text-[10px] bg-secondary/10 px-2 py-1 rounded">Premium Consultation</span>
                    </div>
                    <div className="border-t border-accent/5 pt-4 text-sm text-accent/60 italic">
                      Our experts will analyze your requirements and provide a tailored quote within 24 hours.
                    </div>
                  </div>

                  <Button 
                    className="w-full group"
                    onClick={() => setToast({ show: true, message: "Quote request submitted! Our team will contact you soon." })}
                  >
                    Request Custom Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                  
                  <div className="mt-8 text-center">
                    <p className="text-[10px] text-accent/30 uppercase tracking-[0.2em] font-bold">Trusted by Global Brands</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

