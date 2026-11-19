import React from "react";

export type SectionBackground = "white" | "surface" | "surface-2" | "brand-soft" | "navy";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: SectionBackground;
  children: React.ReactNode;
}

export function Section({
  bg = "white",
  className = "",
  children,
  id,
  ...props
}: SectionProps) {
  const bgStyles = {
    white: "bg-bg text-text",
    surface: "bg-surface text-text",
    "surface-2": "bg-surface-2 text-text",
    "brand-soft": "bg-brand-soft text-text",
    navy: "bg-navy text-white",
  };

  return (
    <section
      id={id}
      className={`py-20 lg:py-32 ${bgStyles[bg]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
