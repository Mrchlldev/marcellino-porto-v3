import { AboutSection, ContactSection, EducationSection, HeroSection, ProjectSection, SkillSection } from "@/components/Sections";
import { Marquee } from "@/components/Marquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
