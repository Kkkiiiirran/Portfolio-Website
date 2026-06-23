import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedSkills from "@/components/sections/FeaturedSkills";
import FeaturedTestimonials from "@/components/sections/FeaturedTestimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedSkills />
      <FeaturedTestimonials />
      <CTA />
    </>
  );
}
