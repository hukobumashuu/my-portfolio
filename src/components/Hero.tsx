"use client";
import React from "react";
import { ArrowRight, Terminal, Code2, Database } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CyclingText } from "@/components/ui/CyclingText";

export const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Available for Internships
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-2">
              {/* Name is now the main focus */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight">
                Matthew Jacob<span className="text-blue-500">.</span>
              </h1>

              {/* Cycling text acts as a dynamic subheading */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-400">
                I am a{" "}
                <CyclingText
                  words={[
                    "Full Stack Engineer",
                    "Web Developer",
                    "Software Engineer",
                  ]}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
              I build software that solves real problems. Combining strong
              backend logic with modern design to create applications that are
              smart, scalable, and genuinely useful.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
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

        {/* Abstract Hero Visual - Keeps the layout balanced without a photo */}
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
  );
};
