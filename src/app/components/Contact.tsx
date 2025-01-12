"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "ahmad5qomaruddin@gmail.com",
      href: "mailto:ahmad5qomaruddin@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "08124996531",
      href: "tel:08124996531",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Jakarta, Indonesia",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "ahmad-qomaruddin",
      href: "https://www.linkedin.com/in/ahmad-qomaruddin",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "ahmadqp",
      href: "https://github.com/ahmadqo",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities.
            I&rsquo;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 bg-blue-100 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {contact.label}
                      </h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 bg-blue-100 rounded-full text-blue-500">
                        {contact.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">
                        {contact.label}
                      </h3>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <a
              href="https://wa.me/628124996531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              <span>Send Message on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
