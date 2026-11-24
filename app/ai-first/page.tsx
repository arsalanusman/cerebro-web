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
  title: "AI first: Your AI analyst for every ad platform | Cerebro dNano",
  description:
    "Cerebro AI brings in data from any marketing platform or sheet, cleans and standardizes it, flags what's wrong, builds your reports, and answers your questions with the numbers behind them.",
  path: "/ai-first",
});

export default function AiFirstPage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      {/* AI-first Flagship Homepage */}
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
