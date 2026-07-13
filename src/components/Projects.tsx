import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="mb-6 text-xl font-medium text-ink">Projects</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
            <Card className="h-full hover:border-ink-secondary/40">
              <div className="relative mb-3 h-[160px] overflow-hidden rounded-md bg-background">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mb-1 text-[15px] font-medium text-ink">
                {project.title}
              </p>
              <p className="mb-3 text-xs leading-relaxed text-ink-secondary">
                {project.summary}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <Badge key={tech} className="bg-background text-[11px]">
                    {tech}
                  </Badge>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-wide text-ink-secondary transition-colors group-hover:text-accent">
                view project
                <ArrowUpRight size={12} />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
