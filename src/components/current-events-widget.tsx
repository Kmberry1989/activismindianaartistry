import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Megaphone, Newspaper, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import newsData from '@/lib/news-data.json';

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
  const events = newsData as EventItem[];

  if (events.length === 0) {
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.imageUrl || '/placeholder.jpg'} // Fallback if empty
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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