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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-hover)]">
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
                  className="group relative flex h-24 items-center justify-center px-2"
                  aria-label={logo.name}
                >
                  <span className="pointer-events-none absolute inset-x-2 top-1/2 h-8 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,217,217,0.16)_0%,rgba(201,169,98,0.16)_45%,transparent_72%)] opacity-0 blur-xl transition-opacity duration-500 ease-out group-hover:opacity-100" />
                  <span className="relative inline-flex h-16 w-full max-w-[9.5rem] overflow-hidden">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 160px"
                      className="object-contain opacity-85 grayscale-[0.1] drop-shadow-[0_6px_14px_rgba(9,9,9,0.55)] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:opacity-100 group-hover:drop-shadow-[0_10px_28px_rgba(201,169,98,0.32)]"
                    />
                  </span>
                  <span className="pointer-events-none absolute right-2 top-6 h-1.5 w-1.5 rounded-full bg-[#d9d9d9]/80 opacity-0 blur-[0.5px] transition-all duration-500 ease-out group-hover:translate-y-[-2px] group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
