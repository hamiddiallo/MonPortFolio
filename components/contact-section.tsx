"use client"

import type React from "react"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { ArrowUpRight, Download, Github, Mail, MapPin, Phone, Send } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const contactWays = [
  {
    label: "Email",
    value: "abdoulhamid026@gmail.com",
    href: "mailto:abdoulhamid026@gmail.com",
    icon: Mail,
  },
  {
    label: "Telephone",
    value: "+221 77 796 97 62",
    href: "tel:+221777969762",
    icon: Phone,
  },

  {
    label: "GitHub",
    value: "github.com/hamiddiallo",
    href: "https://github.com/hamiddiallo",
    icon: Github,
  },
]

type SubmissionState =
  | {
      type: "success" | "error"
      message: string
    }
  | null

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submissionState, setSubmissionState] = useState<SubmissionState>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionState({
        type: "error",
        message: "Merci de renseigner au minimum votre nom, votre email et votre message.",
      })
      return
    }

    setIsLoading(true)
    setSubmissionState(null)

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("La configuration EmailJS est incomplete.")
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          title: "From My Portfolio",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Message de ${formData.name}`,
          message: formData.message,
        },
        publicKey,
      )

      setSubmissionState({
        type: "success",
        message: "Message envoye avec succes. Je vous repondrai des que possible.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmissionState({
        type: "error",
        message:
          error instanceof Error
            ? `Envoi impossible: ${error.message}`
            : "Une erreur est survenue pendant l'envoi du message.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="section-block">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-6">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Contact"
              title="Un projet ou une idee ? Parlons-en."
              description="Je suis interesse par les projets ou il faut allier clarte, qualite technique et sens du detail."
            />
          </Reveal>

          <Reveal delay={90} className="editorial-card p-6 md:p-7">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-primary">
                  Contact direct
                </p>
                <p className="mt-3 font-display text-[2.2rem] leading-none tracking-[-0.04em] text-foreground">
                  Disponible pour echange
                </p>
              </div>
              <MapPin className="mt-1 size-5 text-accent" />
            </div>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Je suis base a Dakar et ouvert a des collaborations, stages, missions freelance ou projets personnels
              ambitieux.
            </p>

            <div className="mt-6 grid gap-3">
              {contactWays.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="outline-panel flex items-center justify-between gap-4 rounded-[1.2rem] px-4 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 hover:bg-secondary/70"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full border border-border/80 bg-background/40 p-3">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm text-foreground">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </a>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={130} className="space-y-5">
          {/* CTA rapide recruteur */}
          <div className="editorial-card flex flex-wrap items-center justify-between gap-4 p-5">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-primary">Action rapide</p>
              <p className="mt-1.5 text-sm text-foreground">Consultez mon CV ou planifiez un echange directement.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" asChild>
                <a
                  href="/cvHamidAJour.pdf"
                  download
                  aria-label="Telecharger le CV de Hamid Diallo"
                >
                  <Download className="size-4" />
                  Telecharger le CV
                </a>
              </Button>
            </div>
          </div>

          <div className="editorial-card p-6 md:p-8">
          <div className="flex flex-col gap-5 border-b border-border/70 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-primary">Votre message</p>
              <p className="mt-3 font-display text-[2.4rem] leading-none tracking-[-0.045em] text-foreground">
                Ecrivez-moi directement
              </p>
            </div>
            <span className="stat-pill px-4 py-3 text-[0.62rem]">Reponse sous 24-48h</span>
          </div>

          {submissionState ? (
            <div
              className={cn(
                "mt-6 rounded-[1.2rem] border px-4 py-4 text-sm leading-7",
                submissionState.type === "success"
                  ? "border-accent/30 bg-accent/10 text-foreground"
                  : "border-destructive/30 bg-destructive/10 text-foreground",
              )}
            >
              {submissionState.message}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-foreground/80">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-foreground/80"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-foreground/80">
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Parlez-moi du besoin, du projet ou du contexte"
                value={formData.subject}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-foreground/80">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Expliquez-moi l'objectif, le delai, ou simplement ce que vous voulez construire."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-border/70 pt-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                Stage, projet, mission freelance ou simple prise de contact: tout message clair est le bienvenu.
              </p>

              <Button type="submit" size="lg" disabled={isLoading}>
                {isLoading ? "Envoi..." : "Envoyer"}
                <Send className="size-4" />
              </Button>
            </div>
          </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
