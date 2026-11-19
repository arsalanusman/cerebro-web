import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-20 pb-12 border-t border-navy/80">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info & NAP block */}
          <div className="lg:col-span-4 text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading font-semibold text-2xl tracking-tight text-white">
                cerebro
              </span>
              <span className="ml-2 text-xs font-semibold text-brand bg-white/10 px-2 py-0.5 rounded-[4px] uppercase tracking-wide">
                DNano
              </span>
            </Link>
            <p className="text-small text-white/70 max-w-sm mb-6 leading-relaxed">
              Marketing data integration, analytics and reporting platform for Meta Ads, Google Ads and TikTok Ads.
            </p>

            {/* NAP Block strictly from SITE */}
            <div className="text-small text-white/80 space-y-2 pt-2 border-t border-white/10">
              <p className="font-medium text-white">{SITE.name}</p>
              <p className="text-white/70">
                {SITE.address.street}, {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}
              </p>
              <p>
                <a
                  href={SITE.phoneHref}
                  className="text-white hover:text-brand-soft transition-colors tabular-nums"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white hover:text-brand-soft transition-colors"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-caption text-white/60 pt-1">
                {SITE.hoursDisplay}
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-left">
            {/* Platform */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-white/40 mb-4">
                Platform
              </p>
              <ul className="space-y-2.5 text-small">
                <li>
                  <Link href="/platform/data-integration" className="text-white/70 hover:text-white transition-colors">
                    Data integration
                  </Link>
                </li>
                <li>
                  <Link href="/platform/objective-reporting" className="text-white/70 hover:text-white transition-colors">
                    Objectives
                  </Link>
                </li>
                <li>
                  <Link href="/platform/dashboards" className="text-white/70 hover:text-white transition-colors">
                    Dashboards
                  </Link>
                </li>
                <li>
                  <Link href="/platform/reports" className="text-white/70 hover:text-white transition-colors">
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="/ask-cerebro" className="text-white/70 hover:text-white transition-colors">
                    Ask Cerebro
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-white/70 hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-white/70 hover:text-white transition-colors">
                    All features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-white/40 mb-4">
                Solutions
              </p>
              <ul className="space-y-2.5 text-small">
                <li>
                  <Link href="/solutions/agencies" className="text-white/70 hover:text-white transition-colors">
                    Agencies
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/brands" className="text-white/70 hover:text-white transition-colors">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href="/industries/banking-and-finance" className="text-white/70 hover:text-white transition-colors">
                    Banking & Finance
                  </Link>
                </li>
                <li>
                  <Link href="/industries/telecom" className="text-white/70 hover:text-white transition-colors">
                    Telecom
                  </Link>
                </li>
                <li>
                  <Link href="/industries/fmcg" className="text-white/70 hover:text-white transition-colors">
                    FMCG
                  </Link>
                </li>
                <li>
                  <Link href="/industries/ecommerce" className="text-white/70 hover:text-white transition-colors">
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-white/40 mb-4">
                Resources
              </p>
              <ul className="space-y-2.5 text-small">
                <li>
                  <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-white/70 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-white/40 mb-4">
                Company
              </p>
              <ul className="space-y-2.5 text-small">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-white/70 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-caption font-semibold uppercase tracking-wider text-white/40 mb-4">
                Legal
              </p>
              <ul className="space-y-2.5 text-small">
                <li>
                  <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="/data-deletion" className="text-white/70 hover:text-white transition-colors">
                    Data deletion
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-caption text-white/50 gap-4">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <p className="tabular-nums">
            Timezone: {SITE.timezone}
          </p>
        </div>
      </Container>
    </footer>
  );
}
