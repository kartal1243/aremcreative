"use client";
import { useState } from "react";
import { VideoItem } from "@/lib/videos";

export default function YaptiklarimizClient({ videos }: { videos: VideoItem[] }) {
  const [sel, setSel] = useState(0);
  const v = videos[Math.min(sel, videos.length - 1)];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="rounded-[2rem] border-4 border-ink bg-ink p-8 text-cream shadow-[10px_10px_0_#073066] md:p-12">
        <p className="text-xs font-bold tracking-widest text-[#8fb8ff]">YAPTIKLARIMIZ</p>
        <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
          <figure className="mx-auto w-full max-w-[280px]">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-cream/30 bg-[#111] p-2 shadow-[10px_10px_0_#073066]">
              <video key={v.src} src={v.src} controls preload="metadata" className="aspect-[9/16] w-full rounded-[2rem] bg-black object-cover" />
            </div>
            <figcaption className="mt-3 text-center font-semibold">{v.title}</figcaption>
          </figure>
          <div>
            <ul className="space-y-1">
              {videos.map((item, i) => (
                <li key={item.src}>
                  <button
                    onClick={() => setSel(i)}
                    className={`flex w-full items-baseline gap-3 rounded-xl px-3 py-3 text-left transition ${i === sel ? "bg-white/10 text-[#8fb8ff]" : "text-cream/80 hover:bg-white/5"}`}
                  >
                    <span className="font-display text-sm text-cream/30">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl leading-tight">{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            {v.description && <p className="mt-6 max-w-md text-cream/70">{v.description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
