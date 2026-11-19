"use client";

import React, { useState } from "react";

interface VideoExplainerProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  duration?: string;
  variant?: "inline" | "hero-button";
}

export default function VideoExplainer({
  videoSrc = "/videos/cerebro-explainer.mp4",
  posterSrc = "/product/dashboard.png",
  title = "Watch Cerebro in action",
  duration = "2:15 min walkthrough",
}: VideoExplainerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto">
          <p className="m-0 mb-3 text-sm font-semibold text-[#4F46E5]">
            PRODUCT WALKTHROUGH
          </p>
          <h2 className="m-0 font-display font-semibold text-[clamp(28px,3vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
            See how every platform comes together in two minutes.
          </h2>
          <p className="mt-3.5 m-0 text-base sm:text-lg leading-[1.55] text-[#5B6170]">
            Watch how Cerebro DNano connects to Meta, Google and TikTok APIs, unifies multi-channel data, and answers performance questions.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="mt-10 max-w-[1020px] mx-auto relative rounded-2xl border border-[#DCDFE7] bg-[#101426] overflow-hidden shadow-[0_24px_60px_rgba(16,20,38,0.12)]">
          {/* Subtle glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#4F46E5]/15 blur-3xl"
          />

          <div className="relative aspect-video w-full flex items-center justify-center bg-[#0F1222]">
            {isPlaying && !hasError ? (
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onError={() => setHasError(true)}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C1A57] via-[#101426] to-[#0A0824]">
                {/* Play Button Trigger */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video walkthrough"
                  className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center cursor-pointer shadow-[0_8px_32px_rgba(79,70,229,0.5)] transition-all transform hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-full bg-[#4F46E5] animate-ping opacity-25 pointer-events-none" />
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 text-white transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>

                {/* Subtitle & Duration pill */}
                <div className="mt-6 flex flex-col items-center gap-2">
                  <span className="text-white font-semibold text-lg tracking-tight">
                    {title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-[#C9CCF2]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {duration}
                  </span>
                </div>

                {hasError && (
                  <p className="mt-4 text-xs text-[#FCA5A5] max-w-sm">
                    Upload your video file to <code className="bg-black/40 px-1 py-0.5 rounded">public/videos/cerebro-explainer.mp4</code> to play here automatically.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
