import React from "react";
import PgAboutV2 from "@/components/about/PgAboutV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About - We build the AI data engine for paid media",
  description: "Built by engineers and paid media practitioners in Karachi, Pakistan.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"About","path":"/about"}]}
      />
      <PgAboutV2 />
    </>
  );
}
