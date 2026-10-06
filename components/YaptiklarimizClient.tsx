"use client";
import { useState } from "react";
import { VideoItem } from "@/lib/videos";

export default function YaptiklarimizClient({ videos }: { videos: VideoItem[] }) {
  const [sel, setSel] = useState(0);
  const v = videos[Math.min(sel, videos.length - 1)];
  return (
    <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
      <figure className="mx-auto w-full max-w-[280px]">
        <div className="overflow-hidden rounded-[2.5rem] border-4 border-ink bg-ink p-2 shadow-[10px_10px_0_#073066]">
          <video key={v.src} src={v.src} controls preload="metadata" className="aspect-[9/16] w-full rounded-[2rem] bg-black object-cover" />
        </div>
        <figcaption className="mt-3 text-center font-semibold">{v.title}</figcaption>
      </figure>
      <div>
        <p className="text-sm font-bold text-smoke">Diğer projeler:</p>
        <ul className="mt-4 space-y-3">
          {videos.map((item, i) => (
            <li key={item.src}>
              <button
                onClick={() => setSel(i)}
                className={`w-full rounded-2xl border-2 border-ink px-4 py-3 text-left font-semibold transition ${i === sel ? "bg-ink text-cream shadow-[4px_4px_0_#073066]" : "bg-white shadow-[4px_4px_0_#073066] hover:bg-cream"}`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
        {v.description && <p className="mt-6 max-w-md text-smoke">{v.description}</p>}
      </div>
    </div>
  );
}
