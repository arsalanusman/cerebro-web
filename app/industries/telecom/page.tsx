import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Advertising analytics for telecommunications",
  description:
    "Cross-channel campaign reporting for telecom operators, postpaid acquisitions, and bundle promotions.",
  path: "/industries/telecom",
});

export default function TelecomIndustryPage() {
  const breadcrumbs = [
    { label: "Industries", href: "/features" },
    { label: "Telecom", href: "/industries/telecom" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Industries", path: "/features" },
          { name: "Telecom", path: "/industries/telecom" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industries · Telecommunications"
        title="High-velocity marketing analytics for telecom operators."
        lead="Manage heavy digital ad volumes across prepaid recharges, postpaid line activations, and digital streaming bundles with real-time spend and conversion tracking."
        productShot={{
          src: "/product/dashboard.png",
          alt: "Telecom advertising cross-channel campaign overview",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <FeatureRow
            eyebrow="Rapid Pacing"
            title="Consolidate high-volume campaigns across Meta, Google and TikTok."
            description="Telecom carriers operate fast-paced, multi-tier promotional campaigns. Cerebro aggregates auction data in real time, preventing budget leakage and highlighting top-performing packages."
            points={[
              "Rapid spend tracking across multiple brand lines and sub-brands",
              "Creative fatigue monitoring across high-frequency video spots",
              "Objective separation between SIM acquisition and digital service app downloads",
            ]}
            productShot={{
              src: "/product/client-dashboard.png",
              alt: "Channel breakdown for telecom acquisition packages",
            }}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
