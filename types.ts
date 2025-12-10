export type RightsLevel =
  | "educational-ok"
  | "permission-granted"
  | "unknown"
  | "restricted"
  | "public-domain";

export type CauseTag =
  | "Racial Justice"
  | "Women’s Rights"
  | "LGBTQ+ Rights"
  | "Environmental Justice"
  | "Indigenous Rights"
  | "Disability Rights"
  | "Labor & Class"
  | "Immigration"
  | "Healthcare"
  | "Voting Rights"
  | "Education"
  | "Anti-War"
  | "Other";

export interface ArtistInfo {
  name: string;
  isAlive?: boolean;
  bio?: string;
  portraitUrl?: string;
  portraitCredit?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
  audioUrl?: string;
  languages?: string[];
}

export interface ArtworkInfo {
  title: string;
  medium?: string;

  // Legacy-friendly
  date?: string;
  location?: string;

  // Canonical
  dateStart?: string;
  dateEnd?: string;
  city?: string;
  state?: string;
  country?: string;
  lat?: number;
  lng?: number;

  // Legacy single + canonical multi-tag
  cause?: string;
  causeTags?: CauseTag[];

  imageUrl?: string;
  alt?: string;
  credit?: string;
  rights?: RightsLevel;
}

export interface MediaLink {
  title: string;
  url: string;
  source?: string;
  date?: string;
}

export interface Reflection {
  id: string;
  authorName?: string;
  text: string;
  createdAt: string; // ISO
  language?: string;
  isApproved?: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  introMarkdown?: string;
  causeTags?: CauseTag[];
  entryIds: string[];
  featuredImageUrl?: string;
  order?: number;
}

export interface Entry {
  id: string;
  artist: ArtistInfo;
  artwork: ArtworkInfo;
  media?: MediaLink[];
  reflections?: Reflection[];
  collections?: string[]; // slugs or IDs
  tags?: string[];
}

// Backward compatibility alias
export type Artist = Entry;
