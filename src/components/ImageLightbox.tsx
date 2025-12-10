'use client';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageLightboxProps {
    src: string;
    alt: string;
    credit?: string;
    onClose: () => void;
}

export function ImageLightbox({ src, alt, credit, onClose }: ImageLightboxProps) {
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartRef.current) return;
        const touch = event.changedTouches[0];
        const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
        const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

        // Close when the user swipes or drags meaningfully in any direction
        if (deltaX > 40 || deltaY > 40) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                aria-label="Close fullscreen"
            >
                <X className="h-6 w-6 text-white" />
            </button>

            <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={onClose}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-center">
                {credit && (
                    <p className="text-white text-sm font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        Image credit: {credit}
                    </p>
                )}
                <p className="text-white/80 text-sm">Tap, click, or swipe to close</p>
            </div>
        </div>
    );
}
