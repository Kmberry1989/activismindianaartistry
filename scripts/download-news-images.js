const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const NEWS_DATA_FILE = path.join(__dirname, '../src/lib/news-data.json');
const PUBLIC_NEWS_DIR = path.join(__dirname, '../public/news');

if (!fs.existsSync(PUBLIC_NEWS_DIR)) {
    fs.mkdirSync(PUBLIC_NEWS_DIR, { recursive: true });
}

if (!fs.existsSync(NEWS_DATA_FILE)) {
    console.error('news-data.json not found. Run fetch-news.ts first.');
    process.exit(1);
}

const newsItems = JSON.parse(fs.readFileSync(NEWS_DATA_FILE, 'utf8'));

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(dest);

        protocol.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

function getExtension(url) {
    const ext = path.extname(url.split('?')[0]);
    if (ext && ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext.toLowerCase())) {
        return ext;
    }
    return '.jpg';
}

async function main() {
    console.log('Downloading news images...');

    let updatesCount = 0;

    for (const item of newsItems) {
        if (!item.imageUrl || item.imageUrl.startsWith('/')) {
            continue; // Skip if no image or already local
        }

        const ext = getExtension(item.imageUrl);
        const filename = `${item.id}${ext}`;
        const destPath = path.join(PUBLIC_NEWS_DIR, filename);
        const publicPath = `/news/${filename}`;

        console.log(`[${item.id}] Downloading ${item.imageUrl} -> ${filename}`);

        try {
            await downloadImage(item.imageUrl, destPath);
            item.imageUrl = publicPath;
            updatesCount++;
        } catch (error) {
            console.error(`[${item.id}] Error downloading: ${error.message}`);
            // Keep original URL or clear it? Let's keep it as fallback or clear if broken.
            // For now, keep original.
        }
    }

    if (updatesCount > 0) {
        fs.writeFileSync(NEWS_DATA_FILE, JSON.stringify(newsItems, null, 2));
        console.log(`\nUpdated ${updatesCount} items in news-data.json`);
    } else {
        console.log('\nNo new images downloaded.');
    }
}

main();
