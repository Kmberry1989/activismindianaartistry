export interface LessonResource {
  id: string;
  title: string;
  gradeBands?: string[];
  summary: string;
  focusCauses?: string[];
  activities?: string[];
}

export const educatorResources: LessonResource[] = [
  {
    id: "lesson-intro-activist-art",
    title: "Intro to Activist Art in Indiana",
    gradeBands: ["6–8", "9–12", "College"],
    summary:
      "A starter lesson for connecting local Indiana artworks to national and global movements.",
    focusCauses: ["Racial Justice", "Women’s Rights", "Environmental Justice"],
    activities: [
      "Compare two artworks from different decades and identify what changed in the social context.",
      "Map local works in your city and discuss who the intended audience might be.",
      "Write a short reflection linking an artwork to a current community issue."
    ]
  }
];
