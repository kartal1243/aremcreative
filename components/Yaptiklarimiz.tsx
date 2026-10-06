import { getVideos } from "@/lib/videos";

export default function Yaptiklarimiz() {
  const videos = getVideos();
  if (videos.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-xs font-bold tracking-widest text-accent">YAPTIKLARIMIZ</p>
      <h2 className="mt-2 font-display text-3xl md:text-5xl">Projelerimiz</h2>
      <div className="mt-8 flex flex-wrap gap-8">
        {videos.map((v) => (
          <figure key={v.src} className="mx-auto w-full max-w-[280px]">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-ink bg-ink p-2 shadow-[10px_10px_0_#073066]">
              <video src={v.src} controls preload="metadata" className="aspect-[9/16] w-full rounded-[2rem] bg-black object-cover" />
            </div>
            <figcaption className="mt-3 text-center font-semibold">{v.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
