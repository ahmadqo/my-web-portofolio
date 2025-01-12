"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "PT. Infosys Solusi Terpadu",
      role: "Frontend Developer",
      period: "Feb 2022 - Present",
      location: "Jakarta, Indonesia",
      description:
        "A company primarily focused on providing innovative digital solutions in the Financial Services Industry, public sector, telecommunications industry, and other industries.",
      responsibilities: [
        "Led 4+ frontend teams in designing, developing, and maintaining scalable and secure internet banking applications",
        "Managed 14+ microfrontend modules to ensure integration, consistency, and scalability",
        "Collaborated with backend developers, business analysts, QA, and UI/UX designers to align technical execution with business needs",
        "Implemented key features such as registration, transfer, payment, and portal management",
        "Enhanced application performance through performance optimization techniques such as code splitting, lazy loading, and caching",
        "Applied microfrontend architecture using React.js for improved modularity and maintainability",
        "Provided technical guidance to the team, improving code quality and reducing production issues",
        "Ensured cross-browser compatibility and responsive design aligned with accessibility standards",
      ],
      technologies: ["React.js", "Microfrontend", "Redux", "REST API"],
    },
    {
      company: "PT. Astra Graphia Information Technology (AGIT)",
      role: "Web Developer",
      period: "Mar 2019 - Feb 2022",
      location: "Jakarta Pusat, Indonesia",
      description:
        "AGIT is a Digital Service Provider, provides one stop Solution on Digital Services.",
      responsibilities: [
        "Developed frontend and backend applications using React.js, Java Spring Boot, and PostgreSQL",
        "Worked on projects such as :",
        "TRAC Service Apps: Improved user experience for managing rental car services.",
        "Merchant System App: Optimized onboarding processes and merchant portal management.",
        "Simplified task tracking and team collaboration for internal project management.",
        "Mentored junior developers, conducted code reviews, fixed bugs, and implemented performance optimization for production-ready applications.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Java Spring Boot",
        "PostgreSQL",
        "REST API",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Experience
          </h2>

          {/* Desktop View */}
          <div className="hidden md:block space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200"
              >
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-blue-500 shadow-lg" />
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                      <FaBriefcase className="text-3xl text-blue-500" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-blue-600">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 mt-2 md:mt-0">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-blue-500" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-blue-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBriefcase className="text-2xl text-blue-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-blue-600">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-col mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Responsibilities */}
                  <div className="mt-4">
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-none space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1.5">•</span>
                            <span className="text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
