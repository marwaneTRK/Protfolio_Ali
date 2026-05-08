"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SocialIcon } from "@/components/SocialIcon";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { socialEntries } from "@/data/social-urls";

export function SocialSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="connect"
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
              Connect
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Follow the work
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
              Behind-the-scenes, new releases, and performance drops across
              platforms.
            </p>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-12 flex flex-wrap gap-3 sm:gap-4"
          >
            {socialEntries.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 pr-5 text-sm text-white/90 backdrop-blur-md transition hover:border-[var(--accent)]/35 hover:bg-white/[0.06]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/30 text-[var(--accent)] transition group-hover:text-[var(--accent-hover)]">
                    <SocialIcon id={item.id} className="h-5 w-5" />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
