import { Artist } from './types';

// Centralized Cause Constants to ensure consistency across filters
const CAUSES = {
  RACIAL_JUSTICE: "Racial Justice",
  CIVIL_RIGHTS: "Civil Rights",
  ENVIRONMENT: "Environmental Justice",
  WOMENS_RIGHTS: "Women's Suffrage",
  IMMIGRATION: "Immigration",
  LABOR: "Labor Rights",
  COMMUNITY: "Community Building",
  MENTAL_HEALTH: "Mental Health",
  PUBLIC_ART: "Public Space",
  POLITICAL: "Political Change/Satire"
} as const;

export const artists: Artist[] = [
  {
    "id": "1",
    "artist": {
      "name": "The Eighteen Art Collective",
      "isAlive": true,
      "bio": "This group is composed of the 18 Black visual artists who collaborated to paint the \"Black Lives Matter\" street mural on Indiana Avenue in Indianapolis in August 2020. The collective was formed to sustain the momentum of that moment, advocating for equity in the local art scene and organizing exhibitions like \"We. The Culture\" at Newfields. They represent a wide range of styles, from street art to fine portraiture, united by a mission of civic engagement and artistic excellence.",
      "website": "18artcollective.com",
      "social_media": [
        "IG: @thexviii"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Street Mural",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Indiana Avenue)",
      "cause": "Racial Justice / BLM",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "The Eighteen Art Collective Black Lives Matter Street Mural Indianapolis (Indiana Avenue) Racial Justice / BLM",
      "news_media_coverage": []
    }
  },
  {
    "id": "2",
    "artist": {
      "name": "Gary Gee",
      "isAlive": true,
      "bio": "A prominent member of The Eighteen Art Collective, Gary Gee is a mixed-media artist known for his \"hand-style\" technique that blends ceramics, painting, and urban aesthetics. His work often bridges the gap between hip-hop culture and fine art, using bold textures and references to community struggles. He was responsible for the second \"L\" in the original Black Lives Matter mural.",
      "website": "artbygarygee.com",
      "social_media": [
        "IG: @originalgarygee"
      ]
    },
    "artwork": {
      "title": "We the People (Part of Murals for Racial Justice)",
      "description": "We the People (Gary Gee)\n1. The Backstory & History This mural was created by Gary Gee, a prominent Indianapolis-based multimedia artist known for bridging the gap between fine art and urban street culture. It was produced in June 2020 as part of the \"Murals for Racial Justice\" project. When downtown Indianapolis businesses were boarded up following the civil unrest sparked by the murder of George Floyd, Gee was commissioned to paint the plywood storefront at 32 East Washington Street. The work was a direct, visceral response to the moment, created quickly in the open air while the city was still reeling from the protests.\n\n2. The Art Activism The activism in this piece is centered on constitutional hypocrisy.\nThe Imagery: The mural features a stylized, diverse crowd of protesters holding signs with messages like \"I Can't Breathe,\" \"Black Lives Matter,\" and \"Justice 4 Breonna Taylor.\"\nThe Text: The title refers to the preamble of the U.S. Constitution, which is prominently featured in the artwork: \"We the People hold these truths to be self-evident...\"\nThe Message: By juxtaposing the foundational text of American democracy with images of modern citizens begging for their lives, Gee questions who is actually included in \"We the People.\" He highlights the gap between the document's promise of equality and the reality of the Black experience, suggesting that for many, the Constitution remains an unfulfilled contract.\n\n3. The Influence and Existence Like many of the murals from that summer, this piece transitioned from temporary street art to historical artifact. It was removed from the storefront and preserved, eventually being selected for the \"Response: Images and Sounds of a Movement\" exhibition at the Indiana State Museum. It is also cataloged in the Indianapolis Public Library’s digital collection, ensuring that Gee's critique of American democracy is permanently accessible to future generations studying the 2020 civil rights movement in Indiana.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Acrylic / Spray Paint",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum)",
      "cause": "Civil Rights / Police Brutality",
      "imageUrl": "/Images/GaryGee_WeThePeople .png",
      "credit": "The We The People mural installation in place at 32 E. Washington Street, 2020 (Courtesy of Indy Arts Council)",
      "latitude": 39.7673788,
      "longitude": -86.1569878,
      "categories": [],
      "searchQuery": "Gary Gee We the People (Part of Murals for Racial Justice) Indianapolis (Orig: 32 E. Washington; Archived: Ind. State Museum) Civil Rights / Police Brutality",
      "news_media_coverage": []
    }
  },
  {
    "id": "3",
    "artist": {
      "name": "Mechi Shakur (Demetrius Green)",
      "isAlive": true,
      "bio": "Demetrius Green, known artistically as Mechi Shakur, is a self-taught painter and member of The Eighteen Art Collective who frequently explores social justice and political themes. His visual style is often raw and expressive, blurring the lines between reality and imagination with vibrant colors and intense subject matter. He painted the first \"L\" in the Black Lives Matter mural, titling his section \"BLKKK Lives Don't Matter\" to challenge performative activism.",
      "website": "ganggangculture.com/artists/mechi-shakur",
      "social_media": [
        "IG: @mechishakur"
      ]
    },
    "artwork": {
      "title": "Blkkk Lives Don't Matter (Part of Murals for Racial Justice)",
      "description": "Blkkk Lives Don't Matter (Mechi Shakur)\n1. The Backstory & History This artwork was created in June 2020 by artist Mechi Shakur (whose legal name is Demetrius Green). It was part of the \"Murals for Racial Justice\" initiative organized by the Arts Council of Indianapolis. Following the protests and civil unrest sparked by the murder of George Floyd, many businesses in downtown Indianapolis boarded up their storefronts. To turn these wooden boards into a canvas for dialogue rather than division, local artists of color were commissioned to paint them. This specific mural was originally installed at 140 West Washington Street (near the Hyatt Regency).\n\n2. The Art Activism The activism in this piece is defined by its provocation and linguistic subversion.\nThe Title: The artist deliberately spelled the title \"BLKKK\" to reference the Ku Klux Klan (KKK).\nThe Message: Shakur stated that he chose this phrasing as a direct response to critics of the phrase \"Black Lives Matter.\" He argued that if people felt \"Black Lives Matter\" was too exclusionary or offensive, they should be even more offended by the reality that, historically and systemically (represented by the \"KKK\"), Black lives haven't mattered. It holds a mirror up to the viewer, forcing them to confront the hate groups and systemic racism that necessitate the movement in the first place.\nThe Imagery: The work typically employs Shakur’s raw, expressive style (influenced by artists like Jean-Michel Basquiat), often blurring lines between reality and imagination to depict the psychological weight of racism.\n\n3. The Influence and Existence While the physical plywood boards were temporary, the work’s influence has been preserved institutionally. The mural was professionally photographed and archived in the Indianapolis Public Library’s digital collection, ensuring that this moment of \"plywood protest art\" remains part of the permanent historical record. It was also selected for physical exhibition at the Central Library and featured in the Encyclopedia of Indianapolis, transitioning from a temporary street barricade to a recognized piece of Indiana's civil rights history.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7675041,
      "longitude": -86.161047,
      "categories": [],
      "searchQuery": "Mechi Shakur (Demetrius Green) Blkkk Lives Don't Matter (Part of Murals for Racial Justice) Indianapolis (Orig: Downtown; Archived: Ind. State Museum/Library) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "4",
    "artist": {
      "name": "Israel Solomon",
      "isAlive": true,
      "bio": "Israel Solomon is a painter, educator, and member of The Eighteen Art Collective whose work is characterized by geometric fragmentation and vibrant acrylic colors. He often creates portraits that act as visual puzzles, breaking down the human face into shapes to explore identity and community. Solomon painted the second \"T\" in the Black Lives Matter mural and is deeply involved in arts education.",
      "website": "israelsolomonart.com",
      "social_media": [
        "IG: @israelsoloart"
      ]
    },
    "artwork": {
      "title": "American Duality (Part of Art & Activism exhibit)",
      "description": "American Duality (Israel Solomon)\n1. The Backstory & History This painting was created by Israel Solomon, an Indianapolis-based artist and educator known for his vibrant, geometric style (often compared to Cubism). It was produced for the \"Art and Activism: One Year Later\" exhibition held at Gallery 924 in 2021. This specific exhibition was organized to commemorate the one-year anniversary of the Murals for Racial Justice project, which saw artists painting on the boarded-up storefronts of downtown Indianapolis following the George Floyd protests of 2020. Solomon was not only a featured artist but also helped curate the show.\n\n2. The Art Activism The activism in this piece is found in its stark juxtaposition of realities. The painting features a split composition:\nSide A: Depicts a tense scene at Monument Circle, showing police officers confronting protesters.\nSide B: Depicts a peaceful scene at the Canal Walk (just blocks away), showing people leisurely strolling and playing.\nThe Message: Solomon uses this \"duality\" to critique the divided American experience. It forces the viewer to confront the uncomfortable truth that while some citizens enjoy safety and leisure in the city, others are simultaneously fighting for their lives and civil rights in the same space. It rejects \"art for art's sake\" in favor of a direct commentary on privilege and policing.\n\n3. The Influence and Existence This work became the signature image for the entire Art & Activism exhibition, appearing on the promotional postcards and marketing materials. Its existence helped transition the raw energy of the 2020 street protests into a formal gallery setting, ensuring that the conversation about racial justice in Indiana continued even after the boards were taken down. It cemented Israel Solomon's role as a key artistic voice in Indianapolis, complementing his contribution to the massive \"Black Lives Matter\" street mural on Indiana Avenue (where he painted the second \"T\")\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Acrylic",
      "date": "Aug. 2020",
      "location": "Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum)",
      "cause": "Racial Justice / Police Brutality",
      "imageUrl": "/Images/IsraelSolomon_AmericanDuality.png",
      "credit": "",
      "latitude": 39.766996,
      "longitude": -86.157934,
      "categories": [],
      "searchQuery": "Israel Solomon American Duality (Part of Art & Activism exhibit) Indianapolis (Orig: 140 W. Washington; Archived: Ind. State Museum) Racial Justice / Police Brutality",
      "news_media_coverage": []
    }
  },
  {
    "id": "5",
    "artist": {
      "name": "Fred Wilson",
      "isAlive": true,
      "bio": "Fred Wilson is an internationally acclaimed conceptual artist known for \"mining the museum\" to reveal historical erasures, particularly regarding African American history. While not an Indianapolis local in the traditional sense, he has a significant relationship with the city, notably creating \"E Pluribus Unum,\" a proposed (and controversial) sculpture for the Indianapolis Cultural Trail, and having major works in the Indianapolis Museum of Art’s collection.",
      "website": "pacegallery.com/artists/fred-wilson",
      "social_media": [
        "N/A (See Pace Gallery: @pacegallery)"
      ]
    },
    "artwork": {
      "title": "E Pluribus Unum",
      "description": "The Artwork: E Pluribus Unum (Proposed Sculpture). Back Story & Activism: In 2011, Wilson proposed a sculpture for the Indianapolis Cultural Trail that re-imagined the \"Soldiers and Sailors Monument.\" He planned to isolate the figure of the nameless freed slave (who sits passively at the base of the real monument) and elevate him to a heroic status, holding a flag of many African nations. The project sparked fierce local debate; critics felt it merely reproduced a subservient image of Blackness rather than empowering it. Influence & Existence: The project was ultimately canceled due to the public outcry—a rare example where the absence of the art became the activism. The controversy forced the city to have difficult, necessary conversations about who gets represented in public space and how.",
      "medium": "Sculpture (Digital Model)",
      "date": "2007–2011 (Cancelled)",
      "location": "Indianapolis (Proposed for Cultural Trail; Cancelled)",
      "cause": "Social Justice (Representation)",
      "imageUrl": "/Images/FredWilson_EPluribusUnum.jpeg",
      "credit": "",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Fred Wilson E Pluribus Unum Indianapolis (Proposed for Cultural Trail; Cancelled) Social Justice (Representation)",
      "news_media_coverage": []
    }
  },
  {
    "id": "6",
    "artist": {
      "name": "Shauta Marsh & Jim Walker (Big Car Collaborative) ",
      "isAlive": true,
      "bio": "Shauta Marsh and Jim Walker are the co-founders of Big Car Collaborative, a social practice art organization based in Indianapolis. They focus on \"creative placemaking,\" using art to build community and transform urban spaces, most notably through their headquarters, The Tube Factory Artspace. Their work is less about individual object-making and more about curating experiences, neighborhood engagement, and social connectivity.",
      "website": "bigcar.org",
      "social_media": [
        "IG: @bigcarpix (Big Car Collaborative)"
      ]
    },
    "artwork": {
      "title": "Social Alchemy ",
      "description": "The Project: The Tube Factory Artspace. Back Story & Activism: Founded in a vacant manufacturing building, this space is the physical anchor of Big Car's \"creative placemaking.\" The activism here is economic and social; they use art to revitalize the Garfield Park neighborhood without triggering immediate displacement (gentrification). They bought creating affordable housing for artists and a community gathering space that offers free cultural programming. Influence & Existence: It is very much alive today. It has become a national model for how arts organizations can embed themselves in neighborhoods to function as civic infrastructure rather than just galleries.",
      "medium": "Social Practice",
      "date": "2005–Present",
      "location": "Indianapolis (Tube Factory / Garfield Park)",
      "cause": "Community Building / Utopia",
      "credit": "",
      "latitude": 39.7292269,
      "longitude": -86.1387615,
      "categories": [],
      "searchQuery": "Shauta Marsh & Jim Walker (Big Car Collaborative)  Social Alchemy  Indianapolis (Tube Factory / Garfield Park) Community Building / Utopia",
      "news_media_coverage": []
    }
  },
  {
    "id": "7",
    "artist": {
      "name": "May Wright Sewall",
      "isAlive": false,
      "bio": "May Wright Sewall (1844–1920) was not a visual artist herself but a legendary civic leader, suffragist, and the primary patron force behind Indianapolis's art institutions. She was instrumental in founding the Art Association of Indianapolis, which eventually became the Indianapolis Museum of Art (Newfields) and the Herron School of Art + Design. She is a historical figure representing the organizational foundation of the Indiana art scene.",
      "website": "N/A (Historical figure, died 1920. Bio at in.gov is appropriate)**",
      "social_media": [
        "N/A (See @thepropylaeum for her legacy)"
      ]
    },
    "artwork": {
      "title": "Founding the Art Association of Indianapolis",
      "description": "The Legacy: The Art Association of Indianapolis. Back Story & Activism: Sewall was a suffragist who believed culture was a vehicle for women's liberation and civic improvement. In 1883, she founded the Art Association (now Newfields) to bring culture to the \"prairie.\" Her activism was grounded in the belief that a city cannot be great without the refining influence of the arts, and that women should lead that charge. Influence & Existence: Her legacy exists as the Indianapolis Museum of Art (Newfields) and Herron School of Art + Design. While she has passed, the institutions she built remain the pillars of Indiana art.",
      "medium": "Civic Leadership",
      "date": "1883",
      "location": "Indianapolis (Art Association / Herron / Newfields)",
      "cause": "Women's Suffrage / Education",
      "credit": "Indiana Historical Society ",
      "latitude": 39.8254617,
      "longitude": -86.1851419,
      "categories": [],
      "searchQuery": "May Wright Sewall Founding the Art Association of Indianapolis Indianapolis (Art Association / Herron / Newfields) Women's Suffrage / Education",
      "news_media_coverage": []
    }
  },
  {
    "id": "8",
    "artist": {
      "name": "Andre Portee (AbsorbALL)",
      "isAlive": true,
      "bio": "Andre Portee, who works under the moniker AbsorbALL, is an Indianapolis-based artist and illustrator. His style is heavily influenced by street art, cartoons, and pop culture, often featuring bold lines and playful, surreal characters. He brings a distinct underground comic aesthetic to his murals and canvas work.",
      "website": "andreportee.com",
      "social_media": [
        "IG: @absorball (Project) & @bodrega (Personal)"
      ]
    },
    "artwork": {
      "title": "McMillen Park Basketball Court Murals",
      "description": "McMillen Park Basketball Court Murals (AbsorbALL)\n1. The Backstory & History This massive public art installation covers four full basketball courts at McMillen Park in Fort Wayne, Indiana. It was created by local artist Andre Portee, who operates under the creative moniker AbsorbALL. The project was a collaboration between the artist, Fort Wayne Parks and Recreation, and Turnstone Center (a local organization serving people with disabilities). It was funded by a $50,000 grant from the NBA All-Star 2021 Legacy initiative. Portee, who grew up seeing local parks decline, started AbsorbALL with the specific mission to revitalize these spaces. For this project, he allowed the local community to vote on the final design, ensuring the neighborhood had ownership of the artwork.\n\n2. The Art Activism The activism in this work is rooted in Community Equity and Accessibility.\nNeighborhood Uplift: The mural specifically targets the Southeast quadrant of Fort Wayne, a historically underinvested area. Portee’s goal was to turn cracked, gray concrete into a vibrant \"playable mural\" that signals to local youth that they deserve beautiful, high-quality spaces.\nInclusion: By partnering with Turnstone, the courts were resurfaced not just for aesthetics, but to be fully accessible for wheelchair basketball, actively breaking down physical barriers for athletes with disabilities.\nThe Message: The design features the word \"EAST\" prominently across the courts, reclaiming pride in the \"East side\" identity often stigmatized in local discourse.\n\n3. The Influence and Existence The murals exist as a massive splash of color (teals, oranges, and yellows) visible from the sky and the street. Its influence extends beyond art; it revitalized the physical infrastructure of the park, bringing players back to what had been a deteriorating space. It serves as a proof-of-concept for Portee's \"AbsorbALL\" mission: that public art shouldn't just be on walls to be looked at, but on the ground to be used, played on, and \"absorbed\" by the people who need it most.",
      "medium": "Mural / Court Paint",
      "date": "Oct. 2020",
      "location": "Fort Wayne (McMillen Park)",
      "cause": "Racial Justice / Community",
      "credit": "",
      "latitude": 41.0484686,
      "longitude": -85.1018235,
      "categories": [],
      "searchQuery": "Andre Portee (AbsorbALL) McMillen Park Basketball Court Murals Fort Wayne (McMillen Park) Racial Justice / Community",
      "news_media_coverage": []
    }
  },
  {
    "id": "9",
    "artist": {
      "name": "Kacy Jackson",
      "isAlive": true,
      "bio": "Kacy Jackson is the founder of The Art of Impact and a prolific muralist in the Indianapolis area. His work typically features high-contrast realism and vibrant portraits of cultural icons, often utilizing a signature color palette of electric blues and purples. He is known for creating large-scale public art that aims to uplift and beautify community spaces.",
      "website": "theartofkacy.com",
      "social_media": [
        "IG: @theartofkacy"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southeast Mural",
      "description": "Faces of the Fort: Southeast Mural (Kacy Jackson)\n1. The Backstory & History Painted by Kacy Jackson, a well-known local muralist and founder of The Art of Kacy, this mural is located at 4335 South Anthony Boulevard. This specific project bridged the gap between the past and the present by selecting one historical figure and one contemporary leader. The subjects are William E. Warfield, a historic entrepreneur who published Fort Wayne’s first Black newspaper (The Vindicator) in the early 1900s, and Irene Paxia, the modern-day executive director of Amani Family Services.\n\n2. The Art Activism The theme of this mural is \"Achieving the American Dream.\" The art activism focuses on economic and cultural resilience. By resurrecting the image of William Warfield, the mural fights against the erasure of Black history in Indiana, reminding the public of the thriving Black business community that existed a century ago. By pairing him with Irene Paxia, who helps refugees and immigrants resettle in Indiana today, the artwork advocates for a welcoming, multicultural society where anyone can build a life regardless of their origin.\n\n3. The Influence and Existence The mural exists as a vibrant, colorful landmark in the Southeast quadrant, an area that has historically been the center of Fort Wayne’s African American community. Its influence is profound as a tool for heritage and hope; it teaches a history lesson that isn't always in textbooks (Warfield) while validating the current struggles and successes of the city's growing immigrant population (Paxia). It visually connects the struggles of the past with the opportunities of the present.",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (4335 S. Anthony Blvd)",
      "cause": "Civil Rights / Immigrant Rights",
      "imageUrl": "/Images/KacyJackson_SoutheastMural.png",
      "credit": "",
      "latitude": 41.0450626,
      "longitude": -85.1130308,
      "categories": [],
      "searchQuery": "Kacy Jackson Faces of the Fort: Southeast Mural Fort Wayne (4335 S. Anthony Blvd) Civil Rights / Immigrant Rights",
      "news_media_coverage": []
    }
  },
  {
    "id": "10",
    "artist": {
      "name": "Benjamin Duke",
      "isAlive": true,
      "bio": "Benjamin Duke is a painter and professor at Michigan State University (formerly at the University of Indianapolis) known for his complex, chaotic, and large-scale narrative paintings. His work is densely packed with figures and distorted perspectives, exploring themes of consumerism, anxiety, and the overwhelming nature of contemporary life. He creates \"all-over\" compositions that feel like a visual overload of modern existence.",
      "website": "bendukeart.com",
      "social_media": [
        "IG: @4th_culture_art"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Northeast Mural",
      "description": "Faces of the Fort: Northeast Mural (Benjamin Duke)\n1. The Backstory & History Located at 1514 St. Joseph Boulevard, this mural was created by artist and professor Benjamin Duke. It is another installment in the Faces of the Fort series, intended to activate the streetscape of the Northeast quadrant of the city. The subjects chosen for this wall are Glynn Hines, a veteran Fort Wayne City Councilman and civil rights leader, and Genevieve Meyer, the founder of the Resiliency Foundation. The mural utilizes Duke’s signature expressive and energetic painting style to capture the vitality of these two figures.\n\n2. The Art Activism The core theme of this work is \"Creating an Inclusive Community.\" The art activism here is distinct because it blends institutional change with grassroots human rights work. It highlights Glynn Hines' decades-long fight for racial justice and equitable housing within the political system. Simultaneously, it elevates Genevieve Meyer’s intense advocacy against child marriage and her support for survivors of trauma. The mural acts as a billboard for social justice, asserting that true community health requires protecting women and children while fighting for civil rights.\n\n3. The Influence and Existence This mural exists on a busy thoroughfare, making the faces of these advocates unavoidable to daily commuters. Its influence is educational and inspirational; it challenges the viewer to recognize that \"leadership\" takes many forms, from sitting on the City Council to leading non-profits that change state laws. It cements the legacy of these two living figures into the physical landscape of Fort Wayne.",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1514 St. Joseph Blvd)",
      "cause": "Inclusion / Community",
      "imageUrl": "/Images/BenjaminDuke_NortheastMural.png",
      "credit": "",
      "latitude": 41.0898023,
      "longitude": -85.1283713,
      "categories": [],
      "searchQuery": "Benjamin Duke Faces of the Fort: Northeast Mural Fort Wayne (1514 St. Joseph Blvd) Inclusion / Community",
      "news_media_coverage": []
    }
  },
  {
    "id": "11",
    "artist": {
      "name": "Mitchell Egly",
      "isAlive": true,
      "bio": "Mitchell Egly is an Indianapolis-based artist known for his skilled realism and large-scale public murals. He is perhaps best known for painting the towering mural of Kurt Vonnegut on Massachusetts Avenue in Indianapolis, which has become a city landmark. His work often focuses on honoring local heroes and history through precise, classical painting techniques applied to urban walls.",
      "website": "mitchellegly.art",
      "social_media": [
        "IG: @eglyillo"
      ]
    },
    "artwork": {
      "title": "Faces of the Fort: Southwest Mural",
      "description": "Faces of the Fort: Southwest Mural (Mitchell Egly)\n1. The Backstory & History This mural is part of the larger \"Faces of the Fort\" initiative, a public art project in Fort Wayne, Indiana, designed to celebrate the city’s diverse history and community leaders. Located at Quimby Village (1818 Bluffton Road), this specific piece was painted by artist Mitchell Egly. The selection process for the subjects involved community input to identify \"unsung heroes.\" The mural features realistic portraits of Raquel Kline, a multilingual advocate for the immigrant community, and Thomas Smith, a long-time educator and mentor known for shaping the lives of local youth.\n\n2. The Art Activism The activism in this piece centers on the theme of \"Breaking Down Barriers.\" It visually amplifies the work of two individuals who dedicated their lives to access and equity. By depicting Raquel Kline, the work advocates for language justice and support for non-English speakers in Indiana. By depicting Thomas Smith, it advocates for the power of education and the necessity of strong mentorship for at-risk youth. The mural serves as a large-scale public \"thank you\" to those who ensure marginalized groups have access to essential resources.\n\n3. The Influence and Existence The mural exists prominently on the side of a large commercial building in the Quimby Village area, transforming a standard brick wall into a monument of civic pride. Its influence lies in its ability to humanize social services; it reminds residents that the safety nets in their city—education and immigrant support—are built by real, dedicated neighbors. It encourages passersby to consider how they, too, can break down barriers in their own social circles.",
      "medium": "Acrylic Mural",
      "date": "June 2021",
      "location": "Fort Wayne (1818 Bluffton Road)",
      "cause": "Breaking Barriers / Justice",
      "imageUrl": "/Images/MitchellEgly_FacesoftheFort.jpg",
      "credit": "",
      "latitude": 41.051388,
      "longitude": -85.161236,
      "categories": [],
      "searchQuery": "Mitchell Egly Faces of the Fort: Southwest Mural Fort Wayne (1818 Bluffton Road) Breaking Barriers / Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "12",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "bio": "Robert Indiana (born Robert Clark) was a preeminent Pop Artist associated with the 1960s movement, famous globally for his \"LOVE\" sculpture and print series. Though he spent much of his later career in Maine, he was born in New Castle, Indiana, and adopted the state's name as his own. His hard-edge painting style, use of stenciled typography, and bold primary colors are iconic in American art history.",
      "website": "robertindiana.com",
      "social_media": [
        "IG: @robertindiana (Legacy Initiative)"
      ]
    },
    "artwork": {
      "title": "The Confederacy: Mississippi",
      "description": "The Confederacy: Mississippi (1965) is one of Robert Indiana’s most politically charged works, part of a four-painting series titled The Confederacy (which also includes Alabama, Louisiana, and Florida).\n\nThe Format: It features bold concentric circles (a \"bullseye\" motif) often rendered in stark colors like black, white, and yellow (or sometimes red/blue in print variations).\nThe Center: Inside the innermost circle is a map of the state of Mississippi.\nThe Star: A single star is placed on the map at the location of Philadelphia, Mississippi. This marks the site of the 1964 murders of civil rights workers James Chaney, Andrew Goodman, and Michael Schwerner (known as the Freedom Summer murders).\nThe Text: Encircling the center is a provocative inscription that reads:\n\"Just as in the anatomy of man, every nation must have its hind part.\"\n\nMeaning and Context\nThis work was a direct response to the violence Robert Indiana saw on the news during the Civil Rights Movement. By labeling Mississippi the \"hind part\" (a polite euphemism for the \"ass\" or \"rectum\") of the nation, Indiana was declaring the state—and its segregationist violence—as the shameful waste-center of the American body politic.\nThe target motif serves a double meaning: it visually draws the eye like a road sign, but also marks the state (and the specific city of Philadelphia) as a \"target\" of moral judgment and national scrutiny.\n\nConnection to Indiana (The State)\nThe work is related to the state of Indiana in three significant ways:\n\nThe Artist's Identity: The most direct connection is the artist himself. Born Robert Clark in New Castle, Indiana, he legally changed his last name to \"Indiana\" to honor his midwestern roots. He viewed himself as an \"American sign painter,\" and his work often reflected a Midwesterner's perspective on the wider United States.\n\nControversy at the Indianapolis Museum of Art (IMA): This specific series created a stir in the artist's home state. When the Confederacy series was exhibited at the Indianapolis Museum of Art (now Newfields) in the 1970s, it reportedly caused some patrons to \"walk out in a huff\" and vow never to return. The blunt political messaging clashed with the more conservative sensibilities of the Indiana art public at the time, highlighting the tension between the artist's Hoosier roots and his radical political critiques.\n\nCollection History: The Indianapolis Museum of Art (Newfields) holds one of the most significant collections of Robert Indiana's work in the world, maintaining a deep institutional tie between the artist's legacy and the state.",
      "medium": "Oil",
      "date": "May 1905",
      "location": "Various Collections (e.g., Miami Univ. Art Museum)",
      "cause": "Civil Rights",
      "credit": "",
      "latitude": 39.8259964,
      "longitude": -86.1858349,
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana The Confederacy: Mississippi Various Collections (e.g., Miami Univ. Art Museum) Civil Rights",
      "news_media_coverage": []
    }
  },
  {
    "id": "13",
    "artist": {
      "name": "Robert (Clark) Indiana",
      "isAlive": false,
      "bio": "Robert Indiana (born Robert Clark) was a preeminent Pop Artist associated with the 1960s movement, famous globally for his \"LOVE\" sculpture and print series. Though he spent much of his later career in Maine, he was born in New Castle, Indiana, and adopted the state's name as his own. His hard-edge painting style, use of stenciled typography, and bold primary colors are iconic in American art history.",
      "website": "robertindiana.com",
      "social_media": [
        "IG: @samuellevijones"
      ]
    },
    "artwork": {
      "title": "HOPE ",
      "description": "The Artwork: \"HOPE\" (Sculpture / Graphic Image, 2008).\n1. Back Story and History: Created in 2008, this work was Robert Indiana’s direct response to the presidential campaign of Barack Obama. Indiana, who had famously created the LOVE image in the 1960s, came out of a quiet period in his career to repurpose his own iconic design for a new era. He replaced the letters L-O-V-E with H-O-P-E, keeping the signature stacked format and the tilted \"O\". He donated the copyright of the image entirely to the Obama campaign, allowing them to use it on T-shirts, posters, and pins to raise millions of dollars. Indiana famously stated that while LOVE was about a spiritual concept, HOPE was about a specific moment of political possibility.\n\n2. Art Activism: This work functions as financial and iconic political activism.\nArt as Capital: Unlike many artists who simply make \"protest art,\" Indiana used his art to generate actual capital for a cause. By donating the image rights, he turned his aesthetic style into a fundraising machine for the first African American president.\nVisual Optimism: The activism lies in the branding of optimism. He took the \"counter-culture\" font of the 1960s peace movement and successfully grafted it onto a 21st-century political platform, visually connecting the idealism of the past with the \"Change\" movement of the present.\n\n3. Influence and Existence: The image is historically permanent. Large-scale steel sculptures of HOPE (often painted in red, white, and blue) have been installed in cities like New York, Miami, and Munich. The \"HOPE\" poster became one of the defining visual symbols of the 2008 election (alongside Shepard Fairey’s work), proving that pop art could still sway national politics 40 years after its invention.",
      "medium": "Polychrome Aluminum",
      "date": "2008",
      "location": "Various Public Plazas (NYC, etc.)",
      "cause": "Political Change (Hope)",
      "credit": "",
      "categories": [],
      "searchQuery": "Robert (Clark) Indiana HOPE  Various Public Plazas (NYC, etc.) Political Change (Hope)",
      "news_media_coverage": []
    }
  },
  {
    "id": "14",
    "artist": {
      "name": "Samuel Levi Jones",
      "isAlive": true,
      "bio": "Samuel Levi Jones is an artist known for deconstructing institutional authority by physically dismantling encyclopedias, law books, and medical texts. He strips the covers off these books and stitches them together into grid-like abstract canvases, creating works that question the biases and exclusions found in recorded history. His work is visually striking while carrying deep sociopolitical critiques.",
      "website": "samuellevijones.com",
      "social_media": [
        "@samuellevijones"
      ]
    },
    "artwork": {
      "title": "Poplar Trees (Diptych)",
      "description": "The Artwork: \"Poplar Trees\" (Diptych, 2015 / Deconstructed Law Books on Canvas).\n1. Back Story and History: This massive, two-panel work is deeply personal to Samuel Levi Jones, who was born and raised in Marion, Indiana. The title is a direct reference to the haunting lyrics of the song \"Strange Fruit\" (\"Black bodies swinging in the southern breeze, strange fruit hanging from the poplar trees\"). The song was famously inspired by the 1930 lynching of two teenagers, Thomas Shipp and Abram Smith, in Jones's hometown of Marion—the last confirmed classic lynching in the Northern United States. To create the piece, Jones \"skinned\" the covers off vintage law books and encyclopedias, ripping them apart to reveal the raw, uneven textures underneath. He then stitched these skins together into a grid. The use of law books is intentional: the victims of the Marion lynching were dragged out of a jail cell, denied due process, and murdered by a mob while the law stood by and did nothing.\n\n2. Art Activism: This work functions as institutional critique and anti-violence activism.\n\nDeconstructing Power: By physically destroying symbols of authority (law books), Jones acts out a protest against a legal system that has historically failed to protect Black citizens. He renders the books \"useless,\" just as the law was useless to Shipp and Smith.\n\nVisceral Metaphor: The process of stripping the covers is a violent metaphor for the violence inflicted on Black bodies. The finished surface of the artwork looks bruised, battered, and stitched back together, serving as an abstract memorial to the trauma that the town of Marion tried to bury.\n\n3. Influence and Existence: This specific work was acquired by the IU Eskenazi Museum of Art in Bloomington, Indiana, making it a permanent part of the state's cultural record. Its impact has extended beyond the museum walls; the themes explored in Poplar Trees laid the groundwork for Jones's recent collaboration on a proposed permanent memorial in Marion, titled \"Making a Garden of Strange Fruit,\" which aims to reclaim the site of the tragedy as a space for healing and reflection.",
      "medium": "Deconstructed Books",
      "date": "July 1905",
      "location": "Indianapolis (Newfields / Eskenazi Museum)",
      "cause": "Institutional Racism / Justice",
      "imageUrl": "/Images/SamuelLeviJones_PoplarTrees.png",
      "credit": "",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Samuel Levi Jones Poplar Trees (Diptych) Indianapolis (Newfields / Eskenazi Museum) Institutional Racism / Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "15",
    "artist": {
      "name": "Rachel Kavathe",
      "isAlive": true,
      "bio": "Rachel Kavathe is a sculptor and public artist whose work often draws inspiration from the natural world. She creates large-scale installations, often using steel and other durable materials to mimic organic forms like leaves, seed pods, or plants. Her work can be found in various parks and public spaces in Indiana, offering a serene interplay between industrial materials and nature.",
      "website": "rachelkavathe.com",
      "social_media": [
        "@rachelkavathe_studio"
      ]
    },
    "artwork": {
      "title": "McDoel Blooms",
      "description": "The Artwork: \"McDoel Blooms\" (Asphalt Street Mural & Sidewalk Series).\n1. Back Story and History: Installed in June 2025 (just this past summer), this large-scale street mural creates a vibrant floral carpet at the intersection of Allen and Fairview Streets in Bloomington’s historic McDoel Gardens neighborhood. Rachel Kavathe, an artist who is also a trained landscape architect, designed the piece to honor the neighborhood's specific architectural history. Since many McDoel homes were built in the 1920s and 30s, she stylized the flowers in an Art Deco aesthetic. The artwork features native plants found in local residents' yards—specifically Blue Flag Iris, Coreopsis, and Coneflower—visually proving why the neighborhood is named \"McDoel Gardens.\"\n\n2. Art Activism: This work functions as ecological and communal placemaking activism.\nThe \"Paint Day\" as Protest: The creation of the mural was a collective act; it was painted during a \"Community Paint Day\" where neighbors claimed the street for themselves, turning a dangerous intersection for cars into a gathering space for people.\nPollinator Advocacy: By super-sizing these specific flowers on the pavement, Kavathe advocates for the protection of local pollinators. She makes the \"invisible\" ecosystem visible, reminding residents that their personal gardens are part of a critical environmental network.\n\n3. Influence and Existence: The artwork is currently in existence and active. Beyond just being beautiful, it serves a functional role as traffic calming art—signaling to drivers that they are entering a cared-for, residential zone where they must slow down. It stands as a fresh landmark for the neighborhood, reinforcing the identity of McDoel Gardens as a place where nature and community history intertwine.",
      "medium": "Street Mural",
      "date": "2025 (Upcoming)",
      "location": "Bloomington (Allen & Fairview Streets)",
      "cause": "Community Connection",
      "imageUrl": "/Images/RachelKavathe_McDoelBlooms.webp",
      "credit": "Drone Photography by Caleb Poer",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Rachel Kavathe McDoel Blooms Bloomington (Allen & Fairview Streets) Community Connection",
      "news_media_coverage": []
    }
  },
  {
    "id": "16",
    "artist": {
      "name": "Kassie Woodworth",
      "isAlive": true,
      "bio": "Kassie Woodworth is an Indianapolis painter whose work often focuses on organic textures and fluid forms. She frequently uses resin, alcohol inks, or fluid acrylics to create abstract pieces that resemble geological formations, water, or microscopic biology. Her style is characterized by movement, high gloss, and a meditative attention to color interaction.",
      "website": "kassiewoodworth.com",
      "social_media": [
        "@kassiewoodworth"
      ]
    },
    "artwork": {
      "title": "Together",
      "description": "The Artwork: \"Together\" (Mixed Media Quilt / Linocut on Fabric).\n1. Back Story and History: Commissioned in 2020 by the Indiana Women's Suffrage Centennial Commission, this piece was created to pair with Shelby Nower’s painting in the Indiana Statehouse. While Woodworth is often known for her fluid resin paintings, she chose a radically different medium for this project: quilting. She carved six linoleum blocks featuring imagery of Hoosier suffragists and the text of the 19th Amendment, then hand-printed these designs onto fabric squares. The construction of the quilt was a literal act of \"togetherness\"—Woodworth collaborated with four generations of women and men in her own family to bead, embroider, and stitch the final piece, turning the physical object into a living timeline of familial history.\n\n2. Art Activism: This work functions as labor and intersectional activism.\n\nElevating \"Women's Work\": By choosing quilting—a craft historically dismissed as \"domestic duty\" rather than \"fine art\"—Woodworth forced the Statehouse to recognize the skilled, unpaid labor of women as monumental.\n\nThe Unfinished Fight: The quilt explicitly addresses the racial gap in the suffrage movement. Woodworth included imagery and text acknowledging that while white women gained the vote in 1920, many Black women (and other women of color) were effectively barred from voting until the Voting Rights Act of 1965. The quilt refuses to let the 1920 date stand as the only victory, visually reminding viewers that the \"togetherness\" of the movement was often fractured by racism.\n\n3. Influence and Existence: The quilt is currently in existence and is part of the State of Indiana’s Permanent Public Art Collection. It hangs alongside Shelby Nower’s painting in the Lieutenant Governor’s office at the Statehouse. Its presence there serves as a soft, tactile contrast to the cold marble and stone of the government building, reminding legislators that the fabric of the state was stitched together by the hands of women.",
      "medium": "Quilt (Embroidery/Screenprint)",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage / Unity",
      "imageUrl": "/Images/KassieWoodworth_Together.png",
      "credit": "",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kassie Woodworth Together Indianapolis (Indiana Statehouse) Women's Suffrage / Unity",
      "news_media_coverage": []
    }
  },
  {
    "id": "17",
    "artist": {
      "name": "Shelby Nower",
      "isAlive": true,
      "bio": "Shelby Nower is a contemporary painter known for her stylized, colorful landscapes and architectural scenes. Her work often flattens perspective and uses a vibrant, almost pastel-neon palette to depict houses and neighborhoods, giving them a dreamlike or nostalgic quality. She frequently explores themes of home and memory in her compositions.",
      "website": "shelbynower.com",
      "social_media": [
        "@shelbynower"
      ]
    },
    "artwork": {
      "title": "nINeteenth",
      "description": "The Artwork: \"nINeteenth\" (Acrylic on Canvas).\n1. Back Story and History: Commissioned in 2020 by the Indiana Women's Suffrage Centennial Commission, this painting was created to celebrate the 100th anniversary of the ratification of the 19th Amendment, which granted women the right to vote. The title is stylized as \"nINeteenth\" to emphasize the \"IN\" (the postal code for Indiana), highlighting the specific role Hoosier women played in this national victory. The large-scale painting depicts a diverse group of women from the 1920s standing in line, finally casting their ballots for the first time. It captures the mix of solemnity and excitement of that historical moment.\n\n2. Art Activism: This work functions as institutional representation and historical activism.\nTaking Up Space: Nower’s activism lies in placing the female voter directly into the seat of power. The painting was commissioned specifically to hang in the Indiana Statehouse—a building historically dominated by portraits of male governors and legislators. By installing a life-size image of women exercising their political power in the Lieutenant Governor’s office, the artwork serves as a permanent reminder to current politicians of who they are accountable to.\n\nVisualizing Democracy: It celebrates the act of voting not as a mundane chore, but as a hard-won revolutionary act.\n\n3. Influence and Existence: The painting is currently in existence and is part of the State of Indiana’s Permanent Public Art Collection. It was unveiled alongside a quilt by artist Kassie Woodworth titled \"Together\" and remains on permanent display in the Lieutenant Governor’s office at the Statehouse, ensuring that the legacy of the suffragists is visible to the state's highest leadership daily.",
      "medium": "Acrylic / Mural",
      "date": "",
      "location": "Indianapolis (Indiana Statehouse)",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/ShelbyNower_Nineteenth.webp",
      "credit": "",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Shelby Nower nINeteenth Indianapolis (Indiana Statehouse) Women's Suffrage",
      "news_media_coverage": []
    }
  },
  {
    "id": "18",
    "artist": {
      "name": "Bonnie Fillenwarth",
      "isAlive": true,
      "bio": "Bonnie Fillenwarth is a painter based in the Circle City Industrial Complex who specializes in water-themed landscapes. Her work captures the tranquility of lakes, pools, and oceans, often using a distinctively soft and fluid application of paint to mimic the reflective qualities of water. She aims to bring a sense of \"vacation\" and calm to the viewer through her art.",
      "website": "bonniefillenwarth.com",
      "social_media": [
        "@bonniefillenwarth"
      ]
    },
    "artwork": {
      "title": "Her Flag (Indiana Stripe)",
      "description": "The Artwork: \"Her Flag\" (Indiana Stripe Contribution).\n1. Back Story and History: This work was part of a massive, nationwide collaborative art project orchestrated by artist Marilyn Artus to celebrate the 100th anniversary of the 19th Amendment (women's right to vote) in 2020. Artus selected one female artist from each of the 36 states that ratified the amendment to design a stripe for an 18 x 26-foot flag. Bonnie Fillenwarth was chosen to represent Indiana (the 26th state to ratify). For her stripe, Fillenwarth departed from her usual water landscapes to paint a portrait of May Wright Sewall, the legendary Indianapolis suffragist and educator who helped found the Indianapolis Museum of Art and the Herron School of Art. The stripe serves as a visual \"thank you\" to the women who built the cultural and political foundations of the state.\n\n2. Art Activism: This work functions as historical recovery and feminist activism.\n\nReclaiming the Narrative: By placing May Wright Sewall on a national flag, Fillenwarth fights against the erasure of women's history. She highlights that institutions often credited to city leaders were actually built by women whose names are less frequently spoken.\n\nThe Power of Collection: The project itself is a form of \"activism through assembly.\" Just as the amendment required 36 states to agree, the artwork required 36 strangers to collaborate, symbolizing that rights are won through collective, not individual, action.\n\n3. Influence and Existence: The massive \"Her Flag\" is currently in existence and has been exhibited at prestigious venues including the National Museum of Women in the Arts in Washington, D.C., and the Clinton Presidential Center. While Bonnie's stripe is permanently sewn into this larger monument, her participation solidified her status as a key contemporary voice in Indiana women's history. The project remains a premier example of how artists can coordinate across state lines to create national monuments.",
      "medium": "Mixed Media / Textile",
      "date": "2020",
      "location": "Various (Travels Nationally)",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/BonnieFillenwarth_HerFlag.webp",
      "credit": "",
      "categories": [],
      "searchQuery": "Bonnie Fillenwarth Her Flag (Indiana Stripe) Various (Travels Nationally) Women's Suffrage",
      "news_media_coverage": []
    }
  },
  {
    "id": "19",
    "artist": {
      "name": "Billy Hoodoo",
      "isAlive": true,
      "bio": "Pope Samuel Gaskine, known artistically as Billy Hoodoo, is a member of The Eighteen Art Collective and a musician who experiences synesthesia. This neurological condition, where he \"sees\" sound as color, heavily influences his abstract and expressionist paintings. He painted the \"I\" in the Black Lives Matter mural and works across mediums to explore the intersection of auditory and visual art.",
      "website": "18artcollective.com",
      "social_media": [
        "@billyhoodoo"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter C)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Billy Hoodoo Black Lives Matter Mural (Letter C) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "20",
    "artist": {
      "name": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow)",
      "isAlive": true,
      "bio": "Operating under the name \"Walk the Willow,\" this husband-and-wife duo creates distinctive rustic furniture and sculptures from willow branches. They harvest their own materials and weave them into intricate, functional art pieces like chairs, trellises, and fences. Their work revives traditional craft techniques while adding a sculptural, whimsical element to garden design.",
      "website": "artistsforclimateawareness.org",
      "social_media": [
        "FB: Walk the Willow"
      ]
    },
    "artwork": {
      "title": "Walk the Willow Sculptures",
      "description": "The Artwork: \"Walk the Willow Sculptures\" (Large-scale Stick/Woven Installations).\n1. Back Story and History: Operating out of rural Indiana, this husband-and-wife duo (Justin Roberts and Shannon Davis-Roberts) has revived the ancient craft of stick bending and weaving to create massive, whimsical sculptures. Their process is intensely physical and rooted in the land. They do not buy materials; they sustainably harvest wild willow and invasive species from local ditches and roadways. Their sculptures range from functional furniture (chairs and fences) to towering, surreal figures—such as \"The Connection,\" a massive woven head and hand reaching out to nature, or the \"Stick Man\" figures often seen at festivals. They twist the freshly cut wood while it is still pliable, creating organic forms that look like sketches come to life in 3D space.\n\n2. Art Activism: This work functions as environmental sustainability and \"slow art\" activism.\n\nEco-Materiality: Their activism is in their supply chain. By using invasive species or wild-harvested willow, they are cleaning the local ecosystem while creating art. The sculptures are 100% biodegradable; eventually, they will rot and return to the earth, challenging the art world's obsession with permanence and plastic/metal waste.\n\nConnection to Nature: In a digital age, their work forces an interaction with the raw, imperfect texture of nature. It advocates for a lifestyle that is attuned to the seasons (harvesting in winter/spring) and respects the lifecycle of plants.\n\n3. Influence and Existence: Their work is currently in existence and highly active. You can find their permanent and semi-permanent installations at public venues like Conner Prairie, the Indianapolis Art Center, and various parks throughout the Midwest. They are also influential educators, frequently teaching \"willow bending\" workshops to ensure this traditional folk skill is not lost to history. Their brand \"Walk the Willow\" has become synonymous with the \"natural playground\" movement in Indiana.",
      "medium": "Willow Branches / Sculpture",
      "date": "Ongoing",
      "location": "Various (Nature Parks)",
      "cause": "Environmental Connection",
      "credit": "",
      "categories": [],
      "searchQuery": "Justin Roberts & Shannon Davis-Roberts (Walk the Willow) Walk the Willow Sculptures Various (Nature Parks) Environmental Connection",
      "news_media_coverage": []
    }
  },
  {
    "id": "21",
    "artist": {
      "name": "Angelica Frausto (Nerdy Brown Kid)",
      "isAlive": true,
      "bio": "Angelica Frausto, who operates under the brand \"Nerdy Brown Kid,\" is an illustrator and painter focused on celebrating her Mexican heritage and personal interests. Her work is often character-driven, colorful, and playful, incorporating elements of pop culture and folklore. She uses her art to explore identity and create representation for \"nerdy\" Latinx youth.",
      "website": "nerdybrownkid.com",
      "social_media": [
        "@nerdybrownkid"
      ]
    },
    "artwork": {
      "title": "Justice for Migrant Communities",
      "description": "The Artwork: \"Justice for Migrant Communities\" (Digital Illustration / Print).\n1. Back Story and History: Angelica Frausto, known by her artist alias \"Nerdy Brown Kid,\" created this piece during a period of heightened awareness regarding the crisis at the US-Mexico border. Departing from her usual \"cozy\" and character-driven style, this work utilizes her signature bold lines and vibrant colors to deliver a direct political message. The illustration typically features stylized, brown-skinned figures holding protest signs or engaging in solidarity, often incorporating bilingual text. It was designed to be easily shareable—functioning as a \"digital poster\" that could be printed for rallies or shared across social media to spread awareness rapidly.\n\n2. Art Activism: This work functions as digital advocacy and representation activism.\nAccessible Protest: Frausto uses the \"cute\" or approachable aesthetic of pop illustration to disarm the viewer, making the hard pill of political protest easier to swallow. This allows the message of migrant justice to reach younger audiences or those who might tune out traditional gritty news imagery.\n\nVisibility: By centering \"brown kids\" as the heroes and activists in the image, she validates the feelings of Latinx youth who are often watching their own families or communities be targeted. It asserts that you can be \"nerdy,\" soft, and an activist all at the same time.\n\n3. Influence and Existence: This artwork is currently in existence primarily as a digital artifact and print. It circulates widely online within the Indianapolis activist community and is often sold at local markets (like the Midtown Market or Pogue's Run), with proceeds frequently supporting mutual aid funds. Frausto remains an active presence in the local \"zine\" and maker scene, using her \"Nerdy Brown Kid\" brand to constantly advocate for the safety and dignity of brown youth in Indiana.",
      "medium": "Ink / Digital Illustration",
      "date": "2020",
      "location": "South Bend",
      "cause": "Gender & LGBTQ+ Rights",
      "credit": "https://www.creativewildfire.org/poster-portfolio#migrantcommunities",
      "latitude": 41.6833813,
      "longitude": -86.2500066,
      "categories": [],
      "searchQuery": "Angelica Frausto (Nerdy Brown Kid) Justice for Migrant Communities South Bend Gender & LGBTQ+ Rights",
      "news_media_coverage": []
    }
  },
  {
    "id": "22",
    "artist": {
      "name": "Beatriz Vasquez",
      "isAlive": true,
      "bio": "Beatriz Vasquez is a Mexican-American artist specializing in papel picado, the traditional art of paper cutting. She transforms this folk craft into a medium for high art and social activism, using an X-Acto knife to cut intricate sheets of paper that address issues like immigration, women's rights, and cultural identity. Her delicate, lace-like works are often installed as large-scale conceptual pieces.",
      "website": "beatrizvasquezart.com",
      "social_media": [
        "@beatrizvasquezart"
      ]
    },
    "artwork": {
      "title": "\"Hope & Loss — A Border Elegy\" (Exhibition)",
      "description": "The Artwork: \"Hope & Loss — A Border Elegy\" (Papel Picado Installation).\n1. Back Story and History: This exhibition showcases Vasquez’s mastery of papel picado, the traditional Mexican folk art of paper cutting. While this medium is typically used for festive banners (like at Día de los Muertos), Vasquez transforms it into a tool for high-contrast storytelling. Using a simple X-Acto knife and sheets of black or white paper, she hand-cuts incredibly intricate, large-scale silhouettes that depict the realities of the US-Mexico border. The scenes often feature families walking through the desert, children behind chain-link fences, or figures carrying water jugs. The \"Elegy\" in the title indicates that the work serves as a funeral song or lament for those who have died seeking a better life.\n\n2. Art Activism: This work functions as immigration and humanitarian activism.\nThe Medium is the Message: The activism lies in the fragility of the paper. By using a material that can tear easily to depict human lives, Vasquez metaphorically represents the precarious nature of the immigrant journey—one wrong step can lead to death or deportation.\n\nSubverting Tradition: She takes a craft associated with joy and celebration and uses it to expose trauma and systemic violence. This forces the viewer to reconcile their appreciation for \"Mexican culture\" (the art style) with the harsh treatment of Mexican people.\n\n3. Influence and Existence: Beatriz Vasquez is one of the most decorated artists in Indianapolis, having received the Efroymson Contemporary Arts Fellowship. Her work is actively collected and exhibited; pieces from her border series have been acquired by Newfields (Indianapolis Museum of Art) and the Children's Museum of Indianapolis. She continues to be a central figure in the local Latino community, using her art workshops to teach younger generations about their heritage while advocating for social justice.",
      "medium": "Papel Picado (Cut Paper)",
      "date": "2019",
      "location": "Indianapolis (Cultural Trail/Airport)",
      "cause": "Immigration Rights",
      "imageUrl": "/Images/Beatriz Vasquez.jpg",
      "credit": "https://directory.artsforlearningindiana.org/artists/BeatrizVasquez",
      "categories": [],
      "searchQuery": "Beatriz Vasquez \"Hope & Loss — A Border Elegy\" (Exhibition) Indianapolis (Cultural Trail/Airport) Immigration Rights",
      "news_media_coverage": []
    }
  },
  {
    "id": "23",
    "artist": {
      "name": "Nasreen Khan",
      "isAlive": true,
      "bio": "Nasreen Khan is a multi-disciplinary artist and writer whose work often deals with the complexities of identity, motherhood, and the immigrant experience. She employs a variety of mediums, including painting, fiber arts, and text, to tell personal and political stories. Her work is deeply introspective, often questioning societal norms and boundaries.",
      "website": "nasreen-khan.com",
      "social_media": [
        "@nasreenkhanart"
      ]
    },
    "artwork": {
      "title": "Mother & Child / Breathe",
      "description": "The Artwork: \"Mother & Child\" (Mural / Mixed Media).\n1. Back Story and History: Created in June 2020 as part of the Murals for Racial Justice project, this piece was originally painted on the plywood boards covering the windows of a business on Massachusetts Avenue in Indianapolis. Nasreen Khan, a multi-disciplinary artist of African-American and Indonesian heritage, chose to step away from the loud slogans of the protests to depict a quiet, terrifyingly intimate moment. The image features a Black mother clutching her young son close to her chest. The boy looks innocent and calm, but the mother’s eyes are wide with alertness and fear, scanning the horizon for threats.\n\n2. Art Activism: This work functions as maternal and empathy activism.\nThe Burden of Protection: In the wake of George Floyd’s death (associated with the plea \"I can't breathe\"), this piece visualizes the suffocating anxiety Black mothers feel regarding the safety of their sons. It is a visual representation of \"The Talk\"—the moment parents must teach Black children how to survive police encounters.\n\nHumanizing the Statistic: While news cycles focus on the violence, Khan’s work focuses on the love and loss. Her activism forces the viewer to recognize that every victim of state violence is someone’s child, breaking through political numbness with raw maternal instinct.\n\n3. Influence and Existence: Like other works from this initiative, the original plywood mural was temporary. However, it was recognized as one of the most emotive pieces of the movement and was preserved by the Indianapolis Public Library for their \"Murals for Racial Justice\" collection. It continues to be exhibited in high-quality reproductions and serves as a key visual text in local discussions about race, parenting, and community trauma.",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Multiculturalism / Migration",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "categories": [],
      "searchQuery": "Nasreen Khan Mother & Child / Breathe Indianapolis Multiculturalism / Migration",
      "news_media_coverage": []
    }
  },
  {
    "id": "24",
    "artist": {
      "name": "Ashley Nora",
      "isAlive": true,
      "bio": "Ashley Nora is a former chemist turned full-time artist and member of The Eighteen Art Collective. She is known for her realistic portraiture and large-scale murals that often feature human subjects surrounded by geometric or floral elements. She painted the \"E\" in the Black Lives Matter mural and uses her scientific background to bring a meticulous precision to her creative process.",
      "website": "ashleynoraart.com",
      "social_media": [
        "@ashleynoraart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter R)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Black Joy",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Ashley Nora Black Lives Matter Mural (Letter R) Indianapolis (Indiana Ave - Archived) Racial Justice / Black Joy",
      "news_media_coverage": []
    }
  },
  {
    "id": "25",
    "artist": {
      "name": "Kenneth Hordge (Fingercreations)",
      "isAlive": true,
      "bio": "Kenneth Hordge, known as Fingercreations, is a member of The Eighteen Art Collective who paints exclusively using his fingers rather than brushes. This tactile technique allows him to manipulate texture and motion directly on the canvas, resulting in expressive, energetic portraits and scenes. He painted the \"V\" in the Black Lives Matter mural.",
      "website": "ganggangculture.com",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint / Drywall",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Kenneth Hordge (Fingercreations) Black Lives Matter Mural (Fist) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "26",
    "artist": {
      "name": "Robert Indiana",
      "isAlive": false,
      "bio": "Robert Indiana (born Robert Clark) was a preeminent Pop Artist associated with the 1960s movement, famous globally for his \"LOVE\" sculpture and print series. Though he spent much of his later career in Maine, he was born in New Castle, Indiana, and adopted the state's name as his own. His hard-edge painting style, use of stenciled typography, and bold primary colors are iconic in American art history.",
      "website": "robertindiana.com",
      "social_media": [
        "@robertindiana"
      ]
    },
    "artwork": {
      "title": "The Mother of Us All",
      "description": "The Artwork: \"The Mother of Us All\" (Production Design / Lithograph Portfolio).\n1. Back Story and History: This work was originally a massive theatrical undertaking. In 1966, Robert Indiana was commissioned to design the sets and costumes for the 1967 Center Opera Company production of The Mother of Us All—an opera by Gertrude Stein and Virgil Thomson about the life of Susan B. Anthony. Indiana, known for his obsession with American signage, approached the opera as a \"Pop Art pageant.\" He dressed the characters in vibrant, felt sash-like costumes that functioned like walking signs (labeling them with their names or roles), and he notably introduced a Model T Ford onto the stage as a symbol of American progress. Years later, in 1977, he immortalized these temporary theatrical designs by creating a portfolio of intricate lithographs and collages, preserving the visual identity of the characters like Susan B. Anthony and Daniel Webster in his signature bold, graphic style.\n\n2. Art Activism: This work functions as feminist and voting rights activism.\nCelebrating Suffrage: By applying his high-visibility Pop Art aesthetic to the story of women's suffrage, Indiana helped elevate Susan B. Anthony from a \"dusty historical figure\" to a vibrant, modern icon. The work celebrates the grueling, unglamorous political labor required to win the right to vote.\n\nAmericana as Protest: By titling the work \"The Mother of Us All\" and wrapping the figures in red, white, and blue, Indiana asserts that the feminist struggle is central to the American identity, not a sidebar. It frames the fight for equality as the ultimate patriotic act.\n\n3. Influence and Existence: The original 1967 production at the Guthrie Theater is considered a landmark in the history of American opera design. While the stage production itself is gone, the 1977 lithograph portfolio is widely held in major museum collections, including the Metropolitan Museum of Art and the McNay Art Museum (which holds many of the original costume sketches). These prints remain some of the most accessible visual representations of the opera and continue to be used to promote voting rights and women's history.",
      "medium": "Lithography / Set Design",
      "date": "1967 / 1976",
      "location": "Various Collections",
      "cause": "Women's Suffrage",
      "imageUrl": "/Images/RobertIndiana_TheMotherofUsAll.jpg",
      "credit": "https://www.artsy.net/artist-series/robert-indiana-mother-of-us-all",
      "latitude": 39.8259964,
      "longitude": -86.1858349,
      "categories": [],
      "searchQuery": "Robert Indiana The Mother of Us All Various Collections Women's Suffrage",
      "news_media_coverage": []
    }
  },
  {
    "id": "27",
    "artist": {
      "name": "Jeffrey A. Wolin",
      "isAlive": true,
      "bio": "Jeffrey A. Wolin is a celebrated photographer and professor emeritus at Indiana University, known for his unique combination of photography and handwritten text. His major series include portraits of Holocaust survivors and Vietnam War veterans, where he writes the subjects' oral histories directly onto the photographic prints. This technique adds a layer of time and personal voice to the static image.",
      "website": "jeffreywolin.com",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Written in Memory",
      "description": "The Artwork: \"Written in Memory: Portraits of the Holocaust\" (Photographic Series).\n1. Back Story and History: This profound series was created by Jeffrey A. Wolin (a longtime Professor of Photography at Indiana University) over the course of several years, beginning in the late 1980s. Recognizing that the generation of Holocaust survivors was aging and passing away, Wolin sought to preserve their history in a unique way. He took stark, compassionate black-and-white portraits of survivors, often in their own homes. He then asked each subject to handwrite their personal story of survival directly onto the photographic print. The result is a layered image where the texture of the survivor's aging face is literally covered by the ink of their traumatic memory, merging the past and the present into a single document.\n\n2. Art Activism: This work functions as historical preservation and anti-genocide activism.\nForcing the Viewer to Read: Wolin’s technique disrupts the passive consumption of photography. You cannot simply glance at the face and walk away; the writing forces you to step closer and read the specific, horrifying details of their experience. It turns the viewer into a witness.\n\nIndividualizing the Statistic: In a world where the number \"6 million\" can feel abstract, this project re-individualizes the victims. It validates the specific voice and handwriting of each person, fighting against the erasure intended by the Nazi regime.\n\n3. Influence and Existence: The series is permanently in existence and is considered a landmark in contemporary photography. It was published as a critically acclaimed book, Written in Memory, and the original prints are held in major collections worldwide, including the Art Institute of Chicago and the Museum of Modern Art (MoMA) in New York. locally, Wolin’s influence as an educator at IU has shaped generations of photographers in the Midwest, establishing the \"image/text\" style as a key storytelling tool in the region.",
      "medium": "Photography with Text",
      "date": "1990s",
      "location": "Bloomington (IU / Various)",
      "cause": "Social Justice / Holocaust Memory",
      "imageUrl": "/Images/JeffreyA.Wolin_Written in Memory.jpg",
      "credit": "https://www.jeffreywolin.com/jakob-schwartz/",
      "categories": [],
      "searchQuery": "Jeffrey A. Wolin Written in Memory Bloomington (IU / Various) Social Justice / Holocaust Memory",
      "news_media_coverage": []
    }
  },
  {
    "id": "28",
    "artist": {
      "name": "Kevin West",
      "isAlive": true,
      "bio": "Kevin West is a visual artist and member of The Eighteen Art Collective known for his pop-art influenced style and vibrant use of color. His work often features bold outlines and stylized figures, drawing inspiration from cartoons and graphic design. He painted the \"S\" in the Black Lives Matter mural and is an active community advocate.",
      "website": "artlafayette.org",
      "social_media": [
        "@kevinwestart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter K)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Police Brutality",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Kevin West Black Lives Matter Mural (Letter K) Indianapolis (Indiana Ave - Archived) Racial Justice / Police Brutality",
      "news_media_coverage": []
    }
  },
  {
    "id": "29",
    "artist": {
      "name": "John G. Moore",
      "isAlive": true,
      "bio": "John G. Moore is a painter and pastor who is a member of The Eighteen Art Collective. His work often reflects his spiritual background and commitment to social uplift, featuring dignified portraits and scenes of African American life. He painted the second \"E\" in the Black Lives Matter mural, often using his art as a vehicle for his ministry and community message.",
      "website": "blcklst.com",
      "social_media": [
        "@johngmoorejr"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Voting Rights",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "John G. Moore Black Lives Matter Mural (Letter L) Indianapolis (Indiana Ave - Archived) Racial Justice / Voting Rights",
      "news_media_coverage": []
    }
  },
  {
    "id": "30",
    "artist": {
      "name": "Ess McKee",
      "isAlive": true,
      "bio": "Ess McKee is a graphic designer, painter, and member of The Eighteen Art Collective whose work bridges the digital and fine art worlds. She often employs a hip-hop aesthetic with bold typography, graffiti elements, and high-contrast imagery. She painted the first \"E\" in the Black Lives Matter mural, bringing a strong design sensibility to the collective.",
      "website": "ganggangculture.com",
      "social_media": [
        "@essmckee"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter S)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Ess McKee Black Lives Matter Mural (Letter S) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "31",
    "artist": {
      "name": "Wavy Blayne",
      "isAlive": true,
      "bio": "Blayne McCrary, known as Wavy Blayne, is a mixed-media artist, music producer, and member of The Eighteen Art Collective. His \"Afrofuturist\" style is heavily influenced by Japanese anime and street culture, often featuring stylized characters and cosmic themes. He painted the \"M\" in the Black Lives Matter mural, integrating his love for music and visual storytelling.",
      "website": "18artcollective.com",
      "social_media": [
        "@wavyblayne"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter M)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Wavy Blayne Black Lives Matter Mural (Letter M) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "32",
    "artist": {
      "name": "Harriet Watson",
      "isAlive": true,
      "bio": "Harriet Watson is a painter and member of The Eighteen Art Collective known for her emotive and often historical portraiture. Her work frequently highlights the strength and resilience of Black women and historical figures. She painted the \"A\" in the Black Lives Matter mural, contributing a classical painterly touch to the project.",
      "website": "harrietwatsonart.com",
      "social_media": [
        "@harrietwatsonart"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Harriet Watson Black Lives Matter Mural (Letter A) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "33",
    "artist": {
      "name": "Deonna Craig",
      "isAlive": true,
      "bio": "Deonna Craig is an Indianapolis-based artist, community leader, and the president of The Eighteen Art Collective. She works in acrylics and mixed media to create vibrant, often Afrocentric paintings that celebrate Black culture and history. She painted the first \"A\" in the Black Lives Matter mural and is a central organizer for the group's exhibitions and advocacy.",
      "website": "deonnacraigart.com",
      "social_media": [
        "@deonna_craig"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter V)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Deonna Craig Black Lives Matter Mural (Letter V) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "34",
    "artist": {
      "name": "Danicia Monét (Danicia Malone)",
      "isAlive": true,
      "bio": "Danicia Monét (formerly Danicia Malone) is an arts administrator, researcher, and artist focused on the built environment and equity in public space. As a member of The Eighteen Art Collective, she combines her background in urban planning with visual art to explore themes of place, race, and memory. She uses art as a tool for \"design justice\" and community healing.",
      "website": "https://indianahumanities.org/danicia-monet-malone/",
      "social_media": [
        "@daniciamonet"
      ]
    },
    "artwork": {
      "title": "Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder)",
      "description": "The Project: Black Poetics of Place / BlackSpace Indianapolis / Rokh.\n1. Back Story and History: Danicia Monét (formerly Malone) operates at the intersection of urban planning, research, and visual art. She co-founded the Indianapolis chapter of BlackSpace Urbanist Collective and founded her own design agency, Rokh. Her central philosophy, \"Black Poetics of Place,\" is a framework she developed to interrogate how Black people experience, design, and remember the built environment. Unlike traditional urban planning, which relies on sterile maps and zoning codes, Monét uses \"poetics\"—art, oral history, and sensory experience—to understand a neighborhood. She asserts that the \"vibe,\" memory, and emotional resonance of a Black neighborhood are just as valid as the physical infrastructure.\n\n2. Art Activism: This work functions as spatial justice and design activism.\nAnti-Gentrification: Monét’s work explicitly challenges the \"white spatial imaginary\" that often drives gentrification. By documenting and celebrating the existing cultural wealth of Black neighborhoods (like Indiana Avenue or the near Northwest side), she fights the narrative that these places need \"saving\" by outside developers.\n\nThe Right to Be: Through Rokh and BlackSpace, she organizes \"Black urbanist\" interventions—events or installations that assert Black people's right to occupy public space joyfully and safely. She argues that \"planning\" is not just for bureaucrats; it is an artistic act of imagining a future where Black life thrives.\n\n3. Influence and Existence: This work is highly active and influential in shaping current Indianapolis policy and culture. Monét has served as an Arts & Culture Ambassador for the Indianapolis Cultural Trail and a fellow for Americans for the Arts. Her \"Black Poetics of Place\" theory has been presented at national design conferences, influencing a new generation of urban planners to treat culture as a vital piece of city infrastructure. Rokh continues to consult on major city projects, ensuring that \"design justice\" is built into the blueprint of Indianapolis's future.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Architecture / Research",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Racial Justice / Urban Design",
      "credit": " https://www.instagram.com/p/DMFqRA_sALO/",
      "categories": [],
      "searchQuery": "Danicia Monét (Danicia Malone) Black Poetics of Place, BlackSpace Indianapolis (Co-Founder)/ Rokh (Founder) Indianapolis Racial Justice / Urban Design",
      "news_media_coverage": []
    }
  },
  {
    "id": "35",
    "artist": {
      "name": "Dr. Jarrod Dortch",
      "isAlive": false,
      "bio": "Dr. Jarrod Dortch is an artist, agriculturalist, and educator who is a member of The Eighteen Art Collective. He is also the founder of \"Nicey Treat\" (a popsicle company) and uses his art to explore the connection between Black people and nature/botany. He painted the \"T\" in the Black Lives Matter mural, often incorporating plant life and organic themes into his visuals.",
      "website": "digitaleducationhub.community",
      "social_media": [
        "@solfulgardens"
      ]
    },
    "artwork": {
      "title": "Solful Gardens ",
      "description": "The Project: Solful Gardens (Botanical Art & Landscape Design).\n1. Back Story and History: Dr. Jarrod Dortch is unique in the Indianapolis art scene because his primary medium is living matter. After earning his PhD in Higher Education, Dortch expanded his focus to become an urban agriculturalist and \"plant stylist\" under the banner of Solful Gardens. He views gardening not just as a chore, but as an artistic practice, curating interior and exterior spaces with the same attention to color, texture, and composition as a painter. Whether he is installing a lush green wall in a corporate office or designing a home garden, he treats plants as \"living sculpture,\" blending his background in education with his passion for horticulture.\n\n2. Art Activism: This work functions as environmental justice and \"reclamation\" activism.\nHealing the Trauma: Dortch frequently speaks about the complicated relationship African Americans have with agriculture due to the historical trauma of slavery and sharecropping. His activism seeks to reclaim the soil—shifting the narrative from forced labor to liberation, ownership, and healing. He argues that working with the land is a therapeutic act of self-reliance.\n\nGreen Equity: By focusing on urban agriculture, he addresses \"nature deficits\" in city neighborhoods, advocating that access to green beauty and fresh food is a human right, not a luxury for the suburbs.\n\n3. Influence and Existence: Solful Gardens is a thriving, active business and artistic practice in Indianapolis. Dr. Dortch's influence can be seen in the \"greening\" of various public and private spaces across the city (he often collaborates with the Harrison Center and 16 Tech). As a member of The Eighteen Art Collective, he brought this philosophy into the museum context during the \"We. The Culture\" exhibition, where he displayed installations that mixed fine art with botanical elements, proving that a gardener is indeed an artist.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Social Practice / Agriculture",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Food Justice",
      "imageUrl": "/Images/Dr. Jarrod Dortch_Solful Gardens.jpg",
      "credit": "https://farmflavor.com/indiana/solful-gardens-offers-community-a-new-source-for-fresh-produce/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Dr. Jarrod Dortch Solful Gardens  Indianapolis Food Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "36",
    "artist": {
      "name": "Matthew Cooper",
      "isAlive": true,
      "bio": "Matthew Cooper is a painter and member of The Eighteen Art Collective known for his dynamic, colorful style. His work often features abstract backgrounds with focused, realistic subjects or symbolic imagery. He contributed to the collective effort of the mural, bringing a distinct vibrancy to his section.",
      "website": "debutart.com (Rep)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Truth Seekers",
      "description": "The Artwork: \"Truth Seekers\" (Mural / Digital Print).\n1. Back Story and History: This piece was originally created in June 2020 as part of the Murals for Racial Justice initiative. When protests following the murder of George Floyd led to downtown Indianapolis being boarded up, Cooper was commissioned to paint the plywood covering the windows of the historic Old City Hall. He created a powerful triptych (three-panel) mural. The central image features a mugshot of a wrongfully convicted Black man, staring directly at the viewer with a gaze of intense vulnerability and defiance. He is flanked on either side by two regal Black women, painted in profile, whom Cooper describes as \"protective spirits\" guarding him. The work transforms the criminalizing aesthetic of a \"mugshot\" into a portrait of humanity and resilience.\n\n2. Art Activism: This work functions as criminal justice and \"narrative correction\" activism.\n\nExposing the System: By placing a \"criminal\" mugshot on the very building that represents civic law (City Hall), Cooper forces the city to confront the reality of wrongful incarceration and the bias inherent in the justice system. The title \"Truth Seekers\" suggests that the \"truth\" of a Black man's life is often hidden behind the label of \"criminal.\"\n\nProtective Ancestry: The inclusion of the female figures adds a layer of spiritual activism, suggesting that Black survival is sustained not by the state, but by the community and the strength of Black women/mothers who bear the burden of this injustice.\n\n3. Influence and Existence: The original plywood mural was temporary and was eventually removed from Old City Hall. However, the artwork still exists as a permanent historical record. It was professionally digitized and acquired by the Indianapolis Public Library for their \"Murals for Racial Justice\" collection. High-quality vinyl reproductions of \"Truth Seekers\" circulate through public branches and exhibitions (like at the Central Library), ensuring that this specific moment of protest remains visible to future generations.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Mural / Mixed Media",
      "date": "2020",
      "location": "Indianapolis",
      "cause": "Racial Justice",
      "imageUrl": "/Images/Matthew Cooper_Truth Seekers.webp",
      "credit": "https://www.indystar.com/picture-gallery/news/2020/11/21/racial-justice-focus-art-display-indianapolis-central-library/6374181002/",
      "latitude": 39.7701985,
      "longitude": -86.1529514,
      "categories": [],
      "searchQuery": "Matthew Cooper Truth Seekers Indianapolis Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "37",
    "artist": {
      "name": "Amiah Mims",
      "isAlive": true,
      "bio": "Amiah Mims is a graphic designer, gymnast, and painter who is a member of The Eighteen Art Collective. Her work is characterized by clean lines, bold typography, and a strong sense of movement, likely influenced by her athletic background. She painted the \"B\" in the Black Lives Matter mural, creating a striking visual start to the installation.",
      "website": "worksbymimsy.com",
      "social_media": [
        "@worksbymimsy"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter A)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice / Resilience",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Amiah Mims Black Lives Matter Mural (Letter A) Indianapolis (Indiana Ave - Archived) Racial Justice / Resilience",
      "news_media_coverage": []
    }
  },
  {
    "id": "38",
    "artist": {
      "name": "Rebecca Robinson",
      "isAlive": true,
      "bio": "Rebecca Robinson is a mixed-media artist and member of The Eighteen Art Collective, known for her unique use of unconventional materials like concrete and tar on canvas. Her work often explores fashion, history, and texture, creating gritty yet elegant compositions. She painted the \"R\" in the Black Lives Matter mural.",
      "website": "psnob.com",
      "social_media": [
        "@psnob"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter L)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint / Concrete",
      "date": "",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Rebecca Robinson Black Lives Matter Mural (Letter L) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "39",
    "artist": {
      "name": "LaShawnda Crowe Storm",
      "isAlive": true,
      "bio": "LaShawnda Crowe Storm is a community-based artist and activist whose practice centers on social justice, healing, and history. She is best known for the \"Lynch Quilts Project,\" a textile-based initiative that examines the history of racial violence in America through the domestic medium of quilting. Her work is deeply collaborative, often involving community circles to create the art.",
      "website": "lashawndacrowestorm.com",
      "social_media": [
        "@lashawndacrowestorm"
      ]
    },
    "artwork": {
      "title": "Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson)",
      "description": "The Project: The Lynch Quilts Project (Specific Focus: Quilt I: Her Name Was Laura Nelson).\n1. Back Story and History: Started in 2002, The Lynch Quilts Project is a community-based art initiative that uses the soft, domestic medium of quilting to confront the brutal history of racial violence in America. The first completed work in this series is \"Her Name Was Laura Nelson.\" It centers on the horrific 1911 lynching of Laura Nelson and her son in Okemah, Oklahoma. The quilt features a central image based on the actual historical photograph of Nelson hanging from a bridge—an image that was once mass-produced as a postcard. Surrounding this central panel are squares of fabric stitched by volunteers from across the country. Crowe Storm chose quilting because it is traditionally associated with warmth, comfort, and \"women's work,\" creating a jarring, visceral contrast with the cold reality of the violence depicted.\n2. Art Activism: This work functions as restorative justice and historical memory activism.\n\nThe \"Sewing Circle\" as Protest: The activism lies in the process. By inviting strangers of all races to sit together and sew sections of the quilt, Crowe Storm creates a space for difficult, necessary conversations about race that might not happen otherwise. The needle and thread become tools for \"suturing\" a social wound.\n\nRefusing to Look Away: The quilt forces the viewer to confront the \"banality of evil.\" By presenting a lynching photo—often hidden in archives—as a carefully crafted art object, it demands that we acknowledge these victims not as statistics, but as human beings whose lives were stolen. It transforms a \"trophy\" of white supremacy (the postcard) into a memorial of Black dignity.\n\n3. Influence and Existence: This project is ongoing and active. Quilt I has been exhibited in museums and universities nationwide, serving as a catalyst for dialogue wherever it goes. The project has expanded into a larger series (including quilts dedicated to Mary Turner and others), involving hundreds of community participants over the last two decades. LaShawnda Crowe Storm continues to lead this work in Indianapolis, where it acts as a foundational pillar of the city's social practice art movement, proving that art can be a mechanism for communal healing.\n\nThe Project: The RECLAIM Project (Northwest Indianapolis).\n1. Back Story and History: Co-founded by Phyllis Boyd (a landscape architect and artist) and LaShawnda Crowe Storm, this initiative was born from a desire to transform \"blight into beauty\" in the Riverside and Northwest Indianapolis neighborhoods. Funded by a major ArtPlace America grant, the project focused on revitalizing vacant lots and dangerous alleyways that children used as routes to school. Instead of just cleaning them up, Boyd and her team turned these neglected spaces into \"art parks\" and community assets. A signature element of the project was the installation of \"Art Sheds\"—utility sheds painted with vibrant murals that served as functional hubs for urban farming and community gatherings.\n\n\n\n2. Art Activism: This project functions as restorative justice and design activism.\n\nEconomic & Social Restoration: The project explicitly hired formerly incarcerated residents to work on the landscaping and construction. By doing so, it used the act of \"reclaiming\" land as a parallel for \"reclaiming\" people, providing economic opportunity and dignity to neighbors who are often shut out of the workforce.\n\nSafety by Design: By clearing brush and adding art/beauty to dark alleys, the project used aesthetics to increase public safety, ensuring that children had safe, dignified paths to walk to school.\n\n3. Influence and Existence: The project’s philosophy was highly influential and helped propel Phyllis Boyd into her current role as the Director of Indy Parks. While the specific grant-funded phase of RECLAIM has concluded, its physical footprint—such as the Rader Street Art Sheds and various pocket parks—remains in the neighborhood. More importantly, the project serves as a case study in Indianapolis for how \"creative placemaking\" can solve hard infrastructure problems (like safety and blight) while simultaneously building community wealth.",
      "medium": "Quilting / Community Art",
      "date": "Ongoing (Since 2000s)",
      "location": "Indianapolis",
      "cause": "Racial Justice / History",
      "imageUrl": "/Images/LaShawndaCroweStorm_LedLynchQuiltingProj.jpg",
      "credit": "https://indynow2010ls.wixsite.com/website-5/our-story",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "LaShawnda Crowe Storm Led the The Lynch Quilts Project (Quilt I: Her Name Was Laura Nelson) Indianapolis Racial Justice / History",
      "news_media_coverage": []
    }
  },
  {
    "id": "40",
    "artist": {
      "name": "Anila Quayyum Agha",
      "isAlive": true,
      "bio": "Anila Quayyum Agha is a Pakistani-American cross-disciplinary artist known for her immersive light installations. Her most famous work, \"Intersections,\" involves a large, laser-cut cube suspended from the ceiling with a single light bulb inside, casting intricate Islamic geometric shadows across the entire room. Her work explores themes of exclusion, sacred space, and gender.",
      "website": "anilaagha.com",
      "social_media": [
        "@anila_quayyum_agha"
      ]
    },
    "artwork": {
      "title": "Intersections",
      "description": "The Artwork: \"Intersections\" (Laser-cut Steel/Wood & Light Installation).\n1. Back Story and History: This immersive installation was inspired by Agha’s 2011 visit to the Alhambra palace in Granada, Spain. Agha, who grew up in Lahore, Pakistan, was struck by how the Alhambra represented a historical moment where Islamic and Western discourses co-existed in harmony. The artwork itself is a 6.5-foot cube suspended from the ceiling, laser-cut with intricate patterns based on the Alhambra's architecture. A single light bulb hangs in the center, casting massive, lace-like shadows that cover the entire room—walls, floor, ceiling, and viewers—in a complex geometric web.\n\n2. Art Activism: This work functions as gender and religious inclusion activism.\nReclaiming Sacred Space: Growing up in Pakistan, Agha was socially and culturally excluded from mosques (where men gathered to pray and discuss community) solely because she was a woman. Women were expected to pray at home. \"Intersections\" is her act of resistance: she recreated the awe-inspiring beauty of a sacred Islamic space but removed the barriers.\n\nEquality in Light: The activism is also in the shadows. When viewers enter the room, the patterns cover everyone equally—regardless of race, gender, or religion. The art literally \"cloaks\" the audience in a shared experience, arguing that beauty and spirituality should be accessible to all, not gated by patriarchy.\n\n3. Influence and Existence: This piece is historically significant for launching Agha’s international career. In 2014, it made history at ArtPrize in Grand Rapids, Michigan, by becoming the first artwork ever to win both the Public Vote and the Juried Grand Prize in the same year. It has since been fabricated in durable steel (editions) and exhibited in major museums worldwide, including the Peabody Essex Museum and the Toledo Museum of Art. It remains one of the most celebrated examples of 21st-century installation art coming out of the Indiana art scene (as Agha taught at the Herron School of Art + Design).",
      "medium": "Laser-cut Steel / Light / Shadow",
      "date": "2014",
      "location": "Indianapolis / Global",
      "cause": "Gender & Cultural Intersectionality",
      "imageUrl": "/Images/Anila Quayyum Agha_Intersections.jpg",
      "credit": "https://www.anilaagha.com/intersections",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Anila Quayyum Agha Intersections Indianapolis / Global Gender & Cultural Intersectionality",
      "news_media_coverage": []
    }
  },
  {
    "id": "41",
    "artist": {
      "name": "Mari Evans",
      "isAlive": false,
      "bio": "Mari Evans (1919–2017) was a central figure of the Black Arts Movement, primarily known as a poet and writer rather than a visual artist. However, her influence on the Indianapolis visual scene is profound; her image is immortalized in several murals (including one on Mass Ave), and her poetry frequently accompanies visual art in the city. She represents the literary soul of Indianapolis's Black creative history.",
      "website": "marievans.org (Archived)",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "I Am A Black Woman",
      "description": "The Work: \"I Am A Black Woman\" (Poetry Collection, 1970 / Mural Representation).\n1. Back Story and History: Published in 1970, I Am A Black Woman is the defining collection of Mari Evans' career and a cornerstone of the Black Arts Movement. The title poem is an anthem that traces the lineage of Black womanhood through history—referencing the trauma of the slave trade (\"the music of my song / some sweet arpeggio of tears\") but concluding with unshakeable strength (\"Look on me and be renewed\"). While Evans was a writer, in Indianapolis her legacy has been cemented visually through the massive mural of her likeness painted by artist Michael Jordan (Alkemi) on Massachusetts Avenue. This mural was created while she was still alive, allowing her to see her own words and face looming large over the city's cultural district.\n\n2. Art Activism: This work functions as identity and intersectional activism.\n\nCentering the Black Woman: Writing at the height of the Black Power movement (which often centered men) and the Feminist movement (which often centered white women), Evans carved out a specific, radical space for the Black female experience. Her work asserts that the Black woman is not a victim, but the indestructible spine of history.\n\n\"Clarity as Power\": Evans famously stated, \"I am a Black woman... and I intend to be heard.\" Her activism was rooted in clarity—she believed art should be accessible to the people, not hidden behind academic language.\n\n3. Influence and Existence: The book is currently in existence and remains a classic of American literature. In Indianapolis, the mural on Mass Ave ensures her physical presence remains in the city. Furthermore, her influence is institutionalized: the Mari Evans Honors College at Marian University and the continued celebration of her work by local poets ensure that her demand to \"Look on me and be renewed\" is still being answered today.",
      "medium": "Poetry / Literature",
      "date": "1970",
      "location": "Indianapolis (Mural of her on Mass Ave)",
      "cause": "Civil Rights / Black Arts Movement",
      "imageUrl": "/Images/Mari Evans_I Am A Black Woman.jpg",
      "credit": "https://www.poemhunter.com/poem/i-am-a-black-woman/#google_vignette",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Mari Evans I Am A Black Woman Indianapolis (Mural of her on Mass Ave) Civil Rights / Black Arts Movement",
      "news_media_coverage": []
    }
  },
  {
    "id": "42",
    "artist": {
      "name": "Etheridge Knight",
      "isAlive": false,
      "bio": "Etheridge Knight (1931–1991) was another major poet of the Black Arts Movement who spent significant time in Indianapolis. Like Evans, he is a literary figure whose legacy permeates the local visual arts scene through tributes and the \"Butler-Tarkington\" neighborhood history. His raw poetry about prison and urban life continues to inspire visual narratives in the city.",
      "website": "poetryfoundation.org",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "Poems from Prison",
      "description": "The Work: \"Poems from Prison\" (Poetry Collection, Broadside Press, 1968).\n1. Back Story and History: This groundbreaking collection was written while Knight was an inmate at the Indiana State Prison in Michigan City, serving an eight-year sentence for armed robbery (a crime fueled by a narcotics addiction he developed after being wounded in the Korean War). While incarcerated, Knight began writing to maintain his sanity, eventually catching the attention of legendary poets Gwendolyn Brooks and Dudley Randall. Randall’s Broadside Press published the book in 1968, the same year Knight was released on parole. It contains some of the most essential poems in American literature, including \"The Idea of Ancestry,\" which depicts the agonizing connection between the prisoner and his family history, represented by 47 photos taped to his cell wall.\n\n2. Art Activism: This work functions as human rights and \"anti-erasure\" activism.\n\nHumanizing the Inmate: At a time when prisoners were often viewed solely as statistics or threats, Knight’s work demanded that the public see the incarcerated as complex, feeling human beings. He famously said, \"I died in 1960 from a prison sentence and poetry brought me back to life.\"\n\nThe \"Toast\" Tradition: Knight’s activism also involved elevating Black oral traditions. He mastered \"The Toast\"—long, rhythmic narrative poems recited in prisons and on street corners—and legitimized this street culture as high art, bridging the gap between the academy and the \"underground.\"\n\n3. Influence and Existence: The book is currently in existence and remains in print (often found within The Essential Etheridge Knight). It is widely considered the foundational text of the modern prison arts movement. Knight’s success paved the way for current organizations like the Free People’s Arts Workshop (which he founded) and inspired generations of justice-impacted writers, including Reginald Dwayne Betts and Terrance Hayes. It remains a staple curriculum in literature classes, specifically for its raw, unpolished, and truthful voice.",
      "medium": "Poetry",
      "date": "1968",
      "location": "Indianapolis (Buried in Crown Hill)",
      "cause": "Prison Reform / Black Arts Movement",
      "imageUrl": "/Images/Etheridge Knight.jpg",
      "credit": "https://www.poetryfoundation.org/poets/etheridge-knight",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Etheridge Knight Poems from Prison Indianapolis (Buried in Crown Hill) Prison Reform / Black Arts Movement",
      "news_media_coverage": []
    }
  },
  {
    "id": "43",
    "artist": {
      "name": "Teresa Dunn",
      "isAlive": true,
      "bio": "Teresa Dunn is a Mexican-American painter whose work explores racial and cultural identity, often through the lens of her own biography. She creates narrative paintings that can be surreal or theatrical, using color to express emotional and psychological states. Her work often addresses the feeling of being \"in-between\" cultures.",
      "website": "",
      "social_media": [
        "N/A"
      ]
    },
    "artwork": {
      "title": "US",
      "description": "The Artwork: \"US\" (Painting Series).\n1. Back Story and History: This ongoing series of large-scale oil paintings explores the complex reality of being a Mexican-American woman raised in the rural Midwest. The title \"US\" is a deliberate double entendre, referring simultaneously to the United States (the setting) and \"Us\" (the people who live there). Dunn creates theatrical, surreal narratives filled with recurring characters who navigate strange, often tense environments—picnics, forests, or parties that feel slightly \"off.\" These scenes are semi-autobiographical, reflecting her own upbringing in a small town where her brown skin made her hyper-visible yet culturally invisible.\n\n2. Art Activism: This work functions as cultural visibility and anti-stereotyping activism.\n\nChallenging the Heartland: Dunn challenges the visual myth that the American Midwest is a strictly white space. By inserting brown bodies into the \"classic\" American landscape, she asserts that they belong there, disrupting the viewer's assumptions about who is \"foreign\" and who is \"native.\"\n\nThe \"In-Between\": Her activism explores the psychological state of being \"neither/nor\"—not \"Mexican enough\" for some, and not \"American enough\" for others. The paintings validate the anxiety, absurdity, and beauty of living in that racial gray area, fighting against the pressure to simplify or assimilate one’s identity.\n\n3. Influence and Existence: The series is currently in existence and continues to evolve. Dunn is an active Professor of Art at Michigan State University (formerly at the University of Indianapolis), and this body of work has been exhibited nationally, including at the First Street Gallery in New York and the Zanesville Museum of Art. Her work has received support from the Puffin Foundation (which specifically funds activist art), recognizing \"US\" as a vital contribution to the conversation about race and belonging in contemporary America.",
      "medium": "Mixed Media",
      "date": "Contemporary",
      "location": "Indianapolis",
      "cause": "Community Arts",
      "imageUrl": "/Images/Teresa Dunn.jpg",
      "credit": "https://teresa-dunn.com/about",
      "latitude": 39.7782094,
      "longitude": -86.184366,
      "categories": [],
      "searchQuery": "Teresa Dunn US Indianapolis Community Arts",
      "news_media_coverage": []
    }
  },
  {
    "id": "44",
    "artist": {
      "name": "Boxx the Artist",
      "isAlive": true,
      "bio": "Boxx the Artist is a visual artist and muralist known for her bold, graphic style and use of vivid colors. Her work often centers on empowering representations of Black women and culture, utilizing clean lines and flat fields of color. She is active in the local street art scene and frequently collaborates on community projects.",
      "website": "ganggangculture.com/artists/bbox",
      "social_media": [
        "@boxxtheartist"
      ]
    },
    "artwork": {
      "title": "The Women In Between",
      "description": "The Project: \"The Women In Between\" (Mixed Media Portrait Series).\n1. Back Story and History: This major body of work was born from Boxx’s research into the history of photography and printmaking—specifically the racial bias of \"Shirley Cards.\" For decades, color film and printing machines were calibrated using a reference card featuring a white woman (Shirley), meaning the technology literally was not designed to capture the nuance of dark skin, often rendering it muddy or underexposed. For this project, Boxx photographs dark-skinned Black women who are local Indianapolis community leaders (\"trailblazers\" often working behind the scenes). She prints their images on canvas, intentionally exposing the limitations of the machine, and then hand-paints over the print with acrylics. This manual application of paint restores the \"lost\" details, richness, and humanity that the technology erased.\n\n2. Art Activism: This work functions as technological and colorist activism.\n\nCorrecting History: Boxx is physically intervening to fix a systemic failure in art technology. She asserts that if the machine cannot see Black women correctly, the artist must step in to ensure they are seen fully and beautifully.\n\nThe \"In-Between\": The title refers to the social position of these women—often functioning as the glue \"in between\" broken systems, holding communities together without recognition. The work moves them from the background to the foreground, demanding they be viewed with reverence.\n\n3. Influence and Existence: This is a current and active project. It was awarded a prestigious Power Plant Grant and has been exhibited in prominent Indianapolis venues throughout 2024 and 2025, including Gallery 924, the Athenaeum, and the Harrison Center. The project has expanded beyond just paintings to include film and recorded oral histories of the subjects, creating a lasting archive of Black female leadership in the city.",
      "medium": "Multimedia / Portraiture",
      "date": "2025",
      "location": "Indianapolis (Harrison Center)",
      "cause": "Black Women's Stories",
      "imageUrl": "/Images/Boxx the Artist.jpg",
      "credit": "https://www.indystar.com/story/entertainment/arts/2024/02/02/art-and-soul-indianapolis-boxx-the-artist-has-built-a-business-with-talent-and-entrepreneurship/72370950007/?gnt-cfr=1&gca-cat=p&gca-uir=true&gca-epti=z115450d00----v115450d--61--b--61--&gca-ft=47&gca-ds=sophi",
      "latitude": 39.7876304,
      "longitude": -86.1536785,
      "categories": [],
      "searchQuery": "Boxx the Artist The Women In Between Indianapolis (Harrison Center) Black Women's Stories",
      "news_media_coverage": []
    }
  },
  {
    "id": "45",
    "artist": {
      "name": "Shamira Wilson",
      "isAlive": true,
      "bio": "Shamira Wilson is an interdisciplinary visual artist and member of The Eighteen Art Collective. Her work often features botanical motifs, geometric patterns, and repeating shapes to explore the relationship between humans and the environment. She painted the \"E\" in the Black Lives Matter mural and is known for her clean, eco-conscious aesthetic.",
      "website": "shamirawilson.com",
      "social_media": [
        "@shamirawilson"
      ]
    },
    "artwork": {
      "title": "Ethnobotany Series",
      "description": "The Project: Ethnobotany Series / Where Land Becomes Language (Ongoing).\n1. Back Story and History: Shamira Wilson describes herself not just as a painter, but as an ethnobotanist—someone who studies the relationship between people and plants. This series is an ongoing body of research and visual art centered primarily on Okra (and other African diasporic plants). Wilson actually grows these plants herself in a research plot (her \"Ethnobotany Lab\"), treating the garden as a living archive. She doesn't just paint pictures of the plants; she collaborates with them. She harvests the okra to create handmade paper and fibers from the stalks, and pigments/dyes from the blooms and leaves. The resulting artwork—which often features geometric, repeating leaf patterns—is literally made of the subject it depicts.\n\n2. Art Activism: This work functions as food justice and ancestral reclamation activism.\n\nDecolonizing the Diet: By focusing on Okra, Wilson highlights a crop that traveled with enslaved Africans to the Americas, framing it as a symbol of resilience and survival rather than just a \"southern side dish.\"\n\nCircularity: Her process is a form of environmental activism called \"circularity.\" She demonstrates how a single plant can provide food, clothing (fiber), and culture (art) without creating waste.\n\nHealing the Land: Her work argues that the land is not a \"blank slate\" for developers, but a \"library\" of wisdom. By growing these plants in urban spaces, she reclaims the soil for Black history and community nourishment.\n\n3. Influence and Existence: This is a highly active and evolving project. Wilson continues to grow her \"living archive\" every season. The visual results of this research have been exhibited at major institutions like Newfields (Indianapolis Museum of Art), the Indiana State Museum, and the Harrison Center. She also translates this work into public installations, such as her \"Seed Swap\" interactive exhibits, which encourage community members to trade seeds and knowledge, ensuring the \"activism\" continues in the gardens of others.",
      "medium": "",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Environmental Justice",
      "imageUrl": "/Images/Shamira Wilson_ Ethnobotany Series.jpg",
      "credit": "https://shamirawilson.com/about",
      "latitude": 39.7782094,
      "longitude": -86.184366,
      "categories": [],
      "searchQuery": "Shamira Wilson Ethnobotany Series Indianapolis Environmental Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "46",
    "artist": {
      "name": "Brose Partington",
      "isAlive": true,
      "bio": "Brose Partington is a sculptor known for his kinetic works that incorporate movement, video, and mechanical systems. He often builds machines that track the viewer or interact with the environment, exploring themes of surveillance and technology. His work is industrial and precise, often utilizing steel, motors, and custom electronics.",
      "website": "brosepartington.com",
      "social_media": [
        "@brosepartington"
      ]
    },
    "artwork": {
      "title": "Harvesting Knowledge",
      "description": "The Artwork: \"Harvesting Knowledge\" (Kinetic Sculpture / The Public Collection).\n1. Back Story and History: Commissioned in 2015 for The Public Collection, this piece was a site-specific installation located at the Indianapolis City Market. Partington, a sculptor known for kinetic (moving) art, designed this \"Little Free Library\" to look and function like a piece of vintage agricultural machinery. Drawing a parallel between the City Market (where people go to buy food) and the library (where people go to find information), he built a metal contraption with a hand-cranked wheel. When users turned the wheel, a conveyor belt mechanism would \"scoop\" books up from the base and cycle them to eye level, allowing the viewer to physically \"harvest\" a book just as a farmer harvests crops.\n\n2. Art Activism: This work functions as literacy and labor activism.\n\nFeeding the Mind: The sculpture makes a direct argument that knowledge is essential nourishment. By placing books in the same context as vegetables and meat (the City Market), Partington asserts that literacy is as vital to survival as food.\n\nDemocratizing Access: Like all pieces in The Public Collection, it provided free access to books in a high-traffic public space, removing economic barriers to reading.\n\nCelebrating Industry: The design also pays homage to the \"labor\" of learning and the history of the printing press (specifically the Linotype machine), reminding users that mass communication is an industrial feat that should be celebrated.\n\n3. Influence and Existence: While many pieces of The Public Collection are permanent, this specific installation had a scheduled run from 2015 to 2019 at the City Market. During its existence, it was one of the most popular and interactive works in the series, frequently used by families attending the Wednesday Farmer's Market. Although it is no longer on public view at that location, it solidified Partington's reputation as a master of \"interactive infrastructure\" and set a high standard for how functional public art can be playful rather than static.",
      "medium": "Kinetic Sculpture",
      "date": "2004",
      "location": "Indianapolis (IUPUI Campus)",
      "cause": "Man vs. Nature / Motion",
      "imageUrl": "/Images/Brose Partington_Harvesting Knowledge.jpg",
      "credit": "https://www.thepubliccollection.org/artists/brose-partington/",
      "latitude": 39.7688062,
      "longitude": -86.1534508,
      "categories": [],
      "searchQuery": "Brose Partington Harvesting Knowledge Indianapolis (IUPUI Campus) Man vs. Nature / Motion",
      "news_media_coverage": []
    }
  },
  {
    "id": "47",
    "artist": {
      "name": "Tiffany Black",
      "isAlive": true,
      "bio": "Tiffany Black is a painter and muralist who specializes in community-based public art. She often works with neighborhood groups to design and execute murals that reflect local history and identity. Her style is generally realistic and narrative, aimed at storytelling and community building.",
      "website": "tblack.co",
      "social_media": [
        "@tiffanyblackart"
      ]
    },
    "artwork": {
      "title": "August 15 (Mural)",
      "description": "The Artwork: \"August 15\" (Traveling Mural Exhibition).\n1. Back Story and History: This powerful 20-foot mural was created in late 2021 at Camp Atterbury, Indiana, shortly after the U.S. withdrawal from Afghanistan. On August 15, 2021, the government of Afghanistan fell to the Taliban, forcing thousands to flee. Many of these evacuees were housed temporarily at Camp Atterbury as they awaited resettlement. Tiffany Black, serving as a lead artist, collaborated directly with 59 Afghan evacuees—including artists Zainab Ahmadi and Fawzia Abdaly—to create this piece. The mural serves as a \"visual diary\" of that traumatic transition, featuring seven circles that radiate from a central date (\"August 15\") to tell the story of the lives, hopes, and culture that were forever changed on that day.\n\n2. Art Activism: This work functions as humanitarian and narrative activism.\n\nHealing Through Art: For the refugees involved, the act of painting was a form of trauma therapy, providing a safe space to process their displacement and grief while living in a military camp.\n\nGiving Voice: The activism lies in its refusal to let the evacuees be nameless statistics. It allows them to tell their own story to their new American neighbors, countering xenophobia by showcasing the beauty and resilience of Afghan culture.\n\nOngoing Support: The project is also a fundraiser; prints and exhibitions of the mural raise money for Open Hands for Children, an organization delivering food and necessities to children still living under Taliban rule in Afghanistan.\n\n3. Influence and Existence: The mural is currently in existence and operates as a traveling exhibition. Since leaving Camp Atterbury, it has toured various locations across North America (including universities and libraries) to keep the conversation about the Afghan refugee crisis alive. It stands as a rare, tangible artifact of the historic \"Operation Allies Welcome\" mission in Indiana, bridging the gap between local Hoosier history and global geopolitics.",
      "medium": "Mural / Terrazzo",
      "date": "2021",
      "location": "Franklin / Camp Atterbury",
      "cause": "Refugee Support / Social Justice",
      "imageUrl": "/Images/Tiffany Black_August 15 (Mural).jpg",
      "credit": "https://www.tblack.co/august15",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Tiffany Black August 15 (Mural) Franklin / Camp Atterbury Refugee Support / Social Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "48",
    "artist": {
      "name": "Artur Silva/ Kyle Long",
      "isAlive": true,
      "bio": "Artur Silva is a Brazil-native visual artist, and Kyle Long is a DJ and music journalist; together (often under the banner of \"Cultural Cannibals\"), they explore the intersection of visual art and global music. Silva creates video installations and mixed media works, while Long curates the sonic landscape, both focusing on cross-cultural exchange and the diaspora experience in Indianapolis.",
      "website": "artursilva.com",
      "social_media": [
        "@artur_silva"
      ]
    },
    "artwork": {
      "title": "Cultural Cannibal",
      "description": "The Project: Cultural Cannibals (Collaborative Art & Music Platform).\n1. Back Story and History: Founded in 2010, Cultural Cannibals is a creative partnership between Brazilian-born visual artist Artur Silva and Indianapolis music journalist/DJ Kyle Long. The name is a reference to the Brazilian Manifesto Antropófago (Anthropophagic Manifesto) of 1928, which argued that artists should \"cannibalize\" or consume other cultures to create something entirely new and distinct. The project combines Silva’s vibrant, motion-based visual projections and design with Long’s deep archival research into global music. They began by hosting high-energy events (often at The Jazz Kitchen or local galleries) that blended Brazilian sambas, Afro-beat, and psychedelic cumbia with immersive video art, effectively turning a dance party into a history lesson.\n\n2. Art Activism: This project functions as cultural bridging and decolonization activism.\n\nChallenging the Narrative: The duo actively fights against the idea that Indianapolis is a monoculture. Through their events and Long’s spinoff radio show Cultural Manifesto, they highlight the often-ignored history of immigrant and Black musicians in Indiana (such as the Latin jazz history on Indiana Avenue).\n\nThe \"Cannibal\" Philosophy: Their activism suggests that culture is not static or \"pure\"; it is meant to be shared, mixed, and consumed. By placing Iranian rock or Peruvian chicha music in the center of the Hoosier capital, they de-center the Western/American pop canon and validate the diverse communities already living in the Midwest.\n\n3. Influence and Existence: The project is very much in existence and has become an institution in the city. Kyle Long’s work has expanded into the weekly WFYI radio show \"Cultural Manifesto\" (and the sister show \"Echoes of Indiana Avenue\"), which is arguably the most significant archive of local music history currently being produced. Artur Silva continues to exhibit solo work (including major pieces at the Indianapolis International Airport and Newfields) while collaborating with Long for special events. Their influence has fundamentally changed how Indianapolis archives and celebrates its own diverse musical history.",
      "medium": "",
      "date": "2022",
      "location": "Indianapolis (Gainbridge Fieldhouse)",
      "cause": "Cultural Critique / History",
      "credit": "https://culturalcannibals.wordpress.com/about/",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Artur Silva/ Kyle Long Cultural Cannibal Indianapolis (Gainbridge Fieldhouse) Cultural Critique / History",
      "news_media_coverage": []
    }
  },
  {
    "id": "49",
    "artist": {
      "name": "Mary Miss",
      "isAlive": true,
      "bio": "Mary Miss is a renowned environmental artist who focuses on \"City as Living Lab.\" In Indianapolis, she is known for the \"Flow: Can You See the River?\" project, which used mirrors and markers to connect citizens with the White River water system. Her work is not about creating objects, but about revealing the invisible infrastructure and ecology of a place.",
      "website": "",
      "social_media": [
        "@cityaslivinglab"
      ]
    },
    "artwork": {
      "title": "FLOW: Can You See the River?",
      "description": "The Artwork: Flow: Can You See the River? Back Story & Activism: This was a city-wide installation that used mirrors and red markers to show people where the White River was, even when they couldn't see it. Her activism is environmental awareness: you cannot care for a resource (the river) if you don't even know it's there. She connected the city's water system to the daily path of pedestrians. Influence & Existence: The project was temporary (2011), but it fundamentally changed how Indianapolis plans its riverfront development, influencing current projects like the DigIndy tunnel and new parks.",
      "medium": "Mirrors / Markers",
      "date": "2011",
      "location": "Indianapolis (White River)",
      "cause": "Environmental Awareness (Water)",
      "imageUrl": "/Images/Mary Miss_FLOW.jpg",
      "credit": "https://www.cityaslivinglab.org/flow",
      "latitude": 39.8289671,
      "longitude": -86.1906411,
      "categories": [],
      "searchQuery": "Mary Miss FLOW: Can You See the River? Indianapolis (White River) Environmental Awareness (Water)",
      "news_media_coverage": []
    }
  },
  {
    "id": "50",
    "artist": {
      "name": "Shawn Michael Warren",
      "isAlive": true,
      "bio": "Shawn Michael Warren is a realist painter known for his incredibly detailed and epic narrative paintings. He gained national attention for his mural of Oprah Winfrey in Chicago, but he has deep ties to the Midwest/Indiana area. His work focuses on bringing underrepresented historical narratives to life with the scale and technique of classical history painting.",
      "website": "shawnmichaelwarren.com",
      "social_media": [
        "@shawnmichaelwarren"
      ]
    },
    "artwork": {
      "title": "The World's Fastest",
      "description": "The Artwork: \"The World's Fastest\" (Major Taylor Mural).\n1. Back Story and History: Completed in 2021 as part of the Indianapolis \"Bicentennial Legends\" series, this colossal five-story mural is located on the east side of the Barnes & Thornburg building (Washington and Meridian Streets). It honors Marshall \"Major\" Taylor, an Indianapolis native who became the first African American world champion in cycling (and only the second Black world champion in any sport) in 1899. The location is deeply significant; it stands just blocks away from the bicycle shop where a 12-year-old Taylor once performed stunts in a military uniform to attract customers, earning him the nickname \"Major.\" Warren painted Taylor in three phases of his life—youthful ambition, hardened determination, and athletic dominance—using a monochromatic palette that gives the mural a timeless, historical weight.\n\n2. Art Activism: This work functions as historical reclamation and apology.\n\nConfronting Erasure: Despite being a global superstar in the 1890s, Taylor was largely erased from Indianapolis history because he was effectively forced to leave the city. Local track owners banned him from racing due to his race, and white competitors frequently threatened his life.\n\nVisual Justice: Warren’s mural acts as a form of restorative justice. It forces the city to look up to the man it once shunned. By placing a 60-foot image of Taylor in the absolute center of downtown (overlooking the very streets where he was treated as a second-class citizen), the artwork demands that his legacy be recognized as central to the city's identity.\n\n3. Influence and Existence: The mural is permanently in existence and has quickly become one of the most recognizable landmarks in downtown Indianapolis. It anchored a city-wide rediscovery of Taylor's legacy, coinciding with new books, documentaries, and the naming of the \"Major Taylor Velodrome.\" It stands as the visual centerpiece of Indianapolis's effort to rebrand itself as a city that honors its Black history rather than hiding it.",
      "medium": "Oil / Mural",
      "date": "2020s",
      "location": "Indianapolis (Work often travels)",
      "cause": "Racial Justice / History",
      "imageUrl": "/Images/Shawn Michael Warren_The Words Fastest.jpg",
      "credit": "https://www.shawnmichaelwarren.com/murals",
      "latitude": 39.7666324,
      "longitude": -86.1577314,
      "categories": [],
      "searchQuery": "Shawn Michael Warren The World's Fastest Indianapolis (Work often travels) Racial Justice / History",
      "news_media_coverage": []
    }
  },
  {
    "id": "51",
    "artist": {
      "name": "Pamela Bliss",
      "isAlive": true,
      "bio": "Pamela Bliss is one of the most visible muralists in Indianapolis, responsible for the massive \"Reggie Miller\" mural and the \"Kurt Vonnegut\" mural on Mass Ave. Her style is characterized by \"trompe l'oeil\" (trick of the eye) realism, making flat walls appear to have depth and three-dimensionality. She specializes in towering portraits of local legends.",
      "website": "pamelabliss.gallery",
      "social_media": [
        "FB: Pamela Bliss"
      ]
    },
    "artwork": {
      "title": "Eva Kor Mural",
      "description": "The Artwork: \"Eva Kor\" (Mural, 53 feet tall).\n1. Back Story and History: Painted in late 2020, shortly after Eva Kor passed away, this massive mural is located on the side of the 500 Festival Building (21 Virginia Avenue) in downtown Indianapolis. Kor was a Holocaust survivor who, along with her twin sister Miriam, survived the deadly genetic experiments of Dr. Josef Mengele at Auschwitz. After settling in Terre Haute, Indiana, she became a global figure. Bliss’s mural depicts Kor in her later years, smiling warmly and flashing her signature peace sign—a pose she famously struck even when standing in the snow at Auschwitz during her educational trips. It captures her \"larger than life\" spirit (she was only 4'9\" in reality) on a monumental scale.\n\n2. Art Activism: This work functions as radical forgiveness and anti-hate activism.\n\nThe Power of Forgiveness: The mural is not a somber memorial of death, but an active declaration of Kor's controversial and powerful philosophy: that forgiving one's tormentors is an act of self-healing and empowerment, not an excuse for the perpetrator.\n\nHolocaust Education: By placing a Holocaust survivor on a massive wall in the center of the city, the mural acts as a permanent educational tool against anti-Semitism and hatred, reminding the public that these atrocities happened within living memory and that the choice to heal is always available.\n\n3. Influence and Existence: The mural is currently in existence and has become a major landmark along the Indianapolis Cultural Trail. It serves as a visual anchor for the city's commitment to human rights and complements the work of the CANDLES Holocaust Museum (founded by Kor). It remains one of the most photographed and emotionally resonant pieces of public art in the state.",
      "medium": "Mural",
      "date": "2018",
      "location": "Indianapolis (Downtown)",
      "cause": "Civic Pride / History",
      "imageUrl": "/Images/PamelaBliss_EvaKorMural.webp",
      "credit": "https://www.indystar.com/story/news/local/indianapolis/2020/10/12/larger-than-life-mural-holocaust-survivor-eva-kor-coming-downtown/5936019002/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Pamela Bliss Eva Kor Mural Indianapolis (Downtown) Civic Pride / History",
      "news_media_coverage": []
    }
  },
  {
    "id": "52",
    "artist": {
      "name": "D. Del Reverda-Jennings",
      "isAlive": true,
      "bio": "D. Del Reverda-Jennings is a self-taught sculptor and painter whose work is deeply rooted in African symbolism and spiritual themes. She often creates totemic sculptures and assemblages using found objects, celebrating the divine feminine and ancestral connections. She is also a curator and advocate for Black artists in Indiana.",
      "website": "indyarts.org/artist/d-del-reverda-jennings",
      "social_media": [
        "@ddelreverdajennings"
      ]
    },
    "artwork": {
      "title": "FLAVA FRESH",
      "description": "The Project: FLAVA FRESH ! (Annual Juried Exhibition Series).\n1. Back Story and History: Founded by D. Del Reverda-Jennings in the late 1990s (originally under the name \"Celebration of Spirit\"), FLAVA FRESH ! was born out of frustration and necessity. At the time, Indianapolis galleries were largely closed off to artists of color, often dismissing their work as \"too ethnic,\" \"primitive,\" or not commercially viable. Refusing to accept this exclusion, Reverda-Jennings created her own platform: an annual, multi-venue exhibition series designed to showcase contemporary art by underrepresented artists. It is not just a single art show, but a traveling series that moves through libraries, cultural centers, and galleries (like the Indianapolis Art Center and SullivanMunce) over the course of several months, ensuring the work is seen by diverse audiences across the city.\n\n2. Art Activism: This project functions as institutional critique and economic activism.\n\nBreaking Gatekeeping: The series acts as a \"boot camp\" for emerging artists. Reverda-Jennings doesn't just hang their art; she mentors them on professional standards—teaching them how to frame, price, and market their work to serious collectors. This is activism that builds equity, giving Black and Brown artists the business tools to survive in a white-dominated art market.\n\nSpace Reclamation: By forcefully inserting diverse narratives into public spaces (like the College Avenue Library or suburban art centers), the project normalizes the presence of Black art in the daily life of the city, challenging the idea that \"fine art\" looks a certain way.\n\n3. Influence and Existence: The project is very much in existence today; it is currently in its 20th+ year (with FLAVA FRESH 22 actively planning for the 2025–2026 season). Its impact on the Indianapolis art scene is immeasurable—it served as the launching pad for many of the city's now-famous artists (including members of The Eighteen Art Collective like Kevin West and Gary Gee) who credit Reverda-Jennings with giving them their first professional opportunities. In recognition of this decades-long advocacy, D. Del Reverda-Jennings was awarded the prestigious Indiana Governor's Arts Award in 2023.",
      "medium": "Sculpture / Curation",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Underrepresented Artists",
      "imageUrl": "/Images/D. Del Reverda-Jennings’_FlavaFresh.jpg",
      "credit": "https://artsmidwest.org/stories/indiana-artist-champions-spaces-for-underrepresented-creatives/",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "D. Del Reverda-Jennings FLAVA FRESH Indianapolis Underrepresented Artists",
      "news_media_coverage": []
    }
  },
  {
    "id": "53",
    "artist": {
      "name": "Lobyn Hamilton (Walter “Lobyn” Hamilton)",
      "isAlive": true,
      "bio": "Walter \"Lobyn\" Hamilton is an artist who creates portraits using smashed and cut vinyl records. He arranges the jagged shards of vinyl to form the faces of musical icons, effectively using the medium of music to depict its creators. His work is textured, dynamic, and directly connects the subject matter to the material.",
      "website": "lobynhamilton.com",
      "social_media": [
        "@lobynhamilton"
      ]
    },
    "artwork": {
      "title": "What I Have Is What You Have",
      "description": "The Artwork: \"What I Have You Have\" (Series of Vinyl \"Flags\").\n1. Back Story and History: Premiering as a solo exhibition at Newfields (Indianapolis Museum of Art) in August 2023, this body of work marked a massive evolution for Hamilton. Known for his smaller portraits of musicians, he scaled up to create six monumental \"flags\"—some spanning over 15 feet wide. These were not made of fabric, but constructed entirely from thousands of deconstructed vinyl records, album spines, and turntables mounted on wood. The series serves as a \"visual memoir\" of Hamilton's life growing up in Indianapolis (specifically the Brookside neighborhood), with each flag representing a different genre of music that influenced him, from Hip-Hop and Rock to Classical and Gospel.\n\n\n\n\n2. Art Activism: This work functions as cultural identity and \"Creative Care\" activism.\n\nRedefining Patriotism: By using the structure of a flag but replacing the stars and stripes with Black musical history (e.g., One Nation Under a Groove), Hamilton challenges the viewer to reconsider what \"America\" is made of. He asserts that culture and music are the true fabric of the nation.\n\nThe \"No Phone\" Policy: As a form of mental health activism, Hamilton explicitly requested that the gallery be a \"no phone zone,\" forcing visitors to disconnect from the digital economy and engage in a rare moment of meditative, analog presence.\n\nB-SIDE Connection: The philosophy behind this show ties directly to his B-SIDE Creative Campus, a real-world project where he buys property to provide affordable housing and studios for other artists, practicing \"creative care\" rather than just making objects.\n\n3. Influence and Existence: The exhibition at Newfields concluded in May 2024, but the impact was historic as it placed a local, self-taught Black artist in the museum's most prestigious galleries. The \"flags\" themselves are currently part of Hamilton's collection and are often loaned for major exhibitions. The B-SIDE Creative Campus (the physical manifestation of his activism) is actively in existence today in the Brookside neighborhood, continuing to house and support Indianapolis artists.",
      "medium": "Assemblage / Collage",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Music History / Culture",
      "credit": "https://www.instagram.com/p/C7E8rv4OuhR/",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Lobyn Hamilton (Walter “Lobyn” Hamilton) What I Have Is What You Have Indianapolis Music History / Culture",
      "news_media_coverage": []
    }
  },
  {
    "id": "54",
    "artist": {
      "name": "Kyng Rhodes (Nathaniel Rhodes)",
      "isAlive": true,
      "bio": "Nathaniel \"Kyng\" Rhodes is one of the youngest members of The Eighteen Art Collective. He is a painter whose work often deals with contemporary social issues and the Black experience from a youth perspective. He painted the \"C\" in the Black Lives Matter mural, bringing a fresh, next-generation voice to the group.",
      "website": "kyngrhodes.com",
      "social_media": [
        "@kyngrhodes"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter B)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave - Archived)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Kyng Rhodes (Nathaniel Rhodes) Black Lives Matter Mural (Letter B) Indianapolis (Indiana Ave - Archived) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "55",
    "artist": {
      "name": "Phyllis Boyd",
      "isAlive": true,
      "bio": "Phyllis Boyd is a landscape architect and artist, currently the Director of Indy Parks. Her artistic practice is deeply intertwined with her work in urban planning and \"Groundwork Indy,\" focusing on how communities interact with nature and public space. Her creative output is often functional or environmental, aimed at improving the quality of life in urban neighborhoods.",
      "website": "ganggangculture.com/artists/phyllis-viola-boyd",
      "social_media": [
        "@phyllisviolaboyd"
      ]
    },
    "artwork": {
      "title": "RECLAIM Project",
      "description": "Phyllis Boyd (with LaShawnda Crowe Storm)\nThe Project: The RECLAIM Project (Northwest Indianapolis).\n1. Back Story and History: Co-founded by Phyllis Boyd (a landscape architect and artist) and LaShawnda Crowe Storm, this initiative was born from a desire to transform \"blight into beauty\" in the Riverside and Northwest Indianapolis neighborhoods. Funded by a major ArtPlace America grant, the project focused on revitalizing vacant lots and dangerous alleyways that children used as routes to school. Instead of just cleaning them up, Boyd and her team turned these neglected spaces into \"art parks\" and community assets. A signature element of the project was the installation of \"Art Sheds\"—utility sheds painted with vibrant murals that served as functional hubs for urban farming and community gatherings.\n\n2. Art Activism: This project functions as restorative justice and design activism.\nEconomic & Social Restoration: The project explicitly hired formerly incarcerated residents to work on the landscaping and construction. By doing so, it used the act of \"reclaiming\" land as a parallel for \"reclaiming\" people, providing economic opportunity and dignity to neighbors who are often shut out of the workforce.\n\nSafety by Design: By clearing brush and adding art/beauty to dark alleys, the project used aesthetics to increase public safety, ensuring that children had safe, dignified paths to walk to school.\n\n3. Influence and Existence: The project’s philosophy was highly influential and helped propel Phyllis Boyd into her current role as the Director of Indy Parks. While the specific grant-funded phase of RECLAIM has concluded, its physical footprint—such as the Rader Street Art Sheds and various pocket parks—remains in the neighborhood. More importantly, the project serves as a case study in Indianapolis for how \"creative placemaking\" can solve hard infrastructure problems (like safety and blight) while simultaneously building community wealth.",
      "medium": "Landscape Arch. / Social Practice",
      "date": "Ongoing",
      "location": "Indianapolis (Riverside / various parks)",
      "cause": "Environmental Justice / Urban Renewal",
      "credit": "https://indynow2010ls.wixsite.com/website-5/projects",
      "categories": [],
      "searchQuery": "Phyllis Boyd RECLAIM Project Indianapolis (Riverside / various parks) Environmental Justice / Urban Renewal",
      "news_media_coverage": []
    }
  },
  {
    "id": "56",
    "artist": {
      "name": "Kevin Wilson",
      "isAlive": true,
      "bio": "Kevin Wilson (distinct from the other Kevin West) is a painter and member of The Eighteen Art Collective. His work often involves realistic portraiture and scenes of daily life, rendered with a focus on light and shadow. He contributed to the collective mural, helping to solidify the visual message of the group.",
      "website": "saatchiart.com/kevinjameswilson",
      "social_media": [
        "Kevin James Wilson"
      ]
    },
    "artwork": {
      "title": "Kings of the Castle",
      "description": "The Artwork: \"Kings of the Castle\" (Oil on Canvas).\n1. Back Story and History: This painting was a featured highlight in the \"We. The Culture\" exhibition at Newfields (Indianapolis Museum of Art). Kevin Wilson, a master of realistic portraiture, created this piece to capture a distinctively American and specifically Black experience: \"porch culture.\" The painting depicts three young Black men sitting comfortably on the concrete steps of a front porch. They are not posing for a formal portrait but are simply being—relaxed, confident, and at home. The title transforms the humble concrete stoop into a \"castle,\" elevating the subjects from everyday neighborhood youth to royalty surveying their domain.\n\n2. Art Activism: This work functions as narrative shift activism.\n\nReframing \"Loitering\": In many societal narratives, a group of young Black men sitting outside is often unfairly policed or viewed as a threat (loitering). Wilson’s painting radically rejects that gaze. By titling them \"Kings,\" he asserts their right to occupy space, to rest, and to be safe in their own neighborhood without suspicion.\n\nThe Sanctuary of Home: The porch has historically been a safe haven and social hub in the Black community. This piece advocates for the sanctity of that space, presenting the Black home not as a place of poverty or struggle, but as a site of dignity and brotherhood.\n\n3. Influence and Existence: The artwork is currently in existence and remains a key piece in Kevin Wilson’s portfolio. Its inclusion in the Newfields exhibition was significant because it brought the \"front porch\"—a space often excluded from the high-art canon—into the museum gallery. It stands as a permanent visual argument that Black leisure is just as worthy of oil paint and museum walls as European aristocracy.",
      "medium": "Mural / Illustration",
      "date": "2021",
      "location": "Indianapolis (Airport / Downtown)",
      "cause": "Black History / Sports Legacy",
      "imageUrl": "/Images/KevinWilson_Kings of the Castle.jpg",
      "credit": "https://www.blackartinamerica.com/products/wilson-kevin-the-kings-of-the-castle",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Kevin Wilson Kings of the Castle Indianapolis (Airport / Downtown) Black History / Sports Legacy",
      "news_media_coverage": []
    }
  },
  {
    "id": "57",
    "artist": {
      "name": "Rae Parker",
      "isAlive": true,
      "bio": "Rae Parker is an illustrator, muralist, and member of The Eighteen Art Collective. Her work is often illustrative and narrative, advocating for LGBTQ+ representation and women's rights. She painted the \"T\" in the Black Lives Matter mural, using her platform to highlight intersectionality within the movement.",
      "website": "raeparkerart.com",
      "social_media": [
        "@rpartdesigns"
      ]
    },
    "artwork": {
      "title": "No Shade (Tribute to Black Queer Joy)",
      "description": "The Artwork: \"No Shade: Tribute to Black Queer Joy\" (Acrylic on Canvas, 48x48).\n1. Back Story and History: This vibrant painting was a standout piece in the historic \"We. The Culture\" exhibition at Newfields (Indianapolis Museum of Art), which featured works by members of The Eighteen Art Collective. The piece serves as a visual love letter to the NYC Ballroom culture that emerged in the 1980s—a subculture made famous by the documentary Paris is Burning. Parker’s work specifically honors the \"House\" system, where Black queer youth who were often rejected by their biological families found \"chosen families\" and safety. The imagery references icons like Willi Ninja (the grandfather of Vogueing) and captures the \"glitter, embellishment, and glamour\" that served as armor against a hostile world.\n\n2. Art Activism: This work functions as intersectional representation activism. By placing the underground culture of Black queer resistance into the \"high art\" galleries of Newfields, Parker forced a conversation about who is allowed to take up space in major museums. The activism lies in the title's refusal to be subtle (\"No Shade\")—it explicitly centers Black Queer Joy rather than trauma. It highlights how these communities survived the AIDS epidemic and systemic violence not just through protest, but through the radical act of living boldly, dancing, and caring for one another when society would not.\n\n3. Influence and Existence: The artwork is currently in existence and remains part of Rae Parker’s active portfolio (often available for loan or sale through the artist's site). Its presence in the \"We. The Culture\" exhibition was a watershed moment for the Indianapolis art scene, marking one of the first times that Black queer ballroom history was celebrated on the walls of the state's largest art institution. Parker continues to be a vocal advocate and educator in Indianapolis, using art to \"reflect the times\" and create safe spaces for marginalized youth.",
      "medium": "Multimedia",
      "date": "2023",
      "location": "Indianapolis (Newfields)",
      "cause": "LGBTQ+ Rights / Black Joy",
      "imageUrl": "/Images/RaeParker_No Shade.jpg",
      "credit": "raeparkerart.com",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Rae Parker No Shade (Tribute to Black Queer Joy) Indianapolis (Newfields) LGBTQ+ Rights / Black Joy",
      "news_media_coverage": []
    }
  },
  {
    "id": "58",
    "artist": {
      "name": "Fingers (Graffiti Artist)",
      "isAlive": true,
      "bio": "\"Fingers\" is a legendary figure in the Indianapolis graffiti and street art scene. He is an \"OG\" writer whose style influenced generations of local graffiti artists. His work is characterized by classic wildstyle lettering and aerosol mastery, representing the roots of the city's hip-hop visual culture.",
      "website": "N/A",
      "social_media": [
        "@fingercreations"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Fist)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint / Drywall",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Fingers (Graffiti Artist) Black Lives Matter Mural (Fist) Indianapolis (Indiana Ave) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "59",
    "artist": {
      "name": "Cierra Johnson",
      "isAlive": true,
      "bio": "Cierra Johnson is a visual artist and member of The Eighteen Art Collective. She works in various mediums, often creating bold, graphic pieces that explore identity and emotion. She painted the \"O\" in the Black Lives Matter mural, using the circular letter as a canvas for symbolic imagery.",
      "website": "cjcrtv.com",
      "social_media": [
        "@cjcrtv"
      ]
    },
    "artwork": {
      "title": "Storytelling Drawing Sessions / Making Martindale",
      "description": "The Project: Storytelling Drawing Sessions & Making Martindale (2022–Present).\n1. Back Story and History: Cierra Johnson, a native of the historic Martindale-Brightwood neighborhood in Indianapolis, launched this project to address the rapid changes happening in her community. In 2022, she began hosting \"Storytelling Drawing Sessions\" where she would sit down with long-term residents (affectionately called \"Greatriarchs\") to draw their portraits. However, the drawing was secondary to the conversation; the primary goal was to record their oral histories, memories of the neighborhood's peak (like the Golden Age of Indiana Avenue), and their experiences with redlining and displacement. Participants were treated as paid consultants for their history (often receiving gift cards), validating their memories as valuable assets.\n\n2. Art Activism: This work functions as anti-erasure and \"placekeeping\" activism. As developers move into Martindale-Brightwood, the narrative often framed the area as \"blighted\" or a \"blank slate\" ready for improvement. Johnson’s work fights this narrative by proving the neighborhood already has a rich, valuable culture that must be preserved, not paved over. The activism lies in the methodology of listening: by spending hours drawing a resident, the artist builds trust and creates a physical record (the portrait) that says, \"This person was here, they matter, and they built this place.\" It shifts power from the developer to the resident.\n\n3. Influence and Existence: The project has evolved significantly and is very much alive. The drawings and stories collected during these sessions became the foundation for the Polklore Micro-Museum, which opened in 2024. This museum is a dedicated space in the neighborhood that uses art and augmented reality to tell the history of Martindale-Brightwood. Additionally, the portraits have been exhibited in the \"Drawn to Neighbors\" shows at the Harrison Center, and the oral histories collected helped inform the official \"Quality of Life\" plan for the neighborhood's future development.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Illustration / Advocacy",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Neighborhood Preservation / Justice",
      "imageUrl": "/Images/CierraJohnson_Storytelling Drawing Sessions _ Making Martindale.png",
      "credit": "https://cjcrtv.com/storytelling-drawing-sessions   (anti-erasure)",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Cierra Johnson Storytelling Drawing Sessions / Making Martindale Indianapolis Neighborhood Preservation / Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "60",
    "artist": {
      "name": "Kwazar Martin",
      "isAlive": true,
      "bio": "Kwazar Martin is a painter and member of The Eighteen Art Collective known for his smooth, realistic portraiture. He often depicts figures from hip-hop culture and the Black community, capturing a sense of \"cool\" and dignity. He painted the \"K\" in the Black Lives Matter mural.",
      "website": "kwazarmartinart.com",
      "social_media": [
        "@kwazarmartin"
      ]
    },
    "artwork": {
      "title": "I Can't Breathe",
      "description": "The Artwork: \"I Can't Breathe\" (2020).\n1. Back Story and History: This piece was created in the immediate, volatile aftermath of George Floyd's murder in May 2020. As businesses along Massachusetts Avenue (Mass Ave) in Indianapolis boarded up their windows in anticipation of protests and unrest, the Murals for Racial Justice initiative was formed to turn those boards into canvases. Kwazar Martin, a skilled portrait artist known for blending realism with graffiti aesthetics, painted this striking portrait of George Floyd on the plywood covering the windows at 881 Massachusetts Avenue. Remarkably, Martin \"freehanded\" the large-scale portrait in just about three hours, capturing Floyd's likeness with an intensity that demanded attention from everyone walking down the city's busiest entertainment district.\n\n\n\n2. Art Activism: This work functions as memorial and confrontation activism. By placing a realistic, humanizing portrait of George Floyd directly at eye level in a commercial district, Martin transformed a symbol of fear (boarded-up windows) into a symbol of remembrance. The activism lies in the unavoidability of the image; diners and shoppers on Mass Ave could not look away from the man whose death sparked a global movement. It served as a visual anchor for the local protests, asserting that the space belonged to the people and the message, not just to commerce.\n\n3. Influence and Existence: While the original installation was temporary (as the boards were eventually taken down), the artwork still exists as a preserved piece of history. It was acquired by the Indianapolis Public Library as part of their \"Murals for Racial Justice\" collection. The library has digitized the work and created high-quality vinyl reproductions that rotate through branches and public exhibitions, ensuring that this temporary street protest remains a permanent part of the city's official historical record.\n\nThe Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Mural",
      "date": "2024",
      "location": "Indianapolis (38th & College)",
      "cause": "Racial Justice",
      "imageUrl": "/Images/Kwazar Martin_I Can_t Breathe.jpg",
      "credit": "https://indyencyclopedia.org/exhibit/i-cant-breathe/",
      "latitude": 39.7793477,
      "longitude": -86.1443684,
      "categories": [],
      "searchQuery": "Kwazar Martin I Can't Breathe Indianapolis (38th & College) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "61",
    "artist": {
      "name": "Shane Young (FITZ)",
      "isAlive": true,
      "bio": "Shane Young, known as FITZ, is a pop artist and member of The Eighteen Art Collective. His work is heavily influenced by comic books, cartoons, and bright, commercial aesthetics. He painted the \"L\" in the Black Lives Matter mural, bringing a playful yet poignant graphic style to the project.",
      "website": "artbyfitz.org",
      "social_media": [
        "@artbyfitz"
      ]
    },
    "artwork": {
      "title": "Black Lives Matter Mural (Letter T)",
      "description": "The Artwork: The \"Black Lives Matter\" Mural on Indiana Avenue. Back Story & Activism: Created in August 2020 during the global protests following the murder of George Floyd, this project was organized by the artists and local activists to claim space on Indiana Avenue—a historic hub of Black culture in Indianapolis that had been decimated by gentrification and displacement. Unlike standard street text, each artist was assigned one letter to paint in their own style, turning the political slogan into a gallery of individual Black voices. The mural served as a direct protest against police brutality (referencing local cases like Michael Taylor) and a reclamation of Black history in a white-dominated space. Influence & Existence: The original street mural no longer exists; it was defaced shortly after completion and eventually paved over, highlighting the very tensions it sought to address. However, its impact was massive: it launched \"The Eighteen Art Collective,\" which continues to exhibit in major institutions like Newfields (\"We. The Culture\"). Replicas of the letters are now preserved at The Children's Museum of Indianapolis, ensuring the message endures beyond the pavement",
      "medium": "Street Paint",
      "date": "August 2020",
      "location": "Indianapolis (Indiana Ave)",
      "cause": "Racial Justice",
      "credit": "",
      "latitude": 39.7751157,
      "longitude": -86.1660826,
      "categories": [],
      "searchQuery": "Shane Young (FITZ) Black Lives Matter Mural (Letter T) Indianapolis (Indiana Ave) Racial Justice",
      "news_media_coverage": []
    }
  },
  {
    "id": "62",
    "artist": {
      "name": "Lisa Sears",
      "isAlive": true,
      "bio": "Lisa Sears is a photographer known for capturing the vintage typography and fading neon signs of the Midwest. Her work documents roadside Americana, preserving the visual history of old motels, diners, and theaters before they disappear. She frames these objects as sculptural artifacts of a bygone era.",
      "website": "lisasearsart.com",
      "social_media": [
        "@lisasearsart"
      ]
    },
    "artwork": {
      "title": "Principio Obstate (Statue of Liberty)",
      "description": "The Artwork: \"Principio Obstate\" (2017).\n1. Back Story and History: While Lisa Sears is widely known for her photography of vintage signs, this piece is a mixed-media acrylic painting based on a complex digital collage. The title is derived from the Latin phrase Principio Obsta, which translates to \"Resist the beginnings\" (implying one should stop evil or tyranny at the start before it grows too powerful). The visual composition features a historical photograph of the Statue of Liberty while she was originally under construction in France, encased in scaffolding. In a striking visual twist, the primary figure of Liberty is turned upside down, creating a sense of disorientation, while a \"ghost\" image of the statue stands upright in the background.\n\n2. Art Activism: This work is a direct piece of political activism created in the turbulent socio-political climate of 2017.\n\nThe Scaffolding: By depicting the statue under construction/repair, Sears suggests that the American promise of \"Liberty\" is not a finished guarantee but something that requires constant work, maintenance, and reconstruction.\n\nThe Inversion: The upside-down statue signals distress (a universal sign of a nation in trouble) and the subversion of democratic norms.\n\nThe Title: The Latin command to \"resist the beginnings\" serves as a warning to the viewer to recognize and oppose the early signs of authoritarianism or the erosion of rights.\n\nThe Hope: Sears has stated that the upright layer in the background represents the resilience of democracy—that there is \"always something to balance power.\"\n\n3. Influence and Existence: This 48\"x48\" canvas is a significant diversion from Sears's typical \"roadside Americana\" photography, showing her range as a fine artist capable of deep political critique. It has been featured in arts publications like The Woven Tale Press as a prime example of how digital composition can be translated into traditional painting to comment on contemporary history. The work stands as a permanent record of the artistic resistance and anxiety felt during that specific political era.",
      "medium": "Acrylic / Digital Layering",
      "date": "2017",
      "location": "Indianapolis",
      "cause": "Democracy / Feminism",
      "imageUrl": "/Images/Lisa Sears_Principio Obstate.jpg",
      "credit": "https://www.lisasearsart.com/principioobstate.html",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Lisa Sears Principio Obstate (Statue of Liberty) Indianapolis Democracy / Feminism",
      "news_media_coverage": []
    }
  },
  {
    "id": "63",
    "artist": {
      "name": "Megan Jefferson",
      "isAlive": true,
      "bio": "Megan Jefferson is a painter based at the Harrison Center known for her \"color field\" landscapes. She uses layers of oil and acrylic wash to create atmospheric, hazy scenes that evoke the sky, water, or horizons without being strictly realistic. Her work focuses on mood, light, and the emotional resonance of color.",
      "website": "indyarts.org/artist/megan-jefferson",
      "social_media": [
        "@meganjeffersonart"
      ]
    },
    "artwork": {
      "title": "Dept of Public Words - Public Mural Project",
      "description": "Here is the description for the Dept of Public Words, a specific collaborative project involving Megan Jefferson.\n\nMegan Jefferson (with Holly Combs)\nThe Project: Dept of Public Words (Public Mural Series).\n\n1. Back Story and History: The \"Dept of Public Words\" was a collaborative duo formed by Megan Jefferson (painter) and Holly Combs (writer/poet). They joined forces to combine Jefferson’s signature atmospheric, colorful painting style with Combs’s talent for concise, uplifting text. The project began with a simple mission: to interrupt the visual noise of the city—usually dominated by advertising or blank gray concrete—with affirmative messages. They created murals featuring phrases like \"You are Beautiful,\" \"Be Kind,\" and \"Love Your Neighbor,\" treating the city streets like pages in a public book.\n\n2. Art Activism: This project functions as mental health and \"kindness\" activism. In a world often filled with divisive political rhetoric and commercial pressure, the Dept of Public Words sought to \"hack\" the viewer's internal monologue. The activism lies in the belief that words create reality; by placing a 20-foot-tall declaration of love or affirmation in a public space, they aimed to soften the hardened urban environment and trigger a moment of psychological relief or self-worth for passersby. It shifts the function of a wall from a barrier to a source of encouragement.\n\n3. Influence and Existence: While the formal duo \"Dept of Public Words\" has largely wound down their active partnership, their murals still exist and remain some of the most photographed spots in Indianapolis (notably the \"You Are Beautiful\" mural along the Canal Walk). These works became early staples of the \"Instagrammable art\" movement in Indy, meaning their message of kindness was amplified digitally far beyond the physical location. The project influenced a wave of subsequent text-based public art in the city, proving that simple, positive language could be a powerful tool for placemaking.",
      "medium": "Oil / Mural",
      "date": "Ongoing",
      "location": "Indianapolis (Edington Gallery)",
      "cause": "Mental Health / Color Therapy",
      "imageUrl": "/Images/MeganJefferson_MuralMap_DeptOfPublicWords.pdf",
      "credit": "https://www.jeffersonartstudio.com/murals",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Megan Jefferson Dept of Public Words - Public Mural Project Indianapolis (Edington Gallery) Mental Health / Color Therapy",
      "news_media_coverage": []
    }
  },
  {
    "id": "64",
    "artist": {
      "name": "Lauren Kussro",
      "isAlive": true,
      "bio": "Lauren Kussro is an artist who works primarily in printmaking and installation. She creates intricate, repetitive paper structures that mimic organic growth, such as coral reefs or floral swarms. Her installations often take over walls or rooms, creating immersive environments of texture and color.",
      "website": "laurenkussro.com",
      "social_media": [
        "@laurenkussro"
      ]
    },
    "artwork": {
      "title": "Our Ocean Installation",
      "description": "The Artwork: \"Our Ocean\" (Installation at Nashville International Airport).\n1. Back Story and History: Commissioned in 2013 for the Arts at the Airport program at the Nashville International Airport (BNA), this massive \"printstallation\" (printmaking + installation) transformed the Meeter/Greeter lounge of Concourse C into a vibrant underwater ecosystem. Kussro, known for her meticulous hand-craft, created thousands of individual \"barnacles\" and coral forms using silkscreened paper, thread, wax, and beads. She hand-cut, folded, and sewed these paper elements together to create a sprawling, three-dimensional reef that seemed to grow organically across the walls and windows of the terminal.\n2. Art Activism: This piece functions as environmental appreciation activism. By painstakingly recreating a coral reef out of fragile paper, Kussro highlights the fragility and complexity of marine life. She brings the hidden beauty of the ocean—often \"out of sight, out of mind\" for landlocked populations—into a high-traffic, industrial space. The work forces hurried travelers to pause and witness the \"jewel-like\" detail of an ecosystem that is currently threatened by climate change and bleaching, urging a quiet reverence for the natural world.\n3. Influence and Existence: The specific airport installation was temporary (as most airport commissions are) and the work was eventually sold. However, \"Our Ocean\" was a pivotal moment in Kussro's career, cementing her reputation for large-scale, immersive paper environments. It set the precedent for her later \"bloom\" and \"reef\" installations which continue to be exhibited in galleries across the United States, keeping the conversation about nature's delicate beauty alive in her current practice.\n",
      "medium": "",
      "date": "2024",
      "location": "Houston (Formerly Indy)",
      "cause": "Environmental Fragility",
      "imageUrl": "/Images/LaurenKussro_OurOceanInstallation.jpg",
      "credit": "https://www.laurenkussro.com/",
      "latitude": 39.7782094,
      "longitude": -86.184366,
      "categories": [],
      "searchQuery": "Lauren Kussro Our Ocean Installation Houston (Formerly Indy) Environmental Fragility",
      "news_media_coverage": []
    }
  },
  {
    "id": "65",
    "artist": {
      "name": "Gautam Rao",
      "isAlive": true,
      "bio": "Gautam Rao is a professor at Butler University and a prolific designer and artist. His work spans from typography and graphic design to large-scale public murals that utilize \"Color Field\" theories and geometric abstraction. He is the creator of the \"Indy Art & Seek\" project, blending art with mobile technology.",
      "website": "gautamraoart.net",
      "social_media": [
        "@gautamrao"
      ]
    },
    "artwork": {
      "title": "Indians, Alphabetically",
      "description": "The Artwork: \"Indians, Alphabetically\" (Series).\n1. Back Story and History: Gautam Rao, an artist and professor at Butler University, created this series of 26 vector illustrations (one for each letter of the alphabet) to explore the complexity and beauty of Indian names. Growing up as an Indian-American, Rao frequently experienced his name being mispronounced, shortened, or Anglicized to make it \"easier\" for others. This project was born from that friction. He designed a custom typeface and created stylized portraits of men and women to accompany specific Indian names, drawing on the Hindu tradition of Sahasranama (chanting lists of 1,000 names of a deity). It is a visual taxonomy of the Indian diaspora.\n2. Art Activism: This work functions as cultural literacy and identity activism. By forcing the viewer to engage with \"difficult\" or \"foreign\" names from A to Z, Rao pushes back against the pressure to assimilate. The artwork asserts that these names have deep meaning (often religious or geographic) and should be pronounced with respect, not erased. It challenges the Western habit of simplifying other cultures for convenience, reclaiming the \"Indian\" identity from a monolith into a diverse alphabet of individuals.\n3. Influence and Existence: The series has been exhibited nationally, notably as part of the Indo-American Arts Council's \"Erasing Borders\" exhibition in New York City and at Typeforce in Chicago. In Indianapolis, it establishes Rao as a key voice in \"Indian American Modernism,\" a style that blends pop-art aesthetics with South Asian heritage. The project continues to influence his current work, which often playfully interrogates the confusion between \"Indian\" (South Asian) and \"Indian\" (Native American) in the state of Indiana.",
      "medium": "Design / Public Art",
      "date": "Ongoing",
      "location": "Indianapolis (Butler Univ)",
      "cause": "Play / Inclusive Design",
      "imageUrl": "/Images/GautamRao_Indians, Alphabetically.jpg",
      "credit": "gautamraoart.net",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Gautam Rao Indians, Alphabetically Indianapolis (Butler Univ) Play / Inclusive Design",
      "news_media_coverage": []
    }
  },
  {
    "id": "66",
    "artist": {
      "name": "Casey Roberts",
      "isAlive": true,
      "bio": "Casey Roberts is an Indianapolis artist famous for his use of the cyanotype process (a photographic blueprint technique). Instead of just making prints, he paints with the chemical solution, creating large-scale, blue-hued scenes of nature, silhouettes, and surreal landscapes. His work has a distinct, monochromatic ghostly quality.",
      "website": "wildernessoverload.com",
      "social_media": [
        "@caseyrobertsart"
      ]
    },
    "artwork": {
      "title": "Cyanotype Nature Series (A Soft Spot In The Sea)",
      "description": "The Artwork: \"A Soft Spot in the Sea Ice\" (2024). 1. Back Story and History: This piece serves as a prime example of Roberts' mastery of the cyanotype process—a Civil War-era photographic technique that uses UV light to create deep blue images. Unlike traditional photographers who just make prints, Roberts \"paints\" with the light-sensitive chemicals (iron salts), modifying them with household substances like baking soda, bleach, and peroxide to achieve a wide range of colors and textures beyond the standard blue. In this specific narrative work, Roberts uses animals as stand-ins for humans, likely depicting a scene on fragile ice that mimics a fairytale. The \"soft spot\" in the title suggests vulnerability—both physical (thin ice) and emotional. Here is the artwork description for \"A Soft Spot in the Sea Ice\" (from the Cyanotype Nature Series) by Casey Roberts.\n\nCasey Roberts\nThe Artwork: \"A Soft Spot in the Sea Ice\" (2024).\n\n1. Back Story and History: This piece serves as a prime example of Roberts' mastery of the cyanotype process—a Civil War-era photographic technique that uses UV light to create deep blue images. Unlike traditional photographers who just make prints, Roberts \"paints\" with the light-sensitive chemicals (iron salts), modifying them with household substances like baking soda, bleach, and peroxide to achieve a wide range of colors and textures beyond the standard blue. In this specific narrative work, Roberts uses animals as stand-ins for humans, likely depicting a scene on fragile ice that mimics a fairytale. The \"soft spot\" in the title suggests vulnerability—both physical (thin ice) and emotional.\n\n\n\n2. Art Activism: This work functions as environmental and chemical activism.\n\nEnvironmental: By focusing on \"sea ice,\" the work subtly addresses climate change and the fragility of ecosystems that are literally melting away. It highlights the tension between the natural world and human interference. Process as Metaphor: The creation process itself is an act of \"man vs. nature\" activism. Roberts must collaborate with the sun (nature) to expose the chemicals (man-made). He cannot fully control the outcome, forcing a \"conversation\" with the environment rather than domination over it.",
      "medium": "Cyanotype / Chemical",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "Nature Conservation / Surrealism",
      "imageUrl": "/Images/CaseyRoberts_A Soft Spot in the Sea Ice.jpg",
      "credit": "https://www.artsy.net/artwork/casey-roberts-a-soft-spot-in-the-sea-ice",
      "latitude": 39.7782094,
      "longitude": -86.184366,
      "categories": [],
      "searchQuery": "Casey Roberts Cyanotype Nature Series (A Soft Spot In The Sea) Indianapolis Nature Conservation / Surrealism",
      "news_media_coverage": []
    }
  },
  {
    "id": "67",
    "artist": {
      "name": "Quincy Owens",
      "isAlive": true,
      "bio": "Quincy Owens is a prominent public artist known for his vibrant, abstract sculptures, often created in collaboration with Luke Crawley. He frequently uses industrial materials and LED lighting to create totem-like structures that explore the intersection of art and science. His colorful light pillars can be seen in various locations around Indianapolis.",
      "website": "owensandcrawley.com",
      "social_media": [
        "@quincyowens"
      ]
    },
    "artwork": {
      "title": "Fissure at the Athenaeum",
      "description": "Back Story and History: Installed in 2019, \"Fissure\" is part of The Public Collection, a unique initiative in Indianapolis that pairs artists with community centers to create high-concept, sculptural \"Little Free Libraries.\" Located on the grounds of the historic Athenaeum (formerly Das Deutsche Haus), the sculpture was designed to visually echo the building's architecture; its horizontal bands of aluminum and acrylic mimic the limestone banding on the 1893 structure. The piece features a \"cage\" tipped on its side, symbolizing the often trapping or difficult experience of immigration, but with an open door representing freedom through knowledge. It also features a prominent quote by author Aberjhani about the \"colors of the rainbow,\" illuminated by LED lights. 2. Art Activism: This piece serves as immigration and education activism. The Athenaeum was originally built by German immigrants who faced intense xenophobia during WWI (forcing the building to change its name to the \"Athenaeum\" to sound less German). \"Fissure\" draws a direct line between that historical discrimination and the challenges faced by modern immigrants today. By functioning as a free book station, it posits that access to education is the key to breaking out of the \"cage\" of poverty or exclusion. It turns a static monument into an active resource for literacy and inclusion. 3. Influence and Existence: The work is currently in existence and is a permanent fixture in the \"pocket park\" along New Jersey Street outside the Athenaeum. It remains a functional part of the Indianapolis Public Library system (stocked with free books) and stands as a modern marker of the Athenaeum's renewed mission to be a \"house of culture\" for all backgrounds, not just German heritage. 3. Influence and Existence: This is a contemporary and active piece, currently part of his recent body of work exhibited at galleries like Momentum Gallery. Roberts remains one of Indianapolis's most distinct artists, and his influence has revived interest in alternative photographic processes in the Midwest. His work is widely collected and continues to be a staple of the Indianapolis gallery scene (such as the Harrison Center), proving that historical techniques can be used to tell modern, urgent stories about our planet.",
      "medium": "Sculpture / Light",
      "date": "Ongoing",
      "location": "Indianapolis (Various Sites)",
      "cause": "Public Art Access / Science",
      "imageUrl": "/Images/QuincyOwens_Fissureatthe Athenaeum.jpg",
      "credit": "https://www.owensandcrawley.com/fissure.html",
      "latitude": 39.773509,
      "longitude": -86.1502746,
      "categories": [],
      "searchQuery": "Quincy Owens Fissure at the Athenaeum Indianapolis (Various Sites) Public Art Access / Science",
      "news_media_coverage": []
    }
  },
  {
    "id": "68",
    "artist": {
      "name": "Luke Crawley",
      "isAlive": true,
      "bio": "Luke Crawley is a former science teacher turned artist who frequently collaborates with Quincy Owens. He brings a background in physics and sound engineering to their sculptures, often incorporating audio elements or mathematical structures into the visual design. His work bridges the gap between STEM and the arts.",
      "website": "owensandcrawley.com",
      "social_media": [
        "@lukecrawley"
      ]
    },
    "artwork": {
      "title": "Up in Air",
      "description": "1. Back Story and History: This work was a site-specific sound and sculpture installation created by Luke Crawley (often in collaboration with Quincy Owens) for the Art in Odd Places (AiOP) festival in Indianapolis. Known for blending his background as a physics teacher with visual art, Crawley mounted twelve sound-emitting sculptures high up on streetlight poles along East Market Street. The piece was designed to turn a standard city commute into a science experiment: each sculpture emitted a continuous electronic tone, and as cars or cyclists passed by, the relative motion created a Doppler effect, shifting the pitch of the sound for the listener. 2. Art Activism: The \"activism\" in this piece lies in democratizing science (STEAM) and reclaiming public utility infrastructure. By attaching art to mundane streetlights, Crawley forced the public to engage with complex physics concepts (sound waves and frequency) in a free, accessible, and \"odd\" environment. It challenged the idea that art belongs in galleries and science belongs in classrooms, asserting that both are active forces in our daily urban environment.\n\n3. Influence and Existence: As part of the Art in Odd Places festival, this specific installation was temporary and is no longer on view. However, its influence persists in how it established Crawley (and his partner Quincy Owens) as leaders in the Indianapolis \"STEAM\" movement. The concepts explored here—using sound, light, and math to engage the public—became the foundation for their permanent, large-scale works seen today, such as the \"Helios\" light towers and the \"Ka-Bike-O-Scope.\" The project helped prove that Indianapolis audiences were hungry for interactive, intellectual public art.",
      "medium": "Sculpture / Sound",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "STEAM Education / Physics",
      "imageUrl": "/Images/LukeCrawley_Up in Air..jpg",
      "credit": "https://artinoddplaces.org/artists/crawley-luke/",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Luke Crawley Up in Air Indianapolis STEAM Education / Physics",
      "news_media_coverage": []
    }
  },
  {
    "id": "69",
    "artist": {
      "name": "Dale Enochs",
      "isAlive": true,
      "bio": "Dale Enochs is one of Indiana's most respected sculptors, working primarily with Indiana limestone. He combines the raw, prehistoric stone with industrial metals like steel and copper, creating monumental works that feel both ancient and modern. His massive limestone table sculpture in the Indianapolis airport is a signature piece.",
      "website": "daleenochs.com",
      "social_media": [
        "@daleenochs"
      ]
    },
    "artwork": {
      "title": "Elemental Indiana",
      "description": "The Artwork: Elemental Indiana (Indianapolis International Airport). Back Story & Activism: Commissioned for the new Col. H. Weir Cook Terminal in 2008, this massive limestone and bronze wall relief functions as a spiritual \"grounding\" for travelers. Enochs combined Indiana limestone (the state's geological bedrock) with the four classical elements—Earth, Air, Fire, and Water—represented through geometric shapes and their Latin names. Crucially, the work serves as a form of cultural recognition activism: Enochs collaborated with a linguist to include the Miami (Myaamia) Native American words for these elements, directly honoring the indigenous people who originally inhabited this land. By etching these words alongside the shape of the state, he acknowledges the true history of \"Indiana\" (Land of the Indians) in a high-traffic civic space. Influence & Existence: The piece is permanently installed in the Ticket Hall of the airport, greeting millions of travelers annually. It remains one of the most prominent examples of public art in the state, successfully integrating Indiana's natural history (limestone) with its cultural ancestry, ensuring that the indigenous language is visible to all who enter the city's gateway",
      "medium": "Sculpture",
      "date": "2008",
      "location": "Indianapolis (Airport)",
      "cause": "Indiana Geology / History",
      "imageUrl": "/Images/Dale Enochs_Elemental Indiana.png",
      "credit": "https://www.daleenochs.com/julien-clarke",
      "latitude": null,
      "longitude": null,
      "categories": [],
      "searchQuery": "Dale Enochs Elemental Indiana Indianapolis (Airport) Indiana Geology / History",
      "news_media_coverage": []
    }
  },
  {
    "id": "70",
    "artist": {
      "name": "Brian McCutcheon",
      "isAlive": true,
      "bio": "Brian McCutcheon is a conceptual artist and sculptor whose work often interrogates themes of masculinity, sports, and flight. He uses highly finished materials like chrome, automotive paint, and fiberglass to create objects that look manufactured but are deeply symbolic. He is a co-founder of the design fabrication studio \"Ignition Arts.\"",
      "website": "brianmccutcheon.com",
      "social_media": [
        "@brianmccutcheon"
      ]
    },
    "artwork": {
      "title": "NDY",
      "description": "The Artwork: \"NDY\" Sculptures (The \"Be the 'I' in Indy\" Campaign). Back Story & Activism: While McCutcheon is a fine artist known for high-concept sculpture, his fabrication studio, Ignition Arts, is responsible for creating the iconic \"NDY\" sculptures found across Indianapolis. Originally commissioned by Visit Indy for the 2015 NCAA Final Four to boost tourism, these sculptures quickly transformed from simple photo-ops into powerful tools for social activism. When Indiana passed the controversial Religious Freedom Restoration Act (RFRA) in 2015, which many feared would allow discrimination against LGBTQ+ individuals, the city mobilized the \"Indy Welcomes All\" campaign. The \"NDY\" brand—and the act of standing in as the \"I\"—became a symbol of solidarity, signaling that everyone belongs in Indy regardless of their identity. Influence & Existence: Today, these sculptures are arguably the most recognizable public art in the city, permanently installed at locations like the Indianapolis International Airport, Mass Ave, and outside the Convention Center. They have become a staple of local Pride celebrations, often being wrapped in rainbow colors or Trans flags during June to explicitly champion LGBTQ+ rights and visibility in the heart of the city.",
      "medium": "Sculpture / Fabrication",
      "date": "Ongoing",
      "location": "Indianapolis",
      "cause": "LGBTQ+ ",
      "imageUrl": "/Images/Brian McCutcheon_NDY.png",
      "credit": "https://www.ignitionarts.com/projects/ndy",
      "latitude": 39.7683331,
      "longitude": -86.1583502,
      "categories": [],
      "searchQuery": "Brian McCutcheon NDY Indianapolis LGBTQ+",
      "news_media_coverage": []
    }
  },
  {
    "id": "71",
    "artist": {
      "name": "Katrina Murray",
      "isAlive": true,
      "bio": "Katrina Murray is a painter and sculptor whose work features stylized, rounded figures and organic shapes. Her paintings often depict crowds or clusters of people in a distinct, almost puzzle-like arrangement. She explores human interaction and social dynamics through these soft, interconnected forms.",
      "website": "katrinajmurray.com",
      "social_media": [
        "@katrinajmurray"
      ]
    },
    "artwork": {
      "title": "This Is Us",
      "description": "This Is Us (Katrina J. Murray)\n1. The Backstory & History This body of work was the centerpiece of a solo exhibition held at Gallery 924 (The Arts Council of Indianapolis) in May 2022. The artist, Katrina J. Murray, is an Indianapolis-based painter and ceramicist. The backstory of this work is deeply personal and tragic: Murray began pivoting her artistic focus after her son was killed in the Iraq War in 2005. She returned to art school (Herron School of Art and Design) to process that grief and later to recover from a traumatic brain injury. \"This Is Us\" represents the culmination of her investigation into human vulnerability, bias, and the fractures in American society.\n\n2. The Art Activism The activism in this work is rooted in Empathy and Political Confrontation.\nThe Theme: The title \"This Is Us\" challenges the viewer to reject the \"Us vs. Them\" mentality. Murray uses ceramic sculptures, collages, and found objects to spark uncomfortable conversations about divisive topics like gun laws, women's reproductive rights, and racial equality.\nThe Method: Instead of being purely aggressive, she often uses humor or small, approachable ceramic figures to disarm the viewer before hitting them with heavy political questions.\nDirect Action: The activism extended beyond the art itself; Murray donated a portion of the proceeds from the exhibition sales to two local non-profits led by mothers who had lost children to gun violence (Purpose 4 My Pain and Warriors 4 Peace).\n\n3. The Influence and Existence While the exhibition was temporary, its influence persists through its bold confrontation of the \"Hoosier\" identity. By presenting these controversial topics in a major gallery funded by the Arts Council, Murray forced the local art community to look in the mirror. The work exists as a critique of how we form our political identities, asking Indiana residents to acknowledge that the people they disagree with are still part of \"Us.\" It remains one of the most politically direct exhibitions hosted at Gallery 924 in recent years.",
      "medium": "Conceptual Installation",
      "date": "2022",
      "location": "Indianapolis",
      "cause": "Human Condition / Bias",
      "imageUrl": "/Images/Katrina Murray_This Is Us.png",
      "credit": "https://katrinajmurray.com/pdfs.html",
      "latitude": 39.780013,
      "longitude": -86.155886,
      "categories": [],
      "searchQuery": "Katrina Murray This Is Us Indianapolis Human Condition / Bias",
      "news_media_coverage": []
    }
  },
  {
    "id": "72",
    "artist": {
      "name": "India Cruse-Griffin",
      "isAlive": true,
      "bio": "India Cruse-Griffin is a mixed-media artist based in Richmond, Indiana. She is renowned for her collage technique, where she layers cut paper and then paints over it to create textured, vibrant scenes of African American life. Her work \"Hope Skip and Jump\" (as previously discussed) exemplifies her ability to capture movement and joy through this unique layering process.",
      "website": "indiacruse-griffin.org",
      "social_media": [
        "@indiacrusegriffin"
      ]
    },
    "artwork": {
      "title": "Hope Skip and Jump",
      "description": "Hope Skip and Jump (India Cruse-Griffin)\n1. The Backstory & History This artwork is a mixed-media collage created in 2012 by India Cruse-Griffin, a celebrated artist and educator based in Richmond, Indiana. It was commissioned specifically for the Eskenazi Health Art Collection in Indianapolis. When the new Eskenazi hospital was being built, they launched a massive initiative to fill the space with local art to aid in the healing process. Cruse-Griffin’s work was selected from hundreds of submissions. The piece is currently installed in the 3rd Floor Surgery Registration Waiting Lobby, serving as a comforting visual for families waiting for loved ones.\n\n2. The Art Activism The activism in this piece is rooted in \"Black Joy\" and Healing.\nThe Imagery: The collage depicts two young girls engrossed in play—using jump ropes and playing hopscotch.\nThe Medium: Cruse-Griffin uses her signature technique of layering torn paper, patterns, and acrylic paint to create a textured, quilt-like effect.\nThe Message: In a world that often highlights Black trauma, Cruse-Griffin’s activism is her insistence on documenting Black happiness. By placing an image of unburdened, joyful African American childhood in a hospital setting, the work actively fights against anxiety and despair, offering a vision of vitality and optimism to patients who are often in vulnerable states.\n\n3. The Influence and Existence This work exists as part of one of the most significant public art collections in the state (The Eskenazi Health Art Collection), placing Cruse-Griffin alongside other Indiana legends like T.C. Steele and Robert Indiana. Its influence is daily and practical; unlike art in a quiet museum, this piece \"works\" every day to lower the blood pressure and stress levels of real-world patients. It cements Cruse-Griffin’s legacy as a key chronicler of the African American experience in the Midwest.",
      "medium": "Collage / Mixed Media",
      "date": "2012",
      "location": "Indianapolis (Eskenazi Health)",
      "cause": "Black Experience / Family",
      "imageUrl": "/Images/India Cruse-Griffin_HopeSkipandJump.png",
      "credit": "https://publicartarchive.org/art/Hope-Skip-and-Jump/ca85f4e7",
      "latitude": 39.7782094,
      "longitude": -86.184366,
      "categories": [],
      "searchQuery": "India Cruse-Griffin Hope Skip and Jump Indianapolis (Eskenazi Health) Black Experience / Family",
      "news_media_coverage": []
    }
  }
];
