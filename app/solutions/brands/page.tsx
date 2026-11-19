import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions for in-house brands",
  description:
    "Unified marketing visibility and objective-based reporting for internal marketing and growth teams.",
  path: "/solutions/brands",
});

export default function BrandSolutionsPage() {
  const breadcrumbs = [
    { label: "Solutions", href: "/features" },
    { label: "Brands", href: "/solutions/brands" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Solutions", path: "/features" },
          { name: "Brands", path: "/solutions/brands" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Solutions · By Team"
        title="Complete cross-channel visibility for in-house marketing teams."
        lead="Break down silos between your paid social and paid search specialists. Cerebro gives marketing leaders a single canonical source of truth for all digital advertising spend and performance."
        productShot={{
          src: "/product/dashboard.png",
          alt: "In-house brand executive marketing dashboard",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Internal Alignment"
              title="Single source of truth across channels."
              description="Eliminate conflicting reports between growth marketers, agency partners, and executive leadership. Cerebro pulls raw campaign records from Meta, Google, and TikTok into one shared ledger."
              points={[
                "Unbiased cross-channel performance comparisons",
                "Instant tracking of blended CPA and overall return on ad spend",
                "Direct answers to leadership questions using Ask Cerebro",
              ]}
              productShot={{
                src: "/product/client-dashboard.png",
                alt: "Consolidated brand dashboard showing spend pacing",
              }}
            />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
