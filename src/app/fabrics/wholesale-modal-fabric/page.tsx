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
  title: "Wholesale Modal Fabric for Digital Fabric Printing | Vastraa Global ",
  description: "Explore wholesale modal fabric for digital fabric printing at Vastraa Global. Premium printable fabrics with sampling, custom printing, and bulk production for fashion brands worldwide.",
  alternates: {
    canonical: "https://vastraaglobal.com/fabrics/wholesale-modal-fabric",
  },
};
const modalTypes = [
  {
    title: "Geometric and Textured Modal Fabrics ",
    description:
      "Geometric and textured modal fabrics are ideal for contemporary fashion, offering excellent print clarity for abstract patterns, geometric designs, dresses, tops, scarves, and lifestyle apparel. ",
    image:"/images/fabrics/modal/modal (1).jpg",
  },
  {
    title: "Satin and Silk Modal Fabrics ",
    description:
      "Satin and silk modal fabrics combine a luxurious finish with a soft drape, making them suitable for premium garments, scarves, occasion wear, and designer collections that require vibrant digital prints. ",
    image: "/images/fabrics/modal/modal (2).jpg",
  },
  {
    title: "Blended Modal Fabrics ",
    description:
      "Blended modal fabrics combine modal with fibres such as cotton, viscose, or polyester to achieve different textures and performance characteristics. They are widely used for fashion apparel, home furnishings, and custom printed textiles.  ",
    image: "/images/fabrics/modal/modal (3).jpg",
  },
  {
    title: " Premium Lenzing™   Modal Fabrics",
    description:
      "Lenzing™   Modal is known for its silky softness, consistent quality, and excellent colour absorption. Its smooth surface makes it an ideal choice for premium digital textile printing and high-end fashion collections.  ",
    image: "/images/fabrics/modal/modal (4).jpg",
  },
  {
    title: " Innovative and Unique Modal Fabrics  ",
    description:
      "We also support digital printing on specialised modal fabrics available in different weights, finishes, and blends for fashion apparel, accessories, and home décor applications.  ",
    image: "/images/fabrics/modal/modal (1).jpg",
  },
];
export default async function Page() {
  const slug = "modal";
  const dynamicPage = await fetchFabricPage(slug);
  const items = dynamicPage?.items || [];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16">
        <Image src="/images/fabrics/banner/modal-banner.jpg" alt="Modal" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-accent/40" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Wholesale <span className="text-secondary">Modal Fabrics</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
              Premium textile solutions tailored for you. From fabric selection to final print, we handle the rest.
            </p>
            <ClientQuoteButton productName="Modal" />
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
                Modal <span className="text-secondary">Products</span>
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

      <RelatedDesigns fabricId="6a425ab4f60f8606b3edf053" fabricName="Modal" />

      
      {/* Technical cards */}
      <section className="py-10 bg-bg-ivory">
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
      <section className="py-10 container mx-auto flex flex-col gap-10 px-6">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Premium modal Fabrics for <span className="text-secondary italic">Digital Textile Printing.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
           Modal fabric is a premium regenerated fabric made from beechwood pulp, known for its exceptional softness, lightweight feel, breathability, and elegant drape. Its smooth surface and excellent colour absorption make it an ideal choice for digital fabric printing, delivering vibrant colours, sharp details, and long-lasting print quality. 
          </p>
           <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
       At Vastraa Global, we provide custom digital fabric printing on premium modal fabric for fashion brands, garment manufacturers, designers, and exporters. From sampling to bulk production, we help businesses create high-quality printed textiles with consistent colour accuracy and reliable production support. 
          </p>
        </div>
        {/* <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            About <span className="text-secondary italic">modal Fabrics.</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            modal fabric has remained one of the most loved textiles in the fashion industry for generations. Known for its softness, breathability, and versatility, modal is widely used across apparel, lifestyle, and home textile industries.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At Vastraa Global, we offer premium modal fabrics suitable for custom printing, fashion manufacturing, and export production.
          </p>
          
        </div> */}
        {/* <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            What are <span className="text-secondary italic">modal Fabrics?</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            modal fabrics are textiles made from natural modal fibers harvested from the modal plant. These fibers are spun into yarn and woven or knitted into different types of fabrics suitable for apparel and textile applications.
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
            Why Fashion Brands <span className="text-secondary italic">Prefer modal Fabrics?</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            modal fabrics are one of the most preferred materials in modern fashion because they adapt effortlessly to different styles, seasons, and apparel categories.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            From luxury labels to emerging streetwear brands, modal fabrics remain essential in apparel manufacturing.
          </p>
          
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li className="text-gray-500 text-sm md:text-base">Comfortable everyday wear</li><li className="text-gray-500 text-sm md:text-base">Excellent print clarity</li><li className="text-gray-500 text-sm md:text-base">Sustainable fashion collections</li><li className="text-gray-500 text-sm md:text-base">Lightweight and breathable garments</li><li className="text-gray-500 text-sm md:text-base">Premium texture and finish</li><li className="text-gray-500 text-sm md:text-base">Easy dyeing and customization</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            The Evolution of modal Fabrics <span className="text-secondary italic">in Modern Fashion</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            modal fabrics have evolved significantly from traditional weaving techniques to advanced textile manufacturing and digital printing processes.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Modern modal fabrics now combine traditional craftsmanship with innovative textile technology to meet the changing demands of global fashion brands.
          </p>
          
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li className="text-gray-500 text-sm md:text-base">Sustainable fashion production</li><li className="text-gray-500 text-sm md:text-base">Digital textile printing</li><li className="text-gray-500 text-sm md:text-base">Performance apparel</li><li className="text-gray-500 text-sm md:text-base">Eco-conscious collections</li><li className="text-gray-500 text-sm md:text-base">Contemporary fashion aesthetics</li>
          </ul>
        </div> */}
      </section>
      <section className="py-5">
  <div className="container-site">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>
        <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
          Production Solutions
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
          Modal Fabric for
          <span className="text-secondary italic">
            {" "}Sampling & Bulk Production
          </span>
        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-600">
          Choosing the right fabric is essential for creating successful textile
          collections. Vastraa Global offers printable modal fabric for both
          sampling and bulk production, helping brands evaluate designs before
          full-scale manufacturing.
        </p>

        <p className="mt-6 text-lg leading-9 text-gray-600">
          Our digital textile printing solutions support fashion apparel,
          dresses, scarves, loungewear, home furnishings, and designer
          collections. With flexible production quantities and an efficient
          workflow, we ensure consistent print quality from sample development
          to bulk orders.
        </p>
      </div>

      {/* Right */}
      <div className="grid gap-5">
        {[
          "Sampling Before Bulk Production",
          "Flexible Production Quantities",
          "Consistent Print Quality",
          "Fast Manufacturing Workflow",
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
<section className="py-16 bg-gray-50">
  <div className="container-site">

    <div className="max-w-4xl mx-auto text-center">

      <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
        Fabric Overview
      </span>

      <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
        A Brief Overview of
        <span className="text-secondary italic">
          {" "}Modal Fabric
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        Modal fabric is a regenerated cellulose fabric made from beechwood
        fibres and is valued for its soft texture, lightweight construction,
        and breathable nature.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      {[
        {
          title: "Soft & Lightweight",
          desc: "Naturally smooth fibres create exceptional softness with lightweight comfort."
        },
        {
          title: "Excellent Drape",
          desc: "Compared to conventional rayon, modal offers better drape, durability, and dimensional stability."
        },
        {
          title: "Superior Print Surface",
          desc: "Its smooth fibre structure allows inks to absorb evenly for vibrant colours and sharp details."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm"
        >
          <div className="text-5xl font-bold text-secondary/20">
            0{index + 1}
          </div>

          <h3 className="mt-4 text-2xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container-site">
    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center">
      <span className="uppercase tracking-[0.3em] text-secondary text-xs font-semibold">
        Key Advantages
      </span>

      <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-black">
        Benefits of
        <span className="text-secondary italic"> Modal Fabric</span>
      </h2>

      <p className="mt-8 text-lg text-gray-600 leading-9">
        The popularity of modal fabric comes from its combination of comfort and
        print performance. It is soft, breathable, lightweight, and drapes
        beautifully, making it suitable for premium fashion and lifestyle
        products.
      </p>

      <p className="mt-6 text-lg text-gray-600 leading-9">
        For digital textile printing, modal delivers excellent colour
        absorption, sharp print definition, and long-lasting results. These
        qualities make it an ideal fabric for fashion brands looking to create
        vibrant, high-quality custom printed collections.
      </p>
    </div>

    {/* Benefits Grid */}
    {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-16">
      {[
        {
          number: "01",
          title: "Soft & Comfortable",
          desc: "Naturally soft fibres provide exceptional comfort, making modal ideal for premium fashion and lifestyle products.",
        },
        {
          number: "02",
          title: "Breathable & Lightweight",
          desc: "Its lightweight construction promotes airflow, helping garments stay cool and comfortable throughout the day.",
        },
        {
          number: "03",
          title: "Elegant Fabric Drape",
          desc: "Modal flows beautifully, creating graceful silhouettes for dresses, tops, scarves, and designer apparel.",
        },
        {
          number: "04",
          title: "Excellent Colour Absorption",
          desc: "The smooth fibre structure absorbs digital inks evenly, producing rich, vibrant colours with exceptional clarity.",
        },
        {
          number: "05",
          title: "Sharp Print Definition",
          desc: "High-resolution digital printing delivers crisp patterns, intricate artwork, and premium-quality textile designs.",
        },
        {
          number: "06",
          title: "Long-Lasting Performance",
          desc: "Outstanding print durability and fabric stability help maintain colour brilliance and quality over time.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <span className="text-5xl font-bold text-secondary/15 group-hover:text-secondary/25 transition">
              {item.number}
            </span>

            <div className="w-12 h-12 rounded-2xl bg-secondary/10 group-hover:bg-secondary group-hover:text-white transition-all flex items-center justify-center">
              ✓
            </div>
          </div>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            {item.title}
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            {item.desc}
          </p>
        </div>
      ))}
    </div> */}

    {/* Bottom Highlight */}
    <div className="mt-16 rounded-[32px] bg-secondary text-white p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="uppercase tracking-widest text-sm text-white/80">
            Why Fashion Brands Choose Modal
          </span>

          <h3 className="mt-3 text-3xl font-semibold leading-tight">
            Premium Comfort Meets Outstanding Print Quality
          </h3>
        </div>

        <p className="text-white/90 leading-8 text-lg">
          Combining luxurious softness, breathable comfort, elegant drape, and
          exceptional digital print performance, modal fabric is a trusted choice
          for creating vibrant, high-quality custom printed fashion collections.
        </p>
      </div>
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
                  Our Modal 
                  <span className="italic text-secondary">
                    {" "}Fabric Collection
                  </span>
                </h2>
     <p className="text-gray-600 my-3 text-lg">
        Vastraa Global offers a versatile range of modal fabric for digital fabric printing, supporting fashion brands, designers, garment manufacturers, and textile businesses. Our collection is selected for its smooth texture, excellent print compatibility, and ability to produce vibrant colours with sharp print definition for both sampling and bulk production. 
        </p>
                <div className="w-24 h-1 bg-secondary rounded-full mx-auto mt-6"></div>
    
              </div>
    
              <div className="space-y-16">
    
                {modalTypes.map((item, index) => (
    
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
              Best Uses of Modal
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
        { question: "`What is modal fabric?`", answer: `Modal fabric is a regenerated cellulose fabric made from beechwood pulp. It is known for its softness, breathability, lightweight feel, and smooth finish, making it ideal for premium apparel and home textiles. ` },
        { question: ` Is modal fabric good for digital fabric printing? `, answer: `Yes. Modal fabric is an excellent choice for digital fabric printing because of its smooth surface, vibrant colour absorption, and sharp print quality. ` },
        { question: `What are the benefits of modal fabric?`, answer: `Modal fabric offers exceptional softness, breathability, moisture management, elegant drape, and excellent print compatibility for fashion and custom printed textiles. ` },
         { question: `What is Lenzing™ Modal?`, answer: `Lenzing™ Modal is a premium modal fibre known for its consistent quality, silky softness, durability, and superior print performance. ` },
          { question: `What is modal fabric used for?`, answer: `Modal fabric is widely used for dresses, tops, scarves, sleepwear, loungewear, activewear, home furnishings, and custom printed textiles.  ` },
           { question: `Is modal fabric suitable for summer?`, answer: `Yes. Modal fabric is lightweight, breathable, and moisture absorbent, making it comfortable for warm-weather clothing.  ` },
            { question: `Can I order custom printed modal fabric?`, answer: `Yes. Vastraa Global offers custom digital fabric printing on modal fabric with sampling and bulk production support.   ` },
             { question: ` Do you provide bulk production for modal fabric printing?`, answer: `Yes. We provide bulk digital fabric printing on modal fabric for fashion, home furnishings, accessories, and commercial textile applications.   ` },

      ]} title="FAQs About Modal" />

      <FabricUpload />
      <ExpertConsultation />
      <Footer />
    </main>
  );
}
