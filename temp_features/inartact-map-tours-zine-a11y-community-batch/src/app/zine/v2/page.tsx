import ZineBuilderV2 from "@/components/zine/ZineBuilderV2";
import { artists as artistsData } from "@/lib/artists-data";

export default function ZineV2Page() {
  return <ZineBuilderV2 artists={artistsData} />;
}
