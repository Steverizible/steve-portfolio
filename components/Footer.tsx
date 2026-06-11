import Link from "next/link";
import { contact, siteMeta } from "@/lib/site-data";

const [nameFirst, nameLast] = siteMeta.name.split(" ");

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="w-full pt-10 md:pt-16">
        <p
          className="w-full px-4 text-[clamp(4rem,22vw,14rem)] font-bold uppercase leading-[0.85] tracking-[-0.02em] text-foreground md:px-6 lg:px-8"
          aria-hidden="true"
        >
          <span className="block">{nameFirst}</span>
          <span className="block">{nameLast}</span>
        </p>
      </div>

      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs font-medium uppercase tracking-wide text-muted sm:flex-row">
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
