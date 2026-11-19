"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Database,
  Target,
  LayoutDashboard,
  FileText,
  Sparkles,
  Layers,
  Shield,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Building2,
  Briefcase,
  Landmark,
  Radio,
  ShoppingBag,
  ShoppingCart,
  BookOpen,
  HelpCircle,
  Info,
} from "lucide-react";
import { proof } from "@/content/proof";
import { Button } from "@/components/ui/Button";

type MenuKey = "platform" | "solutions" | "resources" | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Check if approved case study exists to show "Customers"
  const hasApprovedCustomers = proof.caseStudies.some((cs) => cs.approved);

  // Scroll detection for sticky border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape key and outside click handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap setup
      const firstButton = mobileMenuRef.current?.querySelector("button, a") as HTMLElement;
      firstButton?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (menu: MenuKey) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setActiveMenu(menu);
    }, 120);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  const toggleMenu = (menu: MenuKey) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileSection(mobileSection === section ? null : section);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full h-16 bg-white transition-all duration-150 ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
        {/* Left: Wordmark / Logo */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-control"
            aria-label="Cerebro DNano homepage"
          >
            <span className="font-heading font-semibold text-[22px] tracking-tight text-ink">
              cerebro
            </span>
            <span className="text-[11px] font-semibold text-brand bg-brand-soft px-1.5 py-0.5 rounded-[4px] uppercase tracking-wide">
              DNano
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main Navigation"
          >
            {/* Platform Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("platform")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("platform")}
                aria-expanded={activeMenu === "platform"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 text-small font-medium rounded-control transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  activeMenu === "platform"
                    ? "text-brand bg-surface"
                    : "text-ink hover:text-brand hover:bg-surface"
                }`}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-150 ${
                    activeMenu === "platform" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Platform Mega Menu */}
              {activeMenu === "platform" && (
                <div
                  className="absolute left-0 top-full pt-2 w-[720px] transition-opacity duration-150"
                  role="region"
                  aria-label="Platform Menu"
                >
                  <div className="rounded-card border border-border bg-white shadow-menu p-6 overflow-hidden">
                    <div className="grid grid-cols-12 gap-8">
                      {/* Left Column: Core Workflow in order */}
                      <div className="col-span-7 space-y-1">
                        <p className="text-caption font-semibold text-muted uppercase tracking-wider px-3 mb-2">
                          Core Workflow
                        </p>
                        <Link
                          href="/platform/data-integration"
                          className="flex items-start gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Database className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Data integration
                            </p>
                            <p className="text-caption text-muted">
                              Connect and consolidate every ad platform
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/platform/objective-reporting"
                          className="flex items-start gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Target className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Objective-based reporting
                            </p>
                            <p className="text-caption text-muted">
                              Judge each campaign by its own goal
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/platform/dashboards"
                          className="flex items-start gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <LayoutDashboard className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Dashboards
                            </p>
                            <p className="text-caption text-muted">
                              From overview to a single ad
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/platform/reports"
                          className="flex items-start gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <FileText className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Reports
                            </p>
                            <p className="text-caption text-muted">
                              Widgets, templates and exports
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/ask-cerebro"
                          className="flex items-start gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Sparkles className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Ask Cerebro
                            </p>
                            <p className="text-caption text-muted">
                              Ask questions about your data
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* Right Column: Platform Overview & Features */}
                      <div className="col-span-5 space-y-1 border-l border-border pl-6">
                        <p className="text-caption font-semibold text-muted uppercase tracking-wider px-3 mb-2">
                          Capabilities
                        </p>
                        <Link
                          href="/integrations"
                          className="flex items-center gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Layers className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            Integrations
                          </span>
                        </Link>
                        <Link
                          href="/security"
                          className="flex items-center gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Shield className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            Security
                          </span>
                        </Link>
                        <Link
                          href="/features"
                          className="flex items-center gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <ArrowRight className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            All features
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Featured Card */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href="/demo"
                        className="flex items-center justify-between p-3.5 rounded-control bg-surface hover:bg-brand-soft/60 transition-colors duration-150 group"
                      >
                        <div>
                          <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                            See Cerebro on your own channels
                          </p>
                          <p className="text-caption text-muted">
                            Book a 30-minute walkthrough with your marketing setup
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform duration-150 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("solutions")}
                aria-expanded={activeMenu === "solutions"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 text-small font-medium rounded-control transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  activeMenu === "solutions"
                    ? "text-brand bg-surface"
                    : "text-ink hover:text-brand hover:bg-surface"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-150 ${
                    activeMenu === "solutions" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Solutions Mega Menu */}
              {activeMenu === "solutions" && (
                <div
                  className="absolute left-0 top-full pt-2 w-[540px] transition-opacity duration-150"
                  role="region"
                  aria-label="Solutions Menu"
                >
                  <div className="rounded-card border border-border bg-white shadow-menu p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* By Team */}
                      <div className="space-y-1">
                        <p className="text-caption font-semibold text-muted uppercase tracking-wider px-3 mb-2">
                          By Team
                        </p>
                        <Link
                          href="/solutions/agencies"
                          className="flex items-center gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Briefcase className="w-4 h-4 text-brand" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Agencies
                            </p>
                            <p className="text-caption text-muted">
                              Multi-client reporting and governance
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/solutions/brands"
                          className="flex items-center gap-3 p-3 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Building2 className="w-4 h-4 text-brand" />
                          <div>
                            <p className="text-small font-heading font-semibold text-ink group-hover:text-brand transition-colors">
                              Brands
                            </p>
                            <p className="text-caption text-muted">
                              In-house cross-channel visibility
                            </p>
                          </div>
                        </Link>
                      </div>

                      {/* By Industry */}
                      <div className="space-y-1 border-l border-border pl-6">
                        <p className="text-caption font-semibold text-muted uppercase tracking-wider px-3 mb-2">
                          By Industry
                        </p>
                        <Link
                          href="/industries/banking-and-finance"
                          className="flex items-center gap-2.5 p-2 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Landmark className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            Banking and finance
                          </span>
                        </Link>
                        <Link
                          href="/industries/telecom"
                          className="flex items-center gap-2.5 p-2 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <Radio className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            Telecom
                          </span>
                        </Link>
                        <Link
                          href="/industries/fmcg"
                          className="flex items-center gap-2.5 p-2 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <ShoppingBag className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            FMCG
                          </span>
                        </Link>
                        <Link
                          href="/industries/ecommerce"
                          className="flex items-center gap-2.5 p-2 rounded-control hover:bg-surface transition-colors duration-150 group"
                        >
                          <ShoppingCart className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                          <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                            E-commerce
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Customers link (ONLY if approved case study exists) */}
            {hasApprovedCustomers && (
              <Link
                href="/customers"
                className="px-3 py-2 text-small font-medium text-ink hover:text-brand hover:bg-surface rounded-control transition-colors duration-150"
              >
                Customers
              </Link>
            )}

            {/* Pricing link */}
            <Link
              href="/pricing"
              className="px-3 py-2 text-small font-medium text-ink hover:text-brand hover:bg-surface rounded-control transition-colors duration-150"
            >
              Pricing
            </Link>

            {/* Resources Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("resources")}
                aria-expanded={activeMenu === "resources"}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-2 text-small font-medium rounded-control transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  activeMenu === "resources"
                    ? "text-brand bg-surface"
                    : "text-ink hover:text-brand hover:bg-surface"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted transition-transform duration-150 ${
                    activeMenu === "resources" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {activeMenu === "resources" && (
                <div
                  className="absolute left-0 top-full pt-2 w-64 transition-opacity duration-150"
                  role="region"
                  aria-label="Resources Menu"
                >
                  <div className="rounded-card border border-border bg-white shadow-menu p-3 space-y-1">
                    <Link
                      href="/blog"
                      className="flex items-center gap-3 p-2.5 rounded-control hover:bg-surface transition-colors duration-150 group"
                    >
                      <BookOpen className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                      <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                        Blog
                      </span>
                    </Link>
                    <Link
                      href="/docs"
                      className="flex items-center gap-3 p-2.5 rounded-control hover:bg-surface transition-colors duration-150 group"
                    >
                      <FileText className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                      <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                        Docs
                      </span>
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center gap-3 p-2.5 rounded-control hover:bg-surface transition-colors duration-150 group"
                    >
                      <HelpCircle className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                      <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                        FAQ
                      </span>
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-3 p-2.5 rounded-control hover:bg-surface transition-colors duration-150 group"
                    >
                      <Info className="w-4 h-4 text-muted group-hover:text-brand transition-colors" />
                      <span className="text-small font-medium text-ink group-hover:text-brand transition-colors">
                        About
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-small font-medium text-ink hover:text-brand px-3 py-2 rounded-control transition-colors duration-150"
          >
            Contact
          </Link>
          <Button href="/demo" size="md">
            Book a demo
          </Button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button href="/demo" size="md" className="py-1.5 px-3.5 text-xs">
            Demo
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-control border border-border text-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 top-16 z-50 bg-white overflow-y-auto lg:hidden flex flex-col justify-between p-6 pb-12 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-4">
            {/* Platform Accordion */}
            <div className="border-b border-border pb-4">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("platform")}
                className="w-full flex items-center justify-between text-body font-heading font-semibold text-ink py-2"
                aria-expanded={mobileSection === "platform"}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform duration-150 ${
                    mobileSection === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSection === "platform" && (
                <div className="mt-2 pl-3 space-y-3">
                  <Link
                    href="/platform/data-integration"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Data integration
                  </Link>
                  <Link
                    href="/platform/objective-reporting"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Objective-based reporting
                  </Link>
                  <Link
                    href="/platform/dashboards"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Dashboards
                  </Link>
                  <Link
                    href="/platform/reports"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Reports
                  </Link>
                  <Link
                    href="/ask-cerebro"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Ask Cerebro
                  </Link>
                  <Link
                    href="/integrations"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Integrations
                  </Link>
                  <Link
                    href="/security"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Security
                  </Link>
                  <Link
                    href="/features"
                    className="block text-small text-muted hover:text-brand"
                  >
                    All features
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-border pb-4">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("solutions")}
                className="w-full flex items-center justify-between text-body font-heading font-semibold text-ink py-2"
                aria-expanded={mobileSection === "solutions"}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform duration-150 ${
                    mobileSection === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSection === "solutions" && (
                <div className="mt-2 pl-3 space-y-3">
                  <p className="text-caption font-semibold text-muted uppercase">By Team</p>
                  <Link
                    href="/solutions/agencies"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Agencies
                  </Link>
                  <Link
                    href="/solutions/brands"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Brands
                  </Link>
                  <p className="text-caption font-semibold text-muted uppercase pt-2">By Industry</p>
                  <Link
                    href="/industries/banking-and-finance"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Banking and finance
                  </Link>
                  <Link
                    href="/industries/telecom"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Telecom
                  </Link>
                  <Link
                    href="/industries/fmcg"
                    className="block text-small text-muted hover:text-brand"
                  >
                    FMCG
                  </Link>
                  <Link
                    href="/industries/ecommerce"
                    className="block text-small text-muted hover:text-brand"
                  >
                    E-commerce
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-border pb-4">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("resources")}
                className="w-full flex items-center justify-between text-body font-heading font-semibold text-ink py-2"
                aria-expanded={mobileSection === "resources"}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform duration-150 ${
                    mobileSection === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSection === "resources" && (
                <div className="mt-2 pl-3 space-y-3">
                  <Link
                    href="/blog"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/docs"
                    className="block text-small text-muted hover:text-brand"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-small text-muted hover:text-brand"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/about"
                    className="block text-small text-muted hover:text-brand"
                  >
                    About
                  </Link>
                </div>
              )}
            </div>

            {hasApprovedCustomers && (
              <div className="border-b border-border pb-4">
                <Link
                  href="/customers"
                  className="block text-body font-heading font-semibold text-ink py-2"
                >
                  Customers
                </Link>
              </div>
            )}

            <div className="border-b border-border pb-4">
              <Link
                href="/pricing"
                className="block text-body font-heading font-semibold text-ink py-2"
              >
                Pricing
              </Link>
            </div>

            <div className="border-b border-border pb-4">
              <Link
                href="/contact"
                className="block text-body font-heading font-semibold text-ink py-2"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-8">
            <Button href="/demo" size="lg" className="w-full">
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
