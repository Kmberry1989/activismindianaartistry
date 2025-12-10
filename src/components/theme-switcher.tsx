"use client"

import * as React from "react"
import { Moon, Sun, Palette, Leaf, Cookie, Bird, Wheat, Flower } from "lucide-react" 
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          {/* Icon Logic: Show Sun for Light, Moon for Dark, Palette for custom themes */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sugar:scale-0 tuliptree:scale-0 cardinal:scale-0 hoosier:scale-0 peony:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sugar")}>
          <Cookie className="mr-2 h-4 w-4" />
          Sugar Cream
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("tuliptree")}>
          <Leaf className="mr-2 h-4 w-4" />
          Tuliptree
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cardinal")}>
          <Bird className="mr-2 h-4 w-4" />
          Cardinal
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("hoosier")}>
          <Wheat className="mr-2 h-4 w-4" />
          Hoosier
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("peony")}>
          <Flower className="mr-2 h-4 w-4" />
          Peony
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Palette className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}