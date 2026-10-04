import Link from "next/link";
import { services } from "@/data/site";

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-xs font-bold tracking-widest text-accent">hizmetler</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">8 hizmet, tek ekip</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} href={`/hizmetler/${s.slug}`} className="card-hover rounded-3xl border-2 border-ink bg-white p-6">
            <h3 className="font-display text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-smoke">{s.short}</p>
            <span className="mt-3 inline-block text-sm font-bold">İncele →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
