"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function OfferModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
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
            Teşekkürler! 24 saat içinde hello@aremcreative.com üzerinden döneceğiz.
          </p>
        ) : (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <input required placeholder="Ad Soyad" className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            <input required placeholder="Telefon / E-posta" className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            <select className="rounded-xl border-2 border-ink bg-white px-4 py-2">
              <option>Sosyal Medya Yönetimi</option>
              <option>İçerik Üretimi</option>
              <option>Video Prodüksiyon</option>
              <option>Markalaşma / Logo</option>
            </select>
            <textarea placeholder="Markanızı kısaca anlatın" rows={3} className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
            <button className="cursor-pointer rounded-full border-2 border-ink bg-ink px-5 py-2 font-bold text-white">Gönder</button>
          </form>
        )}
      </div>
    </div>
  );
}
