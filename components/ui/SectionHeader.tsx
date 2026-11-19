import React from "react";

export interface SectionHeaderProps {
  title: string;
  lead?: string;
  eyebrow?: string; // Standard sentence case tag, never all-caps
  className?: string;
}

export function SectionHeader({
  title,
  lead,
  eyebrow,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 text-left ${className}`}>
      {eyebrow && (
        <p className="text-small font-medium text-brand mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink h2-wrap-22ch">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-body-lg-mobile lg:text-body-lg text-muted max-prose-72ch">
          {lead}
        </p>
      )}
    </div>
  );
}
