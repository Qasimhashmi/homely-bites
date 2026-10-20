"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics to the trailing circle
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const circleX = useSpring(cursorX, springConfig);
  const circleY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Component has mounted on the client
    setIsMounted(true);

    // Check for mobile screens
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return; // Skip adding mouse listeners on mobile
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  // CRITICAL FIX: Do not render anything until the client has mounted to prevent hydration mismatch
  if (!isMounted || isMobile) return null;

  return (
    <>
      {/* 1. The Solid Center Dot (Instant tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#ea580c] rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* 2. The Trailing Outline Circle (Spring physics) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#ea580c]/60 rounded-full pointer-events-none z-[9998]"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
