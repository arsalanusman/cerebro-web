import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroConnectorVisual from "@/components/platform/HeroConnectorVisual";
import FlexibleIngestionSection from "@/components/platform/FlexibleIngestionSection";
import StatsBanner from "@/components/platform/StatsBanner";
import PowerEveryReportSection from "@/components/platform/PowerEveryReportSection";
import ClientTestimonialSection from "@/components/platform/ClientTestimonialSection";
import UniteDataDeepDiveSection from "@/components/platform/UniteDataDeepDiveSection";
import StrategicAdvantageGrid from "@/components/platform/StrategicAdvantageGrid";
import UnifiedDataResourcesSection from "@/components/platform/UnifiedDataResourcesSection";
import ProblemSolverSection from "@/components/platform/ProblemSolverSection";
import HighImpactFinalCTA from "@/components/platform/HighImpactFinalCTA";
import AnimatedText from "@/components/motion/AnimatedText";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowRight, Cable, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "Data integration and ingestion",
  description:
    "Connect your entire marketing ecosystem. Ingest, normalize, and store records from Meta Ads, Google Ads, TikTok Ads, DV360, and custom spreadsheets into a unified schema.",
  path: "/platform/data-integration",
});

export default function DataIntegrationPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Data Integration", path: "/platform/data-integration" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Category Eyebrow Pill */}
              <ScrollReveal direction="down" distance={16} delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs font-semibold tracking-wide uppercase">
                  <Cable className="w-3.5 h-3.5" />
                  <span>Data Integration</span>
                  <span className="text-brand/40">·</span>
                  <span className="text-muted">Workflow 01</span>
                </div>
              </ScrollReveal>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink tracking-tight leading-[1.08]">
                <AnimatedText text="Connect your entire marketing ecosystem" delay={0.15} />
              </h1>

              {/* Subtitle */}
              <ScrollReveal direction="up" distance={20} delay={0.3}>
                <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                  Cerebro pulls campaign data, spend figures, and engagement metrics directly from official ad APIs, webhooks, and spreadsheets into a clean, query-ready marketing data warehouse.
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal direction="up" distance={24} delay={0.45}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <MagneticButton strength={0.2}>
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Start free trial
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <Link
                      href="/integrations"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-2 text-ink border border-border font-semibold text-sm transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Explore 50+ connectors
                    </Link>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              {/* Social Proof Sub-tag */}
              <ScrollReveal direction="up" distance={16} delay={0.6}>
                <div className="pt-2 flex items-center gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1.5 font-medium text-ink">
                    <Sparkles className="w-3.5 h-3.5 text-brand" />
                    Connects in under 2 minutes
                  </span>
                  <span>·</span>
                  <span>Official read-only OAuth APIs</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero Connector Visual */}
            <div className="lg:col-span-6 w-full">
              <ScrollReveal direction="zoom" distance={24} delay={0.3} duration={0.8}>
                <HeroConnectorVisual />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section bg="white" className="!py-16">
        <Container>
          {/* Section 2: Three flexible ways to bring in your data */}
          <FlexibleIngestionSection />

          {/* Section 3: Dark Stats / Metric Callout Section */}
          <StatsBanner />

          {/* Section 4: Connect once. Power every report. */}
          <PowerEveryReportSection />

          {/* Section 5: What our clients say + Trust Logos */}
          <ClientTestimonialSection />

          {/* Section 7: Unite all your marketing data (Deep-dive tabs) */}
          <UniteDataDeepDiveSection />

          {/* Section 8: Transform scattered data into strategic advantage */}
          <StrategicAdvantageGrid />

          {/* Section 9: How growing companies transform with unified data */}
          <UnifiedDataResourcesSection />

          {/* Section 10: What problem are you looking to solve? */}
          <ProblemSolverSection />

          {/* Section 11: High-Impact Dark Final CTA */}
          <HighImpactFinalCTA />
        </Container>
      </Section>
    </>
  );
}
