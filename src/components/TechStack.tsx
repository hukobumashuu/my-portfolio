import React from "react";
import { Layout, Database, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const TechStack = () => {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Technical Arsenal<span className="text-blue-500">.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={100}>
            <Card className="h-full group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layout className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend & Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {/* Updated based on Resume */}
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "React Native",
                  "Tailwind",
                  "Framer Motion",
                  "HTML5/CSS3",
                ].map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={200}>
            <Card className="h-full group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend & Languages</h3>
              <div className="flex flex-wrap gap-2">
                {/* Updated based on Resume */}
                {[
                  "Node.js",
                  "Python",
                  "Flask",
                  "FastAPI",
                  "C++",
                  "Java",
                  "PHP",
                  "PostgreSQL",
                  "Supabase",
                ].map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={300}>
            <Card className="h-full group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Dev Tools</h3>
              <div className="flex flex-wrap gap-2">
                {/* Updated based on Resume */}
                {[
                  "Git",
                  "Google Cloud",
                  "Firebase",
                  "Prisma",
                  "Figma",
                  "VS Code",
                  "Jira",
                  "Miro",
                  "Notion",
                ].map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
