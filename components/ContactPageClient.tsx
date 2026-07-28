"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import { roleFitPage } from "@/lib/role-fit-data";
import { contactPage, siteMeta } from "@/lib/site-data";

type OpportunityIntent =
  (typeof contactPage.opportunityField.options)[number]["value"];

const INTENT_VALUES = new Set<string>(
  contactPage.opportunityField.options.map((option) => option.value)
);

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const intentFromQuery = searchParams.get("intent") ?? "";
  const initialIntent: OpportunityIntent = INTENT_VALUES.has(intentFromQuery)
    ? (intentFromQuery as OpportunityIntent)
    : "senior-role";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState(initialIntent);
  const [message, setMessage] = useState("");

  const selectedPath = useMemo(
    () =>
      roleFitPage.contactPaths.find((path) => path.intent === intent) ??
      roleFitPage.contactPaths[0],
    [intent]
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const intentLabel =
      contactPage.opportunityField.options.find(
        (option) => option.value === intent
      )?.label ?? intent;

    const subject = encodeURIComponent(
      `${intentLabel} inquiry from ${name || "visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\nOpportunity: ${intentLabel}\n\n${message}`
    );

    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-14">
      <div>
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
          {contactPage.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {contactPage.description}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {roleFitPage.contactPaths.map((path) => {
            const active = intent === path.intent;
            return (
              <li key={path.id}>
                <button
                  type="button"
                  onClick={() => setIntent(path.intent)}
                  className={`h-full w-full rounded-2xl border px-4 py-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-foreground hover:bg-background"
                  }`}
                  aria-pressed={active}
                >
                  <span className="block text-sm font-bold uppercase tracking-tight">
                    {path.title}
                  </span>
                  <span
                    className={`mt-2 block text-xs leading-relaxed ${
                      active ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {path.description}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {contactPage.formIntro}
        </p>
        <p className="mt-2 text-sm text-muted">
          Selected path:{" "}
          <span className="font-semibold text-foreground">
            {selectedPath.title}
          </span>
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              Name
            </span>
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
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              Company
            </span>
            <input
              name="company"
              type="text"
              placeholder="Company"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              {contactPage.opportunityField.label}
            </span>
            <select
              name="intent"
              value={intent}
              onChange={(event) =>
              setIntent(event.target.value as OpportunityIntent)
            }
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-foreground"
            >
              {contactPage.opportunityField.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <noscript>
            <p className="text-sm text-muted">
              You can also email{" "}
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>{" "}
              directly.
            </p>
          </noscript>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
              Message
            </span>
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
            Next steps
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={contactPage.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {contactPage.resume.label}
              </a>
            </li>
            <li>
              <Link
                href={contactPage.social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {contactPage.social.label}
              </Link>
            </li>
            <li>
              <a
                href={contactPage.email.href}
                className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {contactPage.email.label}
              </a>
            </li>
            <li>
              <Link
                href={contactPage.roleFit.href}
                className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {contactPage.roleFit.label}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {contactPage.trustHeading}
          </p>
          <ul className="mt-4 space-y-2">
            {roleFitPage.contactTrust.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-foreground">
                {item}
              </li>
            ))}
          </ul>
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
      </aside>
    </div>
  );
}
