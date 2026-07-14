# Portfolio — Matthew Jacob Insigne

Personal portfolio site, built with the Next.js App Router.

**Live:** [matthewisntdev.vercel.app](https://matthewisntdev.vercel.app/)

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **UI primitives:** Radix UI (Avatar, Dialog, Separator, Switch), custom-built on top rather than a full component library
- **Theming:** `next-themes` (light/dark)
- **Icons:** Lucide
- **Fonts:** Space Grotesk (display), JetBrains Mono (code/labels)

## Project structure

```
src/
  app/
    page.tsx              # Homepage — assembles all sections
    projects/[slug]/       # Individual project detail pages
    layout.tsx             # Root layout — theme provider, persistent sidebar
  components/
    Hero.tsx, TechStack.tsx, Projects.tsx,
    Experience.tsx, Hackathons.tsx, Sidebar.tsx
    ui/                     # Local UI primitives (Badge, Card, Button, Sheet, etc.)
  lib/
    projects.ts             # Project content — descriptions, stack, links
    utils.ts
```

Project content (descriptions, tech tags, links) lives in `src/lib/projects.ts` rather than being hardcoded in components — add a new project there and it's automatically picked up by both the homepage grid and its detail page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` deploy automatically.
