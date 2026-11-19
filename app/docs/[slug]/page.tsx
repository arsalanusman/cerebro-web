import React from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles, getMdxBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const docs = getMdxFiles("docs");
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getMdxBySlug("docs", params.slug);
  if (!doc) {
    return buildMetadata({
      title: "Doc Not Found",
      description: "Documentation not found.",
      path: `/docs/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: doc.title,
    description: doc.description,
    path: `/docs/${doc.slug}`,
  });
}

export default function DocSlugPage({ params }: { params: { slug: string } }) {
  const doc = getMdxBySlug("docs", params.slug);

  if (!doc) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Docs", href: "/docs" },
    { label: doc.title, href: `/docs/${doc.slug}` },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Docs", path: "/docs" },
          { name: doc.title, path: `/docs/${doc.slug}` },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Platform Guide"
        title={doc.title}
        lead={doc.description}
      />

      <article className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl text-left prose prose-slate">
            <div className="text-body text-text leading-relaxed whitespace-pre-line">
              {doc.content}
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
