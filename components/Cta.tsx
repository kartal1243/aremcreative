"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/data/site";
import OfferModal from "./OfferModal";

export default function Cta() {
  const [offer, setOffer] = useState(false);
  return (
    <>
      <section className="relative overflow-hidden bg-accent px-4 text-white">
        <span aria-hidden className="pointer-events-none absolute -bottom-12 right-0 select-none whitespace-nowrap font-display leading-none text-transparent" style={{ fontSize: "clamp(120px,22vw,210px)", WebkitTextStroke: "2px rgba(246,243,238,0.25)" }}>
          AREM
        </span>
        <div className="relative z-[1] mx-auto grid max-w-7xl items-center gap-8 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-widest">● BE A CREATIVE!</p>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
              Her adımda yanınızda olacak bir partner olarak, dijitalde sizi en iyi şekilde temsil ediyoruz.
            </h2>
          </div>
          <div className="rounded-3xl border-2 border-ink bg-cream p-6 text-ink shadow-[6px_6px_0_rgba(0,0,0,0.35)]">
            <p className="font-display text-lg">Ücretsiz ön analiz</p>
            <p className="mt-2 text-sm text-smoke">Markanı kısaca anlat, 24 saat içinde dönüş yapalım. Ön görüşme ücretsiz.</p>
            <button onClick={() => setOffer(true)} className="sticker mt-4 inline-flex items-center gap-1 rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-white">
              Teklif Al <ArrowUpRight size={18} />
            </button>
            <p className="mt-3 text-sm text-smoke">ya da yaz: <a href={`mailto:${contact.email}`} className="font-bold text-accent">{contact.email}</a></p>
          </div>
        </div>
      </section>
      <OfferModal open={offer} onClose={() => setOffer(false)} />
    </>
  );
}
