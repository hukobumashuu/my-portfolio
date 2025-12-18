import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center text-zinc-500 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} Matthew Dev. Built with React & Tailwind.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/hukobumashuu"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
