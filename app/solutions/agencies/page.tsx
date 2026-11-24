import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData.agencies.seoTitle,
  description: solutionsData.agencies.seoDesc,
  path: "/solutions/agencies",
});

export default function AgenciesPage() {
  return <SolutionPage data={solutionsData.agencies} />;
}
