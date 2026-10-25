"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useSyncExternalStore, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={!isMounted ? false : prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={!isMounted ? undefined : prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0.35, delay }
          : {
              opacity: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
              y: { type: "spring", stiffness: 90, damping: 18, mass: 0.8, delay },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({ children, className }: Omit<RevealProps, "delay" | "y">) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={!isMounted ? false : prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
      whileInView={!isMounted ? undefined : prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={
        prefersReducedMotion
          ? { duration: 0.35 }
          : {
              opacity: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              scale: { type: "spring", stiffness: 70, damping: 20, mass: 0.9 },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-11%", "11%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.08]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={isMounted && !prefersReducedMotion ? { y, scale } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? undefined : { y: -7, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export function TitleReveal({ children, className }: { children: ReactNode; className?: string }) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={isMounted ? { opacity: 0, clipPath: "inset(0 0 100% 0)" } : false}
      animate={isMounted ? { opacity: 1, clipPath: "inset(0 0 0% 0)" } : undefined}
      transition={{
        duration: prefersReducedMotion ? 0.35 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={isMounted ? { opacity: 0, scale: prefersReducedMotion ? 1 : 1.08 } : false}
      whileInView={isMounted ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        prefersReducedMotion
          ? { duration: 0.35 }
          : {
              opacity: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              scale: { type: "spring", stiffness: 55, damping: 18, mass: 1 },
            }
      }
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 origin-right bg-(--accent)"
        initial={isMounted ? { scaleX: 1 } : false}
        whileInView={isMounted ? { scaleX: 0 } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.9, delay: prefersReducedMotion ? 0 : 0.16, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </motion.div>
  );
}

export function LineReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, clipPath: "inset(0 100% 0 0)" } : false}
      whileInView={isMounted ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : undefined}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredText({
  lines,
  className,
}: {
  lines: { text: string; className?: string }[];
  className?: string;
}) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.h1
      className={className}
      initial={!isMounted ? false : prefersReducedMotion ? "reducedHidden" : "hidden"}
      animate={isMounted ? (prefersReducedMotion ? "reducedVisible" : "visible") : undefined}
      variants={{
        hidden: {},
        reducedHidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
        reducedVisible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {lines.map((line) => (
        <motion.span
          className={`block whitespace-nowrap ${line.className ?? ""}`}
          key={line.text}
          variants={{
            hidden: { opacity: 0, y: 42, clipPath: "inset(0 0 100% 0)" },
            reducedHidden: { opacity: 0 },
            reducedVisible: {
              opacity: 1,
              transition: { duration: 0.35, ease: "easeOut" },
            },
            visible: {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {line.text}
        </motion.span>
      ))}
    </motion.h1>
  );
}
