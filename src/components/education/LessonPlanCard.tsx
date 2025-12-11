"use client";

import React from "react";
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

export interface LessonPlan {
    title: string;
    grade: string;
    standard: string;
    standardCode?: string;
    summary: string;
    objectives: string[];
    procedures: string[];
    actionLink?: string;
    actionLabel?: string;
}

interface LessonPlanCardProps {
    plan: LessonPlan;
}

export function LessonPlanCard({ plan }: LessonPlanCardProps) {
    return (
        <Sheet>
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
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs opacity-60 font-medium">
                    <span>{plan.standard}</span>
                    {plan.standardCode && (
                        <>
                            <span className="hidden sm:inline">•</span>
                            <span className="bg-muted px-1.5 py-0.5 rounded text-[10px] border">
                                {plan.standardCode}
                            </span>
                        </>
                    )}
                </div>
                <p className="mt-3 text-sm opacity-80 leading-relaxed flex-1">
                    {plan.summary}
                </p>
                <div className="mt-4 flex gap-2">
                    <SheetTrigger asChild>
                        <Button variant="outline" className="w-full flex-1" size="sm">
                            View Plan
                        </Button>
                    </SheetTrigger>
                    {plan.actionLink && (
                        <Button asChild size="sm" className="flex-1">
                            <Link href={plan.actionLink}>
                                {plan.actionLabel || "Launch Tool"}
                            </Link>
                        </Button>
                    )}
                </div>
            </div>

            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="mb-6">
                    <SheetTitle className="text-2xl">{plan.title}</SheetTitle>
                    <SheetDescription>
                        {plan.grade} • {plan.standard}
                        {plan.standardCode && ` (${plan.standardCode})`}
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
                                <p
                                    key={idx}
                                    className="text-sm bg-muted/30 p-3 rounded-lg border"
                                >
                                    {step}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="pt-8">
                        <Button className="w-full" onClick={() => window.print()}>
                            Print / Save as PDF
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
