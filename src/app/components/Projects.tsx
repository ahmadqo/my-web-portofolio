"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-semibold tracking-wider uppercase text-sm"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mt-2"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground max-w-md text-left md:text-right"
          >
            A collection of my recent works ranging from enterprise solutions to
            experimental web apps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl overflow-hidden glass-card ${
                project.gridSpan || "col-span-1"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/10 uppercase">
                      {project.id}
                    </span>
                  </div>
                )}
              </div>

              {/* Overlay Gradient - Darker for better readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors drop-shadow-lg">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {project.description ||
                    project.longDescription.substring(0, 100) + "..."}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-sm font-bold hover:text-blue-500 transition-colors"
                  >
                    Details <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href="#"
                    className="p-2 glass rounded-full hover:bg-white/20 transition-all"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Animated Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
          >
            See All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
