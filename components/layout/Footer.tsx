"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/itskkirran", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kiranpreet-kaur", label: "LinkedIn" },
  { icon: Mail, href: "mailto:itskkirran@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-xl mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold gradient-text">Kiranpreet Kaur</h3>
            <p className="text-text-secondary text-sm max-w-xs">
              Software Engineering Intern at Cisco Systems specializing in AI/ML, backend development, and competitive programming.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-hover text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center cursor-hover"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Kiranpreet Kaur. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Built with Next.js 15, React 19, and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
