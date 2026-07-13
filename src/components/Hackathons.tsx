import { Badge } from "@/components/ui/Badge";

const HACKATHONS = [
  {
    title: "Hackathon Name, on-site",
    meta: "Month 2026",
    description:
      "Built and deployed [project] within the event using AI-assisted tooling, working with a small team under time pressure.",
    stack: ["Next.js", "OpenAI API"],
  },
  {
    title: "Hackathon Name, online",
    meta: "Month 2026 · Top 10 finalist",
    description:
      "Pitched an idea for [project] through an online submission round and placed in the top 10 out of [X] teams.",
    stack: ["Figma", "Product design"],
  },
];

export function Hackathons() {
  return (
    <section id="hackathons" className="scroll-mt-20 py-16">
      <h2 className="mb-6 text-xl font-medium text-ink">Hackathons</h2>
      <div className="flex flex-col gap-8">
        {HACKATHONS.map((h) => (
          <div key={h.title}>
            <p className="mb-1 text-[15px] font-medium text-ink">{h.title}</p>
            <p className="mb-3 font-mono text-xs text-ink-secondary">
              {h.meta}
            </p>
            <p className="mb-4 text-[15px] leading-relaxed text-ink-secondary">
              {h.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {h.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
