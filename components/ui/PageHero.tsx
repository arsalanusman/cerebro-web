import React from "react";
import { Container } from "./Container";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { ProductShot, ProductShotProps } from "./ProductShot";

export interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  lead?: string;
  actions?: React.ReactNode;
  productShot?: ProductShotProps;
  className?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  actions,
  productShot,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-border/60 ${className}`}>
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}
        <div className="max-w-4xl text-left">
          {eyebrow && (
            <p className="text-small font-medium text-brand mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-h1-mobile lg:text-h1 font-heading font-semibold text-ink tracking-tight">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 text-body-lg-mobile lg:text-body-lg text-muted max-prose-72ch">
              {lead}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex items-center flex-wrap gap-4">
              {actions}
            </div>
          )}
        </div>

        {productShot && (
          <div className="mt-12 lg:mt-16">
            <ProductShot {...productShot} />
          </div>
        )}
      </Container>
    </section>
  );
}
