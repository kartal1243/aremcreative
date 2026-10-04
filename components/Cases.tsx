import Link from "next/link";
import { cases } from "@/data/site";

export default function Cases() {
  return (
    <section className="border-y-4 border-ink bg-ink py-16 text-cream">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-bold tracking-widest text-accent">#hikayelerimiz</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl">Başarıdaki imzamız</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cases.map((c) => (
            <Link key={c.slug} href={`/basari-hikayeleri/${c.slug}`} className="rounded-3xl border-2 border-cream/20 bg-white/[0.06] p-6 hover:border-accent">
              <p className="font-display text-5xl text-accent">{c.stat}</p>
              <p className="text-xs font-bold tracking-widest text-cream/60">{c.statLabel}</p>
              <h3 className="mt-3 font-bold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{c.text}</p>
              <span className="mt-4 inline-block rounded-full bg-cream px-4 py-1 text-xs font-bold text-ink">
                Hikayeyi Gör →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
