import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedLinkItem {
  title: string;
  description: string;
  href: string;
}

export interface RelatedLinksProps {
  title?: string;
  links: RelatedLinkItem[];
  className?: string;
}

export function RelatedLinks({
  title = "Related workflows",
  links,
  className = "",
}: RelatedLinksProps) {
  return (
    <div className={`mt-16 pt-12 border-t border-border ${className}`}>
      <h3 className="text-small font-semibold text-muted uppercase tracking-wider mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="p-5 rounded-card border border-border bg-white hover:border-brand/40 hover:shadow-sm transition-all duration-150 group block text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-body font-heading font-semibold text-ink group-hover:text-brand transition-colors duration-150">
                {link.title}
              </h4>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all duration-150" />
            </div>
            <p className="text-small text-muted leading-relaxed">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
