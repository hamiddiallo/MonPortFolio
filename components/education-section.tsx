import { GraduationCap } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "Master en genie logiciel et systemes d'information",
    institution: "Ecole Superieure Polytechnique de Dakar",
    period: "2024 - Aujourd'hui",
    description:
      "Formation avancee en architecture logicielle, applications d'entreprise, systemes d'information et gestion de projets informatiques.",
  },
  {
    degree: "Licence en genie logiciel et systemes d'information",
    institution: "Ecole Superieure Polytechnique de Dakar",
    period: "2023 - 2024",
    description: "Approfondissement du developpement logiciel, de la conception des SI et des methodes agiles.",
  },
  {
    degree: "Diplome superieur de technologie en informatique",
    institution: "Ecole Superieure Polytechnique de Dakar",
    period: "2023 - 2024",
    description: "Base technique large: developpement, reseaux, administration systeme et logique d'exploitation.",
  },
  {
    degree: "Cours de langue anglaise",
    institution: "Center Of Language Learning And Professional Training",
    period: "2020 - 2021",
    description: "Formation linguistique orientee environnement professionnel et technique.",
  },
  {
    degree: "Informatique bureautique",
    specialization: "Excel, Word, PowerPoint",
    institution: "DEVY International Consulting",
    period: "2019 - 2020",
    description: "Maitrise des outils bureautiques pour la productivite et la communication professionnelle.",
  },
  {
    degree: "Baccalaureat",
    institution: "Lycee Saint-Andre, Labe",
    period: "2016 - 2019",
    description: "Diplome de fin d'etudes secondaires en Guinee.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="section-block">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.84fr_1.16fr]">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Formation"
            title="Une formation solide pour construire des Solutions fiables."
            description="Chaque etape m'a fait progresser en architecture logicielle, en methode et en execution technique."
          />
        </Reveal>

        <div className="space-y-4">
          {education.map((item, index) => (
            <Reveal key={`${item.degree}-${item.period}`} delay={70 + index * 60} className="editorial-card p-6 md:p-7">
              <div className="grid gap-5 md:grid-cols-[9rem_1fr]">
                <div className="space-y-4 border-b border-border/70 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="size-5 text-primary" />
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Etape {index + 1}
                    </p>
                  </div>
                  <p className="font-display text-[1.75rem] leading-none tracking-[-0.04em] text-foreground">
                    {item.period}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-[2rem] leading-none tracking-[-0.04em] text-foreground">
                    {item.degree}
                  </h3>
                  {item.specialization ? (
                    <div className="mt-4">
                      <Badge variant="secondary">{item.specialization}</Badge>
                    </div>
                  ) : null}
                  <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.24em] text-primary">
                    {item.institution}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
