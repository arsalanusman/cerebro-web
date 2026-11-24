import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, ShoppingBag, Landmark, Compass } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ProblemSolverSection() {
  const problems = [
    {
      icon: Building2,
      audience: "For Agencies",
      title: "Multi-Client Reporting Overhead",
      description:
        "Consolidate 50+ client accounts under segregated workspaces with automated morning syncs and client-ready exports.",
      link: "/solutions/agencies",
    },
    {
      icon: ShoppingBag,
      audience: "For E-Commerce",
      title: "Mismatched Channel ROAS",
      description:
        "Stop guessing which platform actually drove checkout. Track true blended ROAS and cross-network customer acquisition costs.",
      link: "/solutions/brands",
    },
    {
      icon: Landmark,
      audience: "For Enterprise & Telecom",
      title: "Data Governance & Multi-Currency",
      description:
        "Consolidate hundreds of millions in ad spend across regional business units with strict role-based access and SOC2 compliance.",
      link: "/industries/telecom",
    },
    {
      icon: Compass,
      audience: "For Media Planners",
      title: "Flight Pacing & Spend Drifts",
      description:
        "Catch underdelivering campaigns or runaway budgets with automated threshold alerts and real-time pacing curves.",
      link: "/platform/dashboards",
    },
  ];

  return (
    <div className="py-20 text-center">
      <ScrollReveal direction="down" distance={20}>
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Tailored Workflows
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
            What problem are you looking to solve?
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Select your organization profile to discover how Cerebro customizes ingestion and reporting to your operational workflow.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          return (
            <ScrollReveal key={p.audience} direction="up" distance={24} delay={idx * 0.1}>
              <TiltCard maxTilt={5} glare={true} className="h-full">
                <Link
                  href={p.link}
                  className="group bg-white border border-border hover:border-brand/40 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-brand uppercase tracking-wider bg-brand-soft px-2.5 py-1 rounded-full">
                        {p.audience}
                      </span>
                      <Icon className="w-5 h-5 text-muted group-hover:text-brand transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-ink text-base md:text-lg group-hover:text-brand transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-border flex items-center justify-between text-xs font-semibold text-brand">
                    <span>View solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
