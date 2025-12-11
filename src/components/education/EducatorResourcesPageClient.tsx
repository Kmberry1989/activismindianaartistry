"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Lesson Plan Data
const LESSON_PLANS = [
  {
    title: "Art as Protest",
    grade: "Grades 9-12",
    standard: "Visual Arts / Civics",
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
    title: "Colors of Culture",
    grade: "Grades 4-5",
    standard: "Social Studies",
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

export default function EducatorResourcesPageClient() {
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Lesson Plans Section */}
        <div className="col-span-full mb-4">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📚</span> Lesson Plans
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LESSON_PLANS.map((plan, i) => (
              <Sheet key={i}>
                <div className="group relative rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {plan.grade}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider opacity-60">
                      Viewable
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {plan.title}
                  </h3>
                  <p className="mt-1 text-xs opacity-60 font-medium">
                    {plan.standard}
                  </p>
                  <p className="mt-3 text-sm opacity-80 leading-relaxed flex-1">
                    {plan.summary}
                  </p>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="mt-4 w-full"
                    >
                      View Lesson Plan
                    </Button>
                  </SheetTrigger>
                </div>

                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-2xl">{plan.title}</SheetTitle>
                    <SheetDescription>
                      {plan.grade} • {plan.standard}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">
                        Objectives
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {plan.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">
                        Procedures
                      </h4>
                      <div className="space-y-3">
                        {plan.procedures.map((step, idx) => (
                          <p key={idx} className="text-sm bg-muted/30 p-3 rounded-lg border">
                            {step}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8">
                      <Button className="w-full" onClick={() => window.print()}>Print / Save as PDF</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>

        {/* Discussion Guide */}
        <div className="md:col-span-2 rounded-2xl border border-border bg-muted/30 p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💬</span> Discussion Guide
          </h2>
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-xl border border-border">
              <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-2">
                Pre-Visit Questions
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
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
              <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-2">
                Analysis Questions
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
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
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💻</span> Virtual Tools
          </h2>
          <p className="text-sm opacity-80 mb-4">
            Interactive modes designed for student exploration.
          </p>
          <div className="space-y-3">
            <Link
              href="/activists/timeline"
              className="block rounded-lg bg-background p-3 shadow-sm border border-border hover:border-primary transition-colors cursor-pointer"
            >
              <div className="font-bold text-sm flex items-center justify-between">
                Timeline Scavenger Hunt <span className="text-xs">↗</span>
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
  );
}
