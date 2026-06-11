import Image from "next/image";
import StickySectionHeading from "@/components/StickySectionHeading";
import { stackImages } from "@/lib/images";
import { favoriteStack } from "@/lib/site-data";

export default function FavoriteStack() {
  return (
    <section className="border-b border-border bg-background">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <StickySectionHeading bgClassName="bg-background">
            {favoriteStack.title}
          </StickySectionHeading>

          <ul className="space-y-4 md:space-y-5">
            {favoriteStack.items.map((item) => {
              const iconSrc = stackImages[item.id];

              return (
                <li
                  key={item.id}
                  className="flex items-stretch gap-3 rounded-2xl bg-card p-3 md:gap-4 md:p-4"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl md:h-[4.5rem] md:w-[4.5rem]">
                    {iconSrc ? (
                      <Image
                        src={iconSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="72px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-foreground text-xs font-bold text-background">
                        {item.name.slice(0, 2)}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1 rounded-xl bg-white p-5 md:p-6">
                    <h3 className="text-sm font-bold uppercase tracking-tight md:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-tight md:text-sm">
                      {item.category}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground md:text-base">
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
