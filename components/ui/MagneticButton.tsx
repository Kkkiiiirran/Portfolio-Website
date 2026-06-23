"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({ children, className, onClick, href }: MagneticButtonProps) {
  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      {...props}
      className={cn(
        "relative px-8 py-4 bg-accent hover:bg-accent-hover text-white font-heading font-semibold rounded-lg cursor-hover overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </Component>
  );
}
