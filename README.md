# Premium Developer Portfolio

A luxurious, award-winning portfolio website built with Next.js 15, React 19, and cutting-edge animation libraries. Inspired by Awwwards-level design quality and smooth, cinematic interactions.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion, GSAP, Motion One
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **UI Components**: Custom components with Shadcn UI patterns

## ✨ Features

### Global Features
- 🎨 Custom animated cursor with magnetic effects
- ⚡ Premium page loader with percentage counter
- 🌊 Lenis smooth scrolling
- 📊 Scroll progress indicator
- 🎭 Page and route transitions
- ✨ Reveal animations on scroll
- 🎯 Glassmorphism design system
- 🌌 Floating particles and mesh gradients
- 🎪 Noise textures and animated grids

### Pages

#### Home (/)
- Hero section with animated gradient orb
- Animated stats counters
- Featured projects showcase
- Featured experience timeline
- Featured skills grid
- Featured testimonials
- Call-to-action section

#### About (/about)
- Personal introduction
- Journey timeline
- Mission & values
- Education
- Current goals

#### Projects (/projects)
- Filterable project grid
- Category filters (Web, AI, SaaS, Mobile, Open Source)
- Interactive project cards with hover effects

#### Project Detail (/projects/[slug])
- Detailed project overview
- Problem, solution, and architecture
- Tech stack display
- Key challenges and results
- Links to live demo and GitHub

#### Experience (/experience)
- Vertical timeline with animations
- Detailed role information
- Achievements and technologies
- Scroll-triggered animations

#### Certifications (/certifications)
- Searchable certificate gallery
- Glass card design
- Verification links
- Credential details

#### Volunteering (/volunteering)
- Story-based layout
- Alternating image placements
- Impact statements
- Achievement lists

#### Skills (/skills)
- Interactive skill nodes
- Category filtering
- Color-coded by category
- Hover effects with glow

#### Testimonials (/testimonials)
- Infinite scrolling wall
- Grid layout
- Glass card design
- Auto-scroll with pause on hover

#### Contact (/contact)
- Split layout design
- Premium contact form
- Availability status
- Social links
- Form submission animation

## 🎨 Design System

### Colors
```css
Background: #050505
Cards: #0D0D0D
Card Hover: #141414
Borders: rgba(255,255,255,0.08)
Text Primary: #FFFFFF
Text Secondary: rgba(255,255,255,0.65)
Accent: #7C3AED
Glow: rgba(124,58,237,0.35)
```

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Animation Easing
```css
cubic-bezier(0.22, 1, 0.36, 1)
```

## 📁 Project Structure

```
portfolio-2/
├── app/
│   ├── about/
│   ├── certifications/
│   ├── contact/
│   ├── experience/
│   ├── projects/
│   │   └── [slug]/
│   ├── skills/
│   ├── testimonials/
│   ├── volunteering/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animations/
│   │   ├── CustomCursor.tsx
│   │   ├── PageLoader.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SmoothScroll.tsx
│   ├── cards/
│   │   ├── CertificateCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillNode.tsx
│   │   └── TestimonialCard.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── CTA.tsx
│   │   ├── FeaturedExperience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── FeaturedSkills.tsx
│   │   ├── FeaturedTestimonials.tsx
│   │   ├── Hero.tsx
│   │   └── Stats.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       └── MagneticButton.tsx
├── data/
│   └── index.ts
├── hooks/
│   ├── use-in-view.ts
│   ├── use-mouse.ts
│   ├── use-scroll-position.ts
│   └── use-scroll-progress.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest deployment target for this Next.js app is Vercel.

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run build` and fix any errors before deploying.
4. Push the project to GitHub.
5. Import the GitHub repository in Vercel.

Use these settings if Vercel asks:

```text
Framework Preset: Next.js
Install Command: npm install
Build Command: npm run build
Output Directory: .next
Node.js Version: 20.x
```

## 📝 Customization

### Update Content

All content is centralized in `/data/index.ts`. Update the following:

- `projects` - Your project portfolio
- `experiences` - Work experience
- `certificates` - Professional certifications
- `volunteering` - Volunteer activities
- `skills` - Technical skills
- `testimonials` - Client testimonials
- `stats` - Homepage statistics
- `socialLinks` - Social media links

### Replace Placeholders

Current placeholders are gradient-based. Replace with actual images:

1. Add images to `/public` folder
2. Update image paths in data files
3. Replace gradient placeholders in components

### Customize Colors

Edit `/tailwind.config.ts` to change the color scheme.

### Modify Animations

- Animation components are in `/components/animations`
- Adjust easing in `/lib/utils.ts` (`customEase`)
- Modify Framer Motion variants in individual components

## 🎯 Performance

The site is optimized for performance:
- Server Components by default
- Code splitting
- Lazy loading
- Optimized animations
- Minimal bundle size

Target Lighthouse scores: 95+ across all metrics

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration: Abdalla Ahmed's portfolio
- Animation libraries: Framer Motion, GSAP
- UI Components: Shadcn UI patterns
- Icons: Lucide React

---

Built with ❤️ using Next.js, React, and modern web technologies.
