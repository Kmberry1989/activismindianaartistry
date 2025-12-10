'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Share2, Link2, Mail, MessageCircle, Check } from 'lucide-react';
import { trackEvent } from '@/app/actions/analytics'; // Import tracking

interface ShareButtonProps {
    url: string;
    title: string;
    description?: string;
}

export function ShareButton({ url, title, description }: ShareButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleTrack = (platform: string) => {
        // Fire and forget tracking
        trackEvent(`share_${platform}`);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            handleTrack('copy_link'); // Track copy
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleNativeShare = async () => {
        if (typeof window !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url,
                });
                handleTrack('native_share'); // Track native
            } catch (err) {
                console.log('Share cancelled');
            }
        }
    };

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this artist: ${url}`)}`,
    };

    const hasNativeShare = typeof window !== 'undefined' && 'share' in navigator;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                {hasNativeShare && (
                    <>
                        <DropdownMenuItem onClick={handleNativeShare}>
                            <Share2 className="mr-2 h-4 w-4" />
                            Share...
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </>
                )}

                <DropdownMenuItem onClick={handleCopyLink}>
                    {copied ? (
                        <>
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Link2 className="mr-2 h-4 w-4" />
                            Copy Link
                        </>
                    )}
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild onClick={() => handleTrack('email')}>
                    <a href={shareLinks.email} target="_blank" rel="noopener noreferrer">
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                    </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild onClick={() => handleTrack('facebook')}>
                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                    </a>
                </DropdownMenuItem>

                <DropdownMenuItem asChild onClick={() => handleTrack('twitter')}>
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Twitter/X
                    </a>
                </DropdownMenuItem>
                {/* ... other items similar update ... */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}