import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import FeaturedTestimonials from "@/components/sections/FeaturedTestimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CompetitiveProgramming />
      <FeaturedTestimonials />
      <CTA />
    </>
  );
}
