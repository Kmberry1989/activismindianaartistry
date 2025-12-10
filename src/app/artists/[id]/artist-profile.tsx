'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ExternalLink, MapPin, Info, Globe, Newspaper, Instagram, Facebook } from 'lucide-react';
import { Artist } from '@/lib/types';
// import { LikeButton } from '@/components/LikeButton'; // Keeping original commented import
import { ShareButton } from '@/components/ShareButton';
import { parseSocialMediaLink } from '@/lib/social-media-utils';
import { ImageLightbox } from '@/components/ImageLightbox';
import { TextToSpeech } from '@/components/text-to-speech';

interface ArtistProfileProps {
  artist: Artist;
}

export function ArtistProfile({ artist }: ArtistProfileProps) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const [showLightbox, setShowLightbox] = useState(false);

  // Combine text for the screen reader
  const readableText = `Artist Profile for ${artist.artist.name}. ${artist.artist.isAlive ? '' : `Born ${artist.artist.born}, Died ${artist.artist.died}.`
    } ${artist.artist.bio || ''} . The Work: ${artist.artwork.title}. ${artist.artwork.description || ''
    }`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Directory
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left Column: Artwork Image */}
        <div className="space-y-8">
          <figure>
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border shadow-md cursor-pointer group"
              onClick={() => setShowLightbox(true)}
            >
              <Image
                src={artist.artwork.imageUrl || '/placeholder.svg?height=800&width=600'}
                alt={artist.artwork.alt || `Artwork by ${artist.artist.name}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-md">
                  Click to view fullscreen
                </p>
              </div>
              {artist.artwork.credit && (
                <div className="absolute bottom-3 left-3 right-3 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur">
                    <Info className="w-3.5 h-3.5" />
                    Image courtesy of {artist.artwork.credit}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-2 flex justify-center">
              <Badge variant="outline" className="text-[10px] uppercase tracking-wide">
                Non-commercial / educational use
              </Badge>
            </div>
          </figure>

          {/* Key Details Card */}
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="font-semibold mb-4 flex items-center text-lg">
              <Info className="w-5 h-5 mr-2 text-primary" />
              Key Details
            </h3>
            <dl className="grid gap-4 text-sm">
              <div className="grid grid-cols-3 gap-1 items-baseline">
                <dt className="font-medium text-muted-foreground">Title</dt>
                <dd className="col-span-2 font-semibold">{artist.artwork.title}</dd>
              </div>
              {artist.artwork.medium && (
                <>
                  <Separator />
                  <div className="grid grid-cols-3 gap-1 items-baseline">
                    <dt className="font-medium text-muted-foreground">Medium</dt>
                    <dd className="col-span-2">{artist.artwork.medium}</dd>
                  </div>
                </>
              )}
              {artist.artwork.date && (
                <>
                  <Separator />
                  <div className="grid grid-cols-3 gap-1 items-baseline">
                    <dt className="font-medium text-muted-foreground">Date</dt>
                    <dd className="col-span-2">{artist.artwork.date}</dd>
                  </div>
                </>
              )}
              {artist.artwork.location && (
                <>
                  <Separator />
                  <div className="grid grid-cols-3 gap-1 items-baseline">
                    <dt className="font-medium text-muted-foreground">Location</dt>
                    <dd className="col-span-2 flex items-start">
                      <Link href="/activists/map" className="flex items-center hover:text-primary hover:underline transition-colors">
                        <MapPin className="w-3.5 h-3.5 mr-1.5 mt-0.5 text-muted-foreground shrink-0" />
                        {artist.artwork.location} (View on Map)
                      </Link>
                    </dd>
                  </div>
                </>
              )}
            </dl>

            {(artist.artwork.categories?.length || artist.artwork.tags?.length) ? (
              <>
                <Separator className="my-4" />
                <div className="space-y-3">
                  {artist.artwork.categories && artist.artwork.categories.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        Categories
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {artist.artwork.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {artist.artwork.tags && artist.artwork.tags.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {artist.artwork.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Right Column: Bio & Description */}
        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              {artist.artwork.cause && (
                <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">
                  {artist.artwork.cause}
                </Badge>
              )}
              {!artist.artist.isAlive && (
                <Badge variant="secondary" className="text-sm">
                  Historical Figure
                </Badge>
              )}
            </div>

            {/* NEW: Flex Container for Name + Portrait */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {artist.artist.name}
                </h1>
                {artist.artist.born && artist.artist.died && (
                  <p className="text-lg text-muted-foreground">
                    ({artist.artist.born} – {artist.artist.died})
                  </p>
                )}
              </div>

              {/* NEW: Artist Portrait Display */}
              {artist.artist.portraitUrl && (
                <figure className="shrink-0 flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                    <Image
                      src={artist.artist.portraitUrl}
                      alt={artist.artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {artist.artist.portraitCredit && (
                    <figcaption className="text-[11px] text-muted-foreground text-center">
                      Portrait credit: {artist.artist.portraitCredit}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>

            <div className="mt-4">
              <TextToSpeech text={readableText} label="Listen to Profile" />
            </div>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            {artist.artist.bio && (
              <>
                <h3 className="text-xl font-semibold mb-3">About the Artist</h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {artist.artist.bio}
                </p>
              </>
            )}

            {artist.artwork.description && (
              <>
                <h3 className="text-xl font-semibold mb-3">The Work</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {artist.artwork.description}
                </p>
              </>
            )}

            <div className="mt-8 p-4 bg-muted/30 rounded-xl border flex gap-3 items-start">
              <Info className="w-5 h-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm font-semibold">Usage & attribution</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please credit {artist.artist.name}
                  {artist.artwork.credit && (
                    <>
                      {' '}
                      — image courtesy of {artist.artwork.credit}
                    </>
                  )}{' '}
                  when sharing or studying this work. For corrections or takedown requests, email{' '}
                  <a
                    href="mailto:contact@actinart.org?subject=Attribution%20or%20Takedown%20Request"
                    className="font-medium text-primary hover:underline"
                  >
                    contact@actinart.org
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Online Links & Contact Info */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl border">
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider flex items-center text-primary">
                <Globe className="mr-2 h-4 w-4" />
                Connect & Explore
              </h4>
              <div className="flex flex-wrap gap-3">
                {artist.artist.website && (
                  <Button variant="default" size="sm" asChild>
                    <a href={artist.artist.website} target="_blank" rel="noopener noreferrer">
                      Official Website
                    </a>
                  </Button>
                )}

                {artist.artwork.portfolio_url && (
                  <Button variant="secondary" size="sm" asChild>
                    <a href={artist.artwork.portfolio_url} target="_blank" rel="noopener noreferrer">
                      View Portfolio
                    </a>
                  </Button>
                )}

                {artist.artist.social_media && artist.artist.social_media.map((link, index) => {
                  const socialLink = parseSocialMediaLink(link);
                  if (!socialLink.url) return null; // Skip invalid or N/A links

                  const IconComponent =
                    socialLink.icon === 'instagram'
                      ? Instagram
                      : socialLink.icon === 'facebook'
                        ? Facebook
                        : Globe;
                  return (
                    <Button key={index} variant="outline" size="sm" asChild>
                      <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="mr-2 h-3 w-3" />
                        {socialLink.handle}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Media Coverage Section */}
            {artist.artwork.news_media_coverage && artist.artwork.news_media_coverage.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Newspaper className="w-5 h-5 mr-2" />
                  In the Media
                </h3>
                <div className="grid gap-3">
                  {artist.artwork.news_media_coverage.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium truncate mr-4">{link}</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Embeds Section */}
            {(artist.artwork.mixcloudEmbed || artist.artwork.vimeoUrl) && (
              <div className="mt-8 space-y-6">
                {artist.artwork.mixcloudEmbed && (
                  <div className="rounded-xl overflow-hidden border bg-card shadow-sm">
                    <div className="p-4 border-b bg-muted/30">
                      <h3 className="font-semibold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                        Audio Feature
                      </h3>
                    </div>
                    <div className="p-4" dangerouslySetInnerHTML={{ __html: artist.artwork.mixcloudEmbed }} />
                  </div>
                )}

                {artist.artwork.vimeoUrl && (
                  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border">
                    <iframe
                      src={artist.artwork.vimeoUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto pt-8 border-t">
            {/* <LikeButton artistId={artist.id} /> */}
            {/* Favorite Button Removed as per request */}
            <ShareButton
              url={currentUrl}
              title={`${artist.artist.name} - ${artist.artwork.title}`}
              description={artist.artwork.description}
            />

            {artist.artwork.searchQuery && (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto shadow-sm">
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    artist.artwork.searchQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Research Artist
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {showLightbox && (
        <ImageLightbox
          src={artist.artwork.imageUrl || '/placeholder.svg?height=800&width=600'}
          alt={artist.artwork.alt || `Artwork by ${artist.artist.name}`}
          credit={artist.artwork.credit}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  );
}