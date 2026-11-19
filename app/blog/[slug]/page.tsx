import React from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles, getMdxBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getMdxFiles("blog");
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getMdxBySlug("blog", params.slug);
  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "Article not found.",
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.ogImage,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getMdxBySlug("blog", params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbListJsonLd
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={`Published ${post.date} · ${post.author}`}
        title={post.title}
        lead={post.description}
      />

      <article className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl text-left prose prose-slate">
            <div className="text-body text-text leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
