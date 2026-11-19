import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData.fmcg.seoTitle,
  description: solutionsData.fmcg.seoDesc,
  path: "/industries/fmcg",
});

export default function FMCGPage() {
  return <SolutionPage data={solutionsData.fmcg} />;
}
