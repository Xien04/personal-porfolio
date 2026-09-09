# Personal Portfolio

A personal developer portfolio built with React, TypeScript, and Tailwind CSS, featuring an interactive particle-network hero section.

## Tech Stack

- **[Vite](https://vitejs.dev/)** — build tool & dev server
- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** — styling
- **[Framer Motion](https://www.framer.com/motion/)** — animations
- **[Lucide React](https://lucide.dev/)** — icons

## Features

- Interactive canvas particle-network hero background that reacts to cursor movement
- Typewriter effect cycling through role titles
- Responsive navbar with mobile menu
- About, Skills, Projects, and Contact sections
- Smooth scroll and scroll-triggered animations
- Dark theme with gradient accents

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server, typically at `http://localhost:5173`.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    ParticleBackground.tsx   # canvas hero effect
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
  data/
    projects.ts              # edit with your own projects
    skills.ts                # edit with your own skills
  hooks/
    useTypewriter.ts
  App.tsx
  main.tsx
  index.css
```

## Customization

- **Content**: Update `src/data/projects.ts` and `src/data/skills.ts` with your own projects and skills.
- **Social links**: Update the GitHub/LinkedIn URLs in `src/components/Hero.tsx` and `src/components/Contact.tsx`.
- **Name & role titles**: Edit `src/components/Hero.tsx` (name heading and the `ROLES` array).
- **Colors**: Adjust the `accent`, `accent2`, `bg`, and `surface` colors in `tailwind.config.js`.
- **Hero effect**: Tune particle count, link distance, and mouse influence via the constants at the top of `src/components/ParticleBackground.tsx`.
