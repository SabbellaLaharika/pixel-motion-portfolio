"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const colors = [
  { name: "Blue", value: "blue", bg: "bg-blue-500" },
  { name: "Green", value: "green", bg: "bg-emerald-500" },
  { name: "Purple", value: "purple", bg: "bg-purple-500" },
  { name: "Red", value: "red", bg: "bg-red-500" },
  { name: "Orange", value: "orange", bg: "bg-orange-500" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("blue");

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem("theme-color") || "blue";
    setActiveColor(savedColor);
    document.documentElement.setAttribute("data-color", savedColor);
  }, []);

  const handleColorChange = (color) => {
    setActiveColor(color);
    localStorage.setItem("theme-color", color);
    document.documentElement.setAttribute("data-color", color);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Toggle theme menu"
        >
          <Palette size={20} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-16 right-0 glass p-4 rounded-2xl shadow-xl w-48 border border-white/10"
            >
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-500/20">
                <span className="text-sm font-semibold">Theme</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              {/* Light/Dark Toggle */}
              <div className="flex bg-black/20 rounded-lg p-1 mb-4 border border-white/5">
                <button
                  onClick={() => setTheme("light")}
                  className={cn(
                    "flex-1 flex items-center justify-center py-2 rounded-md transition-all",
                    resolvedTheme === "light" ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-white"
                  )}
                >
                  <Sun size={14} className="mr-2" /> <span className="text-xs font-medium">Light</span>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "flex-1 flex items-center justify-center py-2 rounded-md transition-all",
                    resolvedTheme === "dark" ? "bg-gray-800 text-white shadow-sm" : "text-gray-400 hover:text-white"
                  )}
                >
                  <Moon size={14} className="mr-2" /> <span className="text-xs font-medium">Dark</span>
                </button>
              </div>

              {/* Color Picker */}
              <div className="space-y-2">
                <span className="text-xs text-gray-400 font-medium">Color Accent</span>
                <div className="flex justify-between">
                  {colors.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => handleColorChange(c.value)}
                      className={cn(
                        "w-6 h-6 rounded-full transition-transform hover:scale-110",
                        c.bg,
                        activeColor === c.value ? "ring-2 ring-offset-2 ring-offset-background ring-primary scale-110" : ""
                      )}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
