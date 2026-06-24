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
    image: "/images/projects/contetualtrpc.png",
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
    image: "/images/projects/aifitness.png",
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
    githubUrl: "https://github.com/Kkkiiiirran/Semantic-Analysis-and-Review-Assistant-App",
    liveUrl: "https://semantic-assistant-demo.vercel.app",
    image: "/projects/semantic-analysis.jpg",
    problem: "Large-scale user feedback analysis is time-consuming and requires significant manual effort to categorize and respond to user comments effectively.",
    solution: "Developed an AI-powered NLP system using DistilBERT for semantic understanding, Logistic Regression for classification, and Google Gemini API to generate context-aware, empathetic responses to user feedback.",
    architecture: "Python-based ML pipeline with DistilBERT embeddings, scikit-learn classification, and Gemini API integration for response generation. Deployed via FastAPI backend.",
    challenges: ["Handling diverse user comment formats", "Generating empathetic and appropriate responses", "Balancing accuracy with inference speed"],
    results: ["Achieved 92% classification accuracy", "Automated large-scale feedback processing", "Reduced response time by 75%"],
    screenshots: ["/screenshots/semantic-1.jpg", "/screenshots/semantic-2.jpg"]
  },
  {
    id: "4",
    slug: "blinkit-product-performance-analysis",
    title: "Blinkit Product Performance Analysis",
    description: "Interactive Streamlit dashboard and EDA workflow for analyzing product, pricing, review, and delivery performance.",
    longDescription: "A beginner-friendly analytics project for exploring Blinkit product performance from a Kaggle dataset. The project includes a Jupyter EDA notebook and an interactive Streamlit dashboard that supports either a local blinkit_dataset.csv file or CSV upload from the sidebar.",
    category: "AI",
    stack: ["Python", "Streamlit", "Pandas", "Jupyter Notebook", "Data Analysis", "CSV"],
    duration: "1 month",
    githubUrl: "https://github.com/Kkkiiiirran/Blinkit-Data-Analysis",
    liveUrl: "https://blinkit-data-analysis.streamlit.app/",
    image: "/images/projects/blinkit.png",
    problem: "Product datasets can be difficult to interpret without clear summaries of pricing, discounts, ratings, reviews, delivery speed, and category-level behavior.",
    solution: "Built an exploratory analysis notebook and Streamlit dashboard to turn raw product rows into category and brand performance summaries, pricing insights, delivery analysis, and product opportunity tables.",
    architecture: "The project is organized as a lightweight Python analytics app with blinkit_dataset.csv as the default input, a Jupyter notebook for EDA, and app.py powering an interactive Streamlit dashboard. The app also supports user-uploaded CSV files when the local dataset is not present.",
    challenges: ["Designing beginner-friendly EDA outputs", "Handling CSV uploads and local dataset fallback", "Creating meaningful product success and opportunity scores"],
    results: [
      "Which categories generate the strongest product performance?",
      "Which brands have the best mix of ratings, reviews, pricing, and discounts?",
      "How do discounts affect final price, customer ratings, and review volume?",
      "Which products look underpriced, overpriced, or high-opportunity?",
      "Which categories or brands have slower delivery times?",
      "Which products should be prioritized using the product success score?",
      "Built downloadable filtered data and summary tables for deeper analysis"
    ],
    screenshots: []
  },
  {
    id: "5",
    slug: "ocr-translation-app",
    title: "OCR + Translation App",
    description: "Real-time text extraction and multilingual translation from images using OCR and Gemini API.",
    longDescription: "A Streamlit application that extracts text from uploaded images and translates it into multiple languages. The app combines image preprocessing, OCR, and LLM-powered translation to create a simple workflow for reading and translating image-based text.",
    category: "AI",
    stack: ["Python", "Streamlit", "OpenCV", "PyTesseract", "Google Gemini API", "OCR"],
    duration: "1 month",
    githubUrl: "https://github.com/Kkkiiiirran/Text-Recognition-and-Translation",
    liveUrl: "https://text-recognition-and-translation.streamlit.app/",
    image: "/images/projects/ocr.png",
    problem: "Text embedded in images is hard to search, edit, or translate manually, especially across multiple languages.",
    solution: "Built an app that preprocesses images with OpenCV, extracts text using PyTesseract, and translates the recognized text with Google Gemini API.",
    architecture: "Streamlit powers the user interface, OpenCV handles image preprocessing, PyTesseract performs OCR, and Gemini API generates multilingual translations from the extracted text.",
    challenges: ["Improving OCR quality through preprocessing", "Handling noisy or low-quality images", "Creating a simple translation workflow for users"],
    results: ["Extracts text from uploaded images", "Supports multilingual translation", "Provides a real-time interactive Streamlit demo"],
    screenshots: []
  },
  {
    id: "6",
    slug: "browser-based-screen-recorder",
    title: "Browser-Based Screen Recorder",
    description: "A lightweight in-browser screen recording tool built with JavaScript Web APIs for capturing, previewing, and downloading recordings.",
    longDescription: "A browser-native screen recorder that uses modern JavaScript Web APIs to capture screen activity directly from the user's browser. The project demonstrates practical use of MediaStream, MediaRecorder, and getUserMedia to create a simple recording workflow without requiring external desktop software.",
    category: "Web",
    stack: ["JavaScript", "HTML", "CSS", "MediaStream API", "MediaRecorder API", "getUserMedia"],
    duration: "1 month",
    githubUrl: "https://github.com/Kkkiiiirran/Video-Recorder",
    liveUrl: "https://kkkiiiirran.github.io/Video-Recorder/",
    image: "/images/projects/screenrecorder.png",
    problem: "Users often need a quick way to record their screen without installing heavy third-party recording tools.",
    solution: "Built a browser-based recorder that requests screen/media permissions, records the selected stream using MediaRecorder, and lets users preview and save the captured video.",
    architecture: "The app runs fully on the client side with JavaScript handling media permission requests, stream capture, recording state, playback preview, and file download.",
    challenges: ["Managing browser media permissions", "Handling recording start, stop, and preview states", "Creating a clean workflow around MediaStream and MediaRecorder APIs"],
    results: ["Records screen directly in the browser", "Supports previewing captured recordings", "Runs as a lightweight static web app deployed on GitHub Pages"],
    screenshots: []
  },
  {
    id: "7",
    slug: "driver-pulse",
    title: "Driver Pulse",
    description: "A safety analytics dashboard that processes trip and sensor data to detect unsafe driving events and summarize driver behavior.",
    longDescription: "Driver Pulse is a hackathon-built driver safety system that analyzes raw trip, motion, and sensor-style data to identify unsafe driving events such as harsh braking. The system is designed around live processing with delayed post-trip display, preserving temporal accuracy while avoiding driver distraction during active trips.",
    category: "Web",
    stack: ["React", "Node.js", "MySQL", "JavaScript", "Data Processing", "Sensor Analytics"],
    duration: "Hackathon Project",
    githubUrl: "https://github.com/Kkkiiiirran/Uber-Hackthon-",
    liveUrl: "https://uber-hackthon-dm6d.vercel.app/",
    image: "/images/projects/uber.png",
    problem: "Driver trip data can reveal important safety patterns, but showing alerts during a trip can distract drivers and raw sensor logs are difficult to interpret after the fact.",
    solution: "Built a post-trip analytics system that processes motion and event data, detects risky driving signals, stores structured flag events, and presents insights only after the trip ends.",
    architecture: "The system uses a client-server dashboard with local-first event handling concepts, structured event logs, and a store-and-forward style pipeline. Events are designed to be persisted immediately and uploaded later when connectivity is available, prioritizing high-severity flags.",
    challenges: ["Balancing real-time processing with a zero-distraction driver experience", "Designing a local-first pipeline for network instability", "Avoiding duplicate events through idempotent write patterns", "Mapping simulated CSV inputs to production-ready sensor processing concepts"],
    results: ["Detected unsafe driving events such as harsh braking", "Generated structured logs for post-trip behavior analysis", "Designed a no real-time display policy to reduce driver distraction", "Documented AP-style availability and eventual consistency trade-offs"],
    screenshots: []
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
  },
  {
    id: "3",
    company: "JetLearn, Amsterdam",
    position: "Python Educator",
    duration: "Nov 2024 – Dec 2025",
    description: "Teaching coding and technology concepts remotely to international students across Europe.",
    achievements: [
      "Taught 100+ European students aged 8–16",
      "Conducted 150+ demo classes with a 60% conversion rate"
    ],
    technologies: ["Teaching", "Coding Education", "Student Mentorship", "Remote Instruction"]
  },
  {
    id: "4",
    company: "Towards AI, The Orange Journals, Language Hub, Power of Poetry",
    position: "Technical Writer",
    duration: "2024 – Present",
    description: "Writing technical and analytical articles on AI, backend development, OCR, translation systems, and developer tooling for remote publications.",
    achievements: [
      "Featured in Blue Insights, Data-Driven Fiction, and Be Open's 99th Edition",
      "Wrote technical explainers and reflective essays across AI, backend development, OCR, translation, and creative writing"
    ],
    technologies: ["Technical Writing", "AI", "FastAPI", "PyTesseract", "Gemini API", "OCR"],
    links: [
      {
        label: "Beginner's Guide to FastAPI II",
        url: "https://medium.com/@belovedwriter/beginners-guide-to-fastapi-ii-9b8861fa574a"
      },
      {
        label: "Why Do You Miss Someone",
        url: "https://medium.com/the-orange-journal/why-do-you-miss-someone-60917ded48c1"
      },
      {
        label: "Build a Multilingual OCR and Translation App Using PyTesseract and Gemini API",
        url: "https://medium.com/towards-artificial-intelligence/build-a-multilingual-ocr-and-translation-app-using-pytesseract-and-gemini-api-9e55dc42e193"
      }
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "DESIS Ascend Program",
    issuer: "D. E. Shaw India",
    date: "Jan 2025 – Mar 2025",
    credentialId: "Selected from 14,000+ participants nationwide",
    verificationUrl: "https://www.deshawindia.com/desis-ascend"
  },
  {
    id: "2",
    name: "Global Rank 283 in CodeChef Starters 234",
    issuer: "CodeChef",
    date: "2025",
    credentialId: "Global Rank 283"
  },
  {
    id: "3",
    name: "Top 200 in Flipkart Runway 2024",
    issuer: "Flipkart",
    date: "2024",
    credentialId: "Top 200 of 36,000 participants",
    verificationUrl: "https://unstop.com/competitions/flipkart-runway-season-4-flipkart-901610/online-quiz/327811"
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
  { label: "Projects Completed", value: 7 },
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
