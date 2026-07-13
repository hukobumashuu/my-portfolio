import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Hackathons } from "@/components/Hackathons";

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-20 pb-24 md:pt-16">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Hackathons />
    </div>
  );
};

export default Portfolio;
