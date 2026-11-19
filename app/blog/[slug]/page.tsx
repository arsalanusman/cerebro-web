import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles, getMdxBySlug } from "@/lib/mdx";
import MarkdownRenderer from "@/components/blog/MarkdownRenderer";

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
    title: `${post.title} | Cerebro DNano Blog`,
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

  const related = [
    {
      tag: "Reporting",
      title: "Why Meta, Google and TikTok never agree on conversions",
      meta: "7 min read",
      slug: "blended-roas-vs-platform-roas",
    },
    {
      tag: "Objectives",
      title: "How to judge awareness campaigns without cost per sale",
      meta: "6 min read",
      slug: "understanding-objective-based-ad-reporting",
    },
  ];

  const shareNetworks = ["LinkedIn", "X", "WhatsApp"];

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article>
        {/* Article Header */}
        <header className="py-14 md:py-16 bg-gradient-to-b from-[#F5F6FF] to-white">
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7180]">
              <Link href="/" className="hover:text-[#4F46E5] no-underline">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:text-[#4F46E5] no-underline">
                Blog
              </Link>{" "}
              / <span className="text-[#101426]">{post.category || "Reporting"}</span>
            </nav>

            <span className="mt-7 inline-flex items-center h-7 px-3 rounded-full bg-[#EEF0FF] text-[#3730A3] text-[13px] font-semibold">
              {post.category || "Reporting"}
            </span>

            <h1 className="mt-4 font-heading font-semibold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.08] tracking-[-0.025em] text-[#101426]">
              {post.title}
            </h1>
            <p className="mt-4 max-w-[720px] text-[18px] md:text-[19px] leading-[1.55] text-[#5B6170]">
              {post.description}
            </p>

            <div className="mt-6 flex items-center gap-3 flex-wrap text-[14px] text-[#5B6170]">
              <span className="w-9 h-9 rounded-full bg-[#1C1A57] text-white text-[13px] font-semibold inline-flex items-center justify-center">
                C
              </span>
              <span className="text-[#101426] font-semibold">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime || "5 min read"}</span>
            </div>
          </div>
        </header>

        {/* Article Body & Sidebar */}
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-6 pb-20 flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
          <div className="flex-1 min-w-0 max-w-[680px] text-[17px] md:text-[18px] leading-[1.75] text-[#2B3040] space-y-6">
            <MarkdownRenderer content={post.content} />

            {/* Embedded Demo Callout */}
            <div className="mt-12 rounded-2xl bg-[#1C1A57] p-7 md:p-8 text-white shadow-[0_12px_36px_rgba(28,26,87,0.12)]">
              <div className="font-heading text-[22px] font-semibold text-white">
                See your own platforms side by side.
              </div>
              <p className="mt-2 text-[15.5px] leading-[1.55] text-[#CDD0F3]">
                Book a demo and ask Cerebro about your own campaigns.
              </p>
              <Link
                href="/demo"
                className="mt-4 inline-flex items-center justify-center min-h-[46px] px-5 rounded-xl bg-white text-[#1C1A57] no-underline text-[15px] font-semibold hover:bg-[#F5F6FF] transition-colors"
              >
                Book a demo
              </Link>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 flex gap-2.5 items-center flex-wrap text-[14px] text-[#5B6170]">
              <span className="font-medium mr-1">Share</span>
              {shareNetworks.map((net) => (
                <span
                  key={net}
                  className="inline-flex items-center min-h-[38px] px-3.5 rounded-full border border-[#DDE0E7] text-[#101426] text-[13.5px] font-medium bg-white hover:bg-[#FAFAFB] cursor-pointer"
                >
                  {net}
                </span>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside
            aria-label="On this page"
            className="lg:w-[240px] shrink-0 border-l border-[#EEF0F3] pl-5 lg:sticky lg:top-24 hidden lg:block"
          >
            <div className="text-[12px] font-semibold text-[#6B7180] uppercase tracking-wider">
              On this page
            </div>
            <div className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.45] text-[#2B3040]">
              <a href="#platform-roas" className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                What platform ROAS measures
              </a>
              <a href="#overlap" className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                Why platform totals overlap
              </a>
              <a href="#blended" className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                What blended ROAS measures
              </a>
              <a href="#when" className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                When to use each
              </a>
              <a href="#report" className="hover:text-[#4F46E5] text-[#2B3040] no-underline">
                Report both, and label the source
              </a>
            </div>
          </aside>
        </div>
      </article>

      {/* Keep Reading Section */}
      <section className="py-16 md:py-20 bg-[#F7F8FA]">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[26px] text-[#101426]">
            Keep reading
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((r, idx) => (
              <Link
                key={idx}
                href={`/blog/${r.slug}`}
                className="bg-white border border-[#E4E7EC] rounded-2xl p-6 no-underline hover:border-[#A5B4FC] hover:shadow-[0_8px_24px_rgba(79,70,229,0.06)] transition-all group"
              >
                <span className="text-[12.5px] font-semibold text-[#4F46E5]">{r.tag}</span>
                <div className="mt-2 font-heading text-[19px] leading-[1.3] font-semibold text-[#101426] group-hover:text-[#4F46E5] transition-colors">
                  {r.title}
                </div>
                <div className="mt-3 text-[13.5px] text-[#6B7180]">{r.meta}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
