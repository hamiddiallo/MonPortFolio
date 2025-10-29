import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Site de Restaurant Gastronomique",
    description:
      "Site web moderne pour un restaurant avec système de réservation en ligne, menu digital interactif et présentation élégante des plats. L'application inclut une galerie photo des spécialités, les horaires d'ouverture, et les informations de contact. Design responsive mettant en valeur l'ambiance du restaurant avec des animations fluides et une interface utilisateur intuitive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hamiddiallo/restaurant-app.git",
    demo: "https://restaurant-hamid.vercel.app/",
    image: "/restaurant.png",
  },
  {
    title: "Projet de Résolution de Labyrinthe",
    description:
      "Ce projet implémente deux algorithmes classiques de parcours de graphes — DFS (Depth-First Search) et BFS (Breadth-First Search) — pour la résolution automatique de labyrinthes. Il permet de comparer leurs comportements en explorant les chemins possibles et en identifiant la route la plus courte vers la sortie. L’objectif est de démontrer les différences entre une exploration en profondeur et une exploration en largeur dans un environnement graphique interactif.",
    technologies: ["Java", "DFS", "BFS"],
    github: "https://github.com/hamiddiallo/ProjetLabyrinthe.git",
    demo: "https://youtu.be/kgarYZ3U7LY",
    image: "/labyrinthe.png",
  },
  {
    title: "Design Pattern",
    description:
      "Ce projet est un projet de classe qui met en pratique le pattern abstract factory pour creer deux fabriques de crackeur de mot de passe (en ligne et local). Et aussi le pattern composite pour creer un programme qui affiche le contenu de chaque repertoire depuis la racine specié comme la commande tree sur Linux",
    technologies: ["Java"],
    github: "https://github.com/hamiddiallo/ProjetDesignPattern.git",
    demo: "",
    image: "/designPattern.png",
  },
  {
    title: "Site Web de Pharmacie en Ligne",
    description:
      "Plateforme e-commerce complète pour une pharmacie, permettant la vente en ligne de produits pharmaceutiques et para-pharmaceutiques. Le site inclut un système de gestion des stocks, un catalogue de produits organisé par catégories, et une interface administrateur pour gérer les commandes. Conçu avec une approche UX optimisée pour une navigation intuitive et accessible.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hamiddiallo/pharmacise.git",
    demo: "https://pharmacie-hamid.vercel.app/",
    image: "/pharmacy.png",
  },
  {
    title: "Application Web de Gestion de Stock",
    description:
      "Application web de gestion de stock et de facturation permettant de suivre les entrées et sorties de produits, gérer les fournisseurs, un paiement progressive des ventes, et générer automatiquement des factures claires et précises.",
    technologies: ["Html", "Css", "JavaScript", "PHP"],
    github: "https://github.com/hamiddiallo/gestionStock.git",
    demo: "",
    image: "/GestionStock.png",
  },
  {
    title: "Système de recommandation dans les services de streaming de video educatif",
    description:
      "Ce système de recommandation intelligent s’appuie sur des techniques de clustering, notamment l’algorithme K-Means, pour analyser les comportements des apprenants et regrouper leurs profils selon leurs centres d’intérêt. Intégré à une plateforme de streaming éducatif, il propose des contenus personnalisés afin d’optimiser l’expérience d’apprentissage de chaque utilisateur.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "PHP"],
    github: "",
    demo: "",
    image: "/data-analytics-portfolio.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Projets</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une sélection de projets académiques et personnels démontrant mes compétences techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && project.github.trim() !== "" && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && project.demo.trim() !== "" && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Démo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
