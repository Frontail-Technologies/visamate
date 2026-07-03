import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteTopbar } from "@/components/site-topbar";
// import { SiteSplash } from "@/components/ui/site-splash";

const fontSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisaMate",
  description: "Your visa partner for guided travel documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full max-w-[100vw] flex-col overflow-x-clip">
        {/* <SiteSplash /> */}
        <SiteTopbar />
        {children}
      </body>
    </html>
  );
}
