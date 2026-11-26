import React from "react";
import PgDemoV2 from "@/components/demo/PgDemoV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a demo - See Cerebro on your own campaigns",
  description: "A personal walkthrough with your platforms, your data, and your questions.",
  path: "/demo",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Book a demo","path":"/demo"}]}
      />
      <PgDemoV2 />
    </>
  );
}
