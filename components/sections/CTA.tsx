"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/animations/Reveal";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let's Build Something Amazing Together
            </motion.h2>

            <motion.p
              className="text-xl text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <MagneticButton>Get In Touch</MagneticButton>
              </Link>
              <Link href="/projects">
                <MagneticButton className="bg-card border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-lg hover:shadow-xl">
                  View My Work
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <div className="relative pt-16">
              <motion.div
                className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-purple-600 opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
