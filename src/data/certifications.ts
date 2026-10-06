export interface Certification {
  name: string;
  issuer: string;
  date: string;
  issuerLogo?: "datacamp" | "microsoft" | "trend-micro";
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Data Engineer Associate Certificate",
    issuer: "DataCamp",
    date: "2026",
    issuerLogo: "datacamp",
    credentialUrl: "https://www.datacamp.com/certificate/DEA0019917472389",
  },
  {
    name: "Lean Six Sigma Yellow Belt Certification",
    issuer: "Jojo Bernabe",
    date: "2025",
    credentialUrl: "/credential-unavailable?credential=lean-six-sigma",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    issuerLogo: "microsoft",
    credentialUrl: "/credential-unavailable?credential=microsoft-azure",
  },
  {
    name: "Introduction to Ransomware Threats Certification",
    issuer: "Trend Micro",
    date: "2021",
    issuerLogo: "trend-micro",
    credentialUrl: "/credential-unavailable?credential=introduction-to-ransomware",
  },
];
