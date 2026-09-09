import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVite,
} from "react-icons/si";
import { Code2, Database, Globe, Workflow } from "lucide-react";

const techIconMap: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  sql: Database,

  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  framer: SiFramer,
  "framer motion": SiFramer,

  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  "rest api": Globe,
  "rest apis": Globe,
  postgresql: SiPostgresql,

  git: SiGit,
  docker: SiDocker,
  vite: SiVite,
  "ci/cd": Workflow,
};

/** Looks up the brand icon for a tool/technology name (case-insensitive). Falls back to a generic icon when unmapped — add new entries to `techIconMap` above so they pick up automatically everywhere. */
export function getTechIcon(name: string): IconType {
  return techIconMap[name.trim().toLowerCase()] ?? Code2;
}
