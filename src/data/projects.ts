export interface Project {
  title: string;
  year: string;
  company: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SummitOne",
    year: "2026",
    company: "CC3 Solutions, LLC",
    description:
      "Led the development of a centralized business platform that integrated operational workflows and project management. Improved data accessibility and process visibility by consolidating business information and workflows into a unified system.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Mall Property Development System",
    year: "2025",
    company: "SM Engineering Design & Development Corp.",
    description:
      "Developed an end-to-end project monitoring system that captured and tracked project status data throughout the project lifecycle. Implemented configurable turnaround-time rules and automated escalated workflows for overdue activities.",
    tags: ["Python", "Django", "SQL", "JavaScript"],
  },
  {
    title: "Insurance Database",
    year: "2025",
    company: "SM Engineering Design & Development Corp.",
    description:
      "Developed a centralized database that consolidated contractor profiles, financial capacity, insurance coverage, and project assignments. Implemented business rules to assess eligibility, balance project distribution, and identify policies that could expire before construction was completed.",
    tags: ["Python", "Django", "SQL", "JavaScript"],
  },
];
