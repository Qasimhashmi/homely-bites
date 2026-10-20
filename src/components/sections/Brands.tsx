"use client";
import { motion } from "framer-motion";

// Normalized partner logos with customized visual weights to ensure balanced contrast
const logos = [
  { id: 1, name: "TechLogix", src: "/techxlogo.png", className: "h-7 md:h-9 opacity-55" },
  { id: 2, name: "Systems Ltd", src: "/systems-logo.png", className: "h-6 md:h-7 opacity-50" },
  { id: 3, name: "Nestlé Pakistan", src: "/nestle.webp", className: "h-8 md:h-10 opacity-55" },
  { id: 4, name: "Arfa Kareem Tower", src: "/arfa-careem.svg", className: "h-9 md:h-11 opacity-80 contrast-125" },
  { id: 5, name: "Amazon", src: "/Amazon.png", className: "h-6 md:h-7 opacity-45" },
];

export default function Brands() {
  // Two duplicated sets for a mathematically seamless -50% infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-20 overflow-hidden relative bg-[#fff9f3]">
      {/* 1. SECTION HEADING */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-xs md:text-sm font-semibold tracking-wider text-gray-500">
          Trusted by teams at
        </h2>
      </div>

      {/* 2. INFINITE MARQUEE CONTAINER WITH EDGE GRADIENT MASK */}
      <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* 3. SCROLLING TRACK (Seamless infinite loop with uniform gap spacing) */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-16 md:gap-24 w-max"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className={`w-auto max-w-none object-contain ${logo.className}`}
              />
              <span className="md:hidden sr-only">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
