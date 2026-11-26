import React from "react";
import IndTelecomV2 from "@/components/industries/IndTelecomV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for telecom - Always-on campaigns, always in view",
  description: "High-volume paid media reporting across prepaid, postpaid, and enterprise services.",
  path: "/industries/telecom",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Industries","path":"/industries/telecom"},{"name":"Telecom","path":"/industries/telecom"}]}
      />
      <IndTelecomV2 />
    </>
  );
}
