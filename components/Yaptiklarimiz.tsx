import { getVideos } from "@/lib/videos";
import YaptiklarimizClient from "./YaptiklarimizClient";

export default function Yaptiklarimiz() {
  const videos = getVideos();
  if (videos.length === 0) return null;
  return <YaptiklarimizClient videos={videos} />;
}
