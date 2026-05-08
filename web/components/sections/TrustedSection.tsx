"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const trustPoints = [
  { label: "Years Performing", value: "10+" },
  { label: "Private & Corporate Shows", value: "300+" },
  { label: "Media Appearances", value: "20+" },
  { label: "International Stage Presence", value: "Morocco · France" },
];

const trustedLogos = [
  { name: "Al Aoula", src: "/trusted/al-aoula.jpg" },
  { name: "Hit Radio", src: "/trusted/hit-radio.jpg" },
  { name: "Imagicus Magazine", src: "/trusted/imagicus_magazine.jpg" },
  { name: "Magic Dream", src: "/trusted/logo-magic-dream.jpg" },
  { name: "Murphy's Magic", src: "/trusted/murphys-magic.jpg" },
  { name: "Penguin Magic", src: "/trusted/penguin_magic.jpg" },
];

export function TrustedSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="trusted"
      className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:scroll-mt-28 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--gold-bright)]">
              Trusted
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Trusted by audiences, organizers, and media
            </h2>
            <p className="mt-5 text-lg text-[var(--muted)]">
              A performance style built on elegance, precision, and reliable impact
              for intimate and high-profile events.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {trustPoints.map((point) => (
              <article
                key={point.label}
                className="glass rounded-2xl border border-white/10 p-6"
              >
                <p className="font-display text-2xl text-[var(--foreground)]">
                  {point.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{point.label}</p>
              </article>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]/80">
              Trusted by
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {trustedLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="glass flex h-24 items-center justify-center rounded-xl border border-white/10 px-3"
                  aria-label={logo.name}
                >
                  <span className="relative inline-flex h-16 w-full max-w-[9.5rem] overflow-hidden rounded-md border border-white/15 bg-black/35 p-1">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 160px"
                      className="object-contain"
                    />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
