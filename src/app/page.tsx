import { HeroSection } from "@/components/home/hero-section";
import { SiteNavbar } from "@/components/site-navbar";
import { PricingStatementSection } from "@/components/home/pricing-statement-section";
import { PaymentStructureSection } from "@/components/home/payment-structure-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { FaqSection } from "@/components/home/faq-section";
import { EnquirySection } from "@/components/home/enquiry-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { faqItems } from "@/data/visa-mate";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <main className="min-h-dvh bg-background text-foreground">
        <SiteNavbar />
        <HeroSection />
        {/* <PricingStatementSection /> */}
        <PaymentStructureSection />
        <ProcessSection />
        <WhyChooseSection />
        <FaqSection />
        <EnquirySection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
