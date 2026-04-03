import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div className={cn("space-y-5", centered && "mx-auto text-center", className)}>
      <div className={cn("flex items-center gap-4", centered && "justify-center")}>
        <span className="section-index">{index}</span>
        <span className="section-kicker">{eyebrow}</span>
      </div>

      <div className={cn("space-y-4", centered && "mx-auto max-w-3xl")}>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </div>
  )
}
