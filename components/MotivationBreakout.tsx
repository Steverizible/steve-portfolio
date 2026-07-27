"use client";

import Image from "next/image";
import ZoomMedia from "@/components/ZoomMedia";
import { sectionImages } from "@/lib/images";

export default function MotivationBreakout() {
  return (
    <section className="w-full border-b border-border bg-background px-4 py-6 md:px-8 md:py-8 lg:px-12">
      <ZoomMedia className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[16/9] md:aspect-[21/9] md:rounded-3xl">
        <Image
          src={sectionImages.motivationBreakout}
          alt="Person reading in a field of grass, wearing brown boots and a straw hat"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </ZoomMedia>
    </section>
  );
}
