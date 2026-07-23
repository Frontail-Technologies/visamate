import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  buildWhatsAppLink,
  contactEmail,
  footerContent,
  legalLinks,
  navigationItems,
  phoneDisplayNumber,
  whatsappDisplayNumber,
} from "@/data/visa-mate";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-foreground">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary-blue/40 to-transparent" />

      <div className="mx-auto max-w-340 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.85fr_0.85fr] lg:gap-16">
          <div className="max-w-md">
            <Link
              href="/#top"
              className="inline-flex items-center"
              aria-label="Visa Mate home"
            >
              <Image
                src="/images/logo.png"
                alt="Visa Mate"
                width={240}
                height={82}
                className="h-auto w-44 sm:w-52"
              />
            </Link>
            <p className="mt-6 font-serif text-base leading-7 text-muted-foreground">
              {footerContent.description}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:+91${phoneDisplayNumber}`}
                className="flex min-h-11 items-center gap-2.5 font-serif text-base text-foreground/80 transition-colors hover:text-burgundy-bright"
              >
                <Phone className="size-4 shrink-0 text-burgundy" />
                {whatsappDisplayNumber}
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="flex min-h-11 items-center gap-2.5 font-serif text-base text-foreground/80 transition-colors hover:text-burgundy-bright"
              >
                <Mail className="size-4 shrink-0 text-burgundy" />
                {contactEmail}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerContent.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-serif text-base text-foreground/80 transition-colors hover:text-burgundy-bright"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-burgundy" />
                <span>{footerContent.address}</span>
              </a>
            </div>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1EBE5A]"
            >
              <WhatsAppIcon className="size-4" />
              Apply on WhatsApp
            </a>
          </div>

          <div>
            <p className="mb-5 text-lg font-bold tracking-tight text-foreground">
              Company
            </p>
            <ul className="space-y-3.5">
              {navigationItems
                .filter(
                  (item) => item.href !== "/#top" && item.label !== "Terms",
                )
                .map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex min-h-11 items-center font-serif text-base text-muted-foreground transition-colors hover:text-burgundy-bright"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-lg font-bold tracking-tight text-foreground">
              Legal
            </p>
            <ul className="space-y-3.5">
              {legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex min-h-11 items-center font-serif text-base text-muted-foreground transition-colors hover:text-burgundy-bright"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-light-blue-bg/40">
        <div className="mx-auto flex max-w-340 flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="font-serif text-xs text-muted-foreground">
            © {year} Visa Mate. All rights reserved.
          </p>
          <p className="max-w-xl font-serif text-xs leading-relaxed text-muted-foreground/80">
            Visa Mate is an independent visa consultancy and is not
            affiliated with, endorsed by, or acting on behalf of the U.S.
            Embassy, U.S. Consulate, or the U.S. Government.
          </p>
        </div>
      </div>
    </footer>
  );
}
