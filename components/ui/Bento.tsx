import React from "react";
import Image from "next/image";

export interface BentoCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCrop?: string;
  colSpan?: "col-span-12 lg:col-span-4" | "col-span-12 lg:col-span-6" | "col-span-12 lg:col-span-8" | "col-span-12";
  badge?: string;
  className?: string;
  children?: React.ReactNode;
}

export function BentoCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageCrop,
  colSpan = "col-span-12 lg:col-span-4",
  badge,
  className = "",
  children,
}: BentoCardProps) {
  return (
    <div
      className={`rounded-card border border-border bg-white p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative shadow-sm ${colSpan} ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          {badge && (
            <span className="text-caption font-medium px-2.5 py-1 rounded-full bg-surface-2 text-muted">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-h3-mobile lg:text-h3 font-heading font-semibold text-ink mb-2">
          {title}
        </h3>
        <p className="text-small text-muted leading-relaxed max-prose-72ch">
          {description}
        </p>
      </div>

      {imageSrc && (
        <div className="mt-6 relative w-full h-48 lg:h-56 rounded-control border border-border bg-surface overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={imageCrop ? { objectPosition: imageCrop } : undefined}
            className="object-cover"
          />
        </div>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

export function BentoGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-12 gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
}
