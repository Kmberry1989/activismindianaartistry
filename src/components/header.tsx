"use client"

import { usePathname } from "next/navigation"

import * as React from "react"
import Link from "next/link"
import {
  Menu, Home, Map, Clock, BookOpen,
  Info, Library, GraduationCap, Calendar,
  Search, Users, Heart, PenTool, Compass, ChevronDown
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// New hierarchical navigation structure
const navigationData = [
  {
    name: "Directory",
    href: "/",
    icon: Home
  },
  {
    name: "Discover",
    icon: Compass,
    items: [
      { name: "Map", href: "/activists/map", icon: Map },
      { name: "Search", href: "/search", icon: Search },
      { name: "Collections", href: "/collections", icon: Library },
    ]
  },
  {
    name: "Timeline",
    icon: Clock,
    items: [
      { name: "Standard View", href: "/activists/timeline", icon: Clock },
      { name: "Interactive (V2)", href: "/timeline/v2", icon: Calendar },
    ]
  },
  {
    name: "Community",
    icon: Users,
    items: [
      { name: "Events", href: "/events", icon: Calendar },
      { name: "Zine Gallery", href: "/activists/zine", icon: BookOpen },
      { name: "Zine Builder", href: "/zine/v2", icon: PenTool },
      { name: "Contribute", href: "/community/submit", icon: Heart },
    ]
  },
  {
    name: "Resources",
    icon: Info,
    items: [
      { name: "About", href: "/about", icon: Info },
      { name: "Educators", href: "/education", icon: GraduationCap },
    ]
  }
]

interface HeaderProps {
  hideNav?: boolean
}

export function Header({ hideNav = false }: HeaderProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<string | null>(null)
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

                {/* Logo Link (Empty content per original design, just for click target if needed) */}
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold font-heading tracking-tight text-foreground">
                  </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-2" onMouseLeave={() => setHoveredIndex(null)}>
                  {navigationData.map((item) => {
                    // Check if any child is active to highlight parent
                    const isParentActive = item.items?.some(sub => pathname === sub.href) || pathname === item.href

                    if (item.items) {
                      // Dropdown Menu for Categories
                      return (
                        <DropdownMenu key={item.name}>
                          <DropdownMenuTrigger asChild>
                            <button
                              className={`relative px-4 py-2 text-base font-medium transition-colors outline-none flex items-center gap-2 group ${isParentActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
                                }`}
                              onMouseEnter={() => setHoveredIndex(item.name)}
                            >
                              {(hoveredIndex === item.name || isParentActive) && (
                                <motion.div
                                  layoutId="navbar-pill"
                                  className={`absolute inset-0 rounded-full -z-10 ${isParentActive && hoveredIndex !== item.name
                                      ? "bg-secondary"
                                      : "bg-secondary/50"
                                    }`}
                                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                              )}
                              <item.icon className="w-4 h-4" />
                              {item.name}
                              <ChevronDown className="w-3 h-3 opacity-50 group-data-[state=open]:rotate-180 transition-transform" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="center" className="w-48 bg-background/95 backdrop-blur-md rounded-xl border-border/50">
                            {item.items.map((subItem) => (
                              <DropdownMenuItem key={subItem.name} asChild>
                                <Link
                                  href={subItem.href}
                                  className={`flex items-center gap-2 cursor-pointer ${pathname === subItem.href ? "text-primary font-medium" : ""}`}
                                >
                                  <subItem.icon className="w-4 h-4 opacity-70" />
                                  <span>{subItem.name}</span>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )
                    }

                    // Direct Link
                    return (
                      <Link
                        key={item.name}
                        href={item.href || "/"}
                        className={`relative px-4 py-2 text-base font-medium transition-colors ${pathname === item.href ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
                          }`}
                        onMouseEnter={() => setHoveredIndex(item.name)}
                      >
                        {(hoveredIndex === item.name || (pathname === item.href && hoveredIndex === null)) && (
                          <motion.div
                            layoutId="navbar-pill"
                            className={`absolute inset-0 rounded-full -z-10 ${pathname === item.href && hoveredIndex === null
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
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                      <div className="flex flex-col gap-6 mt-10">
                        {navigationData.map((item) => (
                          <div key={item.name} className="flex flex-col gap-3">
                            {item.items ? (
                              <>
                                <div className="text-sm font-semibold opacity-50 uppercase tracking-wider flex items-center gap-2">
                                  <item.icon className="w-4 h-4" />
                                  {item.name}
                                </div>
                                <div className="pl-4 flex flex-col gap-3 border-l border-border/40 ml-1">
                                  {item.items.map(subItem => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={`text-lg font-medium hover:text-primary transition-colors flex items-center gap-3 ${pathname === subItem.href ? "text-primary" : "text-foreground/80"
                                        }`}
                                    >
                                      <subItem.icon className="w-4 h-4" />
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                href={item.href || "/"}
                                className={`text-xl font-bold font-heading hover:text-primary transition-colors flex items-center gap-3 ${pathname === item.href ? "text-primary" : "text-foreground"
                                  }`}
                              >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                              </Link>
                            )}
                          </div>
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