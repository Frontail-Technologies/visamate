import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Visa Mate's refund and cancellation policy for the Processing Fee and Professional Service Fee.",
  alternates: { canonical: "/refund-and-cancellation" },
};

export default function RefundAndCancellationPage() {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      lastUpdated="July 2026"
      intro={
        <p>
          This policy explains how refunds and cancellations are handled for
          the fees charged by Visa Mate for USA B1/B2 visa consultancy
          services.
        </p>
      }
      sections={[
        {
          id: "processing-fee",
          title: "1. Processing Fee (₹2,500)",
          body: (
            <p>
              The ₹2,500 Case Registration / Processing Fee is generally
              non-refundable, as it covers the initial profile assessment,
              case registration, dedicated case manager assignment,
              personalized document checklist, and visa strategy
              consultation performed upon activation of your case.
            </p>
          ),
        },
        {
          id: "full-refund-conditions",
          title: "2. When a Full Refund May Apply",
          body: (
            <p>
              A full refund of the Processing Fee may apply if Visa Mate
              fails to begin processing within three business days after
              receiving all required documents and information from you.
            </p>
          ),
        },
        {
          id: "exclusions",
          title: "3. Exclusions",
          body: (
            <>
              <p>
                The refund described above does not apply where the delay or
                issue results from:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Applicant delays</li>
                <li>Incomplete information provided by the applicant</li>
                <li>Changes requested by the applicant</li>
                <li>Government or third-party delays</li>
              </ul>
            </>
          ),
        },
        {
          id: "professional-service-fee",
          title: "4. Professional Service Fee (₹20,000)",
          body: (
            <p>
              The Professional Service Fee is payable only after your Early
              Interview Appointment has been successfully secured, as
              described in our{" "}
              <Link
                href="/#payment-structure"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                Payment Structure
              </Link>
              . Refund terms for this fee follow the same principles above:
              generally non-refundable once the corresponding service has
              been rendered, except where Visa Mate fails to begin the
              agreed service within the applicable timeframe for reasons
              within our control.
            </p>
          ),
        },
        {
          id: "embassy-fee",
          title: "5. U.S. Embassy Fee",
          body: (
            <p>
              The U.S. Embassy Fee (₹18,130 / USD 185) is paid directly to
              the U.S. Embassy and is not collected, held, or refunded by
              Visa Mate. Any refund of this fee is subject solely to U.S.
              Embassy policy.
            </p>
          ),
        },
      ]}
    />
  );
}
