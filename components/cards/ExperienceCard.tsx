"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="relative pl-8 pb-12 border-l-2 border-border"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-accent animate-pulse-glow" />
      </motion.div>

      {/* Content */}
      <div className="glass rounded-xl p-6 space-y-4 cursor-hover group hover:border-accent/30 transition-all duration-500">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors">{experience.position}</h3>
            <p className="text-accent font-medium">{experience.company}</p>
          </div>
          <span className="text-text-secondary text-sm">{experience.duration}</span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="space-y-2">
          <h4 className="font-heading font-semibold text-sm">Key Achievements:</h4>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-text-secondary text-sm flex items-start gap-2"
              >
                <span className="text-accent mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {experience.links && experience.links.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-heading font-semibold text-sm">Featured Articles:</h4>
            <div className="flex flex-col gap-2">
              {experience.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-card-hover text-text-secondary text-xs rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
