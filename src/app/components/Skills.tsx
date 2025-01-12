"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-12 text-center">
            Skills & Expertise
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-500">
              Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Frontend Development
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "React Native",
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "Next.js",
                    "Microfrontend",
                    "Atomic Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  State Management
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Redux", "Context API"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  UI/UX Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Tailwind CSS", "MUI (Material-UI)", "Bootstrap"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-700">
                  Testing & API
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Jest",
                    "React Testing Library",
                    "RESTful",
                    "GraphQL",
                    "Axios",
                    "React Query",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Backend & Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "MySQL", "PostgreSQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Version Control
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "GitLab"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-blue-500">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem-Solving",
                  "Team Collaboration",
                  "Adaptability",
                  "Communication Skills",
                  "Attention to Detail",
                  "Time Management",
                  "Self-Motivation",
                  "Empathy for Users",
                  "Continuous Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
