import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  category: string
  highlight: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
}

const projects: Project[] = [
  {
    title: "SaaS de facturation & gestion",
    category: "SaaS · Serveur",
    highlight: "Auth, paiements, multi-entreprise — produit complet livré de A a Z.",
    description:
      "Plateforme SaaS pour creer et piloter des factures professionnelles, avec multi-devises, abonnements, paiements mobiles (Wave / Orange Money), tableau de bord admin et generation et partage des PDF via Api webShare.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "NextAuth"],
    github: "",
    demo: "https://facturation3-0.vercel.app",
    image: "/saasFacturation.png",
  },
  {
    title: "ERP de Gestion Commerciale & Stock",
    category: "ERP · Gestion d'Inventaire · Professionnel",
    highlight: "Architecture N-Tiers, Multi-dépôt, Multi-rôle, Multi-utilisateur, gestion des permissions & Intégrité Transactionnelle.",
    description:
      "Solution logicielle robuste pour le pilotage d'activité commerciale : gestion multi-entrepôts, cycle complet achats/ventes, suivi des créances clients, et génération de reporting financier automatisé avec exports PDF/XSL , .",
    technologies: ["PHP 8.x", "MySQL (PDO)", "Phinx", "Dompdf", "Monolog", "Composer"],
    github: "https://github.com/hamiddiallo/gestionStock.git",
    demo: "https://hamid-stock.up.railway.app/",
    image: "/GestionStock.png",
  },
  {
    title: "Backend E-Commerce API",
    category: "Backend · API REST",
    highlight: "Architecture N-Tier, Auth Supabase, Gestion de stock & PDF — une base solide et scalable.",
    description:
      "API REST robuste pour une plateforme e-commerce complète. Gère le cycle de vie des produits, le panier, les commandes avec verrouillage de sécurité, et la génération automatique de factures professionnelles en PDF.",
    technologies: ["Node.js", "Express", "Supabase", "Puppeteer", "Swagger", "JWT"],
    github: "https://github.com/hamiddiallo/backEnd_E_Commerce.git",
    demo: "https://backend-e-commerce-muti.onrender.com/api-docs/",
    image: "/apiEcommerce.png",
  },
  {
    title: "Resolution de labyrinthe",
    category: "Algorithmique",
    highlight: "Comparer BFS et DFS dans un environnement graphique concret.",
    description:
      "Projet Java de visualisation d'algorithmes pour resoudre automatiquement des labyrinthes et comparer leurs strategies d'exploration.",
    technologies: ["Java", "Algo DFS", "Algo BFS"],
    github: "https://github.com/hamiddiallo/ProjetLabyrinthe.git",
    demo: "https://youtu.be/kgarYZ3U7LY",
    image: "/labyrinthe.png",
  },
  {
    title: "Plateforme Vidéo Éducative - Backend API",
    category: "Backend / API RESTFULL",
    highlight: "API RESTFULL sécurisée avec JWT et architecture N-tier complète pour une plateforme de vidéos éducatives.",
    description:
      "Backend Java Spring Boot exposant une API RESTful pour gérer une plateforme d'apprentissage par vidéo. L'architecture N-tier repose sur un pattern DTO strict (séparation Request/Response), une authentification JWT multi-rôles (Admin, Instructeur, Étudiant), un hachage BCrypt des mots de passe, et une documentation Swagger auto-générée. Le projet est entièrement conteneurisé avec Docker (build multi-étapes)",
    technologies: [
      "Java 21",
      "Spring Boot 3.5",
      "Spring Security",
      "JWT (jjwt)",
      "Spring Data JPA",
      "MySQL 8",
      "Docker",
      "Swagger / OpenAPI",
      "Gradle",
      "Lombok"
    ],
    github: "https://github.com/hamiddiallo/backEndVideoEducatif.git",
    demo: "https://apivideoeducatif.onrender.com/swagger-ui/index.html",           // à renseigner si tu as une URL Render déployée
    image: "/videoeducatif.png",
  },
  {
    title: "Site de restaurant gastronomique",
    category: "Site vitrine",
    highlight: "Interface claire avec reservation et menu en ligne.",
    description:
      "Site pour un restaurant avec reservation en ligne, menu digital, galerie des plats et presentation de l'univers culinaire.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hamiddiallo/restaurant-app.git",
    demo: "https://restaurant-hamid.vercel.app/",
    image: "/restaurant.png",
  },
  {
    title: "Design patterns",
    category: "Architecture",
    highlight: "Mettre en pratique abstract factory et composite dans un projet de cours.",
    description:
      "Exercices d'architecture logicielle autour de fabriques de crackeurs de mot de passe et d'un systeme d'affichage d'arborescence inspire de tree.",
    technologies: ["Java"],
    github: "https://github.com/hamiddiallo/ProjetDesignPattern.git",
    demo: "",
    image: "/designPattern.png",
  },
  {
    title: "Pharmacie en ligne",
    category: "Site Web",
    highlight: "Parcours utilisateur simple sur un catalogue sensible.",
    description:
      "Site web vitrine pour une pharmacie avec catalogue, categories, gestion de stock et interface d'administration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/hamiddiallo/pharmacise.git",
    demo: "https://pharmacie-hamid.vercel.app/",
    image: "/pharmacy.png",
  },
]

const featuredProjects = projects.slice(0, 5)
const archiveProjects = projects.slice(5)

export function ProjectsSection() {
  return (
    <section id="projects" className="section-block">
      <div className="section-shell space-y-12">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Projets"
            title="Ma formation en génie logiciel, traduite en projets concrets du besoin à la solution"
            description="Un aperçu de mes réalisations : applications web, systèmes back-end et solutions sur mesure développés tout au long de mon cursus."
          />
        </Reveal>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={90 + index * 90}>
              <article className="editorial-card group overflow-hidden lg:grid lg:grid-cols-[0.96fr_1.04fr]">
                <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                  <div className="project-image-wrap relative min-h-[320px] lg:min-h-full">
                    <div className="absolute inset-4 md:inset-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-contain object-center"
                      />
                    </div>

                    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5">
                      <Badge variant="secondary">{project.category}</Badge>
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.26em] text-foreground/70">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <p className="numeric-label">0{index + 1}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-primary">
                      {project.highlight}
                    </p>
                    <h3 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.045em] text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>


                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.github ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/45 bg-background/55 text-foreground hover:border-primary hover:bg-primary/12 normal-case tracking-normal"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Voir le code du projet ${project.title}`}
                        >
                          <Github className="size-4" />
                          Voir le code
                        </a>
                      </Button>
                    ) : null}

                    {project.demo ? (
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground shadow-[0_12px_26px_rgba(0,0,0,0.2)] hover:bg-primary/92 normal-case tracking-normal"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Voir la demo du projet ${project.title}`}
                        >
                          <ExternalLink className="size-4" />
                          Voir la demo
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {archiveProjects.map((project, index) => (
              <article key={project.title} className="editorial-card flex h-full flex-col p-5">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-primary">
                      Projet {index + 1}
                    </p>
                    <h3 className="mt-3 break-words font-display text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className="ml-auto max-w-[8.5rem] whitespace-normal px-2.5 py-1 text-center text-[0.62rem] normal-case tracking-[0.04em] leading-tight"
                  >
                    {project.category}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.github ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/40 bg-background/50 text-foreground hover:border-primary hover:bg-primary/12 normal-case tracking-normal"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le code du projet ${project.title}`}
                      >
                        <Github className="size-4" />
                        Voir le code
                      </a>
                    </Button>
                  ) : null}
                  {project.demo ? (
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground shadow-[0_10px_22px_rgba(0,0,0,0.18)] hover:bg-primary/92 normal-case tracking-normal"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir la demo du projet ${project.title}`}
                      >
                        <ExternalLink className="size-4" />
                        Voir la demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
