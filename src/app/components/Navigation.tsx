"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Cpu,
  Briefcase,
  Layout,
  GraduationCap,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const menuItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Cpu },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Layout },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = menuItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    setActiveSection(sectionId);

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div
            className={`glass rounded-full px-6 py-2 flex items-center justify-between ${
              isScrolled
                ? "shadow-lg border-white/20"
                : "bg-transparent border-transparent"
            }`}
          >
            <Link href="/" className="text-lg font-bold gradient-text">
              AQ.
            </Link>

            <div className="flex items-center gap-1">
              {menuItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-500"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-500/10 rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-around shadow-2xl border-white/20">
          {menuItems.slice(0, 5).map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative p-2 transition-colors ${
                  isActive ? "text-blue-500" : "text-foreground/60"
                }`}
              >
                <Icon size={24} />
                {isActive && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                  />
                )}
              </button>
            );
          })}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-foreground/60"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
}
