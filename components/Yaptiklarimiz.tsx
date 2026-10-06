import { getVideos } from "@/lib/videos";

export default function Yaptiklarimiz() {
  const videos = getVideos();
  if (videos.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-xs font-bold tracking-widest text-accent">YAPTIKLARIMIZ</p>
      <h2 className="mt-2 font-display text-3xl md:text-5xl">Projelerimiz</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <figure key={v.src} className="overflow-hidden rounded-3xl border-4 border-ink bg-white shadow-[8px_8px_0_#073066]">
            <video src={v.src} controls preload="metadata" className="aspect-video w-full bg-black" />
            <figcaption className="p-4 font-semibold">{v.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
