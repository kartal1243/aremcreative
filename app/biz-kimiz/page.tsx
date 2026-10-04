import Cta from "@/components/Cta";

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <p className="text-xs font-bold tracking-widest text-accent">BİZ KİMİZ?</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">Fikri buluyor, içeriği üretiyor, etkiyi birlikte yaratıyoruz.</h1>
        <div className="mt-4 space-y-4 text-smoke">
          <p>
            AREM Creative, markaların dijital dünyada daha görünür, daha yaratıcı ve daha etkili olması
            için çalışan bir yaratıcı sosyal medya ajansıdır.
          </p>
          <p>
            Fikirden çekime, içerik üretiminden sosyal medya yönetimine kadar markaların dijitaldeki
            hikâyesini birlikte oluşturuyoruz.
          </p>
          <p>
            Bizim için iyi içerik sadece güzel görünmekten ibaret değil. Dikkat çekmeli, markayı
            yansıtmalı ve insanlarda bir iz bırakmalı.
          </p>
          <p>
            Trendleri takip ediyor, markaya özel fikirler geliştiriyor ve bunları güncel dijital
            kültürle birleştiriyoruz.
          </p>
          <p className="font-bold text-ink">Kısacası; fikri buluyor, içeriği üretiyor, etkiyi birlikte yaratıyoruz.</p>
        </div>
      </section>
      <Cta />
    </>
  );
}
