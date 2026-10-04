import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/site";
import Cta from "@/components/Cta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return notFound();
  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/blog" className="text-sm font-bold text-accent">← Blog</Link>
        <p className="mt-4 text-xs font-bold tracking-widest">{p.category} • {p.date}</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl">{p.title}</h1>
        <p className="mt-4 text-lg text-smoke">{p.excerpt}</p>
        <div className="mt-6 space-y-4 text-smoke">
          <p>Bu yazı Arem Creative editörleri tarafından hazırlandı. Mirket tarzı hap bilgiler: önce sorunu tanımla, sonra 3 adımlı çözüm ver, en son CTA koy.</p>
          <p>1. Hedefi netleştir. 2. Formatı seç (reels/carousel/hikaye). 3. İlk 3 saniyeye hook koy, altyazıyı unutma, trend sesi markana uyarla.</p>
          <p>Detaylı checklist ve örnek takvim için bizimle iletişime geç, ücretsiz ön analiz yapalım.</p>
        </div>
      </article>
      <Cta />
    </>
  );
}
