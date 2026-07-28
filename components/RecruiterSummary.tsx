import Link from "next/link";
import Button from "@/components/Button";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { roleFitPage } from "@/lib/role-fit-data";

export default function RecruiterSummary() {
  const data = roleFitPage.recruiterSummary;

  return (
    <section
      className="w-full border-b border-border bg-background"
      aria-label="A builder across business, product and technology"
    >
      <div className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <RevealHeading className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">A Builder Across</span>
            <span className="block">Business, Product</span>
            <span className="block">and Technology</span>
          </RevealHeading>
          <RevealOnScroll className="text-base leading-relaxed text-muted md:text-lg lg:pt-2">
            {data.body}
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-12">
          <ul className="flex flex-wrap gap-3">
            {data.proofLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex flex-col rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <span className="text-sm font-bold uppercase tracking-tight text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-1 text-xs text-muted">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Button href={data.cta.href} variant="solid">
            {data.cta.label}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
