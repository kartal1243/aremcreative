import Link from "next/link";
import { services } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="hizmetler" className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-xs font-bold tracking-widest text-accent">#arem hizmetler</p>
      <h2 className="mt-2 max-w-2xl font-display text-3xl md:text-5xl">Sosyal Medya Ajansı Hizmetleri</h2>
      <p className="mt-3 max-w-2xl text-smoke">
        Hedef odaklı hizmetlerle markanızı dijitalde daha görünür hale getiriyoruz. Doğru strateji,
        yaratıcı içerik ve profesyonel yönetimle performansınızı üst seviyeye taşıyoruz.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link
            key={s.slug}
            href={`/hizmetler/${s.slug}`}
            className="card-hover rounded-3xl border-2 border-ink bg-white p-6"
          >
            <span className="inline-block rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-lg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.short}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold">
              İncele <ArrowUpRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
