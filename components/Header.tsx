"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import OfferModal from "./OfferModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [offer, setOffer] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream/95 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Ana Sayfa">
            <Image src="/logo-header.jpg" alt="Arem Creative" width={360} height={88} priority sizes="180px" style={{ height: 44, width: 180, objectFit: "cover", objectPosition: "center", mixBlendMode: "multiply" }} className="h-11 w-[180px] object-cover object-center mix-blend-multiply" />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 whitespace-nowrap text-[18px] lg:flex">
            <Link href="/biz-kimiz" className="nav-link">Biz Kimiz?</Link>
            <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
              <Link href="/hizmetler" className="nav-link">Hizmetler ▾</Link>
              {drop && (
                <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 rounded-2xl border-4 border-ink bg-white p-4 pt-6 text-[16px] shadow-[8px_8px_0_#073066]">
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="rounded-xl px-3 py-2 font-bold hover:bg-cream hover:text-accent">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/#nasil-calisiyoruz" className="nav-link">Nasıl Çalışıyoruz?</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/iletisim" className="nav-link">İletişim</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOffer(true)}
              className="sticker hidden items-center gap-1 rounded-full border-2 border-ink bg-accent px-6 py-2.5 font-display text-[15px] text-white transition-transform hover:-translate-y-0.5 sm:flex"
            >
              Teklif İste <ArrowUpRight size={18} />
            </button>
            <button onClick={() => setOpen(!open)} className="rounded-full border-2 border-ink p-2 lg:hidden" aria-label="Menü">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t-2 border-ink bg-cream px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 font-semibold">
              <Link href="/" onClick={() => setOpen(false)}>Ana Sayfa</Link>
              <Link href="/biz-kimiz" onClick={() => setOpen(false)}>Biz Kimiz?</Link>
              <Link href="/hizmetler" onClick={() => setOpen(false)}>Hizmetler</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/#nasil-calisiyoruz" onClick={() => setOpen(false)}>Nasıl Çalışıyoruz?</Link>
              <Link href="/iletisim" onClick={() => setOpen(false)}>İletişim</Link>
              <button onClick={() => { setOpen(false); setOffer(true); }} className="mt-2 rounded-full border-2 border-ink bg-accent px-5 py-2 font-bold text-white">
                Teklif İste
              </button>
            </div>
          </div>
        )}
      </header>
      <OfferModal open={offer} onClose={() => setOffer(false)} />
    </>
  );
}
