import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";

export interface CTASectionProps {
  title?: string;
  lead?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  supportingText?: string;
  className?: string;
}

export function CTASection({
  title = "See your own campaigns in Cerebro.",
  lead = "Connect your ad accounts in minutes and get a single, consolidated view of your marketing performance.",
  primaryCtaText = "Book a demo",
  primaryCtaHref = "/demo",
  secondaryCtaText,
  secondaryCtaHref,
  supportingText = "No credit card required · Connects in minutes",
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-20 lg:py-28 bg-brand-soft border-y border-border/80 ${className}`}>
      <Container>
        <div className="max-w-3xl text-left">
          <h2 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink h2-wrap-22ch">
            {title}
          </h2>
          <p className="mt-4 text-body-lg-mobile lg:text-body-lg text-muted max-prose-72ch">
            {lead}
          </p>

          <div className="mt-8 flex items-center flex-wrap gap-4">
            <Button href={primaryCtaHref} size="lg">
              {primaryCtaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>

          {supportingText && (
            <p className="mt-4 text-caption text-muted">
              {supportingText}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
