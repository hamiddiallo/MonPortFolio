import { Briefcase, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Stage de Développement Full-Stack",
    company: "Atech Cybbersecurité",
    period: "Juin 2024 - Juillet 2024",
    type: "Stage",
    description:
      "Développement d’un système de recommandation intelligent pour une plateforme de streaming vidéo éducatif, utilisant Python et l’algorithme K-Means afin de proposer des contenus personnalisés selon le profil des apprenants. Collaboration avec l’équipe data et participation aux revues de sprint dans un cadre agile.",
    achievements: [
      "Création de 15+ composants React réutilisables",
      "Implémentation d'une API RESTful complète",
      "Amélioration des performances de 40%",
    ],
    technologies: ["Python", "Scikit-Learn", "MySQL", "PHP"],
  },
  {
    title: "Projet Académique - Système de détection de fake news",
    company: "École Supérieure d'Informatique",
    period: "juin 2023 - juillet 2023",
    type: "Projet Académique",
    description:
      "Conception et développement d’un système intelligent de détection de fausses informations en ligne. Le projet avait pour objectif d’analyser et de classifier des articles d’actualité afin de distinguer les contenus véridiques des fake news, en s’appuyant sur l’apprentissage automatique et le traitement du langage naturel (NLP).",
    achievements: [
      "Mise en place d’un processus de collecte automatisée de données via le web scraping et l’outil Selenium pour constituer un corpus d’articles d’actualité.",
      "Nettoyage, prétraitement et vectorisation des textes pour l’entraînement du modèle de classification.",
      "Implémentation et évaluation d’algorithmes de machine learning en Python afin d’améliorer la précision de détection des fake news.",
    ],
    technologies: ["Python", "Selenium", "BeautifulSoup", "Scikit-learn", "Pandas"],
  }
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
