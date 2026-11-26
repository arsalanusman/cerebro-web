import React from "react";
import IndFMCGV2 from "@/components/industries/IndFMCGV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for FMCG - Every brand judged by the right goal",
  description: "Multi-brand portfolio reporting with awareness and sales metrics clearly separated.",
  path: "/industries/fmcg",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Industries","path":"/industries/fmcg"},{"name":"FMCG","path":"/industries/fmcg"}]}
      />
      <IndFMCGV2 />
    </>
  );
}
