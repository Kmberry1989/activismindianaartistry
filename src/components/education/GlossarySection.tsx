"use client";

import React from "react";

export interface GlossaryTerm {
    term: string;
    def: string;
}

interface GlossarySectionProps {
    terms: GlossaryTerm[];
}

export function GlossarySection({ terms }: GlossarySectionProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>📖</span> Glossary of Terms
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
                {terms.map((item, i) => (
                    <div key={i} className="rounded-lg border bg-card p-4 shadow-sm">
                        <dt className="font-bold text-sm text-primary mb-1">{item.term}</dt>
                        <dd className="text-xs text-muted-foreground leading-relaxed">
                            {item.def}
                        </dd>
                    </div>
                ))}
            </div>
        </div>
    );
}
