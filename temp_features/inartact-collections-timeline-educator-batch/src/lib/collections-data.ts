import type { Collection } from "@/lib/types";

/**
 * Seed curated collections.
 * Replace entryIds with real IDs from your artistsData.
 * The purpose is to demonstrate the "exhibition-style" browsing model.
 */
export const collectionsData: Collection[] = [
  {
    id: "col-racial-justice",
    slug: "racial-justice-in-indiana",
    title: "Racial Justice in Indiana",
    summary:
      "Murals, performances, and public interventions addressing racism, policing, and cultural memory.",
    causeTags: ["Racial Justice"],
    entryIds: [
      // Add real IDs here
      "1",
      "2",
      "3"
    ],
    order: 1
  },
  {
    id: "col-womens-rights",
    slug: "womens-rights-and-gender-equity",
    title: "Women’s Rights & Gender Equity",
    summary:
      "Works engaging with bodily autonomy, representation, and the long arc of suffrage to contemporary advocacy.",
    causeTags: ["Women’s Rights"],
    entryIds: [
      "4",
      "5"
    ],
    order: 2
  },
  {
    id: "col-environment",
    slug: "environmental-justice-land-and-water",
    title: "Environmental Justice: Land & Water",
    summary:
      "Artworks exploring climate, conservation, toxic exposure, and stewardship in Indiana communities.",
    causeTags: ["Environmental Justice"],
    entryIds: [
      "6",
      "7"
    ],
    order: 3
  },
  {
    id: "col-lgbtq",
    slug: "lgbtq-rights-pride-and-belonging",
    title: "LGBTQ+ Rights: Pride & Belonging",
    summary:
      "Portraits, public installations, and community-led projects centering queer life and safety.",
    causeTags: ["LGBTQ+ Rights"],
    entryIds: [
      "8",
      "9"
    ],
    order: 4
  }
];
