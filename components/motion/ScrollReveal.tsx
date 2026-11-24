"use client";

import React from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 36,
  once = true,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "zoom":
        return { opacity: 0, scale: 0.94 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    if (!isInView) return getInitial();
    return {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
