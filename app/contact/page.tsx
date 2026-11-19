import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Input, Textarea, Select } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact our team",
  description:
    "Get in touch with the Cerebro DNano team in Karachi for product inquiries, enterprise support, and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact", href: "/contact" }];

  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbListJsonLd items={[{ name: "Contact", path: "/contact" }]} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Get in touch"
        title="We are here to help."
        lead="Have questions about connecting your ad channels or structuring multi-client reporting? Contact our team directly."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Details (Read strictly from SITE) */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div>
                <h2 className="text-h3 font-heading font-semibold text-ink mb-2">
                  Headquarters
                </h2>
                <p className="text-small text-muted leading-relaxed">
                  Our core engineering and operations office is located at The Forum in Clifton, Karachi.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-border">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-control bg-surface border border-border flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                      Office Address
                    </p>
                    <p className="text-small font-medium text-ink mt-0.5">
                      {SITE.address.street}
                    </p>
                    <p className="text-small text-muted">
                      {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-control bg-surface border border-border flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-small font-medium text-ink hover:text-brand transition-colors mt-0.5 block"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-control bg-surface border border-border flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                      Phone
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-small font-medium text-ink hover:text-brand transition-colors mt-0.5 block tabular-nums"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-control bg-surface border border-border flex items-center justify-center text-brand shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-caption font-semibold uppercase tracking-wider text-muted">
                      Business Hours
                    </p>
                    <p className="text-small font-medium text-ink mt-0.5">
                      {SITE.hoursDisplay}
                    </p>
                    <p className="text-caption text-muted">
                      Timezone: {SITE.timezone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7">
              <div className="p-8 lg:p-10 rounded-card border border-border bg-white shadow-sm text-left">
                <h3 className="text-h3 font-heading font-semibold text-ink mb-6">
                  Send a message
                </h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input label="First name" required placeholder="Arsalan" />
                    <Input label="Last name" required placeholder="Usman" />
                  </div>
                  <Input label="Work email" type="email" required placeholder="name@company.com" />
                  <Select
                    label="Subject"
                    options={[
                      { value: "general", label: "General Product Inquiry" },
                      { value: "demo", label: "Enterprise Walkthrough" },
                      { value: "support", label: "Technical Support" },
                      { value: "partner", label: "Partnership / Channel Discussion" },
                    ]}
                  />
                  <Textarea
                    label="Message"
                    required
                    rows={5}
                    placeholder="Describe your current ad platforms, team structure, or questions..."
                  />
                  <div className="pt-2">
                    <Button type="button" size="lg" className="w-full">
                      Submit message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
