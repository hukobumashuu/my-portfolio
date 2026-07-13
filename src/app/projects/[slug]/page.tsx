import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-1.5 font-mono text-xs text-ink-secondary transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        back to projects
      </Link>

      <h1 className="mb-3 text-3xl font-medium text-ink">{project.title}</h1>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mb-8 flex gap-5">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-medium tracking-wide text-ink-secondary transition-colors hover:text-accent"
          >
            {link.label.toLowerCase()}
            <ArrowUpRight size={13} />
          </a>
        ))}
      </div>

      <div className="mb-10 flex flex-col gap-8">
        {project.screenshots.map((shot) => (
          <div key={shot.label}>
            <div className="relative h-[280px] overflow-hidden rounded-lg border border-border bg-surface sm:h-[380px]">
              <Image
                src={shot.src}
                alt={`${project.title} — ${shot.label}`}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 font-mono text-[11px] text-ink-secondary">
              {shot.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {project.description.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-ink-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
