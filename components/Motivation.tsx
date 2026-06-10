import Image from "next/image";
import RevealHeading from "@/components/RevealHeading";
import { sectionImages } from "@/lib/images";
import { motivation, type MotivationTextPart } from "@/lib/site-data";

function MotivationParagraph({ parts }: { parts: readonly MotivationTextPart[] }) {
  return (
    <p className="text-base leading-relaxed md:text-lg">
      {parts.map((part, index) =>
        part.bold ? (
          <span key={index} className="font-bold text-foreground">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}

export default function Motivation() {
  return (
    <section className="border-b border-border bg-background">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <RevealHeading
            className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl"
          >
            {motivation.title}
          </RevealHeading>

          <div className="space-y-6">
            {motivation.paragraphs.map((paragraph, index) => (
              <MotivationParagraph key={index} parts={paragraph} />
            ))}

            <div className="pt-4">
              <Image
                src={sectionImages.motivationSignature}
                alt="Steve Watts signature"
                width={160}
                height={48}
                className="h-10 w-auto invert md:h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
