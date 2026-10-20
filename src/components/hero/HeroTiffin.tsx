"use client";
import { motion } from "framer-motion";
import FloatingIngredients from "./FloatingIngredients";

export default function HeroTiffin() {
  return (
    <section className="w-full flex flex-col items-center text-center pt-12 md:pt-20 px-4 relative overflow-hidden">
      {/* Interactive Cursor-Tracking Floating Spices & Ingredients */}
      <FloatingIngredients />

      {/* 1. THE STATUS PILL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="status"
        aria-label="Service status: Now serving in Lahore"
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50/80 border border-orange-200/70 text-orange-900 text-xs md:text-sm font-semibold mb-8 select-none cursor-default"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea580c]"></span>
        </span>
        Now serving in Lahore
      </motion.div>

      {/* 2. THE MAIN HEADING WITH SLIDING GRADIENT */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-30 text-3xl md:text-[4rem] font-black text-[#1a1a1a] tracking-tight leading-[1.1] max-w-4xl"
      >
        Ghar Jaisa Khana,
        <br />
        <motion.span
          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          // We make the background 200% wide and animate it to create the sliding effect
          className="bg-gradient-to-r from-[#ea580c] via-[#78350f] to-[#ea580c] bg-[length:200%_auto] text-transparent bg-clip-text"
        >
          Delivered Daily
        </motion.span>
      </motion.h1>

      {/* 3. SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-30 mt-6 text-lg md:text-xl text-gray-500 font-medium"
      >
        Healthy, hygienic tiffin & catering services in Lahore.
      </motion.p>

      {/* 4. RESPONSIVE FLEXBOX STACK (From our earlier fix) */}
      <section className="relative z-30 w-full flex flex-col items-center justify-center mt-12 mb-16">
        <div className="w-[300px] md:w-[450px] flex flex-col items-center relative select-none pointer-events-none">
          <motion.div
            className="z-40 w-full transform-gpu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
          >
            <img
              src="/lid.png"
              alt="Tiffin Lid"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="z-30 w-full -mt-[26%] md:-mt-[23.5%] transform-gpu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            <img
              src="/top.png"
              alt="Tiffin Top Tier"
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            className="z-20 w-full -mt-[26%] md:-mt-[23.5%] transform-gpu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            <img
              src="/middle.png"
              alt="Tiffin Middle Tier"
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            className="z-10 w-full -mt-[26%] md:-mt-[23.5%] transform-gpu"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <img
              src="/bottom.png"
              alt="Tiffin Base Tier"
              className="w-full h-auto drop-shadow-xl"
            />
          </motion.div>

          {/* Floor Shadow */}
          <div className="w-[80%] h-[20px] bg-black/10 rounded-[50%] blur-md -mt-4 z-0" />
        </div>

        {/* 5. HERO CTA BUTTON */}
        <div className="mt-16 md:mt-20 z-50">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center justify-center gap-3 bg-[#ea580c] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#c2410c] transition-all shadow-[0_10px_30px_-5px_rgba(234,88,12,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(234,88,12,0.6)] hover:-translate-y-1 active:translate-y-0"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>Order via WhatsApp</span>
          </motion.button>
        </div>
      </section>
    </section>
  );
}
