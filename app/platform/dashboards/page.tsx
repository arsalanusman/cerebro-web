import React from "react";
import PlatDashboardsV2 from "@/components/platform/PlatDashboardsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dashboards - Dashboards your team builds in clicks",
  description: "Widget-based, editable, and drillable to a single ad.",
  path: "/platform/dashboards",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Platform","path":"/features"},{"name":"Dashboards","path":"/platform/dashboards"}]}
      />
      <PlatDashboardsV2 />
    </>
  );
}
