import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/legal/legal-page-layout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Visa Mate's disclaimer regarding visa approval, appointment availability, and government processing timelines.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      lastUpdated="July 2026"
      intro={
        <p>
          Please read this disclaimer carefully before using Visa Mate&apos;s
          services.
        </p>
      }
      sections={[
        {
          id: "independent-consultancy",
          title: "1. Independent Consultancy",
          body: (
            <p>
              Visa Mate is an independent visa consultancy and is not
              affiliated with, endorsed by, or acting on behalf of the U.S.
              Embassy, U.S. Consulate, or the U.S. Government.
            </p>
          ),
        },
        {
          id: "no-guarantees",
          title: "2. No Guarantees",
          body: (
            <>
              <p>Visa Mate cannot guarantee:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Visa approval</li>
                <li>Appointment availability on a specific date</li>
                <li>Government-controlled processing timelines</li>
              </ul>
              <p>
                All visa decisions are made solely by the U.S. Embassy or
                Consulate based on their own assessment criteria.
              </p>
            </>
          ),
        },
        {
          id: "role-of-visa-mate",
          title: "3. Our Role",
          body: (
            <p>
              Our role is limited to helping you prepare your application,
              organise your documents, complete the DS-160 form, assist with
              appointment booking, and prepare for your visa interview. We do
              not submit decisions on behalf of the U.S. Government and have
              no control over embassy or consulate procedures.
            </p>
          ),
        },
        {
          id: "no-liability",
          title: "4. Limitation of Liability",
          body: (
            <p>
              Visa Mate is not liable for delays, rejections, or changes in
              government policy, processing timelines, or appointment
              availability that are outside our control.
            </p>
          ),
        },
      ]}
    />
  );
}
