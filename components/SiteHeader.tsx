"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Authentic icons from handoff/design/SiteHeader.dc.html
const ICONS: Record<string, string> = {
  spark: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z",
  sparkDouble: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z",
  engine: "M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M11 16v4",
  plug: "M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z",
  sheet: "M3 4h18v16H3zM3 10h18M3 15h18M9 4v16",
  dash: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
  table: "M3 4h18v16H3zM3 10h18M9 4v16",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5",
  grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  brand: "M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01",
  bank: "M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M12 3l9 5H3z",
  signal: "M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4",
  cart: "M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6M10 21h.01M18 21h.01",
  box: "M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8",
  book: "M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z",
  doc: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
  info: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v5M12 8h.01",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
};

interface MenuItem {
  id: string;
  label: string;
  text: string;
  href: string;
  icon: string;
}

interface MenuCol {
  title: string;
  items: MenuItem[];
}

interface MenuFeature {
  href: string;
  bg: string;
  bd: string;
  kicker: string;
  title: string;
  body: string;
  link: string;
  eyebrow: string;
  heading: string;
  text: string;
  cta: string;
}

interface MenuSection {
  label: string;
  cols: MenuCol[];
  feature: MenuFeature;
}

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handlePointerEnterMenu = (menuKey: string) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setOpenMenu(menuKey);
    setHoverKey(menuKey);
  };

  const handlePointerLeaveMenu = () => {
    leaveTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setHoverKey(null);
    }, 180);
  };

  const handleHeaderLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setHoverKey(null);
    }, 180);
  };

  const toggleMenu = (menuKey: string) => {
    setOpenMenu(openMenu === menuKey ? null : menuKey);
    setHoverKey(menuKey);
  };

  const MENUS: Record<string, MenuSection> = {
    platform: {
      label: "Platform menu",
      cols: [
        {
          title: "Cerebro AI",
          items: [
            {
              id: "p1",
              label: "Ask Cerebro",
              text: "Your AI analyst, answering from your data",
              href: "/ask-cerebro",
              icon: ICONS.spark,
            },
            {
              id: "p2",
              label: "AI data engine",
              text: "Clean, standardize and check every source",
              href: "/platform/data-integration",
              icon: ICONS.engine,
            },
            {
              id: "p3",
              label: "AI connectors",
              text: "Connect any marketing platform",
              href: "/integrations",
              icon: ICONS.plug,
            },
            {
              id: "p4",
              label: "AI sheet mapping",
              text: "CSV, Excel and Google Sheets",
              href: "/integrations",
              icon: ICONS.sheet,
            },
          ],
        },
        {
          title: "Build and report",
          items: [
            {
              id: "p5",
              label: "Dashboards",
              text: "Widget-based and fully editable",
              href: "/platform/dashboards",
              icon: ICONS.dash,
            },
            {
              id: "p6",
              label: "Report builder",
              text: "Any cut of the data, saved and shared",
              href: "/platform/reports",
              icon: ICONS.table,
            },
            {
              id: "p7",
              label: "Objective engine",
              text: "Every campaign judged by its goal",
              href: "/platform/objective-reporting",
              icon: ICONS.layers,
            },
            {
              id: "p8",
              label: "Integrations",
              text: "Native, custom and sheet uploads",
              href: "/integrations",
              icon: ICONS.grid,
            },
          ],
        },
      ],
      feature: {
        href: "/demo",
        bg: "#022771",
        bd: "#022771",
        kicker: "#8EC5F0",
        title: "#FFFFFF",
        body: "#C9DDF2",
        link: "#FFFFFF",
        eyebrow: "Book a demo",
        heading: "See Cerebro AI on your own campaigns",
        text: "We connect your platforms or load your sheets, and you ask the questions.",
        cta: "Book a demo",
      },
    },
    solutions: {
      label: "Solutions menu",
      cols: [
        {
          title: "By team",
          items: [
            {
              id: "s1",
              label: "Agencies",
              text: "Every client from one workspace",
              href: "/solutions/agencies",
              icon: ICONS.users,
            },
            {
              id: "s2",
              label: "Brands",
              text: "One view for marketing and leadership",
              href: "/solutions/brands",
              icon: ICONS.brand,
            },
          ],
        },
        {
          title: "By industry",
          items: [
            {
              id: "s3",
              label: "Banking and finance",
              text: "Reporting with tight access control",
              href: "/industries/banking-and-finance",
              icon: ICONS.bank,
            },
            {
              id: "s4",
              label: "Telecom",
              text: "Always-on campaigns in one view",
              href: "/industries/telecom",
              icon: ICONS.signal,
            },
            {
              id: "s5",
              label: "FMCG",
              text: "Brands judged on the right goal",
              href: "/industries/fmcg",
              icon: ICONS.box,
            },
            {
              id: "s6",
              label: "E-commerce",
              text: "What your ads really earn",
              href: "/industries/ecommerce",
              icon: ICONS.cart,
            },
          ],
        },
      ],
      feature: {
        href: "/solutions/agencies",
        bg: "#F3F8FE",
        bd: "#D6E8F8",
        kicker: "#0070C2",
        title: "#000000",
        body: "#5A6675",
        link: "#0070C2",
        eyebrow: "For agencies",
        heading: "Report on every client from one workspace",
        text: "Client-level access, shared widgets and Ask Cerebro for every client.",
        cta: "Explore agencies",
      },
    },
    resources: {
      label: "Resources menu",
      cols: [
        {
          title: "Learn",
          items: [
            {
              id: "r1",
              label: "Blog",
              text: "Guides on paid media reporting",
              href: "/blog",
              icon: ICONS.book,
            },
            {
              id: "r2",
              label: "Docs",
              text: "Set up and use Cerebro",
              href: "/docs",
              icon: ICONS.doc,
            },
            {
              id: "r6",
              label: "FAQ",
              text: "Quick answers to common questions",
              href: "/faq",
              icon: ICONS.info,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              id: "r3",
              label: "About",
              text: "Who we are and how we work",
              href: "/about",
              icon: ICONS.info,
            },
            {
              id: "r4",
              label: "Security",
              text: "How we protect client data",
              href: "/security",
              icon: ICONS.shield,
            },
            {
              id: "r5",
              label: "Contact",
              text: "Talk to the team in Karachi",
              href: "/contact",
              icon: ICONS.mail,
            },
          ],
        },
      ],
      feature: {
        href: "/blog/blended-roas-vs-platform-roas",
        bg: "#FFFFFF",
        bd: "#E2E8F0",
        kicker: "#0070C2",
        title: "#000000",
        body: "#5A6675",
        link: "#0070C2",
        eyebrow: "Latest article",
        heading: "Blended ROAS vs platform ROAS: which number should you trust?",
        text: "Why platform totals never add up, and how to report both honestly.",
        cta: "Read the article",
      },
    },
  };

  const navTriggers = [
    { key: "platform", label: "Platform", isMenu: true },
    { key: "solutions", label: "Solutions", isMenu: true },
    { key: "integrations", label: "Integrations", isMenu: false, href: "/integrations" },
    { key: "pricing", label: "Pricing", isMenu: false, href: "/pricing" },
    { key: "resources", label: "Resources", isMenu: true },
  ];

  const currentPanel = openMenu && MENUS[openMenu] ? MENUS[openMenu] : null;

  return (
    <header
      ref={headerRef}
      onMouseLeave={handleHeaderLeave}
      className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] font-sans text-[#1C2433]"
    >
      {/* Desktop Navigation (>= 1024px) */}
      <div className="hidden lg:flex items-center justify-between gap-2 xl:gap-5 max-w-[1440px] min-h-[80px] mx-auto px-4 lg:px-6 xl:px-10 box-border">
        {/* Brand Logo (2x scaled) */}
        <Link
          href="/"
          aria-label="Cerebro dNano home"
          className="inline-flex items-center gap-3 shrink-0 py-2"
        >
          <Image
            src="/brand/cerebro-mark.svg"
            alt="Cerebro mark"
            width={56}
            height={56}
            className="h-12 w-auto block shrink-0"
            priority
          />
          <Image
            src="/brand/cerebro-wordmark.svg"
            alt="Cerebro dNano"
            width={224}
            height={34}
            className="h-[34px] w-auto block shrink-0"
            priority
          />
        </Link>

        {/* Navigation items */}
        <nav aria-label="Main" className="flex items-center gap-0.5 xl:gap-1.5 flex-1 min-w-0 justify-center">
          {/* AI first link (requested by user) */}
          <Link
            href="/ai-first"
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 min-h-[36px] xl:min-h-[38px] px-2.5 xl:px-3 rounded-[19px] bg-[#E8F2FC] hover:bg-[#D6E8F8] text-[#004C87] font-semibold text-[13px] xl:text-[15px] transition-colors"
          >
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
              className="shrink-0"
            >
              <path d={ICONS.spark} />
            </svg>
            <span>AI first</span>
          </Link>

          {/* Ask Cerebro pill button */}
          <Link
            href="/ask-cerebro"
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 min-h-[36px] xl:min-h-[38px] px-2.5 xl:px-3 rounded-[19px] bg-[#E8F2FC] hover:bg-[#D6E8F8] text-[#004C87] font-semibold text-[13px] xl:text-[15px] transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d={ICONS.sparkDouble} />
            </svg>
            <span>Ask Cerebro</span>
          </Link>

          {/* Main menu links / triggers */}
          {navTriggers.map((t) => {
            const isOpen = openMenu === t.key;
            if (t.isMenu) {
              return (
                <button
                  key={t.key}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`menu-${t.key}`}
                  onMouseEnter={() => handlePointerEnterMenu(t.key)}
                  onClick={() => toggleMenu(t.key)}
                  className={`whitespace-nowrap shrink-0 inline-flex items-center gap-1 xl:gap-1.5 min-h-[36px] xl:min-h-[38px] px-2 xl:px-3 rounded-lg text-[13px] xl:text-[15px] font-medium transition-colors ${
                    isOpen
                      ? "bg-[#E8F2FC] text-[#004C87]"
                      : hoverKey === t.key
                      ? "bg-[#F3F4F6] text-[#1C2433]"
                      : "bg-transparent text-[#1C2433]"
                  }`}
                >
                  <span>{t.label}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-150 ${
                      isOpen ? "rotate-180 text-[#004C87]" : "text-[#5A6675]"
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              );
            }

            return (
              <Link
                key={t.key}
                href={t.href || "#"}
                onMouseEnter={() => {
                  setOpenMenu(null);
                  setHoverKey(t.key);
                }}
                onMouseLeave={() => setHoverKey(null)}
                className={`whitespace-nowrap shrink-0 inline-flex items-center min-h-[36px] xl:min-h-[38px] px-2 xl:px-3 rounded-lg text-[13px] xl:text-[15px] font-medium transition-colors ${
                  hoverKey === t.key
                    ? "bg-[#F3F4F6] text-[#1C2433]"
                    : "bg-transparent text-[#1C2433]"
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-1 xl:gap-2 shrink-0">
          <Link
            href="/contact"
            onMouseEnter={() => setHoverKey("contact")}
            onMouseLeave={() => setHoverKey(null)}
            className={`whitespace-nowrap shrink-0 inline-flex items-center min-h-[36px] xl:min-h-[38px] px-2 xl:px-3 rounded-lg text-[13px] xl:text-[15px] font-medium transition-colors ${
              hoverKey === "contact"
                ? "bg-[#F3F4F6] text-[#1C2433]"
                : "bg-transparent text-[#1C2433]"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/demo"
            className="whitespace-nowrap shrink-0 inline-flex items-center min-h-[38px] xl:min-h-[40px] px-3 xl:px-[18px] rounded-[20px] bg-[#0070C2] hover:bg-[#005DA3] text-white text-[13px] xl:text-[15px] font-semibold transition-colors shadow-sm"
          >
            Book a demo
          </Link>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {currentPanel && (
        <div
          id={`menu-${openMenu}`}
          role="region"
          aria-label={currentPanel.label}
          onMouseEnter={() => {
            if (leaveTimer.current) {
              clearTimeout(leaveTimer.current);
              leaveTimer.current = null;
            }
          }}
          onMouseLeave={handlePointerLeaveMenu}
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-[#EEF0F3] border-b border-[#E2E8F0] shadow-[0_24px_48px_rgba(0,0,0,0.12)] z-50 animate-in fade-in duration-150"
        >
          <div className="max-w-[1240px] mx-auto px-4 lg:px-6 xl:px-10 py-6 xl:py-7 pb-8 box-border flex gap-5 xl:gap-8">
            {/* Columns */}
            {currentPanel.cols.map((col, idx) => (
              <div key={idx} className="flex-1 min-w-[260px]">
                <div className="text-[12px] font-semibold text-[#6B7685] px-3 uppercase tracking-wider">
                  {col.title}
                </div>
                <div className="mt-2 flex flex-col gap-0.5">
                  {col.items.map((it) => {
                    const isHovered = hoverKey === it.id;
                    return (
                      <Link
                        key={it.id}
                        href={it.href}
                        onMouseEnter={() => setHoverKey(it.id)}
                        onMouseLeave={() => setHoverKey(openMenu)}
                        className={`flex gap-3 items-start p-2.5 px-3 rounded-[10px] text-decoration-none transition-colors ${
                          isHovered ? "bg-[#F3F8FE]" : "bg-transparent"
                        }`}
                      >
                        <span
                          className={`flex-none w-[34px] height-[34px] h-[34px] rounded-[9px] inline-flex items-center justify-center transition-colors ${
                            isHovered ? "bg-[#D6E8F8]" : "bg-[#E8F2FC]"
                          }`}
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0070C2"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d={it.icon} />
                          </svg>
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span
                            className={`text-[14.5px] font-semibold transition-colors ${
                              isHovered ? "text-[#004C87]" : "text-[#000000]"
                            }`}
                          >
                            {it.label}
                          </span>
                          <span className="text-[13px] leading-[1.4] text-[#5A6675]">
                            {it.text}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Feature Promo Card */}
            <Link
              href={currentPanel.feature.href}
              style={{
                backgroundColor: currentPanel.feature.bg,
                borderColor: currentPanel.feature.bd,
              }}
              className="flex-[0_1_300px] min-w-[280px] rounded-[14px] border p-[22px] flex flex-col gap-2.5 transition-transform hover:-translate-y-0.5 duration-150"
            >
              <span
                style={{ color: currentPanel.feature.kicker }}
                className="text-[12px] font-semibold uppercase tracking-wider"
              >
                {currentPanel.feature.eyebrow}
              </span>
              <span
                style={{ color: currentPanel.feature.title }}
                className="font-heading text-[18px] leading-[1.3] font-semibold"
              >
                {currentPanel.feature.heading}
              </span>
              <span
                style={{ color: currentPanel.feature.body }}
                className="text-[13.5px] leading-[1.5]"
              >
                {currentPanel.feature.text}
              </span>
              <span
                style={{ color: currentPanel.feature.link }}
                className="mt-auto inline-flex items-center gap-1.5 text-[14px] font-semibold pt-2"
              >
                <span>{currentPanel.feature.cta}</span>
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
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Header (< 1024px) */}
      <div className="flex lg:hidden items-center justify-between min-h-[72px] px-5 sm:px-6 box-border bg-white border-b border-[#E2E8F0]">
        <Link
          href="/"
          aria-label="Cerebro dNano home"
          className="inline-flex items-center gap-2.5 py-2"
        >
          <Image
            src="/brand/cerebro-mark.svg"
            alt="Cerebro"
            width={48}
            height={48}
            className="h-10 w-auto block shrink-0"
            priority
          />
          <Image
            src="/brand/cerebro-wordmark.svg"
            alt="Cerebro dNano"
            width={192}
            height={30}
            className="h-[30px] w-auto block shrink-0"
            priority
          />
        </Link>

        {/* Hamburger / Close button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-xl border border-[#E2E8F0] bg-white inline-flex items-center justify-center cursor-pointer text-[#000000] transition-colors active:bg-[#F3F4F6]"
        >
          {mobileOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu (< 1024px) */}
      {mobileOpen && (
        <nav
          aria-label="Main"
          className="lg:hidden absolute left-0 right-0 top-16 bg-white border-t border-[#EEF0F3] shadow-[0_24px_48px_rgba(0,0,0,0.14)] px-6 py-4 pb-7 z-50 max-h-[calc(100vh-64px)] overflow-y-auto animate-in slide-in-from-top-2 duration-150"
        >
          {/* AI first and Ask Cerebro 2-column quick access */}
          <div className="grid grid-cols-2 gap-2.5 mb-3.5">
            <Link
              href="/ai-first"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 min-h-[42px] px-3 rounded-full bg-[#E8F2FC] hover:bg-[#D6E8F8] text-[#004C87] font-semibold text-[14.5px] transition-colors whitespace-nowrap"
            >
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
                className="shrink-0"
              >
                <path d={ICONS.spark} />
              </svg>
              <span>AI first</span>
            </Link>

            <Link
              href="/ask-cerebro"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 min-h-[42px] px-3 rounded-full bg-[#E8F2FC] hover:bg-[#D6E8F8] text-[#004C87] font-semibold text-[14.5px] transition-colors whitespace-nowrap"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d={ICONS.sparkDouble} />
              </svg>
              <span>Ask Cerebro</span>
            </Link>
          </div>

          {/* Platform Accordion */}
          <details className="border-b border-[#EEF0F3] group">
            <summary className="min-h-[54px] flex items-center justify-between cursor-pointer text-[17px] font-semibold text-[#000000] select-none list-none [&::-webkit-details-marker]:hidden">
              <span>Platform</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A6675"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="pl-2 pb-3 flex flex-col">
              <Link
                href="/platform/data-integration"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Data integration
              </Link>
              <Link
                href="/platform/dashboards"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Dashboards
              </Link>
              <Link
                href="/platform/objective-reporting"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Objective engine
              </Link>
              <Link
                href="/platform/reports"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Reports
              </Link>
              <Link
                href="/features"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                All features
              </Link>
            </div>
          </details>

          {/* Solutions Accordion */}
          <details className="border-b border-[#EEF0F3] group">
            <summary className="min-h-[54px] flex items-center justify-between cursor-pointer text-[17px] font-semibold text-[#000000] select-none list-none [&::-webkit-details-marker]:hidden">
              <span>Solutions</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A6675"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="pl-2 pb-3 flex flex-col">
              <Link
                href="/solutions/agencies"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Agencies
              </Link>
              <Link
                href="/solutions/brands"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Brands
              </Link>
              <Link
                href="/industries/banking-and-finance"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Banking and finance
              </Link>
              <Link
                href="/industries/telecom"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Telecom
              </Link>
              <Link
                href="/industries/fmcg"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                FMCG
              </Link>
              <Link
                href="/industries/ecommerce"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                E-commerce
              </Link>
            </div>
          </details>

          {/* Resources Accordion */}
          <details className="border-b border-[#EEF0F3] group">
            <summary className="min-h-[54px] flex items-center justify-between cursor-pointer text-[17px] font-semibold text-[#000000] select-none list-none [&::-webkit-details-marker]:hidden">
              <span>Resources</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A6675"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="pl-2 pb-3 flex flex-col">
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Blog
              </Link>
              <Link
                href="/docs"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Docs
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                About
              </Link>
              <Link
                href="/security"
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center text-[15.5px] text-[#1C2433]"
              >
                Security
              </Link>
            </div>
          </details>

          {/* Direct Menu Links */}
          <Link
            href="/integrations"
            onClick={() => setMobileOpen(false)}
            className="min-h-[54px] flex items-center border-b border-[#EEF0F3] text-[17px] font-semibold text-[#000000]"
          >
            Integrations
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="min-h-[54px] flex items-center border-b border-[#EEF0F3] text-[17px] font-semibold text-[#000000]"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="min-h-[54px] flex items-center border-b border-[#EEF0F3] text-[17px] font-semibold text-[#000000]"
          >
            Contact
          </Link>

          {/* Book a demo Button */}
          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex items-center justify-center h-12 rounded-[24px] bg-[#0070C2] text-white text-[15px] font-semibold shadow-sm"
          >
            Book a demo
          </Link>
        </nav>
      )}
    </header>
  );
}
