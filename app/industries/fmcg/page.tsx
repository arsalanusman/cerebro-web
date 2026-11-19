import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketing intelligence for FMCG brands",
  description:
    "Brand reach, video view retention, and audience awareness measurement for consumer packaged goods enterprises.",
  path: "/industries/fmcg",
});

export default function FMCGIndustryPage() {
  const breadcrumbs = [
    { label: "Industries", href: "/features" },
    { label: "FMCG", href: "/industries/fmcg" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Industries", path: "/features" },
          { name: "FMCG", path: "/industries/fmcg" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industries · Consumer Goods"
        title="Reach and frequency measurement for FMCG brands."
        lead="Evaluate digital video campaigns across Meta, Google and TikTok on their true consumer marketing goals: verified reach, target CPM, and video completion rates."
        productShot={{
          src: "/product/dashboard.png",
          alt: "FMCG brand reach and frequency reporting dashboard",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <FeatureRow
            eyebrow="Upper-Funnel Rigor"
            title="Measure brand awareness without vanity distortion."
            description="FMCG campaigns prioritize wide consumer reach and high recall. Cerebro tracks true cross-channel CPMs and view-through metrics, helping brand managers allocate budgets to the most cost-effective audience channels."
            points={[
              "Unified CPM and reach calculation across TikTok video and YouTube ads",
              "Creative variant comparison for video length and hook retention",
              "Automated brand review decks prepared for marketing directors",
            ]}
            productShot={{
              src: "/product/objective-filter.png",
              alt: "Awareness-specific campaign metrics for consumer goods",
            }}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
