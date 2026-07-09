import { AchievementsSection } from "@/features/portfolio/components/achievements-section";
import { AboutSection } from "@/features/portfolio/components/about-section";
import { EducationSection } from "@/features/portfolio/components/education-section";
import { EngineeringLabSection } from "@/features/portfolio/components/engineering-lab-section";
import { FeaturedProjectsSection } from "@/features/portfolio/components/featured-projects-section";
import { HeroSection } from "@/features/portfolio/components/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <FeaturedProjectsSection />
      <EngineeringLabSection />
      <AchievementsSection />
    </>
  );
}
