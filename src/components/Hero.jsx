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
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Software Developer specializing in building robust, scalable solutions. 
            Passionate about writing clean, efficient code to solve complex engineering challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <MagneticButton 
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center transition-colors shadow-lg shadow-primary/25"
            >
              View My Work <ArrowRight className="ml-2" size={18} />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-8 py-4 glass hover:bg-white/10 rounded-xl font-semibold flex items-center justify-center transition-colors"
            >
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image 
              src="/Photo1.jpg"
              alt="Sabbella Laharika"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
