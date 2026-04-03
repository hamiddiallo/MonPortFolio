import { Briefcase, Calendar } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Stage de developpement — systeme de recommandation",
    company: "Atech Cybbersecurite",
    period: "Juin 2024 - Juillet 2024",
    type: "Stage",
    description:
      "Developpement d'un systeme de recommandation pour une plateforme de streaming video educatif, avec une logique de personnalisation basee sur les profils apprenants.",
    achievements: [
      "Travail sur la recommandation intelligente et la personnalisation de contenus.",
      "Collaboration avec l'equipe data dans un cadre agile et iteratif.",
      "Amelioration de la pertinence des contenus proposes selon les profils apprenants.",
    ],
    technologies: ["Python", "Scikit-Learn", "MySQL", "PHP"],
  },
  {
    title: "Projet academique: detection de fake news",
    company: "Ecole Superieure d'Informatique",
    period: "Juin 2023 - Juillet 2023",
    type: "Projet academique",
    description:
      "Conception d'un systeme intelligent de detection de fausses informations en ligne, avec collecte automatisee, traitement des textes et entrainement de modeles de classification.",
    achievements: [
      "Mise en place d'une collecte automatisee avec Selenium pour constituer le corpus.",
      "Nettoyage, pretraitement et vectorisation des textes avant apprentissage.",
      "Evaluation de modeles Python pour ameliorer la precision de classification.",
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Scikit-Learn", "Pandas"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block">
      <div className="section-shell space-y-12">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Experience"
            title="Des experiences centrees sur la logique metier, la data et la conception serveur."
            description="J'accorde beaucoup d'importance aux preuves concretes: ce que le projet demandait, ce que j'ai apporte et ce que cela dit de ma maniere de travailler."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} delay={80 + index * 90} className="editorial-card p-6 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/70 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{experience.type}</Badge>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-primary">
                      Mission {index + 1}
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-[2.3rem] leading-none tracking-[-0.045em] text-foreground">
                    {experience.title}
                  </h3>
                </div>

                <div className="space-y-2 text-right">
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    <Briefcase className="size-4 text-primary" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    <Calendar className="size-4 text-accent" />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">{experience.description}</p>

              <div className="mt-6 space-y-3">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-foreground/70">
                  Contributions
                </p>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-2 size-1.5 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
