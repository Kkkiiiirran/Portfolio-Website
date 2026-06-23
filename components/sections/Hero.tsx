"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/animations/Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orb */}
      <motion.div
        className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <Reveal>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="gradient-text">Building</span>
                <br />
                <span className="gradient-text">Intelligent</span>
                <br />
                <span className="gradient-text">Solutions</span>
              </motion.h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
                Software Engineering Intern at Cisco Systems specializing in AI/ML, backend development, and competitive programming.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <MagneticButton>View Projects</MagneticButton>
                </Link>
                <Link href="/contact">
                  <MagneticButton className="bg-card-hover hover:bg-card border border-border">
                    Contact Me
                  </MagneticButton>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side */}
          <Reveal delay={0.6}>
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="relative w-full aspect-square max-w-lg mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-purple-600 to-blue-600 opacity-30 blur-3xl animate-pulse-glow" />
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl bg-gradient-to-br from-accent/20 to-purple-600/20">
                  <img
                    src="/images/profile/hero.png"
                    alt="Kiranpreet Kaur"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                </div>

                {/* Floating Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-accent/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
