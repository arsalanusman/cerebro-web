import React from "react";
import PlatAskV2 from "@/components/platform/PlatAskV2";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ask Cerebro - Your AI analyst, answering from your data",
  description: "Plain questions. Answers with the numbers behind them.",
  path: "/ask-cerebro",
});

export default function Page() {
  return (
    <>
      <BreadcrumbListJsonLd
        items={[{"name":"Home","path":"/"},{"name":"Ask Cerebro","path":"/ask-cerebro"}]}
      />
      <PlatAskV2 />
    </>
  );
}
