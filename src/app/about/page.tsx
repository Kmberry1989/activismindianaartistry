'use client';

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { artists } from '@/lib/artists-data'
import Masonry from 'react-masonry-css'

export default function AboutPage() {
    // Select a few random artist images for the gallery
    const featuredImages = artists.slice(0, 9).map(a => a.artwork.imageUrl);

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
                
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black font-heading tracking-tighter mb-6"
                    >
                        About the Project
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                    >
                        The Indiana Art Activist Directory is a living archive documenting the intersection of creative expression and social justice across the Hoosier state.
                    </motion.p>
                </div>

                {/* Mission Section with Side Image */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                         <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image 
                                src="/hero/protest-crowd.png" 
                                alt="Protest Art" 
                                fill 
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">Voices of Change</p>
                                <p className="text-sm opacity-80">Art as a catalyst for dialogue.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="prose dark:prose-invert lg:prose-lg"
                    >
                        <h2 className="text-3xl font-bold mb-4 font-heading">Our Mission</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            We believe that art is not just a reflection of society, but a tool for shaping it. From the WPA murals of the 1930s to the Black Lives Matter street paintings of 2020, Indiana artists have long used their work to advocate for labor rights, racial justice, gender equality, and environmental stewardship.
                        </p>
                        <p className="text-lg leading-relaxed">
                            This project aims to map these contributions, ensuring that the history of activist art in Indiana is preserved, celebrated, and accessible to all.
                        </p>
                    </motion.div>
                </div>

                {/* Visual Grid Divider */}
                <div className="mb-24">
                    <h2 className="text-center text-2xl font-bold mb-8 font-heading">Featured Works</h2>
                    <Masonry
                        breakpointCols={{ default: 3, 800: 2, 500: 1 }}
                        className="flex w-auto -ml-4"
                        columnClassName="pl-4 bg-clip-padding"
                    >
                        {featuredImages.map((src, i) => (
                            <div key={i} className="mb-4 relative rounded-lg overflow-hidden h-48 md:h-64">
                                <Image 
                                    src={src || '/placeholder.jpg'} 
                                    alt="Featured artwork"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>

                {/* Features Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 font-heading">How to Use This Archive</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🗺️</div>
                            <h3 className="font-bold text-xl mb-2">Explore the Map</h3>
                            <p className="text-muted-foreground text-sm">Visualize the geographic spread of art activism across neighborhoods and cities.</p>
                        </div>
                        <div className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">⏳</div>
                            <h3 className="font-bold text-xl mb-2">Browse Timeline</h3>
                            <p className="text-muted-foreground text-sm">See how artistic movements align with historical events in Indiana’s history.</p>
                        </div>
                        <div className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">🖨️</div>
                            <h3 className="font-bold text-xl mb-2">Create a Zine</h3>
                            <p className="text-muted-foreground text-sm">Curate your own collection of artists and print a custom zine for educational use.</p>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}