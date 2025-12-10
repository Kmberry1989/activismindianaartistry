const TEST_RSS_URL = 'https://news.google.com/rss/search?q=Indiana+Art+Activism&hl=en-US&gl=US&ceid=US:en';

async function test() {
    console.log('Fetching RSS...');
    const response = await fetch(TEST_RSS_URL);
    const xml = await response.text();

    const itemMatch = xml.match(/<item>[\s\S]*?<link>(.*?)<\/link>/);

    if (itemMatch) {
        const googleLink = itemMatch[1];
        console.log('Google Link:', googleLink);

        try {
            const res = await fetch(googleLink, { redirect: 'follow' });
            console.log('Final URL:', res.url);

            if (res.url.includes('news.google.com')) {
                console.log('WARNING: Still on Google domain.');
                const text = await res.text();

                const hrefs = text.match(/href="(https?:\/\/.*?)"/g);
                if (hrefs) {
                    hrefs.forEach(h => {
                        if (!h.includes('google.com') && !h.includes('gstatic.com')) {
                            console.log('Found external link:', h);
                        }
                    });
                }
            }
        } catch (e) {
            console.error('Error fetching link:', e);
        }
    } else {
        console.log('No item link found.');
    }
}

test();
