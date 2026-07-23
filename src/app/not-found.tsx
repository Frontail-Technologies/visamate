import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export default function NotFound() {
  return (
    <>
      <SiteNavbar />
      <main className="flex min-h-dvh items-center justify-center bg-background px-6 pt-32 pb-16 text-foreground">
        <section className="relative flex w-full max-w-3xl flex-col items-center text-center">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 translate-y-[-58%] select-none text-9xl font-black leading-none tracking-tight text-foreground/8 sm:text-[13rem] md:text-[17rem]"
          >
            404
          </div>

          <div className="relative z-10 mt-8 flex flex-col items-center">
            <h1 className="text-section-heading-secondary font-bold tracking-tight text-foreground">
              Page Not Found!
            </h1>
            <p className="mt-3 font-serif text-sm text-muted-foreground">
              Content unavailable due to error or deletion by owner
            </p>

            <Button asChild size="lg" className="mt-8">
              <Link href="/">
                Back to Home
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
