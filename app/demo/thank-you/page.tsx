import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank you for booking a demo | Cerebro DNano",
  description: "We have received your demo request and will be in touch shortly.",
  path: "/demo/thank-you",
  noIndex: true,
});

export default function DemoThankYouPage() {
  return (
    <div className="font-sans text-[#2B3040] bg-white tabular-nums py-20 md:py-28">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <span className="w-16 h-16 rounded-full bg-[#DCFCE7] inline-flex items-center justify-center text-[#15803D]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h1 className="mt-6 font-heading font-semibold text-[36px] sm:text-[44px] text-[#101426] tracking-[-0.02em]">
          Thanks, we have your request.
        </h1>
        <p className="mt-4 text-[18px] leading-[1.6] text-[#5B6170]">
          We’ll reply from {SITE.email} within one business day to confirm a time that suits your team.
        </p>

        <div className="mt-10 p-6 rounded-2xl border border-[#E4E7EC] bg-[#FAFAFC] text-left">
          <h2 className="m-0 font-heading text-[18px] font-semibold text-[#101426]">
            While you wait:
          </h2>
          <ul className="mt-3 space-y-2 text-[15px] text-[#5B6170]">
            <li>• Explore how Ask Cerebro answers ad performance questions.</li>
            <li>• Check our native connectors for Meta Ads, Google Ads and TikTok Ads.</li>
            <li>• Review how custom connectors map any reporting sheet with AI.</li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/ask-cerebro"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#4F46E5] text-white font-semibold text-[15px] hover:bg-[#4338CA] transition-colors no-underline"
          >
            Explore Ask Cerebro
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-[#D5D8E0] bg-white text-[#101426] font-semibold text-[15px] hover:border-[#101426] transition-colors no-underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
