"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const STEPS = ["About you", "Your setup", "Your questions"];

export default function PgDemoV2() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [clientCount, setClientCount] = useState("");
  const [question, setQuestion] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  const togglePlatform = (p: string) => {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      router.push("/demo/thank-you");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="font-sans text-[#2B3040] bg-white min-w-0 tabular-nums">
      <section className="py-20 md:py-26 bg-[#F1F2FF]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 box-border flex gap-12 lg:gap-16 flex-wrap items-start">
          {/* Left Column: Context & Proof */}
          <div className="flex-1 min-w-[320px] max-w-[520px]">
            <p className="m-0 mb-4 text-[14px] font-semibold text-[#4F46E5]">Book a demo</p>
            <h1 className="m-0 font-heading font-semibold text-[38px] sm:text-[46px] md:text-[56px] leading-[1.04] tracking-[-0.03em] text-[#101426]">
              See Cerebro on your own campaigns.
            </h1>
            <p className="mt-5 max-w-[440px] text-[18px] leading-[1.55] text-[#5B6170]">
              A personal walkthrough with your platforms and your questions.
            </p>

            <ul className="mt-7 p-0 list-none flex flex-col gap-3.5">
              <li className="flex gap-2.5 text-[15px] leading-[1.45] text-[#2B3040]">
                <span className="flex-shrink-0 mt-[2px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>Your platforms connected, or your sheets loaded</span>
              </li>
              <li className="flex gap-2.5 text-[15px] leading-[1.45] text-[#2B3040]">
                <span className="flex-shrink-0 mt-[2px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>Ask Cerebro the questions you really have</span>
              </li>
              <li className="flex gap-2.5 text-[15px] leading-[1.45] text-[#2B3040]">
                <span className="flex-shrink-0 mt-[2px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>A plan that fits your team</span>
              </li>
            </ul>

            <div className="mt-9">
              <div
                className="w-[260px] max-w-full bg-white rounded-[18px] p-4 box-border"
                style={{
                  boxShadow: "0 2px 6px rgba(16,20,38,0.05), 0 20px 48px rgba(28,26,87,0.16)",
                }}
              >
                <span className="block ml-auto w-fit bg-[#F2F3F6] rounded-[12px_12px_4px_12px] px-3 py-1.5 text-[13px] text-[#101426]">
                  Why did CPA rise?
                </span>
                <span className="mt-2.5 flex items-center gap-2 text-[13.5px] font-medium text-[#101426]">
                  <span className="w-6 h-6 rounded-lg bg-[#EEF0FF] inline-flex items-center justify-center flex-shrink-0">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
                    </svg>
                  </span>
                  <span>TikTok drove the rise.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Interactive Card */}
          <div className="flex-1 min-w-[320px] max-w-[540px]">
            <div
              className="bg-white border border-[#E4E7EC] rounded-[24px] p-7 sm:p-8"
              style={{ boxShadow: "0 30px 70px rgba(28,26,87,0.10)" }}
            >
              {/* Step indicator header */}
              <ol
                aria-label="Progress"
                className="m-0 p-0 list-none flex gap-4 sm:gap-4.5 flex-wrap"
              >
                {STEPS.map((label, idx) => {
                  const isCurrent = idx === step;
                  const isPast = idx < step;
                  return (
                    <li
                      key={label}
                      aria-current={isCurrent ? "step" : "false"}
                      className="flex items-center gap-2 text-[14px] font-semibold transition-colors"
                      style={{ color: isCurrent ? "#101426" : "#6B7180" }}
                    >
                      <span
                        className="w-[26px] h-[26px] rounded-full text-[12.5px] inline-flex items-center justify-center transition-colors"
                        style={{
                          background: isCurrent || isPast ? "#4F46E5" : "#ECEEF3",
                          color: isCurrent || isPast ? "#FFFFFF" : "#5B6170",
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span>{label}</span>
                    </li>
                  );
                })}
              </ol>

              {/* Step Content */}
              <div className="mt-7">
                {step === 0 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-name" className="text-[14px] font-semibold text-[#101426]">
                        Full name
                      </label>
                      <input
                        id="d-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        autoComplete="name"
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-email" className="text-[14px] font-semibold text-[#101426]">
                        Work email
                      </label>
                      <input
                        id="d-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        autoComplete="email"
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-company" className="text-[14px] font-semibold text-[#101426]">
                        Company
                      </label>
                      <input
                        id="d-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name"
                        autoComplete="organization"
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-role" className="text-[14px] font-semibold text-[#101426]">
                        Your role
                      </label>
                      <select
                        id="d-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      >
                        <option value="">Choose one</option>
                        <option>Marketing leadership</option>
                        <option>Marketing or media team</option>
                        <option>Agency</option>
                        <option>Analyst</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <fieldset className="border-0 m-0 p-0">
                      <legend className="p-0 mb-2 text-[14px] font-semibold text-[#101426]">
                        Platforms you advertise on
                      </legend>
                      <div className="flex gap-2 flex-wrap">
                        {["Meta Ads", "Google Ads", "TikTok Ads", "Other"].map((p) => {
                          const isChecked = platforms.includes(p);
                          return (
                            <label
                              key={p}
                              className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 rounded-full border text-[14px] cursor-pointer transition-colors ${
                                isChecked
                                  ? "border-[#4F46E5] bg-[#EEF0FF] text-[#3730A3]"
                                  : "border-[#D5D8E0] bg-white text-[#101426]"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => togglePlatform(p)}
                                className="w-4 h-4 accent-[#4F46E5]"
                              />
                              {p}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-count" className="text-[14px] font-semibold text-[#101426]">
                        Brands or clients you report on
                      </label>
                      <select
                        id="d-count"
                        value={clientCount}
                        onChange={(e) => setClientCount(e.target.value)}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      >
                        <option value="">Choose one</option>
                        <option>1</option>
                        <option>2 to 5</option>
                        <option>6 to 20</option>
                        <option>More than 20</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-q" className="text-[14px] font-semibold text-[#101426]">
                        What would you like to see?
                      </label>
                      <textarea
                        id="d-q"
                        rows={4}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="For example: why our CPA rose last month"
                        className="border border-[#D5D8E0] rounded-[10px] p-3 font-sans text-[15px] text-[#101426] resize-y outline-none focus:border-[#4F46E5]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-time" className="text-[14px] font-semibold text-[#101426]">
                        Best time to talk (PKT)
                      </label>
                      <select
                        id="d-time"
                        value={timeOfDay}
                        onChange={(e) => setTimeOfDay(e.target.value)}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-[10px] px-3 font-sans text-[15px] text-[#101426] bg-white outline-none focus:border-[#4F46E5]"
                      >
                        <option value="">Choose one</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                      </select>
                    </div>
                    <p className="m-0 text-[13.5px] leading-[1.5] text-[#5B6170]">
                      We use your details only to arrange the demo. See our{" "}
                      <Link href="/privacy-policy" className="text-[#4F46E5] hover:underline">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex justify-between items-center gap-3">
                <span className="text-[13.5px] text-[#5B6170]">
                  Step {step + 1} of 3
                </span>
                <div className="flex gap-2.5">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-white text-[#101426] border border-[#D5D8E0] text-[15px] font-semibold cursor-pointer hover:bg-[#F5F6F8] transition-colors"
                    >
                      Back
                    </button>
                  )}
                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-[#4F46E5] text-white border-0 text-[15px] font-semibold cursor-pointer hover:bg-[#4338CA] transition-colors"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-[#4F46E5] text-white border-0 text-[15px] font-semibold cursor-pointer hover:bg-[#4338CA] transition-colors"
                    >
                      Book my demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
