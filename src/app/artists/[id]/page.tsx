import { notFound } from 'next/navigation'
import { artists } from '@/lib/artists-data'
import { ArtistProfile } from './artist-profile'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

// Generate static params for all known artists at build time
export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }))
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const artist = artists.find((a) => a.id === id)

  if (!artist) {
    return {
      title: 'Artist Not Found | Indiana Art Activist',
    }
  }

  const title = `${artist.artist.name} - ${artist.artwork.title} | Indiana Art Activist`
  const description = artist.artwork.description
    ? artist.artwork.description.substring(0, 160)
    : `Explore the activist art of ${artist.artist.name} in Indiana.`

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: artist.artwork.imageUrl,
          width: 800,
          height: 600,
          alt: artist.artwork.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [artist.artwork.imageUrl],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  // Await the params promise
  const { id } = await params
  const artist = artists.find((a) => a.id === id)

  if (!artist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <ArtistProfile artist={artist} />
      </main>
      <Footer />
    </div>
  )
}