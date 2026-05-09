"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950/50 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Driven by Curiosity, Defined by Code</h3>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Avatar / Photo Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 group"
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/Photo2.jpg"
                  alt="Sabbella Laharika"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-accent blur-2xl opacity-30 dark:opacity-45 rounded-full -z-10 animate-pulse" />
            </motion.div>

            {/* Text Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a dedicated Software Developer based in India, with a deep passion for engineering 
                scalable, efficient software solutions. My journey in technology is driven by a constant 
                desire to solve complex problems and learn the latest industry standards.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether it's developing robust backend architectures, optimizing algorithms, or creating 
                user-facing applications, I thrive on the challenge of building reliable systems from the ground up. 
                Currently, I'm focusing on mastering distributed systems, modern software design patterns, 
                and scalable cloud architectures.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="/Sabbella%20Laharika%20Resume%20QR.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:opacity-90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity shadow-lg shadow-primary/25"
                >
                  View My Resume
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group glass p-8 rounded-3xl text-center border border-black/[0.05] dark:border-white/5 hover:-translate-y-1 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <h4 className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">2+</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 dark:text-gray-500 mb-1">Industry Standard</p>
              <p className="text-gray-900 dark:text-gray-300 font-bold">Years Experience</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group glass p-8 rounded-3xl text-center border border-black/[0.05] dark:border-white/5 hover:-translate-y-1 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <h4 className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">18+</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 dark:text-gray-500 mb-1">Production Level</p>
              <p className="text-gray-900 dark:text-gray-300 font-bold">Systems Built</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group glass p-8 rounded-3xl text-center border border-black/[0.05] dark:border-white/5 hover:-translate-y-1 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <h4 className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">CSE</h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 dark:text-gray-500 mb-1">Academic Foundation</p>
              <p className="text-gray-900 dark:text-gray-300 font-bold">B.Tech Degree</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
