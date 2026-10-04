const steps = [
  { n: "01", letter: "A", t: "Tanışalım", d: "Markanızı ve ihtiyaçlarınızı dinliyoruz." },
  { n: "02", letter: "E", t: "Fikri Oluşturalım", d: "Markanıza uygun içerik ve kreatif fikirler geliştiriyoruz." },
  { n: "03", letter: "İ", t: "Üretelim", d: "Çekim, kurgu ve tasarım süreçlerini gerçekleştiriyoruz." },
  { n: "04", letter: "O", t: "Yayına Alalım", d: "İçerikleri doğru formatlarda yayınlıyor ve süreci takip ediyoruz." },
];

export default function Process() {
  return (
    <section id="nasil-calisiyoruz" className="relative scroll-mt-24 overflow-hidden py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="text-xs font-extrabold tracking-widest text-accent">⚙ NASIL ÇALIŞIYORUZ?</p>
        <h2 className="mt-2 font-display text-4xl md:text-6xl">
          4 adımda <span className="text-accent">büyüme</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="card-hover relative overflow-hidden rounded-3xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#073066]">
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl text-transparent" style={{ WebkitTextStroke: "2.5px #1a1a1a" }}>{s.n}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-accent text-xl font-extrabold text-white shadow-[3px_3px_0_#1a1a1a]">{s.letter}</span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
