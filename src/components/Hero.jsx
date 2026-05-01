"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Parallax Elements */}
      <div className="opacity-10 dark:opacity-100 transition-opacity duration-500">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
      </div>
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            Available for Opportunities
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            I'm <span className="text-gradient">Sabbella Laharika</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            Backend & Systems Engineer specializing in robust, scalable architectures. 
            Passionate about Distributed Systems, Event-Driven Design, and High-Performance Engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton 
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:opacity-90 text-white rounded-xl font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-opacity shadow-lg shadow-primary/25"
            >
              <span>View My Work</span> <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl font-semibold flex items-center justify-center whitespace-nowrap transition-colors"
            >
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block w-3/4 max-w-sm mx-auto"
        >
          <div className="aspect-[4/5] relative z-10 rounded-3xl overflow-hidden border-8 border-white/50 dark:border-white/10 shadow-2xl group">
            <Image 
              src="/Photo1.jpg"
              alt="Sabbella Laharika"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 dark:opacity-100" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl -z-10 rounded-[3rem]" />
        </motion.div>
      </div>
    </section>
  );
}
