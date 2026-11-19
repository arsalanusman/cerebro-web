import React from "react";
import { objectiveReporting } from "@/content/home";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export interface VerdictCompareProps {
  className?: string;
}

export function VerdictCompare({ className = "" }: VerdictCompareProps) {
  const data = objectiveReporting.verdictCompare;

  return (
    <div
      className={`rounded-card border border-border bg-white p-6 sm:p-7 shadow-xs text-left ${className}`}
    >
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-border">
        <span className="text-caption font-semibold uppercase tracking-wider text-muted font-heading">
          Signature Comparison
        </span>
        <span className="text-caption font-medium text-muted">
          {data.label}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left: Judged on cost per sale (Wrong metric for awareness campaign) */}
        <div className="p-5 rounded-control border border-rose-200/90 bg-rose-50/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-rose-700 font-semibold text-caption uppercase tracking-wide">
              <AlertCircle size={14} />
              <span>{data.left.header}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-ink tracking-tight tabular-nums mt-1 mb-1">
              {data.left.figure}
            </div>
            <div className="text-caption text-muted font-medium mb-4">
              {data.left.label}
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-control text-caption font-semibold bg-rose-100 text-rose-800 border border-rose-200">
              {data.left.pill}
            </span>
          </div>
        </div>

        {/* Right: Judged on its goal: awareness (Correct metric) */}
        <div className="p-5 rounded-control border border-emerald-200/90 bg-emerald-50/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-emerald-700 font-semibold text-caption uppercase tracking-wide">
              <CheckCircle2 size={14} />
              <span>{data.right.header}</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-ink tracking-tight tabular-nums mt-1 mb-1">
              {data.right.figure}
            </div>
            <div className="text-caption text-muted font-medium mb-4 flex items-center gap-2">
              <span>{data.right.label}</span>
              <span>•</span>
              <span className="font-semibold text-ink">{data.right.subline}</span>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-control text-caption font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              {data.right.pill}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
