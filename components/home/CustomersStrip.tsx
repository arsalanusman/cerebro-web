import React from "react";

export default function CustomersStrip() {
  return (
    <section
      aria-label="Customers"
      className="py-10 sm:py-14 border-b border-[#EEF0F3] bg-white"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border text-center">
        <p className="m-0 mb-5 text-sm text-[#5B6170]">
          Trusted by marketing teams at
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="w-[150px] h-[44px] border border-dashed border-[#CDD1DA] rounded-lg flex items-center justify-center text-xs text-[#6B7180]"
            >
              Client logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
