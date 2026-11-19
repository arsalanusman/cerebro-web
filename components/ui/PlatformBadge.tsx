import React from "react";

export type SupportedPlatform = "Meta Ads" | "Google Ads" | "TikTok Ads";

export interface PlatformBadgeProps {
  platform: SupportedPlatform;
  className?: string;
  size?: "sm" | "md";
}

export function PlatformBadge({ platform, className = "", size = "md" }: PlatformBadgeProps) {
  // Render small authentic platform mark
  const renderMark = () => {
    switch (platform) {
      case "Meta Ads":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 4.5C6.5 4.5 2 8.5 2 13.5C2 16.5 3.5 19 6 20.5V23L8.5 21.5C9.5 22 10.5 22.5 12 22.5C17.5 22.5 22 18.5 22 13.5C22 8.5 17.5 4.5 12 4.5Z"
              fill="#0668E1"
            />
          </svg>
        );
      case "Google Ads":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L3 17H11L12 2Z" fill="#FBBC04" />
            <path d="M12 2L21 17H13L12 2Z" fill="#4285F4" />
            <circle cx="6" cy="18" r="3" fill="#34A853" />
          </svg>
        );
      case "TikTok Ads":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M19.5 7.5c-1.8 0-3.3-.8-4.2-2.1V16a5.5 5.5 0 11-5.5-5.5c.3 0 .7 0 1 .1v3.2c-.3 0-.6-.1-1-.1a2.3 2.3 0 102.3 2.3V2h3.2c.4 2.2 2.1 3.9 4.2 4.3v1.2z"
              fill="#000000"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-caption gap-1.5",
    md: "px-3 py-1.5 text-small gap-2",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-white text-ink font-medium select-none shadow-sm ${sizeClasses[size]} ${className}`}
    >
      {renderMark()}
      <span>{platform}</span>
    </span>
  );
}
