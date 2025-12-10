export type ZineTemplateId = "standard" | "minimal";

export interface ZineTemplate {
  id: ZineTemplateId;
  label: string;
  description: string;
  columns: 1 | 2;
  includeCauseTags: boolean;
}

export const ZINE_TEMPLATES: ZineTemplate[] = [
  {
    id: "standard",
    label: "Standard",
    description: "Two-column layout with cause tags and short bios.",
    columns: 2,
    includeCauseTags: true
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "One-column clean list for quick classroom handouts.",
    columns: 1,
    includeCauseTags: false
  }
];
