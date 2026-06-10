import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { sectionImages } from "@/lib/images";
import { contact } from "@/lib/site-data";

export default function Contact() {
  return (
    <section className="border-b border-border bg-white" id={contact.id}>
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border md:h-48 md:w-48">
            <Image
              src={sectionImages.about}
              alt="Steve Watts"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-muted">
            {contact.subheadline}
          </p>
          <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {contact.description}
          </p>

          <div className="mt-10">
            <Button href={contact.cta.href} variant="solid">
              {contact.cta.label}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {contact.social.map((social) => (
              <li key={social.href}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
                >
                  {social.label}
                  <span className="mt-1 block text-xs font-normal text-muted normal-case">
                    {social.handle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
