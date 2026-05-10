"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "PT. Infosys Solusi Terpadu",
    role: "Frontend Developer",
    period: "Feb 2022 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Leading innovative digital solutions in the Financial Services Industry and public sector.",
    responsibilities: [
      "Led 4+ frontend teams in designing, developing, and maintaining scalable and secure internet banking applications",
      "Managed 14+ microfrontend modules to ensure integration, consistency, and scalability",
      "Implemented key features such as registration, transfer, payment, and portal management",
      "Enhanced application performance through code splitting, lazy loading, and caching",
      "Applied microfrontend architecture using React.js for improved modularity",
    ],
    technologies: [
      "React.js",
      "Microfrontend",
      "Redux",
      "REST API",
      "TypeScript",
    ],
  },
  {
    company: "PT. Astra Graphia Information Technology (AGIT)",
    role: "Web Developer",
    period: "Mar 2019 - Feb 2022",
    location: "Jakarta Pusat, Indonesia",
    description:
      "Digital Service Provider offering one-stop solutions on Digital Services.",
    responsibilities: [
      "Developed frontend and backend applications using React.js, Java Spring Boot, and PostgreSQL",
      "Worked on high-impact projects like TRAC Service Apps and Merchant Systems",
      "Mentored junior developers and conducted thorough code reviews",
      "Implemented performance optimization for production-ready applications",
    ],
    technologies: [
      "React.js",
      "Java Spring Boot",
      "PostgreSQL",
      "Redux",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop Only) */}
              <div className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-px bg-border">
                <div className="sticky top-1/2 w-4 h-4 -left-2 bg-blue-500 rounded-full border-4 border-background shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>

              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-500 font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-blue-500" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-blue-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-8">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <ChevronRight
                        size={16}
                        className="text-blue-500 mt-0.5 flex-shrink-0"
                      />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-medium text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
