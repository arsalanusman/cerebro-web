import React from "react";
import DocsClient from "@/components/docs/DocsClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Documentation & Product Guide | Cerebro DNano",
  description:
    "Comprehensive guides for connecting ad platforms, uploading custom sheets, building objective-based reports, and using Ask Cerebro.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Docs", path: "/docs" },
        ]}
      />
      <DocsClient initialSlug="getting-started" />
    </>
  );
}
