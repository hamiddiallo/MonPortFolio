import { Badge } from "@/components/ui/badge"

const skillsData = {
  "Langages de Programmation": ["JavaScript", "TypeScript", "Python", "Java",  "PHP", "SQL"],
  "Frameworks & Technologies": ["React", "Next.js", "Node.js", "Express", "Spring Boot"],
  "Outils & Méthodologies": ["Git", "Docker","CI/CD", "Agile/Scrum", "VS Code"],
  "Bases de Données": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  "Soft Skills": ["Résolution de problèmes", "Travail en équipe", "Communication efficace", "Adaptabilité"],
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Compétences Techniques</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="glass-effect p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
