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
  title: "Objective-based campaign reporting",
  description:
    "Judge each campaign by its specific goal instead of averaging mismatched metrics together.",
  path: "/platform/objective-reporting",
});

export default function ObjectiveReportingPage() {
  const breadcrumbs = [
    { label: "Platform", href: "/features" },
    { label: "Objective Reporting", href: "/platform/objective-reporting" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Platform", path: "/features" },
          { name: "Objective Reporting", path: "/platform/objective-reporting" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Workflow 02 · Meaningful Measurement"
        title="Judge each campaign by its own goal."
        lead="Comparing a top-of-funnel reach campaign on CPA with a bottom-funnel e-commerce checkout campaign on CPM leads to bad decisions. Cerebro classifies campaigns by their intended objective so performance is measured fairly."
        productShot={{
          src: "/product/objective-filter.png",
          alt: "Objective-based reporting interface showing campaigns filtered by business goal",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Intelligent Classification"
              title="Awareness, consideration, and conversion tiers."
              description="Cerebro reads campaign configurations across Meta, Google, and TikTok to automatically group campaigns into consistent objective tiers. You can compare how different channels contribute to brand reach versus immediate sales."
              points={[
                "Awareness campaigns evaluated on Reach, Impressions, and CPM",
                "Traffic and engagement evaluated on Link Clicks, CTR, and CPC",
                "Conversion campaigns evaluated strictly on Cost Per Acquisition (CPA) and ROAS",
              ]}
              productShot={{
                src: "/product/dashboard.png",
                alt: "Dashboard breakdown comparing performance across campaign objectives",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="Cross-Channel Benchmarks"
              title="Apples-to-apples channel evaluation."
              description="When all three platforms run conversion campaigns simultaneously, Cerebro surfaces their true relative acquisition costs side by side. See where budget shifts will generate the highest marginal return."
              points={[
                "Normalized CPA comparisons without manual spreadsheet formulas",
                "Identification of fatigued ad sets driving up blended acquisition costs",
                "Clear separation of brand defense spend from new customer acquisition",
              ]}
              productShot={{
                src: "/product/client-dashboard.png",
                alt: "Client portfolio view with channel level objective breakdowns",
              }}
            />
          </div>

          <RelatedLinks
            title="Next in workflow"
            links={[
              {
                title: "Dashboards and drill-down",
                description: "Inspect performance from top-level portfolio totals down to single creatives.",
                href: "/platform/dashboards",
              },
              {
                title: "Custom report builder",
                description: "Export clean client decks and executive summaries based on objective metrics.",
                href: "/platform/reports",
              },
              {
                title: "Ask Cerebro AI analyst",
                description: "Ask natural questions about campaign anomalies and performance shifts.",
                href: "/ask-cerebro",
              },
            ]}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
