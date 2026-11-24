import React from "react";
import DocsClient from "@/components/docs/DocsClient";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { docChapters } from "@/content/docs";

export async function generateStaticParams() {
  return docChapters.map((ch) => ({ slug: ch.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const chapter = docChapters.find((ch) => ch.slug === params.slug);
  if (!chapter) {
    return buildMetadata({
      title: "Doc Not Found",
      description: "Documentation page not found.",
      path: `/docs/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${chapter.t} | Cerebro dNano Documentation`,
    description: chapter.intro,
    path: `/docs/${chapter.slug}`,
  });
}

export default function DocSlugPage({ params }: { params: { slug: string } }) {
  const chapter = docChapters.find((ch) => ch.slug === params.slug);

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Docs", path: "/docs" },
          { name: chapter?.t || "Documentation", path: `/docs/${params.slug}` },
        ]}
      />
      <DocsClient initialSlug={params.slug} />
    </>
  );
}
