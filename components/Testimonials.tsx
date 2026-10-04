"use client";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const go = useCallback(
    (i: number) => setCur((i + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[cur];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-bold tracking-widest text-accent">ne dediler?</p>
        <h2 className="mt-2 font-display text-3xl">Müşterilerimiz konuşuyor</h2>
        <div className="mt-6">
          <figure key={t.name} className="mx-auto max-w-3xl rounded-3xl border-4 border-ink bg-white p-8 text-center shadow-[8px_8px_0_#073066] md:p-10">
            <Quote size={36} className="mx-auto text-accent" />
            <blockquote className="mt-4 text-base leading-relaxed md:text-lg">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-bold">{t.name}, <span className="font-normal text-smoke">{t.company}</span></figcaption>
          </figure>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button onClick={() => go(cur - 1)} aria-label="Önceki" className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-white shadow-[3px_3px_0_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((x, i) => (
                <button
                  key={x.name}
                  onClick={() => go(i)}
                  aria-label={`Yorum ${i + 1}`}
                  className={`h-3 rounded-full border-2 border-ink transition-all ${i === cur ? "w-7 bg-accent" : "w-3 bg-white"}`}
                />
              ))}
            </div>
            <button onClick={() => go(cur + 1)} aria-label="Sonraki" className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-white shadow-[3px_3px_0_#1a1a1a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Tam genişlik kayan şerit — siteyi baştan başa kapsar */}
      <div className="mt-10 w-screen overflow-hidden border-y-4 border-ink bg-accent py-3 font-display text-sm text-white md:text-base">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i}>AREM CREATIVE ★ SOSYAL MEDYA ★ İÇERİK ★ VIDEO ★ MARKA ★ STRATEJİ ★&nbsp;</span>
          ))}
        </div>
      </div>
    </section>
  );
}
