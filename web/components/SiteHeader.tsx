import Link from "next/link";

const nav = [
  { href: "#trusted", label: "Trusted" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#creations", label: "Creations" },
  { href: "#media", label: "Media" },
  { href: "#connect", label: "Social" },
  { href: "#contact", label: "Book" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[var(--surface)]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="#top"
          className="font-display shrink-0 text-base tracking-wide text-[var(--accent)] transition hover:text-[var(--accent-hover)] sm:text-lg"
        >
          Abdelali Nour
        </Link>
        <nav
          className="-mr-2 flex max-w-[min(78vw,22rem)] items-center gap-0.5 overflow-x-auto pb-0.5 sm:max-w-none sm:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition hover:bg-white/5 hover:text-white sm:px-3 sm:text-xs sm:normal-case sm:tracking-normal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
