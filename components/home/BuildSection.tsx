"use client";

import React, { useState } from "react";
import { buildData, WidgetDefinition, heroData } from "@/content/home";

function pts(vals: number[], w: number, h: number, max: number): string {
  return vals
    .map((v, i) => {
      const x = Math.round((i / (vals.length - 1)) * w * 10) / 10;
      const y = Math.round((h - 6 - (v / max) * (h - 16)) * 10) / 10;
      return `${x},${y}`;
    })
    .join(" ");
}

interface BuildSectionProps {
  variant?: "option-1" | "option-2";
}

export default function BuildSection({ variant = "option-2" }: BuildSectionProps) {
  const [activeTab, setActiveTab] = useState(0); // 0: Dashboards, 1: Report builder, 2: Hierarchy

  // Dashboard Sub-view state
  const [editing, setEditing] = useState(false);
  const [activeWidgets, setActiveWidgets] = useState<string[]>(buildData.initialWidgets);

  // Report Builder Sub-view state
  const [selectedDim, setSelectedDim] = useState<"platform" | "campaign">("platform");
  const [selectedMetrics, setSelectedMetrics] = useState<Record<string, boolean>>({
    spend: true,
    impr: true,
    clicks: true,
    ctr: true,
    cpm: false,
    cpr: true,
  });

  // Hierarchy Sub-view state
  const [hierPath, setHierPath] = useState<string[]>([]);

  const h2 =
    variant === "option-1" ? buildData.h2Option1 : buildData.h2Option2;
  const lead =
    variant === "option-1" ? buildData.leadOption1 : buildData.leadOption2;

  const smallCur = pts(heroData.curPoints, 280, 90, 360);
  const smallPrev = pts(heroData.prevPoints, 280, 90, 360);

  // Widget management
  const handleRemoveWidget = (key: string) => {
    setActiveWidgets((prev) => prev.filter((id) => id !== key));
  };

  const handleAddWidget = (key: string) => {
    if (activeWidgets.length < 6 && !activeWidgets.includes(key)) {
      setActiveWidgets((prev) => [...prev, key]);
    }
  };

  const availableInLibrary = buildData.allWidgetKeys.filter(
    (key) => !activeWidgets.includes(key)
  );

  // Metric toggle handler
  const handleToggleMetric = (key: string) => {
    setSelectedMetrics((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      // ensure at least one metric remains active
      const anyActive = Object.values(next).some(Boolean);
      return anyActive ? next : prev;
    });
  };

  // Hierarchy drill-down
  const lastHierId = hierPath.length ? hierPath[hierPath.length - 1] : null;
  const currentHierNode = lastHierId ? buildData.hierarchyNodes[lastHierId] : null;
  const currentKids = currentHierNode?.kids || ["tiktok", "meta", "google"];
  const currentLevel = currentHierNode?.level || "Platform";

  const breadcrumbs = [
    { label: "All platforms", to: [] },
    ...hierPath.map((id, i) => ({
      label: buildData.hierarchyNodes[id].name,
      to: hierPath.slice(0, i + 1),
    })),
  ];

  return (
    <section id="build" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <h2 className="m-0 max-w-[760px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
          {h2}
        </h2>
        <p className="mt-4 m-0 max-w-[700px] text-lg leading-[1.55] text-[#5A6675]">
          {lead}
        </p>

        {/* 3 Main Tool Tabs */}
        <div
          role="tablist"
          aria-label="Build tools"
          className="mt-9 flex gap-1.5 flex-wrap"
        >
          {["Dashboards", "Report builder", "Hierarchy"].map((tool, i) => {
            const selected = i === activeTab;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(i)}
                className={`min-h-[44px] px-4 sm:px-5 rounded-[10px] border text-[14.5px] font-semibold cursor-pointer shrink-0 whitespace-nowrap transition-all ${
                  selected
                    ? "border-[#000000] bg-[#000000] text-white"
                    : "border-[#DDE0E7] bg-white text-[#1C2433] hover:border-[#C9CDD6]"
                }`}
              >
                {tool}
              </button>
            );
          })}
        </div>

        {/* Outer Frame */}
        <div className="mt-4 border border-[#E2E8F0] rounded-2xl bg-[#FAFAFC] p-5 sm:p-6 min-h-[520px] box-border shadow-sm">
          {/* ============================================================ */}
          {/* SUB-VIEW 0: DASHBOARDS */}
          {/* ============================================================ */}
          {activeTab === 0 && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center gap-3 flex-wrap">
                <div>
                  <div className="text-base font-semibold text-[#000000]">
                    Executive overview
                  </div>
                  <div className="text-[12.5px] text-[#6B7685] mt-0.5">
                    {editing
                      ? "Remove widgets, or add one from the library."
                      : "Widget-based. Click Edit dashboard to change it."}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setEditing(!editing)}
                  aria-pressed={editing}
                  className={`min-h-[40px] px-4 rounded-[9px] border text-sm font-semibold cursor-pointer transition-all ${
                    editing
                      ? "border-[#0070C2] bg-[#0070C2] text-white"
                      : "border-[#DDE0E7] bg-white text-[#000000] hover:bg-[#F3F4F6]"
                  }`}
                >
                  {editing ? "Done" : "Edit dashboard"}
                </button>
              </div>

              <div className="mt-5 flex flex-col lg:flex-row gap-4 items-start">
                {/* Active Widgets Grid (2 cols) */}
                <div className="flex-1 min-w-0 w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeWidgets.map((wKey) => {
                    const w = buildData.widgetLibrary[wKey];
                    if (!w) return null;
                    return (
                      <div
                        key={wKey}
                        className={`bg-white rounded-xl p-3.5 sm:p-4 min-h-[150px] border flex flex-col justify-between transition-all ${
                          editing ? "border-[#BFD8F0] ring-2 ring-[#0070C2]/10" : "border-[#E2E8F0]"
                        }`}
                      >
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-[13px] font-semibold text-[#000000]">
                            {w.title}
                          </span>
                          {editing && (
                            <button
                              type="button"
                              onClick={() => handleRemoveWidget(wKey)}
                              aria-label={`Remove ${w.title}`}
                              className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#FEE2E2] hover:text-[#991B1B] text-[#5A6675] inline-flex items-center justify-center cursor-pointer transition-colors"
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                aria-hidden="true"
                              >
                                <path d="M6 6l12 12M18 6 6 18" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* KPI type */}
                        {w.type === "kpi" && (
                          <div className="my-auto py-2">
                            <div className="text-[30px] font-semibold text-[#000000] tracking-tight">
                              {w.value}
                            </div>
                            <div
                              className="mt-1 text-[12.5px] font-medium"
                              style={{ color: w.deltaColor }}
                            >
                              {w.delta}
                            </div>
                          </div>
                        )}

                        {/* Trend type */}
                        {w.type === "trend" && (
                          <div className="my-auto py-1">
                            <svg
                              viewBox="0 0 280 90"
                              preserveAspectRatio="none"
                              role="img"
                              aria-label="Spend trend"
                              className="w-full h-24"
                            >
                              <polyline
                                points={smallPrev}
                                fill="none"
                                stroke="#3E8FD4"
                                strokeWidth="1.8"
                                strokeDasharray="3 3"
                              />
                              <polyline
                                points={smallCur}
                                fill="none"
                                stroke="#022771"
                                strokeWidth="2"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}

                        {/* Donut type */}
                        {w.type === "donut" && (
                          <div className="my-auto py-1 flex items-center gap-4">
                            <svg
                              width="92"
                              height="92"
                              viewBox="0 0 100 100"
                              role="img"
                              aria-label="Spend by objective"
                              className="shrink-0"
                            >
                              <g transform="rotate(-90 50 50)">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="38"
                                  fill="none"
                                  stroke="#022771"
                                  strokeWidth="14"
                                  strokeDasharray="148 238.8"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="38"
                                  fill="none"
                                  stroke="#3E8FD4"
                                  strokeWidth="14"
                                  strokeDasharray="83.6 238.8"
                                  strokeDashoffset="-148"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="38"
                                  fill="none"
                                  stroke="#8EC5F0"
                                  strokeWidth="14"
                                  strokeDasharray="7.2 238.8"
                                  strokeDashoffset="-231.6"
                                />
                              </g>
                            </svg>
                            <div className="flex flex-col gap-1.5 text-[12.5px] text-[#1C2433]">
                              <span>Awareness, PKR 3.6M</span>
                              <span>Traffic, PKR 2M</span>
                              <span>Sales, PKR 166K</span>
                            </div>
                          </div>
                        )}

                        {/* List type */}
                        {w.type === "list" && w.items && (
                          <div className="my-auto py-1 flex flex-col">
                            {w.items.map((it, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between gap-3 py-1.5 border-t border-[#F0F1F4] first:border-t-0 text-[12.5px]"
                              >
                                <span className="text-[#1C2433] truncate">{it.name}</span>
                                <span className="text-[#000000] font-semibold shrink-0">
                                  {it.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Funnel type */}
                        {w.type === "funnel" && (
                          <div className="my-auto py-1 flex flex-col gap-1.5">
                            {buildData.funnelItems.map((f, idx) => (
                              <div
                                key={idx}
                                className="rounded-md p-[6px_10px] text-xs text-white flex justify-between"
                                style={{
                                  width: f.pct,
                                  backgroundColor: f.color,
                                }}
                              >
                                <span>{f.name}</span>
                                <span className="font-semibold">{f.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Library drawer when editing */}
                {editing && (
                  <div className="w-full lg:w-[280px] shrink-0 border border-[#EEF0F3] rounded-xl p-4 bg-white shadow-sm flex flex-col gap-2.5">
                    <div className="text-xs font-semibold text-[#6B7685]">
                      Widget library (max 6)
                    </div>
                    {activeWidgets.length >= 6 ? (
                      <div className="text-xs text-[#5A6675] italic py-2">
                        Dashboard is full (6 of 6 widgets). Remove one to add another.
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        {availableInLibrary.map((wKey) => {
                          const item = buildData.widgetLibrary[wKey];
                          return (
                            <div
                              key={wKey}
                              className="flex items-center justify-between p-2 rounded-lg border border-[#E2E8F0] hover:border-[#0070C2] bg-[#FAFAFC] transition-colors"
                            >
                              <div className="flex flex-col">
                                <span className="text-xs font-semibold text-[#000000]">
                                  {item.title}
                                </span>
                                <span className="text-[10.5px] text-[#6B7685]">
                                  {item.kind}
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleAddWidget(wKey)}
                                className="h-7 px-2.5 rounded-md bg-[#0070C2] text-white text-xs font-semibold hover:bg-[#005DA3] transition-colors"
                              >
                                Add
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SUB-VIEW 1: REPORT BUILDER */}
          {/* ============================================================ */}
          {activeTab === 1 && (
            <div className="animate-fadeIn">
              {/* Controls bar */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pb-4 border-b border-[#EEF0F3]">
                {/* Dimensions */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#6B7685]">Breakdown:</span>
                  <div className="inline-flex gap-1">
                    {[
                      { key: "platform", label: "Platform" },
                      { key: "campaign", label: "Meta campaigns" },
                    ].map((d) => {
                      const on = selectedDim === d.key;
                      return (
                        <button
                          key={d.key}
                          type="button"
                          onClick={() => setSelectedDim(d.key as "platform" | "campaign")}
                          className={`min-h-[34px] px-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                            on
                              ? "border-[#000000] bg-[#000000] text-white"
                              : "border-[#DDE0E7] bg-white text-[#1C2433] hover:bg-[#F3F4F6]"
                          }`}
                        >
                          {d.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Metric Checkboxes */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold text-[#6B7685] mr-1">Metrics:</span>
                  {buildData.metricDefs.map((m) => {
                    const on = selectedMetrics[m.key];
                    return (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => handleToggleMetric(m.key)}
                        className={`min-h-[32px] px-2.5 rounded-md border text-xs font-medium cursor-pointer inline-flex items-center gap-1.5 transition-all ${
                          on
                            ? "border-[#BFD8F0] bg-[#F3F8FE] text-[#0070C2] font-semibold"
                            : "border-[#E2E8F0] bg-white text-[#5A6675] hover:border-[#C9CDD6]"
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-[3px] border inline-flex items-center justify-center text-[10px] ${
                            on
                              ? "bg-[#0070C2] border-[#0070C2] text-white"
                              : "border-[#C9CDD6] bg-white"
                          }`}
                        >
                          {on && "✓"}
                        </span>
                        {m.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Data Table */}
              <div className="mt-4 bg-white border border-[#E8EAEF] rounded-xl overflow-x-auto shadow-sm">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-[#F8F9FA] border-b border-[#EEF0F3]">
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-left font-semibold text-xs text-[#5A6675]"
                      >
                        {selectedDim === "platform" ? "Platform" : "Campaign"}
                      </th>
                      {buildData.metricDefs
                        .filter((m) => selectedMetrics[m.key])
                        .map((m) => (
                          <th
                            key={m.key}
                            scope="col"
                            className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                          >
                            {m.label}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {buildData.reportData[selectedDim].map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="border-t border-[#F0F1F4] hover:bg-[#F9FAFB] transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-[#000000]">
                          {row.name}
                        </td>
                        {buildData.metricDefs
                          .filter((m) => selectedMetrics[m.key])
                          .map((m) => (
                            <td
                              key={m.key}
                              className={`py-3 px-4 text-right ${
                                m.key === "cpr" ? "font-semibold text-[#000000]" : "text-[#1C2433]"
                              }`}
                            >
                              {(row as Record<string, string>)[m.key]}
                            </td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SUB-VIEW 2: HIERARCHY REPORTS */}
          {/* ============================================================ */}
          {activeTab === 2 && (
            <div className="animate-fadeIn">
              {/* Breadcrumb row */}
              <div className="flex items-center gap-1.5 flex-wrap pb-3.5 border-b border-[#EEF0F3]">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-[#9AA0AD] text-xs">/</span>}
                      <button
                        type="button"
                        onClick={() => setHierPath(crumb.to)}
                        className={`h-7 px-2.5 rounded-md border text-xs font-semibold cursor-pointer transition-all ${
                          isLast
                            ? "border-[#000000] bg-[#000000] text-white"
                            : "border-[#DDE0E7] bg-white text-[#1C2433] hover:bg-[#F3F4F6]"
                        }`}
                      >
                        {crumb.label}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Hierarchy Table */}
              <div className="mt-4 bg-white border border-[#E8EAEF] rounded-xl overflow-x-auto shadow-sm">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-[#F8F9FA] border-b border-[#EEF0F3]">
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-left font-semibold text-xs text-[#5A6675]"
                      >
                        {currentLevel}
                      </th>
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                      >
                        Spend
                      </th>
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                      >
                        Impressions
                      </th>
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                      >
                        Clicks
                      </th>
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                      >
                        CTR
                      </th>
                      <th
                        scope="col"
                        className="py-2.5 px-4 text-right font-semibold text-xs text-[#5A6675]"
                      >
                        Cost per result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentKids.map((kId) => {
                      const node = buildData.hierarchyNodes[kId];
                      if (!node) return null;
                      const hasKids = !!node.kids;
                      return (
                        <tr
                          key={kId}
                          onClick={() => {
                            if (hasKids) {
                              setHierPath([...hierPath, kId]);
                            }
                          }}
                          className={`border-t border-[#F0F1F4] transition-colors ${
                            hasKids
                              ? "cursor-pointer hover:bg-[#F3F8FE]"
                              : "hover:bg-[#F9FAFB]"
                          }`}
                        >
                          <td className="py-3 px-4 font-medium text-[#000000] flex items-center gap-2">
                            <span className={hasKids ? "text-[#0070C2] font-semibold" : ""}>
                              {node.name}
                            </span>
                            {hasKids && (
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0070C2"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right text-[#1C2433]">{node.spend}</td>
                          <td className="py-3 px-4 text-right text-[#1C2433]">{node.impr}</td>
                          <td className="py-3 px-4 text-right text-[#1C2433]">{node.clicks}</td>
                          <td className="py-3 px-4 text-right text-[#1C2433]">{node.ctr}</td>
                          <td className="py-3 px-4 text-right font-semibold text-[#000000]">
                            {node.cpr}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
