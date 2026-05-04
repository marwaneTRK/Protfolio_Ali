"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { performanceReels } from "@/data/performance";

const channel = "https://www.youtube.com/@abdelalinour";

function parseYoutubeIds() {
  const raw = process.env.NEXT_PUBLIC_PERFORMANCE_YOUTUBE_IDS?.trim() ?? "";
  if (!raw) return [] as string[];
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

export function PerformanceSection() {
  const reduce = useReducedMotion();
  const ids = parseYoutubeIds();

  return (
    <section
      id="experience"
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
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--gold)]">
              Performance
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Experience the Magic
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">
              Real moments. Real reactions. No camera tricks.
            </p>
          </motion.div>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {performanceReels.map((item, i) => {
              const yt = ids[i];
              return (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)]"
                >
                  <div className="relative aspect-video w-full">
                    {yt ? (
                      <iframe
                        title={item.title}
                        src={`https://www.youtube-nocookie.com/embed/${yt}?rel=0`}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <>
                        <Image
                          src={item.poster}
                          alt=""
                          fill
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-5">
                          <p className="text-xs uppercase tracking-widest text-[var(--gold)]">
                            {item.subtitle}
                          </p>
                          <p className="mt-1 font-display text-xl text-white">
                            {item.title}
                          </p>
                          <Link
                            href={channel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                          >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                              <Play className="h-4 w-4 fill-current" aria-hidden />
                            </span>
                            Watch on YouTube
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
