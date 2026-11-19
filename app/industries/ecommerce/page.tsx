import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "E-commerce advertising analytics",
  description:
    "CPA, ROAS, and product conversion tracking across Meta Ads, Google Ads and TikTok Ads.",
  path: "/industries/ecommerce",
});

export default function EcommerceIndustryPage() {
  const breadcrumbs = [
    { label: "Industries", href: "/features" },
    { label: "E-commerce", href: "/industries/ecommerce" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Industries", path: "/features" },
          { name: "E-commerce", path: "/industries/ecommerce" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industries · Digital Commerce"
        title="Direct acquisition tracking for online retailers."
        lead="Stop guessing your blended customer acquisition cost. Cerebro reconciles catalog campaigns, search shopping, and social video ads against verified checkout revenue."
        productShot={{
          src: "/product/dashboard.png",
          alt: "E-commerce sales conversion and return on ad spend dashboard",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <FeatureRow
            eyebrow="Conversion Focus"
            title="Every dollar tied to return on ad spend."
            description="Online merchants need clear, uninflated return numbers. Cerebro groups catalog sales, shopping ads, and retargeting sets so performance marketers can instantly spot runaway acquisition costs."
            points={[
              "Normalized cost-per-acquisition (CPA) across all active channels",
              "Immediate alerts for product sets experiencing sudden drop-offs",
              "Creative fatigue alerts across TikTok Spark Ads and Instagram Reels",
            ]}
            productShot={{
              src: "/product/hierarchy-ad.png",
              alt: "Product level ad performance and conversion tracking",
            }}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
