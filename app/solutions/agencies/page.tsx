import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions for digital agencies",
  description:
    "Multi-client workspace isolation, automated reporting delivery, and unified channel governance for media agencies.",
  path: "/solutions/agencies",
});

export default function AgencySolutionsPage() {
  const breadcrumbs = [
    { label: "Solutions", href: "/features" },
    { label: "Agencies", href: "/solutions/agencies" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Solutions", path: "/features" },
          { name: "Agencies", path: "/solutions/agencies" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Solutions · By Team"
        title="Built for digital agencies managing dozens of clients."
        lead="Stop wasting dozens of account hours every Monday pulling CSV exports. Cerebro DNano delivers client-segregated workspaces, automated report scheduling, and unified ad governance."
        productShot={{
          src: "/product/team-access.png",
          alt: "Agency multi-client workspace management and permission controls",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Workspace Segregation"
              title="Separate clients, unified agency control."
              description="Each client brand operates in its own logically isolated workspace with dedicated ad channel connections and role-based access. Agency media buyers access only the accounts they manage."
              points={[
                "Isolated data partitions for complete client confidentiality",
                "Cross-client executive roll-ups for agency leadership",
                "Granular team permissions and audit trail logging",
              ]}
              productShot={{
                src: "/product/client-dashboard.png",
                alt: "Multi-client overview dashboard for agency managers",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="White-Label Reporting"
              title="Deliver branded executive reports automatically."
              description="Assemble professional reports matching your agency's branding or your client's visual identity. Schedule automated weekly or monthly dispatches with zero manual preparation."
              points={[
                "Bespoke widget selection per client contract",
                "Automatic delivery directly to client stakeholder inboxes",
                "Historical record archive accessible anytime",
              ]}
              productShot={{
                src: "/product/shared-widgets.png",
                alt: "Agency report widget builder and branded layout preview",
              }}
            />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
