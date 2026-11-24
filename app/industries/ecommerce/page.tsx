import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData.ecommerce.seoTitle,
  description: solutionsData.ecommerce.seoDesc,
  path: "/industries/ecommerce",
});

export default function EcommercePage() {
  return <SolutionPage data={solutionsData.ecommerce} />;
}
