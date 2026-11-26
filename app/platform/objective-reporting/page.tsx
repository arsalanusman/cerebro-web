import React from "react";
import PlatObjectiveV2 from "@/components/platform/PlatObjectiveV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Objective engine - Judge every campaign by its own goal",
  description: "Cerebro groups campaigns into Awareness, Traffic, Leads and Sales, so averages stop misleading.",
  path: "/platform/objective-reporting",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Platform","path":"/features"},{"name":"Objective engine","path":"/platform/objective-reporting"}]}
      />
      <PlatObjectiveV2 />
    </>
  );
}
