import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "selected";
};

export default function ProjectCard({ project, variant = "selected" }: ProjectCardProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const imageHeight = variant === "featured" ? "h-[280px] md:h-[360px]" : "h-[240px] md:h-[300px]";

  return (
    <Link
      href={project.href}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
    >
      <div className={`relative ${imageHeight} w-full overflow-hidden bg-[#ddd]`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${project.label} — ${project.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            {project.label}
          </div>
        )}
      </div>
      <div className="flex items-end justify-between gap-4 bg-foreground px-4 py-4 text-background md:px-5 md:py-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide md:text-base">
            {project.label}
          </p>
          <p className="mt-1 text-xs text-white/70 md:text-sm">{project.name}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/30 px-3 py-1 text-xs font-medium">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
