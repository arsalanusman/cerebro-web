import React from "react";
import SolBrandsV2 from "@/components/solutions/SolBrandsV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for brands - One true view of paid media",
  description: "All your channels, sales data and creative results unified in one AI data engine.",
  path: "/solutions/brands",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Solutions","path":"/solutions/brands"},{"name":"Brands","path":"/solutions/brands"}]}
      />
      <SolBrandsV2 />
    </>
  );
}
