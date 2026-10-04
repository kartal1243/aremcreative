const faqs = [
  { q: "Sosyal medya ajansı nedir?", a: "Markaların Instagram, TikTok, LinkedIn ve diğer platformlarda etkili varlık göstermesini sağlayan profesyonel hizmet sağlayıcısıdır. İçerikten reklama, topluluk yönetiminden analize tüm süreçleri stratejik yönetir." },
  { q: "Sosyal medya yönetimi nasıl yapılır?", a: "Önce hesap + rakip analizi, sonra içerik stratejisi ve takvimi, ardından üretim + yayınlama + raporlama. Arem'de tüm süreç aylık sistemle ilerler ve veriye göre güncellenir." },
  { q: "Ajansla çalışmanın avantajı ne?", a: "Stratejist + tasarımcı + metin yazarı + reklam uzmanı tek ekipte. Kriz yönetiminden bütçe verimliliğine her alanda rekabet avantajı sağlar." },
  { q: "Fiyatlar nasıl belirlenir?", a: "Kapsama göre: sadece paylaşım mı, tasarım + video + reklam da dahil mi? Hesap sayısı ve çekim günü fiyatı belirler. Net fiyat için ücretsiz ön analiz yapıyoruz." },
  { q: "Süre ne kadar?", a: "Sosyal medya süreklilik işidir. İlk 1-2 ay altyapı + strateji, 3. aydan itibaren ivmelenme. Aylık veya yıllık çalışıyoruz." },
];

export default function SeoFaq() {
  return (
    <section className="border-t-4 border-ink bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-display text-3xl">Merak edilenler</h2>
        <p className="mt-2 text-sm text-smoke">Mirket tarzı SEO bloğu: Arem Creative versiyonu.</p>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border-2 border-ink bg-cream p-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
        <article className="prose mt-8 max-w-none text-sm text-smoke">
          <h3 className="font-display text-ink">Sosyal Medya Yönetimi ve Danışmanlığı Hakkında Bilmeniz Gerekenler</h3>
          <p>
            Günümüzde dijitalde var olmak zorunluluktur. Doğru stratejiyle yürütülen sosyal medya yönetimi
            marka algısını güçlendirir ve satışa doğrudan katkı sağlar. Arem Creative ile tüm platformlarda
            değil, hedef kitlenizin olduğu doğru platformda doğru içerikle var olursunuz.
          </p>
        </article>
      </div>
    </section>
  );
}
