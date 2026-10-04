export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    short: "Markanızın sosyal medya hesaplarını strateji, içerik planlama ve düzenli paylaşım süreçleriyle yönetiyoruz.",
    long: "Markanızın sosyal medya hesaplarını strateji, içerik planlama ve düzenli paylaşım süreçleriyle yönetiyoruz.",
    icon: "share",
    bullets: ["Hesap + rakip analizi", "Aylık içerik planı", "Düzenli paylaşım", "Performans raporu"],
  },
  {
    slug: "reels-video-icerik-uretimi",
    title: "Reels & Video İçerik Üretimi",
    short: "Markanız için dikkat çekici, dinamik ve platformlara uygun kısa video içerikleri üretiyoruz.",
    long: "Markanız için dikkat çekici, dinamik ve platformlara uygun kısa video içerikleri üretiyoruz.",
    icon: "clapper",
    bullets: ["Reels konsepti", "Trend ses takibi", "Dinamik kurgu", "Kapak + altyazı"],
  },
  {
    slug: "sosyal-medya-cekimleri",
    title: "Sosyal Medya Çekimleri",
    short: "Mekân, ürün ve hizmetlerinizi telefonla dahi güçlü gösterecek yaratıcı çekimler gerçekleştiriyoruz.",
    long: "Mekân, ürün ve hizmetlerinizi telefonla dahi güçlü gösterecek yaratıcı çekimler gerçekleştiriyoruz.",
    icon: "camera",
    bullets: ["Mekân çekimi", "Ürün çekimi", "Hizmet tanıtımı", "Yaratıcı açı + ışık"],
  },
  {
    slug: "icerik-stratejisi",
    title: "İçerik Stratejisi",
    short: "Markanıza özel içerik fikirleri geliştiriyor, hedef kitlenize uygun bir içerik dili oluşturuyoruz.",
    long: "Markanıza özel içerik fikirleri geliştiriyor, hedef kitlenize uygun bir içerik dili oluşturuyoruz.",
    icon: "compass",
    bullets: ["Hedef kitle analizi", "İçerik sütunları", "Marka dili", "Yayın takvimi"],
  },
  {
    slug: "kreatif-icerik-konsept",
    title: "Kreatif İçerik & Konsept",
    short: "Trendleri takip ederek markanıza özel yaratıcı konseptler, kampanya fikirleri ve içerik formatları tasarlıyoruz.",
    long: "Trendleri takip ederek markanıza özel yaratıcı konseptler, kampanya fikirleri ve içerik formatları tasarlıyoruz.",
    icon: "sparkles",
    bullets: ["Trend takibi", "Kampanya fikri", "Özel format tasarımı", "Konsept dosya"],
  },
  {
    slug: "kurgu-post-produksiyon",
    title: "Kurgu & Post Prodüksiyon",
    short: "Çekilen görüntüleri markanızın kimliğine uygun şekilde kurguluyor, müzik, geçiş, renk ve görsel detaylarla son haline getiriyoruz.",
    long: "Çekilen görüntüleri markanızın kimliğine uygun şekilde kurguluyor, müzik, geçiş, renk ve görsel detaylarla son haline getiriyoruz.",
    icon: "scissors",
    bullets: ["Kurgu + renk", "Müzik + ses tasarımı", "Geçiş + efekt", "Revize teslim"],
  },
  {
    slug: "marka-gorsel-iletisim",
    title: "Marka & Görsel İletişim",
    short: "Markanızın dijital dünyadaki görünümünü güçlendirecek görsel iletişim ve kreatif tasarım çalışmaları hazırlıyoruz.",
    long: "Markanızın dijital dünyadaki görünümünü güçlendirecek görsel iletişim ve kreatif tasarım çalışmaları hazırlıyoruz.",
    icon: "palette",
    bullets: ["Görsel dil", "Sosyal medya tasarımları", "Kreatif yönlendirme", "Şablon seti"],
  },
  {
    slug: "dijital-reklam",
    title: "Dijital Reklam",
    short: "Markanızın dijitalde daha fazla kişiye ulaşması için sosyal medya reklam kampanyaları ve içerik odaklı reklam çözümleri oluşturuyoruz.",
    long: "Markanızın dijitalde daha fazla kişiye ulaşması için sosyal medya reklam kampanyaları ve içerik odaklı reklam çözümleri oluşturuyoruz.",
    icon: "megaphone",
    bullets: ["Kampanya kurulumu", "Hedef kitle + bütçe", "İçerik odaklı reklam", "Rapor + optimizasyon"],
  },
];

export const cases = [
  {
    slug: "vosmer",
    brand: "Vosmer",
    title: "Vosmer'in 3 Ayda %22,5 Takipçi Artışı Hikayesi",
    stat: "%22,5",
    statLabel: "organik takipçi artışı",
    text: "Kahve Festivali'nde katılımcılarla kurulan güçlü bağ dijitale taşındı. Festival sonrası etkileşim hızla artarken organik takipçide %22,5 büyüme yakalandı.",
  },
  {
    slug: "pinar",
    brand: "Pınar",
    title: "1 Milyon Gösterim ve %30 Etkileşim Artışı",
    stat: "1M+",
    statLabel: "gösterim",
    text: "Kapsamlı içerik yenileme süreciyle yeniden tasarlanan içerikler hedef kitleye daha fazla ulaştı, topluluk etkileşimi %30 arttı.",
  },
  {
    slug: "carglass",
    brand: "Carglass",
    title: "Hizmetten Hikayeye: Güven İçeriği Serisi",
    stat: "%41",
    statLabel: "kaydetme artışı",
    text: "Teknik hizmet içeriği hikayeleştirildi. Önce/sonra serisi ve usta anlatılarıyla kaydetmeler %41 arttı.",
  },
];

export const testimonials = [
  { name: "Asil Türkoğlu", company: "Vosmer", text: "Sosyal medya ölçümlerimiz fırladı! Arem ekibi dijital ortamı gerçekten anlıyor ve markamızı hayata geçirdi." },
  { name: "Cenk İlhan", company: "Carglass", text: "Arem ile işbirliğimizde sosyal medya süreçlerimizdeki başarının mimarı oldular." },
  { name: "Duygu Yurtsever", company: "Pare Pırlanta", text: "Yönetimi Arem'e emanet etmek en doğru karardı. Dinamik ekip, yaratıcı fikirlerle her gün yeni değer katıyor." },
];

export const posts = [
  { slug: "instagram-reels-viral-formulu-2026", title: "Instagram Reels Viral Formülü 2026: İlk 3 Saniye Kuralı", date: "1 Ekim 2026", excerpt: "Hook, altyazı ve trend ses üçgeniyle reels'larda izlenmeyi artırmanın pratik yolu.", category: "Instagram" },
  { slug: "sosyal-medya-icerik-takvimi-nasil-kurulur", title: "Sosyal Medya İçerik Takvimi Nasıl Kurulur?", date: "29 Eylül 2026", excerpt: "Aylık 12 içerikle düzenli büyüme: sütunlar, formatlar ve onay akışı.", category: "Strateji" },
  { slug: "marka-sesi-nasil-bulunur", title: "Marka Sesi Nasıl Bulunur? 5 Adımda Ton Rehberi", date: "24 Eylül 2026", excerpt: "Ciddi mi eğlenceli mi? Marka sesini bulup tüm mecralara tutarlı uygulayın.", category: "Markalaşma" },
  { slug: "urun-cekiminde-isik-rehberi", title: "Ürün Çekiminde Işık Rehberi: Telefonla Bile Olur", date: "22 Eylül 2026", excerpt: "Pencere ışığı, yansıtıcı ve 3 ucuz ekipmanla stüdyo kalitesi.", category: "Prodüksiyon" },
];

export const contact = {
  email: "hello@aremcreative.com.tr",
  instagram: "https://instagram.com/aremcreative",
  linkedin: "https://linkedin.com/",
};
