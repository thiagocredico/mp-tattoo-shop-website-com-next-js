import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-4xl font-black uppercase leading-[.95] tracking-[-.05em] sm:text-6xl">{title}</h2>
      {description && <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">{description}</p>}
    </div>
  );
}
