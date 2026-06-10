import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { featuredWork, projects } from "@/lib/site-data";

export default function FeaturedWork() {
  const items = featuredWork.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const [titleLine1, titleLine2] = featuredWork.title.split(" ");

  return (
    <section className="w-full border-b border-border bg-background" id="work">
      <div className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <h2 className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h2>
          <p className="text-base leading-relaxed text-muted md:text-lg lg:pt-2">
            {featuredWork.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>

        <div className="mt-14 flex justify-center lg:mt-20">
          <Button href={featuredWork.moreProjectsCta.href} variant="solid">
            {featuredWork.moreProjectsCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
