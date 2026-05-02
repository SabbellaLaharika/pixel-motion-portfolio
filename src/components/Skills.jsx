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
              className="glass p-8 rounded-3xl hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{category.title}</h4>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
