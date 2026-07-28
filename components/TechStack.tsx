import Image from "next/image";
import Link from "next/link";
import {
  getFeaturedTechTools,
  getTechTool,
  techStackGroups,
  techStackSection,
} from "@/lib/tech-stack-data";

function isRaster(src: string) {
  return /\.(avif|webp|png|jpe?g)$/i.test(src);
}

export default function TechStack() {
  const featured = getFeaturedTechTools();

  return (
    <div>
      <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl">
        {techStackSection.heading}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
        {techStackSection.introduction}
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {featured.map((tool) => (
          <li
            key={tool.id}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground">
              <Image
                src={tool.logoSrc}
                alt={tool.logoAlt}
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                unoptimized={!isRaster(tool.logoSrc)}
              />
            </div>
            <h3 className="mt-5 text-lg font-bold uppercase tracking-tight">
              {tool.name}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {tool.category}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              {tool.description}
            </p>
            {tool.usageNote && (
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-muted">
                {tool.usageNote}
              </p>
            )}
            {tool.proof && tool.proof.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {tool.proof.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs font-semibold uppercase tracking-wide text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-14 space-y-8">
        {techStackGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((id) => {
                const tool = getTechTool(id);
                if (!tool) return null;
                return (
                  <li
                    key={id}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground"
                  >
                    <Image
                      src={tool.logoSrc}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                      unoptimized={!isRaster(tool.logoSrc)}
                      aria-hidden="true"
                    />
                    <span>{tool.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted">
        {techStackSection.ownershipNote}
      </p>
    </div>
  );
}
