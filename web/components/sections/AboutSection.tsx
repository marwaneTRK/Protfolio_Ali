"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { brand } from "@/lib/site";

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:scroll-mt-28 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start"
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Close-up specialist &amp; creator
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)]">{brand.region}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl p-8 sm:p-10"
          >
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)]">
              <p className="text-white/90">
                <strong className="font-medium text-white">{brand.name}</strong>
                , born in Rabat in July 1993, is a Moroccan magician and creative
                innovator in the world of close-up magic. With over a decade of
                experience, he has built a reputation not only as a performer but
                as a creator of original magic effects used by professionals.
              </p>
              <p>
                His work blends technical mastery, psychology, and creativity to
                deliver moments that feel real, personal, and impossible to
                explain.
              </p>
              <p>
                Based in Témara, he performs at private events, media
                appearances, and international stages — including recognition as a
                featured performer at the Great Magic Show and Festival M.I.A.M
                (Toulouse, France).
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
