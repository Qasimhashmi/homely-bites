"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

// SVG Graphic 1: Fresh Green Chilli (Hari Mirch)
function GreenChilliIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 14px 22px rgba(21, 128, 61, 0.25))" }}
    >
      <defs>
        <linearGradient id="chilliBodyGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="35%" stopColor="#22c55e" />
          <stop offset="70%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="chilliStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M50 22 C48 12, 42 6, 32 3 C30 2, 28 4, 30 6 C36 10, 42 16, 44 24"
        stroke="url(#chilliStemGrad)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Calyx / Leaf Crown */}
      <path
        d="M40 26 C43 20, 57 20, 60 26 C63 30, 58 33, 50 33 C42 33, 37 30, 40 26 Z"
        fill="#15803d"
      />
      <path d="M42 27 L36 32 L44 32 Z" fill="#166534" />
      <path d="M58 27 L64 32 L56 32 Z" fill="#166534" />

      {/* Chilli Main Body */}
      <path
        d="M42 31 C38 45, 34 68, 40 85 C45 98, 55 110, 68 116 C71 117, 72 114, 70 112 C60 102, 53 88, 56 68 C58 52, 60 40, 58 31 Z"
        fill="url(#chilliBodyGrad)"
      />

      {/* Glossy Spine Highlight */}
      <path
        d="M44 36 C41 48, 39 68, 44 82 C48 93, 56 102, 63 108"
        stroke="rgba(255, 255, 255, 0.55)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// SVG Graphic 2: Fresh Coriander / Cilantro Leaf (Dhanya)
function CorianderLeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 12px 18px rgba(22, 163, 74, 0.2))" }}
    >
      <defs>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="40%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      {/* Main Curved Stem */}
      <path
        d="M20 85 C35 70, 48 55, 52 35"
        stroke="#15803d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M38 65 C48 60, 60 62, 68 60"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Top Main Tri-Lobe Leaf */}
      <path
        d="M52 35 C45 32, 38 22, 46 12 C52 6, 62 10, 60 18 C68 12, 78 18, 74 26 C82 28, 78 38, 68 40 C62 42, 56 38, 52 35 Z"
        fill="url(#leafGrad)"
      />

      {/* Side Leaflet */}
      <path
        d="M68 60 C64 54, 60 48, 68 42 C74 38, 80 44, 78 48 C84 46, 88 52, 84 56 C86 60, 80 64, 76 63 Z"
        fill="url(#leafGrad)"
        opacity="0.9"
      />

      {/* Delicate Leaf Veins */}
      <path
        d="M52 32 C56 26, 60 20, 62 16"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

// SVG Graphic 3: Star Anise (Badiyan ka Phool)
function StarAniseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 12px 20px rgba(120, 53, 15, 0.25))" }}
    >
      <defs>
        <radialGradient id="starCenterGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="60%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>
        <linearGradient id="starPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="50%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#5b21b6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 8-Petal Star Formation */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 50 50)`}>
          {/* Wooden Pod */}
          <path
            d="M50 50 C46 36, 42 20, 50 8 C58 20, 54 36, 50 50 Z"
            fill="url(#starCenterGrad)"
            stroke="#451a03"
            strokeWidth="0.75"
          />
          {/* Seed Pocket Cavity */}
          <ellipse cx="50" cy="22" rx="3.5" ry="5.5" fill="#f59e0b" opacity="0.9" />
          <ellipse cx="49" cy="21" rx="1.5" ry="3" fill="#fef3c7" opacity="0.8" />
        </g>
      ))}

      {/* Central Star Core */}
      <circle cx="50" cy="50" r="8" fill="#451a03" />
      <circle cx="50" cy="50" r="5" fill="#78350f" />
    </svg>
  );
}

// SVG Graphic 4: Green Cardamom Pod (Sabz Elaichi)
function CardamomIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 10px 16px rgba(77, 124, 15, 0.22))" }}
    >
      <defs>
        <linearGradient id="cardamomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="40%" stopColor="#84cc16" />
          <stop offset="80%" stopColor="#4d7c0f" />
          <stop offset="100%" stopColor="#365314" />
        </linearGradient>
      </defs>

      {/* Pod Body */}
      <path
        d="M35 15 C20 30, 15 55, 22 75 C26 86, 32 92, 35 95 C38 92, 44 86, 48 75 C55 55, 50 30, 35 15 Z"
        fill="url(#cardamomGrad)"
      />

      {/* Pod Ribs / Ridges */}
      <path
        d="M35 15 C33 40, 33 70, 35 95"
        stroke="#365314"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M35 15 C27 38, 25 65, 30 85"
        stroke="#65a30d"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M35 15 C43 38, 45 65, 40 85"
        stroke="#65a30d"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Crown Tip */}
      <path
        d="M32 15 L35 8 L38 15 Z"
        fill="#365314"
      />
    </svg>
  );
}

// SVG Graphic 5: Whole Bay Leaf (Tez Patta)
function BayLeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 12px 18px rgba(101, 163, 13, 0.2))" }}
    >
      <defs>
        <linearGradient id="bayLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d9f99d" />
          <stop offset="35%" stopColor="#84cc16" />
          <stop offset="75%" stopColor="#4d7c0f" />
          <stop offset="100%" stopColor="#365314" />
        </linearGradient>
      </defs>

      {/* Leaf Shape */}
      <path
        d="M40 8 C22 35, 15 65, 25 95 C30 105, 38 112, 40 118 C42 112, 50 105, 55 95 C65 65, 58 35, 40 8 Z"
        fill="url(#bayLeafGrad)"
      />

      {/* Central Vein */}
      <path
        d="M40 8 C40 45, 40 85, 40 118"
        stroke="#365314"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      {/* Branching Veins */}
      <path d="M40 35 C32 42, 26 46, 22 47" stroke="#365314" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M40 35 C48 42, 54 46, 58 47" stroke="#365314" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M40 60 C30 68, 25 73, 22 75" stroke="#365314" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M40 60 C50 68, 55 73, 58 75" stroke="#365314" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// SVG Graphic 6: Whole Red Chilli (Lal Mirch)
function RedChilliIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 110"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 14px 22px rgba(220, 38, 38, 0.28))" }}
    >
      <defs>
        <linearGradient id="redChilliGrad" x1="10%" y1="10%" x2="90%" y2="90%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="30%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M45 20 C42 12, 35 6, 26 4"
        stroke="#15803d"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Cap */}
      <path
        d="M38 23 C42 18, 52 18, 56 23 C58 26, 52 29, 47 29 C42 29, 36 26, 38 23 Z"
        fill="#166534"
      />

      {/* Body */}
      <path
        d="M38 26 C35 40, 32 60, 38 75 C44 88, 55 98, 68 104 C70 105, 71 102, 69 100 C58 90, 52 78, 53 60 C54 45, 55 35, 54 26 Z"
        fill="url(#redChilliGrad)"
      />

      {/* Highlight */}
      <path
        d="M40 30 C37 42, 36 60, 41 74 C45 84, 52 92, 60 98"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// SVG Graphic 7: Clove / Zeera Seeds (Aromatic Micro-spice)
function CloveIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 8px 12px rgba(69, 26, 3, 0.2))" }}
    >
      <defs>
        <linearGradient id="cloveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="60%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>

      {/* Clove Stalk */}
      <path d="M28 35 L26 72 C26 75, 34 75, 34 72 L32 35 Z" fill="url(#cloveGrad)" />

      {/* Crown Sepals */}
      <path d="M22 35 C24 30, 36 30, 38 35 L42 28 L36 30 L30 24 L24 30 L18 28 Z" fill="#78350f" />

      {/* Head Ball */}
      <circle cx="30" cy="22" r="7" fill="url(#cloveGrad)" />
      <circle cx="28" cy="20" r="2.5" fill="#b45309" opacity="0.8" />
    </svg>
  );
}

// Unified Interactive Floating Ingredient Component
interface FloatingItemProps {
  id: string;
  name: string;
  component: React.ComponentType<{ className?: string }>;
  desktopPos: string; // Tailwind positioning e.g. "top-[25%] left-[10%]"
  sizeClass: string; // Dimensions
  baseRotation: number;
  bobbingRange?: number;
  bobbingDuration?: number;
  driftMultiplier?: number;
  cursorSensitivity?: number;
}

function FloatingItem({
  name,
  component: Component,
  desktopPos,
  sizeClass,
  baseRotation,
  bobbingRange = 8,
  bobbingDuration = 4,
  driftMultiplier = 20,
  cursorSensitivity = 35,
}: FloatingItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Smooth springs for dynamic cursor gaze physics
  const springConfig = { stiffness: 140, damping: 20, mass: 0.8 };
  const smoothRotate = useSpring(baseRotation, springConfig);
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      // 1. ANGLE GAZE PHYSICS: Turn towards the cursor like seeing it
      // We calculate the angle to the cursor and gently orient the ingredient
      const angleToCursor = Math.atan2(dy, dx) * (180 / Math.PI);
      
      // Calculate angular difference relative to base rotation
      let diff = angleToCursor - baseRotation;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;

      // Soft gaze cone: turns up to cursorSensitivity degrees towards cursor direction
      const influence = Math.max(0, 1 - distance / 900); // stronger when closer
      const targetRotation = baseRotation + (diff * influence * (cursorSensitivity / 90));
      smoothRotate.set(targetRotation);

      // 2. PARALLAX DRIFT MOVEMENT: Subtle motion towards/with the cursor
      const maxDistance = 600;
      const clampedDist = Math.min(distance, maxDistance);
      const factor = (clampedDist / maxDistance) * driftMultiplier;

      const normX = dx / (distance || 1);
      const normY = dy / (distance || 1);

      // Float slightly towards cursor with organic inertia
      smoothX.set(normX * factor);
      smoothY.set(normY * factor);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [baseRotation, cursorSensitivity, driftMultiplier, smoothRotate, smoothX, smoothY]);

  const handlePoke = () => {
    setHasInteracted(true);
    // Little playful spin & return
    smoothRotate.set(baseRotation + 45);
    setTimeout(() => {
      smoothRotate.set(baseRotation);
      setHasInteracted(false);
    }, 400);
  };

  return (
    <div
      ref={itemRef}
      className={`absolute ${desktopPos} select-none z-30 pointer-events-auto`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePoke}
      title={`${name} — Move your cursor to see me turn!`}
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          rotate: smoothRotate,
        }}
        animate={{
          y: isHovered ? [0, -4, 0] : [-bobbingRange, bobbingRange, -bobbingRange],
        }}
        transition={{
          y: {
            duration: bobbingDuration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`cursor-pointer transition-transform duration-200 ${sizeClass}`}
      >
        <Component className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
}

// Master Ingredients Canvas scattered around the Hero Tiffin
export default function FloatingIngredients() {
  const ingredients: FloatingItemProps[] = [
    // 1. Signature Green Chilli (Top-Left Flank)
    {
      id: "chilli-1",
      name: "Fresh Green Chilli (Hari Mirch)",
      component: GreenChilliIcon,
      desktopPos: "top-[16%] left-[4%] sm:left-[8%] md:top-[18%] md:left-[10%] lg:left-[12%]",
      sizeClass: "w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24",
      baseRotation: -28,
      bobbingRange: 9,
      bobbingDuration: 4.2,
      driftMultiplier: 24,
      cursorSensitivity: 40,
    },
    // 2. Fresh Coriander Sprig (Top-Right Flank)
    {
      id: "coriander-1",
      name: "Coriander Leaf (Dhanya)",
      component: CorianderLeafIcon,
      desktopPos: "top-[14%] right-[5%] sm:right-[9%] md:top-[16%] md:right-[12%] lg:right-[14%]",
      sizeClass: "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
      baseRotation: 24,
      bobbingRange: 7,
      bobbingDuration: 3.8,
      driftMultiplier: 22,
      cursorSensitivity: 35,
    },
    // 3. Aromatic Star Anise (Mid-Left near Tiffin Lid)
    {
      id: "star-anise-1",
      name: "Star Anise (Badiyan)",
      component: StarAniseIcon,
      desktopPos: "top-[48%] left-[2%] sm:left-[6%] md:top-[44%] md:left-[8%] lg:left-[11%]",
      sizeClass: "w-11 h-11 sm:w-13 sm:h-13 md:w-16 md:h-16",
      baseRotation: 15,
      bobbingRange: 6,
      bobbingDuration: 4.8,
      driftMultiplier: 18,
      cursorSensitivity: 45,
    },
    // 4. Whole Bay Leaf (Mid-Right near Tiffin Stack)
    {
      id: "bay-leaf-1",
      name: "Bay Leaf (Tez Patta)",
      component: BayLeafIcon,
      desktopPos: "top-[46%] right-[3%] sm:right-[7%] md:top-[42%] md:right-[9%] lg:right-[12%]",
      sizeClass: "w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-22",
      baseRotation: -18,
      bobbingRange: 8,
      bobbingDuration: 5.2,
      driftMultiplier: 20,
      cursorSensitivity: 38,
    },
    // 5. Green Cardamom Pod (Lower-Left near Shadow)
    {
      id: "cardamom-1",
      name: "Cardamom (Elaichi)",
      component: CardamomIcon,
      desktopPos: "bottom-[24%] left-[6%] sm:left-[11%] md:bottom-[22%] md:left-[15%] lg:left-[18%]",
      sizeClass: "w-9 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16",
      baseRotation: -35,
      bobbingRange: 5,
      bobbingDuration: 3.6,
      driftMultiplier: 16,
      cursorSensitivity: 42,
    },
    // 6. Fiery Red Chilli (Lower-Right near CTA)
    {
      id: "red-chilli-1",
      name: "Whole Red Chilli (Lal Mirch)",
      component: RedChilliIcon,
      desktopPos: "bottom-[22%] right-[5%] sm:right-[10%] md:bottom-[20%] md:right-[14%] lg:right-[17%]",
      sizeClass: "w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20",
      baseRotation: 32,
      bobbingRange: 8,
      bobbingDuration: 4.5,
      driftMultiplier: 22,
      cursorSensitivity: 45,
    },
    // 7. Whole Clove (Delicate accent spice)
    {
      id: "clove-1",
      name: "Whole Clove (Laung)",
      component: CloveIcon,
      desktopPos: "top-[32%] right-[18%] hidden lg:block",
      sizeClass: "w-8 h-10 md:w-10 md:h-12",
      baseRotation: -12,
      bobbingRange: 6,
      bobbingDuration: 3.4,
      driftMultiplier: 15,
      cursorSensitivity: 50,
    },
    // 8. Secondary Mini Green Chilli (Delicate accent spice)
    {
      id: "chilli-2",
      name: "Mini Hari Mirch",
      component: GreenChilliIcon,
      desktopPos: "top-[34%] left-[19%] hidden lg:block",
      sizeClass: "w-10 h-12 md:w-12 md:h-14 opacity-80",
      baseRotation: 40,
      bobbingRange: 5,
      bobbingDuration: 4.0,
      driftMultiplier: 18,
      cursorSensitivity: 35,
    },
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20"
      aria-hidden="true"
    >
      {ingredients.map((item) => (
        <FloatingItem key={item.id} {...item} />
      ))}
    </div>
  );
}
