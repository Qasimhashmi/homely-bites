"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#fff9f3] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-20 tracking-tight"
        >
          How It Works
        </motion.h2>

        {/* TIMELINE CONTAINER */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* THE ANIMATED DRAWING LINE (Desktop Only) */}
          <div className="hidden md:block absolute top-10 -translate-y-1/2 left-[16.6%] right-[16.6%] h-[2px] bg-orange-200/50 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-[#ea580c]"
            />
          </div>

          {/* STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative z-10">
            {/* STEP 1 */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#fff9f3] shadow-[0_0_0_2px_#fed7aa] mb-6"
              >
                {/* Badge */}
                <div className="absolute -top-1 -right-2 w-6 h-6 bg-[#ea580c] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                  1
                </div>
                {/* Icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  Select Plan via WhatsApp
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                  Choose your meal plan and customize your menu through a quick
                  WhatsApp chat.
                </p>
              </motion.div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.8,
                }}
                className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#fff9f3] shadow-[0_0_0_2px_#fed7aa] mb-6"
              >
                {/* Badge */}
                <div className="absolute -top-1 -right-2 w-6 h-6 bg-[#ea580c] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                  2
                </div>
                {/* Icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                  <line x1="6" y1="17" x2="18" y2="17" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  We Cook Fresh
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                  Our kitchen prepares every meal fresh daily with hygienic,
                  home-style recipes.
                </p>
              </motion.div>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1.3,
                }}
                className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#fff9f3] shadow-[0_0_0_2px_#fed7aa] mb-6"
              >
                {/* Badge */}
                <div className="absolute -top-1 -right-2 w-6 h-6 bg-[#ea580c] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                  3
                </div>
                {/* Icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="5.5" cy="17.5" r="3.5" />
                  <circle cx="18.5" cy="17.5" r="3.5" />
                  <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 11.5V14l-3-3 4-3 2 3h2" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  Delivered to Your Doorstep
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                  Hot, fresh tiffin arrives at your door — on time, every day.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-20"
        >
          <button className="group px-8 py-4 bg-[#ea580c] text-white rounded-full font-bold text-[15px] shadow-[0_10px_30px_-5px_rgba(234,88,12,0.5)] hover:bg-[#c2410c] hover:shadow-[0_15px_40px_-5px_rgba(234,88,12,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mx-auto">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
