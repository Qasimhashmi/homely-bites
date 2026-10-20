"use client";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarBg: string;
  initials: string;
  quote: string;
  favoriteDish: string;
  planDuration: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Ayesha Malik",
    role: "Registrar Physician",
    location: "Services Hospital • Model Town",
    avatarBg: "from-orange-400 to-rose-500",
    initials: "AM",
    quote:
      "After grueling 14-hour emergency rotations, having piping-hot, healthy food waiting at my door feels like home. It has the authentic aroma of my mother's kitchen—never greasy or overly spiced.",
    favoriteDish: "Chicken Handi & Daal Mash",
    planDuration: "Subscribed 9 Months",
    verified: true,
  },
  {
    id: "2",
    name: "Hamza Tariq",
    role: "Staff Software Engineer",
    location: "Systems Limited • Arfa Tower",
    avatarBg: "from-amber-400 to-orange-600",
    initials: "HT",
    quote:
      "Our entire engineering pod switched from commercial fast food to Homely Bites. The tiffin arrives right at 1:10 PM every single workday. Friday Dum Biryani is legendary across our floor.",
    favoriteDish: "Hyderabadi Dum Biryani",
    planDuration: "Executive Lunch Plan",
    verified: true,
  },
  {
    id: "3",
    name: "Fatima Noor",
    role: "BS Computer Science Student",
    location: "LUMS Hostel • DHA Phase 5",
    avatarBg: "from-rose-400 to-pink-600",
    initials: "FN",
    quote:
      "Hostel food in Lahore was my biggest worry until a senior recommended Homely Bites. The rotis are soft and whole-wheat, the dal is wholesome, and WhatsApp billing makes pausing during exam breaks painless.",
    favoriteDish: "Aloo Palak & Zeera Rice",
    planDuration: "Student Mess Plan",
    verified: true,
  },
  {
    id: "4",
    name: "Bilal Chaudhry",
    role: "Creative Director",
    location: "Design Studio • Gulberg III",
    avatarBg: "from-blue-500 to-indigo-600",
    initials: "BC",
    quote:
      "Finding genuine, non-commercial tasting meals in Gulberg seemed impossible. Homely Bites is in a league of its own—stainless steel insulated containers, zero plastic waste, and impeccable hygiene.",
    favoriteDish: "Murgh Cholay & Tandoori Roti",
    planDuration: "Monthly Regular",
    verified: true,
  },
  {
    id: "5",
    name: "Engr. Usman Siddiqui",
    role: "Operations Head",
    location: "Packages Industrial Area",
    avatarBg: "from-emerald-400 to-teal-600",
    initials: "US",
    quote:
      "We rely on Homely Bites for our daily management lunches and executive client meetings. Quality consistency is 100%, and their support team on WhatsApp is exceptionally responsive.",
    favoriteDish: "Mutton Qorma Special",
    planDuration: "Corporate Bulk Plan",
    verified: true,
  },
  {
    id: "6",
    name: "Mahnoor Khan",
    role: "IELTS Instructor & Researcher",
    location: "Johar Town • Phase 2",
    avatarBg: "from-purple-400 to-pink-500",
    initials: "MK",
    quote:
      "The food is delightfully comforting and light on the stomach. You can tell they cook in clean sunflower oil with fresh vegetables. I don't feel sluggish after lunch anymore!",
    favoriteDish: "Kadhi Pakora & Steamed Rice",
    planDuration: "Weekly Subscriber",
    verified: true,
  },
];

const stats = [
  { value: "52,000+", label: "Hot Tiffins Delivered", sub: "Across Lahore in 2025-2026" },
  { value: "4.9 / 5.0", label: "Customer Satisfaction", sub: "Over 1,400+ WhatsApp Reviews" },
  { value: "98.8%", label: "On-Time Arrival", sub: "Within 15-minute lunch delivery window" },
  { value: "100%", label: "Pure Sunflower Oil", sub: "Zero hydrogenated banaspati fats" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-28 bg-[#fff9f3] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 text-[#ea580c] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
            Verified Lahore Foodies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]"
          >
            Real Stories From People Who <br className="hidden sm:inline" />
            <span className="text-[#ea580c]">Taste The Difference.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 text-base md:text-lg font-medium leading-relaxed"
          >
            From doctor shifts in Model Town to tech marathons in Arfa Tower and university dorms in DHA, here is why Lahore trusts our kitchen.
          </motion.p>
        </div>

        {/* 2. LIVE TRUST NUMBERS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((st, sIdx) => (
            <div
              key={sIdx}
              className="bg-white border border-gray-200/80 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-orange-200 hover:-translate-y-1"
            >
              <span className="text-2xl md:text-4xl font-black text-[#ea580c] tracking-tight block mb-1">
                {st.value}
              </span>
              <span className="text-sm font-bold text-gray-900 block mb-0.5">
                {st.label}
              </span>
              <span className="text-xs text-gray-500 block leading-tight">
                {st.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 3. TESTIMONIALS MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full flex"
            >
              <div className="group relative w-full h-full bg-white border border-gray-200/90 rounded-[1.5rem] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-orange-200 cursor-pointer">
                {/* Decorative Subtle Quote Icon Watermark */}
                <div className="absolute top-6 right-6 text-orange-200/40 group-hover:text-orange-300/60 transition-colors pointer-events-none">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div>
                  {/* 5-Star Rating Array */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className="w-4 h-4 text-amber-500 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs font-bold text-gray-700 ml-1.5">
                      5.0
                    </span>
                  </div>

                  {/* Customer Quote */}
                  <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed mb-6 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Customer Info */}
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold text-gray-900 leading-tight">
                          {t.name}
                        </h3>
                        {t.verified && (
                          <svg
                            className="w-3.5 h-3.5 text-emerald-600"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-label="Verified Customer"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-500">
                        {t.role}
                      </p>
                      <p className="text-[11px] font-semibold text-gray-400 mt-0.5">
                        📍 {t.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-bold text-[#ea580c] bg-[#ffedd5] px-2 py-0.5 rounded-full block">
                      {t.planDuration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. BOTTOM ACTION CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/923001234567?text=Hi%20Homely%20Bites!%20I%20would%20like%20to%20order%20a%20trial%20tiffin%20meal%20to%20test%20the%20quality."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-gray-200/90 text-gray-900 font-bold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ea580c] hover:text-[#ea580c] hover:shadow-[0_12px_30px_rgba(234,88,12,0.1)] transition-all duration-300 group"
          >
            <span>Want to test our food first? Order a 1-day Trial Meal on WhatsApp</span>
            <span className="text-[#ea580c] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
