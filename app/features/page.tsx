import React from "react";
import PlatFeaturesV2 from "@/components/platform/PlatFeaturesV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All features - Everything Cerebro does, in one place",
  description: "From bringing data in to answering questions, with AI at every step.",
  path: "/features",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Platform","path":"/features"},{"name":"All features","path":"/features"}]}
      />
      <PlatFeaturesV2 />
    </>
  );
}
