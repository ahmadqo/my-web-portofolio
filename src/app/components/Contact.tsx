/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmad5qomaruddin@gmail.com",
    href: "mailto:ahmad5qomaruddin@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "08124996531",
    href: "tel:08124996531",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "ahmad-qomaruddin",
    href: "https://www.linkedin.com/in/ahmad-qomaruddin",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "ahmadqo",
    href: "https://github.com/ahmadqo",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side: Call to Action */}
            <div className="p-12 md:p-16 bg-blue-600 text-white">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-200 font-semibold tracking-wider uppercase text-sm"
              >
                Get In Touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mt-4 mb-8 leading-tight"
              >
                Let&apos;s build something{" "}
                <span className="text-blue-200">extraordinary</span> together.
              </motion.h2>
              <p className="text-blue-100 text-lg mb-12 max-w-md">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions.
              </p>

              <motion.a
                href="https://wa.me/628124996531"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold transition-all shadow-xl"
              >
                <MessageSquare size={20} />
                Send a Message
                <ArrowRight size={18} />
              </motion.a>
            </div>

            {/* Right Side: Contact Info */}
            <div className="p-12 md:p-16 bg-background">
              <div className="space-y-8">
                {contactInfo.map(
                  (
                    contact: {
                      icon: any;
                      label: string;
                      value: string;
                      href?: string;
                    },
                    index,
                  ) => {
                    const ContactIcon = contact.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 group"
                      >
                        <div className="p-4 glass rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          <ContactIcon size={24} />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
                            {contact.label}
                          </h4>
                          {contact.href ? (
                            <a
                              href={contact.href}
                              target={
                                contact.href.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              className="text-lg font-bold hover:text-blue-500 transition-colors"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-lg font-bold">
                              {contact.value}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Ahmad Qomaruddin.
            {/* Built with Next.js & Framer Motion. */}
          </p>
        </div>
      </div>
    </section>
  );
}
