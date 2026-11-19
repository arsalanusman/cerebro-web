import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { BentoGrid, BentoCard } from "@/components/ui/Bento";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ask Cerebro AI analyst",
  description:
    "An embedded AI analyst built directly into your reporting workspace. Ask questions in plain language about your connected ad data.",
  path: "/ask-cerebro",
});

export default function AskCerebroPage() {
  const breadcrumbs = [
    { label: "Platform", href: "/features" },
    { label: "Ask Cerebro", href: "/ask-cerebro" },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Platform", path: "/features" },
          { name: "Ask Cerebro", path: "/ask-cerebro" },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Workflow 05 · Intelligent Analysis"
        title="Ask questions about your advertising data."
        lead="Ask Cerebro is not a conversational chatbot. It is a specialized analytical assistant engineered directly on top of your verified advertising data foundation across Meta Ads, Google Ads and TikTok Ads."
        productShot={{
          src: "/product/ask-why-cpa.png",
          alt: "Ask Cerebro interface analyzing why campaign acquisition cost changed",
          priority: true,
        }}
      />

      <Section bg="white">
        <Container>
          <div className="space-y-24">
            <FeatureRow
              eyebrow="Grounded in Real Metrics"
              title="Answers derived strictly from your authenticated accounts."
              description="Generic chatbots hallucinate facts when asked complex mathematical questions. Ask Cerebro translates your natural language queries into exact database queries against your live advertising warehouse, ensuring every answer is mathematically verifiable."
              points={[
                "Precise numerical responses with exact channel attributions",
                "Direct citations back to specific campaigns, ad sets, and timeframes",
                "Zero third-party training: your proprietary marketing data remains strictly private",
              ]}
              productShot={{
                src: "/product/ask-scope.png",
                alt: "Ask Cerebro scoping analysis to specific channel campaigns",
              }}
            />

            <FeatureRow
              reverse={true}
              eyebrow="Root Cause Diagnostics"
              title="Uncover why performance shifted, not just what shifted."
              description="Ask why blended CPA spiked over the weekend or which creative variant caused conversion drops. Ask Cerebro analyzes frequency, audience fatigue, and auction competition across your channels to diagnose the underlying causes."
              points={[
                "Instant anomaly detection across spend, impressions, and clicks",
                "Creative exhaustion alerts before performance deteriorates",
                "Actionable recommendations prioritized by potential budget impact",
              ]}
              productShot={{
                src: "/product/ask-fixes.png",
                alt: "Ask Cerebro recommending tactical adjustments based on performance data",
              }}
            />
          </div>

          <div className="mt-24 pt-16 border-t border-border">
            <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink h2-wrap-22ch mb-4 text-left">
              Example analytical queries
            </h2>
            <p className="text-body-lg text-muted max-prose-72ch mb-12 text-left">
              Ask Cerebro processes questions across your full cross-channel marketing hierarchy:
            </p>

            <BentoGrid>
              <BentoCard
                title="Channel comparison"
                description="&ldquo;Which platform delivered the lowest cost per purchase over the last 14 days?&rdquo;"
                badge="Efficiency"
                imageSrc="/product/ask-scope.png"
                imageAlt="Channel comparison query in Ask Cerebro"
                colSpan="col-span-12 lg:col-span-6"
              />
              <BentoCard
                title="Audience saturation"
                description="&ldquo;Is audience fatigue increasing frequency on our Meta retargeting ad sets?&rdquo;"
                badge="Creative Health"
                imageSrc="/product/ask-audience.png"
                imageAlt="Audience fatigue analysis in Ask Cerebro"
                colSpan="col-span-12 lg:col-span-6"
              />
            </BentoGrid>
          </div>

          <RelatedLinks
            title="Explore the full workflow"
            links={[
              {
                title: "Data integration foundation",
                description: "Learn how advertising data is ingested to power Ask Cerebro.",
                href: "/platform/data-integration",
              },
              {
                title: "Objective-based reporting",
                description: "How campaigns are classified to ensure accurate metric interpretation.",
                href: "/platform/objective-reporting",
              },
              {
                title: "Enterprise security architecture",
                description: "Details on private data storage, tenant isolation, and encryption.",
                href: "/security",
              },
            ]}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
