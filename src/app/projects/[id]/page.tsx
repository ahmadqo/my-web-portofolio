"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/app/data/projects";
import { FaArrowLeft, FaUsers, FaClock, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Project not found
          </h1>
          <button
            onClick={() => router.back()}
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FaArrowLeft /> Back to Projects
          </button>

          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <FaUsers className="text-blue-500" />
              <span>Team Size: {project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <span>Duration: {project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              <span>Year: {project.year}</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            {imageError || !project.image ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100  min-h-80">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    Image not available
                  </p>
                </div>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto max-h-[40rem] object-contain group-hover:scale-105 transition-transform duration-300"
                onError={handleImageError}
              />
            )}
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => {
                const Icon = tech.icon ?? null;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                  >
                    {Icon && <Icon className="text-blue-500" />}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <div className="prose max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Role</h2>
            <p className="text-gray-600">{project.role}</p>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {project?.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-blue-500 mt-1.5">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project?.solutions && project.solutions.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Solutions
                </h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <span className="text-green-500 mt-1.5">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Impact */}
          {project?.impact && project.impact.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Project Impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((impact, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <span className="text-purple-500 mt-1.5">•</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Collage Photo */}
          {/* {project.slide && project.slide.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.slide.map((image, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg ${
                      index === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="group relative h-48 md:h-64 w-full"
                    >
                      <Image
                        width={800}
                        height={400}
                        src={image}
                        alt={`Project slide ${index + 1}`}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </motion.div>
      </div>
    </main>
  );
}
