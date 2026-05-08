"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { mediaTimeline } from "@/data/mediaTimeline";

const kindLabel: Record<(typeof mediaTimeline)[number]["kind"], string> = {
  festival: "International",
  tv: "Television",
  radio: "Radio",
  press: "Press",
};

export function MediaCredibilitySection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="media"
      className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:scroll-mt-28 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Media &amp; credibility
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Seen where it matters
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
              Recognized across television, radio, and international stages.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr]"
          >
            <div className="glass rounded-2xl p-8 sm:p-10">
              <p className="font-display text-2xl leading-snug text-white/95">
                From national broadcasters to festival marquees — a career built
                on craft, discretion, and unforgettable close-up moments.
              </p>
            </div>

            <ol className="relative border-l border-white/10 pl-8">
              {mediaTimeline.map((entry) => (
                <li key={`${entry.year}-${entry.title}`} className="relative pb-12 last:pb-0">
                  <span
                    className="absolute -left-[calc(0.5rem+1px)] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(139,92,246,0.38)]"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {entry.year} · {kindLabel[entry.kind]}
                  </p>
                  <p className="mt-2 font-display text-xl text-white">{entry.title}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
