import React from "react";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { buildMetadata } from "@/lib/seo";
import HeroSection from "@/components/home/HeroSection";
import VideoExplainer from "@/components/home/VideoExplainer";
import AiDataEngine from "@/components/home/AiDataEngine";
import AskCerebroSection from "@/components/home/AskCerebroSection";
import ObjectiveToggle from "@/components/home/ObjectiveToggle";
import BuildSection from "@/components/home/BuildSection";
import CompareTable from "@/components/home/CompareTable";
import SolutionsSection from "@/components/home/SolutionsSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import TrustSection from "@/components/home/TrustSection";

export const metadata = buildMetadata({
  title: "Bring in any marketing data. Ask it anything | Cerebro DNano",
  description:
    "Connect Meta, Google and TikTok, add a connector for any other platform, or upload a sheet. Cerebro's AI cleans and standardizes it, builds your reports, and answers your questions with the numbers behind them.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      {/* Data-forward Flagship Homepage */}
      <HeroSection variant="option-1" />
      {/* Video Explainer Showcase */}
      <VideoExplainer />
      <AiDataEngine variant="option-1" />
      <AskCerebroSection />
      <ObjectiveToggle variant="option-1" />
      <BuildSection variant="option-1" />
      <CompareTable />
      <SolutionsSection />
      <IntegrationsSection />
      <TrustSection />
    </>
  );
}
