"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
          left: "10%",
          top: "20%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)",
          right: "10%",
          top: "40%",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Scan Lines Effect */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(124, 58, 237, 0.5) 2px, rgba(124, 58, 237, 0.5) 4px)",
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute border border-accent/10 rounded-lg"
        style={{
          width: 200,
          height: 200,
          left: "5%",
          bottom: "10%",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute border border-accent/10"
        style={{
          width: 150,
          height: 150,
          right: "8%",
          top: "15%",
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing Lines */}
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        style={{
          width: "80%",
          left: "10%",
          top: "30%",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleX: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        style={{
          height: "60%",
          left: "70%",
          top: "20%",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
