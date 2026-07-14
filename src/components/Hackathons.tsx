import { Badge } from "@/components/ui/Badge";

const HACKATHONS = [
  {
    title: "Kadakareer x Home Credit PH Hackathon, online",
    meta: "December 2025 · Top 10 finalist, 100+ teams",
    description:
      "Led product strategy and conceptualization for Diskarte AI, an ROI-first fintech marketplace feature that recommends complementary loan products with AI-generated business cases, target market analysis, and pricing strategy. Collaborated with a 3-person team to develop the concept into a Top 10 finalist pitch.",
    stack: ["Product Strategy", "Fintech", "AI-Assisted Ideation"],
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
