"use client"

import { usePathname } from "next/navigation"

import * as React from "react"
import Link from "next/link"
import { Menu, Home, Map, Clock, BookOpen, BarChart, Info, Library, GraduationCap, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import { INARTACT_NAV_EXTENSIONS_PHASE2 } from "@/lib/nav-extensions.phase2"
import { INARTACT_NAV_EXTENSIONS_PHASE3 } from "@/lib/nav-extensions.phase3"
import { INARTACT_NAV_EXTENSIONS_PHASE4 } from "@/lib/nav-extensions.phase4"
import { INARTACT_NAV_EXTENSIONS_PHASE6 } from "@/lib/nav-extensions.phase6"

const navigation = [
  { name: "Directory", href: "/", icon: Home },
  { name: "Map", href: "/activists/map", icon: Map },
  { name: "Timeline", href: "/activists/timeline", icon: Clock },
  { name: "Zine", href: "/activists/zine", icon: BookOpen },

  { name: "About", href: "/about", icon: Info },
  // Phase 2 Extensions
  { name: "Collections", href: "/collections", icon: Library },
  { name: "Timeline+", href: "/timeline/v2", icon: Calendar },
  { name: "Educators", href: "/education", icon: GraduationCap },
  // Phase 3 Extensions (Events)
  { name: "Events", href: "/events", icon: Calendar },
  // Phase 4 Extensions (Zine+, Contribute)
  { name: "Zine+", href: "/zine/v2", icon: BookOpen },
  { name: "Contribute", href: "/community/submit", icon: Info },
  // Phase 6 Extensions (Search)
  { name: "Search+", href: "/search", icon: BookOpen },
]

interface HeaderProps {
  hideNav?: boolean
}

export function Header({ hideNav = false }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const pathname = usePathname()

  return (
    <AnimatePresence>
      {!hideNav && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="w-full max-w-7xl mx-auto flex justify-center">
            <div className="w-auto rounded-full border border-white/20 bg-background/70 backdrop-blur-xl shadow-lg transition-all duration-300">
              <div className="flex h-14 items-center gap-6 px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold font-heading tracking-tight text-foreground">
                    {/* Home removed */}
                  </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setHoveredIndex(null)}>
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`relative px-4 py-2 text-base font-medium transition-colors ${isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
                          }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                      >
                        {/* Floating Pill */}
                        {(hoveredIndex === index || (isActive && hoveredIndex === null)) && (
                          <motion.div
                            layoutId="navbar-pill"
                            className={`absolute inset-0 rounded-full -z-10 ${isActive && hoveredIndex === null
                              ? "bg-secondary"
                              : "bg-secondary/50"
                              }`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </span>
                      </Link>
                    )
                  })}
                  <div className="pl-4 border-l border-border/50 ml-2">
                    <ThemeSwitcher />
                  </div>
                </nav>

                {/* Mobile Nav */}
                <div className="flex items-center md:hidden gap-4">
                  <ThemeSwitcher />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                      <div className="flex flex-col gap-6 mt-10">
                        <Link href="/" className="text-2xl font-bold font-heading mb-4">
                          {/* Home removed */}
                        </Link>
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-xl font-medium hover:text-primary transition-colors flex items-center gap-3"
                          >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}