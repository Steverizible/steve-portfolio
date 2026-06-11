import Image from "next/image";
import { sectionImages } from "@/lib/images";

export default function PostAwardsImage() {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="w-full px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
        <div
          className="relative aspect-[21/9] w-full min-h-[220px] overflow-hidden rounded-2xl border border-border md:min-h-[320px] lg:min-h-[400px]"
        >
          <Image
            src={sectionImages.afterAwardsMedia}
            alt="Ashton Kutcher high-fiving a Slyde Handboards founder on Shark Tank while holding a Slyde handplane"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
