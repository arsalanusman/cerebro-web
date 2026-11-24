import React from "react";
import Image from "next/image";

export default function CustomersStrip() {
  const clients = [
    {
      name: "Samsung",
      src: "/brand/clients/samsung.png",
      width: 120,
      height: 32,
      className: "h-6 sm:h-7 w-auto object-contain",
    },
    {
      name: "Nestlé",
      src: "/brand/clients/nestle.png",
      width: 110,
      height: 36,
      className: "h-7 sm:h-8 w-auto object-contain",
    },
    {
      name: "Easypaisa",
      src: "/brand/clients/easypaisa.png",
      width: 130,
      height: 36,
      className: "h-7 sm:h-8 w-auto object-contain",
    },
    {
      name: "Fauji Foods",
      src: "/brand/clients/fauji-foods.webp",
      width: 70,
      height: 40,
      className: "h-8 sm:h-9 w-auto object-contain",
    },
  ];

  return (
    <section
      aria-label="Customers"
      className="py-10 sm:py-12 border-b border-[#EEF0F3] bg-white"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 box-border text-center">
        <p className="m-0 mb-6 text-sm font-medium text-[#6B7180] tracking-wide">
          Trusted by marketing and analytics teams at
        </p>
        <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
            >
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                className={client.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
