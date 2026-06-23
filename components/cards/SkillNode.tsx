"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";

interface SkillNodeProps {
  skill: Skill;
  index: number;
}

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-green-500 to-emerald-500",
  Database: "from-purple-500 to-pink-500",
  Cloud: "from-orange-500 to-red-500",
  DevOps: "from-yellow-500 to-orange-500",
  AI: "from-purple-600 to-blue-600",
  Tools: "from-gray-500 to-slate-500",
  Languages: "from-indigo-500 to-purple-500",
};

export default function SkillNode({ skill, index }: SkillNodeProps) {
  return (
    <motion.div
      className="relative group cursor-hover"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      {/* Skill Circle */}
      <div
        className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${
          categoryColors[skill.category]
        } p-[2px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow`}
      >
        <div className="w-full h-full bg-card rounded-2xl flex flex-col items-center justify-center gap-1">
          <span className="text-xs font-heading font-bold text-center px-2">
            {skill.name}
          </span>
          <span className="text-[10px] text-text-secondary font-semibold">{skill.level}%</span>
        </div>
      </div>

      {/* Hover Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <p className="text-xs text-text-secondary">{skill.category}</p>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
          categoryColors[skill.category]
        } opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
      />
    </motion.div>
  );
}
