'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { trackEvent } from '@/app/actions/analytics'; // Import tracking

interface LikeButtonProps {
    artistId: string;
}

function getClientId(): string {
    if (typeof window === 'undefined') return '';
    let clientId = localStorage.getItem('clientId');
    if (!clientId) {
        clientId = crypto.randomUUID();
        localStorage.setItem('clientId', clientId);
    }
    return clientId;
}

export function LikeButton({ artistId }: LikeButtonProps) {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        async function fetchLikes() {
            try {
                const response = await fetch(`/api/likes/${artistId}`);
                const data = await response.json();
                setLikes(data.count);
                const likedArtists = JSON.parse(localStorage.getItem('likedArtists') || '{}');
                setHasLiked(likedArtists[artistId] || false);
            } catch (error) {
                console.error('Error fetching likes:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchLikes();
    }, [artistId]);

    const handleLike = async () => {
        if (hasLiked || isSubmitting) return;

        setIsSubmitting(true);
        const clientId = getClientId();

        try {
            const response = await fetch(`/api/likes/${artistId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clientId }),
            });

            const data = await response.json();
            setLikes(data.count);

            if (!data.alreadyLiked) {
                setHasLiked(true);
                const likedArtists = JSON.parse(localStorage.getItem('likedArtists') || '{}');
                likedArtists[artistId] = true;
                localStorage.setItem('likedArtists', JSON.stringify(likedArtists));

                // Track the event
                trackEvent('artist_like');
            }
        } catch (error) {
            console.error('Error liking:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <Button variant="outline" size="lg" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
            </Button>
        );
    }

    return (
        <Button
            variant={hasLiked ? "default" : "outline"}
            size="lg"
            onClick={handleLike}
            disabled={hasLiked || isSubmitting}
            className="group relative transition-all"
        >
            <span className="text-2xl mr-2 transition-transform group-hover:scale-110">
                👊
            </span>
            <span className="font-semibold">{likes}</span>
            {hasLiked && (
                <span className="ml-2 text-xs opacity-75">Liked!</span>
            )}
        </Button>
    );
}