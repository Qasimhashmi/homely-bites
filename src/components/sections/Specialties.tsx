"use client";
import { motion } from "framer-motion";

export default function Specialties() {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 px-6 text-center py-16">
      {/* HEADING FADES IN FIRST */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight"
      >
        Our Specialties
      </motion.h2>

      {/* SUBHEADING FADES IN SHORTLY AFTER */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-500 text-md font-medium mb-12 max-w-2xl mx-auto"
      >
        Made fresh every morning, delivered with care.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* CARD 1 (Delay: 0.2s) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full"
        >
          <div className="group h-full bg-white border border-gray-200 rounded-[1rem] p-10 flex flex-col items-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 bg-[#ffedd5] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 hover:rotate-[8deg] hover:scale-110 group-hover:-translate-y-1">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              Hostel Tiffin Mess
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2">
              Affordable daily meal plans for students. Home-style taste away
              from home.
            </p>

            <div className="mt-auto flex items-center gap-2 text-[#ea580c] font-bold text-sm">
              WhatsApp to Book
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 (Delay: 0.35s) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="h-full"
        >
          <div className="group h-full bg-white border border-gray-200 rounded-[1rem] p-10 flex flex-col items-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 bg-[#ffedd5] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 hover:rotate-[8deg] hover:scale-110 group-hover:-translate-y-1">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              Corporate Lunch
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2">
              Nutritious lunch options for employees and teams. Bulk ordering
              available.
            </p>

            <div className="mt-auto flex items-center gap-2 text-[#ea580c] font-bold text-sm">
              WhatsApp to Book
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 (Delay: 0.5s) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full"
        >
          <div className="group h-full bg-white border border-gray-200 rounded-[1rem] p-10 flex flex-col items-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 bg-[#ffedd5] rounded-full flex items-center justify-center mb-8 transition-transform duration-300 hover:rotate-[8deg] hover:scale-110 group-hover:-translate-y-1">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                <line x1="6" y1="17" x2="18" y2="17" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
              Event Catering
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 px-2">
              Customized catering menus for parties, meetings, and special
              occasions.
            </p>

            <div className="mt-auto flex items-center gap-2 text-[#ea580c] font-bold text-sm">
              WhatsApp to Book
              <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
