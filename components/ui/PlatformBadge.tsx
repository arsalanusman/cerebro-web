import React from "react";
import Image from "next/image";

export type SupportedPlatform =
  | "Meta Ads"
  | "Google Ads"
  | "TikTok Ads"
  | "DV360"
  | "LinkedIn Ads"
  | "Snapchat Ads";

export interface PlatformBadgeProps {
  platform: SupportedPlatform;
  className?: string;
  size?: "sm" | "md";
}

const platformIcons: Record<SupportedPlatform, string> = {
  "Meta Ads": "/brand/platforms/meta.png",
  "Google Ads": "/brand/platforms/google.png",
  "TikTok Ads": "/brand/platforms/tiktok.png",
  "DV360": "/brand/platforms/dv360.png",
  "LinkedIn Ads": "/brand/platforms/linkedin.png",
  "Snapchat Ads": "/brand/platforms/snapchat.png",
};

export function PlatformBadge({ platform, className = "", size = "md" }: PlatformBadgeProps) {
  const iconSrc = platformIcons[platform];

  const sizeClasses = {
    sm: "px-2 py-1 text-caption gap-1.5",
    md: "px-3 py-1.5 text-small gap-2",
  };

  const imgSizes = {
    sm: 14,
    md: 18,
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-white text-ink font-medium select-none shadow-sm transition-all hover:border-[#A5B4FC] ${sizeClasses[size]} ${className}`}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={`${platform} logo`}
          width={imgSizes[size]}
          height={imgSizes[size]}
          className="shrink-0 object-contain"
        />
      )}
      <span>{platform}</span>
    </span>
  );
}
