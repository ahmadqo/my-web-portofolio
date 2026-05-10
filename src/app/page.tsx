/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-sm font-medium mb-6 inline-block"
            >
              Available for new opportunities
            </motion.span>

            <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
              Ahmad <span className="gradient-text">Qomaruddin</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Crafting premium digital experiences as a{" "}
              <span className="text-foreground font-semibold">
                Frontend Developer
              </span>{" "}
              &{" "}
              <span className="text-foreground font-semibold">
                Laravel Expert
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-foreground text-background rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all"
              >
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              <div className="flex gap-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/ahmadqomaruddin",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/ahmadqomaruddin",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:contact@ahmadqomaruddin.com",
                    label: "Email",
                  },
                ].map(
                  (social: { icon: any; href: string; label: string }, i) => {
                    const SocialIcon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="p-4 glass rounded-full hover:bg-blue-500 hover:text-white transition-all"
                        title={social.label}
                      >
                        <SocialIcon size={20} />
                      </motion.a>
                    );
                  },
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest font-medium">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Sections Wrapper with global spacing */}
      <div className="space-y-32 pb-32">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
