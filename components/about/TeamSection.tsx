"use client";

import React from "react";
import { TeamMember } from "@/content/about";

interface TeamSectionProps {
  leaders: TeamMember[];
  techTeam: TeamMember[];
}

export default function TeamSection({ leaders, techTeam }: TeamSectionProps) {
  return (
    <div className="py-20 md:py-28 bg-white" id="team">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border">
        {/* ========================================================= */}
        {/* SECTION 1: TEAM OUR LEADERS                               */}
        {/* ========================================================= */}
        <div>
          <div className="max-w-[760px]">
            <p className="m-0 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#4F46E5]">
              OUR LEADERS
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[38px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#101426]">
              Executive &amp; Product Leadership
            </h2>
            <p className="mt-3.5 m-0 text-base sm:text-lg text-[#5B6170] leading-[1.6]">
              Steering Cerebro DNano&apos;s product vision, enterprise architecture, and customer partnerships from our headquarters in Karachi, Pakistan.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="group relative bg-[#FBFBFC] hover:bg-white border border-[#E4E7EC] hover:border-[#A5B4FC] rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_12px_32px_rgba(79,70,229,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* Photo or Initials Avatar */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E1B4B] to-[#4F46E5] text-white flex items-center justify-center font-display text-xl font-bold tracking-tight shadow-md group-hover:scale-105 transition-transform">
                    {leader.initials}
                  </div>

                  {/* Title & Department */}
                  <div className="mt-5">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#4F46E5] bg-[#EEF2FF] px-2 py-0.5 rounded">
                      {leader.department}
                    </span>
                    <h3 className="mt-2 m-0 font-heading font-semibold text-[19px] text-[#101426] leading-snug">
                      {leader.name}
                    </h3>
                    <p className="mt-1 m-0 text-[13.5px] font-medium text-[#6B7180]">
                      {leader.role}
                    </p>
                  </div>

                  <p className="mt-3.5 m-0 text-[14px] leading-[1.6] text-[#5B6170]">
                    {leader.bio}
                  </p>
                </div>

                {/* Social Connect Link */}
                {leader.linkedinHref && (
                  <div className="mt-6 pt-4 border-t border-[#EEF0F3]">
                    <a
                      href={leader.linkedinHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors no-underline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: TEAM OUR TECH TEAM                             */}
        {/* ========================================================= */}
        <div className="mt-24 md:mt-32">
          <div className="max-w-[760px]">
            <p className="m-0 mb-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#10B981]">
              OUR TECH TEAM
            </p>
            <h2 className="m-0 font-heading font-semibold text-[28px] sm:text-[38px] md:text-[44px] leading-[1.08] tracking-[-0.02em] text-[#101426]">
              Engineers &amp; Data Architects
            </h2>
            <p className="mt-3.5 m-0 text-base sm:text-lg text-[#5B6170] leading-[1.6]">
              The core technical team building high-volume ingestion connectors, deterministic AI query pipelines, and enterprise-grade security controls.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techTeam.map((member, idx) => (
              <div
                key={idx}
                className="group bg-[#FBFBFC] hover:bg-white border border-[#E4E7EC] hover:border-[#10B981] rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_12px_32px_rgba(16,185,129,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* Top bar with Domain badge */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="w-12 h-12 rounded-xl bg-[#101426] text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm group-hover:bg-[#10B981] transition-colors">
                      {member.initials}
                    </span>
                    <span className="text-[11px] font-semibold text-[#065F46] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 rounded-full">
                      {member.department}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="m-0 font-heading font-semibold text-[18px] text-[#101426] leading-snug">
                      {member.name}
                    </h3>
                    <p className="mt-1 m-0 text-[13px] font-medium text-[#6B7180]">
                      {member.role}
                    </p>
                  </div>

                  <p className="mt-3 m-0 text-[14px] leading-[1.6] text-[#5B6170]">
                    {member.bio}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                {member.stack && member.stack.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[#EEF0F3]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A90A0] block mb-2">
                      Focus Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.stack.map((stk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-[#F1F3F6] text-[#343A46] text-xs font-mono font-medium"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
