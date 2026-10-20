"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  description: string;
  weeklyPrice: number;
  monthlyPrice: number;
  perMealWeekly: number;
  perMealMonthly: number;
  servings: string;
  features: string[];
  dishHighlight: string;
  whatsappMessage: string;
}

const plans: PlanTier[] = [
  {
    id: "student",
    name: "Student Mess",
    badge: "Budget Friendly",
    description:
      "Wholesome, home-style daily nutrition designed for university students and hostelites away from home.",
    weeklyPrice: 2800,
    monthlyPrice: 9999,
    perMealWeekly: 465,
    perMealMonthly: 415,
    servings: "1 Person",
    features: [
      "1 Seasonal Gravy/Sabzi + 1 Hearty Dal",
      "4 Freshly Puffed Whole-Wheat Rotis",
      "Steamed Basmati Rice & Mint Raita",
      "Free Doorstep Delivery to Hostels",
      "Flexible pause option with 12h notice",
    ],
    dishHighlight: "Popular: Daal Chawal & Aloo Palak",
    whatsappMessage: "Hi Homely Bites! I would like to subscribe to the Student Mess Plan.",
  },
  {
    id: "executive",
    name: "Executive Feast",
    badge: "Most Popular & Best Value",
    popular: true,
    description:
      "A hearty, double-entree gourmet lunch crafted for busy doctors, software engineers, and professionals.",
    weeklyPrice: 4200,
    monthlyPrice: 14999,
    perMealWeekly: 700,
    perMealMonthly: 625,
    servings: "1-2 Persons",
    features: [
      "1 Boneless Chicken/Beef Special + 1 Dal/Sabzi",
      "4 Whole-Wheat Tawa Phulkas / Naan",
      "Fragrant Cumin Rice + Fresh Kachumber Salad",
      "Special Hyderabadi Dum Biryani every Friday",
      "Double-walled stainless steel thermal tiffin",
      "Dedicated WhatsApp meal coordinator",
    ],
    dishHighlight: "Popular: Chicken Karahi & Friday Biryani",
    whatsappMessage: "Hi Homely Bites! I want to order the Executive Feast Plan.",
  },
  {
    id: "corporate",
    name: "Team & Family Table",
    badge: "Group Sharing",
    description:
      "Generous, premium multi-course feasts for startup teams, office departments, and small households.",
    weeklyPrice: 7800,
    monthlyPrice: 27999,
    perMealWeekly: 1300,
    perMealMonthly: 1165,
    servings: "3-4 Persons",
    features: [
      "2 Premium Meat Specialties + 2 Vegetarian Mains",
      "12 Fresh Hot Whole-Wheat Rotis or Parathas",
      "Large Platter Rice + Chutneys & Fresh Salads",
      "Weekly rotating gourmet dessert (Kheer / Halwa)",
      "Priority guaranteed lunchtime arrival (1:00 PM)",
      "Monthly consolidated corporate tax invoices",
    ],
    dishHighlight: "Popular: Mutton Qorma & Murgh Cholay",
    whatsappMessage: "Hi Homely Bites! We are interested in the Team & Family Table Plan.",
  },
];

const sampleWeeklyMenu = [
  { day: "Mon", dish: "Chicken Handi & Dal Tadka", side: "Zeera Rice + 4 Rotis" },
  { day: "Tue", dish: "Aloo Palak & Moong Masoor", side: "Steamed Rice + 4 Rotis" },
  { day: "Wed", dish: "Murgh Cholay & Mixed Sabzi", side: "Zeera Rice + 4 Rotis" },
  { day: "Thu", dish: "Chicken Haleem / Nihari", side: "Crispy Naan + Mint Raita" },
  { day: "Fri", dish: "Special Dum Biryani & Shami", side: "Salad, Raita & Gulab Jamun" },
  { day: "Sat", dish: "Kadhi Pakora & Zeera Aloo", side: "Basmati Rice + 4 Rotis" },
];

export default function MenuPricing() {
  const [billingCycle, setBillingCycle] = useState<"weekly" | "monthly">("monthly");
  const [activeMenuDay, setActiveMenuDay] = useState<number>(4); // Friday default

  return (
    <section id="menu" className="w-full py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffedd5] text-[#ea580c] text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
            Honest, Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]"
          >
            Ghar Ka Khana Plans, <br className="hidden sm:inline" />
            <span className="text-[#ea580c]">Priced for Every Table.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 text-base md:text-lg font-medium leading-relaxed"
          >
            Cooked every morning with 100% pure sunflower oil, fresh farm produce, and zero artificial preservatives. Delivered hot across Lahore.
          </motion.p>

          {/* 2. BILLING TOGGLE (Dribbble/Apple style pill switch) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#fff9f3] border border-orange-200/70 shadow-inner"
          >
            <button
              onClick={() => setBillingCycle("weekly")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === "weekly"
                  ? "text-white shadow-md shadow-orange-500/25"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {billingCycle === "weekly" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ea580c] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Weekly (6 Days)</span>
            </button>

            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "monthly"
                  ? "text-white shadow-md shadow-orange-500/25"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ea580c] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly (24 Days)</span>
              <span
                className={`relative z-10 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#ea580c]"
                    : "bg-[#ea580c] text-white"
                }`}
              >
                Save 15%
              </span>
            </button>
          </motion.div>
        </div>

        {/* 3. PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const price = billingCycle === "weekly" ? plan.weeklyPrice : plan.monthlyPrice;
            const perMeal = billingCycle === "weekly" ? plan.perMealWeekly : plan.perMealMonthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="h-full flex"
              >
                <div
                  className={`group relative w-full h-full flex flex-col rounded-[1.5rem] p-8 md:p-10 transition-all duration-300 cursor-pointer ${
                    isPopular
                      ? "bg-[#fffdfa] border-2 border-[#ea580c] shadow-[0_16px_40px_rgba(234,88,12,0.12)] md:-translate-y-2 lg:-translate-y-3"
                      : "bg-white border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-orange-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2"
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ea580c] text-white text-xs font-black uppercase tracking-wider shadow-md shadow-orange-500/30">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                        {plan.name}
                      </h3>
                      {!isPopular && (
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {plan.servings}
                        </span>
                      )}
                      {isPopular && (
                        <span className="text-xs font-bold text-[#ea580c] bg-[#ffedd5] px-3 py-1 rounded-full">
                          {plan.servings}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed min-h-[42px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-5 my-2 border-y border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        PKR
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
                        >
                          {price.toLocaleString()}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm font-semibold text-gray-500">
                        /{billingCycle === "weekly" ? "week" : "month"}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-[#ea580c] flex items-center gap-1.5">
                      <span>✓ Approx. Rs. {perMeal}/meal</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">Free delivery included</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 mb-8 flex-1">
                    <span className="text-xs font-extrabold tracking-wider text-gray-400 uppercase block mb-4">
                      What&apos;s Included Daily:
                    </span>
                    <ul className="space-y-3">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 leading-snug">
                          <svg
                            className={`w-5 h-5 shrink-0 mt-0.5 ${
                              isPopular ? "text-[#ea580c]" : "text-emerald-600"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Dish Preview Tag */}
                    <div className="mt-6 p-3 rounded-xl bg-orange-50/60 border border-orange-100 text-xs text-orange-950 font-medium flex items-center gap-2">
                      <span className="text-base">🍲</span>
                      <span>{plan.dishHighlight}</span>
                    </div>
                  </div>

                  {/* WhatsApp CTA Button */}
                  <div className="mt-auto pt-2">
                    <a
                      href={`https://wa.me/923001234567?text=${encodeURIComponent(
                        `${plan.whatsappMessage} (${billingCycle.toUpperCase()} - Rs. ${price.toLocaleString()})`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full min-h-[48px] px-6 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-300 ${
                        isPopular
                          ? "bg-[#ea580c] text-white hover:bg-[#c2410c] shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/40 group-hover:-translate-y-0.5 active:translate-y-0"
                          : "bg-gray-900 text-white hover:bg-[#ea580c] shadow-md hover:shadow-orange-500/20 group-hover:-translate-y-0.5 active:translate-y-0"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>Book on WhatsApp</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. WEEKLY ROTATING MENU PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-[#fff9f3] border border-orange-200/80 p-8 md:p-12 shadow-[0_4px_25px_rgba(234,88,12,0.04)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#ea580c] uppercase block mb-1">
                Fresh Rotating Schedule
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                This Week&apos;s Specially Curated Menu
              </h3>
            </div>
            <div className="text-sm font-semibold text-gray-500 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Cooked Daily at 6:30 AM</span>
            </div>
          </div>

          {/* Interactive Day Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sampleWeeklyMenu.map((item, idx) => {
              const isSelected = activeMenuDay === idx;
              return (
                <button
                  key={item.day}
                  onClick={() => setActiveMenuDay(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#ea580c] shadow-md shadow-orange-500/10 -translate-y-1"
                      : "bg-white/60 border-orange-100 hover:bg-white hover:border-orange-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-black uppercase tracking-wider ${
                        isSelected ? "text-[#ea580c]" : "text-gray-400"
                      }`}
                    >
                      {item.day}
                    </span>
                    {idx === 4 && (
                      <span className="text-[10px] font-bold bg-[#ffedd5] text-[#ea580c] px-1.5 py-0.5 rounded">
                        Special
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                    {item.dish}
                  </p>
                  <span className="text-[11px] font-medium text-gray-500 mt-2 block">
                    {item.side}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Trust Banner footer inside menu */}
          <div className="mt-8 pt-6 border-t border-orange-200/50 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="text-[#ea580c]">✓</span> 100% Halal Meat
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#ea580c]">✓</span> Filtered RO Water
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#ea580c]">✓</span> No Reheated Leftovers
              </span>
            </div>
            <a
              href="https://wa.me/923001234567?text=Hi!%20Can%20you%20please%20send%20the%20complete%20monthly%20menu%20calendar%20PDF?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea580c] hover:underline font-bold flex items-center gap-1"
            >
              Request Full Month Menu PDF (WhatsApp) →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
