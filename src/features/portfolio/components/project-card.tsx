import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import { projectCardContent } from "@/data/sections";
import type { Project, ProjectStatus } from "@/features/portfolio/types";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const statusStyles: Record<ProjectStatus, string> = {
  Prototype: "border-accent/30 bg-accent-muted/35 text-accent",
  "In Progress": "border-warning/30 bg-warning-muted/35 text-warning",
  Completed: "border-success/30 bg-success-muted/35 text-success",
  Research: "border-foreground-subtle/30 bg-surface-inset text-foreground-muted",
  "Personal Build": "border-success/30 bg-success-muted/35 text-success"
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-card/85 p-3 shadow-card shadow-line transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-surface-card-hover hover:shadow-elevated">
      <div className="relative overflow-hidden rounded-lg border border-border-muted bg-surface-inset">
        <Image
          src={withBasePath(project.image.src)}
          alt={project.image.alt}
          width={960}
          height={540}
          className="aspect-[16/9] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-md border px-2 py-1 text-[0.68rem] font-medium",
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-foreground-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-muted bg-surface-inset px-2 py-0.5 text-[0.68rem] font-medium text-foreground-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md text-xs font-medium text-foreground-muted transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          >
            <Github className="size-4" aria-hidden="true" />
            {projectCardContent.githubLabel}
          </a>
          <a
            href={project.detailsUrl}
            className="inline-flex items-center gap-2 rounded-md text-xs font-medium text-accent transition hover:text-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          >
            {projectCardContent.detailsLabel}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
