import Image from "next/image";
import { logoTicker } from "@/lib/site-data";

const TILE_CLASS =
  "flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-card p-4 md:h-[7.5rem] md:w-[7.5rem] md:p-5";

export default function LogoTicker() {
  const items = [...logoTicker.items, ...logoTicker.items];

  return (
    <div className="w-full bg-background py-8 md:py-12">
      <div className="relative w-full overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-4 px-6 md:gap-5 md:px-10">
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`} className={TILE_CLASS}>
              {item.imageSrc ? (
                <div className="relative h-full w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    className="object-contain object-center brightness-0 opacity-80"
                    sizes="96px"
                  />
                </div>
              ) : (
                <span className="text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-foreground/70 md:text-[10px]">
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
