"use client"

import { ArrowDownRight, ArrowRight, Download, Github, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const rotatingWords = ["performance", "fiabilite", "scalabilite", "securite"]

const focusNotes = [
  {
    label: "Ma progression",
    value: "Je cherche une equipe ou un environnement qui m'aide a grandir, developper mes competences et mettre en pratique tout ce que j'ai appris durant ma formation",
  },
]

const directLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hamiddiallo",
    helper: "Voir le code",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:abdoulhamid026@gmail.com",
    helper: "Ecrire directement",
    icon: Mail,
  },
  {
    label: "Telephone",
    href: "tel:+221777969762",
    helper: "Appeler",
    icon: Phone,
  },
]

export function HeroSection() {
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWordIndex((current) => (current + 1) % rotatingWords.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="section-block flex min-h-screen items-center pt-24 md:pt-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <Reveal className="space-y-8 lg:space-y-10">
          <div className="flex flex-wrap gap-3">
            <span className="stat-pill">
              <span className="eyebrow-dot" />
              Disponible pour opportunites
            </span>
            <span className="stat-pill">
              <MapPin className="size-4 text-accent" />
              Dakar-Senegal
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="display-title max-w-[11ch]">
              Je construis des Solutions{" "}
              <span className="text-primary">fiables</span>, <span className="text-accent">performantes</span> et
              faciles a faire evoluer.
            </h1>

            <div className="outline-panel inline-flex flex-wrap items-center gap-3 rounded-[1.35rem] px-4 py-4">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground">
                Ce que je propose
              </span>
              <span className="font-display text-[clamp(1.8rem,4vw,2.9rem)] leading-none tracking-[-0.04em] text-foreground">
                {rotatingWords[activeWordIndex]}
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Je m&apos;appelle <strong className="text-foreground">Mamadou Abdoul Hamid Diallo</strong> Developpeur web, avec une preference nette pour la
            conception cote serveur. Je recherche un{" "}
            <strong className="text-foreground">stage ou CDI en developpement</strong>.
            Stack cible&nbsp;:{" "}
            <strong className="text-foreground">Java · Spring Boot · Node.js · PostgreSQL</strong>.
            Disponible immediatement — presentiel ou hybride a Dakar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                Voir les projets
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a
                href="/cvHamidAJour.pdf"
                download
                aria-label="Telecharger le CV de Mamadou Abdoul Hamid Diallo"
              >
                <Download className="size-4" />
                Telecharger le CV
              </a>
            </Button>

            <Button size="lg" variant="ghost" asChild>
              <a href="#contact">Parler d&apos;une opportunite</a>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusNotes.map((note, index) => (
              <div key={note.label} className="editorial-card p-5" style={{ transitionDelay: `${index * 80}ms` }}>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary">{note.label}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="lg:pl-8">
          <div className="editorial-card p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">Profil</p>
                <p className="mt-2 font-display text-3xl tracking-[-0.04em] text-foreground">
                  Back-end et architecture
                </p>
              </div>
              <ArrowDownRight className="size-6 text-muted-foreground" />
            </div>

            <div className="profile-stage">
              <Image
                src="/profile-photo.jpg"
                alt="Portrait de Mamadou Abdoul Hamid Diallo"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 88vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent px-6 pb-6 pt-20">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-primary">
                  Mamadou Abdoul Hamid Diallo
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  J&apos;apprends mieux en construisant des Solutions reelles. Chaque projet est un terrain
                  d&apos;exploration, pas juste une livraison.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {directLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="outline-panel rounded-[1.2rem] px-4 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:bg-secondary/70"
                  >
                    <Icon className="size-4 text-primary" />
                    <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {link.helper}
                    </p>
                    <p className="mt-2 text-sm text-foreground">{link.label}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
