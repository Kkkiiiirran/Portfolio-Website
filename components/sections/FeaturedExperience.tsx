"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data";
import ExperienceCard from "@/components/cards/ExperienceCard";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedExperience() {
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <section className="py-32 relative">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="home-section-title">
                Work Experience
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Building impactful solutions and leading teams at innovative companies.
              </p>
            </div>
            <Link href="/experience">
              <motion.div
                className="flex items-center gap-2 text-accent hover:gap-4 transition-all cursor-hover mt-4 md:mt-0"
                whileHover={{ x: 5 }}
              >
                <span className="font-heading font-semibold">View Full Timeline</span>
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </div>
        </Reveal>

        {/* Experience Timeline */}
        <div className="max-w-4xl">
          {featuredExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
