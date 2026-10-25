"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useMotionValue, useSpring } from "motion/react";

export function SmoothScroll() {
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.065,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const handleScroll = ({ scroll, limit }: { scroll: number; limit: number }) => {
      scrollProgress.set(limit > 0 ? scroll / limit : 0);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, [scrollProgress]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full origin-left bg-(--accent)"
      style={{ scaleX: smoothProgress }}
    />
  );
}
