"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Profil", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#hero")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 28)

      const probe = window.scrollY + window.innerHeight * 0.32
      let current = navItems[0]?.href ?? "#hero"

      navItems.forEach((item) => {
        const section = document.querySelector(item.href)

        if (section instanceof HTMLElement && probe >= section.offsetTop) {
          current = item.href
        }
      })

      setActiveSection(current)
    }

    updateNavigation()
    window.addEventListener("scroll", updateNavigation, { passive: true })

    return () => window.removeEventListener("scroll", updateNavigation)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLight = mounted && resolvedTheme === "light"

  return (
    <nav className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-700", isScrolled ? "pt-3" : "pt-5")}>
      <div className="section-shell">
        <div
          className={cn(
            "outline-panel flex items-center justify-between rounded-full px-4 py-3 backdrop-blur-xl transition-all duration-700",
            isScrolled
              ? "bg-background/88 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
              : "bg-background/55 shadow-[0_10px_30px_rgba(0,0,0,0.16)]",
          )}
        >
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <span className="eyebrow-dot" />
            <div className="min-w-0">
              <p className="font-display text-2xl leading-none tracking-[-0.05em] text-foreground">Hamid</p>
              <p className="hidden font-mono text-[0.62rem] uppercase tracking-[0.28em] text-foreground/80 sm:block">
                Full-stack oriente back-end
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 font-mono text-[0.67rem] uppercase tracking-[0.18em] transition-all duration-500",
                    isActive
                      ? "bg-primary/18 text-foreground ring-1 ring-primary/35"
                      : "text-foreground/80 hover:bg-secondary/80 hover:text-foreground",
                  )}
                >
                  {item.label}
                </a>
              )
            })}

            <Button asChild size="sm" className="ml-2">
              <a href="#contact">
                Discuter
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            className="mr-1"
            onClick={() => setTheme(isLight ? "dark" : "light")}
            aria-label={isLight ? "Passer au mode sombre" : "Passer au mode clair"}
            title={isLight ? "Mode sombre" : "Mode clair"}
          >
            {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {isMobileMenuOpen ? (
          <div className="editorial-card mt-3 rounded-[1.6rem] p-4 lg:hidden">
            <div className="mb-4 flex items-center justify-between border-b border-border/70 pb-4">
              <div>
                <p className="font-display text-2xl tracking-[-0.04em]">Navigation</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/80">
                  Menu du portfolio
                </p>
              </div>
              <span className="stat-pill px-3 py-2 text-[0.6rem]">Disponible</span>
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-[1rem] px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-all duration-500",
                      isActive
                        ? "bg-primary/16 text-foreground ring-1 ring-primary/35"
                        : "bg-background/40 text-foreground/80 hover:bg-secondary/80 hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
