import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getFeaturedTechTools, techStackSection } from "@/lib/tech-stack-data";

export default function TechStackPreview() {
  const featured = getFeaturedTechTools();
  const data = techStackSection.homepage;

  return (
    <section
      className="w-full border-b border-border bg-background"
      aria-label="Tools behind the work"
    >
      <div className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <RevealHeading className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">Tools Behind</span>
            <span className="block">the Work</span>
          </RevealHeading>
          <RevealOnScroll className="text-base leading-relaxed text-muted md:text-lg lg:pt-2">
            {data.supporting}
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-12">
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {featured.map((tool) => (
              <li
                key={tool.id}
                className="flex flex-col items-start rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                  <Image
                    src={tool.logoSrc}
                    alt={tool.logoAlt}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-tight text-foreground">
                  {tool.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                  {tool.category.split("&")[0].trim()}
                </p>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Button href={data.cta.href} variant="solid">
            {data.cta.label}
          </Button>
        </RevealOnScroll>

        <p className="mt-8 text-xs text-muted">
          <Link
            href="/role-fit#technology"
            className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Technology names and logos belong to their respective owners
          </Link>
          {" "}
          and identify tools used in the work.
        </p>
      </div>
    </section>
  );
}
