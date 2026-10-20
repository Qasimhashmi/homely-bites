"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SVG for the Chat/Order Icon from your image
  const OrderIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

  return (
    <nav className="relative z-50 w-full bg-white border-b border-gray-100">
      {/* MAIN NAVBAR CONTAINER */}
      <div className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1400px] mx-auto bg-white">
        {/* 1. Logo (Left Aligned) */}
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tight text-[#1f2937]">
            Homely <span className="text-[#ea580c]">BITES</span>
          </span>
        </div>

        {/* 2. Desktop Navigation & CTA (Cohesive Unit) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-6 lg:gap-8 text-[15px] font-bold text-[#1e293b]">
            <a
              href="#"
              className="text-[#ea580c] border-b-2 border-[#ea580c] pb-1"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#ea580c] pb-1 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#ea580c] pb-1 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#menu"
              className="hover:text-[#ea580c] pb-1 transition-colors"
            >
              Menu & Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#ea580c] pb-1 transition-colors"
            >
              Reviews
            </a>
          </div>

          <a
            href="https://wa.me/923001234567?text=Hi%20Homely%20Bites!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ea580c] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#c2410c] transition-colors shadow-lg shadow-orange-500/25 flex items-center gap-2"
          >
            <OrderIcon />
            Order Now
          </a>
        </div>

        {/* 4. Mobile Toggle Button */}
        <div className="md:hidden flex items-center justify-end">
          <button
            className="p-1 text-black focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Close "X" Icon
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN (Does NOT cover full screen) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white pb-6 px-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] border-t border-gray-50 flex flex-col gap-2 z-50 origin-top"
          >
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#ffedd5] text-[#ea580c] px-5 py-4 rounded-xl font-bold text-[15px] mt-4"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1e293b] hover:bg-gray-50 px-5 py-4 rounded-xl font-bold text-[15px]"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1e293b] hover:bg-gray-50 px-5 py-4 rounded-xl font-bold text-[15px]"
            >
              How It Works
            </a>
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1e293b] hover:bg-gray-50 px-5 py-4 rounded-xl font-bold text-[15px]"
            >
              Menu & Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1e293b] hover:bg-gray-50 px-5 py-4 rounded-xl font-bold text-[15px] mb-2"
            >
              Reviews
            </a>

            <a
              href="https://wa.me/923001234567?text=Hi%20Homely%20Bites!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#ea580c] text-white py-4 rounded-full font-bold text-[15px] shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 mt-2"
            >
              <OrderIcon />
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
