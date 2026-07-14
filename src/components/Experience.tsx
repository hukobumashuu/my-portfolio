import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <h2 className="mb-6 text-xl font-medium text-ink">Experience</h2>

      <p className="mb-1 text-[15px] font-medium text-ink">
        Software Developer Intern, Wizy.io
      </p>
      <p className="mb-3 font-mono text-xs text-ink-secondary">
        February — May 2026
      </p>
      <p className="mb-4 text-[15px] leading-relaxed text-ink-secondary">
        Built the Node.js/Express backend foundation for Wizy Report, a
        multi-tenant QA reporting platform — tenant, user, and test-run modules
        with Sequelize/PostgreSQL and system-wide Zod validation, including
        schema-based tenant isolation. Also built out the React/TypeScript
        frontend foundation with Ant Design and TanStack Query, and co-presented
        Version 1 of the reporting feature to the product team alongside my
        senior engineer.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {[
          "Node.js",
          "Express.js",
          "Sequelize",
          "PostgreSQL",
          "React",
          "TypeScript",
        ].map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </section>
  );
}
