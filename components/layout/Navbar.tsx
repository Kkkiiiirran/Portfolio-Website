"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/volunteering", label: "Volunteering" },
  { href: "/skills", label: "Skills" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 50;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled ? "bg-card/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-hover">
            <motion.div
              className="text-2xl font-heading font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="cursor-hover">
                  <motion.div
                    className="relative px-4 py-2 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-300",
                        isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-lg"
                        layoutId="navbar-active"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 cursor-hover"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block text-2xl font-heading font-bold py-2 cursor-hover",
                          isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
