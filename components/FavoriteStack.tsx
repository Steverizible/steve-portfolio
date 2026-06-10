import Image from "next/image";
import { stackImages } from "@/lib/images";
import { favoriteStack } from "@/lib/site-data";

export default function FavoriteStack() {
  return (
    <section className="border-b border-border">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {favoriteStack.title}
          </h2>

          <ul className="space-y-4">
            {favoriteStack.items.map((item) => {
              const iconSrc = stackImages[item.id];
              return (
                <li
                  key={item.id}
                  className="flex gap-5 rounded-xl border border-border bg-card p-5 md:gap-6 md:p-6"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-white md:h-14 md:w-14">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt=""
                        fill
                        className="object-contain p-2"
                        sizes="56px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-muted">
                        {item.name.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-base font-bold uppercase tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs font-medium uppercase text-muted">
                        {item.category}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
