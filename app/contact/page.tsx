"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have a project in mind? Let's build something amazing together.
            </motion.p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <Reveal>
              <div>
                <h2 className="text-4xl font-heading font-bold gradient-text mb-6">
                  Let's Talk
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                {/* Availability Status */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow" />
                  <span className="text-text-secondary">Available for new projects</span>
                </div>
              </div>
            </Reveal>

            {/* Contact Details */}
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <GlassCard hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">Email</p>
                      <a
                        href="mailto:itskkirran@gmail.com"
                        className="font-heading font-semibold hover:text-accent transition-colors cursor-hover"
                      >
                        itskkirran@gmail.com
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">Location</p>
                      <p className="font-heading font-semibold">Delhi, India</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.3}>
              <div>
                <h3 className="font-heading font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/itskkirran", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/kiranpreet-kaur", label: "LinkedIn" },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center cursor-hover group"
                        whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon size={20} className="group-hover:text-accent transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side - Contact Form */}
          <Reveal delay={0.4}>
            <GlassCard hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-heading font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-heading font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-white placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-8 py-4 bg-accent text-white font-heading font-semibold rounded-lg cursor-hover overflow-hidden relative group disabled:opacity-50"
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSubmitted ? (
                      "Message Sent! ✓"
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
