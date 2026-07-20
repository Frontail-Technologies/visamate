export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Visa Mate",
        description:
          "Independent visa consultancy specializing in USA B1/B2 tourist and business visa guidance, including DS-160 completion, appointment booking support, and interview preparation.",
        telephone: "+91-89552-29807",
        email: "askvisamate@gmail.com",
        areaServed: "IN",
        priceRange: "₹2,500 - ₹20,000",
      }}
    />
  );
}
