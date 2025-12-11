const Parser = require('rss-parser');
const parser = new Parser();

const URLS_TO_TRY = [
    'https://www.wfyi.org/rss/news/arts',
    'https://www.wfyi.org/rss/arts',
    'https://www.wfyi.org/feeds/arts',
    'https://www.wfyi.org/rss/arts-culture',
    'https://www.wfyi.org/news/rss/Arts'
];

async function test() {
    console.log("Testing RSS feeds...");

    for (const url of URLS_TO_TRY) {
        try {
            console.log(`Trying ${url}...`);
            const feed = await parser.parseURL(url);
            console.log(`SUCCESS: ${url}`);
            console.log(`Title: ${feed.title}`);
            console.log(`First item: ${feed.items[0]?.title}`);
            return; // Found one!
        } catch (err) {
            console.log(`Failed: ${url}`);
        }
    }
}

test();
