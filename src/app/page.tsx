// src/app/page.tsx
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      {/* Later: SkillsSection, ExperienceSection, EducationSection, ContactSection */}
    </>
  );
}
