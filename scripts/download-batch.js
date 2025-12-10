const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const urlLib = require('url');

const fetchedAssetsPath = path.join(__dirname, 'fetched_assets.json');
const artistsDataPath = path.join(__dirname, '../src/lib/artists-data.ts');
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(fetchedAssetsPath)) {
    console.error('fetched_assets.json not found. Run node scripts/fetch-batch.js first.');
    process.exit(1);
}

const assets = JSON.parse(fs.readFileSync(fetchedAssetsPath, 'utf8'));
let dataContent = fs.readFileSync(artistsDataPath, 'utf8');

function getDomain(link) {
    try {
        return new urlLib.URL(link).hostname.replace('www.', '');
    } catch { return ''; }
}

function getExtension(link) {
    const ext = path.extname(link.split('?')[0]);
    if (ext && ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext.toLowerCase())) return ext;
    return '.jpg';
}

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const proto = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);
        proto.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Status ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => file.close(resolve));
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function processDownloads() {
    console.log('Starting batch download and implementation...');
    let updateCount = 0;

    for (const [id, links] of Object.entries(assets)) {
        // --- Handle Artwork ---
        if (links.artwork) {
            const ext = getExtension(links.artwork);
            const filename = `artist-${id}${ext}`;
            const dest = path.join(publicDir, filename);
            const publicPath = `/${filename}`;
            const credit = getDomain(links.artwork);

            try {
                await downloadFile(links.artwork, dest);
                console.log(`[${id}] Downloaded Artwork: ${filename}`);

                // Regex to find this artist's block
                const idBlockRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"artwork":\\s*{)`, 'g');
                
                // 1. Update Image URL
                // Look for imageUrl inside the artwork block for this ID
                // This is complex with regex, so we look for the specific pattern currently in file
                const imgRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"imageUrl":\\s*")[^"]*(")`);
                if (imgRegex.test(dataContent)) {
                    dataContent = dataContent.replace(imgRegex, `$1${publicPath}$2`);
                }

                // 2. Update/Add Credit
                const creditRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"imageUrl":\\s*".*?",\\s*)("credit":\\s*".*?",\\s*)?`);
                if (creditRegex.test(dataContent)) {
                    dataContent = dataContent.replace(creditRegex, `$1"credit": "${credit}",\n      `);
                }
                updateCount++;

            } catch (e) {
                console.error(`[${id}] Failed artwork download: ${e.message}`);
            }
        }

        // --- Handle Portrait ---
        if (links.portrait) {
            const ext = getExtension(links.portrait);
            const filename = `portrait-${id}${ext}`;
            const dest = path.join(publicDir, filename);
            const publicPath = `/${filename}`;
            const credit = getDomain(links.portrait);

            try {
                await downloadFile(links.portrait, dest);
                console.log(`[${id}] Downloaded Portrait: ${filename}`);

                // We need to insert 'portraitUrl' and 'portraitCredit' into the 'artist' block
                // Strategy: Find "name": "Artist Name" and append after it
                
                // 1. Check if portraitUrl already exists for this ID
                const hasPortrait = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"portraitUrl":`);
                
                if (hasPortrait.test(dataContent)) {
                    // Update existing
                    const pUrlRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"portraitUrl":\\s*")[^"]*(")`);
                    dataContent = dataContent.replace(pUrlRegex, `$1${publicPath}$2`);
                } else {
                    // Insert new fields. Find the name field in the artist block for this ID
                    const insertRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"artist":\\s*{[\\s\\S]*?"name":\\s*".*?")`);
                    const newFields = `,\n      "portraitUrl": "${publicPath}",\n      "portraitCredit": "${credit}"`;
                    dataContent = dataContent.replace(insertRegex, `$1${newFields}`);
                }
                updateCount++;

            } catch (e) {
                console.error(`[${id}] Failed portrait download: ${e.message}`);
            }
        }
    }

    fs.writeFileSync(artistsDataPath, dataContent, 'utf8');
    console.log(`\nSuccess! Updated ${updateCount} entries in artists-data.ts`);
}

processDownloads();