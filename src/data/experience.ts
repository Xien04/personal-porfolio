export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Developer",
    company: "Nimbus Systems",
    period: "2024 — Present",
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
    role: "Software Developer",
    company: "Bluecrest Digital",
    period: "2022 — 2024",
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
    role: "Frontend Developer",
    company: "Harbor & Finch",
    period: "2021 — 2022",
    description: [
      "Rebuilt the marketing site in React, improving Lighthouse performance scores by 25 points.",
      "Implemented a design system shared between marketing and product teams.",
      "Automated visual regression testing, cutting manual QA time in half.",
      "Coordinated with SEO consultants to improve organic search rankings.",
      "Localized the site into three additional languages.",
    ],
    tags: ["JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    role: "Junior Developer",
    company: "Ridgeline Labs",
    period: "2020 — 2021",
    description: [
      "Contributed to internal tools used by the operations and support teams.",
      "Fixed over 60 bugs across the ticketing and reporting platforms.",
      "Improved unit test coverage from 45% to 78% on the core service.",
      "Helped modernize a legacy jQuery codebase to a component-based architecture.",
      "Documented onboarding guides that shortened new-hire ramp-up time.",
    ],
    tags: ["JavaScript", "REST APIs", "SQL"],
  },
  {
    role: "Intern Software Developer",
    company: "Vantage Point Studio",
    period: "2019 — 2020",
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
