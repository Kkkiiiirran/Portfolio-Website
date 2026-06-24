"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { Award, Target, Heart, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Hero Section */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Passionate about creating exceptional digital experiences that make a difference.
            </motion.p>
          </div>
        </Reveal>

        {/* Introduction */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold">Hello, I'm Kiranpreet Kaur</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I'm currently a Software Engineering Intern at Cisco Systems, where I work on 
                    AI-powered network operations and troubleshooting systems. My passion lies in 
                    building intelligent solutions that solve real-world problems.
                  </p>
                  <p>
                    As a Computer Science student at Indira Gandhi Delhi Technical University with a 
                    9.77 CGPA, I've developed expertise in AI/ML, backend development, and competitive 
                    programming. My journey has taken me from classical machine learning research to 
                    cutting-edge AI applications.
                  </p>
                  <p>
                    Beyond academics and work, I'm passionate about competitive programming with a LeetCode 
                    rating of 1890, Codeforces rating of 1295, and active participation in various coding 
                    challenges. I believe in continuous learning and pushing the boundaries of what's possible 
                    with technology.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="profile-frame max-w-sm mx-auto">
                  <img
                    src="/images/profile/about.png"
                    alt="Kiranpreet Kaur"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* My Journey */}
        <section className="mb-32">
          <Reveal>
            <h2 className="section-title">
              My Journey
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <GlassCard className="max-w-4xl mx-auto">
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  My journey into software engineering began with a fascination for problem-solving 
                  and algorithms. Through competitive programming on platforms like LeetCode, Codeforces, 
                  and CodeChef, I developed strong analytical skills and a deep understanding of data 
                  structures and algorithms.
                </p>
                <p>
                  This foundation led me to explore machine learning and AI, where I contributed to 
                  research on Handwritten Gurmukhi Text Recognition, achieving 91.55% accuracy using 
                  classical ML techniques. The work was accepted at DoSCI 2026 (Springer LNNS).
                </p>
                <p>
                  Currently at Cisco Systems, I'm working on cutting-edge AI-powered network diagnostics, 
                  combining my skills in Python, testing frameworks, and network technologies. Each project 
                  teaches me something new about building scalable, production-ready systems.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </section>

        {/* Mission & Values */}
        <section className="mb-32">
          <Reveal>
            <h2 className="section-title">
              Mission & Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Mission Driven",
                description: "Build products that solve real problems and create meaningful impact."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Commit to high standards in every line of code and design decision."
              },
              {
                icon: Heart,
                title: "User Focused",
                description: "Prioritize user experience and accessibility in everything I create."
              },
              {
                icon: TrendingUp,
                title: "Growth Mindset",
                description: "Continuously learn, adapt, and embrace new technologies and methods."
              }
            ].map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <GlassCard className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-purple-600/20 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-32">
          <Reveal>
            <h2 className="section-title">
              Education
            </h2>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <Reveal delay={0.2}>
              <GlassCard>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-1">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-accent mb-2">University of Technology</p>
                    <p className="text-text-secondary text-sm">
                      Focus: Software Engineering, Algorithms, and Data Structures
                    </p>
                  </div>
                  <span className="text-text-secondary text-sm mt-4 md:mt-0">2014 - 2018</span>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>

        {/* Goals */}
        <section>
          <Reveal>
            <h2 className="section-title">
              Current Goals
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <GlassCard className="max-w-4xl mx-auto">
              <ul className="space-y-4">
                {[
                  "Continue contributing to AI/ML research and publications",
                  "Build more open-source projects that help the developer community",
                  "Achieve Codeforces Expert rating (1600+)",
                  "Explore full-stack AI applications with modern frameworks",
                  "Mentor junior developers and contribute to tech education"
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-accent mt-1">→</span>
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
