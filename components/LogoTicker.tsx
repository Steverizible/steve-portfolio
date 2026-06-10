import Image from "next/image";
import { logoTicker } from "@/lib/site-data";

export default function LogoTicker() {
  const items = [...logoTicker.items, ...logoTicker.items];

  return (
    <div className="w-full border-y border-border bg-background py-6 md:py-8">
      <div className="relative w-full overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-4 px-4 md:gap-5 md:px-6">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 py-4 min-w-[140px] md:min-w-[180px] md:px-8 md:py-5"
            >
              {item.imageSrc ? (
                <div className="relative h-8 w-24 md:h-10 md:w-28">
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    className="object-contain object-center opacity-60 grayscale"
                    sizes="112px"
                  />
                </div>
              ) : (
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted/70 md:text-xs">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
