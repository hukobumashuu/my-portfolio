"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";

// --- Types ---
interface ProjectMedia {
  type: "image" | "video";
  src: string;
  frame: "browser" | "phone";
}

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  stack: string[];
  links: ProjectLink[];
  liveUrl: string;
  gradient: string;
  media: ProjectMedia[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "ReVault",
    category: "Backend Architecture",
    desc: "ReVault is a cloud-based repository system that integrates Role-Based Access Control (RBAC), Dublin Core Metadata standards, and information retrieval algorithms (TF-IDF and BM25) to secure, organize, and enhance the discoverability of student research works.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Google Cloud Platform",
      "Tailwind CSS",
      "NextAuth.js",
      "Node.js",
    ],
    links: [
      { label: "View Code", url: "https://github.com/hukobumashuu/revault" },
    ],
    liveUrl: "https://revault.vercel.app/",
    gradient: "from-blue-500/20 to-purple-500/20",
    media: [
      {
        type: "image",
        src: "/projects/ReVault.jpg",
        frame: "browser",
      },
    ],
  },
  {
    id: 2,
    title: "WaisPath Ecosystem",
    category: "Full Stack Solution",
    desc: "WAISPATH is a unified accessibility navigation platform designed for Persons with Reduced Mobility (PRM) in Pasig City that integrates the Haversine algorithm for real-time obstacle detection and route intelligence to ensure safe mobility, while equipping local administrators with a rule-based scoring engine to prioritize infrastructure improvements.",
    stack: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Firebase",
      "Google Maps API",
      "Tailwind CSS",
      "NativeWind",
    ],
    links: [
      {
        label: "Mobile Repo",
        url: "https://github.com/hukobumashuu/waispath",
      },
      {
        label: "Web Repo",
        url: "https://github.com/hukobumashuu/waispath-web",
      },
    ],
    liveUrl: "https://wais-path-web.vercel.app",
    gradient: "from-emerald-500/20 to-teal-500/20",
    media: [
      {
        type: "image",
        src: "/projects/Waispath.jpg",
        frame: "phone",
      },
      {
        type: "image",
        src: "/projects/WaisPathWeb.png",
        frame: "browser",
      },
    ],
  },
];

// --- Frames ---

const BrowserFrame = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`relative rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-500 ${className}`}
  >
    <div className="h-8 bg-zinc-800/50 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-md z-20 relative">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
      </div>
      <div className="ml-4 flex-1 h-4 rounded-full bg-white/5 border border-white/5 flex items-center px-3">
        <div className="w-16 h-1 rounded-full bg-white/10"></div>
      </div>
    </div>

    <div className="relative bg-zinc-950 aspect-video w-full p-1">
      <div className="relative w-full h-full rounded-md overflow-hidden border border-white/5">
        {children}
      </div>
    </div>
  </div>
);

const PhoneFrame = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-10 rounded-4xl h-[450px] w-[230px] shadow-xl ${className}`}
  >
    <div className="h-6 w-[3px] bg-gray-800 absolute -left-3 top-[50px] rounded-l-lg"></div>
    <div className="h-[34px] w-[3px] bg-gray-800 absolute -left-3 top-[90px] rounded-l-lg"></div>
    <div className="h-[34px] w-[3px] bg-gray-800 absolute -left-3 top-[130px] rounded-l-lg"></div>
    <div className="h-12 w-[3px] bg-gray-800 absolute -right-3 top-[105px] rounded-r-lg"></div>

    <div className="rounded-3xl overflow-hidden w-full h-full bg-zinc-950 relative border-2 border-zinc-900">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[18px] w-[70px] bg-black rounded-b-[10px] z-20 pointer-events-none"></div>
      {children}
    </div>
  </div>
);

// --- Carousel Component ---

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const media = project.media[currentSlide];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % project.media.length);
  }, [project.media.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + project.media.length) % project.media.length
    );
  };

  useEffect(() => {
    if (isPaused || project.media.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, project.media.length]);

  return (
    <Reveal delay={index * 100}>
      {/* 1. INCREASED HEIGHT: h-[600px] ensures the 450px PhoneFrame has room above/below */}
      <div className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[600px]">
        {/* Left Side: Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-zinc-400 leading-relaxed text-lg">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-white/5 rounded-md text-xs font-mono text-zinc-500 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
              >
                <Github size={18} /> {link.label}
              </a>
            ))}

            <a
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </div>

        {/* Right Side: Visuals (Carousel) */}
        <div
          className="order-1 md:order-2 flex flex-col justify-center items-center relative w-full h-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 2. FIXED CONTAINER: h-[500px] inner container for the image */}
          <div className="w-full h-[500px] relative flex items-center justify-center">
            {/* 3. ANIMATION: 'key={currentSlide}' triggers the 'animate-fadeIn' on every slide change */}
            <div
              key={currentSlide}
              className="w-full flex justify-center animate-fadeIn"
            >
              {media.frame === "browser" ? (
                <BrowserFrame className="w-full transform shadow-2xl">
                  <Image
                    src={media.src}
                    alt={project.title}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </BrowserFrame>
              ) : (
                <PhoneFrame className="shadow-2xl">
                  <Image
                    src={media.src}
                    alt={project.title}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </PhoneFrame>
              )}
            </div>
          </div>

          {/* Dots & Controls - Positioned absolutely at the bottom of the 600px container */}
          {project.media.length > 1 && (
            <div className="absolute bottom-4 flex items-center gap-4 z-30">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors border border-white/5"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {project.media.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? "bg-blue-500 w-6" : "bg-zinc-700"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors border border-white/5"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export const Work = () => {
  return (
    <>
      {/* 4. SMOOTHER ANIMATION: Slower duration (0.7s) and scale check */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <section id="work" className="py-32 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  Selected Work<span className="text-purple-500">.</span>
                </h2>
                <p className="text-zinc-400 max-w-xl">
                  Some of my favorite projects.
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

          <div className="grid gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
