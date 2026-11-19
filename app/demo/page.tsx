"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Input, Select, Checkbox } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";
import { PlatformBadge } from "@/components/ui/PlatformBadge";
import { BreadcrumbListJsonLd } from "@/components/seo/BreadcrumbListJsonLd";
import { Check } from "lucide-react";

export default function DemoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [teamType, setTeamType] = useState("Agency");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/demo/thank-you");
    }, 400);
  };

  return (
    <>
      <BreadcrumbListJsonLd items={[{ name: "Book a Demo", path: "/demo" }]} />
      <PageHero
        breadcrumbs={[{ label: "Demo", href: "/demo" }]}
        eyebrow="Interactive walkthrough"
        title="See Cerebro on your own channels."
        lead="Book a 30-minute tailored walkthrough. We will demonstrate how your Meta Ads, Google Ads and TikTok Ads data can be unified into a single reporting environment."
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: What to expect */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-h3 font-heading font-semibold text-ink mb-4">
                What we will cover in your session
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-small text-text">
                  <div className="w-5 h-5 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="font-semibold text-ink">API Data Ingestion:</strong> How your channel accounts connect securely without third-party scrapers.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-small text-text">
                  <div className="w-5 h-5 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="font-semibold text-ink">Objective Grouping:</strong> How campaigns are categorized by goal to ensure meaningful comparison.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-small text-text">
                  <div className="w-5 h-5 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="font-semibold text-ink">Ask Cerebro:</strong> How natural language queries extract instant answers from your live metrics.
                  </div>
                </li>
              </ul>

              <div className="p-6 rounded-card bg-surface border border-border">
                <p className="text-caption font-semibold uppercase tracking-wider text-muted mb-3">
                  Supported platforms
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <PlatformBadge platform="Meta Ads" size="sm" />
                  <PlatformBadge platform="Google Ads" size="sm" />
                  <PlatformBadge platform="TikTok Ads" size="sm" />
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-8 lg:p-10 rounded-card border border-border bg-white shadow-sm text-left">
                <h3 className="text-h3 font-heading font-semibold text-ink mb-6">
                  Schedule your consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    label="Full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Arsalan Usman"
                  />
                  <Input
                    label="Work email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                  />
                  <Input
                    label="Company or agency name"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Media"
                  />
                  <Select
                    label="Organization type"
                    value={teamType}
                    onChange={(e) => setTeamType(e.target.value)}
                    options={[
                      { value: "Agency", label: "Digital / Advertising Agency" },
                      { value: "Brand", label: "In-House Brand / Marketing Team" },
                      { value: "Enterprise", label: "Enterprise Holding Group" },
                    ]}
                  />

                  <div className="pt-2">
                    <Checkbox
                      label="I agree to receive communication regarding this product demonstration."
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Scheduling..." : "Request demonstration"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
