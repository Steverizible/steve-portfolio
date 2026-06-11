import Image from "next/image";
import { sectionImages } from "@/lib/images";

export default function ExperienceBreakout() {
  return (
    <section className="w-full border-b border-border">
      <div className="relative aspect-[21/9] w-full min-h-[220px] md:min-h-[320px] lg:min-h-[400px]">
        <Image
          src={sectionImages.experienceBreakout}
          alt="Close-up action shot of a hand strapped into a Slyde Handboard on the water"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
    </section>
  );
}
