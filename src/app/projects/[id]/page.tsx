"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/app/data/projects";
import {
  ArrowLeft,
  Users,
  Clock,
  Calendar,
  ChevronRight,
  ExternalLink,
  Zap,
  Target,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8 glass-card rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <button
            onClick={() => router.back()}
            className="group mb-8 flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors font-medium"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                {project.title.trim()}
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2 px-3 py-1 glass rounded-full text-xs font-bold uppercase tracking-widest">
                  <Users size={14} className="text-blue-500" />
                  {project.teamSize} Members
                </div>
                <div className="flex items-center gap-2 px-3 py-1 glass rounded-full text-xs font-bold uppercase tracking-widest">
                  <Clock size={14} className="text-blue-500" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 glass rounded-full text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} className="text-blue-500" />
                  {project.year}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="p-4 glass rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-xl"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video w-full mb-16 rounded-[2.5rem] overflow-hidden glass border-8 border-white/5 shadow-2xl">
            {imageError || !project.image ? (
              <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                <span className="text-muted-foreground font-medium uppercase tracking-widest">
                  Preview not available
                </span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-blue-500 rounded-full" />
                  Overview
                </h2>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                  {project.longDescription.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              {project.challenges && project.challenges.length > 0 && (
                <section className="grid md:grid-cols-2 gap-8">
                  <div className="glass-card p-8 rounded-3xl">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-500">
                      <Zap size={20} /> Challenges
                    </h3>
                    <ul className="space-y-4">
                      {project.challenges.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            size={16}
                            className="text-blue-500 mt-0.5 flex-shrink-0"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card p-8 rounded-3xl bg-blue-500/5 border-blue-500/10">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-green-500">
                      <Target size={20} /> Solutions
                    </h3>
                    <ul className="space-y-4">
                      {project.solutions.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <ChevronRight
                            size={16}
                            className="text-green-500 mt-0.5 flex-shrink-0"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {project.impact && project.impact.length > 0 && (
                <section className="glass-card p-8 rounded-3xl border-purple-500/10 bg-purple-500/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-purple-500">
                    <Trophy size={20} /> Key Impacts
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.impact.map((imp, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 glass rounded-2xl text-sm"
                      >
                        <CheckCircle2 size={18} className="text-purple-500" />
                        {imp}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm font-medium"
                      >
                        {Icon && <Icon size={16} className="text-blue-500" />}
                        {tech.name}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  My Role
                </h3>
                <p className="text-lg font-bold">{project.role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function CheckCircle2({
  size,
  className,
}: {
  size: number;
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
