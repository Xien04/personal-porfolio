export interface FoundationItem {
  title: string;
  place: string;
  period: string;
  description: string[];
}

export const education: FoundationItem[] = [
  {
    title: "High School Diploma",
    place: "Lincoln High School",
    period: "2014 — 2018",
    description: [
      "Maintained a 3.8 GPA while competing in competitive cheer year-round.",
      "Completed AP Computer Science, sparking an early interest in programming.",
      "Served as class treasurer for two years.",
      "Volunteered as a peer tutor in the school's math lab.",
      "Balanced academics with 20+ hours a week of practice and travel.",
    ],
  },
  {
    title: "B.S. in Computer Science",
    place: "State University",
    period: "2018 — 2022",
    description: [
      "Graduated cum laude while competing on the university's competitive cheer team.",
      "Completed a senior capstone building a web accessibility tool.",
      "Worked part-time as a teaching assistant for intro programming courses.",
      "Led group projects as team lead across three semesters.",
      "Balanced a full course load with 15+ hours a week of team practice.",
    ],
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
