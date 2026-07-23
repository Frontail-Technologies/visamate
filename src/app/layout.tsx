import type { Metadata } from "next";
import { Inter_Tight, Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { OrganizationJsonLd } from "@/components/json-ld";

const fontSans = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visamate.co.in"),
  title: {
    default: "Visa Mate | USA Tourist & Business Visa Made Simple",
    template: "%s | Visa Mate",
  },
  description:
    "Expert guidance for DS-160, appointment booking, and visa interview preparation for USA B1/B2 tourist and business visas. Transparent, milestone-based pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Visa Mate | USA Tourist & Business Visa Made Simple",
    description:
      "Expert guidance for DS-160, Appointment Booking & Visa Interview Preparation. 100% transparent pricing.",
    url: "https://visamate.co.in",
    siteName: "Visa Mate",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Mate | USA Tourist & Business Visa Made Simple",
    description:
      "Expert guidance for DS-160, Appointment Booking & Visa Interview Preparation. 100% transparent pricing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full max-w-[100vw] flex-col overflow-x-clip"
        suppressHydrationWarning
      >
        <OrganizationJsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
