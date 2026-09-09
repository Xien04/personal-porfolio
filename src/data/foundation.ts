export interface FoundationItem {
  title: string;
  place: string;
  period: string;
  description: string[];
}

export const education: FoundationItem[] = [
  {
    title: "National University — Manila",
    place: "B.S. in Computer Science",
    period: "2019 — 2023",
    description: [],
  },
  {
    title: "National University Nazareth Manila",
    place: "Senior High School — STEM",
    period: "2017 — 2019",
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
