import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master En Génie Logiciel et Système d'information",
    institution: "École Supérieur Polytechnique de Dakar",
    period: "2024 - Present",
    description:
      "Formation avancée en architecture logicielle, développement d'applications d'entreprise, systèmes d'information et gestion de projets informatiques.",
  },
  {
    degree: "Licence En Génie Logiciel et Système d'information",
    institution: "École Supérieur Polytechnique de Dakar",
    period: "2023 - 2024",
    description:
      "Formation approfondie en développement logiciel, conception de systèmes d'information et méthodologies agiles.",
  },
  {
    degree: "Diplôme Supérieur de Technologie en Informatique",
    institution: "École Supérieur Polytechnique de Dakar",
    period: "2023 - 2024",
    description:
      "Formation technique en informatique couvrant le développement, les réseaux et l'administration système.",
  },
  {
    degree: "Cours de langue Anglaise",
    institution: "Center Of Language Learning And Professional Training",
    period: "2020 - 2021",
    description: "Formation linguistique professionnelle en anglais pour le milieu technique et professionnel.",
  },
  {
    degree: "INFORMATIQUE Bureautique",
    specialization: "Excel, Word, PowerPoint",
    institution: "DEVY INTERNATIONAL CONSULTING",
    period: "2019 - 2020",
    description: "Maîtrise des outils bureautiques Microsoft Office pour la productivité professionnelle.",
  },
  {
    degree: "Baccalauréat",
    institution: "Lycée Saint-André, Guinée (Labé)",
    period: "2016 - 2019",
    description: "Diplôme de fin d'études secondaires.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Diplômes et Formations</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 hidden sm:block" />

            <div className="space-y-12">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="glass-effect p-6 rounded-lg space-y-3 hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-3 sm:hidden">
                        <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-sm text-primary font-mono">{item.period}</p>
                          <h3 className="text-xl font-semibold mt-1">{item.degree}</h3>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <p className="text-sm text-primary font-mono">{item.period}</p>
                        <h3 className="text-xl font-semibold mt-1">{item.degree}</h3>
                      </div>
                      {item.specialization && <p className="text-accent font-medium">{item.specialization}</p>}
                      <p className="text-muted-foreground font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
