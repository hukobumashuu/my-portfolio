<<<<<<< HEAD
"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  screenshots: { label: string; src: string }[];
}

const PROJECTS: Project[] = [
  {
    title: "ReVault",
    description:
      "Cloud-based repository system with role-based access control and search built on TF-IDF and BM25 for student research works.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    links: [
      { label: "Live", url: "https://revault.vercel.app/" },
      { label: "Code", url: "https://github.com/hukobumashuu/revault" },
    ],
    screenshots: [{ label: "Web", src: "/projects/ReVault.jpg" }],
  },
  {
    title: "WaisPath",
    description:
      "Accessibility navigation platform for persons with reduced mobility, with real-time obstacle detection and an admin scoring dashboard.",
    stack: ["React Native", "Next.js", "Firebase", "Google Maps API"],
    links: [
      { label: "Live", url: "https://wais-path-web.vercel.app" },
      { label: "Code", url: "https://github.com/hukobumashuu/waispath" },
    ],
    screenshots: [
      { label: "Web", src: "/projects/WaisPathWeb.png" },
      { label: "App", src: "/projects/Waispath.jpg" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [activeShot, setActiveShot] = useState(0);

  return (
    <Card className="hover:border-ink-secondary/40">
      {project.screenshots.length > 1 && (
        <div className="mb-2.5 inline-flex rounded-md bg-background p-0.5">
          {project.screenshots.map((shot, i) => (
            <button
              key={shot.label}
              onClick={() => setActiveShot(i)}
              className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
                activeShot === i
                  ? "bg-surface font-medium text-ink"
                  : "text-ink-secondary"
              }`}
            >
              {shot.label}
            </button>
          ))}
        </div>
      )}

      <div className="relative mb-3 aspect-video overflow-hidden rounded-md bg-background">
        <Image
          src={project.screenshots[activeShot].src}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
        />
      </div>

      <p className="mb-1 text-[15px] font-medium text-ink">{project.title}</p>
      <p className="mb-3 text-xs leading-relaxed text-ink-secondary">
        {project.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} className="bg-background text-[11px]">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-wide text-ink-secondary transition-colors hover:text-accent"
          >
            {link.label.toLowerCase()}
            <ArrowUpRight size={12} />
          </a>
        ))}
      </div>
    </Card>
  );
}
=======
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/projects";
>>>>>>> 10a207d8b38a6e9d35d4ccec262d1f0596901425

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="mb-6 text-xl font-medium text-ink">Projects</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
<<<<<<< HEAD
          <ProjectCard key={project.title} project={project} />
=======
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
>>>>>>> 10a207d8b38a6e9d35d4ccec262d1f0596901425
        ))}
      </div>
    </section>
  );
}
