"use client";

import { motion } from "framer-motion";
import { volunteering } from "@/data";
import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function VolunteeringPage() {
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
              Volunteering
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Giving back to the community through technology and mentorship.
            </motion.p>
          </div>
        </Reveal>

        {/* Volunteering Items */}
        <div className="max-w-5xl mx-auto space-y-12">
          {volunteering.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image Placeholder - Alternating sides */}
                <div className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <motion.div
                    className="aspect-video rounded-2xl bg-gradient-to-br from-accent/20 to-purple-600/20 border border-border overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-heading font-bold text-white/5">
                        {item.organization.charAt(0)}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <GlassCard>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-heading font-bold mb-2">
                          {item.organization}
                        </h2>
                        <p className="text-accent font-semibold">{item.role}</p>
                        <p className="text-text-secondary text-sm">{item.duration}</p>
                      </div>

                      <p className="text-text-secondary leading-relaxed">
                        {item.impact}
                      </p>

                      <div>
                        <h4 className="font-heading font-semibold mb-2">Key Contributions:</h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-text-secondary text-sm"
                            >
                              <span className="text-accent mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
