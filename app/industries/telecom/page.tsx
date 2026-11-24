import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData.telecom.seoTitle,
  description: solutionsData.telecom.seoDesc,
  path: "/industries/telecom",
});

export default function TelecomPage() {
  return <SolutionPage data={solutionsData.telecom} />;
}
