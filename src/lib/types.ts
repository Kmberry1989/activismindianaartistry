export type CauseTag = string;

export interface Collection {
  id: string;
  slug: string;
  title: string;
  summary: string;
  causeTags?: CauseTag[]; // Optional to match data or strictly required? Data has them. types might imply optionl if not always present. Let's make it optional to be safe or check usages. Data has it. usage in utils checks for it.
  entryIds: string[];
  order?: number;
}

export type RightsLevel = "educational-ok" | "public-domain" | "copyright"; // Inferred
export type Entry = Artist;

export interface Artist {
  id: string;
  artist: {
    name: string;
    bio?: string;
    website?: string;
    social_media?: string[];
    isAlive?: boolean;
    born?: string;
    died?: string;
    portraitUrl?: string; // New field for artist image
    portraitCredit?: string; // New field for artist image credit
  };
  artwork: {
    title: string;
    description?: string;
    imageUrl?: string;
    alt?: string;
    categories?: string[];
    tags?: string[];
    location?: string;
    city?: string; // Added
    state?: string; // Added
    portfolio_url?: string;
    news_media_coverage?: string[];
    medium?: string;
    date?: string;
    dateStart?: string; // Added
    dateEnd?: string; // Added
    cause?: string;
    causeTags?: CauseTag[]; // Added/Used by normalized
    searchQuery?: string;
    latitude?: number | null;
    longitude?: number | null;
    lat?: number | null; // Added (alias for latitude used in normalize/filters)
    lng?: number | null; // Added (alias for longitude)
    mixcloudEmbed?: string;
    vimeoUrl?: string;
    credit?: string;
    rights?: RightsLevel; // Added
  };
}