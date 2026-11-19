import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  href?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  href,
  className = "",
}: FeatureCardProps) {
  const content = (
    <div
      className={`p-6 lg:p-8 rounded-card border border-border bg-white transition-all duration-150 flex flex-col justify-between ${
        href ? "hover:border-brand/40 hover:shadow-sm group cursor-pointer" : ""
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          {icon && (
            <div className="w-10 h-10 rounded-control bg-surface border border-border flex items-center justify-center text-ink">
              {icon}
            </div>
          )}
          {badge && (
            <span className="text-caption font-medium px-2.5 py-1 rounded-full bg-brand-soft text-brand">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-h3-mobile lg:text-h3 font-heading font-semibold text-ink mb-2">
          {title}
        </h3>
        <p className="text-small text-muted leading-relaxed">
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-6 flex items-center gap-1.5 text-small font-semibold text-brand group-hover:text-brand-hover">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
