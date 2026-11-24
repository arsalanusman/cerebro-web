"use client";

import React, { useState } from "react";
import Link from "next/link";
import { docChapters, docTerms, docSteps } from "@/content/docs";

interface DocsClientProps {
  initialSlug?: string;
}

export default function DocsClient({ initialSlug = "getting-started" }: DocsClientProps) {
  const initialIndex = docChapters.findIndex((c) => c.slug === initialSlug);
  const [cur, setCur] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [rated, setRated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const groupsOrder = ["Get started", "Bring data in", "Report", "Ask and manage"];

  const ch = docChapters[cur];
  const nxt = (cur + 1) % docChapters.length;
  const nextChapter = docChapters[nxt];

  const filteredChapters = searchQuery.trim()
    ? docChapters.filter(
        (c) =>
          c.t.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.intro.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : docChapters;

  return (
    <div className="font-sans text-[#1C2433] bg-white tabular-nums">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Nav Sidebar */}
        <nav
          aria-label="Documentation"
          className="lg:w-[260px] shrink-0 py-8 border-b lg:border-b-0 lg:border-r border-[#EEF0F3] lg:pr-6 w-full lg:sticky lg:top-16"
        >
          <label htmlFor="docs-search" className="text-[12px] font-semibold text-[#6B7685] block mb-2">
            Search the docs
          </label>
          <div className="flex items-center gap-2 border border-[#D5D8E0] rounded-lg px-3 min-h-[42px] bg-white focus-within:border-[#0070C2]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7685"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3" />
            </svg>
            <input
              id="docs-search"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 border-0 outline-none text-[14px] bg-transparent"
            />
            <span className="font-mono text-[11px] text-[#6B7685] border border-[#E2E8F0] rounded px-1.5 py-0.5">
              /
            </span>
          </div>

          {searchQuery.trim() ? (
            <div className="mt-5 space-y-1">
              <div className="text-[12px] font-semibold text-[#6B7685] px-2">
                Matching articles ({filteredChapters.length})
              </div>
              {filteredChapters.map((c) => {
                const globalIdx = docChapters.findIndex((item) => item.slug === c.slug);
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => {
                      setCur(globalIdx);
                      setRated(false);
                    }}
                    className={`text-left w-full min-h-[36px] px-2 rounded-lg border-0 text-[14px] cursor-pointer transition-colors ${
                      globalIdx === cur
                        ? "bg-[#E8F2FC] text-[#004C87] font-semibold"
                        : "bg-transparent text-[#1C2433] hover:bg-[#F3F8FE]"
                    }`}
                  >
                    {c.t}
                  </button>
                );
              })}
            </div>
          ) : (
            groupsOrder.map((gname) => {
              const items = docChapters
                .map((c, i) => ({ c, i }))
                .filter((x) => x.c.g === gname);
              return (
                <div key={gname} className="mt-6">
                  <div className="text-[12px] font-semibold text-[#6B7685] px-2 uppercase tracking-wider">
                    {gname}
                  </div>
                  <div className="mt-1.5 flex flex-col gap-0.5">
                    {items.map((x) => {
                      const on = x.i === cur;
                      return (
                        <button
                          key={x.c.slug}
                          type="button"
                          aria-current={on ? "page" : undefined}
                          onClick={() => {
                            setCur(x.i);
                            setRated(false);
                          }}
                          className={`text-left min-h-[36px] px-2 rounded-lg border-0 text-[14px] cursor-pointer transition-colors ${
                            on
                              ? "bg-[#E8F2FC] text-[#004C87] font-semibold"
                              : "bg-transparent text-[#1C2433] hover:bg-[#F3F8FE]"
                          }`}
                        >
                          {x.c.t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </nav>

        {/* Center Main Content */}
        <main className="flex-1 min-w-0 max-w-[720px] py-10 pb-20">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7685]">
            <Link href="/" className="hover:text-[#0070C2] no-underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/docs" className="hover:text-[#0070C2] no-underline">
              Docs
            </Link>{" "}
            / <span className="text-[#000000]">{ch.g}</span>
          </nav>

          <h1 className="mt-4 font-heading font-semibold text-[32px] sm:text-[40px] leading-[1.1] tracking-[-0.02em] text-[#000000]">
            {ch.t}
          </h1>
          <p className="mt-2 text-[13px] text-[#6B7685]">
            Chapter {cur + 1} of 12. Updated November 2026
          </p>
          <p className="mt-5 text-[17px] leading-[1.7] text-[#1C2433]">{ch.intro}</p>

          {cur === 0 ? (
            <>
              {/* Key Terms */}
              <h2 id="terms" className="mt-10 font-heading text-[24px] font-semibold text-[#000000]">
                Key terms
              </h2>
              <dl className="mt-4 border border-[#E2E8F0] rounded-xl p-2 sm:p-5 divide-y divide-[#EEF0F3] bg-[#FAFAFC]">
                {docTerms.map((t, idx) => (
                  <div key={idx} className="flex gap-4 py-3 first:pt-0 last:pb-0 flex-wrap">
                    <dt className="w-[140px] shrink-0 text-[15px] font-semibold text-[#000000]">
                      {t.k}
                    </dt>
                    <dd className="m-0 flex-1 text-[15px] leading-[1.6] text-[#5A6675]">
                      {t.v}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Your first hour in Cerebro */}
              <h2
                id="first-steps"
                className="mt-10 font-heading text-[24px] font-semibold text-[#000000]"
              >
                Your first hour in Cerebro
              </h2>
              <ol className="mt-4 p-0 list-none flex flex-col gap-3.5">
                {docSteps.map((s) => (
                  <li key={s.n} className="flex gap-3.5 items-start">
                    <span className="w-7 h-7 rounded-full bg-[#022771] text-white text-[13px] font-semibold inline-flex items-center justify-center shrink-0 mt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold text-[#000000]">{s.title}</div>
                      <p className="mt-1 text-[15px] leading-[1.6] text-[#5A6675]">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex gap-3 rounded-xl bg-[#F3F8FE] border border-[#D6E8F8] p-4 text-[15px] leading-[1.6] text-[#022771]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                </svg>
                <span>
                  <strong>Tip:</strong> once data is in, open Ask Cerebro and try “Summarize
                  performance for the last 30 days” to check that everything landed.
                </span>
              </div>

              {/* For developers */}
              <h2 id="api" className="mt-10 font-heading text-[24px] font-semibold text-[#000000]">
                For developers
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#5A6675]">
                Admins can create API tokens in Settings. API requests authenticate via bearer token.
              </p>
              <div className="mt-3 rounded-xl bg-[#000000] p-4 font-mono text-[13.5px] leading-[1.6] text-[#E3E5FF] overflow-x-auto">
                <pre>{`curl -X GET "https://api.cerebro.media/v1/workspaces/current/campaigns" \\
  -H "Authorization: Bearer cbr_live_58f9024c" \\
  -H "Content-Type: application/json"`}</pre>
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-[#CDD1DA] bg-[#FAFAFC] p-7 text-[15.5px] leading-[1.6] text-[#5A6675]">
              This chapter covers advanced workflows for {ch.t.toLowerCase()}. The detailed walkthrough and API reference will be updated in production sync.
            </div>
          )}

          {/* Page Feedback & Next Chapter Button */}
          <div className="mt-12 pt-6 border-t border-[#EEF0F3] flex justify-between items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2.5 text-[14.5px] text-[#1C2433]">
              {!rated ? (
                <>
                  <span>Was this page helpful?</span>
                  <button
                    type="button"
                    onClick={() => setRated(true)}
                    className="min-h-[38px] px-3.5 rounded-lg border border-[#DDE0E7] bg-white text-[14px] hover:border-[#000000] cursor-pointer"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setRated(true)}
                    className="min-h-[38px] px-3.5 rounded-lg border border-[#DDE0E7] bg-white text-[14px] hover:border-[#000000] cursor-pointer"
                  >
                    No
                  </button>
                </>
              ) : (
                <span role="status" className="text-[#15803D] font-medium">
                  Thanks for the feedback.
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                setCur(nxt);
                setRated(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="min-h-[44px] inline-flex items-center gap-2 px-4 rounded-xl border border-[#DDE0E7] bg-white text-[14.5px] font-semibold text-[#000000] hover:border-[#0070C2] hover:text-[#0070C2] transition-colors cursor-pointer"
            >
              <span>Next: {nextChapter.t}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </main>

        {/* Right Aside: On this page */}
        <aside
          aria-label="On this page"
          className="lg:w-[200px] shrink-0 py-12 hidden lg:block sticky top-16"
        >
          {cur === 0 && (
            <>
              <div className="text-[12px] font-semibold text-[#6B7685] uppercase tracking-wider">
                On this page
              </div>
              <div className="mt-2.5 flex flex-col gap-1 text-[14px]">
                <a href="#terms" className="py-1 text-[#1C2433] hover:text-[#0070C2] no-underline">
                  Key terms
                </a>
                <a
                  href="#first-steps"
                  className="py-1 text-[#1C2433] hover:text-[#0070C2] no-underline"
                >
                  Your first hour
                </a>
                <a href="#api" className="py-1 text-[#1C2433] hover:text-[#0070C2] no-underline">
                  For developers
                </a>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}
