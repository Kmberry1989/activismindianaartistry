import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Megaphone, Newspaper, ArrowRight, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import staticNewsData from '@/lib/news-data.json';

type EventItem = {
  id: string;
  title: string;
  date: string;
  organization: string;
  category: string;
  summary: string;
  imageUrl: string;
  link: string;
  credit?: string;
};

export function CurrentEventsWidget() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        // Combine with static data if needed, or just use API data
        // For now, let's prefer API data, but fallback to static if API returns empty
        if (Array.isArray(data) && data.length > 0) {
          // We might want to merge or just replace. Let's replace for "current" events.
          setEvents(data);
        } else {
          setEvents(staticNewsData as EventItem[]);
        }
      } catch (error) {
        console.error("News fetch error:", error);
        // Fallback to static data on error
        setEvents(staticNewsData as EventItem[]);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (!loading && events.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">

        {/* Widget Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Megaphone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Current Happenings</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Art Activism <span className="text-muted-foreground">News & Events</span>
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2" asChild>
            <Link href="https://news.google.com/search?q=Indiana+Art+Activism" target="_blank">
              View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.slice(0, visibleCount).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={item.imageUrl || '/icons/actinartlogo.png'} // Use logo as fallback if no image
                        alt={item.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${!item.imageUrl ? 'p-8 opacity-50 object-contain' : ''}`}
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm hover:bg-background/90 text-foreground">
                          {item.category}
                        </Badge>
                      </div>
                      {/* Image Credit Overlay */}
                      {item.credit && (
                        <div className="absolute bottom-0 right-0 bg-black/60 text-white text-[10px] px-2 py-1 rounded-tl-md backdrop-blur-sm">
                          Source: {item.credit}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                        <span className="mx-1">•</span>
                        <span>{item.organization}</span>
                      </div>
                      <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {item.summary}
                      </p>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <Button asChild variant="ghost" size="sm" className="w-full justify-between hover:bg-muted group/btn">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ExternalLink className="h-3 w-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {visibleCount < events.length && (
              <div className="mt-8 flex justify-center">
                <Button variant="secondary" size="lg" onClick={() => setVisibleCount(prev => prev + 4)}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full gap-2" asChild>
            <Link href="https://news.google.com/search?q=Indiana+Art+Activism" target="_blank">
              View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}