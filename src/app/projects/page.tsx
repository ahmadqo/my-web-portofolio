"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects, Project } from "@/app/data/projects";
import { useState } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <Link
              href="/#projects"
              className="p-2 glass rounded-full hover:bg-blue-500 hover:text-white transition-all group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </Link>
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
              Portfolio
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black mb-6"
              >
                All <span className="gradient-text">Projects</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
              >
                A comprehensive showcase of digital solutions, from enterprise
                applications to creative web experiences. Every project
                represents a unique challenge solved with modern technology.
              </motion.p>
            </div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-6 rounded-3xl border-blue-500/20 bg-blue-500/5 hidden lg:block"
            >
              <div className="text-4xl font-black text-blue-500 mb-1">
                {projects.length}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Total Projects
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                router={router}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  router,
}: {
  project: Project;
  index: number;
  router: AppRouterInstance;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative rounded-[2.5rem] overflow-hidden glass-card h-[400px]"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        {imageError || !project.image ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/10 uppercase">
              {project.id}
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-40 group-hover:opacity-20 transition-opacity"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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

        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors drop-shadow-md">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 line-clamp-2 mb-6 group-hover:text-white transition-colors">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
            View Details
          </span>
          <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <ArrowLeft className="rotate-135" size={18} />
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-[2.5rem] transition-all pointer-events-none" />
    </motion.div>
  );
}
