export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "CC3 Solutions, LLC",
    period: "July 2026 — Present",
    description: [
      "Led the frontend rebuild of a customer dashboard, cutting page load time by 40%.",
      "Mentored two junior developers through code reviews and pairing sessions.",
      "Introduced a component library that reduced duplicate UI code across five products.",
      "Partnered with design to establish accessibility standards adopted company-wide.",
      "Drove the migration from a legacy REST API to a type-safe GraphQL layer.",
    ],
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Software Developer Supervisor",
    company: "McWilson Corp",
    period: "February 2026 — June 2026",
    description: [
      "Built and shipped customer-facing features used by over 50,000 monthly active users.",
      "Collaborated with product and design teams to scope and estimate new initiatives.",
      "Reduced API response times by 30% through targeted query optimization.",
      "Wrote integration tests that caught regressions before three major releases.",
      "Owned the on-call rotation for the payments service with zero missed incidents.",
    ],
    tags: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    role: "System Developer",
    company: "SM Engineering Design and Development Corp.",
    period: "August 2023 — November 2025",
    description: [
      "Developed data-driven business applications that centralized project, contractor, financial, and insurance data for operational reporting and decision-making.",
      "Built a project monitoring system with turnaround-time tracking, automated overdue escalations, and SharePoint document integration.",
      "Designed a contractor database supporting financial assessments, insurance validation, balanced project allocation, and expiring-policy detection.",
      "ested, deployed, and maintained application features and automated data workflows to improve system reliability and data accuracy.",
    ],
    tags: ["JavaScript", "REST APIs", "SQL"],
  },
  {
    role: "Intern Security Analyst",
    company: "SM Investment Corp.",
    period: "January 2023 — July 2023",
    description: [
      "Assisted in building prototype features for an internal analytics dashboard.",
      "Wrote scripts to automate repetitive data-entry tasks, saving hours weekly.",
      "Participated in daily standups and sprint planning as part of an agile team.",
      "Learned and applied Git workflows for collaborative version control.",
      "Presented a final capstone project demoing a small full-stack application.",
    ],
    tags: ["Python", "Git", "SQL"],
  },
];
