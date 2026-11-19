import React from "react";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import AiStepsGrid from "@/components/home/AiStepsGrid";
import AiDataEngine from "@/components/home/AiDataEngine";
import AskCerebroSection from "@/components/home/AskCerebroSection";
import ObjectiveToggle from "@/components/home/ObjectiveToggle";
import BuildSection from "@/components/home/BuildSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";

export const metadata = buildMetadata({
  title: "Ad performance analytics and reporting | Cerebro DNano",
  description:
    "Bring Meta Ads, Google Ads and TikTok Ads into one consistent view, judge every campaign by its goal, and ask questions in plain language.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      {/* Option 2 (AI-forward Flagship) */}
      <HeroSection variant="option-2" />
      <AiStepsGrid />
      <AiDataEngine variant="option-2" />
      <AskCerebroSection />
      <ObjectiveToggle variant="option-2" />
      <BuildSection variant="option-2" />
      <SolutionsSection />
      <IntegrationsSection />
    </>
  );
}
