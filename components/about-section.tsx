import { Code2, Handshake, Layers3, Sparkles } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const profilePillars = [
  {
    title: "Back-end",
    description: "Concevoir des API robustes, modeliser les donnees et structurer une logique metier fiable.",
    icon: Code2,
  },
  {
    title: "Architecture",
    description: "Organiser un projet pour qu'il reste lisible, evolutif et agreable a faire vivre apres la premiere version.",
    icon: Layers3,
  },
  {
    title: "Collaboration",
    description: "Travailler avec methode, communiquer clairement et garder l'impact utilisateur au centre des decisions.",
    icon: Handshake,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Profil"
            title="Un profil qui couvre toute la stack, avec une vraie preference pour le serveur."
            description="Je travaille aussi le front-end, mais ma force principale est de construire une base technique solide cote serveur."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="editorial-card p-7 md:col-span-2 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
                  Ce qui m&apos;anime, c&apos;est d&apos;apprendre en Resolvant de vrais problemes qui ameliore le quotidien des utilisateurs.
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  En Master genie logiciel, je progresse avec une conviction simple : on apprend mieux sur de vrais
                  projets, avec de vraies contraintes. Je cherche un environnement ou je peux contribuer, poser des
                  questions et grandir vite.
                </p>
              </div>

              <Sparkles className="mt-1 hidden size-7 text-accent md:block" />
            </div>
          </Reveal>

          {profilePillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <Reveal key={pillar.title} delay={100 + index * 90} className="editorial-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-primary">
                      Axe {index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-foreground">{pillar.title}</h3>
                  </div>

                  <Icon className="size-5 text-accent" />
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
