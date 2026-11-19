import React from "react";
import { Info } from "lucide-react";

export interface CalloutProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Callout({
  title,
  children,
  icon,
  className = "",
}: CalloutProps) {
  return (
    <div
      className={`p-4 lg:p-5 rounded-card border border-border bg-surface flex items-start gap-3.5 text-left ${className}`}
    >
      <div className="text-brand shrink-0 mt-0.5">
        {icon || <Info className="w-5 h-5" aria-hidden="true" />}
      </div>
      <div>
        {title && (
          <h4 className="text-small font-heading font-semibold text-ink mb-1">
            {title}
          </h4>
        )}
        <div className="text-small text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
