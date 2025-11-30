import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Droplets, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Daire Tesisatı | Çerkezköy | Tabtes Mekanik",
  description:
    "Konut ve apartman dairelerinde komple su tesisatı. Yeni bina ve tadilat projeleri. Çerkezköy daire tesisat servisi.",
};

const processSteps = [
  {
    step: 1,
    title: "Keşif ve Planlama",
    description:
      "Daire planı incelenir, tesisat hatları planlanır ve en uygun çözüm belirlenir.",
  },
  {
    step: 2,
    title: "Malzeme Seçimi",
    description:
      "PPR boru sistemi veya bakır boru seçenekleri sunulur. Kaliteli malzemeler kullanılır.",
  },
  {
    step: 3,
    title: "Montaj İşlemi",
    description:
      "Profesyonel ekipmanlarla tesisat montajı gerçekleştirilir. Tüm bağlantılar güvenli şekilde yapılır.",
  },
  {
    step: 4,
    title: "Test ve Teslim",
    description:
      "Sistem test edilir, basınç kontrolü yapılır ve işlem tamamlanır. Kullanım kılavuzu verilir.",
  },
];

const features = [
  "Yeni bina tesisatı",
  "Tadilat ve yenileme",
  "PPR boru sistemi",
  "Bakır boru seçeneği",
  "Su kaçağı onarımı",
  "Basınç ayarı",
  "Kaliteli malzeme garantisi",
  "İşçilik garantisi",
];

const faqs = [
  {
    question: "Daire tesisatı ne kadar sürer?",
    answer:
      "Daire tesisatı süresi, dairenin büyüklüğüne ve işin kapsamına göre değişir. Yeni bina tesisatı için 3-5 gün, tadilat için 2-4 gün sürmektedir. Keşif sonrası kesin süre bildirilir.",
  },
  {
    question: "PPR boru mu yoksa bakır boru mu tercih edilmeli?",
    answer:
      "PPR boru sistemi modern tesisatta daha çok tercih edilmektedir. Uzun ömürlü, hijyenik ve ekonomiktir. Bakır boru ise daha geleneksel bir seçenektir. Projenize göre en uygun seçeneği keşif sırasında belirliyoruz.",
  },
  {
    question: "Tadilat sırasında su kesintisi olur mu?",
    answer:
      "Evet, tesisat işlemleri sırasında su kesintisi gerekebilir. Ancak işlemleri mümkün olduğunca hızlı tamamlayarak kesinti süresini minimize ediyoruz. Genellikle günlük işlemler için 4-6 saat yeterli olmaktadır.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm daire tesisatı işlerimizde 2 yıl işçilik garantisi veriyoruz. Kullandığımız malzemeler için de üretici garantisi geçerlidir. Garanti kapsamındaki tüm sorunlar ücretsiz çözülür.",
  },
];

export default function DaireTesisatiPage() {
  return (
    <main>
      <PageHeader
        title="Daire Tesisatı"
        subtitle="Komple daire tesisat hizmeti"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Daire Tesisatı", href: "/hizmetlerimiz/daire-tesisati" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Droplets className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Daire Tesisatı Hizmeti
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Konut ve apartman dairelerinde komple su tesisatı hizmeti
                    sunuyoruz. Yeni bina tesisatı, tadilat ve onarım işleri
                    gerçekleştiriyoruz. Çerkezköy ve çevresinde 15 yıllık
                    deneyimimizle kaliteli malzeme ve işçilik garantisi veriyoruz.
                  </p>
                  <p>
                    Daire tesisatı projelerimizde modern PPR boru sistemi veya
                    geleneksel bakır boru seçenekleri sunuyoruz. Tüm işlemlerimiz
                    TSE standartlarına uygun çalışıyoruz. Kullandığımız
                    malzemeler kalite sertifikalıdır ve uzun ömürlüdür.
                  </p>
                  <p>
                    Yeni bina tesisatlarında tüm su hatlarını planlıyoruz,
                    montajını yapıyoruz ve test ediyoruz. Tadilat projelerinde
                    mevcut tesisatı inceliyor, gerekli yenilemeleri yapıyoruz.
                    Eski ve yıpranmış boruları değiştirerek su kaçağı riskini
                    ortadan kaldırıyoruz.
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
                      Başlangıç Fiyatı
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      ₺2.000'den itibaren
                    </p>
                    <p className="text-sm text-foreground-muted mt-1">
                      * Kesin fiyat için keşif gereklidir
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
                      href="/hizmetlerimiz/kacak-tespiti"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kaçak Tespiti →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/banyo-tadilati"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Banyo Tadilatı →
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
                <Droplets className="w-12 h-12 text-primary/30" />
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

