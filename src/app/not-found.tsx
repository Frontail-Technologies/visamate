import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPinOff } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { LinedBackground } from "@/components/ui/lined-background";

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-dvh flex-col bg-background text-foreground">
        <SiteNavbar />

        <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          {/* Decorative background grid and glow */}
          <LinedBackground className="opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">

            <div className="relative mb-8 transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/images/not-found.png"
                alt="404 Location Not Found"
                width={320}
                unoptimized
                height={320}
                className="mx-auto h-auto w-auto object-contain"
                priority
              />
            </div>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm font-semibold text-muted-foreground shadow-xs backdrop-blur-md">
              <MapPinOff className="size-4 text-primary" />
              <span>Destination Unknown</span>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Looks like you've wandered off the map. The page you are looking for
              might have been moved or simply doesn't exist.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
