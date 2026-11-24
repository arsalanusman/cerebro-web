import React from "react";
import SolutionPage from "@/components/solutions/SolutionPage";
import { solutionsData } from "@/content/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: solutionsData["banking-and-finance"].seoTitle,
  description: solutionsData["banking-and-finance"].seoDesc,
  path: "/industries/banking-and-finance",
});

export default function BankingAndFinancePage() {
  return <SolutionPage data={solutionsData["banking-and-finance"]} />;
}
