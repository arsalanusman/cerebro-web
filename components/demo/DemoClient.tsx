"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function DemoClient() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "Marketing leadership",
    sources: ["Meta Ads", "Google Ads"],
    brands: "2 to 5",
    spend: "PKR 5M to 25M",
    ask: "",
    consent: false,
    hp: "", // Honeypot
  });

  const availableSources = [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Other platforms",
    "Spreadsheets",
  ];

  const toggleSource = (src: string) => {
    setFormData((prev) => ({
      ...prev,
      sources: prev.sources.includes(src)
        ? prev.sources.filter((s) => s !== src)
        : [...prev.sources, src],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "demo",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          sources: formData.sources,
          brands: formData.brands,
          spend: formData.spend,
          message: formData.ask,
          hp: formData.hp,
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const err = await res.json();
        setErrorMsg(err.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-[#1C2433] bg-white tabular-nums">
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#F3F8FE] to-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7685]">
            <Link href="/" className="hover:text-[#0070C2] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#000000]">Book a demo</span>
          </nav>

          <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">
            {/* Left: Heading and Form */}
            <div className="flex-1 min-w-0 w-full">
              <h1 className="m-0 font-heading font-semibold text-[34px] sm:text-[44px] md:text-[54px] leading-[1.05] tracking-[-0.03em] text-[#000000]">
                See Cerebro AI on your own campaigns.
              </h1>
              <p className="mt-4 max-w-[560px] text-[17px] md:text-[18px] leading-[1.55] text-[#5A6675]">
                Tell us a little about your team. We’ll connect your platforms or load your sheets, and you ask Cerebro the questions. We reply within one business day.
              </p>

              {!sent ? (
                <form
                  aria-label="Book a demo"
                  onSubmit={handleSubmit}
                  className="mt-8 bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="hp"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.hp}
                    onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                  />

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-[14px] rounded-lg border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-name" className="text-[14px] font-semibold text-[#000000]">
                        Full name
                      </label>
                      <input
                        id="d-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3.5 text-[15px] text-[#000000] focus:border-[#0070C2] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-email" className="text-[14px] font-semibold text-[#000000]">
                        Work email
                      </label>
                      <input
                        id="d-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3.5 text-[15px] text-[#000000] focus:border-[#0070C2] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-company" className="text-[14px] font-semibold text-[#000000]">
                        Company
                      </label>
                      <input
                        id="d-company"
                        type="text"
                        autoComplete="organization"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3.5 text-[15px] text-[#000000] focus:border-[#0070C2] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-role" className="text-[14px] font-semibold text-[#000000]">
                        Your role
                      </label>
                      <select
                        id="d-role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3 text-[15px] text-[#000000] bg-white focus:border-[#0070C2] focus:outline-none"
                      >
                        <option>Marketing leadership</option>
                        <option>Marketing or media team</option>
                        <option>Agency</option>
                        <option>Analyst</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <fieldset className="m-0 p-0 border-0">
                    <legend className="text-[14px] font-semibold text-[#000000] mb-2.5">
                      Where does your ad data come from?
                    </legend>
                    <div className="flex gap-2 flex-wrap">
                      {availableSources.map((s) => {
                        const isChecked = formData.sources.includes(s);
                        return (
                          <label
                            key={s}
                            className={`inline-flex items-center gap-2 min-h-[42px] px-3.5 rounded-full border text-[13.5px] cursor-pointer transition-colors ${
                              isChecked
                                ? "border-[#0070C2] bg-[#E8F2FC] text-[#000000] font-medium"
                                : "border-[#D5D8E0] bg-white text-[#1C2433]"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleSource(s)}
                              className="w-4 h-4 accent-[#0070C2]"
                            />
                            {s}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-brands" className="text-[14px] font-semibold text-[#000000]">
                        Brands or clients you manage <span className="font-normal text-[#6B7685]">(optional)</span>
                      </label>
                      <select
                        id="d-brands"
                        value={formData.brands}
                        onChange={(e) => setFormData({ ...formData, brands: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3 text-[15px] text-[#000000] bg-white focus:border-[#0070C2] focus:outline-none"
                      >
                        <option>1</option>
                        <option>2 to 5</option>
                        <option>6 to 20</option>
                        <option>More than 20</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="d-spend" className="text-[14px] font-semibold text-[#000000]">
                        Monthly ad spend <span className="font-normal text-[#6B7685]">(optional)</span>
                      </label>
                      <select
                        id="d-spend"
                        value={formData.spend}
                        onChange={(e) => setFormData({ ...formData, spend: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3 text-[15px] text-[#000000] bg-white focus:border-[#0070C2] focus:outline-none"
                      >
                        <option>Under PKR 5M</option>
                        <option>PKR 5M to 25M</option>
                        <option>PKR 25M to 100M</option>
                        <option>Over PKR 100M</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="d-ask" className="text-[14px] font-semibold text-[#000000]">
                      What would you like to ask Cerebro? <span className="font-normal text-[#6B7685]">(optional)</span>
                    </label>
                    <textarea
                      id="d-ask"
                      rows={3}
                      placeholder="For example: why did our CPA rise last month?"
                      value={formData.ask}
                      onChange={(e) => setFormData({ ...formData, ask: e.target.value })}
                      className="border border-[#D5D8E0] rounded-lg p-3 text-[15px] text-[#000000] resize-y focus:border-[#0070C2] focus:outline-none"
                    />
                  </div>

                  <label className="flex gap-2.5 items-start text-[14px] leading-[1.5] text-[#1C2433] cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 mt-0.5 accent-[#0070C2]"
                    />
                    <span>
                      I agree to Cerebro dNano contacting me about this request, as described in the{" "}
                      <Link href="/privacy-policy" className="text-[#0070C2] hover:underline">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="min-h-[52px] rounded-xl border-0 bg-[#0070C2] text-white text-[16px] font-semibold hover:bg-[#005DA3] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? "Submitting request..." : "Book my demo"}
                  </button>
                </form>
              ) : (
                <div
                  role="status"
                  className="mt-8 bg-white border border-[#BFD8F0] rounded-2xl p-8 md:p-10 shadow-[0_16px_40px_rgba(0,112,194,0.06)]"
                >
                  <span className="w-11 h-11 rounded-full bg-[#DCFCE7] inline-flex items-center justify-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#15803D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <h2 className="mt-4 font-heading text-[26px] sm:text-[28px] font-semibold text-[#000000]">
                    Thanks, we have your request.
                  </h2>
                  <p className="mt-2.5 text-[16px] leading-[1.6] text-[#5A6675]">
                    We’ll reply from {SITE.email} within one business day to set a time.
                  </p>
                  <div className="mt-6 flex gap-4 flex-wrap items-center">
                    <Link
                      href="/ask-cerebro"
                      className="text-[15px] font-semibold text-[#0070C2] hover:underline no-underline"
                    >
                      See what Ask Cerebro can do &rarr;
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="border-0 bg-transparent p-0 text-[15px] font-semibold text-[#5A6675] hover:text-[#000000] cursor-pointer"
                    >
                      Back to the form
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: What happens next + Quick contact */}
            <div className="lg:w-[380px] shrink-0 w-full flex flex-col gap-5">
              <div className="bg-[#011640] border border-white/10 rounded-2xl p-7 text-white shadow-[0_12px_36px_rgba(1,22,64,0.2)]">
                <h2 className="m-0 font-heading text-[22px] font-semibold text-white">
                  What happens next
                </h2>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white text-[13px] font-semibold inline-flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold text-white">We confirm a time</div>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#C9DDF2]">
                        We reply to set a time that suits your team.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white text-[13px] font-semibold inline-flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold text-white">
                        You see Cerebro on your data
                      </div>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#C9DDF2]">
                        We connect a sample of your platforms or load your sheets, and you ask the questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white text-[13px] font-semibold inline-flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <div className="text-[16px] font-semibold text-white">We agree next steps</div>
                      <p className="mt-1 text-[14px] leading-[1.55] text-[#C9DDF2]">
                        We talk through your reporting needs and the plan that fits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E2E8F0] rounded-2xl p-6 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <h2 className="m-0 text-[16px] font-semibold text-[#000000]">
                  Prefer to talk now?
                </h2>
                <p className="mt-2.5 text-[14.5px] leading-[1.8] text-[#1C2433]">
                  <a href={SITE.phoneHref} className="text-[#0070C2] hover:underline no-underline block">
                    {SITE.phoneDisplay}
                  </a>
                  <a href={`mailto:${SITE.email}`} className="text-[#0070C2] hover:underline no-underline block">
                    {SITE.email}
                  </a>
                  <span className="text-[#5A6675] block">{SITE.hoursDisplay}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
