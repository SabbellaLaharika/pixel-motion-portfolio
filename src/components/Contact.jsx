"use client";

import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      console.error("EmailJS credentials are not set in .env.local");
      setStatus("error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }, (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

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
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-4 md:space-y-6">
                {/* Email Card */}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`}
                  className="flex items-center group p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-2xl transition-all overflow-hidden border border-transparent hover:border-black/5 dark:hover:border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 shrink-0 group-hover:bg-primary transition-colors">
                    <Mail size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-0.5">Email Me</p>
                    <p className="text-gray-900 dark:text-white font-semibold text-[clamp(0.85rem,2.5vw,1rem)] break-all leading-tight">
                      {process.env.NEXT_PUBLIC_PERSONAL_EMAIL}
                    </p>
                  </div>
                </a>

                {/* Call / WhatsApp Card */}
                <div
                  className="flex items-center group p-4 bg-black/5 dark:bg-white/5 rounded-2xl transition-all overflow-hidden border border-transparent hover:border-black/5 dark:hover:border-white/10"
                >
                  <a 
                    href="tel:+919866984678"
                    className="flex items-center flex-1 min-w-0"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mr-4 shrink-0 group-hover:bg-green-500 transition-colors">
                      <Phone size={20} className="text-green-500 group-hover:text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-0.5">Call / WhatsApp</p>
                      <p className="text-gray-900 dark:text-white font-semibold text-[clamp(0.9rem,2.5vw,1.1rem)] leading-tight tracking-tight">
                        +91 9866984678
                      </p>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/919866984678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-600/20 flex items-center justify-center hover:bg-green-600 transition-colors group/wa shrink-0 ml-3"
                  >
                    <FaWhatsapp size={22} className="text-green-600 group-hover/wa:text-white transition-all transform group-hover/wa:scale-110" />
                  </a>
                </div>

                {/* GitHub & LinkedIn Row */}
                <div className="flex flex-row gap-3 md:gap-4">
                  <a
                    href={process.env.NEXT_PUBLIC_PERSONAL_GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center group p-3 md:p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-2xl transition-all border border-transparent hover:border-black/5 dark:hover:border-white/10"
                  >
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gray-800 flex items-center justify-center mr-3 md:mr-4 group-hover:bg-gray-700 transition-colors shrink-0">
                      <FaGithub size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[clamp(0.8rem,2vw,0.95rem)] font-bold text-gray-700 dark:text-gray-200">GitHub</span>
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_PERSONAL_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center group p-3 md:p-4 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-2xl transition-all border border-transparent hover:border-black/5 dark:hover:border-white/10"
                  >
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-blue-900/30 flex items-center justify-center mr-3 md:mr-4 group-hover:bg-blue-600 transition-colors shrink-0">
                      <FaLinkedin size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[clamp(0.8rem,2vw,0.95rem)] font-bold text-gray-700 dark:text-gray-200">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              ref={form}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={sendEmail}
            >
              <input type="hidden" name="to_name" value="Laharika" />
              <input type="hidden" name="subject" value="New Message from Pixel-Motion Portfolio" />
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-400">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-lg ${
                  status === "success" 
                    ? "bg-green-500 text-white" 
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-primary text-white hover:opacity-90 shadow-primary/20"
                }`}
              >
                {status === "loading" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>Sent Successfully <CheckCircle size={18} className="ml-2" /></>
                ) : status === "error" ? (
                  <>Failed to Send <AlertCircle size={18} className="ml-2" /></>
                ) : (
                  <>Send Message <Send size={18} className="ml-2" /></>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
