"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { TheaterIntro } from "@/components/theater/TheaterIntro";
import { fadeUp } from "@/lib/motion";
import { brand } from "@/lib/site";

type OrbitCard = {
  src: string;
  angle: number;
  radius: string;
  duration: number;
};

type OrbitStyle = CSSProperties & {
  "--angle": string;
  "--radius": string;
};

const orbitCards: OrbitCard[] = [
  { src: "/cards/AS.svg", angle: -90, radius: "10.8rem", duration: 24 },
  { src: "/cards/KS.svg", angle: -18, radius: "10.8rem", duration: 24 },
  { src: "/cards/QS.svg", angle: 54, radius: "10.8rem", duration: 24 },
  { src: "/cards/JS.svg", angle: 126, radius: "10.8rem", duration: 24 },
  { src: "/cards/10S.svg", angle: 198, radius: "10.8rem", duration: 24 },
];

export function HeroSection() {
  return (
    <TheaterIntro>
    <section id="top" className="relative z-[1] border-b border-white/[0.06] pt-28 sm:pt-32">
      <div className="mx-auto grid min-h-[calc(100dvh-7.5rem)] w-full max-w-6xl items-center gap-14 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Moroccan close-up · Original creations
        </motion.p>
          <motion.h1
          className="mt-4 max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.06 }}
        >
          {brand.name}
        </motion.h1>
          <motion.p
          className="mt-6 max-w-2xl text-lg font-medium text-white/90 sm:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.12 }}
        >
          {brand.tagline}
        </motion.p>
          <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.18 }}
        >
          Specializing in close-up magic and original inventions that redefine
          perception — intimate, impossible, unforgettable.
        </motion.p>

          <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.24 }}
        >
            <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 text-sm font-semibold tracking-wide text-white transition hover:bg-[var(--accent-hover)] hover:text-black"
          >
            Book a Show
          </Link>
            <Link
            href="#experience"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-8 text-sm font-medium tracking-wide text-white transition hover:border-[var(--accent)]/45 hover:bg-white/[0.08]"
          >
            Explore My Work
          </Link>
        </motion.div>
        </div>

        <div className="relative mx-auto h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] lg:mx-0 lg:h-[28rem] lg:w-[28rem]">
          <div className="absolute inset-0 rounded-full border border-white/10" aria-hidden />
          {orbitCards.map((card) => {
            const style: OrbitStyle = {
              "--angle": `${card.angle}deg`,
              "--radius": card.radius,
              animationDuration: `${card.duration}s`,
            };

            return (
              <div key={card.src} className="orbit-card z-20" style={style} aria-hidden>
                <Image
                  src={card.src}
                  alt=""
                  width={88}
                  height={126}
                  className="h-auto w-12 rounded-md border border-white/15 bg-white shadow-[0_14px_38px_-18px_rgba(0,0,0,0.95)] sm:w-14 lg:w-[3.9rem]"
                />
              </div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-10 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[var(--accent)]/30 bg-black/20 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_28px_80px_-36px_rgba(0,0,0,0.9)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/ali.jpg"
                alt="Abdelali Nour"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 360px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </TheaterIntro>
  );
}
