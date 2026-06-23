"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data";
import ProjectCard from "@/components/cards/ProjectCard";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-4">
                Featured Projects
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                A selection of my recent work showcasing expertise across various technologies and domains.
              </p>
            </div>
            <Link href="/projects">
              <motion.div
                className="flex items-center gap-2 text-accent hover:gap-4 transition-all cursor-hover mt-4 md:mt-0"
                whileHover={{ x: 5 }}
              >
                <span className="font-heading font-semibold">View All Projects</span>
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
