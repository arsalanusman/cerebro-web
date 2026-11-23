import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function ClientTestimonialSection() {
  const partners = [
    { name: "Mindshare", label: "Mindshare Network" },
    { name: "Starcom", label: "Starcom MediaVest" },
    { name: "Brainchild", label: "Brainchild Communications" },
    { name: "Z2C Limited", label: "Z2C Limited" },
    { name: "bSecure", label: "bSecure Commerce" },
  ];

  return (
    <div className="py-20">
      <ScrollReveal direction="down" distance={20}>
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Enterprise Validation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink tracking-tight">
            What our clients say
          </h2>
        </div>
      </ScrollReveal>

      {/* Main Testimonial Card */}
      <ScrollReveal direction="zoom" distance={24} delay={0.15}>
        <div className="max-w-4xl mx-auto">
          <TiltCard maxTilt={3} glare={true}>
            <div className="bg-white border border-border rounded-3xl p-8 md:p-14 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden text-center">
              {/* Subtle decorative quotation mark */}
              <Quote className="w-16 h-16 text-brand/10 absolute top-6 left-8 -rotate-12 pointer-events-none" />

              {/* 5-Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg md:text-2xl font-heading font-medium text-ink leading-relaxed max-w-3xl mx-auto">
                &ldquo;Cerebro eliminated the 20 hours our media team spent stitching spreadsheets every Monday. We connected Meta, Google, and TikTok once, and now our entire team and our clients review the exact same accurate numbers every single morning. The proactive sync health telemetry gives our leadership 100% confidence.&rdquo;
              </blockquote>

              {/* Author Bio */}
              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-soft text-brand font-bold flex items-center justify-center text-base border-2 border-brand/20">
                  AA
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-heading font-bold text-ink text-base">Arshad Ali</h4>
                  <p className="text-xs text-muted">
                    CEO at bSecure · Former Digital Innovation Lead at Silkbank & Bank of Punjab
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </ScrollReveal>

      {/* Partner Logo Marquee / Grid */}
      <ScrollReveal direction="up" distance={16} delay={0.3}>
        <div className="mt-16 max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-6">
            Trusted by high-growth brands and enterprise media agencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {partners.map((p) => (
              <span key={p.name} className="text-sm font-heading font-bold text-ink tracking-tight hover:text-brand transition-colors">
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
