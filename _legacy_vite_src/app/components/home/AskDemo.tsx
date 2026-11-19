import React, { useState, useEffect, useRef } from "react";
import { Check, ArrowUp, ArrowDown, ExternalLink } from "lucide-react";
import {
  askDemoConfig,
  askQuestions,
  AskQuestionItem,
} from "@/content/ask-demo";

export function AskDemo({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<"q1" | "q2" | "q3">("q1");
  const [typedQuestion, setTypedQuestion] = useState("");
  const [visibleStepCount, setVisibleStepCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const currentQ: AskQuestionItem =
    askQuestions.find((q) => q.id === activeTab) || askQuestions[0];

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver to start Q1 playback once in view
  useEffect(() => {
    if (hasPlayedInitial || isReducedMotion) {
      if (isReducedMotion) {
        setTypedQuestion(currentQ.question);
        setVisibleStepCount(currentQ.steps.length);
        setShowAnswer(true);
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasPlayedInitial(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayedInitial, isReducedMotion, currentQ]);

  // Run playback sequence whenever activeTab changes (or when initial play triggers)
  useEffect(() => {
    if (isReducedMotion) {
      setTypedQuestion(currentQ.question);
      setVisibleStepCount(currentQ.steps.length);
      setShowAnswer(true);
      return;
    }

    if (!hasPlayedInitial && activeTab === "q1") {
      // Wait for viewport intersection
      return;
    }

    // Reset states
    setTypedQuestion("");
    setVisibleStepCount(0);
    setShowAnswer(false);

    let isCancelled = false;
    const fullText = currentQ.question;
    const charDelay = Math.min(25, Math.floor(1200 / Math.max(fullText.length, 1)));
    let charIndex = 0;

    // a) Type question
    const typeInterval = setInterval(() => {
      if (isCancelled) return;
      charIndex++;
      setTypedQuestion(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);

        // b) Steps list
        // CONFIRM with product team: keep only if the real product shows its steps
        let stepIdx = 0;
        const totalSteps = currentQ.steps.length;

        const stepInterval = setInterval(() => {
          if (isCancelled) return;
          stepIdx++;
          setVisibleStepCount(stepIdx);

          if (stepIdx >= totalSteps) {
            clearInterval(stepInterval);

            // c) Answer card fades in over 200ms
            setTimeout(() => {
              if (!isCancelled) {
                setShowAnswer(true);
              }
            }, 200);
          }
        }, 350);
      }
    }, charDelay);

    return () => {
      isCancelled = true;
      clearInterval(typeInterval);
    };
  }, [activeTab, hasPlayedInitial, isReducedMotion, currentQ]);

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = askQuestions.length;
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % total;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = total - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveTab(askQuestions[nextIndex].id);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>("button");
    buttons?.[nextIndex]?.focus();
  };

  return (
    <div
      ref={containerRef}
      className={`bg-white border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-900/15 flex flex-col text-left overflow-hidden ${className}`}
      style={{ minHeight: "560px" }}
    >
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4A8FE0]" />
          {/* CONFIRM with product team: use one name, "Ask Cerebro", in the product and on the site */}
          <span className="text-sm font-semibold text-slate-900 tracking-tight">
            {askDemoConfig.panelTitle}
          </span>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          {askDemoConfig.contextLabel}
        </span>
      </div>

      {/* Tabs */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Demo questions"
        className="px-4 py-2.5 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-white"
      >
        {askQuestions.map((q, idx) => {
          const isActive = activeTab === q.id;
          return (
            <button
              key={q.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                setActiveTab(q.id);
                setHasPlayedInitial(true);
              }}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-[var(--brand-soft,#EEF4FC)] text-[#2B6CB0] font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {q.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Scrollable Conversation Content */}
      <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm">
        {/* User Question Bubble */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-slate-100/90 text-slate-800 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-medium leading-relaxed">
            {typedQuestion}
            {!isReducedMotion && typedQuestion.length < currentQ.question.length && (
              <span className="inline-block w-1 h-3.5 bg-[#4A8FE0] ml-1 animate-pulse align-middle" />
            )}
          </div>
        </div>

        {/* Steps List */}
        {/* CONFIRM with product team: keep only if the real product shows its steps */}
        {visibleStepCount > 0 && (
          <div className="space-y-1.5 py-1">
            {currentQ.steps.slice(0, visibleStepCount).map((step, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center gap-2 text-[12px] sm:text-[13px] text-slate-500 animate-fadeIn"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check size={10} strokeWidth={3} />
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        )}

        {/* Answer Card */}
        {showAnswer && (
          <div
            aria-live="polite"
            className="border border-slate-200/90 rounded-xl p-3.5 sm:p-4 bg-white shadow-xs space-y-3 animate-fadeIn"
          >
            {/* Date line */}
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
              {currentQ.dateLine}
            </div>

            {/* Compact Table */}
            <div className="overflow-x-auto -mx-1">
              <table className="w-full text-left text-[12px] sm:text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-500 font-medium">
                    {currentQ.columns.map((col) => (
                      <th
                        key={col.key}
                        className={`pb-2 px-1.5 ${
                          col.align === "right"
                            ? "text-right"
                            : col.align === "center"
                            ? "text-center"
                            : "text-left"
                        }`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentQ.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={`hover:bg-slate-50/50 ${
                        row.bold ? "font-semibold text-slate-900 bg-slate-50/40" : "text-slate-700"
                      }`}
                    >
                      {currentQ.columns.map((col) => {
                        const val = row[col.key];
                        const isRight = col.align === "right";

                        // Specialized rendering for change or share
                        if (col.key === "change") {
                          const isUp = row.direction === "up";
                          const isDown = row.direction === "down";
                          // Up CPA is negative (red/rose), Down CPA is positive (emerald)
                          const isPositive =
                            row.change.startsWith("-") && row.platform !== "All platforms";
                          return (
                            <td key={col.key} className="py-1.5 px-1.5 text-right whitespace-nowrap">
                              <span
                                className={`inline-flex items-center gap-0.5 font-medium ${
                                  row.bold
                                    ? "text-slate-900"
                                    : isPositive
                                    ? "text-emerald-600"
                                    : "text-rose-600"
                                }`}
                              >
                                {isUp && <ArrowUp size={12} />}
                                {isDown && <ArrowDown size={12} />}
                                {val}
                              </span>
                            </td>
                          );
                        }

                        if (col.key === "share") {
                          return (
                            <td key={col.key} className="py-1.5 px-1.5 text-right">
                              <div className="inline-flex items-center gap-2 justify-end w-full">
                                <span className="font-mono text-xs">{val}%</span>
                                <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                                  <div
                                    className="h-full bg-[#4A8FE0] rounded-full"
                                    style={{ width: `${val}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                          );
                        }

                        return (
                          <td
                            key={col.key}
                            className={`py-1.5 px-1.5 ${
                              isRight ? "text-right" : "text-left"
                            } ${col.key === "cpa" || col.key === "conversions" ? "font-mono" : ""}`}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Short Narrative */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
              {currentQ.narrative}
            </p>

            {/* Footer quiet buttons */}
            <div className="pt-2 flex items-center justify-end gap-3 text-[11px] text-slate-400">
              <button
                type="button"
                aria-disabled="true"
                tabIndex={-1}
                className="hover:text-slate-500 cursor-not-allowed"
              >
                Copy as CSV
              </button>
              <span>•</span>
              <button
                type="button"
                aria-disabled="true"
                tabIndex={-1}
                className="hover:text-slate-500 cursor-not-allowed"
              >
                Download CSV
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Input CTA Styled Like Product's Prompt Input */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
        <a
          href={askDemoConfig.inputCta.href}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-2xs group"
        >
          <span>{askDemoConfig.inputCta.label}</span>
          <span className="flex items-center gap-1 text-[11px] font-medium text-[#4A8FE0] group-hover:text-[#3A7FD0]">
            Demo <ExternalLink size={12} />
          </span>
        </a>
      </div>
    </div>
  );
}
