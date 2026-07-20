import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { contactEmail } from "@/data/visa-mate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Visa Mate collects, uses, and communicates about the information you share for your USA B1/B2 visa application.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="July 2026"
      intro={
        <p>
          This Privacy Policy explains what information Visa Mate collects
          from you and how it is used in connection with your USA B1/B2 visa
          application.
        </p>
      }
      sections={[
        {
          id: "information-we-collect",
          title: "1. Information We Collect",
          body: (
            <>
              <p>To provide our services, we may collect:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Passport Details</li>
                <li>Travel Information</li>
                <li>Supporting Documents</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-information",
          title: "2. How We Use Your Information",
          body: (
            <>
              <p>The information you provide is used for:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Visa processing</li>
                <li>Preparing DS-160 applications</li>
                <li>Appointment booking</li>
                <li>Customer support</li>
                <li>Service communication</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-communicate",
          title: "3. How We Communicate With You",
          body: (
            <>
              <p>We may contact you through:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Phone</li>
                <li>WhatsApp</li>
                <li>SMS</li>
                <li>Email</li>
              </ul>
            </>
          ),
        },
        {
          id: "data-handling",
          title: "4. Data Handling",
          body: (
            <p>
              Your information is used solely for the purposes described in
              this policy and is handled with reasonable care by our team.
            </p>
          ),
        },
        {
          id: "contact",
          title: "5. Contact Us",
          body: (
            <p>
              If you have questions about this Privacy Policy or how your
              information is used, contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {contactEmail}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
