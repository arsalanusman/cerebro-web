import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Engineering and marketing blog",
  description:
    "Insights on cross-channel ad data integration, objective measurement, and analytics engineering.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getMdxFiles("blog");
  const breadcrumbs = [{ label: "Blog", href: "/blog" }];

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Resources · Publication"
        title="Engineering and marketing insights."
        lead="Articles, analysis frameworks, and technical guides from the team building Cerebro DNano."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-8 rounded-card border border-border bg-white hover:border-brand/40 hover:shadow-sm transition-all duration-150 flex flex-col justify-between group text-left"
              >
                <div>
                  <p className="text-caption font-mono text-muted mb-3 tabular-nums">
                    {post.date}
                  </p>
                  <h3 className="text-h3-mobile lg:text-h3 font-heading font-semibold text-ink group-hover:text-brand transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-small text-muted leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-1.5 text-small font-semibold text-brand">
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
