"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] glass border-8 border-white/5 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Ahmad Qomaruddin"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">
                Introduction
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">
                About <span className="gradient-text">Me</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                An experienced{" "}
                <span className="text-foreground font-semibold">
                  Frontend Developer
                </span>{" "}
                |{" "}
                <span className="text-foreground font-semibold">
                  React.js Specialist
                </span>{" "}
                |{" "}
                <span className="text-foreground font-semibold">
                  Full Stack Developer
                </span>{" "}
                (Laravel) with over 5 years of expertise in web and mobile
                application development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="text-foreground font-bold mb-2 text-2xl">
                    5+
                  </h4>
                  <p className="text-sm">Years of Experience</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <h4 className="text-foreground font-bold mb-2 text-2xl">
                    50+
                  </h4>
                  <p className="text-sm">Projects Completed</p>
                </div>
              </div>

              <p>
                Currently focusing on frontend development with a passion for
                creating high-quality applications that support digital
                solutions. Eager to continuously learn, share knowledge, and
                contribute to innovative teams.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
