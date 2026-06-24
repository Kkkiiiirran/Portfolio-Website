"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Reveal from "@/components/animations/Reveal";

export default function FeaturedTestimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-32 relative">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="home-section-title">
                Client Testimonials
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                What people say about working with me.
              </p>
            </div>
            <Link href="/testimonials">
              <motion.div
                className="flex items-center gap-2 text-accent hover:gap-4 transition-all cursor-hover mt-4 md:mt-0"
                whileHover={{ x: 5 }}
              >
                <span className="font-heading font-semibold">View All Testimonials</span>
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
