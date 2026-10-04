import Link from "next/link";
import { posts } from "@/data/site";

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <p className="text-xs font-bold tracking-widest text-accent">#kreatif blog</p>
      <h2 className="mt-2 font-display text-3xl md:text-4xl">Blog</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card-hover rounded-3xl border-2 border-ink bg-white p-5">
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-cream">{p.category}</span>
            <h3 className="mt-3 font-bold leading-snug">{p.title}</h3>
            <p className="mt-2 text-xs text-smoke">{p.excerpt}</p>
            <p className="mt-3 text-xs font-semibold text-smoke">{p.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
