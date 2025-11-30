import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import RegionsSection from "@/components/sections/RegionsSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <RegionsSection />
      <ReferencesSection />
      <CTABanner />
    </main>
  );
}
