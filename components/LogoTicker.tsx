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
              className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 py-4 min-w-[160px] md:min-w-[200px] md:px-8 md:py-5"
            >
              {item.imageSrc ? (
                <div className="relative h-9 w-32 md:h-11 md:w-40">
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    className="object-contain object-center brightness-0 opacity-55"
                    sizes="160px"
                  />
                </div>
              ) : (
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted/80 md:text-xs">
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
