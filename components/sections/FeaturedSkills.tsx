"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skills } from "@/data";
import SkillNode from "@/components/cards/SkillNode";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedSkills() {
  const featuredSkills = skills.slice(0, 18);
  const reelSkills = [...featuredSkills, ...featuredSkills];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="home-section-title">
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

        {/* Skills Reel */}
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <div className="skills-reel flex w-max gap-4">
            {reelSkills.map((skill, index) => (
              <SkillNode
                key={`${skill.id}-${index}`}
                skill={skill}
                index={index % featuredSkills.length}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
