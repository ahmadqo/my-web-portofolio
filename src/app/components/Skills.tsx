/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Smartphone,
  Globe,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Microfrontend",
      "Atomic Design",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Android Development",
      "iOS Development",
      "Mobile UI Patterns",
    ],
  },
  {
    title: "State & Data",
    icon: Database,
    skills: [
      "Redux",
      "Context API",
      "GraphQL",
      "RESTful APIs",
      "Axios",
      "React Query",
    ],
  },
  {
    title: "Backend & DB",
    icon: Terminal,
    skills: ["Laravel", "MySQL", "PostgreSQL", "PHP", "API Design"],
  },
  {
    title: "UI/UX & Tools",
    icon: Layers,
    skills: [
      "Tailwind CSS",
      "MUI",
      "Framer Motion",
      "Git",
      "GitHub/GitLab",
      "Jest",
    ],
  },
  {
    title: "Professional",
    icon: Globe,
    skills: [
      "Problem Solving",
      "Team Leadership",
      "English (Professional)",
      "Continuous Learning",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(
            (
              category: { icon: any; title: string; skills: string[] },
              index,
            ) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-3xl group hover:bg-blue-500/5 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                      <CategoryIcon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
