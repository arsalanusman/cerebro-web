import React from "react";
import Link from "next/link";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getMdxFiles } from "@/lib/mdx";

export const metadata = buildMetadata({
  title: "Engineering and marketing blog | Cerebro DNano",
  description:
    "Insights on cross-channel ad data integration, objective measurement, and analytics engineering from the team building Cerebro DNano.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getMdxFiles("blog");

  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums">
      <BreadcrumbListJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <header className="py-16 md:py-20 bg-gradient-to-b from-[#F5F6FF] to-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7180]">
            <Link href="/" className="hover:text-[#4F46E5] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#101426]">Blog</span>
          </nav>
          <div className="mt-8 max-w-[820px]">
            <p className="m-0 mb-4 text-[14px] font-semibold text-[#4F46E5]">Publication</p>
            <h1 className="m-0 font-heading font-semibold text-[36px] sm:text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.03em] text-[#101426]">
              Engineering and marketing insights.
            </h1>
            <p className="mt-5 max-w-[680px] text-[18px] md:text-[19px] leading-[1.55] text-[#5B6170]">
              Analysis frameworks, multi-platform ad data architecture, and practical guides from the team building Cerebro DNano.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-[#E4E7EC] rounded-2xl p-7 flex flex-col justify-between no-underline hover:border-[#A5B4FC] hover:shadow-[0_12px_32px_rgba(79,70,229,0.08)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[13px] text-[#6B7180] mb-3">
                  <span className="font-semibold text-[#4F46E5]">
                    {post.category || "Reporting"}
                  </span>
                  <span>{post.readTime || "5 min read"}</span>
                </div>
                <h2 className="font-heading text-[20px] font-semibold text-[#101426] group-hover:text-[#4F46E5] transition-colors leading-[1.3] mb-3">
                  {post.title}
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-[#5B6170] line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between text-[13px] text-[#6B7180]">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
