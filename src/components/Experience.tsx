import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <h2 className="mb-6 text-xl font-medium text-ink">Experience</h2>

      <p className="mb-1 text-[15px] font-medium text-ink">
        Software Engineering Intern, Company Name
      </p>
      <p className="mb-3 font-mono text-xs text-ink-secondary">
        Jan — May 2026
      </p>
      <p className="mb-4 text-[15px] leading-relaxed text-ink-secondary">
        Built and shipped [specific feature] used by [X users], worked
        across the stack on [area of the product], and picked up
        [skill/tool] on the job that I applied to [specific outcome].
      </p>
      <div className="flex flex-wrap gap-1.5">
        {["React", "Node.js", "PostgreSQL"].map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </section>
  );
}
