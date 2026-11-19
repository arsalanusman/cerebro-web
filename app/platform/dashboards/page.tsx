import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import InteractiveHierarchyExplorer from "@/components/platform/InteractiveHierarchyExplorer";

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
          src: "/product/dashboard-executive.jpg",
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
                src: "/product/dashboard-executive.jpg",
                alt: "Executive dashboard showing high-level cross-channel metrics and channel mix",
              }}
            />

            <div>
              <div className="max-w-2xl text-left mb-8">
                <p className="text-small font-medium text-brand mb-2.5">
                  Granular Hierarchy Drill-Down
                </p>
                <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink">
                  Inspect campaigns, ad sets, and product-level spend.
                </h3>
                <p className="mt-3 text-body text-muted leading-relaxed">
                  Switch between individual campaign trajectory lines, 30-day baseline spend pacing, commercial product allocations, and the executive portfolio view.
                </p>
              </div>
              <InteractiveHierarchyExplorer />
            </div>
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
