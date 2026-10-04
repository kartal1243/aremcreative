"use client";
import { contact } from "@/data/site";

export default function Page() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
      <div>
        <p className="text-xs font-bold tracking-widest text-accent">iletişim</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">Konuşalım</h1>
        <p className="mt-4 text-smoke">24 saat içinde dönüyoruz. Ön analiz ücretsiz.</p>
        <ul className="mt-6 space-y-3 font-semibold">
          <li className="rounded-2xl border-2 border-ink bg-white p-4">✉️ {contact.email}</li>
        </ul>
      </div>
      <form className="h-fit rounded-3xl border-4 border-ink bg-white p-6 shadow-[8px_8px_0_#073066]" onSubmit={(e) => e.preventDefault()}>
        <h3 className="font-display text-xl">Teklif formu</h3>
        <div className="mt-4 flex flex-col gap-3">
          <input required placeholder="Ad Soyad" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <input required placeholder="E-posta / Telefon" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <input placeholder="Instagram hesabınız (@...)" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <textarea placeholder="İhtiyacınız nedir?" rows={4} className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <button className="rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-white">Gönder</button>
          <p className="text-xs text-smoke">Gönderince {contact.email} adresine düşer (şimdilik demo).</p>
        </div>
      </form>
    </section>
  );
}
