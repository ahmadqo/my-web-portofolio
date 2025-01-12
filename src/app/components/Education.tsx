"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function Education() {
  const educationData = {
    school: "STMIK Akakom Yogyakarta (UTDI)",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    year: "Sep 2014 - Nov 2018",
    location: "D.I.Yogyakarta, Indonesia",
    gpa: "3.65/4.00",
    description: "Focused on programming, systems analysis, and application development for web and mobile.",
    achievements: [
      "Proficient in Java, Python, and JavaScript for software development",
      "Experienced in requirements analysis and application testing to ensure quality and performance",
      "Specialized in web and mobile application development"
    ]
  };

  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Education
          </h2>

          {/* Desktop View */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
                  <FaGraduationCap className="text-3xl text-blue-500" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {educationData.school}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    {educationData.year}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <FaStar className="text-blue-500" />
                    GPA: {educationData.gpa}
                  </p>

                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">
                      {educationData.degree} in {educationData.field}
                    </p>
                    <ul className="space-y-2 list-disc list-inside ml-4">
                      {educationData.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FaGraduationCap className="text-2xl text-blue-500 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {educationData.school}
                      </h3>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-1">
                      {educationData.degree} in {educationData.field}
                    </p>
                  </div>
                  
                  <div className="flex flex-col mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{educationData.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>{educationData.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaStar className="text-blue-500" />
                      <span>GPA: {educationData.gpa}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">
                    {educationData.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                    <ul className="list-none space-y-2">
                      {educationData.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
