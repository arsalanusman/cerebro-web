import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Pricing and plans",
  description:
    "Predictable, transparent plans for digital agencies and marketing teams managing Meta Ads, Google Ads and TikTok Ads.",
  path: "/pricing",
});

export default function PricingPage() {
  const breadcrumbs = [{ label: "Pricing", href: "/pricing" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Pricing", path: "/pricing" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Pricing"
        title="Predictable plans for growing teams."
        lead="Choose a plan designed for your ad spend volume, connected channels, and client reporting needs."
        actions={
          <Button href="/demo" size="lg">
            Request custom quote
          </Button>
        }
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="p-8 rounded-card border border-border bg-white flex flex-col justify-between text-left">
              <div>
                <p className="text-small font-semibold text-brand mb-2">Team</p>
                <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink mb-2">
                  Standard
                </h3>
                <p className="text-small text-muted mb-6">
                  For in-house marketing teams and boutique agencies consolidating core channels.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Meta Ads, Google Ads & TikTok Ads</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Automated daily data synchronization</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Pre-built objective reporting dashboards</span>
                  </li>
                </ul>
              </div>
              <Button href="/demo" variant="secondary" size="md" className="w-full">
                Get started
              </Button>
            </div>

            {/* Growth Plan */}
            <div className="p-8 rounded-card border-2 border-brand bg-white relative flex flex-col justify-between text-left shadow-sm">
              <span className="absolute -top-3 left-8 text-caption font-semibold px-3 py-0.5 rounded-full bg-brand text-white">
                Most popular
              </span>
              <div>
                <p className="text-small font-semibold text-brand mb-2">Agency</p>
                <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink mb-2">
                  Professional
                </h3>
                <p className="text-small text-muted mb-6">
                  For mid-sized agencies requiring client-level segregation and custom white-label reports.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>All Standard capabilities</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Multi-client workspace isolation</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Ask Cerebro AI analyst integration</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Custom PDF & Web report builder</span>
                  </li>
                </ul>
              </div>
              <Button href="/demo" variant="primary" size="md" className="w-full">
                Book a demo
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-card border border-border bg-white flex flex-col justify-between text-left">
              <div>
                <p className="text-small font-semibold text-brand mb-2">Enterprise</p>
                <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink mb-2">
                  Custom
                </h3>
                <p className="text-small text-muted mb-6">
                  For large marketing enterprises and holding groups with custom governance needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Dedicated data warehouse options</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Custom SLAs and priority support</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-small text-text">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Role-based access and audit logging</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact" variant="secondary" size="md" className="w-full">
                Contact sales
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to discuss your reporting requirements?"
        lead="Speak with our solutions team to find the right configuration for your campaign portfolio."
      />
    </>
  );
}
