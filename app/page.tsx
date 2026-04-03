import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="page-shell min-h-screen bg-background text-foreground">
      <div className="ambient-orb ambient-orb-primary" />
      <div className="ambient-orb ambient-orb-accent" />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="section-shell relative z-10 pb-10 pt-4">
        <div className="outline-panel flex flex-col gap-3 rounded-[1.5rem] px-6 py-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Mamadou Abdoul Hamid Diallo.</p>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-foreground/70">Dakar-Senegal · Conakry-Guinée</p>
        </div>
      </footer>
    </div>
  )
}
