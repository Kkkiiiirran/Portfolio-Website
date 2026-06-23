"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Certificate } from "@/types";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 space-y-4 group cursor-hover"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
    >
      {/* Logo Placeholder */}
      <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-accent/20 to-purple-600/20 flex items-center justify-center border border-border">
        <span className="text-2xl font-heading font-bold text-accent">
          {certificate.issuer.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors">
          {certificate.name}
        </h3>
        <p className="text-text-secondary text-sm">{certificate.issuer}</p>
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-xs">{certificate.date}</span>
          <span className="text-text-secondary text-xs">
            ID: {certificate.credentialId}
          </span>
        </div>
      </div>

      {/* Verification Link */}
      {certificate.verificationUrl && (
        <motion.a
          href={certificate.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-accent hover:text-purple-400 transition-colors cursor-hover"
          whileHover={{ x: 3 }}
        >
          <ExternalLink size={14} />
          Verify Certificate
        </motion.a>
      )}
    </motion.div>
  );
}
