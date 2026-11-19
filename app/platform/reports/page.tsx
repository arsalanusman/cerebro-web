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
  title: "Automated marketing report builder",
  description:
    "Assemble customized, scheduled reports with modular widgets, objective tables, and client delivery.",
  path: "/platform/reports",
});

export default function ReportsPage() {
  const breadcrumbs = [
    { label: "Platform", href: "/features" },
    { label: "Reports", href: "/platform/reports" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Platform", path: "/features" },
          { name: "Reports", path: "/platform/reports" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Workflow 04 · Communication & Delivery"
        title="Widgets, templates and exports."
        lead="Transform live campaign metrics into presentation-ready reports for clients and leadership. Schedule recurring delivery and eliminate manual slide building forever."
        productShot={{
          src: "/product/report-builder.png",
          alt: "Modular report widget builder and custom layout interface",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Modular Widget System"
              title="Drag and drop charts, tables, and KPI summaries."
              description="Construct bespoke reporting templates for different stakeholders. Combine high-level spend pacing for executives with detailed channel conversion matrices for media buyers."
              points={[
                "Reusable widget library across client workspaces",
                "Custom metric calculations and formatted currency displays",
                "Interactive web reports or print-ready PDF exports",
              ]}
              productShot={{
                src: "/product/shared-widgets.png",
                alt: "Shared reporting widget library for agency teams",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="Automated Distribution"
              title="Deliver reliable reports on a set schedule."
              description="Configure automated report dispatches weekly or monthly. Clients receive clean, secure report links or attachments directly in their inbox without your team having to log in and export files."
              points={[
                "Scheduled recurring email deliveries to client distribution lists",
                "Password-protected interactive client links",
                "Historical report archive preserved automatically",
              ]}
              productShot={{
                src: "/product/client-dashboard.png",
                alt: "Client-facing report view showing clean formatted metrics",
              }}
            />
          </div>

          <RelatedLinks
            title="Next in workflow"
            links={[
              {
                title: "Ask Cerebro AI analyst",
                description: "Ask natural questions about report anomalies and performance variances.",
                href: "/ask-cerebro",
              },
              {
                title: "Agency solutions",
                description: "Learn how agencies use Cerebro to scale client reporting workflows.",
                href: "/solutions/agencies",
              },
              {
                title: "Data integration overview",
                description: "Review how data is ingested and consolidated before report generation.",
                href: "/platform/data-integration",
              },
            ]}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
