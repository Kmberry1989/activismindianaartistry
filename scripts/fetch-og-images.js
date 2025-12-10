const fs = require('fs');
const path = require('path');
const ogs = require('open-graph-scraper');

async function fetchImages() {
  console.log('Starting image fetch...');

  const dataPath = path.join(__dirname, '../src/lib/artists-data.ts');
  const fileContent = fs.readFileSync(dataPath, 'utf8');

  // Naive parsing: extract the array content
  // We assume the file has "export const artists: Artist[] = [" ... "];"
  const match = fileContent.match(/export const artists: Artist\[\] = (\[[\s\S]*?\]);/);

  if (!match) {
    console.error('Could not find artists array in file.');
    return;
  }

  // We need to make the content valid JSON to parse it, or valid JS to eval it.
  // The file uses unquoted keys (e.g. artist: { ... }).
  // We can try to use eval, but we need to mock 'Artist' type or remove it.
  // Actually, since it's just an array literal, we can eval it if we handle imports.

  // Let's try a safer regex approach to find websites/socials for each ID.
  // We'll iterate through the file content looking for blocks.

  // Actually, let's just use a simple regex to find objects with IDs and links.
  // This is a bit hacky but avoids TS compilation.

  const entries = [];
  const objectRegex = /{\s*"id":\s*"([^"]+)",[\s\S]*?"artist":\s*{[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?(?:"website":\s*"([^"]+)")?[\s\S]*?(?:"social_media":\s*\[\s*"([^"]+)")?/g;

  let m;
  // Note: The regex above is fragile. Let's try to just eval the array string by stripping the type annotation.

  let arrayString = match[1];
  // Remove comments if any (though JSON doesn't have them, JS objects might)
  // arrayString = arrayString.replace(/\/\/.*$/gm, ''); 

  // To eval this, we need to make sure it's valid JS. 
  // It likely contains "imageUrl: ..." which is fine.
  // We just need to assign it to a variable.

  let artists = [];
  try {
    // Wrap in parentheses to evaluate as expression
    artists = eval(arrayString);
  } catch (e) {
    console.error('Failed to eval artists data:', e.message);
    // Fallback: try to fix common issues?
    // Maybe it has some TS-specific syntax inside? Unlikely for a data array.
    return;
  }

  console.log(`Found ${artists.length} artists.`);

  const updates = {};

  for (const item of artists) {
    const { id, artist } = item;
    let urlToScrape = artist.website;

    if (!urlToScrape && artist.social_media && artist.social_media.length > 0) {
      urlToScrape = artist.social_media[0];
    }

    if (!urlToScrape) {
      console.log(`[${id}] No URL for ${artist.name}`);
      continue;
    }

    console.log(`[${id}] Fetching for ${artist.name}: ${urlToScrape}`);

    try {
      const { result } = await ogs({ url: urlToScrape });

      if (result.success && result.ogImage && result.ogImage.length > 0) {
        const imageUrl = result.ogImage[0].url;
        console.log(`   -> Found: ${imageUrl}`);
        updates[id] = imageUrl;
      } else {
        console.log(`   -> No OG image found.`);
      }
    } catch (error) {
      console.error(`   -> Error: ${error.message}`);
    }
  }

  console.log('\n--- Updates ---');
  console.log(JSON.stringify(updates, null, 2));

  fs.writeFileSync(path.join(__dirname, 'fetched_images.json'), JSON.stringify(updates, null, 2));
  console.log('Wrote updates to fetched_images.json');
}

fetchImages();
