"use client";

import React from "react";


export default function EducatorResourcesPageClient() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Educator Resources</h1>
        <p className="text-lg text-muted-foreground">
          Bring Indiana’s art activism history into your classroom. These materials are designed for 4th-12th grade social studies and art curricula.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Lesson Plans Section */}
        <div className="col-span-full mb-4">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📚</span> Lesson Plans
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Art as Protest",
                grade: "Grades 9-12",
                standard: "Visual Arts / Civics",
                desc: "Analyze how the 'Black Lives Matter' murals on Indiana Avenue served as both artistic expression and political assembly."
              },
              {
                title: "Mapping Your Narratives",
                grade: "Grades 6-8",
                standard: "Geography / History",
                desc: "Students use the Activist Map to identify art in their own neighborhoods and create a 'place-based' biography of their community."
              },
              {
                title: "Colors of Culture",
                grade: "Grades 4-5",
                standard: "Social Studies",
                desc: "Explore how artists like The Eighteen Art Collective use color to represent identity and history in Indianapolis."
              }
            ].map((plan, i) => (
              <div key={i} className="group relative rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {plan.grade}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider opacity-60">PDF</span>
                </div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {plan.title}
                </h3>
                <p className="mt-1 text-xs opacity-60 font-medium">{plan.standard}</p>
                <p className="mt-3 text-sm opacity-80 leading-relaxed">
                  {plan.desc}
                </p>
                <button className="mt-4 w-full rounded-lg border border-border bg-background py-2 text-sm font-medium hover:bg-accent transition-colors">
                  Download Plan ↓
                </button>
              </div>
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
              <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-2">Pre-Visit Questions</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>What is the difference between &quot;vandalism&quot; and &quot;street art&quot;? Who decides?</li>
                <li>Can a painting or sculpture change how people think? Give an example.</li>
                <li>Why do you think artists choose to work in public spaces instead of museums?</li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-xl border border-border">
              <h3 className="font-semibold text-sm uppercase tracking-wide opacity-70 mb-2">Analysis Questions</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
                <li>How does the location of this artwork change its meaning?</li>
                <li>What symbols or colors does the artist use to communicate their message?</li>
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
            <div className="rounded-lg bg-background p-3 shadow-sm border border-border">
              <div className="font-bold text-sm">Timeline Scavenger Hunt</div>
              <p className="text-xs opacity-60 mt-1">Find 5 events where art directly impacted a law or policy.</p>
            </div>
            <div className="rounded-lg bg-background p-3 shadow-sm border border-border">
              <div className="font-bold text-sm">Map Odyssey</div>
              <p className="text-xs opacity-60 mt-1">Plan a walking tour visiting 3 murals within 1 mile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
