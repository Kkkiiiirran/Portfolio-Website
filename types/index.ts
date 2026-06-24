export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web" | "AI" | "SaaS" | "Mobile" | "Open Source";
  stack: string[];
  duration: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string[];
  results?: string[];
  screenshots?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  links?: {
    label: string;
    url: string;
  }[];
  logo?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl?: string;
  logo?: string;
}

export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  duration: string;
  impact: string;
  achievements: string[];
  image?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "DevOps" | "AI" | "Tools" | "Languages";
  level: number;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
