"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      href: process.env.NEXT_PUBLIC_PERSONAL_GITHUB,
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      href: process.env.NEXT_PUBLIC_PERSONAL_LINKEDIN,
      color: "hover:text-blue-600"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/919866984678",
      color: "hover:text-green-500"
    },
    {
      name: "Phone",
      icon: <Phone size={18} />,
      href: "tel:+919866984678",
      color: "hover:text-primary"
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      href: `mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`,
      color: "hover:text-primary"
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-gray-950/50"
    >
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-900 dark:text-white font-bold text-lg tracking-tighter">
            SL<span className="text-primary">.</span>
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-[11px]">
            © {new Date().getFullYear()} Sabbella Laharika. Built for scalability.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center space-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 transition-all duration-300 transform hover:-translate-y-1 ${link.color}`}
                aria-label={`Visit my ${link.name} profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 dark:text-gray-600 text-[9px] uppercase tracking-[0.2em] font-bold">
            Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
