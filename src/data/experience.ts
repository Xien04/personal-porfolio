export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2023 — Present",
    description: [
      "Built and maintained features for a production web application used by thousands of users.",
      "Collaborated with design and product teams to ship user-facing improvements end to end.",
    ],
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    period: "2021 — 2023",
    description: [
      "Contributed to internal tools and customer-facing features in a small engineering team.",
      "Improved test coverage and helped modernize parts of the codebase.",
    ],
    tags: ["JavaScript", "REST APIs", "SQL"],
  },
];
