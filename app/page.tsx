import React from "react";
import { SoftwareApplicationJsonLd } from "@/components/seo/SoftwareApplicationJsonLd";
import { buildMetadata } from "@/lib/seo";
import { HomeV2 } from "@/components/home/HomeV2";

export const metadata = buildMetadata({
  title: "Your AI analyst for every ad platform | Cerebro DNano",
  description:
    "Bring in any marketing data. Cerebro AI cleans it, reports on it and answers your questions.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      <HomeV2 />
    </>
  );
}
