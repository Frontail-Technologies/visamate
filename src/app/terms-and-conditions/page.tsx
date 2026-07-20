import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalPageLayout,
  LegalPlaceholder,
} from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Visa Mate's USA B1/B2 visa consultancy services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="July 2026"
      intro={
        <p>
          These Terms & Conditions govern your use of Visa Mate&apos;s
          website and consultancy services for USA B1/B2 tourist and
          business visa applications. By engaging our services, you agree to
          the terms below.
        </p>
      }
      sections={[
        {
          id: "about",
          title: "1. About Visa Mate",
          body: (
            <>
              <p>
                Visa Mate is an independent visa consultancy and is not
                affiliated with, endorsed by, or acting on behalf of the U.S.
                Embassy, U.S. Consulate, or the U.S. Government.
              </p>
              <p>
                We provide guidance and preparation support for USA B1/B2
                tourist and business visa applications, including DS-160
                completion, documentation review, appointment booking
                assistance, and interview preparation.
              </p>
            </>
          ),
        },
        {
          id: "scope-of-services",
          title: "2. Scope of Services",
          body: (
            <>
              <p>
                Our services are limited to preparation and guidance. We do
                not represent the U.S. Government in any capacity, and we do
                not have any influence over visa decisions, appointment
                availability, or government processing timelines.
              </p>
              <LegalPlaceholder>
                Content placeholder — complete scope-of-service clauses
                pending final client/legal review.
              </LegalPlaceholder>
            </>
          ),
        },
        {
          id: "fees",
          title: "3. Fees & Payment",
          body: (
            <p>
              Fees for our services are described on our{" "}
              <Link
                href="/#payment-structure"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                Payment Structure
              </Link>{" "}
              page. The U.S. Embassy Fee is paid directly to the U.S.
              Embassy. The Visa Mate Case Registration Fee is a one-time fee
              payable to activate your case. The Visa Mate Professional
              Service Fee is payable only after your Early Interview
              Appointment has been successfully secured.
            </p>
          ),
        },
        {
          id: "no-guarantee",
          title: "4. No Guarantee of Outcome",
          body: (
            <p>
              Visa Mate does not guarantee visa approval, appointment
              availability on any specific date, or government-controlled
              processing timelines. The final decision on any visa
              application rests solely with the U.S. Embassy or Consulate.
            </p>
          ),
        },
        {
          id: "client-responsibilities",
          title: "5. Client Responsibilities",
          body: (
            <p>
              You are responsible for providing accurate, complete, and
              timely information and documents. Delays or issues caused by
              incomplete or inaccurate information provided by you are
              outside our control.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "6. Governing Law",
          body: (
            <LegalPlaceholder>
              Content placeholder — governing law and jurisdiction clause to
              be confirmed with client/legal counsel.
            </LegalPlaceholder>
          ),
        },
      ]}
    />
  );
}
