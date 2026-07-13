export interface ProjectLink {
  label: string;
  url: string;
}

export interface Screenshot {
  label: string;
  src: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  stack: string[];
  links: ProjectLink[];
  thumbnail: string;
  screenshots: Screenshot[];
}

export const PROJECTS: Project[] = [
  {
    slug: "revault",
    title: "ReVault",
    summary:
      "Cloud-based repository system for student research works with role-based access and search.",
    description: [
      "ReVault is a cloud-based repository system built for managing student research works — think a searchable, access-controlled archive rather than a folder of PDFs on a shared drive.",
      "Search is built on TF-IDF and BM25 rather than a plain keyword match, so results stay relevant even with loosely-worded queries. Access is role-based, so admins, faculty, and students each see only what they're meant to.",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    links: [
      { label: "Live", url: "https://revault.vercel.app/" },
      { label: "Code", url: "https://github.com/hukobumashuu/revault" },
    ],
    thumbnail: "/projects/ReVault.jpg",
    screenshots: [{ label: "Web", src: "/projects/ReVault.jpg" }],
  },
  {
    slug: "waispath",
    title: "WaisPath",
    summary:
      "Accessibility navigation platform for persons with reduced mobility, with a companion admin dashboard.",
    description: [
      "WaisPath is an accessibility-focused navigation platform for persons with reduced mobility. The mobile app surfaces real-time obstacle reports and routes users around them, while the web dashboard lets admins review and manage those reports and score route accessibility.",
      "The two pieces share a backend but were built for very different contexts — one for someone navigating a street with a phone in hand, the other for someone triaging reports at a desk — so the interaction design intentionally diverges between them.",
    ],
    stack: ["React Native", "Next.js", "Firebase", "Google Maps API"],
    links: [
      { label: "Live", url: "https://wais-path-web.vercel.app" },
      { label: "Code", url: "https://github.com/hukobumashuu/waispath" },
    ],
    thumbnail: "/projects/WaisPathWeb.png",
    screenshots: [
      { label: "Web dashboard", src: "/projects/WaisPathWeb.png" },
      { label: "Mobile app", src: "/projects/Waispath.jpg" },
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
