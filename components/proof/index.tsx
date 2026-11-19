import React from "react";
import Image from "next/image";
import Link from "next/link";
import { proof, LogoProof, TestimonialProof, CaseStudyProof } from "@/content/proof";

/**
 * LogoWall: Renders nothing unless items have approved: true
 */
export function LogoWall({ className = "" }: { className?: string }) {
  const approvedLogos = proof.logos.filter((item) => item.approved);

  if (approvedLogos.length === 0) {
    return null;
  }

  return (
    <div className={`py-12 border-y border-border bg-surface ${className}`}>
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="text-small font-medium text-muted mb-8">
          Trusted by marketing and analytics teams
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12 grayscale opacity-75">
          {approvedLogos.map((logo, idx) => (
            <div key={idx} className="relative h-7 w-28 flex items-center justify-center">
              <Image
                src={logo.file}
                alt={logo.name}
                width={112}
                height={28}
                className="max-h-7 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Testimonial: Renders nothing unless approved: true
 */
export function Testimonial({
  item,
  className = "",
}: {
  item?: TestimonialProof;
  className?: string;
}) {
  const target = item || proof.testimonials.find((t) => t.approved);

  if (!target || !target.approved) {
    return null;
  }

  return (
    <figure className={`p-8 rounded-card border border-border bg-white text-left ${className}`}>
      <blockquote className="text-body-lg text-ink font-heading font-medium leading-relaxed mb-6">
        &ldquo;{target.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3.5">
        {target.photo && (
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-surface-2 border border-border shrink-0">
            <Image
              src={target.photo}
              alt={target.name}
              width={44}
              height={44}
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="text-small font-heading font-semibold text-ink">
            {target.name}
          </p>
          <p className="text-caption text-muted">
            {target.role}, {target.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

/**
 * CaseStudyCard: Renders nothing unless approved: true
 */
export function CaseStudyCard({
  study,
  className = "",
}: {
  study?: CaseStudyProof;
  className?: string;
}) {
  const target = study || proof.caseStudies.find((c) => c.approved);

  if (!target || !target.approved) {
    return null;
  }

  return (
    <div className={`p-8 rounded-card border border-border bg-white text-left ${className}`}>
      <span className="text-caption font-medium px-2.5 py-1 rounded-full bg-surface-2 text-muted mb-3 inline-block">
        {target.industry}
      </span>
      <h3 className="text-h3-mobile lg:text-h3 font-heading font-semibold text-ink mb-2">
        {target.company}
      </h3>
      <p className="text-small text-muted mb-6 leading-relaxed">
        {target.summary}
      </p>

      {target.results && target.results.length > 0 && (
        <ul className="mb-6 space-y-2">
          {target.results.map((res, i) => (
            <li key={i} className="text-small font-medium text-ink flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>{res}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/customers/${target.slug}`}
        className="text-small font-semibold text-brand hover:underline"
      >
        Read case study &rarr;
      </Link>
    </div>
  );
}

/**
 * StatBlock: Renders nothing unless numbers are from an approved case study
 */
export function StatBlock({
  value,
  label,
  sourceSlug,
  className = "",
}: {
  value: string;
  label: string;
  sourceSlug?: string;
  className?: string;
}) {
  // Only render if linked to an approved case study
  const hasApprovedStudy = proof.caseStudies.some(
    (c) => c.approved && (!sourceSlug || c.slug === sourceSlug)
  );

  if (!hasApprovedStudy) {
    return null;
  }

  return (
    <div className={`p-6 rounded-card border border-border bg-white text-left ${className}`}>
      <div className="text-h1 font-heading font-semibold text-ink tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-small text-muted">
        {label}
      </div>
    </div>
  );
}
