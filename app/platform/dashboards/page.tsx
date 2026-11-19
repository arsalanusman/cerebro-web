import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cross-channel advertising dashboards",
  description:
    "Drill down from executive portfolio overviews to granular campaign, ad set, and creative performance.",
  path: "/platform/dashboards",
});

export default function DashboardsPage() {
  const breadcrumbs = [
    { label: "Platform", href: "/features" },
    { label: "Dashboards", href: "/platform/dashboards" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Platform", path: "/features" },
          { name: "Dashboards", path: "/platform/dashboards" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Workflow 03 · Visibility & Exploration"
        title="From high-level overview to a single ad."
        lead="Navigate through all four levels of your advertising structure without switching browser tabs. Cerebro provides continuous drill-down from channel summaries to individual creative assets."
        productShot={{
          src: "/product/dashboard.png",
          alt: "Hierarchy drill-down dashboard starting at platform level",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Portfolio Overview"
              title="See total marketing spend and return in real time."
              description="Gain immediate operational clarity across Meta Ads, Google Ads and TikTok Ads. Executive metric cards highlight spend pace, blended CPA, click-through rates, and conversion volumes in a single view."
              points={[
                "Combined spend pacing vs monthly marketing budgets",
                "Instant identification of channel efficiency outliers",
                "Time-period comparisons with previous 7, 30, and 90 days",
              ]}
              productShot={{
                src: "/product/dashboard.png",
                alt: "Executive dashboard showing high-level cross-channel metrics",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="Granular Hierarchy Drill-Down"
              title="Inspect campaigns, ad sets, and creative assets."
              description="Click directly from a high-level channel card into underlying campaigns, then down to ad sets, and finally to specific creative variations. Discover exactly which headlines and videos are driving performance."
              points={[
                "Platform to Campaign level aggregation",
                "Ad set audience and placement breakdown",
                "Creative asset level metrics with direct CTR and conversion tracking",
              ]}
              productShot={{
                src: "/product/hierarchy-ad.png",
                alt: "Detailed creative-level ad performance inspection screen",
              }}
            />
          </div>

          <RelatedLinks
            title="Next in workflow"
            links={[
              {
                title: "Report builder and exports",
                description: "Package your dashboard widgets into scheduled client decks and reports.",
                href: "/platform/reports",
              },
              {
                title: "Ask Cerebro AI analyst",
                description: "Query your campaign data in plain language to uncover hidden trends.",
                href: "/ask-cerebro",
              },
              {
                title: "Agency solutions",
                description: "Discover how multi-client agencies manage reporting across dozens of accounts.",
                href: "/solutions/agencies",
              },
            ]}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
