"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";
import SkillNode from "@/components/cards/SkillNode";
import Reveal from "@/components/animations/Reveal";

const categories = ["All", "Frontend", "Backend", "Database", "Cloud", "DevOps", "AI", "Tools", "Languages"];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Group skills by category for better organization
  const groupedSkills = categories.slice(1).reduce((acc, category) => {
    acc[category] = skills.filter((s) => s.category === category);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-heading font-bold gradient-text mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Skills & Technologies
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A comprehensive view of my technical expertise and proficiencies.
            </motion.p>
          </div>
        </Reveal>

        {/* Category Filter */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-heading font-semibold transition-all cursor-hover ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-text-secondary hover:text-white hover:border-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Skills Display */}
        {activeCategory === "All" ? (
          // Show grouped by category
          <div className="space-y-16">
            {Object.entries(groupedSkills).map(([category, categorySkills], catIndex) => (
              <Reveal key={category} delay={catIndex * 0.1}>
                <div>
                  <h2 className="text-3xl font-heading font-bold gradient-text mb-8">
                    {category}
                  </h2>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                    {categorySkills.map((skill, index) => (
                      <SkillNode key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          // Show filtered skills
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {filteredSkills.map((skill, index) => (
              <SkillNode key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No skills found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
