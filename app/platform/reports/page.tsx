import React from "react";
import PlatReportsV2 from "@/components/platform/PlatReportsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reports - Reports that build and send themselves",
  description: "Build once, schedule as PDF, or sync to Google Sheets and Looker Studio.",
  path: "/platform/reports",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Platform","path":"/features"},{"name":"Reports","path":"/platform/reports"}]}
      />
      <PlatReportsV2 />
    </>
  );
}
