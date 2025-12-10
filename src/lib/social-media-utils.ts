export interface SocialMediaLink {
    platform: string;
    handle: string;
    url: string;
    icon: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'tiktok' | 'linkedin' | 'globe';
}

/**
 * Parses a social media URL to extract platform and handle
 */

export function parseSocialMediaLink(inputUrl: string): SocialMediaLink {
    const url = inputUrl.trim();

    // 1. Handle N/A or empty
    if (!url || url.toLowerCase().startsWith('n/a') || url.toLowerCase() === 'none') {
        return {
            platform: 'N/A',
            handle: url,
            url: '',
            icon: 'globe'
        };
    }

    // 2. Heuristics for non-standard URLs (e.g. "IG: @handle")
    // If it doesn't start with http/https, try to parse it manually
    if (!url.match(/^https?:\/\//i)) {

        // Instagram: "IG: @handle" or "Instagram: handle"
        const igMatch = url.match(/(?:IG|Instagram):?\s*@?([\w.]+)/i);
        if (igMatch) {
            const handle = igMatch[1];
            return {
                platform: 'Instagram',
                handle: `@${handle}`,
                url: `https://www.instagram.com/${handle}/`,
                icon: 'instagram'
            };
        }

        // Facebook: "FB: Name" or "Facebook: Name"
        const fbMatch = url.match(/(?:FB|Facebook):?\s*(.+)/i);
        if (fbMatch) {
            let handle = fbMatch[1].trim();
            // Remove "FB: " prefix if captured (regex matches after FB: usually but just in case)
            if (handle.toUpperCase().startsWith('FB:')) handle = handle.substring(3).trim();

            // If it looks like a clean handle (no spaces), assume direct link, otherwise search
            const isCleanHandle = /^[a-zA-Z0-9.]+$/.test(handle);
            const fbUrl = isCleanHandle
                ? `https://www.facebook.com/${handle}`
                : `https://www.facebook.com/search/top?q=${encodeURIComponent(handle)}`;

            return {
                platform: 'Facebook',
                handle: handle,
                url: fbUrl,
                icon: 'facebook'
            };
        }

        // Twitter/X: "Twitter: @handle"
        const twMatch = url.match(/(?:Twitter|X):?\s*@?(\w+)/i);
        if (twMatch) {
            const handle = twMatch[1];
            return {
                platform: 'Twitter',
                handle: `@${handle}`,
                url: `https://twitter.com/${handle}`,
                icon: 'twitter'
            };
        }

        // Generic "@handle" -> Assume Instagram as default for this dataset
        if (url.startsWith('@')) {
            const handle = url.substring(1).split(' ')[0]; // Take first word if multiple
            return {
                platform: 'Instagram',
                handle: `@${handle}`,
                url: `https://www.instagram.com/${handle}/`,
                icon: 'instagram'
            };
        }

        // If it looks like a domain "example.com", prepend https://
        if (url.match(/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/)) {
            return parseSocialMediaLink(`https://${url}`);
        }
    }

    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.toLowerCase();
        const pathname = urlObj.pathname;

        // Instagram
        if (hostname.includes('instagram.com')) {
            const match = pathname.match(/\/([\w.]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'Instagram',
                handle: handle ? `@${handle}` : urlObj.hostname,
                url,
                icon: 'instagram'
            };
        }

        // Facebook
        if (hostname.includes('facebook.com')) {
            const match = pathname.match(/\/([\w.]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'Facebook',
                handle: handle === 'groups' ? 'Group' : (handle || urlObj.hostname),
                url,
                icon: 'facebook'
            };
        }

        // Twitter/X
        if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
            const match = pathname.match(/\/([\w]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'Twitter',
                handle: handle ? `@${handle}` : urlObj.hostname,
                url,
                icon: 'twitter'
            };
        }

        // YouTube
        if (hostname.includes('youtube.com')) {
            const match = pathname.match(/\/([\w@]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'YouTube',
                handle: handle || urlObj.hostname,
                url,
                icon: 'youtube'
            };
        }

        // TikTok
        if (hostname.includes('tiktok.com')) {
            const match = pathname.match(/\/@?([\w.]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'TikTok',
                handle: handle ? `@${handle}` : urlObj.hostname,
                url,
                icon: 'tiktok'
            };
        }

        // LinkedIn
        if (hostname.includes('linkedin.com')) {
            const match = pathname.match(/\/in\/([\w-]+)\/?/);
            const handle = match ? match[1] : '';
            return {
                platform: 'LinkedIn',
                handle: handle || urlObj.hostname,
                url,
                icon: 'linkedin'
            };
        }

        // Default/Unknown
        return {
            platform: urlObj.hostname,
            handle: urlObj.hostname,
            url,
            icon: 'globe'
        };
    } catch (error) {
        // If URL parsing fails, return a fallback
        return {
            platform: 'Link',
            handle: url,
            url, // Keep original input as url, even if broken, or could set to ''
            icon: 'globe'
        };
    }
}
