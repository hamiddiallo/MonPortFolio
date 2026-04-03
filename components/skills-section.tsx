import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    index: "01",
    title: "Back-end",
    summary: "Concevoir des services fiables, des API claires et une logique metier bien structuree.",
    skills: ["Node.js", "Express", "Spring Boot", "PHP", "API REST", "SQL"],
  },
  {
    index: "02",
    title: "Bases de donnees",
    summary: "Modeliser et exploiter les donnees de maniere performante et maintenable.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Schema design", "Optimisation SQL"],
  },
  {
    index: "03",
    title: "Front-end",
    summary: "Construire des interfaces propres et responsives pour valoriser la logique metier.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    index: "04",
    title: "Data & logique",
    summary: "Transformer des besoins en systemes exploitables, du traitement de donnees a la recommandation et a l'automatisation.",
    skills: ["Python", "Pandas", "Scikit-Learn", "K-Means", "BFS", "DFS"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-block">
      <div className="section-shell space-y-12">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Competences"
            title="J'ai des bases bien assise sur les outils de production logiciel."
            description="Je reste polyvalent, mais je suis plus a l'aise sur la conception serveur, les API et la logique metier."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={80 + index * 70} className="editorial-card p-6 md:p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-primary">{group.index}</p>
                  <h3 className="mt-3 font-display text-[2rem] leading-none tracking-[-0.04em] text-foreground">
                    {group.title}
                  </h3>
                </div>
                {/* <span className="numeric-label">{group.index}</span> */}
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{group.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
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
