import React from "react";
import { notFound } from "next/navigation";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import PgArticleV2 from "@/components/blog/PgArticleV2";
import PgArticle2V2 from "@/components/blog/PgArticle2V2";

export async function generateStaticParams() {
  return [
    { slug: "blended-roas-vs-platform-roas" },
    { slug: "understanding-objective-based-ad-reporting" },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (params.slug === "blended-roas-vs-platform-roas") {
    return buildMetadata({
      title: "Blended ROAS vs platform ROAS - which number should you trust? - Cerebro Blog",
      description:
        "Why Meta, Google and TikTok never agree on conversions, and how blended ROAS brings clarity.",
      path: `/blog/${params.slug}`,
    });
  }

  if (params.slug === "understanding-objective-based-ad-reporting") {
    return buildMetadata({
      title: "Understanding objective-based ad reporting - Cerebro Blog",
      description:
        "How to judge awareness, traffic, leads, and sales campaigns by their own true goals.",
      path: `/blog/${params.slug}`,
    });
  }

  return buildMetadata({
    title: "Article Not Found",
    description: "Article not found.",
    path: `/blog/${params.slug}`,
    noIndex: true,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  if (params.slug === "blended-roas-vs-platform-roas") {
    return (
      <>
        <BreadcrumbListJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Blended ROAS vs platform ROAS", path: `/blog/${params.slug}` },
          ]}
        />
        <PgArticleV2 />
      </>
    );
  }

  if (params.slug === "understanding-objective-based-ad-reporting") {
    return (
      <>
        <BreadcrumbListJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Understanding objective-based ad reporting", path: `/blog/${params.slug}` },
          ]}
        />
        <PgArticle2V2 />
      </>
    );
  }

  notFound();
}
