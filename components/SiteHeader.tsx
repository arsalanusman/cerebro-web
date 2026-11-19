"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Authentic icons from handoff/design/SiteHeader.dc.html
const ICONS: Record<string, string> = {
  spark: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>("platform");
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
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

  // Handle outside click & Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openMenu) {
          const trigger = triggerRefs.current[openMenu];
          setOpenMenu(null);
          trigger?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
        }
      }
    },
    [openMenu, mobileOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handlePointerEnterTrigger = (menuKey: string) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    if (openMenu) {
      setOpenMenu(menuKey);
    } else {
      hoverTimer.current = setTimeout(() => {
        setOpenMenu(menuKey);
      }, 120);
    }
  };

  const handlePointerLeaveTrigger = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    leaveTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const handlePanelPointerEnter = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };

  const handlePanelPointerLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  const toggleMenu = (menuKey: string) => {
    if (openMenu === menuKey) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuKey);
    }
  };

  const MENUS: Record<string, MenuSection> = {
    home: {
      label: "Home menu",
      cols: [
        {
          title: "Homepage options",
          items: [
            {
              id: "h1",
              label: "Option 1 (Data-forward)",
              text: "Bring in any data, ask anything",
              href: "/option-1",
              icon: ICONS.dash,
            },
            {
              id: "h2",
              label: "Option 2 (AI-forward)",
              text: "Your AI analyst, AI-forward",
              href: "/option-2",
              icon: ICONS.spark,
            },
            {
              id: "h3",
              label: "Present both",
              text: "Switch between the two options from a dropdown",
              href: "/present",
              icon: ICONS.layers,
            },
          ],
        },
      ],
      feature: {
        href: "/present",
        bg: "#F5F6FF",
        bd: "#E0E3FF",
        kicker: "#4F46E5",
        title: "#101426",
        body: "#5B6170",
        link: "#4F46E5",
        eyebrow: "Presenting?",
        heading: "Show both homepage options in one view",
        text: "One page with a dropdown to switch between option 1 and option 2.",
        cta: "Open presenter view",
      },
    },
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
              id: "p4",
              label: "AI sheet mapping",
              text: "CSV, Excel and Google Sheets",
              href: "/integrations#sheets",
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
              label: "Hierarchy reports",
              text: "From platform to a single ad",
              href: "/platform/objective-reporting",
              icon: ICONS.layers,
            },
          ],
        },
      ],
      feature: {
        href: "/demo",
        bg: "#1C1A57",
        bd: "#1C1A57",
        kicker: "#A5B4FC",
        title: "#FFFFFF",
        body: "#CDD0F3",
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
              text: "Spend through to conversions",
              href: "/industries/ecommerce",
              icon: ICONS.cart,
            },
          ],
        },
      ],
      feature: {
        href: "/solutions/agencies",
        bg: "#F5F6FF",
        bd: "#E0E3FF",
        kicker: "#4F46E5",
        title: "#101426",
        body: "#5B6170",
        link: "#4F46E5",
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
        href: "/blog/understanding-objective-based-ad-reporting",
        bg: "#FFFFFF",
        bd: "#E4E7EC",
        kicker: "#4F46E5",
        title: "#101426",
        body: "#5B6170",
        link: "#4F46E5",
        eyebrow: "Latest article",
        heading: "Blended ROAS vs platform ROAS: which number should you trust?",
        text: "Why platform totals never add up, and how to report both honestly.",
        cta: "Read the article",
      },
    },
  };

  const navTriggers = [
    { key: "home", label: "Home", isMenu: true },
    { key: "platform", label: "Platform", isMenu: true },
    { key: "solutions", label: "Solutions", isMenu: true },
    { key: "integrations", label: "Integrations", href: "/integrations" },
    { key: "pricing", label: "Pricing", href: "/pricing" },
    { key: "resources", label: "Resources", isMenu: true },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-[#E4E7EC] font-sans text-[#2B3040]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 h-[84px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Cerebro DNano home"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-control"
        >
          <Image
            src="/brand/logo.png"
            alt="Cerebro DNano"
            width={180}
            height={56}
            priority
            className="h-[44px] sm:h-[50px] lg:h-[56px] w-auto object-contain block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main"
          className="hidden xl:flex items-center gap-1 flex-1 ml-4"
        >
          {/* Ask Cerebro Pill Button */}
          <Link
            href="/ask-cerebro"
            className="inline-flex items-center gap-1.5 h-[38px] px-3 mr-2 rounded-full bg-[#EEF0FF] text-[#3730A3] hover:bg-[#E0E3FF] text-[15px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
            >
              <path d={ICONS.spark} />
            </svg>
            Ask Cerebro
          </Link>

          {/* Nav Items */}
          {navTriggers.map((t) => {
            if (t.isMenu) {
              const isOpen = openMenu === t.key;
              return (
                <div
                  key={t.key}
                  onPointerEnter={() => handlePointerEnterTrigger(t.key)}
                  onPointerLeave={handlePointerLeaveTrigger}
                  className="relative"
                >
                  <button
                    ref={(el) => {
                      triggerRefs.current[t.key] = el;
                    }}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`menu-${t.key}`}
                    onClick={() => toggleMenu(t.key)}
                    className={`inline-flex items-center gap-1.5 h-[38px] px-3 rounded-control text-[15px] font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                      isOpen
                        ? "bg-[#EEF0FF] text-[#3730A3]"
                        : "text-[#2B3040] hover:bg-[#F3F4F6]"
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
                      className={`transition-transform duration-150 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={t.key}
                href={t.href || "/"}
                className="inline-flex items-center h-[38px] px-3 rounded-control text-[#2B3040] hover:bg-[#F3F4F6] text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {t.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden xl:flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center h-[38px] px-3 rounded-control text-[#2B3040] hover:bg-[#F3F4F6] text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Contact
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-[44px] px-5 rounded-control bg-[#4F46E5] hover:bg-[#4338CA] text-white text-[15px] font-semibold transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex xl:hidden items-center gap-2">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center h-[36px] px-3.5 rounded-control bg-[#4F46E5] text-white text-caption font-semibold"
          >
            Book a demo
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="w-11 h-11 rounded-[10px] border border-[#E4E7EC] bg-white inline-flex items-center justify-center text-[#101426] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {openMenu && MENUS[openMenu] && (
        <div
          id={`menu-${openMenu}`}
          role="region"
          aria-label={MENUS[openMenu].label}
          onPointerEnter={handlePanelPointerEnter}
          onPointerLeave={handlePanelPointerLeave}
          className="absolute left-0 right-0 top-full bg-white border-t border-[#EEF0F3] border-b border-[#E4E7EC] shadow-[0_24px_48px_rgba(16,20,38,0.12)] animate-in fade-in duration-150"
        >
          <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-7 pb-8 flex gap-8 flex-wrap">
            {/* Columns */}
            {MENUS[openMenu].cols.map((col, cIdx) => (
              <div key={cIdx} className="flex-1 min-w-[240px]">
                <div className="text-[12px] font-semibold text-[#6B7180] px-3 mb-2">
                  {col.title}
                </div>
                <div className="flex flex-col gap-0.5">
                  {col.items.map((it) => (
                    <Link
                      key={it.id}
                      href={it.href}
                      onClick={() => setOpenMenu(null)}
                      className="group flex items-start gap-3 p-2.5 rounded-[10px] hover:bg-[#F5F6FF] transition-colors"
                    >
                      <span className="w-[34px] h-[34px] rounded-[9px] bg-[#EEF0FF] group-hover:bg-[#E0E3FF] text-[#4F46E5] inline-flex items-center justify-center shrink-0 transition-colors">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d={it.icon} />
                        </svg>
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[14.5px] font-semibold text-[#101426] group-hover:text-[#3730A3] transition-colors leading-snug">
                          {it.label}
                        </span>
                        <span className="text-[13px] leading-snug text-[#5B6170]">
                          {it.text}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Feature Card */}
            {MENUS[openMenu].feature && (
              <Link
                href={MENUS[openMenu].feature.href}
                onClick={() => setOpenMenu(null)}
                style={{
                  backgroundColor: MENUS[openMenu].feature.bg,
                  borderColor: MENUS[openMenu].feature.bd,
                }}
                className="w-[300px] rounded-[14px] border p-[22px] flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div>
                  <span
                    style={{ color: MENUS[openMenu].feature.kicker }}
                    className="text-[12px] font-semibold block mb-2"
                  >
                    {MENUS[openMenu].feature.eyebrow}
                  </span>
                  <span
                    style={{ color: MENUS[openMenu].feature.title }}
                    className="font-heading text-[18px] leading-[1.3] font-semibold block mb-2"
                  >
                    {MENUS[openMenu].feature.heading}
                  </span>
                  <span
                    style={{ color: MENUS[openMenu].feature.body }}
                    className="text-[13.5px] leading-relaxed block"
                  >
                    {MENUS[openMenu].feature.text}
                  </span>
                </div>
                <span
                  style={{ color: MENUS[openMenu].feature.link }}
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                >
                  {MENUS[openMenu].feature.cta}
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
            )}
          </div>
        </div>
      )}

      {/* Full-Screen Mobile Drawer (< 1024px) */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto xl:hidden animate-in fade-in duration-200"
        >
          {/* Top Mobile Bar */}
          <div className="h-[76px] px-5 border-b border-[#E4E7EC] flex items-center justify-between shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/brand/logo.png"
                alt="Cerebro DNano"
                width={150}
                height={46}
                className="h-[46px] w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="w-11 h-11 rounded-[10px] border border-[#E4E7EC] bg-[#F3F4F6] inline-flex items-center justify-center text-[#101426] cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Body */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Ask Cerebro Pill */}
            <Link
              href="/ask-cerebro"
              onClick={() => setMobileOpen(false)}
              className="inline-flex self-start items-center min-h-[40px] px-3.5 rounded-full bg-[#EEF0FF] text-[#3730A3] text-[16px] font-semibold mb-3"
            >
              Ask Cerebro
            </Link>

            {/* Accordion Group 1: Home */}
            <div className="border-b border-[#EEF0F3]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "home" ? null : "home")
                }
                className="w-full flex items-center justify-between min-h-[52px] text-[17px] font-semibold text-[#101426] text-left"
              >
                <span>Home options</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${
                    mobileExpanded === "home" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {mobileExpanded === "home" && (
                <div className="pb-3 pl-2 flex flex-col gap-2">
                  <Link
                    href="/option-1"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Option 1 (Data-forward)
                  </Link>
                  <Link
                    href="/option-2"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Option 2 (AI-forward)
                  </Link>
                  <Link
                    href="/present"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#4F46E5] font-semibold"
                  >
                    Present both
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion Group 2: Platform */}
            <div className="border-b border-[#EEF0F3]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "platform" ? null : "platform")
                }
                className="w-full flex items-center justify-between min-h-[52px] text-[17px] font-semibold text-[#3730A3] text-left"
              >
                <span>Platform</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${
                    mobileExpanded === "platform" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {mobileExpanded === "platform" && (
                <div className="pb-3 pl-2 flex flex-col gap-2">
                  <Link
                    href="/ask-cerebro"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Ask Cerebro
                  </Link>
                  <Link
                    href="/platform/data-integration"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    AI data engine
                  </Link>
                  <Link
                    href="/integrations#sheets"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    AI sheet mapping
                  </Link>
                  <Link
                    href="/platform/dashboards"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Dashboards
                  </Link>
                  <Link
                    href="/platform/reports"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Report builder
                  </Link>
                  <Link
                    href="/platform/objective-reporting"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Hierarchy & objectives
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion Group 3: Solutions */}
            <div className="border-b border-[#EEF0F3]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")
                }
                className="w-full flex items-center justify-between min-h-[52px] text-[17px] font-semibold text-[#101426] text-left"
              >
                <span>Solutions</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${
                    mobileExpanded === "solutions" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {mobileExpanded === "solutions" && (
                <div className="pb-3 pl-2 flex flex-col gap-2">
                  <Link
                    href="/solutions/agencies"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Agencies
                  </Link>
                  <Link
                    href="/solutions/brands"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Brands
                  </Link>
                  <Link
                    href="/industries/banking-and-finance"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Banking and finance
                  </Link>
                  <Link
                    href="/industries/telecom"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Telecom
                  </Link>
                  <Link
                    href="/industries/fmcg"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    FMCG
                  </Link>
                  <Link
                    href="/industries/ecommerce"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    E-commerce
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/integrations"
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[52px] border-b border-[#EEF0F3] text-[17px] font-semibold text-[#101426]"
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[52px] border-b border-[#EEF0F3] text-[17px] font-semibold text-[#101426]"
            >
              Pricing
            </Link>

            {/* Accordion Group 4: Resources */}
            <div className="border-b border-[#EEF0F3]">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === "resources" ? null : "resources")
                }
                className="w-full flex items-center justify-between min-h-[52px] text-[17px] font-semibold text-[#101426] text-left"
              >
                <span>Resources</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${
                    mobileExpanded === "resources" ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {mobileExpanded === "resources" && (
                <div className="pb-3 pl-2 flex flex-col gap-2">
                  <Link
                    href="/blog"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/docs"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    About
                  </Link>
                  <Link
                    href="/security"
                    onClick={() => setMobileOpen(false)}
                    className="min-h-[38px] flex items-center text-[15px] text-[#2B3040]"
                  >
                    Security
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center min-h-[52px] border-b border-[#EEF0F3] text-[17px] font-semibold text-[#101426]"
            >
              Contact
            </Link>

            {/* Mobile Bottom CTA */}
            <div className="mt-auto pt-6">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center min-h-[48px] rounded-[10px] bg-[#4F46E5] text-white text-[15px] font-semibold"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
