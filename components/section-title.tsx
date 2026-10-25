 "use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore, type ReactNode } from "react";
import { TitleReveal } from "@/components/motion";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  const isMounted = useIsMounted();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-2xl">
      <div className="mb-5 flex items-center gap-3">
        <motion.span
          aria-hidden="true"
          className="block h-px bg-(--accent)"
          initial={isMounted ? { width: 0 } : false}
          animate={isMounted ? { width: "2.5rem" } : undefined}
          transition={{ duration: prefersReducedMotion ? 0.25 : 0.65, delay: 0.1 }}
        />
        <p className="text-xs font-bold uppercase tracking-[.25em] text-(--accent)">{eyebrow}</p>
      </div>
      <TitleReveal>
        <h2 className="text-4xl font-black uppercase leading-[.95] tracking-[-.05em] sm:text-6xl">{title}</h2>
      </TitleReveal>
      {description && (
        <motion.p
          className="mt-6 max-w-lg text-base leading-7 text-(--muted)"
          initial={isMounted ? { opacity: 0, y: prefersReducedMotion ? 0 : 16 } : false}
          animate={isMounted ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: prefersReducedMotion ? 0.35 : 0.65, delay: 0.25 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
