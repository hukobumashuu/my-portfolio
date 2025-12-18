"use client";
import React, { useState, useEffect } from "react";
import { Code2, Github } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
  );
};
