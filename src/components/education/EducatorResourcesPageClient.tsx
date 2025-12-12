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
        readingMaterial: [
          { title: "The History of Indiana Avenue", url: "https://indyencyclopedia.org/indiana-avenue/" },
          { title: "Black Lives Matter Mural Project", url: "https://ganggangculture.com/projects/" }
        ],
          quiz: [
            {
              id: "ap1",
              text: "What is the primary goal of 'protest art'?",
              options: [
                "To make a lot of money",
                "To challenge power structures and inspire social change",
                "To decorate museums",
                "To look pretty"
              ],
              correctIndex: 1,
              explanation: "Protest art uses creativity to draw attention to injustice and rally people for a cause."
            },
            {
              id: "ap2",
              text: "Why is Indiana Avenue historically significant?",
              options: [
                "It was where the first skyscraper was built",
                "It was a major hub for Black culture and jazz in Indianapolis",
                "It is the widest street in the city",
                "It has the most stoplights"
              ],
              correctIndex: 1,
              explanation: "Indiana Avenue was a thriving center of Black commerce and culture, making the BLM mural location deeply symbolic."
            },
            {
              id: "ap3",
              text: "What is a unique power of 'temporary' public art (like the mural)?",
              options: [
                "It lasts forever",
                "It captures a specific moment in time and urgency",
                "It is cheaper than bronze",
                "No one notices it"
              ],
              correctIndex: 1,
              explanation: "Temporary art responds immediately to current events, capturing the raw emotion of a specific moment."
            }
          ]
},
{
  title: "Monuments & Memory",
    grade: "Grades 11-12",
      standard: "History / Visual Arts",
        standardCode: "USH.2.9, VA:Re7.2.Ia",
          summary:
  "Critically examine the role of public monuments in shaping historical narrative and collective memory, focusing on the debate around Confederate statues.",
    objectives: [
      "Analyze the controversy surrounding the removal or recontextualization of historical monuments.",
      "Design a proposal for a new monument representing an underrepresented narrative in their community.",
      "Evaluate criteria for what events or figures deserve public commemoration.",
    ],
      procedures: [
        "1. Lecture (15 min): History of monument erection waves (e.g., Jim Crow era).",
        "2. Case Study (15 min): Examine a specific recent removal or contextualization project.",
        "3. Design Charette (25 min): Students sketch a monument for a 'hidden history' figure.",
        "4. Presentation (5 min): Pitch the new monument concept.",
      ],
        readingMaterial: [
          { title: "Mellon Foundation: The Monuments Project", url: "https://www.mellon.org/programs-and-grants/the-monuments-project" },
          { title: "Whose Heritage? Public Symbols of the Confederacy", url: "https://www.splcenter.org/20190201/whose-heritage-public-symbols-confederacy" }
        ],
          quiz: [
            {
              id: "m1",
              text: "Which of the following best describes 'Monumentality' in the context of art activism?",
              options: [
                "The physical size of a statue",
                "The power dynamics inherent in who gets honored in public space",
                "The cost of building a monument",
                "The use of marble vs. bronze"
              ],
              correctIndex: 1,
              explanation: "Monumentality isn't just about size; it's about the authority and power to decide whose history is permanent."
            },
            {
              id: "m2",
              text: "Why are many historical monuments currently being re-evaluated?",
              options: [
                "They are too old and falling apart",
                "They often celebrate figures associated with oppression or exclusion",
                "Bronze is too expensive to maintain",
                "They are too small to be seen from cars"
              ],
              correctIndex: 1,
              explanation: "Many monuments erected in the past celebrate figures (like Confederates) who fought for oppression, clashing with modern values of equality."
            },
            {
              id: "m3",
              text: "What is a 'counter-monument'?",
              options: [
                "A monument that is buried underground",
                "A monument that challenges or questions traditional forms of commemoration",
                "A digital-only monument",
                "A statue of a horse"
              ],
              correctIndex: 1,
              explanation: "Counter-monuments (like Maya Lin's Vietnam Veterans Memorial) often challenge the traditional 'hero on a pedestal' format to provoke thought."
            }
          ]
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
        readingMaterial: [
          { title: "Project for Public Spaces: What is Placemaking?", url: "https://www.pps.org/article/what-is-placemaking" }
        ],
          quiz: [
            {
              id: "map1",
              text: "What does 'place-based biography' mean?",
              options: [
                "A biography about a famous traveler",
                "Understanding a community by studying its physical locations and landmarks",
                "A map with no names",
                "A history book"
              ],
              correctIndex: 1,
              explanation: "Place-based biography tells the story of a community through the physical spaces people inhabit."
            },
            {
              id: "map2",
              text: "Why might an artist choose a specific location for their work?",
              options: [
                "It was the only wall available",
                "To connect the art's message with the history or people of that spot",
                "They forgot where they were",
                "It was sunny there"
              ],
              correctIndex: 1,
              explanation: "Site-specific art uses the location itself to help tell the story or strengthen the message."
            },
            {
              id: "map3",
              text: "What information can you often find on a digital map besides roads?",
              options: [
                "The future",
                "Cultural landmarks, art, and historical sites",
                "What everyone is thinking",
                "Missing socks"
              ],
              correctIndex: 1,
              explanation: "Digital maps often layer cultural data like art and history on top of geography."
            }
          ]
},
{
  title: "The Power of Posters",
    grade: "Grades 6-8",
      standard: "Visual Arts / Social Studies",
        standardCode: "8.1.25, VA:Cr3.1.7a",
          summary:
  "Explore the history of political posters from the WPA to modern movements, and learn how graphic design can influence public opinion.",
    objectives: [
      "Analyze the effectiveness of visual hierarchy, typography, and color in propaganda.",
      "Create a persuasive poster for a specific school or community issue.",
      "Use limited color palettes to create high-impact imagery.",
    ],
      procedures: [
        "1. Visual History (15 min): Slideshow of iconic political posters (WPA, WWII, Civil Rights).",
        "2. Analysis (10 min): What makes these images 'stick'? (Simple text, bold colors).",
        "3. Sketching (20 min): Draft 3 thumbnail sketches for a school issue topic.",
        "4. Final Execution (15 min): Create a final poster design using markers or digital tools.",
      ],
        readingMaterial: [
          { title: "Smithsonian: Posters from the WPA", url: "https://www.loc.gov/collections/works-progress-administration-posters/about-this-collection/" }
        ],
          quiz: [
            {
              id: "p1",
              text: "Why do political posters often use limited color palettes (like just Red, Black, and White)?",
              options: [
                "It was cheaper to print",
                "High visual impact and immediate readability",
                "Artists ran out of paint",
                "It looks retro"
              ],
              correctIndex: 1,
              explanation: "High contrast colors catch the eye instantly and make the message readable from a distance."
            },
            {
              id: "p2",
              text: "What is 'Visual Hierarchy'?",
              options: [
                "Arranging elements so the most important info is seen first",
                "Putting images at the top only",
                "Using the biggest font possible",
                "Sorting colors by rainbow order"
              ],
              correctIndex: 0,
              explanation: "Visual hierarchy guides the viewer's eye to the most critical part of the message first (like a headline or call to action)."
            }
          ]
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
            readingMaterial: [
              { title: "A Brief History of Zines", url: "https://www.mentalfloss.com/article/88911/brief-history-zines" },
              { title: "Duke University: Zine History", url: "https://guides.library.duke.edu/zines/history" }
            ],
              quiz: [
                {
                  id: "z1",
                  text: "What is a 'Zine' short for?",
                  options: [
                    "Cuisine",
                    "Magazine (or Fanzine)",
                    "Zenith",
                    "Zone"
                  ],
                  correctIndex: 1,
                  explanation: "Zine comes from Magazine or Fanzine – small, self-published booklets often made with photocopiers."
                },
                {
                  id: "z2",
                  text: "Why were zines important for the Riot Grrrl movement in the 1990s?",
                  options: [
                    "They were sold in supermarkets",
                    "They allowed women to share stories uncensored by mainstream media",
                    "They were digital only",
                    "They were expensive to make"
                  ],
                  correctIndex: 1,
                  explanation: "Zines provided a safe, uncensored space for women to discuss feminism, music, and politics without corporate control."
                },
                {
                  id: "z3",
                  text: "Which of these is a key characteristic of Zine culture?",
                  options: [
                    "DIY (Do It Yourself) Ethos",
                    "Mass production",
                    "Corporate sponsorship",
                    "Glossy paper"
                  ],
                  correctIndex: 0,
                  explanation: "DIY (Do It Yourself) is the heart of zine culture – making things yourself with whatever tools you have."
                }
              ]
},
{
  title: "Eco-Art Activism",
    grade: "Grades 3-5",
      standard: "Science / Art",
        standardCode: "4.ESS.4, VA:Cr2.3.4a",
          summary:
  "Connect environmental stewardship with creativity by building sculptures from recycled materials to raise awareness about waste.",
    objectives: [
      "Identify recyclable materials vs. trash.",
      "Create a sculpture or collage entirely from found/recycled materials.",
      "Explain the message of their artwork regarding the environment.",
    ],
      procedures: [
        "1. Trash Talk (10 min): Discuss where trash goes and the importance of reusing.",
        "2. Material Hunt (10 min): Sort through clean provided recyclables (cardboard, caps, bottles).",
        "3. Building (25 min): Use tape and glue to assemble an 'Eco-Critter' or message board.",
        "4. Gallery Walk (15 min): View classmates' work and guess their environmental message.",
      ],
        readingMaterial: [
          { title: "NASA Climate Kids: Recycling", url: "https://climatekids.nasa.gov/recycle/" }
        ],
          quiz: [
            {
              id: "eco1",
              text: "What is the main goal of 'Eco-Art Activism'?",
              options: [
                "To use the most expensive paint",
                "To raise awareness about environmental issues using creativity",
                "To paint pictures of cars",
                "To build houses"
              ],
              correctIndex: 1,
              explanation: "Eco-artists use their work to make people think about nature, waste, and protecting our planet."
            },
            {
              id: "eco2",
              text: "Which of these materials would be best for a recycled art sculpture?",
              options: [
                "A brand new sheet of paper",
                "Clean cardboard and bottle caps",
                "Rotten food",
                "Glass sharks"
              ],
              correctIndex: 1,
              explanation: "Cardboard and plastic caps are common trash items that are clean and easy to build with."
            },
            {
              id: "eco3",
              text: "What happens to most trash if we don't recycle or reuse it?",
              options: [
                "It disappears",
                "It goes into a landfill and stays there for a long time",
                "It turns into gold",
                "It flies into space"
              ],
              correctIndex: 1,
              explanation: "Trash in landfills can take hundreds of years to decompose, which is why reusing is so important."
            }
          ]
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
        readingMaterial: [
          { title: "Meet The Eighteen Art Collective", url: "https://18artcollective.com/" }
        ],
          quiz: [
            {
              id: "col1",
              text: "Who are 'The Eighteen Art Collective'?",
              options: [
                "A band",
                "The group of Black artists who painted the Black Lives Matter mural in Indy",
                "A soccer team",
                "18 different paint colors"
              ],
              correctIndex: 1,
              explanation: "The Eighteen Art Collective formed to create the historic mural on Indiana Avenue."
            },
            {
              id: "col2",
              text: "Which of these are Primary Colors?",
              options: [
                "Green, Orange, Purple",
                "Red, Yellow, Blue",
                "Black, White, Gray",
                "Pink, Teal, Maroon"
              ],
              correctIndex: 1,
              explanation: "Red, Yellow, and Blue are primary colors because they can be mixed to make all other colors."
            },
            {
              id: "col3",
              text: "What does 'Symbolism' mean in art?",
              options: [
                "Signing your name",
                "Using an image or color to represent an idea or feeling",
                "Painting very fast",
                "Drawings of cymbals"
              ],
              correctIndex: 1,
              explanation: "Symbolism is when artists use visual clues (like a heart for love) to tell a deeper story."
            }
          ]
},
];

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Appropriation",
    def: "The practice of artists using pre-existing objects or images in their art with little transformation of the original.",
  },
  {
    term: "Archive",
    def: "A collection of historical documents or records providing information about a place, institution, or group of people; in art, often used to preserve marginalized histories.",
  },
  {
    term: "Collective",
    def: "A group of artists working together to achieve a common goal, often sharing resources, ideas, and credit.",
  },
  {
    term: "Craftivism",
    def: "The practice of engaged creativity, especially regarding political or social causes. By using their creative energy to help the world, craftivists prioritize 'slow activism' (e.g., knitting, embroidery).",
  },
  {
    term: "Culture Jamming",
    def: "A tactic used by many anti-consumerist social movements to disrupt or subvert media culture and its mainstream cultural institutions, including corporate advertising.",
  },
  {
    term: "Curatorial Activism",
    def: "The practice of organizing art exhibitions with the specific intent of challenging power structures, highlighting marginalized voices, and effecting social change.",
  },
  {
    term: "Decolonization",
    def: "In an art context, the process of deconstructing colonial ideologies of the superiority and privilege of Western thought and approaches, often by centering Indigenous and non-Western perspectives.",
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
    term: "Guerrilla Girls",
    def: "An anonymous group of feminist, female artists devoted to fighting sexism and racism within the art world.",
  },
  {
    term: "Happenings",
    def: "A form of performance art or other event considered as an art form, often occurring in a non-traditional setting and involving audience participation.",
  },
  {
    term: "Institutional Critique",
    def: "An artistic practice that reflects critically on its own place within galleries and museums and on the concept and social function of art itself.",
  },
  {
    term: "Intervention",
    def: "Art designed to interact with an existing structure or situation, be it another artwork, the audience, an institution, or a public space.",
  },
  {
    term: "Land Art",
    def: "Art that is made directly in the landscape, sculpting the land itself into earthworks or making structures in the landscape using natural materials.",
  },
  {
    term: "Monumentality",
    def: "The quality of being massive or impressive; in activism, often refers to the power dynamics inherent in who is honored with large-scale permanent statues.",
  },
  {
    term: "Muralism",
    def: "The artistic practice of painting large-scale artworks on walls or ceilings, often used to make art accessible to the public outside of galleries.",
  },
  {
    term: "Performance Art",
    def: "An art form that combines visual art with dramatic performance.",
  },
  {
    term: "Placemaking",
    def: "A multi-faceted approach to the planning, design, and management of public spaces. Creative placemaking capitalizes on a local community's assets, inspiration, and potential.",
  },
  {
    term: "Public Sphere",
    def: "An area in social life where individuals can come together to freely discuss and identify societal problems, and through that discussion influence political action.",
  },
  {
    term: "Relational Aesthetics",
    def: "A set of artistic practices which take as their theoretical and practical point of departure the whole of human relations and their social context, rather than an independent and private space.",
  },
  {
    term: "Site-Specific Art",
    def: "Artwork created to exist in a certain place. Typically, the artist takes the location into account while planning and creating the artwork.",
  },
  {
    term: "Social Practice",
    def: "An art medium that focuses on social engagement, inviting collaboration with individuals, communities, and institutions in the creation of participatory art.",
  },
  {
    term: "Socially Engaged Art",
    def: "Art that involves people and communities in debate, collaboration, or social interaction.",
  },
  {
    term: "Subvertising",
    def: "The practice of making spoofs or parodies of corporate and political advertisements.",
  },
  {
    term: "Tactical Urbanism",
    def: "Low-cost, temporary changes to the built environment, usually in cities, intended to improve local neighborhoods and city gathering places.",
  },
  {
    term: "Yarn Bombing",
    def: "A type of graffiti or street art that employs colorful displays of knitted or crocheted yarn or fiber rather than paint or chalk.",
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
