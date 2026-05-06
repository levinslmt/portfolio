import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const TechStack = [
  // FRONTEND
  {
    id: 1,
    name: "JavaScript",
    category: "frontend",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    id: 3,
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    id: 4,
    name: "React",
    category: "frontend",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // BACKEND
  {
    id: 6,
    name: "Node.js",
    category: "backend",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    id: 7,
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "#000000",
  },
  {
    id: 8,
    name: "Python",
    category: "backend",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    id: 9,
    name: "PostgreSQL",
    category: "backend",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    id: 10,
    name: "MongoDB",
    category: "backend",
    icon: SiMongodb,
    color: "#47A248",
  },

  // DEV TOOLS
  { id: 11, name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
  {
    id: 12,
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    color: "#007ACC",
  },
];
