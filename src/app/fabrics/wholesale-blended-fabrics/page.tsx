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
import Whychoose from "./Whychoose"
export const metadata: Metadata = {
  title: "Wholesale Blended Fabrics | Custom Fabric Printing | Vastra Global",
  description: "Source premium wholesale blended fabrics with custom digital fabric printing. Explore cotton, linen, silk, viscose, and sustainable blends for fashion and home textiles.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/wholesale-blended-fabrics",
  },
};
const blendTypes = [
  {
    title: "Cotton Blend Fabrics  ",
    description:
      "Our cotton blend fabrics combine cotton with fibres like linen, viscose, polyester, modal, and rayon to deliver comfort, durability, and easy care. They are ideal for shirts, dresses, kurtas, co-ord sets, and everyday apparel.  ",
    image:"/images/fabrics/blend/blend (2).jpg",
  },
  {
    title: "Linen Blend Fabrics ",
    description:
      "Linen blend fabrics combine the natural texture of linen with softer fibres to improve drape, comfort, and wrinkle resistance. They are widely used for summer clothing, resort wear, curtains, cushion covers, and home textiles. ",
    image: "/images/fabrics/blend/blend (1).jpg",
  },
  {
    title: "Silk Blend Fabrics  ",
    description:
      "Silk blend fabrics offer the elegance of silk with added durability and versatility, making them suitable for ethnic wear, occasion wear, scarves, and premium fashion collections.  ",
    image: "/images/fabrics/blend/blend (6).jpg",
  },
  {
    title: "Sustainable Blended Fabrics ",
    description:
      "Our sustainable blended fabrics combine eco-friendly fibres to create soft, breathable, and durable textiles for modern fashion. They are ideal for sustainable apparel, babywear, loungewear, and lifestyle products.  ",
    image: "/images/fabrics/blend/blend (5).jpg",
  },
 
];
export default async function Page() {
  const slug = "blends";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabrics/banner/blend-banner.jpg" alt="Blends" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Wholesale<span className="text-secondary"> Blends Fabrics</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium blended fabrics for fashion brands, custom printing, and bulk export orders.
            </p>
            <ClientQuoteButton productName="Blends" />
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
                Blends <span className="text-secondary">Products</span>
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

      <RelatedDesigns fabricId="6a4225116e6cbe5e9b4cfc02" fabricName="Blends" />

      
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
            Premium Blended Fabrics for <span className="text-secondary italic">Fashion Brands.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
           Blended fabrics combine the best qualities of different fibres to create textiles that are comfortable, durable, and versatile. At Vastra Global, we supply a wide range of premium blended fabrics and provide custom digital fabric printing to help fashion brands and businesses create distinctive collections. Whether you're developing a new range or placing a bulk order, we deliver quality fabrics tailored to your requirements. 
          </p>
          
        </div>
        {/* <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            About <span className="text-secondary italic">Blended Fabrics.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Blended fabrics are trusted across the global fashion industry for quality, versatility, and excellent print compatibility.
          </p>
          
        </div> */}
      </section>
      <Whychoose/>

      <section className="py-20">

        <div className="container-site">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
              Our Collection
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
             Explore Our 
              <span className="italic text-secondary">
                Blended Fabric Collection
              </span>
            </h2>
  <p className="mt-6 text-gray-600  text-lg">
                    At Vastra Global, we offer a wide range of wholesale blended fabrics for fashion brands, designers, garment manufacturers, and textile businesses. Combining premium fibres with custom digital fabric printing, our fabric blends are designed for quality, durability, and versatile textile applications. 
                  </p>
            <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>

          </div>

          <div className="space-y-16">

            {blendTypes.map((item, index) => (

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
      {/* <section className="w-full py-16 md:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[32px] p-8 border border-[#D4AF37]/20 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Best Uses of Blends
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
      </section> */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container-site">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
          Digital Printing Services
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
          Custom Digital Printing on{" "}
          <span className="text-secondary italic">
            Blended Fabrics
          </span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          At <span className="font-semibold text-black">Vastra Global</span>,
          we specialise in custom digital fabric printing on a wide range of
          blended fabrics. Using advanced printing technology, we produce
          vibrant colours, sharp details, and long-lasting prints that bring
          your designs to life.
        </p>

        <p className="mt-6 text-lg leading-9 text-gray-600">
          Whether you're creating fashion collections, home décor textiles,
          accessories, or promotional fabrics, our printing solutions are
          tailored to your creative and production requirements. From design
          sampling to bulk orders, we ensure consistent print quality and
          reliable turnaround times.
        </p>

        {/* Highlight Card */}
        <div className="mt-8 rounded-3xl border border-secondary/20 bg-secondary/5 p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Premium Printing Solutions
              </h3>

              <p className="mt-2 text-gray-600 leading-8">
                From concept to production, we deliver premium-quality digital
                printing with exceptional colour accuracy, precision, and fast
                turnaround for every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Services */}
      <div className="bg-white border border-gray-200 rounded-[32px] shadow-lg overflow-hidden">
        <div className="bg-secondary px-8 py-6">
          <h3 className="text-3xl font-semibold text-white">
            Our Digital Printing Services
          </h3>

          <p className="mt-2 text-white/90">
            Complete digital textile printing solutions tailored to your
            business.
          </p>
        </div>

        <div className="p-8 space-y-5">
          {[
            "Custom pattern and artwork printing",
            "High-resolution digital printing",
            "Colour matching and sampling",
            "Small and bulk order support",
            "Fast production and worldwide shipping",
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 p-5 hover:border-secondary/30 hover:bg-gray-50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-secondary font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-black">
                  {service}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Why choose */}
      {/* <section className="container mx-auto px-6 py-16">
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
       */}
      {/* FAQs */}
      <FabricFaqs faqs={[
        { question: `What are blended fabrics? `, answer: `Blended fabrics are textiles made by combining two or more fibres to enhance their overall performance. These fabrics offer a balance of comfort, durability, breathability, and easy maintenance, making them suitable for a wide range of textile applications. ` },
        { question: `What are the benefits of blended fabrics?`, answer: `Blended fabrics are known for their improved durability, wrinkle resistance, softness, and shape retention. They are also easier to maintain and provide better performance than many single-fibre fabrics. ` },
        { question: `What types of blended fabrics does Vastra Global offer?`, answer: `Vastra Global offers a wide range of wholesale blended fabrics, including cotton blends, linen blends, silk blends, viscose blends, modal blends, rayon blends, and other sustainable fabric combinations for various textile applications. ` },
          { question: `Can I get custom digital printing on blended fabrics? `, answer: `Yes. Vastra Global provides custom digital fabric printing on a variety of blended fabrics, allowing you to create unique patterns, designs, and collections with vibrant, high-quality prints.  ` },
           { question: `What industries use blended fabrics?`, answer: `Blended fabrics are widely used in fashion apparel, home textiles, accessories, hospitality, uniforms, and other commercial textile applications due to their versatility and durability.   ` },
              { question: `Do you supply blended fabrics in bulk? `, answer: `Yes. We supply wholesale blended fabrics for fashion brands, garment manufacturers, designers, exporters, and textile businesses. We also support both sample orders and bulk production.    ` },
                 { question: `Can I order fabric samples before placing a bulk order?`, answer: `Yes. We offer fabric sampling so you can evaluate the material, print quality, and colour before proceeding with bulk production.    ` },
                    { question: `Why choose Vastra Global for blended fabrics?`, answer: `Vastra Global combines premium blended fabrics with advanced custom digital fabric printing to deliver high-quality textile solutions. We offer flexible order quantities, consistent print quality, and reliable worldwide shipping to support your business.  ` },

      ]} title="FAQs About Blends" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
