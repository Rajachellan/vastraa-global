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
  title: "Wholesale Linen Fabrics for Brands | Vastraa Global",
  description: "Shop wholesale linen fabrics for fashion brands and apparel manufacturers. Premium linen, custom printing, bulk supply, and export-quality textiles.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/linen",
  },
};

export default async function Page() {
  const slug = "linen";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabric-linen.png" alt="Linen" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Linen <span className="text-secondary">Linen</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium linen fabrics for fashion brands, custom printing, and bulk export orders.
            </p>
            <ClientQuoteButton productName="Linen" />
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
                Linen <span className="text-secondary">Products</span>
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

      <RelatedDesigns fabricId="6a4225116e6cbe5e9b4cfc07" fabricName="Linen" />

      
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
            Premium Linen Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
         Discover premium linen fabrics crafted for modern fashion brands, apparel manufacturers, and designers worldwide. At Vastraa Global, we offer sustainable linen fabric solutions designed for breathable comfort, elegant texture, and premium fashion applications. From custom textile printing to bulk manufacturing, our linen fabrics are tailored for contemporary apparel collections and export-quality production. 
          </p>
          
        </div>
       <section className="py-16 lg:py-14">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">
    
                {/* LEFT CONTENT */}
                <div className="relative">
    
                  {/* Accent */}
                  <div className="absolute -left-5 top-2 h-32 w-1 rounded-full bg-secondary hidden lg:block" />
    
                  <span className="inline-block text-secondary uppercase tracking-[0.25em] text-xs font-semibold mb-3">
                    Premium Textile
                  </span>
    
                  <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-black">
                    About{" "}
                    <span className="text-secondary italic">
                      Linen Fabrics.
                    </span>
                  </h2>
    
                  <div className="w-20 h-1 bg-secondary rounded-full mt-5 mb-8"></div>
    
                  <p className="text-gray-600 text-base md:text-lg leading-9">
                   Linen fabric is one of the oldest and most luxurious natural textiles used in fashion and lifestyle industries. Known for its breathable texture, lightweight comfort, and timeless elegance, linen remains a preferred choice for premium apparel and sustainable fashion collections. 

Its natural aesthetic and sophisticated finish make linen fabrics ideal for modern designers seeking effortless style with functional comfort. 
                  </p>
    
                  <p className="text-gray-600 text-base md:text-lg leading-9 mt-6">
                    At Vastraa Global, we provide high-quality linen fabrics suitable for custom printing, fashion manufacturing, and global apparel production. 
                  </p>
    
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mt-10">
    
                    <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                      <h4 className="text-2xl font-bold text-secondary">100%</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Premium Linen Quality
                      </p>
                    </div>
    
                    <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                      <h4 className="text-2xl font-bold text-secondary">Export</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Ready Manufacturing
                      </p>
                    </div>
    
                  </div>
    
                </div>
    
                {/* RIGHT IMAGE */}
                <div className="relative">
    
                  <div className="overflow-hidden rounded-[30px]">
                    <Image
                      src="/images/fabrics/linen/linen (3).jpg"
                      alt="Premium Cotton Fabric"
                      width={700}
                      height={850}
                      className="w-full h-[550px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
    
                  {/* Floating Card */}
                  {/* <div className="absolute bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs hidden md:block">
    
            <span className="text-secondary text-4xl font-bold">25+</span>
    
            <h4 className="font-semibold text-lg mt-2">
              Years of Textile Excellence
            </h4>
    
            <p className="text-gray-600 text-sm mt-2 leading-7">
              Trusted by fashion brands worldwide for premium cotton fabrics,
              custom printing and bulk manufacturing.
            </p>
    
          </div> */}
    
                </div>
    
              </div>
            </section>
      </section>
      <section className="">
          <div className="max-w-7xl mx-auto">

            {/* Center Heading */}
            <div className="max-w-7xl mx-auto">
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold">
                Understanding Linen
              </span>

              <h2 className="text-3xl md:text-5xl font-semibold text-black mt-3">
                What are
                <span className="text-secondary italic">
                  Linen Fabrics?
                </span>
              </h2>
              <p className="mt-5 text-gray-600 text-lg leading-9">
           Linen fabrics are natural textiles made from flax plant fibers. These fibers are carefully processed into durable, breathable, and lightweight fabrics widely used in premium fashion and home textiles. 
              </p>
            </div>

            {/* Feature Flow */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="relative bg-white border border-gray-200 rounded-3xl p-8">
                <span className="text-6xl font-bold text-secondary/15 absolute right-6 top-2">
                  01
                </span>

                <h3 className="text-xl font-semibold">
                  Natural Linen Fiber
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Made from flax plant fibers, known for strength
                </p>
              </div>

              <div className="relative bg-[#243661] rounded-3xl p-8 text-white">

                <span className="text-6xl font-bold text-white/10 absolute right-6 top-2">
                  02
                </span>

                <h3 className="text-xl font-semibold">
                  Woven or Knitted
                </h3>

                <p className="mt-4 text-gray-300 leading-8">
                  The yarn is converted into fabrics suitable for different garment
                  applications.
                </p>

              </div>

              <div className="relative bg-white border border-gray-200 rounded-3xl p-8">
                <span className="text-6xl font-bold text-secondary/15 absolute right-6 top-2">
                  03
                </span>

                <h3 className="text-xl font-semibold">
                  Ready for Fashion
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  Perfect for digital printing, apparel manufacturing and export
                  collections.
                </p>
              </div>

            </div>

            {/* Bottom Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mt-14">

              {[
               "Natural breathability ",
               "Luxurious texture ",
               "Moisture absorption ",
               "Lightweight comfort ",
               "Durable fiber strength ",
               "Sustainable production ",
               "Elegant drape ",
              ].map((item) => (
                <div
                  key={item}
                  className="px-6 py-3 rounded-full border border-secondary/20 bg-secondary/5 text-gray-700 hover:bg-secondary hover:text-white transition"
                >
                  {item}
                </div>
              ))}

            </div>
            <p className="mt-5 mb-10 text-gray-600 text-lg leading-9">
            Because of their premium appearance and comfort, linen fabrics are highly popular among luxury fashion brands and contemporary apparel designers. 
            </p>
          </div>
        </section>
      
      {/* Uses + features */}
      <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[32px] p-8 border border-[#D4AF37]/20 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Best Uses of Linen
            </h2>
            <div className="flex flex-wrap gap-3">
              
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Dresses
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Shirts
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Resort Wear
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Women's Fashion
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Designer Collections
              </span>
            </div>
          </div>
          
          
          <div className="bg-[#D4AF37] rounded-[32px] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unique Characteristics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Breathable
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Premium finish
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Print-ready
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Bulk order support
              </div>
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
        { question: `What are linen fabrics used for?`, answer: `Linen fabrics are used across apparel, lifestyle, and fashion manufacturing applications.` },
        { question: `Do you offer bulk orders?`, answer: `Yes. Vastraa Global supports sampling and bulk production for fashion brands worldwide.` }
      ]} title="FAQs About Linen" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
