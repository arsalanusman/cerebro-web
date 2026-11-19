"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ProductShotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  crop?: string;
  className?: string;
  caption?: string;
  aspectRatio?: string;
  fit?: "cover" | "contain";
}

export function ProductShot({
  src,
  alt,
  width = 2880,
  height = 1800,
  priority = false,
  crop,
  className = "",
  caption,
  aspectRatio = "aspect-[16/10]",
  fit = "cover",
}: ProductShotProps) {
  const [error, setError] = useState(false);

  const filename = src.split("/").pop() || src;

  return (
    <figure className={`w-full ${className}`}>
      <div className={`relative w-full rounded-product border border-border bg-surface shadow-product overflow-hidden ${aspectRatio}`}>
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-surface-2 text-muted">
            <div className="w-12 h-12 rounded-card bg-surface border border-border flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <p className="font-mono text-small text-ink font-medium">
              {filename}
            </p>
            <p className="text-caption text-muted mt-1 tabular-nums">
              Expected size: {width} × {height}px
            </p>
            <p className="text-caption text-muted/80 mt-1 max-w-md">
              {alt}
            </p>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            style={crop ? { objectPosition: crop } : undefined}
            className={`w-full h-auto ${fit === "contain" ? "object-contain bg-[#FAFBFD]" : "object-cover object-top"}`}
            onError={() => setError(true)}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-caption text-muted text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
