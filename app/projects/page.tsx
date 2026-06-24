"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/animations/Reveal";

const categories = ["All", "Web", "AI", "SaaS", "Mobile", "Open Source"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h1>
            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A showcase of my work across various technologies and domains.
            </motion.p>
          </div>
        </Reveal>

        {/* Filters */}
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

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
