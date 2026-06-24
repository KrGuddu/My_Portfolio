// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaDocker,
  FaLinux,
  FaAws,
  FaKey,
} from "react-icons/fa";

import { TbPlugConnected, TbGitBranch } from "react-icons/tb";

import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiVite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiPostman,
  SiWebpack,
  SiRollupdotjs,
  SiYarn,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

// CATEGORY BUTTONS
export const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥️",
  },
  {
    id: "mern",
    label: "MERN Stack",
    icon: "⚛️",
  },
  {
    id: "java",
    label: "Java Full Stack",
    icon: "☕",
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄️",
  },
  {
    id: "tools",
    label: "Tools",
    icon: "🛠️",
  },
];


//  ALL SKILLS
export const skills = [
  // ================= FRONTEND =================
  {
    id: 1,
    name: "HTML5",
    icon: FaHtml5,
    category: ["frontend"],
    color: "#E34F26",
  },

  {
    id: 2,
    name: "CSS3",
    icon: FaCss3Alt,
    category: ["frontend"],
    color: "#1572B6",
  },

  {
    id: 3,
    name: "JavaScript",
    icon: SiJavascript,
    category: ["frontend"],
    color: "#F7DF1E",
  },

  {
    id: 4,
    name: "TypeScript",
    icon: SiTypescript,
    category: ["frontend"],
    color: "#3178C6",
  },

  {
    id: 5,
    name: "React.js",
    icon: FaReact,
    category: ["frontend", "mern"],
    color: "#61DAFB",
  },

  {
    id: 6,
    name: "Redux Toolkit",
    icon: SiRedux,
    category: ["frontend"],
    color: "#764ABC",
  },

  {
    id: 7,
    name: "React Router",
    icon: SiReactrouter,
    category: ["frontend"],
    color: "#CA4245",
  },

  {
    id: 8,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: ["frontend"],
    color: "#38BDF8",
  },

  {
    id: 9,
    name: "Bootstrap",
    icon: SiBootstrap,
    category: ["frontend"],
    color: "#7952B3",
  },

  {
    id: 10,
    name: "SASS",
    icon: SiSass,
    category: ["frontend"],
    color: "#CC6699",
  },

  {
    id: 11,
    name: "Vite",
    icon: SiVite,
    category: ["frontend"],
    color: "#646CFF",
  },

  // ================= MERN =================
  {
    id: 12,
    name: "Node.js",
    icon: FaNodeJs,
    category: ["mern"],
    color: "#5FA04E",
  },

  {
    id: 13,
    name: "Express.js",
    icon: SiExpress,
    category: ["mern"],
    color: "#FFFFFF",
  },

  {
    id: 14,
    name: "JWT",
    icon: FaKey,
    category: ["mern"],
    color: "#FFD54F",
  },

  {
    id: 15,
    name: "Socket.io",
    icon: TbPlugConnected,
    category: ["mern"],
    color: "#FFFFFF",
  },

  // ================= JAVA =================
  {
    id: 16,
    name: "Java",
    icon: FaJava,
    category: ["java"],
    color: "#F89820",
  },

  {
    id: 17,
    name: "Spring Boot",
    icon: SiSpringboot,
    category: ["java"],
    color: "#6DB33F",
  },

  {
    id: 18,
    name: "Hibernate",
    icon: SiHibernate,
    category: ["java"],
    color: "#59666C",
  },

  {
    id: 19,
    name: "Maven",
    icon: SiApachemaven,
    category: ["java"],
    color: "#C71A36",
  },

  // ================= DATABASE =================
  {
    id: 20,
    name: "MongoDB",
    icon: SiMongodb,
    category: ["database", "mern"],
    color: "#47A248",
  },

  {
    id: 21,
    name: "MySQL",
    icon: SiMysql,
    category: ["database", "java"],
    color: "#4479A1",
  },

  {
    id: 22,
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: ["database"],
    color: "#336791",
  },

  // ================= TOOLS =================
  {
    id: 23,
    name: "Git",
    icon: FaGitAlt,
    category: ["tools"],
    color: "#F05032",
  },

  {
    id: 24,
    name: "GitHub",
    icon: FaGithub,
    category: ["tools"],
    color: "#FFFFFF",
  },

  {
    id: 25,
    name: "Postman",
    icon: SiPostman,
    category: ["tools"],
    color: "#FF6C37",
  },

  {
    id: 30,
    name: "Docker",
    icon: FaDocker,
    category: ["tools"],
    color: "#2496ED",
  },

  {
    id: 33,
    name: "AWS",
    icon: FaAws,
    category: ["tools"],
    color: "#FF9900",
  },

  {
    id: 31,
    name: "Linux",
    icon: FaLinux,
    category: ["tools"],
    color: "#FCC624",
  },

  {
    id: 32,
    name: "CI/CD",
    icon: TbGitBranch,
    category: ["tools"],
    color: "#58A6FF",
  },

  {
    id: 26,
    name: "npm",
    icon: FaNpm,
    category: ["tools"],
    color: "#CB3837",
  },

  {
    id: 27,
    name: "Yarn",
    icon: SiYarn,
    category: ["tools"],
    color: "#2C8EBB",
  },

  {
    id: 28,
    name: "Webpack",
    icon: SiWebpack,
    category: ["tools"],
    color: "#8DD6F9",
  },

  {
    id: 29,
    name: "Rollup",
    icon: SiRollupdotjs,
    category: ["tools"],
    color: "#EC4A3F",
  },

  {
    id: 36,
    name: "Render",
    icon: SiRender,
    category: ["tools"],
    color: "#46E3B7",
  },

  {
    id: 34,
    name: "Vercel",
    icon: SiVercel,
    category: ["tools"],
    color: "#FFFFFF",
  },

  {
    id: 35,
    name: "Netlify",
    icon: SiNetlify,
    category: ["tools"],
    color: "#00C7B7",
  },
];

// CATEGORY COUNT
export const getCategoryCount = (categoryId) => {
  return skills.filter((skill) =>
    skill.category.includes(categoryId)
  ).length;
};