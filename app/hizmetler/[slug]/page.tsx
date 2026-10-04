import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/site";
import Cta from "@/components/Cta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return notFound();
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Link href="/hizmetler" className="text-sm font-bold text-accent">← Tüm hizmetler</Link>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">{s.title}</h1>
        <p className="mt-4 text-lg text-smoke">{s.long}</p>
        <ul className="mt-6 space-y-2">
          {s.bullets.map((b) => (
            <li key={b} className="rounded-2xl border-2 border-ink bg-white px-4 py-2 font-semibold">✓ {b}</li>
          ))}
        </ul>
        <div className="mt-8 flex gap-3">
          <Link href="/iletisim" className="rounded-full border-2 border-ink bg-accent px-6 py-3 font-bold text-white">Bu hizmet için teklif al</Link>
          <Link href="/#hizmetler" className="rounded-full border-2 border-ink bg-white px-6 py-3 font-bold">Diğerleri</Link>
        </div>
      </section>
      <Cta />
    </>
  );
}
