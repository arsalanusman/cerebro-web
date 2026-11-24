"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ContactClient() {
  const [showMap, setShowMap] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "Sales",
    message: "",
    consent: false,
    hp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          topic: formData.topic,
          message: formData.message,
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

  const photos = [
    {
      file: "The Forum, Clifton",
      caption: "The Forum in Block 9 Clifton, Karachi.",
    },
    {
      file: "Engineering floor",
      caption: "Where Cerebro data integration and AI are built.",
    },
    {
      file: "Meeting space",
      caption: "Collaboration rooms for customer onboarding and training.",
    },
  ];

  return (
    <div className="font-sans text-[#1C2433] bg-white tabular-nums">
      {/* Hero & Contact Details */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#F3F8FE] to-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#6B7685]">
            <Link href="/" className="hover:text-[#0070C2] no-underline">
              Home
            </Link>{" "}
            / <span className="text-[#000000]">Contact</span>
          </nav>

          <h1 className="mt-7 font-heading font-semibold text-[36px] sm:text-[44px] md:text-[54px] leading-[1.05] tracking-[-0.03em] text-[#000000]">
            Contact Cerebro dNano
          </h1>
          <p className="mt-4 max-w-[560px] text-[18px] leading-[1.55] text-[#5A6675]">
            Questions about Cerebro AI, a demo, a custom connector or working together? Reach us here.
          </p>

          <div className="mt-11 flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Address, Phone, Map */}
            <div className="lg:w-[420px] shrink-0 w-full flex flex-col gap-5">
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <address className="not-italic flex flex-col gap-5 text-[15px]">
                  <div>
                    <div className="text-[13px] font-semibold text-[#6B7685] uppercase tracking-wider">
                      Office
                    </div>
                    <div className="mt-1.5 text-[16px] leading-[1.6] text-[#000000]">
                      {SITE.name}
                      <br />
                      {SITE.address.unit}
                      <br />
                      {SITE.address.street}
                      <br />
                      {SITE.address.city} {SITE.address.postalCode}, {SITE.address.country}
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#6B7685] uppercase tracking-wider">
                      Phone
                    </div>
                    <a
                      href={SITE.phoneHref}
                      className="mt-1.5 inline-block text-[16px] text-[#0070C2] hover:underline no-underline"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#6B7685] uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1.5 inline-block text-[16px] text-[#0070C2] hover:underline no-underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#6B7685] uppercase tracking-wider">
                      Hours
                    </div>
                    <div className="mt-1.5 text-[15.5px] text-[#000000]">
                      {SITE.hoursDisplay}
                    </div>
                  </div>
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Forum+Block+9+Clifton+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 min-h-[44px] text-[15px] font-semibold text-[#0070C2] hover:underline no-underline"
                >
                  <span>Get directions</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </div>

              {/* Lazy-loaded Map */}
              <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-[#EEF0F4]">
                {!showMap ? (
                  <div className="h-[240px] flex flex-col items-center justify-center gap-3 text-center p-5">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5A6675"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                    <span className="text-[14px] text-[#5A6675]">
                      The map loads only when you ask for it.
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowMap(true)}
                      className="min-h-[42px] px-4 rounded-lg border border-[#D5D8E0] bg-white text-[14px] font-semibold text-[#000000] hover:bg-[#FAFAFB] transition-colors cursor-pointer"
                    >
                      Show map
                    </button>
                  </div>
                ) : (
                  <iframe
                    title="Cerebro dNano Office Location"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=The%20Forum%2C%20Block%209%20Clifton%2C%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                )}
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className="flex-1 min-w-0 w-full">
              {!sent ? (
                <form
                  aria-label="Send us a message"
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col gap-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
                >
                  <h2 className="m-0 font-heading text-[22px] font-semibold text-[#000000]">
                    Send us a message
                  </h2>

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
                      <label htmlFor="c-name" className="text-[14px] font-semibold text-[#000000]">
                        Name
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3.5 text-[15px] text-[#000000] focus:border-[#0070C2] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-email" className="text-[14px] font-semibold text-[#000000]">
                        Email
                      </label>
                      <input
                        id="c-email"
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
                      <label htmlFor="c-company" className="text-[14px] font-semibold text-[#000000]">
                        Company <span className="font-normal text-[#6B7685]">(optional)</span>
                      </label>
                      <input
                        id="c-company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3.5 text-[15px] text-[#000000] focus:border-[#0070C2] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-topic" className="text-[14px] font-semibold text-[#000000]">
                        Topic
                      </label>
                      <select
                        id="c-topic"
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="min-h-[46px] border border-[#D5D8E0] rounded-lg px-3 text-[15px] text-[#000000] bg-white focus:border-[#0070C2] focus:outline-none"
                      >
                        <option>Sales</option>
                        <option>Custom connector</option>
                        <option>Support</option>
                        <option>Partnerships</option>
                        <option>Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-msg" className="text-[14px] font-semibold text-[#000000]">
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                      I agree to Cerebro dNano contacting me about this message, as described in the{" "}
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
                    {submitting ? "Sending message..." : "Send message"}
                  </button>

                  <p className="m-0 text-[14px] text-[#5A6675]">
                    Looking for a demo?{" "}
                    <Link href="/demo" className="text-[#0070C2] hover:underline">
                      Book one here
                    </Link>
                    .
                  </p>
                </form>
              ) : (
                <div
                  role="status"
                  className="bg-white border border-[#BFD8F0] rounded-2xl p-8 md:p-10 shadow-[0_16px_40px_rgba(0,112,194,0.06)]"
                >
                  <h2 className="m-0 font-heading text-[26px] font-semibold text-[#000000]">
                    Thanks, your message is on its way.
                  </h2>
                  <p className="mt-2.5 text-[16px] leading-[1.6] text-[#5A6675]">
                    We’ll reply from {SITE.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 min-h-[44px] border-0 bg-transparent p-0 text-[15px] font-semibold text-[#0070C2] hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Photos Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <h2 className="m-0 font-heading font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-[1.15] tracking-[-0.02em] text-[#000000]">
            Our office in Clifton
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {photos.map((p, idx) => (
              <figure key={idx} className="m-0 flex flex-col">
                <div className="h-[220px] rounded-xl border border-dashed border-[#CDD1DA] bg-[#F6F8FB] flex flex-col items-center justify-center p-4 text-center">
                  <span className="w-10 h-10 rounded-full bg-[#ECEEF3] inline-flex items-center justify-center text-[#5A6675] mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </span>
                  <span className="font-heading font-semibold text-[15px] text-[#000000]">
                    {p.file}
                  </span>
                  <span className="text-[12.5px] text-[#6B7685] mt-1">
                    The Forum, Clifton
                  </span>
                </div>
                <figcaption className="mt-2.5 text-[14px] text-[#5A6675]">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
