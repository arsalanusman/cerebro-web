import React from "react";
import SolAgenciesV2 from "@/components/solutions/SolAgenciesV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cerebro for agencies - Every client, one workspace",
  description: "White-label reporting, client permissions, and instant answers across every account you manage.",
  path: "/solutions/agencies",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Solutions","path":"/solutions/agencies"},{"name":"Agencies","path":"/solutions/agencies"}]}
      />
      <SolAgenciesV2 />
    </>
  );
}
