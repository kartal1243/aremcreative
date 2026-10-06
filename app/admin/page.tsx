"use client";
import { useEffect, useState } from "react";

type V = { title: string; src: string; date: string };

export default function Page() {
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);
  const [videos, setVideos] = useState<V[]>([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const p = localStorage.getItem("arem_admin");
    if (p) {
      setPassword(p);
      setReady(true);
    }
    fetch("/api/videolar").then((r) => r.json()).then((j) => setVideos(j.videos ?? []));
  }, []);

  function login(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem("arem_admin", password);
    setReady(true);
  }

  async function upload(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const fd = new FormData();
      fd.append("password", password);
      fd.append("title", title);
      if (file) fd.append("file", file);
      const r = await fetch("/api/videolar", { method: "POST", body: fd });
      const txt = await r.text();
      let j: any;
      try { j = JSON.parse(txt); } catch { throw new Error(r.status === 413 ? "Video çok büyük (nginx limiti)." : `Sunucu hatası (${r.status}).`); }
      if (!j.ok) throw new Error(j.error || "Olmadı");
      setMsg("Yüklendi.");
      setTitle("");
      setFile(null);
      fetch("/api/videolar").then((r) => r.json()).then((j) => setVideos(j.videos ?? []));
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "Hata");
    } finally {
      setLoading(false);
    }
  }

  async function del(src: string) {
    if (!confirm("Silinsin mi?")) return;
    const r = await fetch("/api/videolar", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, src }),
    });
    const j = await r.json();
    if (j.ok) setVideos(videos.filter((v) => v.src !== src));
    else alert(j.error || "Silinemedi");
  }

  if (!ready)
    return (
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="font-display text-3xl">Admin Girisi</h1>
        <form className="mt-4 flex gap-2" onSubmit={login}>
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" type="password" className="flex-1 rounded-xl border-2 border-ink bg-white px-4 py-2" />
          <button className="rounded-xl border-2 border-ink bg-ink px-4 py-2 font-bold text-white">Gir</button>
        </form>
      </section>
    );

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl">Yaptıklarımız — Video Yükle</h1>
      <form className="mt-6 flex flex-col gap-3" onSubmit={upload}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Video başlığı" required className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
        <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} required className="rounded-xl border-2 border-ink bg-white px-4 py-2" />
        <button disabled={loading} className="rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-white disabled:opacity-50">{loading ? "Yükleniyor..." : "Yükle"}</button>
        {msg && <p className="font-bold">{msg}</p>}
      </form>
      <button onClick={() => { localStorage.removeItem("arem_admin"); location.reload(); }} className="mt-4 text-sm font-bold text-smoke underline">Çıkış</button>
      <h2 className="mt-10 font-display text-2xl">Yayında olanlar</h2>
      <ul className="mt-4 space-y-3">
        {videos.map((v) => (
          <li key={v.src} className="flex items-center justify-between rounded-2xl border-2 border-ink bg-white p-4">
            <span className="font-semibold">{v.title}</span>
            <button onClick={() => del(v.src)} className="rounded-full border-2 border-ink px-3 py-1 text-sm font-bold text-red-600">Sil</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
