"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import OfferModal from "./OfferModal";

export default function Hero() {
  const [offer, setOffer] = useState(false);
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent/20 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-ink/10 blur-2xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="sticker inline-block rotate-[-2deg] rounded-full border-2 border-ink bg-white px-4 py-1 text-xs font-extrabold tracking-widest">
            ● BE A CREATIVE!
          </span>
          <h1 className="hero-title mt-4 text-6xl text-accent md:text-8xl">
            SOSYAL
            <br />
            MEDYA
            <br />
            <span className="mt-1 inline-block bg-accent px-4 text-cream shadow-[6px_6px_0_#1a1a1a]">AJANSI</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-medium text-smoke md:text-lg">
            Hedef kitlenizde yankı uyandıracak, etkileyici ve sonuç odaklı çözümlerle markanızın sesini
            yükseltiyoruz. Stratejiden çekime, paylaşımdan rapora — her adımda yanınızdayız.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={() => setOffer(true)} className="sticker flex items-center gap-1 rounded-full border-2 border-ink bg-accent px-6 py-3 font-display text-base text-white transition-transform hover:-translate-y-0.5">
              Teklif İste <ArrowUpRight size={18} />
            </button>
            <a href="#hizmetler" className="sticker flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 font-display text-base transition-transform hover:-translate-y-0.5">
              <Play size={18} /> Hizmetleri Gör
            </a>
          </div>
          <div className="mt-7 flex gap-8 text-sm font-bold">
            <span><b className="font-display text-3xl text-ink">1+</b><br /><span className="text-smoke">Yıl Tecrübe</span></span>
            <span><b className="font-display text-3xl text-ink">10+</b><br /><span className="text-smoke">Referans</span></span>
            <span><b className="font-display text-3xl text-ink">8</b><br /><span className="text-smoke">Hizmet</span></span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          {/* Hareketli mini etiketler — fotoğraftaki gibi */}
          <span style={{ "--float-rot": "-8deg" } as React.CSSProperties} className="animate-floaty absolute -left-2 top-16 z-10 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-extrabold shadow-[3px_3px_0_#1a1a1a] md:-left-6">✦ reels</span>
          <span style={{ "--float-rot": "6deg" } as React.CSSProperties} className="animate-floaty-delay absolute -right-2 top-1/3 z-10 rounded-full border-2 border-ink bg-accent px-4 py-1.5 text-xs font-extrabold text-white shadow-[3px_3px_0_#1a1a1a] md:-right-4">✦ viral</span>
          <span style={{ "--float-rot": "-5deg" } as React.CSSProperties} className="animate-floaty-slow absolute -left-1 bottom-24 z-10 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-xs font-extrabold shadow-[3px_3px_0_#1a1a1a] md:-left-5">✦ strateji</span>

          <div className="rounded-[2rem] border-4 border-ink bg-white p-6 shadow-[10px_10px_0_#073066]">
            <Image src="/logo-2026.jpg" alt="Arem Creative logo" width={768} height={768} priority sizes="(max-width: 768px) 100vw, 384px" className="mx-auto h-auto w-full max-w-sm rounded-2xl" />
            <div className="mt-4 flex items-center justify-between rounded-2xl border-2 border-ink/10 bg-cream p-4">
              <div>
                <p className="text-[11px] font-extrabold tracking-widest text-smoke">BU AY</p>
                <p className="font-display text-lg leading-tight">+250B Gösterim ürettik</p>
              </div>
              <span className="animate-floaty-slow rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-extrabold text-white">CANLI</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-extrabold">
              <div className="rounded-xl border-2 border-ink bg-cream p-2.5">REELS<br /><span className="font-display text-sm">48B</span></div>
              <div className="rounded-xl border-2 border-ink bg-cream p-2.5">ETKİLEŞİM<br /><span className="font-display text-sm">%12</span></div>
              <div className="rounded-xl border-2 border-ink bg-cream p-2.5">TAKİPÇİ<br /><span className="font-display text-sm">%8</span></div>
            </div>
          </div>
          <span className="absolute -left-3 -top-3 rotate-[-8deg] rounded-full border-2 border-ink bg-accent px-4 py-1 font-display text-xs text-white">2026 ★</span>
        </div>
      </div>
      <OfferModal open={offer} onClose={() => setOffer(false)} />
    </section>
  );
}
