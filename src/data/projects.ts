export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of this project — what problem it solves, the impact it had, and any interesting technical details worth highlighting.",
    tags: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "A short description of this project — what problem it solves, the impact it had, and any interesting technical details worth highlighting.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com",
  },
  {
    title: "Project Three",
    description:
      "A short description of this project — what problem it solves, the impact it had, and any interesting technical details worth highlighting.",
    tags: ["Next.js", "Framer Motion"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
