import { IconType } from "react-icons";
import { FaReact, FaLaravel, FaAtom, FaHtml5 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMui,
  SiRedux,
  SiMysql,
  SiBootstrap,
  SiJquery,
  SiSpring,
  SiHtml5,
  SiAxios,
} from "react-icons/si";

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: Technology[];
  featured: boolean;
  challenges: string[];
  solutions: string[];
  impact: string[];
  role: string;
  teamSize: number;
  duration: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "internet-banking",
    title: "Internet Banking Application",
    description:
      "A comprehensive internet banking platform with features for fund transfers, bill payments, and account management. Implemented using microfrontend architecture for better scalability.",
    longDescription: `Led the development of a modern internet banking platform that serves millions of users. The application was built with a focus on security, performance, and user experience.

The platform features a microfrontend architecture that allows for independent deployment of different modules, reducing deployment risks and improving team autonomy.`,
    image: "/images/projects/project-banking.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "MUI (Material-UI)", icon: SiMui },
      { name: "Microfrontend", icon: FaReact },
      { name: "Atomic Design", icon: FaAtom },
      { name: "Redux", icon: SiRedux },
    ],
    featured: true,
    challenges: [
      "Managing complex state across multiple microfrontend modules",
      "Ensuring consistent user experience across different teams",
      "Optimizing performance for large-scale user base",
      "Implementing robust security measures for financial transactions",
    ],
    solutions: [
      "Implemented shared state management system using Redux",
      "Created comprehensive design system and component library",
      "Applied code splitting and lazy loading techniques",
      "Developed secure authentication and authorization system",
    ],
    impact: [
      "Reduced page load time by 40%",
      "Improved developer productivity by 30%",
      "Decreased deployment-related incidents by 60%",
      "Enhanced user satisfaction score to 4.5/5",
    ],
    role: "Lead Frontend Developer",
    teamSize: 19,
    duration: "36 months",
    year: 2022,
  },
  {
    id: "trac-service-app",
    title: "TRAC Service Apps",
    description:
      "A dedicated platform for TRAC Corporate customers designed to streamline various rental car management needs and services.",
    longDescription: `TRAC Service Apps is a platform specifically designed for TRAC Corporate customers to cater to various needs in managing rental cars. 
    TRAC Service Apps comes with features such as car maintenance reminders and notifications for managing vehicle documents for your rental. 
    Committed to simplifying and assisting customers, TRAC Service Apps makes it easy to manage long-term car rentals, all within the convenience of a single platform.`,
    image: "/images/projects/project-trac.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "MUI (Material-UI)", icon: SiMui },
      { name: "Redux", icon: SiRedux },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Frontend Developer",
    teamSize: 8,
    duration: "7 months",
    year: 2021,
  },
  {
    id: "merchant-system",
    title: "Merchant Management System",
    description:
      "A robust merchant portal for managing onboarding, transactions, and analytics. Features include real-time reporting and automated approval workflows.",
    longDescription: `Developed a comprehensive merchant management system that streamlines the onboarding process and provides powerful tools for transaction management and analytics.

The system includes automated approval workflows, real-time reporting dashboards, and integration with multiple payment gateways.`,
    image: "/images/projects/project-merchant.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "MUI (Material-UI)", icon: SiMui },
      { name: "Redux", icon: SiRedux },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Full Stack Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "simplify",
    title: "Simplify Project Management",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-simplify.png",
    technologies: [
      { name: "Spring Boot", icon: SiSpring },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "HTML", icon: SiHtml5 },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      { name: "Ajax", icon: SiJquery },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "estock-tripat",
    title: "E Stok Tripat",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-estok-tripat.png",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Axios", icon: SiAxios },
      { name: "Typescript", icon: SiTypescript },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "nextpixel",
    title: "Next Pixel",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-nextpixel.png",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "jQuery", icon: SiJquery },
      { name: "Ajax", icon: SiJquery },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "pos-rajawali",
    title: "Sistem Informasi Pencatatan Operasional",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-rajawali.png",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      { name: "Ajax", icon: SiJquery },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "ssb",
    title: "Web Profile PT. SSB",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-ssb.png",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "sikatrin",
    title: "Sistem Ketertelusuran Karantina Terintegrasi",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-sikatrin-1.png",
    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "jQuery", icon: SiJquery },
      { name: "Ajax", icon: SiJquery },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
  {
    id: "trust-care-medica",
    title: "Trust Care Medica",
    description: "",
    longDescription: ``,
    image: "/images/projects/project-medica.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    featured: true,
    challenges: [],
    solutions: [],
    impact: [],
    role: "Web Developer",
    teamSize: 8,
    duration: "9 months",
    year: 2019,
  },
];
