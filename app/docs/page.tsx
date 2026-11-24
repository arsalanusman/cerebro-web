import React from "react";
import PgDocsV2 from "@/components/docs/PgDocsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Docs - Set up and use Cerebro",
  description: "Documentation for workspace setup, native connectors, sheets, dashboards and reports.",
  path: "/docs",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Docs","path":"/docs"}]}
      />
      <PgDocsV2 />
    </>
  );
}
