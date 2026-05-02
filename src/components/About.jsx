"use client";

import { motion } from "framer-motion";

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
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Driven by Curiosity, Defined by Code</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
              I'm a dedicated Software Developer based in India, with a deep passion for engineering 
              scalable, efficient software solutions. My journey in technology is driven by a constant 
              desire to solve complex problems and learn the latest industry standards.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
              Whether it's developing robust backend architectures, optimizing algorithms, or creating 
              user-facing applications, I thrive on the challenge of building reliable systems from the ground up. 
              Currently, I'm focusing on mastering distributed systems, modern software design patterns, 
              and scalable cloud architectures.
            </p>
            <div className="flex justify-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-2xl text-center border border-white/5 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-4xl font-bold text-primary mb-2">2+</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-8 rounded-2xl text-center border border-white/5 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-4xl font-bold text-primary mb-2">18+</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Built</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-8 rounded-2xl text-center border border-white/5 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-4xl font-bold text-primary mb-2">CSE</h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium">B.Tech Degree</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
