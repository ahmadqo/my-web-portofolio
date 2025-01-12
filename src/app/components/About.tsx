"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.02]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 md:sticky md:top-24"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/20">
                  <Image
                    src="/cropped_image.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="w-full md:w-2/3">
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg">
                  <p className="leading-relaxed">
                    An experienced{" "}
                    <span className="font-semibold text-blue-500">
                      Frontend Developer
                    </span>{" "}
                    |{" "}
                    <span className="font-semibold text-purple-500">
                      React.js Specialist
                    </span>{" "}
                    |{" "}
                    <span className="font-semibold text-indigo-500">
                      Full Stack Developer
                    </span>{" "}
                    (Laravel) with over 5 years of expertise in web and mobile
                    application development. Proficient in modern technologies
                    such as React.js and React Native, specializing in building
                    interactive, responsive, and user-focused interfaces
                    (UI/UX).
                  </p>
                  <p className="leading-relaxed">
                    Additionally skilled in full-stack development using
                    Laravel, with the ability to align frontend and backend
                    requirements seamlessly. Currently focusing on frontend
                    development with a passion for creating high-quality
                    applications that support digital solutions.
                  </p>
                  <p className="leading-relaxed">
                    Eager to continuously learn, share knowledge, and contribute
                    to innovative teams.
                  </p>
                </div>
              </motion.div>

              {/* Skills & Contact Grid */}
              {/* <div className="grid grid-cols-1 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-6 text-blue-500">
                    Professional Summary
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Frontend Developer with over 5 years of experience specializing in React.js and Next.js. 
                    Proven track record in developing scalable web applications and leading frontend teams. 
                    Passionate about creating intuitive user interfaces and implementing modern web technologies.
                  </p>
                </motion.div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
