import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data integration and ingestion",
  description:
    "Connect Meta Ads, Google Ads and TikTok Ads via authenticated APIs to consolidate raw campaign data automatically.",
  path: "/platform/data-integration",
});

export default function DataIntegrationPage() {
  const breadcrumbs = [
    { label: "Platform", href: "/features" },
    { label: "Data Integration", href: "/platform/data-integration" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Platform", path: "/features" },
          { name: "Data Integration", path: "/platform/data-integration" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Workflow 01 · Data Foundation"
        title="Connect and consolidate every ad platform."
        lead="Stop assembling weekly spreadsheets by hand. Cerebro connects directly to Meta, Google, and TikTok APIs to ingest, normalize, and store your marketing records in one reliable schema."
        productShot={{
          src: "/product/connections.png",
          alt: "Cerebro data integration and channel connection interface",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="flex items-center gap-3 mb-12 flex-wrap text-left">
            <span className="text-small font-medium text-muted">
              Live API connections:
            </span>
            <PlatformBadge platform="Meta Ads" size="md" />
            <PlatformBadge platform="Google Ads" size="md" />
            <PlatformBadge platform="TikTok Ads" size="md" />
          </div>

          <div className="space-y-24">
            <FeatureRow
              eyebrow="Direct Authentication"
              title="Official APIs with read-only OAuth."
              description="Authenticate your advertising accounts in seconds. Cerebro requires only read-level permissions to inspect campaign data, spend figures, and engagement metrics without touching your active ads."
              points={[
                "Zero browser scraping or brittle password logins",
                "Automated token refresh and expiration monitoring",
                "Instant multi-account connection for agency portfolios",
              ]}
              productShot={{
                src: "/product/data-health.png",
                alt: "Data pipeline sync health and verification status screen",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="Standardized Schema"
              title="Harmonized metrics across channels."
              description="Meta calls it a link click. Google calls it a click. TikTok calls it a destination click. Cerebro normalizes these definitions into a unified metric model so you can evaluate true totals without ambiguity."
              points={[
                "Automatic currency conversion and spend reconciliation",
                "Consistent date, timezone, and attribution window mapping",
                "Elimination of duplicate records across recurring sync cycles",
              ]}
              productShot={{
                src: "/product/dashboard.png",
                alt: "Executive dashboard showing unified cross-channel totals",
              }}
            />
          </div>

          <RelatedLinks
            title="Next in workflow"
            links={[
              {
                title: "Objective-based reporting",
                description: "Categorize campaigns by goal to avoid misleading uniform metric averages.",
                href: "/platform/objective-reporting",
              },
              {
                title: "Cross-channel dashboards",
                description: "Drill down from high-level totals into ad set and creative level metrics.",
                href: "/platform/dashboards",
              },
              {
                title: "Platform security architecture",
                description: "Learn how customer data is encrypted, segregated, and protected.",
                href: "/security",
              },
            ]}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
