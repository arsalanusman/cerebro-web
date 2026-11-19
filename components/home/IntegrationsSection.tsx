import React from "react";
import Image from "next/image";
import { engineData, integrationsData } from "@/content/home";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 lg:py-[88px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border">
        {/* Header */}
        <h2 className="m-0 max-w-[720px] font-display font-semibold text-[clamp(30px,3.2vw,44px)] leading-[1.1] tracking-[-0.02em] text-[#101426]">
          {integrationsData.h2}
        </h2>
        <p className="mt-4 m-0 max-w-[640px] text-lg leading-[1.55] text-[#5B6170]">
          {integrationsData.lead}
        </p>

        {/* 3 Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Native connectors */}
          <div className="bg-white border border-[#E4E7EC] rounded-2xl p-7 shadow-sm flex flex-col">
            <h3 className="m-0 font-display text-[21px] font-semibold text-[#101426]">
              Native connectors
            </h3>
            <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5B6170]">
              Built and maintained by Cerebro.
            </p>

            <div className="mt-4.5 flex flex-col gap-2">
              {engineData.nativeList.map((x, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm py-0.5"
                >
                  {x.logo ? (
                    <span className="w-6 h-6 rounded-md bg-white border border-[#E4E7EC] flex items-center justify-center p-0.5 shrink-0 overflow-hidden shadow-xs">
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
                  <span className="flex-1 text-[#101426]">{x.name}</span>
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

          {/* Card 2: Custom connectors */}
          <div className="bg-white border border-[#E4E7EC] rounded-2xl p-7 shadow-sm flex flex-col">
            <h3 className="m-0 font-display text-[21px] font-semibold text-[#101426]">
              Custom connectors
            </h3>
            <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5B6170]">
              Any other marketing platform. Build it yourself with AI help, or ask our team.
            </p>

            <div className="mt-4.5 flex flex-col gap-2.5">
              {integrationsData.customSteps.map((cs, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-[#101426]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#EEF0FF] text-[#4338CA] text-xs font-semibold inline-flex items-center justify-center shrink-0">
                    {cs.n}
                  </span>
                  <span>{cs.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Sheet upload */}
          <div className="bg-white border border-[#E4E7EC] rounded-2xl p-7 shadow-sm flex flex-col">
            <h3 className="m-0 font-display text-[21px] font-semibold text-[#101426]">
              Sheet upload
            </h3>
            <p className="mt-2 m-0 text-[15px] leading-[1.55] text-[#5B6170]">
              Exports from any platform, mapped and cleaned by AI.
            </p>

            <div className="mt-4.5 flex gap-2 flex-wrap">
              {["CSV", "Excel", "Google Sheets"].map((format, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center h-[34px] px-3 rounded-lg border border-[#E4E7EC] text-[13.5px] font-medium text-[#101426] bg-[#FCFCFD]"
                >
                  {format}
                </span>
              ))}
            </div>

            <p className="mt-4 m-0 text-sm leading-[1.55] text-[#5B6170]">
              Columns are matched to Cerebro's metrics, and anything that needs a look is flagged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
