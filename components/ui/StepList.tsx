import React from "react";

export interface StepItem {
  number: number | string;
  title: string;
  description: string;
}

export interface StepListProps {
  steps: StepItem[];
  className?: string;
}

export function StepList({ steps, className = "" }: StepListProps) {
  return (
    <ol className={`space-y-6 lg:space-y-8 ${className}`}>
      {steps.map((step, idx) => (
        <li key={idx} className="flex items-start gap-4 lg:gap-6">
          <div className="w-10 h-10 rounded-control bg-surface-2 border border-border flex items-center justify-center font-heading font-semibold text-ink text-body shrink-0 tabular-nums">
            {step.number}
          </div>
          <div className="pt-1 text-left">
            <h4 className="text-body font-heading font-semibold text-ink">
              {step.title}
            </h4>
            <p className="mt-1 text-small text-muted leading-relaxed max-prose-72ch">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
