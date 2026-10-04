import Link from "next/link";
import { posts } from "@/data/site";

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-xs font-bold tracking-widest text-ink">blog</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl">Kreatif notlar</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover rounded-3xl border-2 border-ink bg-white p-5">
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-cream">{p.category}</span>
            <h3 className="mt-3 font-bold">{p.title}</h3>
            <p className="mt-2 text-xs text-smoke">{p.excerpt}</p>
            <p className="mt-3 text-xs font-semibold">{p.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
