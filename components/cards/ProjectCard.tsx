"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative glass rounded-2xl overflow-hidden cursor-hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* Image Placeholder */}
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-heading font-bold text-white/5">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            {project.category}
          </span>
          <span className="text-text-secondary text-xs">{project.duration}</span>
        </div>

        {/* Title & Description */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-secondary text-sm line-clamp-2">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-card-hover text-text-secondary text-xs rounded border border-border"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-1 text-text-secondary text-xs">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-hover"
              whileHover={{ x: 3 }}
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-hover"
              whileHover={{ x: 3 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
      </div>
    </motion.div>
  );
}
