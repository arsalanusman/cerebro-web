import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Advertising integrations",
  description:
    "Direct API integrations for Meta Ads, Google Ads and TikTok Ads. Consolidate marketing data into a single verified schema.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  const breadcrumbs = [{ label: "Integrations", href: "/integrations" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Integrations", path: "/integrations" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Integrations"
        title="Direct connections to the platforms you use."
        lead="Cerebro DNano integrates natively with the three primary digital advertising networks via verified, authenticated APIs."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Meta Ads */}
            <div className="p-8 rounded-card border border-border bg-white flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <PlatformBadge platform="Meta Ads" size="md" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-ink mb-2">
                  Meta Ads
                </h3>
                <p className="text-small text-muted mb-6 leading-relaxed">
                  Connect Facebook and Instagram advertising accounts. Ingest campaign hierarchy, spend, impressions, link clicks, video metrics, and standard conversion events.
                </p>
                <ul className="space-y-2.5 text-small text-text">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Facebook & Instagram Feed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Stories, Reels & Explore</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Custom Conversion mapping</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-caption font-semibold text-positive bg-positive/10 px-2.5 py-1 rounded-full">
                  Live API Integration
                </span>
              </div>
            </div>

            {/* Google Ads */}
            <div className="p-8 rounded-card border border-border bg-white flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <PlatformBadge platform="Google Ads" size="md" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-ink mb-2">
                  Google Ads
                </h3>
                <p className="text-small text-muted mb-6 leading-relaxed">
                  Synchronize Google Search, Performance Max, Display, and YouTube campaigns. Pull cost, impressions, clicks, conversions, and target CPA metrics.
                </p>
                <ul className="space-y-2.5 text-small text-text">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Search & Shopping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Performance Max (PMax)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>YouTube & Display Network</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-caption font-semibold text-positive bg-positive/10 px-2.5 py-1 rounded-full">
                  Live API Integration
                </span>
              </div>
            </div>

            {/* TikTok Ads */}
            <div className="p-8 rounded-card border border-border bg-white flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <PlatformBadge platform="TikTok Ads" size="md" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-ink mb-2">
                  TikTok Ads
                </h3>
                <p className="text-small text-muted mb-6 leading-relaxed">
                  Monitor TikTok for Business ad accounts. Track video views, engagement rates, destination clicks, CPA, and campaign return across auction creatives.
                </p>
                <ul className="space-y-2.5 text-small text-text">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>In-Feed Auction Ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Spark Ads tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>Pixel and Web event syncing</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-caption font-semibold text-positive bg-positive/10 px-2.5 py-1 rounded-full">
                  Live API Integration
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
