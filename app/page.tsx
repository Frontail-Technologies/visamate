import { HeroSection } from "@/components/home/hero-section";
import { SiteNavbar } from "@/components/site-navbar";
import { SupportSection } from "@/components/home/support-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { VisaServicesSection } from "@/components/home/visa-services-section";
import { GuidesSection } from "@/components/home/guides-section";
import { BlogsSection } from "@/components/home/blogs-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main id="top" className="min-h-dvh bg-background text-foreground">
        <SiteNavbar />
        <HeroSection />
        <SupportSection />
        <ProcessSection />
        <WhyChooseSection />
        <VisaServicesSection />
        <GuidesSection />
        <BlogsSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
