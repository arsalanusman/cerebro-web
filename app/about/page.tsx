import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { Database, ShieldCheck, Cpu } from "lucide-react";

export const metadata = buildMetadata({
  title: "About our mission",
  description:
    "Cerebro DNano is built to give digital marketing teams a single, reliable operating foundation across Meta, Google and TikTok.",
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbs = [{ label: "About", href: "/about" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "About", path: "/about" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="About Cerebro DNano"
        title="Clarity behind every marketing campaign."
        lead="We believe digital advertising teams spend too much time wrangling fragmented exports and not enough time understanding their actual marketing impact."
      />

      <Section bg="white">
        <Container>
          <div className="max-w-3xl text-left space-y-6 text-body text-text leading-relaxed">
            <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink h2-wrap-22ch mb-6">
              Our engineering philosophy
            </h2>
            <p>
              Digital marketing has exploded into specialized channels. While Meta Ads, Google Ads and TikTok Ads provide robust advertising engines, each maintains its own definitions, conversion windows, and reporting interfaces.
            </p>
            <p>
              Cerebro DNano was founded to solve this structural fragmentation. Rather than building another superficial dashboard that simply embeds third-party widgets, we created an enterprise data foundation that connects directly via official APIs, normalizes campaign metrics, and judges every campaign against its intended objective.
            </p>
            <p>
              On top of this clean data layer sits Ask Cerebro, an embedded AI analyst that helps teams query their performance in plain language without relying on complex SQL queries or static spreadsheet formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border text-left">
            <div className="p-6 rounded-card bg-surface border border-border">
              <div className="w-10 h-10 rounded-control bg-white border border-border flex items-center justify-center text-brand mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Data Integrity First
              </h3>
              <p className="text-small text-muted leading-relaxed">
                We never approximate or interpolate numbers. All metrics originate directly from authenticated platform APIs.
              </p>
            </div>

            <div className="p-6 rounded-card bg-surface border border-border">
              <div className="w-10 h-10 rounded-control bg-white border border-border flex items-center justify-center text-brand mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Enterprise Governance
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Agency workspaces are strictly segregated with role-based access, audit trails, and encrypted credential storage.
              </p>
            </div>

            <div className="p-6 rounded-card bg-surface border border-border">
              <div className="w-10 h-10 rounded-control bg-white border border-border flex items-center justify-center text-brand mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-body font-heading font-semibold text-ink mb-2">
                Objective Alignment
              </h3>
              <p className="text-small text-muted leading-relaxed">
                Campaigns are evaluated according to their actual business goal rather than uniform vanity metrics.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
