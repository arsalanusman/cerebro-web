import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import InteractiveWidgetBuilder from "@/components/platform/InteractiveWidgetBuilder";

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
            <div>
              <div className="max-w-2xl text-left mb-8">
                <p className="text-small font-medium text-brand mb-2.5">
                  Modular Widget System
                </p>
                <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink">
                  Build custom widgets in four interactive steps.
                </h3>
                <p className="mt-3 text-body text-muted leading-relaxed">
                  Select your visual chart format, bind advertising metrics across Meta, Google, and TikTok, define benchmark rules, and preview the live rendered card before adding it to your reporting deck.
                </p>
              </div>
              <InteractiveWidgetBuilder />
            </div>

            <FeatureRow
              reverse={true}
              eyebrow="Automated Distribution"
              title="Deliver reliable reports on a set schedule."
              description="Configure automated report dispatches weekly or monthly. Clients receive clean, secure report links or attachments directly in their inbox without your team having to log in and export files."
              points={[
                "Scheduled recurring email deliveries to client distribution lists",
                "Password-protected interactive client links with role access controls",
                "Historical report archive preserved automatically for every workspace",
              ]}
              productShot={{
                src: "/product/cerebro-team-access.png",
                alt: "Workspace role permissions, client access controls, and report distribution management",
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
