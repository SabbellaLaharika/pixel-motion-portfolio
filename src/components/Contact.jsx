"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] overflow-hidden p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-8 text-lg">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:lharika.sabbella@gmail.com"
                  className="flex items-center group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 group-hover:bg-primary transition-colors">
                    <Mail size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Me</p>
                    <p className="text-white font-medium">lharika.sabbella@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/SabbellaLaharika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                      <FaGithub size={18} />
                    </div>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabbella-laharika/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-900/30 flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                      <FaLinkedin size={18} className="text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-primary/20"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
