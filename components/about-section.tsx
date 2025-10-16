import { Code2, Lightbulb, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">À Propos</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Actuellement en <span className="text-foreground font-semibold">Bac+5 en Génie Informatique</span>,
              spécialisation{" "}
              <span className="text-foreground font-semibold">Génie Logiciel et Systèmes d'Information</span>, je suis
              passionné par le développement de solutions logicielles innovantes et performantes.
            </p>
            <p>
              Mon parcours académique m'a permis d'acquérir une solide expertise en conception et développement
              d'applications, architecture logicielle, et gestion de projets informatiques. Je m'intéresse
              particulièrement aux technologies modernes et aux méthodologies agiles.
            </p>
            <p>
              Au-delà de la technique, je valorise la collaboration, l'apprentissage continu et la création de solutions
              qui ont un impact réel sur les utilisateurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass-effect p-6 rounded-lg space-y-3 hover:border-primary/50 transition-colors">
              <Code2 className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Développement</h3>
              <p className="text-sm text-muted-foreground">
                Création d'applications web et logicielles robustes et scalables
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg space-y-3 hover:border-primary/50 transition-colors">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Exploration de nouvelles technologies et approches créatives
              </p>
            </div>
            <div className="glass-effect p-6 rounded-lg space-y-3 hover:border-primary/50 transition-colors">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimisation et qualité du code pour des solutions efficaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
