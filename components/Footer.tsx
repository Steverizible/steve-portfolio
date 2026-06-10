import Link from "next/link";
import { contact, siteMeta } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="w-full px-6 pt-10 md:px-10 md:pt-16 lg:px-14">
        <div className="overflow-hidden">
          <p
            className="text-[clamp(3.5rem,18vw,12rem)] font-bold uppercase leading-[0.85] tracking-tight text-foreground"
            aria-hidden="true"
          >
            {siteMeta.name}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs font-medium uppercase tracking-wide text-muted sm:flex-row">
          <p>{siteMeta.copyright}</p>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
            {contact.footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="#top" className="transition-opacity hover:opacity-60">
            {contact.backToTopLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
