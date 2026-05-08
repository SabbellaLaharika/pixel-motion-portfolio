"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, ZoomIn, X, ChevronLeft, ChevronRight, Zap, 
  ArrowUpRight, AlertTriangle, Hammer, LineChart, Layers, Terminal 
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedEcho: Talk, Diagnose, Heal",
    shortTitle: "MedEcho AI Platform",
    category: "AI System",
    impact: "AI-powered multilingual diagnostic reporting pipeline",
    image: "/projects/medecho.png",
    description: "Designed a high-throughput healthcare diagnostic pipeline leveraging NLP and Speech-to-Text for automated clinical intake.",
    problem: [
      "Fragmented healthcare diagnostic workflows",
      "High latency in clinical intake processes",
      "Error-prone manual symptom tracking"
    ],
    challenge: [
      "Architecting unified microservices pipeline",
      "Implementing Speech-to-Text translation",
      "Maintaining HIPAA-standard data isolation"
    ],
    highlight: [
      "100% Automated Intake Flow",
      "Multilingual NLP Support",
      "Low-latency Clinical Reports"
    ],
    engineeringHighlights: ["Asynchronous AI/ML Pipeline", "NLP Entity Extraction", "HIPAA-Compliant Data Flow", "Speech-to-Text Integration"],
    tech: ["TypeScript", "NLP", "React", "Node.js", "Flask", "PostgreSQL"],
    objectPosition: "50% 30%",
    github: "https://github.com/SabbellaLaharika/MedEcho-Talk-Diagnose-Heal",
    demo: "https://med-echo-talk-diagnose-heal.vercel.app/",
  },
  {
    title: "Bank Account Management",
    shortTitle: "CQRS Banking System",
    category: "Distributed System",
    impact: "CQRS + Event Sourcing architecture for audit-safe banking workflows",
    image: "/projects/bank.png",
    description: "Implemented a mission-critical banking API using CQRS and Event Sourcing to ensure 100% auditability and state reconstruction.",
    problem: [
      "State overwriting in traditional CRUD systems",
      "Impossible historical balance reconstructions",
      "Lack of audit-safe compliance logs"
    ],
    challenge: [
      "Designing distributed CQRS architecture",
      "Implementing append-only Event Store",
      "Atomic state reconstruction logic"
    ],
    highlight: [
      "Full Audit Traceability",
      "Point-in-time Reconstruction",
      "Race-condition Elimination"
    ],
    engineeringHighlights: ["CQRS + Event Sourcing", "Time-Travel State Reconstruction", "Append-only Event Store", "Atomic Domain Events"],
    tech: ["TypeScript", "CQRS", "Event Sourcing", "PostgreSQL"],
    objectPosition: "50% 50%",
    github: "https://github.com/SabbellaLaharika/Bank-Account-Management-System",
  },
  {
    title: "FtpStreamMonitor",
    shortTitle: "FTP Stream Monitor",
    category: "Real-Time",
    impact: "Real-time FTP monitoring with WebSocket streaming",
    image: "/projects/ftp.png",
    description: "Built real-time streaming infrastructure for FTP file monitoring using persistent WebSockets and low-latency event propagation.",
    problem: [
      "High event latency in FTP polling",
      "Potential missed file updates during spikes",
      "Significant infrastructure polling overhead"
    ],
    challenge: [
      "Maintaining persistent WebSocket connections",
      "Ensuring idempotent event propagation",
      "Handling low-latency streaming reliability"
    ],
    highlight: [
      "Minutes → Milliseconds Latency",
      "100% Real-Time Visibility",
      "Operational State Consistency"
    ],
    engineeringHighlights: ["Real-time WebSocket Streaming", "Stateful Event Propagation", "Idempotent Event Handling", "Low-Latency File Monitoring"],
    tech: ["TypeScript", "WebSockets", "React", "Node.js"],
    objectPosition: "50% 40%",
    github: "https://github.com/SabbellaLaharika/FtpStreamMonitor",
  },
  {
    title: "ConflictFree Versioned Docs",
    shortTitle: "ConflictFree Docs",
    category: "System Design",
    impact: "Optimistic concurrency control for collaborative editing",
    image: "/projects/docs.png",
    description: "Designed a scalable document management system with Optimistic Concurrency Control (OCC) and atomic revision history.",
    problem: [
      "'Last-write-wins' semantics data loss",
      "Pessimistic locking performance bottlenecks",
      "Manual conflict resolution overhead"
    ],
    challenge: [
      "Lock-free OCC engine design",
      "Atomic revision history tracking",
      "Scalable multi-version storage strategy"
    ],
    highlight: [
      "Zero Silent Overwrites",
      "High-Concurrency Throughput",
      "Full Version Rollback Capability"
    ],
    engineeringHighlights: ["Optimistic Concurrency Control", "Atomic Revision Tracking", "Lock-free Architecture", "Full-text Search Indexing"],
    tech: ["TypeScript", "MongoDB", "Express", "Node.js"],
    objectPosition: "50% 50%",
    github: "https://github.com/SabbellaLaharika/ConflictFree-Versioned-Docs",
  },
  {
    title: "Multi-Tenant SaaS Platform",
    shortTitle: "Multi-Tenant SaaS",
    category: "SaaS Platform",
    impact: "Scalable tenant-isolated RBAC SaaS architecture",
    image: "/projects/saas.png",
    description: "Architected a multi-tenant enterprise platform with strict RBAC isolation and containerized microservice deployment.",
    problem: [
      "Cross-tenant data leakage vulnerability",
      "Granular access control requirements",
      "Deployment inconsistency across environments"
    ],
    challenge: [
      "Tenant-aware middleware isolation layer",
      "Granular RBAC permission engine",
      "Containerized microservice orchestration"
    ],
    highlight: [
      "Zero Leakage Security Guarantee",
      "Enterprise-grade Isolation",
      "100% Reproducible CI/CD Pipelines"
    ],
    engineeringHighlights: ["Multi-tenant Data Isolation", "Granular RBAC Layer", "Containerized Deployment", "Logical Schema Partitioning"],
    tech: ["Node.js", "Express", "PostgreSQL", "React", "Docker", "Nginx"],
    objectPosition: "50% 45%",
    github: "https://github.com/SabbellaLaharika/GPP-Task3-Multi-Tenant-SaaS-Platform-with-Project-Task-Management",
  },
  {
    title: "Event-Driven Tracking Service",
    shortTitle: "Event Tracking Pipeline",
    category: "Event-Driven",
    impact: "RabbitMQ-powered asynchronous activity ingestion pipeline",
    image: "/projects/tracking.png",
    description: "Designed a scalable event-driven pipeline for high-volume activity tracking using RabbitMQ and asynchronous consumer workers.",
    problem: [
      "API instability under peak burst loads",
      "Blocking synchronous request processing",
      "System-wide service degradation spikes"
    ],
    challenge: [
      "RabbitMQ asynchronous pipeline design",
      "Idempotent consumer event handlers",
      "Durable message queue persistence"
    ],
    highlight: [
      "10x Burst Traffic Absorption",
      "Decoupled Ingestion Path",
      "Atomic Message Loss Prevention"
    ],
    engineeringHighlights: ["RabbitMQ Async Pipelines", "Idempotent Consumer Workers", "Rate-Limited API Ingestion", "Scalable Message Queuing"],
    tech: ["JavaScript", "RabbitMQ", "Express", "Docker", "MongoDB"],
    objectPosition: "50% 50%",
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

  useEffect(() => {
    if (selectedIndex !== null && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [selectedIndex]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#f8fafc] dark:bg-black transition-colors overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Engineering Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Case Studies</h3>
          </div>
          <div className="flex items-center gap-4">
            <motion.a
              href={process.env.NEXT_PUBLIC_PERSONAL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors flex items-center group"
            >
              System Architecture Repos <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all border border-black/5 dark:border-white/10 shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all border border-black/10 dark:border-white/10 shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel - Improved Snap & Swipe */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-2 -mx-2 touch-pan-x"
          style={{ scrollPadding: "24px" }}
        >
          {projects.map((project, index) => {
            const isSelected = selectedIndex === index;
            const visibleTech = project.tech.slice(0, 4);
            const extraTechCount = project.tech.length - 4;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start shrink-0 cursor-pointer"
                style={{ width: "min(380px, 88vw)" }}
                onClick={() => handleCardClick(index)}
              >
                {/* Rotating Border Wrapper */}
                <div
                  className={`group relative h-full p-[2px] rounded-[2rem] overflow-hidden transition-all duration-500 ${
                    isSelected ? "ring-4 ring-primary/10 shadow-2xl shadow-primary/20" : "hover:shadow-2xl"
                  }`}
                >
                  {/* Rotating Gradient Layer */}
                  <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    <div className="absolute inset-[-150%] animate-rotate bg-[conic-gradient(from_0deg,transparent_20%,var(--primary)_50%,transparent_80%)]" />
                  </div>

                  {/* Main Card Content Layer */}
                  <div className="relative z-10 h-full w-full bg-white dark:bg-gray-950 border border-black/[0.05] dark:border-white/5 rounded-[1.95rem] flex flex-col transition-all duration-500">
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-white/95 dark:bg-black/60 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-7 pb-4">
                      <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                        {project.shortTitle}
                      </h4>
                      <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 leading-tight uppercase tracking-wider line-clamp-1">
                        {project.impact}
                      </p>
                    </div>

                    {/* Architecture Image - Tightened height & focused crop */}
                    <div className="mx-7 relative aspect-[1.95/1] overflow-hidden rounded-2xl bg-gray-50 dark:bg-black/40 border border-black/[0.08] dark:border-white/[0.08] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ objectPosition: project.objectPosition || "center" }}
                        className="w-full h-full object-cover scale-[1.25] transition-transform duration-700 group-hover:scale-[1.3] opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/[0.05] dark:from-black/[0.2] to-transparent pointer-events-none" />
                      
                      {/* Desktop Hover Indicator */}
                      <div className="hidden md:flex absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary bg-white/95 dark:bg-black/90 px-4 py-2 rounded-xl shadow-xl border border-primary/10">
                          Inspect Architecture <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="p-7 pt-5 mt-auto">
                      {/* Tech Stack - Tightened Spacing */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-5">
                        {visibleTech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-gray-50 dark:bg-white/5 text-[9px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-tighter rounded-md border border-black/5 dark:border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                        {extraTechCount > 0 && (
                          <span className="text-[9px] font-black text-gray-400 dark:text-gray-600 ml-1">
                            +{extraTechCount}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                        {/* Mobile Visible Buttons */}
                        <div className="flex items-center gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors p-2 -ml-2"
                            aria-label={`${project.title} GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={20} />
                          </a>
                          {/* Mobile Specific Demo Button */}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="md:hidden text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-3 py-1.5 rounded-lg bg-primary/5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                        
                        {/* Desktop Text Link */}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex text-[10px] font-black uppercase tracking-[0.2em] text-primary items-center group/demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live System <ExternalLink size={14} className="ml-2 group-hover/demo:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detail Panel — Final Polish Refinements */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              ref={detailRef}
              key={selectedIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <div className="bg-white dark:bg-gray-900/60 border border-black/[0.05] dark:border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-5 md:p-12 shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                
                {/* Header Section - Tightened Spacing */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 mb-8 md:mb-12 pb-8 md:pb-10 border-b border-black/5 dark:border-white/5">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-3 mb-4 md:mb-5">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg border border-primary/20">
                        Case Study
                      </span>
                      <div className="h-1 w-1 rounded-full bg-gray-400" />
                      <span className="text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
                        Production Architecture
                      </span>
                    </div>
                    <h4 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                      {selectedProject.title}
                    </h4>
                    <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-semibold leading-relaxed max-w-3xl">
                      {selectedProject.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="md:absolute top-8 right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all border border-black/5 dark:border-white/10 group shadow-lg"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                  {/* Left Column: Architecture Visuals - Enlarged & Balanced */}
                  <div className="lg:col-span-7 space-y-8 md:space-y-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl cursor-zoom-in group bg-gray-50 dark:bg-black/20"
                      onClick={() => setZoomedImage({ src: selectedProject.image, title: selectedProject.title })}
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                        <div className="bg-white/95 dark:bg-black/90 p-4 md:p-5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-2xl flex items-center gap-3 border border-primary/20">
                          <ZoomIn size={18} className="text-primary" />
                          <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Enlarge Diagram</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Engineering Highlights - 2-Column Mobile Grid & Denser */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-black/[0.05] dark:border-white/[0.05] shadow-inner">
                      <div className="flex items-center gap-3 mb-5 md:mb-6">
                        <Zap size={16} className="text-primary fill-primary/20" />
                        <h5 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Engineering Highlights</h5>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-3">
                        {selectedProject.engineeringHighlights.map((highlight, i) => (
                          <div key={highlight} className="flex items-center gap-2 md:gap-3 px-3 py-2.5 md:px-4 md:py-3 bg-white dark:bg-gray-900/50 rounded-xl border border-black/[0.03] dark:border-white/[0.03] shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                            <span className="text-[10px] md:text-[11px] font-bold text-gray-700 dark:text-gray-300 tracking-tight line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Case Study - Tightened Spacing & Reduced Width */}
                  <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
                    <div className="space-y-8 md:space-y-10">
                      <section className="relative">
                        <h5 className="text-[10px] font-black text-red-500/80 dark:text-red-400/80 uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-3">
                          <AlertTriangle size={14} /> The Problem
                        </h5>
                        <ul className="space-y-2.5 md:space-y-3.5 max-w-lg">
                          {selectedProject.problem.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3.5 text-[13px] md:text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-gray-300 dark:bg-gray-700" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section className="relative">
                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-3">
                          <Hammer size={14} /> Architecture Challenge
                        </h5>
                        <ul className="space-y-2.5 md:space-y-3.5 max-w-lg">
                          {selectedProject.challenge.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3.5 text-[13px] md:text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary/30" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Outcome Section - More Stat-Like */}
                      <section className="p-6 md:p-8 bg-primary/[0.04] dark:bg-primary/[0.06] rounded-[1.5rem] md:rounded-[2rem] border border-primary/10 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <LineChart size={80} className="text-primary" />
                        </div>
                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6 md:mb-8 flex items-center gap-3">
                          <LineChart size={14} /> Outcome / Metric
                        </h5>
                        <div className="space-y-5 md:space-y-6">
                          {selectedProject.highlight.map((metric, i) => (
                            <div key={i} className="relative pl-5 border-l-2 border-primary/20">
                              <p className="text-lg md:text-2xl text-gray-900 dark:text-white font-black tracking-tight leading-none mb-1">
                                {metric}
                              </p>
                              {i === 0 && <span className="text-[9px] font-bold text-primary/60 uppercase">Primary KPI</span>}
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <div className="pt-2">
                      <h5 className="text-[10px] font-black text-gray-900 dark:text-white uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
                        <Layers size={14} /> Stack
                      </h5>
                      <div className="flex flex-wrap gap-2 md:gap-2.5">
                        {selectedProject.tech.map((t) => (
                          <span 
                            key={t} 
                            className="px-3 py-2 md:px-4 md:py-2.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest border border-black/[0.05] dark:border-white/[0.05]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Refined Hierarchy */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 mt-auto">
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-[2] flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-primary text-white rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:shadow-2xl transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
                        >
                          Launch Production <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-transparent dark:bg-white/5 text-gray-700 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-50 dark:hover:bg-white/10 transition-all active:scale-[0.98]"
                      >
                        <FaGithub size={20} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
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
                className="w-auto h-auto max-w-full max-h-[88vh] object-contain rounded-3xl shadow-3xl border border-white/10"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-4 md:p-5 backdrop-blur-md transition-all border border-white/10 flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
