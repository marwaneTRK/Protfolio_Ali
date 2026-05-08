"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { creations } from "@/data/creations";
import { brand } from "@/lib/site";

const shopUrl = process.env.NEXT_PUBLIC_ALIMAGICSHOP_URL?.trim();

export function CreationsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="creations"
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
              AliMagicShop
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Original Creations
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
              Professional-grade effects imagined for working magicians — crafted
              for impact, clarity, and real-world performance.
            </p>
          </motion.div>

          <ul className="mt-16 grid gap-8 lg:grid-cols-3">
            {creations.map((item) => (
              <motion.li key={item.slug} variants={fadeUp}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-1 shadow-[0_28px_100px_-48px_rgba(0,0,0,0.85)] transition duration-500 hover:border-[var(--accent)]/35 hover:shadow-[0_36px_120px_-40px_rgba(201,169,98,0.28)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width:1024px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                      {item.tagline}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/?interest=${encodeURIComponent(item.slug)}#contact`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-[var(--accent)]/40 hover:bg-white/10"
                      >
                        Learn more
                        <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden />
                      </Link>
                      {shopUrl ? (
                        <Link
                          href={shopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
                        >
                          {brand.shopName}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
