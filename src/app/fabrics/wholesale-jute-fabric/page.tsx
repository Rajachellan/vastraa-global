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
import AnimatedSection from "./AnimatedSection"
export const metadata: Metadata = {
  title: " Wholesale Jute Fabrics Manufacturer | Vastraa Global",
  description: "Source premium wholesale jute fabrics from Vastraa Global. We offer custom fabric printing, bulk manufacturing, export-quality textiles, and sustainable jute solutions.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/wholesale-jute-fabric",
  },
};
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
const juteTypes = [
  {
    title: "Natural Jute Fabric  ",
    description:
      "Made from 100% natural jute fibres, ideal for shopping bags, packaging, crafts, and decorative products. ",
    image:"/images/fabrics/jute/jute (1).jpg",
  },
  {
    title: "Laminated Jute Fabric ",
    description:
      "Features a protective coating that improves moisture resistance and durability for retail and industrial applications.  ",
    image: "/images/fabrics/jute/jute (7).jpg",
  },
  {
    title: "Printed Jute Fabric ",
    description:
      "Suitable for branded bags, promotional products, packaging, and customised textile collections.  ",
    image: "/images/fabrics/jute/jute (3).jpg",
  },
  {
    title: "Dyed Jute Fabric ",
    description:
      "Available in various colours while retaining the strength and texture of natural jute. ",
    image: "/images/fabrics/jute/jute (4).jpg",
  },
  {
    title: "Fine Weave Jute Fabric  ",
    description:
      "Offers a smoother finish for premium packaging, home décor, and lifestyle products. ",
    image: "/images/fabrics/jute/jute (5).jpg",
  },
  {
    title: "Heavy-Duty Jute Fabric  ",
    description:
      "Designed for industrial packaging, agriculture, upholstery, and high-strength commercial applications.  ",
    image: "/images/fabrics/jute/jute (6).jpg",
  },
];
export default async function Page() {
  const slug = "jute";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabrics/banner/jute-banner.jpg" alt="Jute" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
             Wholesale <span className="text-secondary">jute</span> Fabric
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium textile solutions tailored for you. From fabric selection to final print, we handle the rest.
            </p>
            <ClientQuoteButton productName="Jute" />
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
                Jute <span className="text-secondary">Products</span>
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

      <RelatedDesigns fabricId="6a425ab4f60f8606b3edf052" fabricName="Jute" />

      
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
           Wholesale Jute Fabrics with  <span className="text-secondary italic">Custom Printing & Bulk Manufacturing</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
           Discover premium wholesale jute fabrics designed for fashion brands, packaging manufacturers, home decor businesses, retailers, and product designers. At Vastraa Global, we supply durable, eco-friendly jute fabrics that combine natural strength, rustic aesthetics, and exceptional versatility. Whether you need custom-printed jute fabric or bulk fabric manufacturing, our solutions are tailored to meet modern commercial and export requirements. 
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
                        Hute Fabrics.
                       </span>
                     </h2>
       
                     <div className="w-20 h-1 bg-secondary rounded-full mt-5 mb-8"></div>
       
                     <p className="text-gray-600 text-base md:text-lg leading-9">
      Jute fabric is one of the world's most sustainable natural textiles, valued for its durability, biodegradability, and distinctive woven texture. Produced from natural jute fibres, it has become a preferred material for businesses looking to create environmentally responsible products without compromising quality. 
                     </p>
       
                     <p className="text-gray-600 text-base md:text-lg leading-9 mt-6">
                     From reusable shopping bags and home decor to fashion accessories and packaging, jute fabrics offer an ideal combination of strength, sustainability and affordability. 

At Vastraa Global, we manufacture premium wholesale jute fabrics with custom printing and bulk production capabilities for brands across the globe. 
                     </p>
       
                     {/* Features */}
                     <div className="grid grid-cols-2 gap-4 mt-10">
       
                       <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
                         <h4 className="text-2xl font-bold text-secondary">100%</h4>
                         <p className="text-sm text-gray-600 mt-1">
                           Premium Jute Quality
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
                         src="/images/fabrics/jute/jute (7).jpg"
                         alt="Premium Jute Fabric"
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
        <section className="">
  <div className="max-w-7xl mx-auto">
    {/* Center Heading */}
    <div className="max-w-7xl mx-auto">
      <span className="text-secondary uppercase tracking-[0.3em] text-xs font-semibold">
        Understanding Jute
      </span>

      <h2 className="text-3xl md:text-5xl font-semibold text-black mt-3">
        What are
        <span className="text-secondary italic">
          {" "}Jute Fabrics?
        </span>
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-9">
        Wholesale jute fabrics are woven textiles produced from the natural
        fibres of the jute plant. Often referred to as the{" "}
        <span className="font-medium text-black">Golden Fibre</span>, jute is
        one of the strongest biodegradable natural materials used in the
        textile industry.
      </p>
    </div>

    {/* Feature Flow */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <div className="relative bg-white border border-gray-200 rounded-3xl p-8">
        <span className="text-6xl font-bold text-secondary/15 absolute right-6 top-2">
          01
        </span>

        <h3 className="text-xl font-semibold">
          Natural Jute Fibre
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Produced from natural jute plant fibres, known for their strength,
          sustainability, and eco-friendly properties.
        </p>
      </div>

      <div className="relative bg-[#243661] rounded-3xl p-8 text-white">
        <span className="text-6xl font-bold text-white/10 absolute right-6 top-2">
          02
        </span>

        <h3 className="text-xl font-semibold">
          Durable Woven Construction
        </h3>

        <p className="mt-4 text-gray-300 leading-8">
          Strong woven construction provides excellent durability, breathability,
          and long-lasting performance for various textile applications.
        </p>
      </div>

      <div className="relative bg-white border border-gray-200 rounded-3xl p-8">
        <span className="text-6xl font-bold text-secondary/15 absolute right-6 top-2">
          03
        </span>

        <h3 className="text-xl font-semibold">
          Ready for Custom Applications
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
          Suitable for custom printing, bags, home textiles, packaging, and
          commercial textile manufacturing.
        </p>
      </div>
    </div>

    {/* Bottom Benefits */}
    <div className="flex flex-wrap justify-center gap-4 mt-14">
      {[
        "Natural & biodegradable",
        "High tensile strength",
        "Excellent durability",
        "Breathable woven construction",
        "Rustic natural appearance",
        "Renewable raw material",
        "Suitable for custom printing",
        "Cost-effective for bulk manufacturing",
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
      These qualities make wholesale jute fabrics an excellent choice for
      businesses seeking sustainable textile solutions.
    </p>
  </div>
</section>
<AnimatedSection/>
        
       
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
                      {" "}Jute Fabrics
                    </span>
                  </h2>
      
                  <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>
      
                </div>
      
                <div className="space-y-16">
      
                  {juteTypes.map((item, index) => (
      
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
  
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="container-site">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      {/* Left Content */}
      <div>
        <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
          Manufacturing Solutions
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
          Custom Printing
          <span className="text-secondary italic">
            {" "}& Manufacturing
          </span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          At <span className="font-semibold text-black">Vastraa Global</span>,
          we provide complete textile manufacturing solutions for businesses
          looking to develop custom jute fabric products.
        </p>

        <p className="mt-6 text-lg leading-9 text-gray-600">
          Whether you are launching a new product or scaling an existing
          collection, our experienced team ensures consistent quality,
          professional support, and dependable production at every stage of the
          manufacturing process.
        </p>

        {/* Highlight Card */}
        <div className="mt-10 rounded-3xl border border-secondary/20 bg-secondary/5 p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center text-2xl">
              ✓
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                End-to-End Production Support
              </h3>

              <p className="mt-3 text-gray-600 leading-8">
                From concept development and product sampling to bulk production
                and worldwide delivery, we provide a complete manufacturing
                solution under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="rounded-[32px] overflow-hidden border border-gray-200 bg-white shadow-lg">
        <div className="bg-secondary px-8 py-7">
          <h3 className="text-3xl font-semibold text-white">
            Our Capabilities
          </h3>

          <p className="mt-2 text-white/90">
            Comprehensive textile manufacturing and printing services for global
            businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 p-8">
          {[
            "Custom Fabric Printing",
            "Pattern Development",
            "Bulk Fabric Production",
            "Premium Finishing",
            "Product Sampling",
            "Export-Ready Packaging",
            "Quality Inspection",
            "Global Shipping Support",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 hover:border-secondary hover:bg-secondary/5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary font-bold flex items-center justify-center flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h4 className="font-semibold text-gray-800 leading-7">
                {item}
              </h4>
            </div>
          ))}
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
            <p className="text-gray-600 text-sm leading-relaxed">Environmentally responsible production processes that support modern sustainable businesses</p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">02</div>
            <h3 className="text-xl font-semibold text-black mb-3">Premium Fabric Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">High-quality wholesale jute fabrics with superior durability and consistent weaving standards. </p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">03</div>
            <h3 className="text-xl font-semibold text-black mb-3">Custom Printing Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Advanced printing solutions for branded packaging, promotional products, and customised textile collections. </p>
          </div>
          <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">04</div>
            <h3 className="text-xl font-semibold text-black mb-3">Export-Ready Manufacturing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Quick sample development and efficient large-scale manufacturing to reduce production timelines. </p>
          </div>
              <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">05</div>
            <h3 className="text-xl font-semibold text-black mb-3">Export-Ready Textile Solutions </h3>
            <p className="text-gray-600 text-sm leading-relaxed">International quality standards suitable for global wholesale markets.  </p>
          </div>
              <div className="bg-white border border-[#D4AF37]/15 rounded-[30px] p-8 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-4xl font-bold text-[#D4AF37]/20 mb-4">06</div>
            <h3 className="text-xl font-semibold text-black mb-3">Industry-Focused Expertise </h3>
            <p className="text-gray-600 text-sm leading-relaxed">Trusted textile solutions for fashion, packaging, retail, home décor, and commercial industries.  </p>
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
      {/* FAQs */}
      <FabricFaqs faqs={[
        { question: `What are jute fabrics used for? `, answer: `Jute fabrics are widely used for shopping bags, packaging, home décor, upholstery, agricultural products, promotional items, and eco-friendly lifestyle products. ` },
        { question: `Why are jute fabrics popular? `, answer: `Jute fabrics are valued for their durability, natural appearance, affordability, and sustainable properties. ` },
        { question: `Are jute fabrics eco-friendly? `, answer: `Yes. Jute is a renewable, biodegradable natural fibre that is considered one of the most environmentally friendly textile materials. ` },
                { question: `Can jute fabrics be custom printed? `, answer: `Yes. Vastraa Global offers custom printing solutions for branding, promotional products, packaging, and retail applications.  ` },
                        { question: `Are jute fabrics suitable for heavy-duty applications? `, answer: `Absolutely. Heavy-duty jute fabrics are commonly used for industrial packaging, agriculture, upholstery, and reusable shopping bags.  ` },
                                { question: `Do you offer wholesale and bulk orders?  `, answer: `Yes. We supply wholesale jute fabrics in bulk quantities for manufacturers, retailers, exporters, and brands worldwide.  ` },
                                        { question: `Can I request fabric samples before bulk production? `, answer: `Yes. We provide sampling services to help businesses evaluate the fabric before placing bulk orders.  ` },
                                                { question: `Do you export jute fabrics internationally?  `, answer: `Yes. Vastraa Global supplies export-quality wholesale jute fabrics to businesses across international markets.  ` },
      ]} title="FAQs About Jute" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
