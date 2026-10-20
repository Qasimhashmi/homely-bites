"use client";
import { useState } from "react";

export default function Footer() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      setSubscribed(true);
      setEmailOrPhone("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#111827] text-gray-300 pt-16 md:pt-24 pb-12 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. TOP NEWSLETTER & DAILY MENU ALERT CALLOUT */}
        <div className="rounded-[1.75rem] bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-800 border border-gray-800 p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ea580c] text-xs font-bold uppercase tracking-widest mb-3">
                Daily WhatsApp Menu Alerts
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                Never Wonder &ldquo;Aaj Kya Khana Hai?&rdquo; Again.
              </h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                Get tomorrow&apos;s special menu delivered to your phone every evening at 7:00 PM. No spam, only delicious home-cooked options.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    required
                    placeholder="Enter WhatsApp or Email"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full min-h-[50px] px-5 py-3 rounded-full bg-gray-800/80 border border-gray-700 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-[50px] px-7 py-3 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/25 shrink-0 flex items-center justify-center gap-2 group active:translate-y-0.5"
                >
                  <span>Get Menu</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>

              {subscribed && (
                <p className="mt-2.5 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span>✓</span> You&apos;re subscribed! We&apos;ll send the fresh weekly menu shortly.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 2. MAIN FOOTER MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-gray-800">
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black tracking-tight text-white">
                Homely <span className="text-[#ea580c]">BITES</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Authentic, hygienic home-style tiffin delivery in Lahore. Crafted fresh daily with pure sunflower oil, farm-picked vegetables, and premium Halal meats.
            </p>

            {/* Certifications & Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-400">
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-emerald-400 flex items-center gap-1.5">
                <span>🛡️</span> 100% Halal Certified
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gray-800/80 border border-gray-700/60 text-orange-400 flex items-center gap-1.5">
                <span>✨</span> Hygienic Kitchen
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ea580c] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-gray-400 hover:text-[#ea580c] transition-colors">
                  Our Specialties
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#ea580c] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#ea580c] transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#ea580c] transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Menus (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              Catering & Plans
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-[#ea580c] transition-colors flex items-center justify-between group"
                >
                  <span>Student Mess Plan</span>
                  <span className="text-[11px] text-gray-500 group-hover:text-[#ea580c]">Rs 2,800/wk</span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-[#ea580c] transition-colors flex items-center justify-between group"
                >
                  <span>Executive Lunch Tiffin</span>
                  <span className="text-[11px] text-[#ea580c]">Best Value</span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-[#ea580c] transition-colors flex items-center justify-between group"
                >
                  <span>Corporate Office Catering</span>
                  <span className="text-[11px] text-gray-500 group-hover:text-[#ea580c]">Bulk Tier</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567?text=Hi!%20I%20would%20like%20to%20inquire%20about%20custom%20event%20catering%20in%20Lahore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ea580c] transition-colors flex items-center justify-between group"
                >
                  <span>Event & Party Catering</span>
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kitchen Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
              Lahore Central Kitchen
            </h4>
            <div className="space-y-3.5 text-sm font-medium text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-[#ea580c] shrink-0 mt-0.5">💬</span>
                <div>
                  <span className="text-gray-200 font-bold block">WhatsApp Order Hotline</span>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ea580c] transition-colors"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#ea580c] shrink-0 mt-0.5">📍</span>
                <div>
                  <span className="text-gray-200 font-bold block">Service Areas</span>
                  <span>Gulberg, DHA Ph 1-6, Johar Town, Model Town, Arfa Tower & Ferozepur Rd</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#ea580c] shrink-0 mt-0.5">🕒</span>
                <div>
                  <span className="text-gray-200 font-bold block">Delivery Windows</span>
                  <span>Lunch: 12:30 PM – 2:00 PM<br />Dinner: 7:30 PM – 9:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Homely Bites (Pvt) Ltd. All rights reserved. Made with ❤️ in Lahore.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Hygiene Certification
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ea580c] hover:underline font-bold"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
