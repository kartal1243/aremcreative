import { getVideos } from "@/lib/videos";
import YaptiklarimizClient from "./YaptiklarimizClient";

export default function Yaptiklarimiz() {
  const videos = getVideos();
  if (videos.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-xs font-bold tracking-widest text-accent">YAPTIKLARIMIZ</p>
      <h2 className="mt-2 font-display text-3xl md:text-5xl">Projelerimiz</h2>
      <YaptiklarimizClient videos={videos} />
    </section>
  );
}
