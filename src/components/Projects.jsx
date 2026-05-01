"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedEcho: Talk, Diagnose, Heal",
    image: "/projects/medecho.png",
    description: "AI-powered healthcare support system enabling users to input symptoms via voice or text. Features NLP analysis, Speech-to-Text, and automated medical report generation.",
    problem: "Fragmented healthcare diagnosis tools lack a seamless, accessible voice UX.",
    challenge: "Ensuring high-accuracy NLP symptom extraction from raw speech.",
    highlight: "End-to-end automated reporting pipeline.",
    tech: ["TypeScript", "NLP", "React", "Node.js"],
    github: "https://github.com/SabbellaLaharika/MedEcho-Talk-Diagnose-Heal",
    demo: "#",
  },
  {
    title: "Bank Account Management",
    image: "/projects/bank.png",
    description: "Bank Account Management API built using Event Sourcing and CQRS. Supports full transaction history and time-travel balance queries using PostgreSQL.",
    problem: "Traditional CRUD systems struggle with reliable financial auditability.",
    challenge: "Implementing robust Event Sourcing & CQRS architecture.",
    highlight: "Time-travel queries for exact historical balances.",
    tech: ["TypeScript", "CQRS", "Event Sourcing", "PostgreSQL"],
    github: "https://github.com/SabbellaLaharika/Bank-Account-Management-System",
    demo: "#",
  },
  {
    title: "FtpStreamMonitor",
    image: "/projects/ftp.png",
    description: "Full-stack system that monitors an FTP server for file system changes and streams real-time updates to a responsive dashboard using WebSockets.",
    problem: "Standard remote file polling introduces massive event latency.",
    challenge: "Managing continuous WebSockets and in-memory state without drops.",
    highlight: "Real-time event streaming with zero-drop architecture.",
    tech: ["TypeScript", "WebSockets", "React", "Node.js"],
    github: "https://github.com/SabbellaLaharika/FtpStreamMonitor",
    demo: "#",
  },
  {
    title: "ConflictFree Versioned Docs",
    image: "/projects/docs.png",
    description: "Backend system for collaborative document management implementing optimistic concurrency control (OCC), revision history tracking, and full-text search.",
    problem: "Collaborative editors frequently overwrite concurrent document updates.",
    challenge: "Handling concurrent writes effectively using OCC algorithms.",
    highlight: "Mimics production collaborative document systems.",
    tech: ["TypeScript", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/SabbellaLaharika/ConflictFree-Versioned-Docs",
    demo: "#",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    image: "/projects/saas.png",
    description: "Production-ready Multi-Tenant SaaS Platform for Project & Task Management featuring complete data isolation, role-based access control, and containerization.",
    problem: "Severe data spillage risks in multi-user enterprise environments.",
    challenge: "Enforcing strict RBAC and logical data isolation per tenant.",
    highlight: "Production-ready, highly secure architecture.",
    tech: ["Node.js", "Express", "PostgreSQL", "React", "Docker"],
    github: "https://github.com/SabbellaLaharika/GPP-Task3-Multi-Tenant-SaaS-Platform-with-Project-Task-Management",
    demo: "#",
  },
  {
    title: "Event-Driven Tracking Service",
    image: "/projects/tracking.png",
    description: "Event-driven user activity tracking service featuring a REST ingestion API, asynchronous message processing, IP-based rate limiting, and persistent storage.",
    problem: "High-volume tracking APIs frequently crash under peak analytical load.",
    challenge: "Ensuring idempotency in high-throughput message queues.",
    highlight: "Scalable asynchronous pipeline via RabbitMQ.",
    tech: ["JavaScript", "RabbitMQ", "Express", "Docker"],
    github: "https://github.com/SabbellaLaharika/Event-Driven-User-Activity-Tracking-Service-with-RabbitMQ-and-Rate-Limiting",
    demo: "#",
  },
];

export default function Projects() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950/50 transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">My Work</h2>
            <h3 className="text-4xl font-bold">Featured Projects</h3>
          </div>
          <motion.a
            href={process.env.NEXT_PUBLIC_PERSONAL_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center"
          >
            View All Repositories <ExternalLink size={16} className="ml-2" />
          </motion.a>
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
              <div className="relative h-full bg-white dark:bg-gray-900/40 glass border border-black/5 dark:border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300">
                {/* Project Image Area */}
                <div 
                  className="w-full relative overflow-hidden bg-black/5 cursor-zoom-in group/img"
                  onClick={() => setZoomedImage({ src: project.image, title: project.title })}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent pointer-events-none transition-opacity group-hover/img:opacity-0"></div>
                  
                  {/* Subtle View Hint on Hover */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wide border border-black/10 dark:border-white/10 shadow-lg">
                      <ZoomIn size={14} className="text-primary" /> Click to Expand
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider block mb-1">THE PROBLEM</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider block mb-1">ARCHITECTURE CHALLENGE</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wider block mb-1">OUTCOME / METRIC</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{project.highlight}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <FaGithub size={22} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:opacity-80 transition-opacity flex items-center"
                      >
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Width Image Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-pointer select-none"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-7xl max-h-[92vh] flex items-center justify-center"
            >
              <img 
                src={zoomedImage.src} 
                alt={zoomedImage.title}
                className="w-auto h-auto max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <button 
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-md transition-all border border-white/10 flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
