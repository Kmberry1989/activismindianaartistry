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
    imageUrl: string;
    alt?: string;
    categories?: string[];
    tags?: string[];
    location?: string;
    portfolio_url?: string;
    news_media_coverage?: string[];
    medium?: string;
    date?: string;
    cause?: string;
    searchQuery?: string;
    latitude?: number;
    longitude?: number;
    mixcloudEmbed?: string;
    vimeoUrl?: string;
    credit?: string;
  };
}