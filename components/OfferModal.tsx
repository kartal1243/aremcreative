"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function OfferModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [service, setService] = useState("Sosyal Medya Yönetimi");
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
        body: JSON.stringify({ name, contact: contactInfo, service, message }),
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

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-3xl border-4 border-ink bg-cream p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-xl">Teklif Al</h3>
          <button onClick={onClose} className="rounded-full border-2 border-ink p-1" aria-label="Kapat"><X size={18} /></button>
        </div>
        {sent ? (
          <p className="rounded-2xl border-2 border-ink bg-white p-4 font-semibold">
            Teşekkürler! 24 saat içinde hello@aremcreative.com.tr adresinden size döneceğiz.
          </p>
        ) : (
          <form
            className="flex flex-col gap-3"
            onSubmit={submit}
          >
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ad Soyad" className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            <input required value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} placeholder="Telefon / E-posta" className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            <select value={service} onChange={(e) => setService(e.target.value)} className="rounded-xl border-2 border-ink bg-white px-4 py-2">
              <option>Sosyal Medya Yönetimi</option>
              <option>İçerik Üretimi</option>
              <option>Video Prodüksiyon</option>
              <option>Markalaşma / Logo</option>
            </select>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Markanızı kısaca anlatın" rows={3} className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            {error && <p className="text-sm font-bold text-red-600">{error}</p>}
            <button disabled={loading} className="cursor-pointer rounded-full border-2 border-ink bg-ink px-5 py-2 font-bold text-white disabled:opacity-50">{loading ? "Gönderiliyor..." : "Gönder"}</button>
          </form>
        )}
      </div>
    </div>
  );
}
