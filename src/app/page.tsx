import { HeroSection } from "@/components/home/hero-section";
import { SiteNavbar } from "@/components/site-navbar";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { MeetConsultantSection } from "@/components/home/meet-consultant-section";
import { VisaServicesSection } from "@/components/home/visa-services-section";
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
        <WhyChooseSection />
        <MeetConsultantSection />
        <VisaServicesSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
        <BlogsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
