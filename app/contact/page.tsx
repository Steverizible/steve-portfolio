"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import PageChrome from "@/components/PageChrome";
import { contactPage, siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen w-full animate-page-in bg-background">
      <PageChrome />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-14">
        <div>
          <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
            {contactPage.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {contactPage.description}
          </p>

          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {contactPage.formIntro}
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="sr-only">Name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
              />
            </label>
            <label className="block">
              <span className="sr-only">E-Mail</span>
              <input
                name="email"
                type="email"
                required
                placeholder="E-Mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
              />
            </label>
            <Button type="submit" variant="solid" className="uppercase">
              {contactPage.submitLabel}
            </Button>
          </form>
        </div>

        <aside className="space-y-10 border-t border-border pt-10 lg:border-t-0 lg:pt-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {contactPage.socialHeading}
            </p>
            <Link
              href={contactPage.social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
            >
              {contactPage.social.label}
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {contactPage.location.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {contactPage.location.value}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {contactPage.phone.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {contactPage.phone.value}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {contactPage.email.label}
            </p>
            <a
              href={contactPage.email.href}
              className="mt-3 inline-block text-sm leading-relaxed text-foreground transition-opacity hover:opacity-60"
            >
              {contactPage.email.value}
            </a>
          </div>
        </aside>
      </div>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-6 text-xs font-medium uppercase tracking-wide text-muted md:px-10 lg:px-14">
        <p>{siteMeta.copyright}</p>
        <Link href="#top" className="transition-opacity hover:opacity-60">
          {contactPage.backToTopLabel}
        </Link>
      </div>
    </main>
  );
}
