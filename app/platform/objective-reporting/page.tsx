import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroObjectiveVisual from "@/components/platform/HeroObjectiveVisual";
import ObjectiveCapabilitiesSection from "@/components/platform/ObjectiveCapabilitiesSection";
import ObjectiveStatsBanner from "@/components/platform/ObjectiveStatsBanner";
import ObjectiveBenchmarkExplorer from "@/components/platform/ObjectiveBenchmarkExplorer";
import PowerEveryReportSection from "@/components/platform/PowerEveryReportSection";
import ClientTestimonialSection from "@/components/platform/ClientTestimonialSection";
import StrategicAdvantageGrid from "@/components/platform/StrategicAdvantageGrid";
import UnifiedDataResourcesSection from "@/components/platform/UnifiedDataResourcesSection";
import ProblemSolverSection from "@/components/platform/ProblemSolverSection";
import HighImpactFinalCTA from "@/components/platform/HighImpactFinalCTA";
import { ArrowRight, Target, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "Objective-based campaign reporting",
  description:
    "Judge each campaign strictly by its intended goal instead of averaging mismatched metrics together. Normalize Awareness, Traffic, Leads, and Sales across Meta, Google, and TikTok.",
  path: "/platform/objective-reporting",
});

export default function ObjectiveReportingPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/features" },
          { name: "Objective Reporting", path: "/platform/objective-reporting" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 text-left space-y-6">
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs font-semibold tracking-wide uppercase">
                <Target className="w-3.5 h-3.5" />
                <span>Meaningful Measurement</span>
                <span className="text-brand/40">·</span>
                <span className="text-muted">Workflow 02</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink tracking-tight leading-[1.08]">
                Judge each campaign by its own goal
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Comparing a top-of-funnel reach campaign on CPA with a bottom-funnel e-commerce checkout campaign on CPM leads to bad decisions. Cerebro classifies campaigns by their intended objective so performance is measured fairly.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all duration-200"
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/platform/dashboards"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-2 text-ink border border-border font-semibold text-sm transition-all duration-200"
                >
                  Explore dashboards
                </Link>
              </div>

              {/* Social Proof Sub-tag */}
              <div className="pt-2 flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1.5 font-medium text-ink">
                  <Sparkles className="w-3.5 h-3.5 text-brand" />
                  Fair cross-channel benchmarks
                </span>
                <span>·</span>
                <span>Zero distorted blended averages</span>
              </div>
            </div>

            {/* Right Column: Hero Objective Visual */}
            <div className="lg:col-span-6 w-full">
              <HeroObjectiveVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section bg="white" className="!py-16">
        <Container>
          {/* Section 2: Three Core Objective Normalization Capabilities */}
          <ObjectiveCapabilitiesSection />

          {/* Section 3: Dark Stats / Metric Callout Section */}
          <ObjectiveStatsBanner />

          {/* Section 4: Interactive Deep Dive Explorer */}
          <div className="py-16 text-left">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Interactive Benchmarking
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
                Apples-to-apples channel and product evaluation
              </h2>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Evaluate cross-channel allocations side by side without distorted averages. Switch between product investment, normalized campaign efficiency lines, and 30-day delivery pacing.
              </p>
            </div>
            <ObjectiveBenchmarkExplorer />
          </div>

          {/* Section 5: Connect once. Power every report. */}
          <PowerEveryReportSection />

          {/* Section 6: What our clients say + Trust Logos */}
          <ClientTestimonialSection />

          {/* Section 7: Transform scattered data into strategic advantage */}
          <StrategicAdvantageGrid />

          {/* Section 8: How growing companies transform with unified data */}
          <UnifiedDataResourcesSection />

          {/* Section 9: What problem are you looking to solve? */}
          <ProblemSolverSection />

          {/* Section 10: High-Impact Dark Final CTA */}
          <HighImpactFinalCTA />
        </Container>
      </Section>
    </>
  );
}
