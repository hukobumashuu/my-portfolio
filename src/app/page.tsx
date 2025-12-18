"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  ArrowRight,
  Sparkles,
  Layout,
} from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  stack: string[];
  link: string;
  gradient: string;
}

// --- Hooks & Components ---

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CyclingText = ({
  words,
  period = 2000,
}: {
  words: string[];
  period?: number;
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words, period]);

  return (
    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 font-bold">
      {text}
      <span className="w-0.5 h-[1em] bg-blue-400 inline-block ml-1 animate-pulse align-middle"></span>
    </span>
  );
};

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
    bg-zinc-900/50 backdrop-blur-md border border-white/5 
    hover:border-white/10 hover:bg-zinc-900/80 transition-all duration-300
    rounded-2xl p-6 ${className}
  `}
  >
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300">
    {children}
  </span>
);

// --- Main Application ---

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "StudyBuddy API",
      category: "Backend Architecture",
      desc: "High-performance REST API for student collaboration. Features real-time websocket messaging, Redis caching for active sessions, and scalable PostgreSQL schema.",
      stack: ["Node.js", "Express", "Socket.io", "Redis"],
      link: "https://github.com/hukobumashuu",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      title: "EcoTrack Dashboard",
      category: "Data Visualization",
      desc: "Interactive carbon footprint visualizer using D3.js. Allows users to input daily habits and visualizes impact trends over time with smooth animations.",
      stack: ["React", "TypeScript", "D3.js", "Firebase"],
      link: "https://github.com/hukobumashuu",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: 3,
      title: "DevTerminal",
      category: "Web Application",
      desc: "A browser-based terminal emulator component that simulates a Linux environment. Supports custom commands, file system navigation, and themes.",
      stack: ["React", "TypeScript", "CSS Modules"],
      link: "https://github.com/hukobumashuu",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Code2 size={18} className="text-white" />
            </div>
            <span>
              matthew<span className="text-zinc-500">.dev</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {["Home", "Stack", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/hukobumashuu"
            target="_blank"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-sm font-medium transition-all"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center px-6 pt-20"
        >
          <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Available for Internships
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  I am a <br />
                  <CyclingText
                    words={[
                      "Full Stack Engineer",
                      "Web Developer",
                      "Software Engineer",
                    ]}
                  />
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                  Building accessible, pixel-perfect, and performant web
                  experiences. Currently focusing on distributed systems and
                  server-side architecture.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollTo("work")}
                    className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    View My Work <ArrowRight size={20} />
                  </button>
                  <a
                    href="https://github.com/hukobumashuu?tab=repositories"
                    target="_blank"
                    className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-full font-bold hover:bg-zinc-800 transition-colors"
                  >
                    Check Repositories
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Abstract Hero Visual */}
            <div className="relative hidden md:flex items-center justify-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-[60px] animate-pulse"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                    <Terminal size={48} className="text-white" />
                  </div>
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute top-0 right-10 p-4 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl animate-bounce delay-700">
                  <Code2 className="text-blue-400" />
                </div>
                <div className="absolute bottom-10 left-0 p-4 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl animate-bounce delay-100">
                  <Database className="text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Bento Grid Style */}
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
              {/* Frontend Card */}
              <Reveal delay={100}>
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layout className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Tailwind",
                      "Framer Motion",
                    ].map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>

              {/* Backend Card */}
              <Reveal delay={200}>
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Database className="text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Backend & Database</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express",
                      "PostgreSQL",
                      "Redis",
                      "Prisma",
                    ].map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>

              {/* Tools Card */}
              <Reveal delay={300}>
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Terminal className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Docker", "AWS", "Linux", "CI/CD"].map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-32 px-6 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex justify-between items-end mb-16">
                <div>
                  <h2 className="text-4xl font-bold mb-4">
                    Selected Work<span className="text-purple-500">.</span>
                  </h2>
                  <p className="text-zinc-400 max-w-xl">
                    Some of my favorite projects from the last year.
                  </p>
                </div>
                <a
                  href="https://github.com/hukobumashuu?tab=repositories"
                  target="_blank"
                  className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  View all repos <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>

            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 100}>
                  <div className="group relative bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-zinc-300 border border-white/5">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                          {project.title}
                        </h3>

                        <p className="text-zinc-400 leading-relaxed">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono text-zinc-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 flex gap-4">
                          <a
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-bold hover:text-blue-400 transition-colors"
                          >
                            View Code <Github size={16} />
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm font-bold hover:text-blue-400 transition-colors"
                          >
                            Live Demo <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>

                      {/* Abstract Visual for Project */}
                      <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/5 group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20`}
                        ></div>
                        <div className="relative z-10 p-8 text-center">
                          <Sparkles className="w-12 h-12 text-white/50 mx-auto mb-4" />
                          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                            Project Preview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                  collaborate?
                </span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                I&apos;m currently looking for internships for Summer 2025. If you&apos;re
                interested in my work, let&apos;s connect.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:mjacobinsigne@gmail.com"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
                >
                  <Mail size={20} /> Send an Email
                </a>
                <a
                  href="https://linkedin.com"
                  className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 text-center text-zinc-500 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Alex Dev. Built with React &
              Tailwind.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
