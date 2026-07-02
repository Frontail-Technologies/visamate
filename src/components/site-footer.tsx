import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Plane,
  Users,
  Wrench,
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const services = [
  { label: "Tourist Visa", Icon: Plane, href: "/#services" },
  { label: "Business Visa", Icon: Briefcase, href: "/#services" },
  { label: "Student Visa", Icon: GraduationCap, href: "/#services" },
  { label: "Work Visa", Icon: Wrench, href: "/#services" },
  { label: "Family Visa", Icon: Users, href: "/#services" },
];

const quickLinks = [
  { label: "How It Works", href: "/#process" },
  { label: "Why Choose Us", href: "/#why-choose" },
  { label: "Blog", href: "/blog" },
  { label: "Client Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

const contactInfo = [
  { Icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
  { Icon: WhatsAppIcon, text: "Chat on WhatsApp", href: "https://wa.me/919876543210" },
  { Icon: Mail, text: "hello@visamate.in", href: "mailto:hello@visamate.in" },
  { Icon: MapPin, text: "Mumbai, India", href: "#" },
];

const socials = [
  { Icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919876543210", color: "hover:text-[#25D366] hover:border-[#25D366]/30" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/visamate", color: "hover:text-[#E1306C] hover:border-[#E1306C]/30" },
  { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/visamate", color: "hover:text-[#1877F2] hover:border-[#1877F2]/30" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">

          {/* Brand column */}
          <div>
            <a href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Visa Mate"
                width={160}
                height={54}
                className="h-auto w-36 sm:w-40"
              />
            </a>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Visa Mate provides honest, clear, and step-by-step visa consultation
              services. We help you prepare better — from documents to interviews.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-muted-foreground transition-all duration-200 ${color}`}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20visa%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-sm font-bold text-foreground transition-all hover:border-primary/25 hover:bg-primary/5 hover:text-primary"
            >
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              Book on WhatsApp
              <ArrowRight className="size-3.5 text-muted-foreground" />
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
              Services
            </p>
            <ul className="space-y-3">
              {services.map(({ label, Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-3.5 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="size-1 rounded-full bg-border transition-colors group-hover:bg-primary" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
              Contact
            </p>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/50" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Hours note */}
            <div className="mt-6 rounded-lg border border-border bg-muted/40 px-4 py-3">
              <p className="text-xs font-semibold text-foreground">Working Hours</p>
              <p className="mt-1 text-xs text-muted-foreground">Mon – Fri: 9am – 7pm</p>
              <p className="text-xs text-muted-foreground">Sat: 10am – 5pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {year} Visa Mate. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
