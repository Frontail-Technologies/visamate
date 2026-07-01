import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-24 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Us
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Start Your Visa Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Talk to our team and get clear guidance for your visa application. We are here to help you every step of the way.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
          {/* Contact info cards */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Call or WhatsApp</h3>
                <p className="mt-1 text-lg font-semibold text-foreground">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email us</h3>
                <p className="mt-1 text-lg font-semibold text-foreground">hello@visamate.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Office</h3>
                <p className="mt-1 text-base font-semibold text-foreground">123 Visa Street, New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Clean contact form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="service" className="text-sm font-medium text-foreground">Visa Type</label>
                <select
                  id="service"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select visa type...</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="student">Student Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="work">Work Visa</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
