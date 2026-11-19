import React from "react";
import { ProductShot, ProductShotProps } from "./ProductShot";
import { Check } from "lucide-react";

export interface FeatureRowProps {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  productShot: ProductShotProps;
  reverse?: boolean;
  actions?: React.ReactNode;
  className?: string;
}

export function FeatureRow({
  eyebrow,
  title,
  description,
  points,
  productShot,
  reverse = false,
  actions,
  className = "",
}: FeatureRowProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      } ${className}`}
    >
      <div className="lg:col-span-5 text-left">
        {eyebrow && (
          <p className="text-small font-medium text-brand mb-2.5">
            {eyebrow}
          </p>
        )}
        <h3 className="text-h2-mobile lg:text-h2 font-heading font-semibold text-ink h2-wrap-22ch">
          {title}
        </h3>
        <p className="mt-4 text-body text-muted leading-relaxed">
          {description}
        </p>

        {points && points.length > 0 && (
          <ul className="mt-6 space-y-3">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-3 text-small text-text">
                <div className="w-5 h-5 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        {actions && <div className="mt-8">{actions}</div>}
      </div>

      <div className="lg:col-span-7">
        <ProductShot {...productShot} />
      </div>
    </div>
  );
}
