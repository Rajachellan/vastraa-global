import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Layers, Package, Palette, Truck } from "lucide-react";
import { fabricProductHref } from "@/lib/fabricUrls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FabricMedia } from "@/components/FabricMedia";
import { FabricFaqs } from "@/components/FabricFaqs";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";
import { RelatedDesigns } from "@/components/RelatedDesigns";
import { fetchFabricPage } from "@/lib/catalog";
import { ClientQuoteButton } from "@/components/ClientQuoteButton";

export const metadata: Metadata = {
  title: "Tencil Fabrics | Vastraa Global",
  description: "Export-quality cotton fabrics, custom printing, and bulk manufacturing for fashion brands worldwide.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/tencil",
  },
};

export default async function Page() {
  const slug = "tencil";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabric-cotton.png" alt="Tencil" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Organic <span className="text-secondary">Cotton</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium textile solutions tailored for you. From fabric selection to final print, we handle the rest.
            </p>
            <ClientQuoteButton productName="Tencil" />
          </div>
        </div>
      </section>

      {/* Products from admin — posted to this fabric page */}
      {items.length > 0 && (
        <section className="py-20 bg-bg-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-[0.25em] text-xs font-bold mb-3">
                Our Collection
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-accent">
                Tencil <span className="text-secondary">Products</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={fabricProductHref(item)}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-accent/5 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <FabricMedia
                      image={item.image}
                      alt={item.name}
                      imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-accent group-hover:text-secondary transition-colors mb-2">
                      {item.name}
                    </h3>
                    {item.type && (
                      <p className="text-xs uppercase tracking-widest text-secondary/80 mb-2">{item.type}</p>
                    )}
                    <p className="text-sm text-accent/60 line-clamp-2">{item.description}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-secondary">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedDesigns fabricId="6a425ab4f60f8606b3edf055" fabricName="Tencil" />

      
      {/* Technical cards */}
      <section className="py-24 bg-bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Fabric Quality</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  60s x 60s Combed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  120 - 150 GSM
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  GOTS Certified
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Palette size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Printing Technique</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  Digital Reactive
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  High-Density Pigment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  300+ DPI Precision
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Package size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Minimum Orders</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  50 Meters MOQ
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  Custom Width Options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  Multi-Design Support
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-accent/5">
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <Truck size={24} />
              </div>
              <h4 className="text-lg font-serif text-accent mb-4">Delivery & Bulk</h4>
              <ul className="space-y-3 text-sm text-accent/60">
                
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  4-7 Days Delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  Global Doorstep Cargo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-500 shrink-0" />
                  Bulk Discounts Available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO content sections */}
      <section className="py-24 container mx-auto flex flex-col gap-10 px-6">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Premium Cotton Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Discover premium cotton fabrics crafted for modern fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we combine sustainable textile manufacturing with custom fabric printing to deliver export-quality cotton fabrics for every fashion need.
          </p>
          
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            About <span className="text-secondary italic">Cotton Fabrics.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Cotton fabric has remained one of the most loved textiles in the fashion industry for generations. Known for its softness, breathability, and versatility, cotton is widely used across apparel, lifestyle, and home textile industries.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At Vastraa Global, we offer premium cotton fabrics suitable for custom printing, fashion manufacturing, and export production.
          </p>
          
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            What are <span className="text-secondary italic">Cotton Fabrics?</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Cotton fabrics are textiles made from natural cotton fibers harvested from the cotton plant. These fibers are spun into yarn and woven or knitted into different types of fabrics suitable for apparel and textile applications.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            They are widely used by fashion brands because they balance comfort, aesthetics, and functionality.
          </p>
          
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li className="text-gray-500 text-sm md:text-base">Breathability</li><li className="text-gray-500 text-sm md:text-base">Soft texture</li><li className="text-gray-500 text-sm md:text-base">Moisture absorption</li><li className="text-gray-500 text-sm md:text-base">Durability</li><li className="text-gray-500 text-sm md:text-base">Print compatibility</li><li className="text-gray-500 text-sm md:text-base">Skin-friendly comfort</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Why Fashion Brands <span className="text-secondary italic">Prefer Cotton Fabrics?</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Cotton fabrics are one of the most preferred materials in modern fashion because they adapt effortlessly to different styles, seasons, and apparel categories.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            From luxury labels to emerging streetwear brands, cotton fabrics remain essential in apparel manufacturing.
          </p>
          
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li className="text-gray-500 text-sm md:text-base">Comfortable everyday wear</li><li className="text-gray-500 text-sm md:text-base">Excellent print clarity</li><li className="text-gray-500 text-sm md:text-base">Sustainable fashion collections</li><li className="text-gray-500 text-sm md:text-base">Lightweight and breathable garments</li><li className="text-gray-500 text-sm md:text-base">Premium texture and finish</li><li className="text-gray-500 text-sm md:text-base">Easy dyeing and customization</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            The Evolution of Cotton Fabrics <span className="text-secondary italic">in Modern Fashion</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Cotton fabrics have evolved significantly from traditional weaving techniques to advanced textile manufacturing and digital printing processes.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Modern cotton fabrics now combine traditional craftsmanship with innovative textile technology to meet the changing demands of global fashion brands.
          </p>
          
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li className="text-gray-500 text-sm md:text-base">Sustainable fashion production</li><li className="text-gray-500 text-sm md:text-base">Digital textile printing</li><li className="text-gray-500 text-sm md:text-base">Performance apparel</li><li className="text-gray-500 text-sm md:text-base">Eco-conscious collections</li><li className="text-gray-500 text-sm md:text-base">Contemporary fashion aesthetics</li>
          </ul>
        </div>
      </section>
      
      {/* Type cards (SEO) — shown when no products posted yet */}
      {items.length === 0 && (
        <section className="container mx-auto px-6 pb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
            Types of <span className="text-secondary italic">Tencil</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Organic Cotton Fabric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Produced without harmful chemicals, ideal for sustainable and eco-conscious fashion collections.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Cotton Poplin Fabric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Smooth surface and lightweight structure, commonly used for shirts, dresses, and premium apparel.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Cotton Slub Fabric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Natural texture and visual depth, perfect for casual wear and contemporary fashion styles.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Cotton Cambric Fabric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Lightweight and soft, ideal for summer garments, women's wear, and breathable apparel.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Cotton Satin Fabric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Combines cotton comfort with a smooth luxurious finish suitable for premium garments.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-black mb-3">Printed Cotton Fabrics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Widely used for designer collections, resort wear, ethnic fashion, and modern apparel manufacturing.</p>
            </div>
          </div>
        </section>
      )}
      
      {/* Uses + features */}
      <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[32px] p-8 border border-[#D4AF37]/20 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Best Uses of Tencil
            </h2>
            <div className="flex flex-wrap gap-3">
              
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Dresses
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Shirts
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Co-ord Sets
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Kidswear
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Women's Fashion
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Resort Wear
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Lounge Wear
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Ethnic Apparel
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Home Textiles
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Designer Collections
              </span>
            </div>
          </div>
          
          
        </div>
      </section>
      
      {/* Why choose */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
          Why Choose <span className="text-secondary italic">Vastraa Global?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">01</div>
            <h3 className="text-xl font-semibold text-black mb-3">Sustainable Manufacturing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Eco-conscious textile production and responsible fabric sourcing.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">02</div>
            <h3 className="text-xl font-semibold text-black mb-3">Premium Fabric Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Superior texture, durability, and finishing standards.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">03</div>
            <h3 className="text-xl font-semibold text-black mb-3">Custom Printing Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Digital, reactive, and sublimation printing for fashion brands.</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">04</div>
            <h3 className="text-xl font-semibold text-black mb-3">Export-Ready Manufacturing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Global-quality standards for international fashion markets.</p>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <FabricFaqs faqs={[
        { question: `What are cotton fabrics used for?`, answer: `Cotton fabrics are widely used for apparel, dresses, shirts, kidswear, resort wear, home textiles, and premium fashion collections.` },
        { question: `Are cotton fabrics suitable for custom printing?`, answer: `Yes. Cotton fabrics provide excellent print clarity and are ideal for digital, reactive, and custom textile printing.` },
        { question: `Can Vastraa Global handle bulk cotton fabric orders?`, answer: `Yes. We offer bulk cotton fabric manufacturing, custom printing, and export-quality production for fashion brands worldwide.` }
      ]} title="FAQs About Tencil" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
