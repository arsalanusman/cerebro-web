import React from "react";
import Image from "next/image";
import { engineData, integrationsData } from "@/content/home";
import TiltCard from "@/components/motion/TiltCard";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <ScrollReveal direction="down" distance={20}>
          <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#000000]">
            {integrationsData.h2}
          </h2>
          <p className="mt-4 m-0 max-w-[640px] text-lg leading-[1.55] text-[#5A6675]">
            {integrationsData.lead}
          </p>
        </ScrollReveal>

        {/* 3 Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Native connectors */}
          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <TiltCard maxTilt={5} glare={true} className="h-full">
              <div className="bg-white border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <h3 className="m-0 font-display text-[21px] font-semibold text-[#000000]">
                  Native connectors
                </h3>
                <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5A6675]">
                  Built and maintained by Cerebro.
                </p>

                <div className="mt-4.5 flex flex-col gap-2">
                  {engineData.nativeList.map((x, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm py-1 px-1.5 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                    >
                      {x.logo ? (
                        <span className="w-6 h-6 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-xs">
                          <Image
                            src={x.logo}
                            alt={x.name}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                        </span>
                      ) : (
                        <span
                          className="w-6 h-6 rounded-md text-white text-[10px] font-bold inline-flex items-center justify-center shrink-0"
                          style={{ background: x.color }}
                        >
                          {x.mark}
                        </span>
                      )}
                      <span className="flex-1 text-[#000000] font-medium">{x.name}</span>
                      <span
                        className="text-[11.5px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: x.pillBg, color: x.pillFg }}
                      >
                        {x.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 2: Custom connectors */}
          <ScrollReveal direction="up" distance={24} delay={0.2}>
            <TiltCard maxTilt={5} glare={true} className="h-full">
              <div className="bg-white border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <h3 className="m-0 font-display text-[21px] font-semibold text-[#000000]">
                  Custom connectors
                </h3>
                <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5A6675]">
                  Any other marketing platform. Build it yourself with AI help, or ask our team.
                </p>

                <div className="mt-4.5 flex flex-col gap-3">
                  {integrationsData.customSteps.map((cs, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-[#000000] p-1 rounded-lg hover:bg-[#F9FAFB] transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#E8F2FC] text-[#005DA3] text-xs font-semibold inline-flex items-center justify-center shrink-0">
                        {cs.n}
                      </span>
                      <span className="font-medium">{cs.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 3: Sheet upload */}
          <ScrollReveal direction="up" distance={24} delay={0.3}>
            <TiltCard maxTilt={5} glare={true} className="h-full">
              <div className="bg-white border border-[#E2E8F0] hover:border-[#BFD8F0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <h3 className="m-0 font-display text-[21px] font-semibold text-[#000000]">
                  Sheet upload
                </h3>
                <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5A6675]">
                  Exports from any platform, mapped and cleaned by AI.
                </p>

                <div className="mt-4.5 flex gap-2 flex-wrap">
                  {["CSV", "Excel", "Google Sheets"].map((format, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center h-[34px] px-3.5 rounded-lg border border-[#E2E8F0] text-[13.5px] font-semibold text-[#000000] bg-[#FCFCFD] shadow-xs"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                <p className="mt-5 m-0 text-sm leading-[1.55] text-[#5A6675]">
                  Columns are matched to Cerebro's metrics, and anything that needs a look is flagged.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
