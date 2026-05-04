import Link from "next/link";
import { socialEntries } from "@/data/social-urls";
import { brand } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-[var(--gold)]">{brand.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            © {year} · Close-up magic &amp; original creations
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {socialEntries.slice(0, 4).map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
