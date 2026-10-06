export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  logo: string;
  logoAlt: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "CC3 Solutions, LLC",
    period: "July 2026 — Present",
    logo: "/images/experience/cc3-solutions.webp",
    logoAlt: "CC3 Solutions logo",
    description: [
      "Lead the end-to-end development and deployment of a CRM application using Python, SQL, and Azure, supporting hundreds of users across 6 departments.",
      "Translate business requirements into technical designs, relational data models, APIs, and scalable system components in collaboration with product managers and stakeholders.",
      "Build and maintain backend services and automated workflows that reduce manual processing effort by approximately 40–50%.",
    ],
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    role: "Software Developer Supervisor",
    company: "McWilson Corp",
    period: "February 2026 — June 2026",
    logo: "/images/experience/mcwilson-corp.webp",
    logoAlt: "McWilson Food Group logo",
    description: [
      "Supervised a team of 4 developers, coordinating task assignments, conducting code reviews, technical guidance, and overseeing the delivery of web applications for external clients.",
      "Developed and maintained web applications using Python, JavaScript, SQL, and Django, streamlining data entry, record updates, document submission, and verification workflows while improving record accuracy.",
      "Delivered application features and third-party API integrations based on stakeholder requirements and user feedback, reducing processing time by 40%.",
    ],
    tags: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    role: "System Developer",
    company: "SM Engineering Design and Development Corp.",
    period: "August 2023 — February 2026",
    logo: "/images/experience/sm-group.webp",
    logoAlt: "SM logo",
    description: [
      "Developed data-driven business applications that centralized project, contractor, financial, and insurance data for operational reporting and decision-making.",
      "Built a project monitoring system with turnaround-time tracking, automated overdue escalations, and SharePoint document integration.",
      "Designed a contractor database supporting financial assessments, insurance validation, balanced project allocation, and expiring-policy detection.",
      "Tested, deployed, and maintained application features and automated data workflows to improve system reliability and data accuracy.",
    ],
    tags: ["JavaScript", "REST APIs", "SQL"],
  },
  {
    role: "Intern Security Analyst",
    company: "SM Investment Corp.",
    period: "January 2023 — July 2023",
    logo: "/images/experience/sm-group.webp",
    logoAlt: "SM logo",
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
