"use client";

import React from "react";
import { motion, useInView, Variants } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  as: Component = "span",
  delay = 0,
  stagger = 0.03,
  once = true,
}: AnimatedTextProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  // Split text into words to retain wrapping naturally while animating cleanly
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <Component
      // @ts-expect-error Component ref forwarding
      ref={ref}
      className={`inline-block ${className}`}
    >
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap overflow-hidden py-1">
            <motion.span
              variants={wordVariants}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
