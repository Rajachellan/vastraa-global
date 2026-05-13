import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { B2BHero } from "@/sections/B2BHero";
import { B2BAbout } from "@/sections/B2BAbout";
import { Certifications } from "@/sections/Certifications";
import { ProductCategories } from "@/sections/ProductCategories";
import { ManufacturingCapabilities } from "@/sections/ManufacturingCapabilities";
import { HowWePrint } from "@/sections/HowWePrint";
import { QuoteForm } from "@/sections/QuoteForm";
import { GlobalPresence } from "@/sections/GlobalPresence";

import { FeaturedCategories } from "@/sections/FeaturedCategories";
import { TrendingDesigns } from "@/sections/TrendingDesigns";
import { Testimonials } from "@/sections/Testimonials";
import { CTASection } from "@/sections/CTASection";
import { FabricUpload } from "@/components/FabricUpload";
import { ExpertConsultation } from "@/sections/ExpertConsultation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <B2BHero />
      <B2BAbout />
      <FabricUpload />
      <FeaturedCategories />
      <TrendingDesigns />
      <ExpertConsultation />
      <Certifications />
      <ProductCategories />
      <ManufacturingCapabilities />
      <HowWePrint />
      <Testimonials />
      <QuoteForm />
      <GlobalPresence />
      <CTASection />
      <Footer />
    </main>
  );
}

