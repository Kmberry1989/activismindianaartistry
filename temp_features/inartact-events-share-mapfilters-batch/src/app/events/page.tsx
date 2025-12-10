import EventsPageClient from "@/components/events/EventsPageClient";
import { eventsData } from "@/lib/events-data";

export default function EventsPage() {
  return <EventsPageClient events={eventsData} />;
}
