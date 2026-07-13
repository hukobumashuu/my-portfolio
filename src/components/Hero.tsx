import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const LINKS = [
  { label: "github", href: "https://github.com/hukobumashuu" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/matthew-jacob-insigne/",
  },
  { label: "email", href: "mailto:matthewj.insigne@gmail.com" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="grid scroll-mt-20 grid-cols-1 gap-8 py-4 sm:grid-cols-[1fr_150px] sm:gap-10"
    >
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-3xl font-medium leading-tight text-ink sm:text-4xl">
          Matthew Jacob Insigne
        </h1>
        <p className="mb-3 text-[15px] leading-relaxed text-ink-secondary">
          I build web apps end to end, from database to UI. Recently wrapped a
          software engineering internship, and now looking for full-time roles.
        </p>
        <p className="mb-6 text-[15px] leading-relaxed text-ink-secondary">
          Comfortable across the stack, but I gravitate toward backend and
          data-heavy problems.
        </p>
        <div className="mt-auto flex gap-5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex items-center gap-1 font-mono text-xs font-medium tracking-wide text-ink-secondary transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>

      {/* Add your photo at /public/profile.jpg */}
      <div className="relative order-first h-[220px] overflow-hidden rounded-xl border border-border bg-surface sm:order-none sm:h-auto">
        <Image
          src="/profile.jpg"
          alt="Matthew Jacob Insigne"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
