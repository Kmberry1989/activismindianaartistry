const { search } = require('duck-duck-scrape');

async function test() {
    console.log("Searching for real events...");
    const results = await search('Indiana art exhibition opening this week', {
        safeSearch: 1
    });

    console.log("Results found:", results.results.length);
    results.results.slice(0, 3).forEach(r => {
        console.log(`\nTitle: ${r.title}`);
        console.log(`URL: ${r.url}`);
        console.log(`Snippet: ${r.description}`);
    });
}

test();
