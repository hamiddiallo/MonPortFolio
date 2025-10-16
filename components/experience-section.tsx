import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Stage de Développement Full-Stack",
    company: "TechCorp Solutions",
    period: "Juin 2024 - Août 2024",
    type: "Stage",
    description:
      "Développement d'une application web de gestion de projets avec React et Node.js. Participation aux réunions agiles et collaboration avec l'équipe de développement.",
    achievements: [
      "Création de 15+ composants React réutilisables",
      "Implémentation d'une API RESTful complète",
      "Amélioration des performances de 40%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Projet Académique - Système de Réservation",
    company: "École Supérieure d'Informatique",
    period: "Janvier 2024 - Mai 2024",
    type: "Projet Académique",
    description:
      "Conception et développement d'un système de réservation en ligne pour une chaîne hôtelière. Travail en équipe de 4 personnes avec méthodologie Scrum.",
    achievements: [
      "Architecture microservices avec Spring Boot",
      "Interface utilisateur responsive avec Angular",
      "Intégration de paiement en ligne sécurisé",
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Stripe"],
  },
  {
    title: "Développeur Web Junior",
    company: "Digital Agency Pro",
    period: "Juillet 2023 - Septembre 2023",
    type: "Stage",
    description:
      "Développement de sites web pour des clients PME. Maintenance et optimisation de sites existants. Formation aux bonnes pratiques de développement web.",
    achievements: [
      "Livraison de 5 sites web clients",
      "Optimisation SEO et performances",
      "Formation à WordPress et PHP",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Expériences</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-effect p-6 md:p-8 rounded-lg space-y-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="h-4 w-4" />
                      <p className="font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    <p>{exp.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">Réalisations clés :</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
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
