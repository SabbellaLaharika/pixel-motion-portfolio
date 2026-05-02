"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedEcho: Talk, Diagnose, Heal",
    image: "/projects/medecho.png",
    description: "AI-powered healthcare support system enabling users to input symptoms via voice or text. Features NLP analysis, Speech-to-Text, and automated medical report generation.",
    problem: "Existing healthcare tools are fragmented — patients often juggle multiple apps for symptom lookup, doctor consultation, and report management. Voice-based symptom input is either unavailable or unreliable, leaving non-technical users without an accessible diagnostic interface.",
    challenge: "Building a unified pipeline that connects a React frontend, Node.js/Express backend, and a Flask-based AI/ML microservice. The NLP engine needed to accurately extract medical entities from raw speech transcripts, handle multilingual inputs via a translation module, and generate structured clinical reports — all while maintaining HIPAA-friendly data flows across PostgreSQL databases.",
    highlight: "Achieved end-to-end automated diagnostic reporting — from voice input to PDF report generation — with Speech Recognition, NLP symptom extraction, ML inference, and a translation layer supporting multiple languages. The modular microservice architecture allows each component (Backend, AI/ML, Report Generator) to scale independently.",
    tech: ["TypeScript", "NLP", "React", "Node.js", "Flask", "PostgreSQL"],
    github: "https://github.com/SabbellaLaharika/MedEcho-Talk-Diagnose-Heal",
    demo: "https://med-echo-talk-diagnose-heal.vercel.app/",
  },
  {
    title: "Bank Account Management",
    image: "/projects/bank.png",
    description: "Bank Account Management API built using Event Sourcing and CQRS. Supports full transaction history and time-travel balance queries using PostgreSQL.",
    problem: "Traditional CRUD-based banking systems overwrite state on every update, making it impossible to reconstruct exact historical balances or audit transaction sequences. A single corrupted update can cascade data integrity failures with no recovery path.",
    challenge: "Implementing a true CQRS + Event Sourcing architecture with a clear separation between the Command Side (Command Handler → append-only Event Store) and the Query Side (Read Model Projections → PostgreSQL). The Event Bus needed to reliably transport domain events between both sides while maintaining consistency, and the system had to support time-travel queries without performance degradation on the read path.",
    highlight: "Achieved complete audit trail with an append-only Event Store — every financial transaction is immutable and replayable. Time-travel balance queries reconstruct exact account state at any historical point. The separated Command/Query architecture enables independent scaling of write-heavy transaction processing and read-heavy reporting workloads.",
    tech: ["TypeScript", "CQRS", "Event Sourcing", "PostgreSQL"],
    github: "https://github.com/SabbellaLaharika/Bank-Account-Management-System",
  },
  {
    title: "FtpStreamMonitor",
    image: "/projects/ftp.png",
    description: "Full-stack system that monitors an FTP server for file system changes and streams real-time updates to a responsive dashboard using WebSockets.",
    problem: "Standard FTP file monitoring relies on periodic polling, which introduces significant event latency — file changes can go undetected for minutes. Enterprise environments require instant awareness of file uploads, deletions, and modifications for compliance and operational continuity.",
    challenge: "Building a persistent File Monitoring Service that watches FTP server directories for changes and pushes events through a Node.js + WebSocket backend to a React frontend in real-time. Managing continuous WebSocket connections, handling reconnection logic, and maintaining accurate in-memory state of the file tree without message drops or stale data was the core engineering challenge.",
    highlight: "Achieved zero-drop real-time event streaming — file system changes on the FTP server are detected and displayed on the React dashboard within milliseconds via persistent WebSocket connections. The architecture cleanly separates the File Monitoring Service, Backend WebSocket relay, and Frontend visualization into independently testable layers.",
    tech: ["TypeScript", "WebSockets", "React", "Node.js"],
    github: "https://github.com/SabbellaLaharika/FtpStreamMonitor",
  },
  {
    title: "ConflictFree Versioned Docs",
    image: "/projects/docs.png",
    description: "Backend system for collaborative document management implementing optimistic concurrency control (OCC), revision history tracking, and full-text search.",
    problem: "In collaborative editing, multiple users frequently attempt to modify the same document simultaneously. Without proper concurrency control, last-write-wins semantics silently overwrite earlier changes, causing data loss and user frustration in production document systems.",
    challenge: "Implementing Optimistic Concurrency Control (OCC) within the Backend Service to detect and reject conflicting writes without locking. The system includes a Diff & Revision Handler that tracks every document version in MongoDB, a Search & Analytics Engine for full-text querying, and REST APIs consumed by both web applications and programmatic API clients — all built with Node.js, Express, and TypeScript.",
    highlight: "Mimics production-grade collaborative document platforms — every edit creates an immutable revision, enabling full version history, rollback, and diff comparison. The OCC engine prevents silent overwrites while keeping the system lock-free for high concurrency. Full-text search indexes documents, tags, and revision history in MongoDB for instant retrieval.",
    tech: ["TypeScript", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/SabbellaLaharika/ConflictFree-Versioned-Docs",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    image: "/projects/saas.png",
    description: "Production-ready Multi-Tenant SaaS Platform for Project & Task Management featuring complete data isolation, role-based access control, and containerization.",
    problem: "Multi-tenant platforms face severe data spillage risks — a single misconfigured query can expose Tenant A's data to Tenant B. Enterprise clients demand strict data isolation guarantees, granular role-based permissions, and audit trails, all within a cost-efficient shared infrastructure.",
    challenge: "Enforcing strict logical data isolation per tenant at the PostgreSQL database level, implementing JWT-based authentication with granular RBAC (Role-Based Access Control), and containerizing the entire stack with Docker + Docker Compose. The React 18 frontend connects via REST API with JWT Auth to the Node.js/Express backend, which includes a dedicated Multi-Tenant Isolation Layer. DevOps tooling includes Nginx reverse proxy and CI/CD pipelines.",
    highlight: "Production-ready architecture with zero cross-tenant data leakage — each tenant's data is logically isolated in PostgreSQL with tenant-scoped queries enforced at the middleware level. Full containerization with Docker Compose enables one-command deployment of frontend, backend, database, and Nginx proxy. RBAC supports Admin, Manager, and Member roles with fine-grained permissions.",
    tech: ["Node.js", "Express", "PostgreSQL", "React", "Docker", "Nginx"],
    github: "https://github.com/SabbellaLaharika/GPP-Task3-Multi-Tenant-SaaS-Platform-with-Project-Task-Management",
  },
  {
    title: "Event-Driven Tracking Service",
    image: "/projects/tracking.png",
    description: "Event-driven user activity tracking service featuring a REST ingestion API, asynchronous message processing, IP-based rate limiting, and persistent storage.",
    problem: "High-volume analytics tracking APIs frequently crash under peak load because synchronous request processing creates bottlenecks — every incoming event must be validated, processed, and persisted before the response can be sent. This blocking architecture fails at scale and offers no protection against malicious traffic spikes.",
    challenge: "Building a fully asynchronous pipeline where the API Ingestion Service (Node.js + Express) handles rate limiting, request validation, and Swagger/OpenAPI documentation, then publishes events to a RabbitMQ Message Broker with durable queues. The Consumer Worker Service processes events asynchronously with an Idempotency Handler and explicit ACK logic, persisting to MongoDB with userid and timestamp indexes. Both services run as separate Docker containers with health check endpoints and environment-based configuration.",
    highlight: "Achieved horizontally scalable event processing — the API Ingestion Service handles burst traffic with IP-based rate limiting while RabbitMQ absorbs load spikes via durable queues with prefetch:1 flow control. The Consumer Worker's idempotency handler guarantees exactly-once processing semantics. Full Docker Compose orchestration, automated Jest testing, and health monitoring endpoints make the system production-ready.",
    tech: ["JavaScript", "RabbitMQ", "Express", "Docker", "MongoDB"],
    github: "https://github.com/SabbellaLaharika/Event-Driven-User-Activity-Tracking-Service-with-RabbitMQ-and-Rate-Limiting",
  },
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const scrollRef = useRef(null);
  const detailRef = useRef(null);

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  // Scroll detail panel into view when opened
  useEffect(() => {
    if (selectedIndex !== null && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [selectedIndex]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950/50 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">My Work</h2>
            <h3 className="text-4xl font-bold">Featured Projects</h3>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href={process.env.NEXT_PUBLIC_PERSONAL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center"
            >
              View All Repositories <ExternalLink size={16} className="ml-2" />
            </motion.a>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all border border-black/10 dark:border-white/10"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all border border-black/10 dark:border-white/10"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, index) => {
            const isSelected = selectedIndex === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="snap-start shrink-0 cursor-pointer"
                style={{ width: "min(320px, 85vw)" }}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative h-full bg-white dark:bg-gray-900/60 border rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                      : "border-black/5 dark:border-white/10 hover:shadow-lg hover:border-black/15 dark:hover:border-white/20 hover:-translate-y-1"
                  }`}
                >
                  {/* Clean Image */}
                  <div className="w-full relative overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Title + Tech Below Image */}
                  <div className="p-5 flex flex-col gap-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-black/5 dark:bg-white/5 rounded-full text-[11px] text-gray-600 dark:text-gray-300 font-medium border border-black/5 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-black/5 dark:border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label={`${project.title} GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub size={18} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-primary hover:opacity-80 transition-opacity flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo <ExternalLink size={12} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Panel — Opens BELOW the carousel */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              ref={detailRef}
              key={selectedIndex}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-white dark:bg-gray-900/60 border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                      {selectedProject.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="shrink-0 ml-4 w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-black/10 dark:border-white/10"
                    aria-label="Close project details"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Detail Grid — Image left, Details right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Left — Image with lightbox */}
                  <div
                    className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/50 cursor-zoom-in group"
                    onClick={() => setZoomedImage({ src: selectedProject.image, title: selectedProject.title })}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                        <ZoomIn size={14} className="text-primary" /> View Full Image
                      </span>
                    </div>
                  </div>

                  {/* Right — Expanded Details */}
                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider block mb-1.5">
                        THE PROBLEM
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.problem}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider block mb-1.5">
                        ARCHITECTURE CHALLENGE
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.challenge}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1.5">
                        OUTCOME / METRIC
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProject.highlight}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-wider block mb-2">
                        TECH STACK
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs text-gray-700 dark:text-gray-300 border border-black/5 dark:border-white/5 font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-4 pt-4 border-t border-black/5 dark:border-white/5"
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white/10 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        <FaGithub size={16} /> View Code
                      </a>
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          Live Demo <ExternalLink size={14} />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
