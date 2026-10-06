"use client";
import { useState } from "react";
import { contact } from "@/data/site";

export default function Page() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [insta, setInsta] = useState("");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const ctl = new AbortController();
      const timeout = setTimeout(() => ctl.abort(), 30000);
      const r = await fetch("/api/teklif", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact: contactInfo, service: "İletişim formu", message: `${message}\nInstagram: ${insta}` }),
        signal: ctl.signal,
      });
      clearTimeout(timeout);
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || "Gönderilemedi");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error && err.name === "AbortError" ? "Zaman aşımı. Tekrar dene." : err instanceof Error ? err.message : "Gönderilemedi");
    } finally {
      setLoading(false);
    }
  }

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
      {sent ? (
        <p className="h-fit rounded-3xl border-4 border-ink bg-white p-6 font-semibold shadow-[8px_8px_0_#073066]">
          Teşekkürler! 24 saat içinde hello@aremcreative.com.tr adresinden size döneceğiz.
        </p>
      ) : (
      <form className="h-fit rounded-3xl border-4 border-ink bg-white p-6 shadow-[8px_8px_0_#073066]" onSubmit={submit}>
        <h3 className="font-display text-xl">Teklif formu</h3>
        <div className="mt-4 flex flex-col gap-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <input required value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} placeholder="E-posta / Telefon" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <input value={insta} onChange={(e) => setInsta(e.target.value)} placeholder="Instagram hesabınız (@...)" className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="İhtiyacınız nedir?" rows={4} className="rounded-xl border-2 border-ink bg-cream px-4 py-2" />
          {error && <p className="text-sm font-bold text-red-600">{error}</p>}
          <button disabled={loading} className="rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-white disabled:opacity-50">{loading ? "Gönderiliyor..." : "Gönder"}</button>
        </div>
      </form>
      )}
    </section>
  );
}
