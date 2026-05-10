"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Star,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const educationData = {
  school: "STMIK Akakom Yogyakarta (UTDI)",
  degree: "Bachelor of Computer Science",
  field: "Computer Science",
  year: "Sep 2014 - Nov 2018",
  location: "D.I.Yogyakarta, Indonesia",
  gpa: "3.65/4.00",
  description:
    "Focused on programming, systems analysis, and application development for web and mobile.",
  achievements: [
    "Proficient in Java, Python, and JavaScript for software development",
    "Experienced in requirements analysis and application testing",
    "Specialized in web and mobile application development",
  ],
};

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            My <span className="gradient-text">Education</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
        >
          {/* Decorative Icon in background */}
          <div className="absolute -right-8 -top-8 text-blue-500/5 rotate-12">
            <GraduationCap size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-500 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{educationData.school}</h3>
                  <p className="text-blue-500 font-medium">
                    {educationData.degree}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" />
                  {educationData.year}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  {educationData.location}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-4">
                  {educationData.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-3xl bg-blue-500/5 border-blue-500/10 flex flex-col items-center justify-center text-center">
                <Star
                  size={32}
                  className="text-blue-500 mb-2 fill-blue-500/20"
                />
                <span className="text-3xl font-black text-foreground">
                  {educationData.gpa}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">
                  GPA Score
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
