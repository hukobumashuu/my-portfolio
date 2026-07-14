"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Mail } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#stack", label: "Stack" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#hackathons", label: "Hackathons" },
];

const EMAIL = "matthewj.insigne@gmail.com";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required by next-themes' SSR-safe mount pattern
    setMounted(true);
  }, []);
  if (!mounted) return <div className="h-8 w-[68px]" />;

  return (
    <div className="flex gap-1.5">
      <button
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md text-ink-secondary",
          theme === "light" && "bg-surface text-ink",
        )}
      >
        <Sun size={16} />
      </button>
      <button
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md text-ink-secondary",
          theme === "dark" && "bg-surface text-ink",
        )}
      >
        <Moon size={16} />
      </button>
    </div>
  );
}

function NavList({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-0.5">
      {NAV_LINKS.map((link) => {
        const isActive = activeId === link.href.split("#")[1];
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "rounded-md px-2.5 py-2 text-sm text-ink-secondary transition-colors",
              isActive && "border-l-2 border-accent pl-2 font-medium text-ink",
            )}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

function useActiveSection() {
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.href.split("#")[1]),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return activeId;
}

export function Sidebar() {
  const activeId = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[220px] flex-col border-r border-border bg-surface px-5 py-6 md:flex">
        <span className="text-[15px] font-medium text-ink">Matthew Jacob</span>
        <div className="h-14" />
        <NavList activeId={activeId} />
        <div className="flex-1" />
        <ThemeToggle />
        <div className="my-4 h-px bg-border" />
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 font-mono text-xs text-ink-secondary hover:text-accent"
        >
          <Mail size={14} />
          {EMAIL}
        </a>
      </aside>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background px-4 py-3 md:hidden">
        <span className="text-[15px] font-medium text-ink">Matthew Jacob</span>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <span className="mb-10 text-[15px] font-medium text-ink">
              Matthew Jacob
            </span>
            <NavList
              activeId={activeId}
              onNavigate={() => setMobileOpen(false)}
            />
            <div className="flex-1" />
            <ThemeToggle />
            <div className="my-4 h-px bg-border" />
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 font-mono text-xs text-ink-secondary hover:text-accent"
            >
              <Mail size={14} />
              {EMAIL}
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
