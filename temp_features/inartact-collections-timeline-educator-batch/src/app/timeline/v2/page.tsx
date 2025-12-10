import TimelineV2PageClient from "@/components/timeline/TimelineV2PageClient";
import { artistsData } from "@/lib/artists-data";

export default function TimelineV2Page() {
  return <TimelineV2PageClient artists={artistsData} />;
}
