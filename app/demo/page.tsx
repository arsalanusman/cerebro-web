import React from "react";
import DemoClient from "@/components/demo/DemoClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a personalized demo | Cerebro DNano",
  description:
    "See Cerebro AI on your own campaigns. Connect your platforms or load your sheets and ask questions in plain language.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Book a demo", path: "/demo" },
        ]}
      />
      <DemoClient />
    </>
  );
}
