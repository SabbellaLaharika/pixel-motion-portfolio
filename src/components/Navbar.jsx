"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
          scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6",
          isOpen && "bg-transparent shadow-none" // Clear background when menu is open
        )}
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center relative z-[110]">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
            onClick={() => setIsOpen(false)}
          >
            SL<span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay - Moved outside <nav> for cleaner z-indexing */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] md:hidden bg-white dark:bg-black flex flex-col items-center justify-center pt-20"
          >
            {/* Background pattern for premium feel (Requirements #1 & #4) */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,#000_1.5px,transparent_0)] dark:bg-[radial-gradient(circle_at_center,#fff_1.5px,transparent_0)] [background-size:24px_24px]" />
            
            <div className="flex flex-col items-center space-y-10 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  aria-label={`Navigate to ${link.name}`}
                  className="text-4xl font-bold hover:text-primary transition-colors active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Social icons in menu for better accessibility */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-16 flex space-x-8 text-gray-400 dark:text-gray-600"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold">
                Sabbella Laharika &copy; 2024
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
