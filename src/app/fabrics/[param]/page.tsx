"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { FabricMedia } from "@/components/FabricMedia";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, ChevronDown, Award, Sparkles, Droplets, Info, Upload } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { Toast } from "@/components/Toast";
import { QuoteModal } from "@/components/QuoteModal";
import { motion, AnimatePresence } from "framer-motion";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import {
  fetchFabricProduct,
  fetchRelatedFabricProducts,
  getFabricCategoryName,
} from "@/lib/catalog";
import { FABRIC_CATEGORY_SLUGS, fabricProductHref } from "@/lib/fabricUrls";
import type { FabricItem } from "@/lib/types";

const OBJECT_ID = /^[a-f0-9]{24}$/i;

export default function FabricProductPage({ params }: { params: Promise<{ param: string }> }) {
  const { param } = React.use(params);

  if (FABRIC_CATEGORY_SLUGS.has(param.toLowerCase())) {
    notFound();
  }

  return <FabricProductDetail param={param} />;
}

function FabricProductDetail({ param }: { param: string }) {
  const router = useRouter();
  const [fabric, setFabric] = useState<FabricItem | null>(null);
  const [related, setRelated] = useState<FabricItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toggleWishlist, isInWishlist } = useStore();
  const [toast, setToast] = useState({ show: false, message: "" });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("specs");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchFabricProduct(param).then((item) => {
      if (!cancelled) {
        setFabric(item);
        setLoading(false);
        if (item) {
          fetchRelatedFabricProducts(item, 3).then((relatedItems) => {
            if (!cancelled) setRelated(relatedItems);
          });
        }
      }
    });
    return () => {
      cancelled = true;
    };
  }, [param]);

  useEffect(() => {
    if (!fabric?.slug || !OBJECT_ID.test(param)) return;
    router.replace(`/fabrics/${fabric.slug}`);
  }, [fabric, param, router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-bg-ivory pt-40 text-center text-accent/40">
        Loading product…
      </main>
    );
  }

  if (!fabric) notFound();

  const categoryName = getFabricCategoryName(fabric);
  const galleryImages = fabric.images?.length ? fabric.images : [fabric.image];

  const showToast = (msg: string) => setToast({ show: true, message: msg });

  const handleToggleWishlist = () => {
    toggleWishlist(fabric);
    showToast(
      isInWishlist(fabric.id)
        ? `${fabric.name} removed from your favorites!`
        : `${fabric.name} added to your favorites!`
    );
  };

  return (
    <main className="flex min-h-screen flex-col bg-bg-ivory">
      <Navbar />
      <Toast isVisible={toast.show} message={toast.message} onClose={() => setToast({ ...toast, show: false })} />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={`${fabric.name} Fabric`}
        initialImage={galleryImages[activeImageIdx]}
      />
      <RelatedDesigns fabricId={fabric.id} fabricName={fabric.name} />

      <section className="container mx-auto px-6 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-40">
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-accent/5 bg-bg-ivory">
              <FabricMedia
                key={galleryImages[activeImageIdx]}
                image={galleryImages[activeImageIdx]}
                alt={`${fabric.name} Detail View`}
                priority
                fit="contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <button
                onClick={handleToggleWishlist}
                className={`absolute top-8 right-8 p-4 rounded-full shadow-lg backdrop-blur-md transition-all ${
                  isInWishlist(fabric.id) ? "bg-secondary text-white" : "bg-white/80 text-accent"
                }`}
              >
                <Heart size={20} fill={isInWishlist(fabric.id) ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto py-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img || idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 bg-bg-ivory ${
                    activeImageIdx === idx ? "border-secondary" : "border-accent/10"
                  }`}
                >
                  <FabricMedia
                    key={img}
                    image={img}
                    alt="Thumbnail"
                    fit="cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <div className="text-secondary text-xs uppercase tracking-[0.2em] font-bold mb-3">
                {categoryName}
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6">{fabric.name}</h1>
              <p className="text-accent/60 text-lg leading-relaxed">{fabric.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-accent/5 py-8">
              <StatCard icon={Award} label="Weight" value={fabric.gsm} />
              <StatCard icon={Sparkles} label="Print" value={fabric.printing} />
              <StatCard icon={Droplets} label="MOQ" value={fabric.moq} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-accent text-white px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs"
              >
                Inquire for Quote
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="flex-1 bg-white text-accent border border-accent/10 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <Upload size={14} />
                Upload Design
              </button>
            </div>

            {["specs", "usage", "care"].map((section) => (
              <AccordionSection
                key={section}
                title={
                  section === "specs"
                    ? "Technical Specifications"
                    : section === "usage"
                      ? "Usage & Applications"
                      : "Care Instructions"
                }
                open={activeAccordion === section}
                onToggle={() => setActiveAccordion(activeAccordion === section ? null : section)}
              >
                {section === "specs" && (
                  <div className="space-y-3 text-sm text-accent/70">
                    <SpecLine label="Composition" value={fabric.specs} />
                    <SpecLine label="Type" value={fabric.type} />
                    <SpecLine label="GSM" value={fabric.gsm} />
                    <SpecLine label="Printing" value={fabric.printing} />
                    {!fabric.specs && !fabric.type && !fabric.gsm && !fabric.printing && (
                      <p className="text-accent/40 italic">Specifications not added yet.</p>
                    )}
                  </div>
                )}
                {section === "usage" && (
                  <p className="text-sm text-accent/70">
                    {fabric.usage?.trim() || <span className="text-accent/40 italic">Usage details not added yet.</span>}
                  </p>
                )}
                {section === "care" && (
                  <p className="text-sm text-accent/70">
                    {fabric.care?.trim() || <span className="text-accent/40 italic">Care instructions not added yet.</span>}
                  </p>
                )}
              </AccordionSection>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-32 pt-20 border-t border-accent/5">
            <h2 className="text-4xl font-serif text-accent mb-16">
              Related <span className="text-secondary italic">{categoryName}</span> Fabrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={fabricProductHref(item)}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-accent/5 hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[4/3]">
                    <FabricMedia image={item.image} alt={item.name} imageClassName="object-cover" sizes="33vw" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-accent group-hover:text-secondary">{item.name}</h3>
                    <p className="text-sm text-accent/60 mt-2 line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Award;
  label: string;
  value?: string;
}) {
  const text = value?.trim();
  return (
    <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
      <Icon className="text-secondary mx-auto mb-2" size={20} />
      <span className="block text-[10px] font-bold text-accent/40 uppercase">{label}</span>
      <span className="block text-sm font-semibold text-accent mt-1">{text || "—"}</span>
    </div>
  );
}

function SpecLine({ label, value }: { label: string; value?: string }) {
  const text = value?.trim();
  if (!text) return null;
  return (
    <p>
      <strong>{label}:</strong> {text}
    </p>
  );
}

function AccordionSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-3xl border border-accent/5 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left font-serif text-accent text-lg"
      >
        <span className="flex items-center gap-3">
          <Info size={16} className="text-secondary" />
          {title}
        </span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-accent/5 bg-bg-ivory/35"
          >
            <div className="p-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
