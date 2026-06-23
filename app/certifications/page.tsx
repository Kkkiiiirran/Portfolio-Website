"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { certificates } from "@/data";
import CertificateCard from "@/components/cards/CertificateCard";
import Reveal from "@/components/animations/Reveal";

export default function CertificationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Certifications
            </motion.h1>
            <motion.p
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional certifications and credentials validating my expertise.
            </motion.p>
          </div>
        </Reveal>

        {/* Search */}
        <Reveal delay={0.3}>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-white placeholder:text-text-secondary focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </Reveal>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No certifications found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
