"use client";
import { ReactLenis } from "lenis/react"; // <-- Updated modern import

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // The lower the number, the smoother and heavier the scroll feels
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
