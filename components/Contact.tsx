"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import RevealHeading from "@/components/RevealHeading";
import ZoomMedia from "@/components/ZoomMedia";
import { sectionImages } from "@/lib/images";
import { contact } from "@/lib/site-data";

export default function Contact() {
  return (
    <section className="border-b border-border bg-white" id={contact.id}>
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <ZoomMedia
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-card lg:mx-0 lg:max-w-none"
          >
            <div className="relative h-full w-full">
              <Image
                src={sectionImages.contactPortrait ?? sectionImages.about}
                alt="Steve Watts"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </ZoomMedia>

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted">
              {contact.subheadline}
            </p>
            <RevealHeading className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              <span className="block uppercase">{contact.headlineLines[0]}</span>
              <span className="block uppercase">{contact.headlineLines[1]}</span>
            </RevealHeading>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>{contact.description}</p>
              <p>{contact.descriptionSecondary}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button href={contact.cta.href} variant="solid" className="uppercase">
                {contact.cta.label}
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {contact.social.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
                  >
                    {social.label}
                    <span className="mt-1 block text-xs font-normal normal-case text-muted">
                      {social.handle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
