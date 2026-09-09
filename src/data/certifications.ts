export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialUrl: "https://cloud.google.com/certification/cloud-developer",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "The Linux Foundation",
    date: "2022",
    credentialUrl: "https://www.cncf.io/certification/ckad/",
  },
  {
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "2022",
    credentialUrl: "https://www.mongodb.com/certification",
  },
];
