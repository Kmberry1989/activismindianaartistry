import fs from 'fs';
import path from 'path';
import ogs from 'open-graph-scraper';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RSS_URL = 'https://www.bing.com/news/search?q=Indiana+Arts&format=rss';
const OUTPUT_FILE = path.join(__dirname, '../src/lib/news-data.json');

async function fetchNews() {
    console.log('Fetching RSS feed from Bing...');
    const response = await fetch(RSS_URL);
    const xml = await response.text();

    // Regex to parse RSS items
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    const newsItems = [];

    console.log(`Found ${items.length} items. Processing candidates...`);

    // Parse all items first to sort by date
    const candidates = items.map(item => {
        const titleMatch = item.match(/<title>(.*?)<\/title>/);
        const linkMatch = item.match(/<link>(.*?)<\/link>/);
        const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

        const pubDateStr = pubDateMatch ? pubDateMatch[1] : '';
        const dateObj = pubDateStr ? new Date(pubDateStr) : new Date(0); // Fallback to epoch if no date

        return {
            raw: item,
            dateObj,
            titleMatch,
            linkMatch,
            pubDateStr
        };
    });

    // Sort by date descending (Newest first)
    candidates.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

    console.log(`Found ${candidates.length} items. Processing sorted candidates for freshness...`);

    // Process sorted candidates
    for (let i = 0; i < Math.min(candidates.length, 50); i++) {
        if (newsItems.length >= 12) break; // Get up to 12 items for "Load More"

        const candidate = candidates[i];
        const { titleMatch, linkMatch, pubDateStr, dateObj } = candidate;

        // Skip if older than 1 year (optional, but requested "years old articles" issue)
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        if (dateObj < oneYearAgo) {
            console.log(`    -> SKIPPED (Too old: ${dateObj.toLocaleDateString()})`);
            continue;
        }

        let title = titleMatch ? titleMatch[1] : 'News Update';
        let link = linkMatch ? linkMatch[1] : '';
        const date = pubDateStr ? new Date(pubDateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recent';

        // Extract real URL from Bing link
        let realUrl = link;
        const urlParamMatch = link.match(/url=(.*?)(&|$)/);
        if (urlParamMatch) {
            try {
                realUrl = decodeURIComponent(urlParamMatch[1]);
            } catch (e) {
                console.log('Failed to decode Bing URL param');
            }
        }

        let source = 'News Source';
        try {
            source = new URL(realUrl).hostname.replace('www.', '');
        } catch (e) { }

        console.log(`[${i}] Checking candidate (${date}): ${title}`);

        let imageUrl = '';

        if (realUrl) {
            try {
                const { result } = await ogs({ url: realUrl });
                if (result.success && result.ogImage && result.ogImage.length > 0) {
                    imageUrl = result.ogImage[0].url;
                    // Check if URL is valid (basic check)
                    if (!imageUrl.startsWith('http')) {
                        console.log(`    -> Invalid image URL format: ${imageUrl}`);
                        imageUrl = '';
                    } else {
                        console.log(`    -> Found Valid OG Image: ${imageUrl}`);
                    }
                }
            } catch (e) {
                console.log(`    -> Failed to fetch OG image`);
            }
        }

        // ONLY add if we have a valid image
        if (imageUrl) {
            newsItems.push({
                id: `news-${newsItems.length}`,
                title,
                date,
                organization: source,
                category: 'News',
                summary: 'Click to read full story.',
                imageUrl: imageUrl,
                link: realUrl,
                credit: source
            });
            console.log(`    -> ADDED to list (Total: ${newsItems.length})`);
        } else {
            console.log(`    -> SKIPPED (No valid image)`);
        }
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2));
    console.log(`\nSaved ${newsItems.length} items to ${OUTPUT_FILE}`);
}

fetchNews();
