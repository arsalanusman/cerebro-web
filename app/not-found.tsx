import React from "react";
import Pg404V2 from "@/components/system/Pg404V2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page not found - Cerebro",
  description: "This page doesn’t exist or has moved.",
  path: "/404",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Page not found","path":"/404"}]}
      />
      <Pg404V2 />
    </>
  );
}
