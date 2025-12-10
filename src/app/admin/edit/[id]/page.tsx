import { notFound } from 'next/navigation'
import { artists } from '@/lib/artists-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/header'

// Generate static pages for all artists at build time
export async function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }))
}

export default async function EditArtistPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params promise (Next.js 15 requirement)
  const { id } = await params
  const artist = artists.find((a) => a.id === id)

  if (!artist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-10 px-4 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Edit Artist</h1>
          <span className="text-sm text-muted-foreground">ID: {artist.id}</span>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Artist Name</Label>
            <Input id="name" name="name" defaultValue={artist.artist.name} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title of Work</Label>
            <Input id="title" name="title" defaultValue={artist.artwork.title} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="medium">Medium</Label>
            <Input id="medium" name="medium" defaultValue={artist.artwork.medium} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" defaultValue={artist.artwork.location} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea id="bio" name="bio" defaultValue={artist.artist.bio} rows={5} />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="secondary">Cancel</Button>
            <Button type="submit" disabled>Save Changes (Static Read-Only)</Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Note: Since this site is deployed statically on Vercel, edits cannot be persisted to the file system.
          </p>
        </form>
      </main>
    </div>
  )
}