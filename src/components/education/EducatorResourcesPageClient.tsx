"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { LessonPlan, LessonPlanCard } from "./LessonPlanCard";
import { GlossaryTerm, GlossarySection } from "./GlossarySection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

// Lesson Plan Data
const LESSON_PLANS: LessonPlan[] = [
  {
    title: "Art as Protest",
    grade: "Grades 9-12",
    standard: "Visual Arts / Civics",
    standardCode: "VA:Cr1.1.Ia, CV.2.3",
    summary:
      "Analyze how the 'Black Lives Matter' murals on Indiana Avenue served as both artistic expression and political assembly.",
    objectives: [
      "Define 'protest art' and identify its key characteristics.",
      "Analyze the historical significance of Indiana Avenue.",
      "Debate the effectiveness of temporary public art vs. permanent monuments.",
    ],
    procedures: [
      "1. Introduction (10 min): Show images of the 2020 BLM murals in Indianapolis.",
      "2. Context (15 min): Read background on Indiana Avenue's history as a Black cultural hub.",
      "3. Analysis (20 min): Small groups select one letter from the mural and research the artist.",
      "4. Discussion (15 min): Why did the artists choose this specific location? What happened to the mural?",
    ],
  },
  {
    title: "Mapping Your Narratives",
    grade: "Grades 6-8",
    standard: "Geography / History",
    standardCode: "6.1.15, VA:Cn11.1.8a",
    summary:
      "Students use the Activist Map to identify art in their own neighborhoods and create a 'place-based' biography of their community.",
    objectives: [
      "Use reading skills to extract information from a digital map.",
      "Identify 3 examples of public art in their local area.",
      "Explain how geography influences the type of art found in a community.",
    ],
    procedures: [
      "1. Exploration (15 min): Students explore the 'Activist Map' on the website.",
      "2. Scavenger Hunt (20 min): Find the closest artwork to their school/home.",
      "3. Creation (20 min): Sketch a proposal for a new artwork in a specific empty lot or wall.",
      "4. Presentation (10 min): Explain why that location needs art.",
    ],
  },
  {
    title: "Protest in Print",
    grade: "Grades 5-12",
    standard: "Media Arts / Literacy",
    standardCode: "MA:Cr3.1.8a, 8.W.3.2",
    summary:
      "Learn the history of zines as a tool for underground communication and create a digital zine to advocate for a cause.",
    objectives: [
      "Define 'zine' and explain their historical role in activism (e.g., riot grrrl, punk scene).",
      "Combine text and imagery to create a persuasive message.",
      "Use the digital Zine Builder tool to publish a mini-magazine.",
    ],
    procedures: [
      "1. History (10 min): Brief slideshow on the history of DIY publishing.",
      "2. Brainstorming (10 min): Pick a cause you care about (e.g., recycling, bullying, parks).",
      "3. Workshop (25 min): Use the 'Zine Builder' on this site to select standard layouts and add text/stamps.",
      "4. Share (10 min): Swap digital zines with a partner and identify the main argument.",
    ],
    actionLink: "/zine/v2",
    actionLabel: "Open Zine Builder",
  },
  {
    title: "Colors of Culture",
    grade: "Grades 4-5",
    standard: "Social Studies",
    standardCode: "4.1.18, VA:Re7.2.4a",
    summary:
      "Explore how artists like The Eighteen Art Collective use color to represent identity and history in Indianapolis.",
    objectives: [
      "Identify primary and secondary colors in a mural.",
      "Discuss how colors can represent feelings or cultural identity.",
      "Learn about 'The Eighteen Art Collective'.",
    ],
    procedures: [
      "1. Color Walk (10 min): Look at images of 'The Eighteen' murals.",
      "2. Vocabulary (10 min): Define 'Collective' and 'Symbolism'.",
      "3. Application (20 min): Students pick 3 colors that represent themselves and create a mini-flag.",
      "4. Reflection (10 min): Share flags and explain color choices.",
    ],
  },
];

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Social Practice",
    def: "An art medium that focuses on social engagement, inviting collaboration with individuals, communities, and institutions in the creation of participatory art.",
  },
  {
    term: "Ephemeral Art",
    def: "Art that is temporary and designed to decay or disappear over time, such as sidewalk chalk protest messages or wheat-paste posters.",
  },
  {
    term: "Gentrification",
    def: "The process whereby the character of a poor urban area is changed by wealthier people moving in, improving housing, and attracting new businesses, often displacing current inhabitants.",
  },
  {
    term: "Muralism",
    def: "The artistic practice of painting large-scale artworks on walls or ceilings, often used to make art accessible to the public outside of galleries.",
  },
];

export default function EducatorResourcesPageClient() {
  const [gradeFilter, setGradeFilter] = useState<string>("All");

  const filteredPlans = useMemo(() => {
    if (gradeFilter === "All") return LESSON_PLANS;
    // Simple naive filter. Real world might need range checking.
    // Our data: "Grades 9-12", "Grades 6-8", "Grades 5-12", "Grades 4-5"
    // Filter options: "Secondary (6-12)", "Elementary (K-5)"

    if (gradeFilter === "Elementary") {
      return LESSON_PLANS.filter(p => p.grade.includes("4-5") || p.grade.includes("K-5"));
    }
    if (gradeFilter === "Secondary") {
      return LESSON_PLANS.filter(p => p.grade.includes("6-8") || p.grade.includes("9-12") || p.grade.includes("5-12"));
    }
    return LESSON_PLANS;
  }, [gradeFilter]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Educator Resources
        </h1>
        <p className="text-lg text-muted-foreground">
          Bring Indiana’s art activism history into your classroom. These materials
          are designed for 4th-12th grade social studies and art curricula.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Lesson Plans Section - 8 cols */}
        <div className="md:col-span-8 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span>📚</span> Lesson Plans
              </h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Filter:</span> {gradeFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setGradeFilter("All")}>
                    All Grades
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setGradeFilter("Elementary")}>
                    Elementary (K-5)
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setGradeFilter("Secondary")}>
                    Secondary (6-12)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredPlans.length > 0 ? (
                filteredPlans.map((plan, i) => (
                  <LessonPlanCard key={i} plan={plan} />
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-muted-foreground border border-dashed rounded-lg">
                  No lesson plans found for this filter.
                </div>
              )}
            </div>
          </div>

          <GlossarySection terms={GLOSSARY_TERMS} />
        </div>

        {/* Sidebar Section - 4 cols */}
        <div className="md:col-span-4 space-y-6">
          {/* Discussion Guide */}
          <div className="rounded-2xl border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💬</span> Discussion Guide
            </h2>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-xl border border-border">
                <h3 className="font-semibold text-xs uppercase tracking-wide opacity-70 mb-2">
                  Pre-Visit Questions
                </h3>
                <ul className="list-disc pl-4 space-y-2 text-xs opacity-90">
                  <li>
                    What is the difference between &quot;vandalism&quot; and
                    &quot;street art&quot;? Who decides?
                  </li>
                  <li>
                    Can a painting or sculpture change how people think? Give an
                    example.
                  </li>
                  <li>
                    Why do you think artists choose to work in public spaces instead
                    of museums?
                  </li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <h3 className="font-semibold text-xs uppercase tracking-wide opacity-70 mb-2">
                  Analysis Questions
                </h3>
                <ul className="list-disc pl-4 space-y-2 text-xs opacity-90">
                  <li>How does the location of this artwork change its meaning?</li>
                  <li>
                    What symbols or colors does the artist use to communicate their
                    message?
                  </li>
                  <li>Who is the intended audience for this piece?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Virtual Tools */}
          <div className="rounded-2xl border border-border bg-primary/5 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>💻</span> Virtual Tools
            </h2>
            <p className="text-xs opacity-80 mb-4">
              Interactive modes designed for student exploration.
            </p>
            <div className="space-y-3">
              <Link
                href="/activists/timeline"
                className="block rounded-lg bg-background p-3 shadow-sm border border-border hover:border-primary transition-colors cursor-pointer"
              >
                <div className="font-bold text-sm flex items-center justify-between">
                  Timeline Scavenger <span className="text-xs">↗</span>
                </div>
                <p className="text-xs opacity-60 mt-1">
                  Find 5 events where art directly impacted a law or policy.
                </p>
              </Link>
              <Link
                href="/activists/map"
                className="block rounded-lg bg-background p-3 shadow-sm border border-border hover:border-primary transition-colors cursor-pointer"
              >
                <div className="font-bold text-sm flex items-center justify-between">
                  Map Odyssey <span className="text-xs">↗</span>
                </div>
                <p className="text-xs opacity-60 mt-1">
                  Plan a walking tour visiting 3 murals within 1 mile.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
