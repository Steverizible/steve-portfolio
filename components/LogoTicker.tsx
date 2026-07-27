import Image from "next/image";
import { logoTicker } from "@/lib/site-data";

export default function LogoTicker() {
  const items = [...logoTicker.items, ...logoTicker.items];

  return (
    <div className="w-full bg-background py-8 md:py-10">
      <div className="relative w-full overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-3 px-4 md:gap-4 md:px-6">
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-2xl bg-[#f3f3f3] p-4 md:h-[104px] md:w-[104px] md:p-5"
            >
              {item.imageSrc ? (
                <div className="relative h-full w-full">
                  <Image
                    src={item.imageSrc}
                    alt=""
                    fill
                    className="object-contain object-center opacity-70 grayscale"
                    sizes="104px"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
