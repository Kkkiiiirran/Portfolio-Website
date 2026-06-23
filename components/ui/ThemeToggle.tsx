"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-card border-2 border-border cursor-hover overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background Slider */}
      <motion.div
        className="absolute inset-0 bg-accent"
        initial={false}
        animate={{
          x: theme === "dark" ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Icons Container */}
      <div className="relative h-full flex items-center justify-between px-1">
        {/* Moon Icon (Dark Mode) */}
        <motion.div
          className="flex items-center justify-center w-5 h-5 z-10"
          animate={{
            opacity: theme === "dark" ? 1 : 0.4,
            scale: theme === "dark" ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={14} className="text-white" fill={theme === "dark" ? "white" : "none"} />
        </motion.div>

        {/* Sun Icon (Light Mode) */}
        <motion.div
          className="flex items-center justify-center w-5 h-5 z-10"
          animate={{
            opacity: theme === "light" ? 1 : 0.4,
            scale: theme === "light" ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={14} className="text-white" fill={theme === "light" ? "white" : "none"} />
        </motion.div>
      </div>
    </motion.button>
  );
}
