import SystemCard from "@/components/SystemCard";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { aiSkillsSection, systems } from "@/lib/systems-data";

export default function AISystems() {
  return (
    <section
      className="w-full border-b border-border bg-background"
      id={aiSkillsSection.id}
    >
      <div className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <RevealHeading
            className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block">{aiSkillsSection.titleLines[0]}</span>
            <span className="block">{aiSkillsSection.titleLines[1]}</span>
          </RevealHeading>
          <RevealOnScroll className="text-base leading-relaxed text-muted md:text-lg lg:pt-2">
            {aiSkillsSection.introduction}
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20">
          {systems.map((system, index) => (
            <RevealOnScroll key={system.id} delayMs={index * 80}>
              <SystemCard system={system} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-10 max-w-2xl text-sm leading-relaxed text-muted md:mt-12 md:text-base">
          From performance data to approved creative, campaign drafts, and the
          next growth decision.
        </RevealOnScroll>
      </div>
    </section>
  );
}
