import Image from "next/image";
import { sectionImages } from "@/lib/images";
import { motivation } from "@/lib/site-data";

export default function Motivation() {
  return (
    <section className="border-b border-border">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          {motivation.title}
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[21/9] w-full min-h-[200px] bg-card">
            <Image
              src={sectionImages.motivation}
              alt="Motivation"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-10">
          {motivation.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
