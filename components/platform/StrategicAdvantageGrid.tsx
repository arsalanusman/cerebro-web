import React from "react";
import { GitCompare, TrendingUp, Bell, Presentation } from "lucide-react";

export default function StrategicAdvantageGrid() {
  const pillars = [
    {
      icon: GitCompare,
      title: "Accurate Attribution",
      description:
        "Meta and Google both claim credit for the same checkout. Cerebro reconciles order IDs to show true, de-duplicated channel incrementality.",
    },
    {
      icon: TrendingUp,
      title: "True Blended ROAS",
      description:
        "Calculate genuine blended return on ad spend by combining aggregate paid media investment directly against net store sales.",
    },
    {
      icon: Bell,
      title: "Automated Budget Pacing",
      description:
        "Continuous flight pacing monitors flag underdelivering ad sets or runaway spend before weekly budget caps are compromised.",
    },
    {
      icon: Presentation,
      title: "Boardroom Decks",
      description:
        "Transform raw performance data into polished visual slides that allow leadership to evaluate ROI without deciphering spreadsheets.",
    },
  ];

  return (
    <div className="py-20 text-center">
      <div className="max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
          Business Impact
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
          Transform scattered data into strategic advantage
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          When your numbers are consolidated and trustworthy, performance marketing shifts from defensive reporting to aggressive profitable scaling.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="bg-white border border-border hover:border-brand/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base md:text-lg font-heading font-bold text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-small text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
