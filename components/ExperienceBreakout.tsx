"use client";

import Image from "next/image";
import ZoomMedia from "@/components/ZoomMedia";
import { sectionImages } from "@/lib/images";

export default function ExperienceBreakout() {
  return (
    <section className="w-full border-b border-border bg-background px-4 py-6 md:px-8 md:py-8 lg:px-12">
      <ZoomMedia
        className="relative aspect-[21/9] w-full min-h-[220px] overflow-hidden rounded-2xl border border-border md:min-h-[320px] md:rounded-3xl lg:min-h-[400px]"
      >
        <div className="relative h-full w-full">
          <Image
            src={sectionImages.experienceBreakout}
            alt="Close-up action shot of a hand strapped into a Slyde Handboard on the water"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      </ZoomMedia>
    </section>
  );
}
