export interface FoundationMedia {
  src: string;
  alt: string;
  sourceLabel: string;
  sourceUrl?: string;
}

export interface FoundationItem {
  title: string;
  place: string;
  period: string;
  description: string[];
  facts?: { label: string; value: string }[];
  image?: FoundationMedia;
  logo?: FoundationMedia;
}

export const education: FoundationItem[] = [
  {
    title: "National University — Manila",
    place: "B.S. in Computer Science with Specialization in Digital Forensics",
    period: "2019 - 2023",
    // facts: [{ label: "GWA", value: "3.50  / 4.0" }],
    image: {
      src: "/images/education/national-university-manila.jpg",
      alt: "National University Manila campus building beneath a cloudy sky",
      sourceLabel: "Image supplied for this portfolio",
    },
    logo: {
      src: "/images/education/logos/national-university-shield.svg",
      alt: "National University shield",
      sourceLabel: "School mark supplied for this portfolio",
    },
    description: [
      "Graduated with a focus on software engineering and a specialization in Digital Forensics.",
      "Built a full-stack capstone project as part of a small team.",
      "Served as a peer tutor for introductory programming courses.",
      "Active member of the university's computer science student org. - Junior Philippines Computer Society",
    ],
  },
  {
    title: "National University Nazareth Manila",
    place: "Senior High School — STEM",
    period: "2017 — 2019",
    logo: {
      src: "/images/education/logos/national-university-nazareth-school.jpg",
      alt: "National University Nazareth School shield",
      sourceLabel: "School mark supplied for this portfolio",
    },
    description: [
      "Completed the Science, Technology, Engineering, and Mathematics track.",
      "Balancing academics and competitive cheerleading.",
    ],
  },
  {
    title: "Immaculate Conception Academy",
    place: "Dasmariñas, Cavite",
    period: "2013 — 2017",
    logo: {
      src: "/images/education/logos/immaculate-conception-academy.png",
      alt: "Immaculate Conception Academy seal",
      sourceLabel: "School mark supplied for this portfolio",
    },
    description: [],
  },
];

export const athletics: FoundationItem[] = [
  {
    title: "Competitive All-Star Cheerleader",
    place: "Apex All-Stars",
    period: "2012 — 2018",
    description: [
      "Competed nationally, earning a top-5 finish at Summit Championships.",
      "Trained 15–20 hours a week, building the discipline that carries into everything I do.",
      "Learned to perform under pressure in front of thousands of people.",
      "Mentored younger teammates as a senior-level flyer.",
      "Developed the teamwork mindset that still shapes how I collaborate today.",
    ],
  },
  {
    title: "Team Captain",
    place: "State University Cheer",
    period: "2019 — 2022",
    description: [
      "Led a 24-person squad as team captain for two seasons.",
      "Coordinated practice schedules, choreography, and travel logistics.",
      "Represented the university at regional and national competitions.",
      "Mentored incoming freshmen through their first competitive season.",
      "Carried lessons in leadership and resilience directly into how I approach engineering teams.",
    ],
  },
];
