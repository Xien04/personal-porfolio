export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Tooling",
    items: ["Git", "Docker", "Vite", "CI/CD"],
  },
];
