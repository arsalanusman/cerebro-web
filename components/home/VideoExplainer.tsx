"use client";

import React, { useState, useRef, useEffect } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Autoplay with muted state on mount and when in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browser policies strictly require muted for unprompted autoplay
    video.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => setIsPlaying(true))
                .catch(() => {
                  // Browser prevented autoplay or waiting for user interaction
                });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Direct attempt immediately
    const directPlay = video.play();
    if (directPlay !== undefined) {
      directPlay
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }

    return () => {
      observer.disconnect();
    };
  }, [isMuted]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white" ref={containerRef}>
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <ScrollReveal direction="down" distance={20}>
          <div className="text-center max-w-[760px] mx-auto">
            <p className="m-0 mb-3 text-sm font-semibold text-[#0070C2]">
              PRODUCT WALKTHROUGH
            </p>
            <h2 className="m-0 font-display font-semibold text-[clamp(28px,3vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
              See how every platform comes together in two minutes.
            </h2>
            <p className="mt-3.5 m-0 text-base sm:text-lg leading-[1.55] text-[#5A6675]">
              Watch how Cerebro dNano connects to Meta, Google and TikTok APIs, unifies multi-channel data, and answers performance questions.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Player Frame */}
        <ScrollReveal direction="zoom" distance={24} delay={0.2} duration={0.8}>
          <div className="mt-10 max-w-[1020px] mx-auto relative rounded-2xl border border-[#DCDFE7] bg-[#000000] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)] group">
          {/* Subtle atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0070C2]/15 blur-3xl"
          />

          <div className="relative aspect-video w-full flex items-center justify-center bg-[#0F1222]">
            {!hasError ? (
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                  onError={() => setHasError(true)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  Your browser does not support the video tag.
                </video>

                {/* Floating Sound Toggle Pill */}
                <div className="absolute top-4 right-4 z-20">
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 text-xs font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {isMuted ? (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#F87171]"
                          aria-hidden="true"
                        >
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <line x1="23" y1="9" x2="17" y2="15" />
                          <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                        <span>Unmute Audio</span>
                      </>
                    ) : (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#34D399]"
                          aria-hidden="true"
                        >
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        <span>Mute Audio</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Subtitle / badge bar at bottom left during playback preview */}
                <div className="pointer-events-none absolute bottom-4 left-4 z-20 hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>{title} ({duration})</span>
                </div>
              </>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-[#0A0824]">
                <p className="m-0 text-sm font-semibold text-[#FCA5A5]">
                  Video preview unavailable
                </p>
                <p className="mt-2 text-xs text-[#9DA4B5] max-w-sm">
                  Video source path: <code className="bg-black/40 px-1 py-0.5 rounded text-white">{videoSrc}</code>
                </p>
              </div>
            )}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
