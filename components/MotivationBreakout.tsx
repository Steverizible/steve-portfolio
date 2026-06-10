import Image from "next/image";
import { sectionImages } from "@/lib/images";

export default function MotivationBreakout() {
  return (
    <section className="w-full border-b border-border">
      <div className="relative aspect-[21/9] w-full min-h-[220px] md:min-h-[320px] lg:min-h-[400px]">
        <Image
          src={sectionImages.motivationBreakout}
          alt="Person reading in a field of grass, wearing brown boots and a straw hat"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
    </section>
  );
}
