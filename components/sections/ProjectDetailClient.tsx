"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="pt-32 pb-20">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Back Button */}
        <Reveal>
          <Link href="/projects">
            <motion.div
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8 cursor-hover"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </motion.div>
          </Link>
        </Reveal>

        {/* Hero Section */}
        <div className="mb-16">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-accent/20 text-accent text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className="text-text-secondary text-sm">{project.duration}</span>
                </div>
                <h1 className="page-title">
                  {project.title}
                </h1>
                <p className="page-subtitle mx-0 max-w-2xl">{project.description}</p>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <MagneticButton href={project.githubUrl} className="flex items-center gap-2">
                    <Github size={20} />
                    Code
                  </MagneticButton>
                )}
                {project.liveUrl && (
                  <MagneticButton href={project.liveUrl} className="flex items-center gap-2">
                    <ExternalLink size={20} />
                    Live Demo
                  </MagneticButton>
                )}
              </div>
            </div>
          </Reveal>

          {/* Hero Image Placeholder */}
          <Reveal delay={0.2}>
            <div className="media-frame max-w-4xl mx-auto">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-9xl font-heading font-bold text-white/5">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <Reveal>
              <GlassCard>
                <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
                <p className="text-text-secondary leading-relaxed">{project.longDescription}</p>
              </GlassCard>
            </Reveal>

            {/* Problem */}
            {project.problem && (
              <Reveal>
                <GlassCard>
                  <h2 className="text-2xl font-heading font-bold mb-4">The Problem</h2>
                  <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                </GlassCard>
              </Reveal>
            )}

            {/* Solution */}
            {project.solution && (
              <Reveal>
                <GlassCard>
                  <h2 className="text-2xl font-heading font-bold mb-4">The Solution</h2>
                  <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                </GlassCard>
              </Reveal>
            )}

            {/* Architecture */}
            {project.architecture && (
              <Reveal>
                <GlassCard>
                  <h2 className="text-2xl font-heading font-bold mb-4">Architecture</h2>
                  <p className="text-text-secondary leading-relaxed">{project.architecture}</p>
                </GlassCard>
              </Reveal>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <GlassCard>
                  <h2 className="text-2xl font-heading font-bold mb-4">Key Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-accent mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <Reveal>
                <GlassCard>
                  <h2 className="text-2xl font-heading font-bold mb-4">Results & Impact</h2>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="text-accent mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Reveal delay={0.3}>
              <GlassCard>
                <h3 className="text-xl font-heading font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-card-hover text-text-secondary text-sm rounded-lg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            {/* Project Info */}
            <Reveal delay={0.4}>
              <GlassCard>
                <h3 className="text-xl font-heading font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Category</p>
                    <p className="font-heading font-semibold">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm mb-1">Duration</p>
                    <p className="font-heading font-semibold">{project.duration}</p>
                  </div>
                  {project.githubUrl && (
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Repository</p>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-purple-400 transition-colors cursor-hover"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    </div>
                  )}
                  {project.liveUrl && (
                    <div>
                      <p className="text-text-secondary text-sm mb-1">Live Site</p>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-purple-400 transition-colors cursor-hover"
                      >
                        <ExternalLink size={16} />
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
