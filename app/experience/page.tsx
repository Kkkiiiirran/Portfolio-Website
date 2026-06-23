"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Reveal from "@/components/animations/Reveal";

export default function ExperiencePage() {
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
              Work Experience
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My professional journey building impactful products and leading teams.
            </motion.p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
