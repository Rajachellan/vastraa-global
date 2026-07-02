import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Layers, Package, Palette, Truck, CheckCircle2,
  Globe2,
  Factory,
  Shirt, Search,
  Sparkles, Flower2, Trees, Building2, Users,
  Leaf,
} from "lucide-react";
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
import AnimatedSection from "./AnimateSection"
export const metadata: Metadata = {
  title: "Wholesale Linen Fabrics for Brands | Vastraa Global",
  description: "Shop wholesale linen fabrics for fashion brands and apparel manufacturers. Premium linen, custom printing, bulk supply, and export-quality textiles.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/wholesale-linen-fabrics",
  },
};
const searches = [
  "Premium Linen Fabrics",
  "Sustainable Linen Fabrics",
  "Printed Linen Fabrics",
  "Linen Fabrics for Dresses ",
  "Linen Cotton Blend Fabrics ",
  "Resort Wear Fabrics ",
  "Luxury Linen Textiles ",
  "Custom Printed Linen Fabrics ",
  "Linen Fabric Manufacturer ",
  "Bulk Linen Fabric Suppliers",
];
const trends = [
  { icon: Leaf, title: "Earth-tone linen collections " },
  { icon: Flower2, title: "Minimal natural aesthetics " },
  { icon: Palette, title: "Soft washed linen textures " },
  { icon: Shirt, title: "Botanical and abstract prints " },
  { icon: Sparkles, title: "Sustainable luxury apparel " },
  { icon: Trees, title: "Oversized relaxed silhouettes " },
];
const features = [
  {
    icon: Leaf,
    title: "Sustainable textile manufacturing ",
  },
  {
    icon: Globe2,
    title: "Export-quality linen fabrics ",
  },
  {
    icon: Palette,
    title: "Custom fabric printing",
  },
  {
    icon: Sparkles,
    title: "Fast sampling support ",
  },
  {
    icon: Factory,
    title: "Bulk production capabilities ",
  },
  {
    icon: Shirt,
    title: "Premium fabric finishing ",
  },
  {
    icon: CheckCircle2,
    title: "Trend-focused textile collections ",
  },
  {
    icon: Truck,
    title: "Reliable global manufacturing standards ",
  },
];
const linenTypes = [
  {
    title: "Pure Linen Fabric ",
    description:
      "Pure linen fabrics offer maximum breathability, natural texture, and timeless elegance suitable for luxury apparel and premium garments. ",
    image: "/images/fabrics/linen/pure-linen.jpg",
  },
  {
    title: "Linen Cotton Blend Fabric ",
    description:
      "Linen cotton blends combine the softness of cotton with the texture and sophistication of linen for versatile fashion applications. ",
    image: "/images/fabrics/linen/linen-cotton.jpg",
  },
  {
    title: "Printed Linen Fabric ",
    description:
      "Custom printed linen fabrics are ideal for contemporary fashion collections, designer apparel, and premium lifestyle textiles. ",
    image: "/images/fabrics/linen/printed-linn.jpg",
  },
  {
    title: "Linen Slub Fabric",
    description:
      "Linen slub fabrics feature textured surfaces and organic visual depth, perfect for relaxed and artisanal fashion aesthetics. ",
    image: "/images/fabrics/linen/linen-slub.jpg",
  },
  {
    title: "Washed Linen Fabric ",
    description:
      "Washed linen fabrics provide a softer finish and relaxed appearance ideal for modern casualwear and resort fashion. ",
    image: "/images/fabrics/linen/linen (1).jpg",
  },
  {
    title: "Lightweight Linen Fabric ",
    description:
      "Lightweight linen fabrics are commonly used for breathable summer garments, dresses, shirts, and premium apparel collections. ",
    image: "/images/fabrics/linen/light-linen.jpg",
  },
];
const customers = [
  {
    icon: Building2,
    title: "Fashion Brands",
  },
  {
    icon: Factory,
    title: "Apparel Manufacturers",
  },
  {
    icon: Users,
    title: "Boutique Designers",
  },
  {
    icon: Package,
    title: "Private Labels",
  },
  {
    icon: Truck,
    title: "Export Businesses",
  },
  {
    icon: Building2,
    title: "Startup Clothing Brands",
  },
];
export default async function Page() {
  const slug = "linen";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabrics/banner/linen-fabric.jpg" alt="Linen" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
             Wholesale <span className="text-secondary">Linen Fabrics</span>
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
      <AnimatedSection/>
      <section className="py-10 rounded-[40px]">
  <div className="container-site">
    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">
      <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold">
        Innovation Journey
      </span>

      <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-black leading-tight">
        The Evolution of Linen Fabrics
        <span className="text-secondary italic">
          {" "}in Modern Fashion
        </span>
      </h2>

      <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>

      <p className="mt-8 text-lg text-gray-600 leading-9">
        Linen fabrics have evolved from traditional handcrafted textiles into a
        modern luxury material widely used in global fashion.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mt-20">
      {/* Center Line */}
      <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-secondary/20 md:-translate-x-1/2"></div>

      {[
        {
          year: "01",
          title: "Sustainable Fashion",
          desc: "Linen has become a preferred fabric for eco-conscious fashion thanks to its natural fibers, durability, and environmentally friendly production.",
        },
        {
          year: "02",
          title: "Luxury Resort Wear",
          desc: "Its lightweight feel and breathable comfort have made linen the perfect choice for premium resort and vacation collections.",
        },
        {
          year: "03",
          title: "Minimalist Apparel Collections",
          desc: "Modern fashion embraces linen for clean silhouettes, timeless designs, and effortless elegance in everyday wear.",
        },
        {
          year: "04",
          title: "Premium Casual & Contemporary Ethnic Fashion",
          desc: "Fashion brands use linen to create sophisticated casual wear and contemporary ethnic garments with a refined natural appeal.",
        },
        {
          year: "05",
          title: "Digital Textile Printing & Modern Production",
          desc: "Advanced textile finishing and digital printing technologies now enhance linen fabrics while preserving traditional craftsmanship to meet evolving fashion trends.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-start md:items-center mb-1 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Card */}
          <div className="w-full md:w-5/12 bg-white rounded-3xl shadow-md border border-gray-200 p-5 hover:shadow-xl transition">
            <span className="text-secondary text-sm uppercase tracking-widest">
              Step {item.year}
            </span>

            <h3 className="text-2xl font-semibold mt-3">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 leading-8">
              {item.desc}
            </p>
          </div>

          {/* Circle */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-[6px] border-white shadow-lg"></div>
        </div>
      ))}
    </div>

    <div className="max-w-5xl mx-auto mt-12 text-center">
      <p className="text-lg text-gray-600 leading-9">
        Modern linen production now blends traditional craftsmanship with
        advanced textile finishing and printing technologies to meet the needs
        of evolving fashion trends.
      </p>
    </div>
  </div>
</section>

   <section className="py-20">

        <div className="container-site">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
              Our Collection
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
              Types of
              <span className="italic text-secondary">
                {" "}Linen Fabrics
              </span>
            </h2>

            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>

          </div>

          <div className="space-y-16">

            {linenTypes.map((item, index) => (

              <div
                key={index}
                className={`grid xl:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "xl:[&>*:first-child]:order-2" : ""
                  }`}
              >

                {/* Image */}

                <div className="overflow-hidden h-[300px] rounded-[32px] group">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}

                <div>

                  <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold">
                    Premium Fabric
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-gray-600 leading-9 text-lg">
                    {item.description}
                  </p>

                  <Link
                    href="/contact-us"
                    className="inline-flex mt-8 items-center gap-2 font-semibold text-secondary hover:gap-4 transition-all"
                  >
                    Enquire Now →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* Uses + features */}
      <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[32px] p-8 border border-[#D4AF37]/20 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Best Uses of Linen Fabrics
            </h2>
              <p className="my-3 text-gray-600 text-lg">
Linen fabrics are suitable for a wide range of premium fashion and lifestyle applications. Popular uses include: 
                  </p>
            <div className="flex flex-wrap gap-3">
              
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
               Resort wear 
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Summer dresses 
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
              Shirts and co-ords 
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
               Premium casualwear 
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Luxury ethnic wear 
              </span>
               <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Lounge wear 
              </span> <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
               Women’s fashion  
              </span> <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
                Designer collections 
              </span> 
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">Home textiles 
              </span>
              <span className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm font-medium">
              Contemporary apparel 
              </span>
            </div>
          </div>
          
          
          <div className="bg-[#D4AF37] rounded-[32px] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unique Characteristics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
               Breathable and airy texture 
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Lightweight feel 
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Natural cooling effect 
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Luxurious organic appearance 
              </div>
                <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Strong and durable fibers 
              </div>
                <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
                Moisture-wicking properties 
              </div>
                <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
               Eco-friendly production 
              </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-sm font-medium">
              Timeless premium aesthetic 
              </div>
            </div>
          </div>
        </div>
      </section>
         <section className="relative overflow-hidden rounded-[40px] bg-[#1F315D] py-20 text-white">

        {/* Decorative Background */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="container-site relative z-10">

          <div className="grid xl:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
                Why Vastraa Global
              </span>

              <h2 className="mt-4 text-4xl xl:text-5xl font-semibold leading-tight">
                Why Buy Linen Fabrics 
                <span className="italic text-secondary">
                  {" "}From Vastraa Global?
                </span>
              </h2>

              <p className="mt-8 text-slate-300 text-lg leading-9">
           At Vastraa Global, we help fashion brands create premium apparel collections through high-quality linen fabric manufacturing and custom textile printing solutions. 
              </p>

              <p className="mt-6 text-slate-400 leading-8">
               We collaborate with fashion labels, designers, and apparel brands to deliver linen fabrics tailored to modern creative and commercial needs. 
              </p>

            </div>

            {/* RIGHT */}

            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15">
                      <Icon
                        size={24}
                        className="text-secondary group-hover:scale-110 transition"
                      />
                    </div>

                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

            <div className="text-center border border-white/10 rounded-3xl p-8 bg-white/5">
              <h3 className="text-4xl font-bold text-secondary">
                15+
              </h3>
              <p className="mt-3 text-slate-300">
                Years Experience
              </p>
            </div>

            <div className="text-center border border-white/10 rounded-3xl p-8 bg-white/5">
              <h3 className="text-4xl font-bold text-secondary">
                50+
              </h3>
              <p className="mt-3 text-slate-300">
                Export Countries
              </p>
            </div>

            <div className="text-center border border-white/10 rounded-3xl p-8 bg-white/5">
              <h3 className="text-4xl font-bold text-secondary">
                1000+
              </h3>
              <p className="mt-3 text-slate-300">
                Fabric Designs
              </p>
            </div>

            <div className="text-center border border-white/10 rounded-3xl p-8 bg-white/5">
              <h3 className="text-4xl font-bold text-secondary">
                100%
              </h3>
              <p className="mt-3 text-slate-300">
                Quality Checked
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="py-24">

        <div className="container-site">

          <div className="grid xl:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <span className="px-4 py-2 rounded-full bg-[#EEF7F2] text-[#2E7D32] text-sm font-semibold">
                Fashion Forecast 2026
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
                Linen Fabric
                <span className="text-secondary italic">
                  {" "}Trends 2026
                </span>
              </h2>

              <p className="mt-8 text-gray-600 leading-9 text-lg">
             Linen fabrics continue to dominate premium fashion trends as consumers increasingly seek breathable, sustainable, and timeless textiles. Trending linen fabric styles include: 
              </p>

              <div className="flex flex-wrap gap-3 mt-10">

                {trends.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#EEF7F2] border border-[#D7EBDD]"
                    >
                      <Icon
                        size={18}
                        className="text-[#2E7D32]"
                      />

                      <span className="font-medium">
                        {item.title}
                      </span>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <Image
                src="/images/fabrics/linen/linen-fabrics (1).jpg"
                alt=""
                width={700}
                height={700}
                className="rounded-[40px] h-[620px] object-cover"
              />

              {/* <div className="absolute bottom-8 left-8 bg-white rounded-3xl p-6 shadow-xl max-w-xs">

                <div className="text-5xl font-bold text-[#2E7D32]">
                  2026
                </div>

                <p className="mt-3 leading-8 text-gray-600">
                  Consumers increasingly prefer breathable,
                  sustainable and naturally sourced fabrics.
                </p>

              </div> */}

            </div>

          </div>

        </div>

      </section>

<section className="py-24">

        <div className="container-site">

          <div className="overflow-hidden rounded-[45px] border border-gray-200">

            <div className="grid xl:grid-cols-5">

              {/* Left */}

              <div className="xl:col-span-2 bg-[#243661] text-white p-14 relative">

                <span className="inline-block px-4 py-2 rounded-full bg-[#EEF7F2] text-[#2E7D32] font-semibold text-sm">
                  Bulk Manufacturing
                </span>

                <h2 className="mt-8 text-5xl font-semibold leading-tight">
                  We Take
                  <span className="italic text-secondary">
                    {" "}Bulk Orders
                  </span>
                  {" "}Too!
                </h2>

                <p className="mt-8 leading-9 text-slate-300">
                  From sampling to large-scale production,
                  Vastraa Global delivers scalable textile
                  solutions tailored to your business.
                </p>

                <button className="mt-10 bg-secondary px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:gap-5 transition-all">
                  Get Bulk Quote
                  <ArrowRight size={18} />
                </button>

                <div className="grid grid-cols-3 gap-6 mt-16">

                  <div>
                    <div className="text-4xl font-bold text-secondary">
                      500+
                    </div>
                    <p className="text-slate-400 mt-2 text-sm">
                      Bulk Orders
                    </p>
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-secondary">
                      50+
                    </div>
                    <p className="text-slate-400 mt-2 text-sm">
                      Countries
                    </p>
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-secondary">
                      100%
                    </div>
                    <p className="text-slate-400 mt-2 text-sm">
                      Quality
                    </p>
                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="xl:col-span-3 bg-white p-14">

                <Image
                  src="/images/bulk-order.jpg"
                  alt=""
                  width={900}
                  height={350}
                  className="rounded-3xl h-64 object-cover"
                />

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

                  {customers.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 border rounded-2xl p-5 hover:border-[#2E7D32] hover:bg-[#EEF7F2] transition"
                      >

                        <div className="w-12 h-12 rounded-xl bg-[#EEF7F2] flex items-center justify-center">

                          <Icon
                            size={22}
                            className="text-[#2E7D32]"
                          />

                        </div>

                        <span className="font-medium">
                          {item.title}
                        </span>

                      </div>
                    );
                  })}

                </div>

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
            <p className="text-gray-600 text-sm leading-relaxed">Eco-conscious textile production designed for modern sustainable fashion brands. </p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">02</div>
            <h3 className="text-xl font-semibold text-black mb-3">Premium Fabric Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Carefully crafted linen fabrics with refined texture, durability, and luxurious finish. </p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">03</div>
            <h3 className="text-xl font-semibold text-black mb-3">Custom Textile Printing </h3>
            <p className="text-gray-600 text-sm leading-relaxed">Advanced printing solutions for premium linen fashion collections. </p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">04</div>
            <h3 className="text-xl font-semibold text-black mb-3">Fast Sampling & Production </h3>
            <p className="text-gray-600 text-sm leading-relaxed">Efficient development and bulk manufacturing workflows. </p>
          </div>
           <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">05</div>
            <h3 className="text-xl font-semibold text-black mb-3">Export-Ready Textile Solutions  </h3>
            <p className="text-gray-600 text-sm leading-relaxed">Global-quality standards suitable for international apparel markets. </p>
          </div>
           <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">06</div>
            <h3 className="text-xl font-semibold text-black mb-3">Fashion-Focused Expertise  </h3>
            <p className="text-gray-600 text-sm leading-relaxed">Textile solutions tailored for contemporary fashion brands and designers. </p>
          </div>
        </div>
      </section>
         <section className="py-5">

        <div className="container-site">

          <div className="rounded-[40px] border border-gray-200 p-5 lg:p-10">

            {/* Heading */}

            <div className="text-center max-w-2xl mx-auto">

              <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5EC] px-4 py-2 text-sm font-semibold text-[#2E7D32]">
                <Search size={16} />
                Popular Searches
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-black">
                Find the Right
                <span className="text-secondary italic">
                  {" "}Linen Fabric
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Browse the most searched cotton fabric categories
                by fashion brands, garment manufacturers and designers.
              </p>

            </div>

            {/* Search Tags */}

            <div className="flex flex-wrap justify-center gap-4 mt-5">

              {searches.map((item, index) => (

                <Link
                  key={index}
                  href="#"
                  className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2E7D32] hover:bg-[#EEF7F2]"
                >

                  <Search
                    size={16}
                    className="text-[#2E7D32]"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </Link>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">

              <Link
                href="/contact-us"
                className="rounded-full bg-[#243661] px-8 py-4 font-semibold text-white transition hover:bg-[#1B294D]"
              >
                Contact Our Team
              </Link>

              <Link
                href="/fabrics"
                className="group flex items-center gap-2 rounded-full border border-[#243661] px-8 py-4 font-semibold text-[#243661] transition hover:bg-[#243661] hover:text-white"
              >
                View All Fabrics

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>
      {/* FAQs */}
      <FabricFaqs faqs={[
        { question: `What are linen fabrics used for? `, answer: `Linen fabrics are commonly used for resort wear, dresses, shirts, luxury apparel, lounge wear, and home textiles because of their breathable and elegant nature.` },
        { question: `Why are linen fabrics popular in fashion?`, answer: `Linen fabrics are valued for their lightweight comfort, premium texture, natural cooling properties, and timeless fashion appeal. ` },
          { question: `Are linen fabrics sustainable?`, answer: `Yes. Linen fabrics are considered sustainable because flax cultivation generally requires fewer resources and supports eco-conscious textile production. ` },
        { question: `Are linen fabrics good for summer wear? `, answer: `Absolutely. Linen fabrics are highly breathable and moisture-wicking, making them ideal for warm-weather and summer fashion collections. ` },
          { question: `Do linen fabrics wrinkle easily?`, answer: `Yes. Linen naturally develops soft wrinkles, which are often appreciated as part of its relaxed and luxurious aesthetic. ` },
        { question: `Can Vastraa Global handle bulk linen fabric orders? `, answer: `Yes. Vastraa Global offers bulk linen fabric manufacturing, custom printing, sampling, and export-quality textile production for fashion brands worldwide. ` },
      ]} title="FAQs About Linen" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
