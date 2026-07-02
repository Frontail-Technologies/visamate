import {
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const mapUrl = "https://www.google.com/maps?q=Visa%20Mate&output=embed";

const contactItems = [
  {
    label: "Phone",
    value: "+91 98765 43210",
    Icon: Phone,
  },
  {
    label: "Email",
    value: "hello@visamate.com",
    Icon: Mail,
  },
  {
    label: "Address",
    value: "New Delhi, India",
    Icon: MapPin,
  },
  {
    label: "WhatsApp",
    value: "Message us",
    Icon: MessageCircle,
  },
];

const socialLinks = [
  { label: "WhatsApp", href: "#", Icon: MessageCircle },
  { label: "Website", href: "#", Icon: Globe },
  { label: "Telegram", href: "#", Icon: Send },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border/50 bg-background py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              Talk to our team and get clear guidance for your visa application.
              We are here to help you understand the next step.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {contactItems.map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {label}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <p className="text-sm font-semibold text-foreground">
                  Social Media
                </p>
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                    className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="service-type"
                  className="text-xs font-semibold text-foreground"
                >
                  Service Type
                </label>
                <select
                  id="service-type"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select service type
                  </option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="student">Student Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="family">Family / Visit Visa</option>
                  <option value="documents">Document Support</option>
                  <option value="interview">Interview Preparation</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <button
                type="button"
                className="inline-flex rounded-lg bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Submit Button
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <iframe
            title="Visa Mate location on Google Maps"
            src={mapUrl}
            className="h-72 w-full border-0 sm:h-80 lg:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
