"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Reveal from "@/components/animations/Reveal";

export default function ExperiencePage() {
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
              Work Experience
            </motion.h1>
            <motion.p
              className="page-subtitle"
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
