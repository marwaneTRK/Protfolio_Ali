import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CreationsSection } from "@/components/sections/CreationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MediaCredibilitySection } from "@/components/sections/MediaCredibilitySection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <PerformanceSection />
      <CreationsSection />
      <MediaCredibilitySection />
      <SocialSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
