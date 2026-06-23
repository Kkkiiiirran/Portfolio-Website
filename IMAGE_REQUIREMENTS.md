# Image Requirements for Portfolio

This document lists all images needed for your portfolio website.

## Folder Structure

Create the following folders in `/public/images/`:

```
/public/images/
├── profile/
├── projects/
├── organizations/
├── logos/
└── screenshots/
```

---

## Required Images

### 1. Profile Images

**Hero Profile Image**
- **Location**: `/public/images/profile/hero.jpg` or `hero.png`
- **Dimensions**: 800×800px (square)
- **Format**: JPG, PNG, or WebP
- **Display**: Circular crop
- **Description**: Professional headshot for the homepage hero section
- **Usage**: `components/sections/Hero.tsx`

**About Page Image**
- **Location**: `/public/images/profile/about.jpg`
- **Dimensions**: 600×600px (square)
- **Format**: JPG, PNG, or WebP
- **Display**: Square with rounded corners
- **Description**: Professional or creative photo for about page
- **Usage**: `app/about/page.tsx`

---

### 2. Project Images

For each of your 3 main projects:

#### Project 1: Contextual tRPC

**Thumbnail**
- **Location**: `/public/images/projects/contextual-trpc.jpg`
- **Dimensions**: 1200×675px (16:9 ratio)
- **Description**: Visual representation of the observability dashboard or architecture diagram

**Hero Image**
- **Location**: `/public/images/projects/contextual-trpc-hero.jpg`
- **Dimensions**: 1920×1080px (16:9 ratio)
- **Description**: Detailed view for project detail page

**Screenshots** (2-3 images)
- **Location**: `/public/images/screenshots/trpc-1.jpg`, `trpc-2.jpg`
- **Dimensions**: 1920×1080px each
- **Description**: Interface screenshots, code examples, or architecture diagrams

#### Project 2: AI Fitness Trainer

**Thumbnail**
- **Location**: `/public/images/projects/ai-fitness.jpg`
- **Dimensions**: 1200×675px (16:9 ratio)
- **Description**: Screenshot of the fitness app in action with pose detection

**Hero Image**
- **Location**: `/public/images/projects/ai-fitness-hero.jpg`
- **Dimensions**: 1920×1080px (16:9 ratio)

**Screenshots** (2-3 images)
- **Location**: `/public/images/screenshots/fitness-1.jpg`, `fitness-2.jpg`, `fitness-3.jpg`
- **Dimensions**: 1920×1080px each
- **Description**: Different exercises being tracked, UI components, pose visualization

#### Project 3: Semantic Analysis Assistant

**Thumbnail**
- **Location**: `/public/images/projects/semantic-analysis.jpg`
- **Dimensions**: 1200×675px (16:9 ratio)
- **Description**: Dashboard showing sentiment analysis results

**Hero Image**
- **Location**: `/public/images/projects/semantic-analysis-hero.jpg`
- **Dimensions**: 1920×1080px (16:9 ratio)

**Screenshots** (2-3 images)
- **Location**: `/public/images/screenshots/semantic-1.jpg`, `semantic-2.jpg`
- **Dimensions**: 1920×1080px each
- **Description**: Analysis interface, response generation, classification results

---

### 3. Company & Organization Logos

**Cisco Systems Logo**
- **Location**: `/public/images/logos/cisco.svg` or `.png`
- **Dimensions**: 200×200px
- **Format**: SVG preferred, or PNG with transparent background
- **Usage**: Experience page

**IGDTUW Logo**
- **Location**: `/public/images/logos/igdtuw.png`
- **Dimensions**: 200×200px
- **Format**: PNG with transparent background preferred
- **Usage**: About page (education section)

**D. E. Shaw Logo**
- **Location**: `/public/images/logos/deshaw.svg` or `.png`
- **Dimensions**: 150×150px
- **Format**: SVG preferred
- **Usage**: Certifications page

---

## Image Optimization Guidelines

### File Formats
- **Photos**: Use WebP for best compression (Next.js handles conversion)
- **Logos**: SVG when possible, PNG with transparent background otherwise
- **Screenshots**: WebP or optimized JPG

### Optimization Tools
- **TinyPNG** or **Squoosh** for compression
- **Next.js Image Optimization**: Automatic when using `<Image>` component
- Target file size: <200KB for photos, <50KB for logos

### Naming Conventions
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `contextual-trpc-hero.jpg` not `image1.jpg`

---

## How to Add Images

1. **Create folders**: 
   ```bash
   mkdir -p public/images/profile public/images/projects public/images/logos public/images/screenshots public/images/organizations
   ```

2. **Add your images** to the appropriate folders

3. **Update data file** (`data/index.ts`):
   - Replace `image` paths in projects array
   - Example: `image: "/images/projects/contextual-trpc.jpg"`

4. **Update component files** that use profile images:
   - `components/sections/Hero.tsx`
   - `app/about/page.tsx`

---

## Temporary Placeholder Strategy

The site currently uses gradient placeholders. You can:
- **Option A**: Keep gradients until you have professional photos
- **Option B**: Use free stock images from Unsplash as temporary placeholders
- **Option C**: Use screenshots of your actual projects

---

## Priority Order

### High Priority (needed for professional look)
1. ✅ Project screenshots (use actual project screenshots)
2. ✅ Company logo (Cisco)
3. Profile hero image

### Medium Priority
4. About page image
5. Project hero images (can reuse thumbnails)

### Low Priority (optional)
6. Organization images for volunteering
7. Additional screenshots

---

## Quick Start

**Minimal set to get started** (3 images):
1. One profile photo (`hero.jpg`)
2. Three project screenshots (one per project)
3. Cisco logo

Everything else can use the current gradient placeholders!

---

## Need Help?

- **Free stock photos**: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Image compression**: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)
- **Logo creation**: [Canva](https://canva.com)
- **Screenshot tools**: Built-in OS tools, or [Greenshot](https://getgreenshot.org/)
