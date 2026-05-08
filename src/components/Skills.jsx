"use client";

import { motion } from "framer-motion";
import {
  Globe, Server, Database, Code2,
  Cpu, Layout, Smartphone, Cloud
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & Core",
    icon: <Layout className="text-blue-400" />,
    skills: ["TypeScript / JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="text-green-400" />,
    skills: ["Node.js & Express", "Java & Spring Boot", "Python", "WebSockets & REST"],
  },
  {
    title: "Databases & Brokers",
    icon: <Database className="text-yellow-400" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ & Apache Kafka"],
  },
  {
    title: "Architecture & DevOps",
    icon: <Cloud className="text-purple-400" />,
    skills: ["Event Sourcing & CQRS", "Microservices", "Docker", "Machine Learning (NLP)"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">My Expertise</h2>
          <h3 className="text-4xl font-bold">Technical Skills</h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative p-[2px] rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Rotating Border Trace */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-150%] animate-rotate bg-[conic-gradient(from_0deg,transparent_20%,var(--primary)_50%,transparent_80%)] opacity-40" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full w-full bg-white dark:bg-gray-950 border border-black/[0.03] dark:border-white/5 p-8 rounded-[1.95rem] flex flex-col transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-sm border border-black/[0.03] dark:border-white/[0.03]">
                  {category.icon}
                </div>
                <h4 className="text-xl font-black mb-6 tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors">{category.title}</h4>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-600 dark:text-gray-400 text-[13px] font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-4 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
