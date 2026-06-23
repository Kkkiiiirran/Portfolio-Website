"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 space-y-4 min-w-[350px] max-w-[400px]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
          <span className="text-text-primary font-heading font-bold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-heading font-semibold">{testimonial.name}</h4>
          <p className="text-text-secondary text-sm">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-text-secondary text-sm leading-relaxed">
        "{testimonial.content}"
      </p>
    </motion.div>
  );
}
