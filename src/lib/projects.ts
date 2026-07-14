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
      "Cloud-based repository for archiving and retrieving student research papers, with LLM-assisted metadata extraction and layered document protection.",
    description: [
      "ReVault is a cloud-based repository built for PLM CISTM's student research archive — a searchable, access-controlled system rather than a folder of PDFs on a shared drive. Co-developed with a partner.",
      "Search is built on TF-IDF and BM25 (k1 = 1.2, b = 0.75) rather than plain keyword matching, so results stay relevant even with loosely-worded queries. On upload, a Groq-hosted Llama 3.1 pipeline extracts structured metadata — title, author, abstract — directly from the PDF, backed by a department-classification algorithm that hit 93.33% accuracy in testing.",
      "Document protection is layered rather than single-mechanism: role-based access control, PDF watermarking, download/copy restrictions, and activity/audit logging work together to restrict access, deter unauthorized redistribution, and keep a traceable record of document activity.",
    ],
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Groq API"],
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
      "Accessibility navigation platform for Persons with Reduced Mobility, piloted with Pasig City obstacle data, with a companion admin dashboard.",
    description: [
      "WaisPath is an accessibility-focused navigation platform for Persons with Reduced Mobility (PRM). I led development as part of a 2-person capstone team — the idea, system design, and engineering were mine; my partner led the paper, QA, and our partnership with Pasig City's Persons with Disability Affairs Office (PDAO).",
      "The mobile app uses the Haversine algorithm with a dual-threshold filter (100m radius, 15m route buffer) to trigger proximity-based text-to-speech obstacle alerts, validated at ~97% detection accuracy through live field testing I ran myself, walking obstacle routes across Pasig City.",
      "A deterministic four-factor engine — severity, community validation, infrastructure impact, and admin verification — scores and prioritizes reported obstacles, standardizing how the companion web dashboard surfaces the most urgent reports to LGU administrators. The admin portal itself runs on claims-based role permissions (super admin, LGU admin, field admin), with unified audit logging across both the mobile and web sides.",
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
