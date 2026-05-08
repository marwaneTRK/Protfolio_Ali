"use client";

import { Suspense, useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { submitBooking, type BookingState } from "@/app/actions/booking";
import { fadeUp, staggerContainer } from "@/lib/motion";

const initial: BookingState = { ok: null, message: "" };

const interestOptions = [
  { value: "", label: "What can we help with?" },
  { value: "booking", label: "Book a performance" },
  { value: "corporate", label: "Corporate / brand event" },
  { value: "cicard", label: "CICARD — product inquiry" },
  { value: "sawebwork", label: "Sawebwork — product inquiry" },
  { value: "vision", label: "Vision — product inquiry" },
  { value: "other", label: "Other collaboration" },
];

function ContactInner() {
  const reduce = useReducedMotion();
  const params = useSearchParams();
  const interestParam = params.get("interest")?.toLowerCase() ?? "";
  const interestRef = useRef<HTMLSelectElement>(null);
  const [state, formAction, pending] = useActionState(submitBooking, initial);

  useEffect(() => {
    if (!interestParam || !interestRef.current) return;
    const allowed = interestOptions.map((o) => o.value).filter(Boolean);
    if (allowed.includes(interestParam)) {
      interestRef.current.value = interestParam;
    }
  }, [interestParam]);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:scroll-mt-28 sm:pb-32 sm:pt-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Booking
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight text-white sm:text-5xl">
              Book Abdelali Nour
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
              Available for private events, corporate shows, and exclusive
              performances. Share a few details — you will receive a thoughtful
              reply.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <form
              action={formAction}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-white/25 focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Phone (optional)
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                    placeholder="+212 …"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Inquiry
                  </span>
                  <select
                    ref={interestRef}
                    name="interest"
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                  >
                    {interestOptions.map((o) => (
                      <option key={o.value || "default"} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                    placeholder="Date, city, type of event, audience size…"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold tracking-wide text-white transition hover:bg-[var(--accent-hover)] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    "Request Booking"
                  )}
                </button>
                {state.message ? (
                  <p
                    role={state.ok === false ? "alert" : "status"}
                    className={`text-sm ${
                      state.ok ? "text-emerald-400" : "text-amber-200/90"
                    }`}
                  >
                    {state.message}
                  </p>
                ) : null}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFallback() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:scroll-mt-28 sm:pb-32 sm:pt-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="h-14 max-w-md animate-pulse rounded-lg bg-white/[0.06]" />
        <div className="mt-8 h-96 max-w-2xl animate-pulse rounded-2xl bg-white/[0.04] lg:ml-auto" />
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactInner />
    </Suspense>
  );
}
