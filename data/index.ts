import { Project, Experience, Certificate, Volunteering, Skill, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "contextual-trpc",
    title: "Contextual tRPC",
    description: "Observability & Audit Infrastructure for APIs - Backend observability library",
    longDescription: "A comprehensive backend observability library built with TypeScript and tRPC that provides request-level visibility in backend systems. Delivers scalable request tracing and auditability for modern API architectures.",
    category: "Open Source",
    stack: ["TypeScript", "Node.js", "tRPC", "Observability", "API Design"],
    duration: "3 months",
    githubUrl: "https://github.com/itskkirran/contextual-trpc",
    liveUrl: "https://github.com/itskkirran/contextual-trpc#examples",
    image: "/projects/contextual-trpc.jpg",
    problem: "Backend systems lack request-level visibility, making it difficult to trace and audit API calls across distributed architectures.",
    solution: "Built a TypeScript-based observability library that integrates seamlessly with tRPC to provide comprehensive request tracing, context propagation, and audit logging.",
    architecture: "Built on top of tRPC with middleware architecture, enabling context injection and request tracking across the entire API lifecycle.",
    challenges: ["Maintaining zero runtime overhead", "Ensuring type safety across context propagation", "Seamless integration with existing tRPC applications"],
    results: ["Delivered scalable request tracing", "Enabled comprehensive auditability", "Open-sourced with detailed examples"],
    screenshots: ["/screenshots/trpc-1.jpg", "/screenshots/trpc-2.jpg"]
  },
  {
    id: "2",
    slug: "ai-fitness-trainer",
    title: "AI Fitness Trainer",
    description: "Real-Time Pose Tracking with intelligent exercise guidance and form correction",
    longDescription: "A browser-based AI fitness trainer that uses computer vision to provide real-time feedback on posture and form during workouts. Combines MediaPipe Pose detection with Google Gemini API for intelligent exercise coaching.",
    category: "AI",
    stack: ["React", "TypeScript", "MediaPipe Pose", "Google Gemini API", "Computer Vision"],
    duration: "2 months",
    githubUrl: "https://github.com/itskkirran/ai-fitness-trainer",
    liveUrl: "https://ai-fitness-trainer-demo.vercel.app",
    image: "/projects/ai-fitness.jpg",
    problem: "Traditional fitness apps lack real-time feedback on posture and form, making it difficult for users to exercise correctly without a personal trainer.",
    solution: "Built a browser-based fitness trainer using MediaPipe Pose for real-time pose detection, React + TypeScript for the UI, and Google Gemini API to provide intelligent exercise guidance and form correction.",
    architecture: "Client-side architecture with MediaPipe running in the browser for real-time pose estimation, integrated with Gemini API for intelligent coaching feedback.",
    challenges: ["Achieving real-time performance in the browser", "Accurate pose detection across different body types", "Providing contextual and helpful feedback"],
    results: ["Achieved real-time inference at 25–30 FPS", "95%+ repetition counting accuracy", "Deployed as accessible web application"],
    screenshots: ["/screenshots/fitness-1.jpg", "/screenshots/fitness-2.jpg", "/screenshots/fitness-3.jpg"]
  },
  {
    id: "3",
    slug: "semantic-analysis-support-assistant",
    title: "Semantic Analysis and Support Assistant",
    description: "AI-powered NLP system for large-scale user feedback analysis and response generation",
    longDescription: "An intelligent support assistant that analyzes user feedback at scale using advanced NLP techniques. Combines DistilBERT embeddings with classical ML to classify sentiments and generate empathetic, context-aware responses.",
    category: "AI",
    stack: ["Python", "DistilBERT", "Logistic Regression", "Google Gemini API", "NLP", "FastAPI"],
    duration: "2 months",
    githubUrl: "https://github.com/itskkirran/semantic-support-assistant",
    liveUrl: "https://semantic-assistant-demo.vercel.app",
    image: "/projects/semantic-analysis.jpg",
    problem: "Large-scale user feedback analysis is time-consuming and requires significant manual effort to categorize and respond to user comments effectively.",
    solution: "Developed an AI-powered NLP system using DistilBERT for semantic understanding, Logistic Regression for classification, and Google Gemini API to generate context-aware, empathetic responses to user feedback.",
    architecture: "Python-based ML pipeline with DistilBERT embeddings, scikit-learn classification, and Gemini API integration for response generation. Deployed via FastAPI backend.",
    challenges: ["Handling diverse user comment formats", "Generating empathetic and appropriate responses", "Balancing accuracy with inference speed"],
    results: ["Achieved 92% classification accuracy", "Automated large-scale feedback processing", "Reduced response time by 75%"],
    screenshots: ["/screenshots/semantic-1.jpg", "/screenshots/semantic-2.jpg"]
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Cisco Systems",
    position: "Software Engineering Intern – Dev Testing",
    duration: "Jun 2026 – Present",
    description: "Contributing to the development and validation of an AI-powered Subject Matter Expert (SME) assistant for network operations and troubleshooting.",
    achievements: [
      "Developed automated test suites using Python and pytest to validate AI agent workflows",
      "Worked with NetFlow and SPAN for network telemetry analysis",
      "Performed functional, regression, and integration testing for AI-driven network diagnostics",
      "Improved reliability of AI-driven network diagnostics and telemetry analysis systems"
    ],
    technologies: ["Python", "pytest", "NetFlow", "SPAN", "AI Testing", "Network Diagnostics"]
  },
  {
    id: "2",
    company: "DoSCI 2026 (Springer LNNS)",
    position: "Research Contributor – Handwritten Gurmukhi Text Recognition",
    duration: "Nov 2025",
    description: "Conducted research on classical machine learning approaches for handwritten character recognition in Gurmukhi script.",
    achievements: [
      "Developed ML pipelines using Support Vector Machines (SVM) with Zoning and PCA",
      "Achieved 91.55% accuracy on dataset of 12,000 character images across 41 classes",
      "Outperformed multiple baseline models through feature engineering",
      "Research accepted for publication in Springer LNNS series"
    ],
    technologies: ["Python", "Scikit-learn", "SVM", "PCA", "Computer Vision", "OpenCV"]
  }
];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "DESIS Ascend Program",
    issuer: "D. E. Shaw India",
    date: "Jan 2025 – Mar 2025",
    credentialId: "DESIS-2025",
    verificationUrl: "https://www.deshawindia.com/desis-ascend"
  }
];

export const volunteering: Volunteering[] = [
  // Add your volunteering experiences here when available
];

export const skills: Skill[] = [
  // Languages
  { id: "1", name: "Python", category: "Languages", level: 95 },
  { id: "2", name: "TypeScript", category: "Languages", level: 90 },
  { id: "3", name: "JavaScript", category: "Languages", level: 90 },
  { id: "4", name: "HTML/CSS", category: "Languages", level: 90 },
  { id: "5", name: "SQL", category: "Languages", level: 80 },
  
  // Frontend
  { id: "6", name: "React.js", category: "Frontend", level: 90 },
  { id: "7", name: "Next.js", category: "Frontend", level: 85 },
  { id: "8", name: "TailwindCSS", category: "Frontend", level: 90 },
  { id: "9", name: "Node.js", category: "Frontend", level: 85 },
  
  // Backend
  { id: "10", name: "FastAPI", category: "Backend", level: 85 },
  { id: "11", name: "tRPC", category: "Backend", level: 85 },
  { id: "12", name: "REST APIs", category: "Backend", level: 90 },
  
  // Database
  { id: "13", name: "MongoDB", category: "Database", level: 85 },
  { id: "14", name: "SQL", category: "Database", level: 80 },
  
  // AI/ML
  { id: "15", name: "NumPy", category: "AI", level: 90 },
  { id: "16", name: "Pandas", category: "AI", level: 90 },
  { id: "17", name: "Matplotlib", category: "AI", level: 85 },
  { id: "18", name: "Scikit-learn", category: "AI", level: 90 },
  { id: "19", name: "OpenCV", category: "AI", level: 85 },
  { id: "20", name: "Google ADK", category: "AI", level: 80 },
  { id: "21", name: "Pytesseract", category: "AI", level: 75 },
  { id: "22", name: "MediaPipe", category: "AI", level: 85 },
  { id: "23", name: "DistilBERT", category: "AI", level: 80 },
  { id: "24", name: "Gemini API", category: "AI", level: 85 },
  
  // Developer Tools
  { id: "25", name: "Git", category: "Tools", level: 90 },
  { id: "26", name: "Postman", category: "Tools", level: 85 },
  { id: "27", name: "VS Code", category: "Tools", level: 95 },
  { id: "28", name: "pytest", category: "Tools", level: 85 },
  
  // DevOps/Testing
  { id: "29", name: "NetFlow", category: "DevOps", level: 75 },
  { id: "30", name: "SPAN", category: "DevOps", level: 75 },
  { id: "31", name: "Testing", category: "DevOps", level: 85 },
];

export const testimonials: Testimonial[] = [
  // Add testimonials when available
];

export const stats = [
  { label: "Projects Completed", value: 3 },
  { label: "LeetCode Rating", value: 1890 },
  { label: "CGPA", value: 9.77 },
  { label: "Technologies", value: 30 }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/itskkirran", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/kiranpreet-kaur", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/itskkirran", icon: "code" },
  { name: "Email", url: "mailto:itskkirran@gmail.com", icon: "mail" }
];
