"use client";
import Link from "next/link";
import Image from "next/image";
import { contact, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <Image src="/logo-2026.jpg" alt="Arem Creative" width={112} height={112} sizes="56px" className="mb-4 h-14 w-auto rounded-xl" />
          <p className="text-sm text-cream/70">
            Arem Creative, markanızın dijital varlığını güçlendiren yaratıcı bir sosyal medya ajansıdır.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="E-posta" className="w-full rounded-full border-2 border-cream/30 bg-transparent px-4 py-2 text-sm placeholder:text-cream/40" />
            <button className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white">Katıl</button>
          </form>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm">BİZİ TANIYIN</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/biz-kimiz">Biz Kimiz?</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm">HİZMETLERİMİZ</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/hizmetler/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm">İLETİŞİM</h4>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex gap-3 pt-2">
              <a href={contact.instagram} className="rounded-full border border-cream/30 px-3 py-1">IG</a>
              <a href={contact.linkedin} className="rounded-full border border-cream/30 px-3 py-1">IN</a>
              <a href="#" className="rounded-full border border-cream/30 px-3 py-1">X</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15 py-4 text-center text-xs text-cream/50">
        © 2026 Arem Creative — Tüm hakları saklıdır. | Gizlilik Politikası
      </div>
    </footer>
  );
}
