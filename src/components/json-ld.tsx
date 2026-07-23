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
        "@type": ["ProfessionalService", "LocalBusiness"],
        name: "Visa Mate",
        url: "https://visamate.co.in",
        description:
          "Independent visa consultancy specializing in USA B1/B2 tourist and business visa guidance, including DS-160 completion, appointment booking support, and interview preparation.",
        telephone: "+91-89552-29807",
        email: "askvisamate@gmail.com",
        areaServed: "IN",
        priceRange: "₹2,500 - ₹20,000",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "1st Floor, Vistar G, Sumer Nagar, near Guddu Paradise, Manyawas, Block, Mansarovar",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302020",
          addressCountry: "IN",
        },
      }}
    />
  );
}
