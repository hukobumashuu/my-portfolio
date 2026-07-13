import { Badge } from "@/components/ui/Badge";

const GROUPS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "React Native", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Tools",
    items: ["PostgreSQL", "Docker", "Git", "Vercel"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-16">
      <h2 className="mb-2 text-xl font-medium text-ink">Stack</h2>
      <p className="mb-8 text-sm text-ink-secondary">
        Tools and technologies I reach for most.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wide text-accent">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
