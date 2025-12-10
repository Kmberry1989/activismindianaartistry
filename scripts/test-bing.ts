const RSS_URL = 'https://www.bing.com/news/search?q=Indiana+Arts&format=rss';

async function test() {
    console.log('Fetching Bing RSS...');
    const response = await fetch(RSS_URL);
    const xml = await response.text();

    const itemMatch = xml.match(/<item>[\s\S]*?<link>(.*?)<\/link>/);

    if (itemMatch) {
        const link = itemMatch[1];
        console.log('Bing Link:', link);
    } else {
        console.log('No item link found.');
        console.log('XML Snippet:', xml.substring(0, 500));
    }
}

test();
