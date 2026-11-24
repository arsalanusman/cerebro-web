import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData.brands.seoTitle,
  description: solutionsData.brands.seoDesc,
  path: "/solutions/brands",
});

export default function BrandsPage() {
  return <SolutionPage data={solutionsData.brands} />;
}
