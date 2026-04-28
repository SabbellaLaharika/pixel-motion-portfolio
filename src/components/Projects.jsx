"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { WireframePlaceholder } from "@/components/ui/WireframePlaceholder";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with user authentication, product management, and a seamless checkout experience using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/SabbellaLaharika",
    icon: "🛍️",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking application providing detailed forecasts and interactive maps using the OpenWeatherMap API.",
    tech: ["JavaScript", "React", "API", "Tailwind"],
    github: "https://github.com/SabbellaLaharika",
    icon: "☁️",
  },
  {
    title: "Task Management System",
    description: "A collaborative tool for organizing tasks and tracking project progress, featuring real-time updates and team synchronization.",
    tech: ["React", "Firebase", "Material UI", "Redux"],
    github: "https://github.com/SabbellaLaharika",
    icon: "📋",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">My Work</h2>
            <h3 className="text-4xl font-bold">Featured Projects</h3>
          </div>
          <a
            href="https://github.com/SabbellaLaharika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center"
          >
            View All Repositories <ExternalLink size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Premium Glow Effect on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative h-full glass rounded-3xl flex flex-col border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
                {/* Project Image / Wireframe Area */}
                <div className="h-48 w-full relative">
                  <WireframePlaceholder />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center"
                  >
                    Live Demo <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
          <style jsx global>{`
            @keyframes scan {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(400%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
