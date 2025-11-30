import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Building, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kaskat Kazan Sistemleri | Çerkezköy | Tabtes Mekanik",
  description:
    "Büyük binalar için kaskat kazan sistemleri. Yüksek verimli, ekonomik ısıtma çözümleri. Çerkezköy kaskat sistem servisi.",
};

const processSteps = [
  {
    step: 1,
    title: "İhtiyaç Analizi",
    description:
      "Binanın ısıtma ihtiyacı analiz edilir ve uygun kaskat sistem kapasitesi belirlenir.",
  },
  {
    step: 2,
    title: "Sistem Tasarımı",
    description:
      "Birden fazla kazanın birlikte çalışacağı kaskat sistem tasarımı yapılır.",
  },
  {
    step: 3,
    title: "Montaj ve Bağlantı",
    description:
      "Kazanlar montaj edilir, birbirine bağlanır ve kontrol sistemleri kurulur.",
  },
  {
    step: 4,
    title: "Test ve Optimizasyon",
    description:
      "Sistem test edilir, verimlilik optimizasyonu yapılır ve kullanıma hazır hale getirilir.",
  },
];

const features = [
  "Yüksek verimlilik",
  "Ekonomik işletme",
  "Modüler yapı",
  "Otomatik kontrol",
  "Yedekleme sistemi",
  "Enerji tasarrufu",
  "Büyük binalar için ideal",
  "7/24 bakım desteği",
];

const faqs = [
  {
    question: "Kaskat sistem nedir?",
    answer:
      "Kaskat sistem, birden fazla kazanın birlikte çalıştığı merkezi ısıtma sistemidir. Büyük binaların ısıtma ihtiyacını karşılamak için kullanılır. Sistem, ihtiyaca göre kazan sayısını otomatik olarak ayarlar ve enerji tasarrufu sağlar.",
  },
  {
    question: "Hangi binalar için uygundur?",
    answer:
      "Kaskat sistemler, 5000 m² ve üzeri büyük binalar, endüstriyel tesisler, AVM'ler, oteller ve hastaneler için idealdir. Modüler yapısı sayesinde ihtiyaca göre genişletilebilir.",
  },
  {
    question: "Enerji tasarrufu sağlar mı?",
    answer:
      "Evet, kaskat sistemler %30-40'a kadar enerji tasarrufu sağlar. Sistem, ihtiyaca göre sadece gerekli kazanları çalıştırarak yakıt tüketimini minimize eder. Kısmi yük durumlarında verimlilik artar.",
  },
  {
    question: "Bakım maliyeti ne kadar?",
    answer:
      "Kaskat sistemlerin bakım maliyeti, tek kazan sistemlere göre daha düşüktür. Sistem modüler olduğu için bir kazanın bakımı sırasında diğerleri çalışmaya devam eder. Periyodik bakım paketlerimiz ile maliyetleri optimize ediyoruz.",
  },
];

export default function KaskatSistemlerPage() {
  return (
    <main>
      <PageHeader
        title="Kaskat Sistemler"
        subtitle="Yüksek verimli kaskat kazan sistemleri"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          {
            label: "Kaskat Sistemler",
            href: "/hizmetlerimiz/kaskat-sistemler",
          },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Building className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Kaskat Kazan Sistemleri
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Büyük binalar için kaskat kazan sistemleri kurulumu ve
                    bakımı hizmeti sunuyoruz. Yüksek verimli, ekonomik ısıtma
                    çözümleri ile binalarınızın ısıtma ihtiyacını karşılıyoruz.
                    Çerkezköy ve çevresinde profesyonel hizmet veriyoruz.
                  </p>
                  <p>
                    Kaskat sistem, birden fazla kazanın birlikte çalıştığı
                    merkezi ısıtma sistemidir. Sistem, ihtiyaca göre kazan
                    sayısını otomatik olarak ayarlar ve enerji tasarrufu sağlar.
                    Büyük binalar, endüstriyel tesisler, AVM'ler ve oteller
                    için idealdir.
                  </p>
                  <p>
                    Kaskat sistemlerin modüler yapısı sayesinde ihtiyaca göre
                    genişletilebilir. Sistem, kısmi yük durumlarında sadece
                    gerekli kazanları çalıştırarak yakıt tüketimini minimize
                    eder. %30-40'a kadar enerji tasarrufu sağlanabilir.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground font-heading mb-6">
                  Hizmet Sürecimiz
                </h3>
                <div className="space-y-6">
                  {processSteps.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-light rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Ücretsiz Keşif
                    </h3>
                    <p className="text-foreground-muted">
                      Detaylı fiyat teklifi için keşif yapıyoruz
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-foreground font-heading mb-4">
                  Hemen İletişime Geçin
                </h3>
                <p className="text-foreground-muted mb-6">
                  Ücretsiz keşif ve fiyat teklifi için bize ulaşın.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+905370102412"
                    className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Hemen Ara
                  </a>
                  <Link
                    href="/fiyat-teklifi"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground font-heading mb-4">
                  İlgili Hizmetler
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/hizmetlerimiz/kazan-dairesi"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kazan Dairesi →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/isitma-sogutma"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Isıtma & Soğutma →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground font-heading text-center mb-8">
            Projelerimizden Görüntüler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-primary-light flex items-center justify-center"
              >
                <Building className="w-12 h-12 text-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground font-heading text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-muted rounded-xl overflow-hidden shadow-sm group"
              >
                <summary className="p-6 font-semibold text-foreground cursor-pointer hover:bg-muted/80 flex items-center justify-between list-none">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-foreground-muted transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-foreground-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

