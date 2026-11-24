"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface FAQItemData {
  q: string;
  a: string;
}

interface FAQTopic {
  topic: string;
  items: FAQItemData[];
}

const FAQ_SECTIONS: FAQTopic[] = [
  {
    topic: "General & Capabilities",
    items: [
      {
        q: "Which advertising platforms does Cerebro dNano support?",
        a: "Cerebro dNano supports live API integrations with Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube, PMax), and TikTok Ads. Additional networks like DV360, LinkedIn Ads, and Snapchat Ads are available in beta or via custom AI connectors.",
      },
      {
        q: "How does Cerebro access our advertising accounts?",
        a: "We connect using official, scoped read-only OAuth tokens. Cerebro does not require your passwords and cannot create, modify, or delete your active ad campaigns.",
      },
      {
        q: "What is objective-based reporting?",
        a: "Objective-based reporting categorizes campaigns by their business purpose (e.g. brand awareness vs direct response sales). Instead of averaging mismatched metrics together, Cerebro evaluates awareness campaigns by CPM and reach, and conversion campaigns strictly by CPA and ROAS.",
      },
      {
        q: "What is Ask Cerebro and how does it work?",
        a: "Ask Cerebro is an embedded AI analyst operating directly on your normalized marketing data. It allows users to ask natural questions (e.g. 'Which channel had the lowest CPA last week?') and returns precise numerical answers calculated from your live campaign records with full audit steps.",
      },
      {
        q: "How often is campaign data refreshed?",
        a: "Data is synchronized automatically on a scheduled daily schedule via platform APIs. On-demand synchronizations can also be initiated from the data connections panel whenever needed.",
      },
    ],
  },
  {
    topic: "Data Security & Privacy",
    items: [
      {
        q: "How do you store my ad platform credentials?",
        a: "We never store raw credentials. Cerebro uses OAuth 2.0 to connect to each platform. Access tokens are encrypted using AES-256 and stored in a dedicated hardware-backed secrets manager. Cerebro employees cannot view your credentials.",
      },
      {
        q: "Is our advertising data shared with external parties?",
        a: "No. Your marketing data is logically isolated and encrypted at rest using AES-256 and in transit via TLS 1.3. We do not sell your data or use your private metrics to train general public AI models.",
      },
      {
        q: "Who can access my workspace data?",
        a: "Only team members you explicitly invite to your workspace. Role-based access control lets you assign Admin, Media Planner, or Client Viewer permissions per account.",
      },
      {
        q: "Is Cerebro GDPR and privacy compliant?",
        a: "Yes. We offer Data Processing Agreements (DPA) for international customers, support client data isolation, and handle data deletion requests within 30 days.",
      },
    ],
  },
  {
    topic: "Integrations & Setup",
    items: [
      {
        q: "Does Cerebro require engineering work to set up?",
        a: "No. Setup is self-serve and takes under 15 minutes. Connect your ad accounts via OAuth, configure your first report template, and your dashboard is live. No code or SQL required.",
      },
      {
        q: "How far back can Cerebro pull historical data?",
        a: "On first connection, Cerebro automatically backfills historical campaign data from each connected platform API, giving you immediate multi-month comparison trends.",
      },
      {
        q: "Can I import data from custom sources or CSVs?",
        a: "Yes. Cerebro supports CSV and Excel uploads for platforms not yet connected via live API. Imported data is normalized into the exact same schema as live-connected data.",
      },
      {
        q: "Will switching to Cerebro disrupt our active campaigns?",
        a: "No. Cerebro connects with read-only permissions and is completely non-intrusive. It never alters your live ads, budgets, or active ad sets.",
      },
    ],
  },
  {
    topic: "Reporting & Exporting",
    items: [
      {
        q: "Can we white-label reports for our agency clients?",
        a: "Yes. You can upload your agency logo, set custom client palettes, and deliver branded PDF or live link reports without Cerebro branding on Growth and Enterprise tiers.",
      },
      {
        q: "How are recurring reports delivered?",
        a: "Reports can be scheduled for automated delivery via email as presentation-ready PDF attachments or accessible through restricted client portal links.",
      },
      {
        q: "Can I build custom formulas or blended metrics?",
        a: "Yes. Cerebro supports custom calculated metrics such as Blended ROAS (Total Multi-Channel Revenue / Total Spend) or custom cost per qualified lead.",
      },
    ],
  },
];

export default function FAQClient() {
  const [activeTopic, setActiveTopic] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return FAQ_SECTIONS;
    }
    const q = searchQuery.toLowerCase();
    return FAQ_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter(
        (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
      ),
    })).filter((section) => section.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-14">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#DCDFE7] bg-white text-[#000000] placeholder-[#8A90A0] text-sm focus:outline-none focus:ring-2 focus:ring-[#0070C2] shadow-sm transition-all"
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8A90A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Layout: Desktop Topic Sidebar + Accordion List */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Topic Selector Tabs */}
          {!searchQuery.trim() && (
            <div className="w-full md:w-64 shrink-0 flex flex-row md:flex-col gap-1.5 overflow-x-auto pb-2 md:pb-0 md:sticky md:top-28">
              {FAQ_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.topic}
                  type="button"
                  onClick={() => setActiveTopic(idx)}
                  className={`px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTopic === idx
                      ? "bg-[#EEF2FF] text-[#0070C2] border border-[#BFD8F0] shadow-sm"
                      : "text-[#5A6675] hover:text-[#000000] hover:bg-[#F3F4F6]"
                  }`}
                >
                  {sec.topic}
                </button>
              ))}
            </div>
          )}

          {/* Accordion Questions */}
          <div className="flex-1 min-w-0 w-full space-y-4">
            {filteredSections.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-[#DCDFE7] rounded-2xl">
                <p className="text-base text-[#5A6675]">
                  No matching questions found for &ldquo;{searchQuery}&rdquo;.
                </p>
                <p className="text-sm text-[#8A90A0] mt-1">
                  Have a specific question? Contact us directly.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0070C2] hover:underline"
                >
                  Contact support &rarr;
                </Link>
              </div>
            ) : (
              (searchQuery.trim()
                ? filteredSections
                : [FAQ_SECTIONS[activeTopic]]
              ).map((section) => (
                <div key={section.topic} className="space-y-4">
                  {searchQuery.trim() && (
                    <h3 className="font-heading text-lg font-semibold text-[#000000] mb-2">
                      {section.topic}
                    </h3>
                  )}
                  {section.items.map((item, iIdx) => {
                    const itemKey = `${section.topic}-${iIdx}`;
                    const isOpen = openItems[itemKey] ?? false;
                    return (
                      <div
                        key={itemKey}
                        className="border border-[#E2E8F0] rounded-2xl bg-white overflow-hidden shadow-sm transition-all hover:border-[#8EC5F0]"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between p-5 text-left cursor-pointer gap-4 group"
                        >
                          <span className="font-heading text-[16px] sm:text-[17px] font-semibold text-[#000000] group-hover:text-[#0070C2] transition-colors">
                            {item.q}
                          </span>
                          <span
                            className={`w-7 h-7 rounded-full bg-[#F3F4F6] text-[#5A6675] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 bg-[#EEF2FF] text-[#0070C2]" : ""
                            }`}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-0 text-[15px] leading-[1.65] text-[#5A6675] border-t border-[#EEF0F3] pt-4">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
