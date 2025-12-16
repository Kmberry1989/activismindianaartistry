
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export const dynamic = 'force-dynamic';

interface NewsItem {
    id: string;
    title: string;
    date: string;
    organization: string;
    category: string;
    summary: string;
    imageUrl: string;
    link: string;
    credit?: string;
}

export async function GET() {
    try {
        const parser = new Parser();

        // Google News RSS Feed for "Indiana Art Activism"
        // Using a broader query to ensure we get results
        const feedUrl = 'https://news.google.com/rss/search?q=Indiana+Art+Activism+OR+Indiana+Arts+Commission&hl=en-US&gl=US&ceid=US:en';

        const feed = await parser.parseURL(feedUrl);

        const newsItems: NewsItem[] = feed.items.slice(0, 8).map((item, index) => {
            // Extract organization/source from title if possible (usually "Title - Source")
            let source = 'News';
            let title = item.title || 'Untitled';

            const lastDashIndex = title.lastIndexOf(' - ');
            if (lastDashIndex > -1) {
                source = title.substring(lastDashIndex + 3);
                title = title.substring(0, lastDashIndex);
            } else if (item.creator) {
                source = item.creator;
            }

            // Try to find an image in content or contentSnippet if generic RSS doesn't have it
            // Note: Google News RSS doesn't always provide images easily, so we might need a placeholder logic
            // or try to extract from description.
            // For now, we will leave imageUrl empty or use a placeholder in the frontend.

            return {
                id: `rss-${index}`,
                title: title,
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }) : new Date().toLocaleDateString(),
                organization: source,
                category: 'News',
                summary: item.contentSnippet || item.content || 'Click to read full story.',
                imageUrl: '', // Frontend will handle fallback
                link: item.link || '#',
                credit: source
            };
        });

        return NextResponse.json(newsItems);

    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
    }
}
