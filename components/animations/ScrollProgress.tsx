"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
