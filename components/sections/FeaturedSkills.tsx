"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skills } from "@/data";
import SkillNode from "@/components/cards/SkillNode";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedSkills() {
  const featuredSkills = skills.slice(0, 12);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-4">
                Technical Skills
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Expertise across the full stack and modern development ecosystem.
              </p>
            </div>
            <Link href="/skills">
              <motion.div
                className="flex items-center gap-2 text-accent hover:gap-4 transition-all cursor-hover mt-4 md:mt-0"
                whileHover={{ x: 5 }}
              >
                <span className="font-heading font-semibold">View All Skills</span>
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {featuredSkills.map((skill, index) => (
            <SkillNode key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
