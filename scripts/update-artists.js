const fs = require('fs');
const papa = require('papaparse');
const path = require('path');
const https = require('https');

const csvFilePath = path.join(__dirname, '..', 'USE THIS FOR ALL DATA IN DIRECTORY Art Activist Inventory Sheet - Information for Website.csv');
const outputFilePath = path.join(__dirname, '..', 'src', 'lib', 'artists-data.ts');
const cacheFilePath = path.join(__dirname, 'locations-cache.json');

// Helper to fetch using native https module if global fetch is not available (just in case)
// But Node 18+ has fetch. We'll try global fetch first, if not we can use a simple https wrapper or just assume fetching works.
// We'll trust global fetch is available since Next.js is recent.

// Simple delay function to respect rate limits
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Load or initialize cache
let locationCache = {};
if (fs.existsSync(cacheFilePath)) {
  try {
    locationCache = JSON.parse(fs.readFileSync(cacheFilePath, 'utf8'));
  } catch (e) {
    console.error('Error reading location cache:', e);
  }
}

function saveCache() {
  fs.writeFileSync(cacheFilePath, JSON.stringify(locationCache, null, 2), 'utf8');
}

async function geocodeLocation(locationStr) {
  if (!locationStr) return { lat: undefined, lng: undefined };

  // Normalize string for cache key
  let cleanLoc = locationStr.trim();

  // cleanup common noise
  cleanLoc = cleanLoc.replace(/^(Address|Location):\s*/i, '');
  cleanLoc = cleanLoc.split('\n')[0]; // Take first line only
  cleanLoc = cleanLoc.replace(/\(.*?\)/g, ''); // Remove content in parens e.g. (Indiana Avenue) if it complicates things? 
  // Actually parens might contain useful info like city. Let's be careful.
  // Maybe better to just remove specific patterns or keep as is if short.

  // Heuristic: if contains "Floor:" or "Area:", split and take previous part
  if (cleanLoc.includes('Floor:')) cleanLoc = cleanLoc.split('Floor:')[0];

  // Remove "The [Place Name] Address:" pattern
  cleanLoc = cleanLoc.replace(/The .*? Address:\s*/i, '');

  // Trim again
  cleanLoc = cleanLoc.trim();

  if (locationCache[cleanLoc]) {
    return locationCache[cleanLoc];
  }

  // Prepare search query. Append "Indiana" if not present to prioritize local results
  let query = cleanLoc;
  if (!query.toLowerCase().includes('indiana') && !query.toLowerCase().includes(', in')) {
    query += ', Indiana';
  }

  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'IndianaArtActivistDirectory/1.0 (contact@actinart.org)' // Polite User-Agent
      }
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    if (data && data.length > 0) {
      const result = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
      locationCache[cleanLoc] = result;
      // console.log(`Geocoded: ${cleanLoc} -> ${result.lat}, ${result.lng}`);
      return result;
    } else {
      console.log(`Could not geocode: ${cleanLoc}`);
      locationCache[cleanLoc] = { lat: null, lng: null }; // Cache failure to avoid retry
      return { lat: undefined, lng: undefined };
    }
  } catch (error) {
    console.error(`Error geocoding ${cleanLoc}:`, error.message);
    return { lat: undefined, lng: undefined };
  }
}

async function main() {
  if (!fs.existsSync(csvFilePath)) {
    console.error('CSV file not found at:', csvFilePath);
    return;
  }

  const csvFileContent = fs.readFileSync(csvFilePath, 'utf8');

  const parseResult = papa.parse(csvFileContent, {
    header: true,
    skipEmptyLines: true
  });

  const rows = parseResult.data;
  const artists = [];

  const imagesDir = path.join(__dirname, '..', 'public', 'Images');
  let availableImages = [];
  if (fs.existsSync(imagesDir)) {
    availableImages = fs.readdirSync(imagesDir);
  }

  for (const [index, row] of rows.entries()) {
    if (!row['Artist Name']) continue;

    // --- MAPPING LOGIC ---
    const artistName = row['Artist Name'] || '';
    const title = row['Title of Work'] || '';
    const locationDisplay = row['Where Located in Indiana?'] || '';
    const locationForGeocoding = row['Location'] || locationDisplay; // Use specific location col if available, else display name
    const cause = row['Social Cause Description'] || '';
    const credit = row['Photo Credit'] || '';
    const medium = row['Medium'] || '';
    const date = row['Date of Creation'] || '';
    const website = row['Website'] || '';

    // Combine descriptions
    const desc1 = row['Artwork Descripton 1'] || '';
    const desc2 = row['Artwork Descripton 2'] || '';
    const combinedDescription = [desc1, desc2].filter(Boolean).join('\n\n');

    const bio = row['Artist Description'] || '';

    // Image Matching Logic (Ported from original)
    const normalize = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedArtist = normalize(artistName);
    const normalizedTitle = normalize(title);

    let matchedImage = null;
    if (availableImages.length > 0) {
      matchedImage = availableImages.find(file => {
        const normFile = normalize(file);
        // Strict match Attempt 1: Artist + Title
        if (normalizedTitle && normFile.includes(normalizedArtist) && normFile.includes(normalizedTitle.substr(0, 10))) return true;
        return false;
      });

      if (!matchedImage) {
        // Relaxed match: just Artist name if unique enough or manual override logic could go here
        // For now, let's try to match generous fuzzy on title if artist matches
        matchedImage = availableImages.find(file => {
          const normFile = normalize(file);
          return normFile.includes(normalizedArtist);
        });
      }
    }

    // Handle specific overrides or manual fixes here if necessary based on data observation

    // Geocoding
    let coords = { lat: undefined, lng: undefined };
    if (locationForGeocoding) {
      coords = await geocodeLocation(locationForGeocoding);
      await delay(1100); // 1.1s delay to be safe with Nominatim (1 req/sec limit)
    }

    const artistObj = {
      id: (index + 1).toString(),
      artist: {
        name: artistName,
        isAlive: row['Still Alive? (Check means yes)'] === 'TRUE',
        bio: bio,
        website: website,
        social_media: row['Handle/Link'] ? [row['Handle/Link']] : [],
        portraitUrl: undefined, // CSV doesn't seem to have specific column for portrait URL, maybe inferred?
        // logic for portrait vs artwork image was in previous script? No, previous script used matchedImage for artwork.imageUrl
      },
      artwork: {
        title: title,
        description: combinedDescription,
        medium: medium,
        date: date,
        location: locationDisplay,
        cause: cause,
        imageUrl: matchedImage ? `/Images/${matchedImage}` : undefined,
        credit: credit,
        latitude: coords.lat,
        longitude: coords.lng,
        categories: [], // Populate if category column exists or inferred
        searchQuery: `${artistName} ${title} ${locationDisplay} ${cause}`.trim(),
        news_media_coverage: [] // Not in this CSV?
      }
    };

    artists.push(artistObj);
    process.stdout.write('.'); // progress indicator
  }

  console.log('\nProcessing complete.');
  saveCache(); // Save any new geocodes

  const fileContent = `import { Artist } from './types';

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

export const artists: Artist[] = ${JSON.stringify(artists, null, 2)};
`;

  fs.writeFileSync(outputFilePath, fileContent, 'utf8');
  console.log(`Successfully updated artists-data.ts with ${artists.length} entries.`);
}

main().catch(console.error);
