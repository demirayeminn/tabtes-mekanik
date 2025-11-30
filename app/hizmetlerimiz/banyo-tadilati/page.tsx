import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Bath, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Banyo Tadilatı | Çerkezköy | Tabtes Mekanik",
  description:
    "Çerkezköy'de komple banyo tadilatı hizmeti. Seramik, tesisat, vitrifiye. Anahtar teslim projeler. ₺15.000'den itibaren.",
};

const processSteps = [
  {
    step: 1,
    title: "Keşif ve Tasarım",
    description:
      "Uzman ekibimiz banyonuzu inceler, ihtiyaçlarınızı belirler ve 3D tasarım sunar.",
  },
  {
    step: 2,
    title: "Söküm İşlemi",
    description:
      "Eski seramik, vitrifiye ve tesisat güvenli şekilde sökülür.",
  },
  {
    step: 3,
    title: "Tesisat ve İzolasyon",
    description:
      "Yeni tesisat montajı yapılır, su izolasyonu uygulanır.",
  },
  {
    step: 4,
    title: "Seramik ve Vitrifiye",
    description:
      "Seramik döşeme, vitrifiye montajı ve son rötuşlar yapılır.",
  },
];

const features = [
  "Komple banyo yenileme",
  "Seramik döşeme",
  "Tesisat yenileme",
  "Vitrifiye montajı",
  "Su izolasyonu",
  "Havalandırma",
  "3D tasarım",
  "Anahtar teslim",
];

const faqs = [
  {
    question: "Banyo tadilatı ne kadar sürer?",
    answer:
      "Banyo tadilatı süresi banyo büyüklüğüne ve iş kapsamına göre değişir. Küçük banyo (4m²) için 7-10 gün, orta banyo (6m²) için 10-14 gün, büyük banyo (8m²+) için 14-20 gün sürmektedir.",
  },
  {
    question: "Banyo tadilatı fiyatı ne kadar?",
    answer:
      "Banyo tadilatı başlangıç fiyatı ₺15.000'dir. Banyo büyüklüğü, kullanılacak malzeme kalitesi ve iş kapsamına göre fiyat değişir. Keşif sonrası detaylı fiyat teklifi sunulur.",
  },
  {
    question: "Tadilat sırasında su kullanabilir miyim?",
    answer:
      "Tadilat sırasında banyo kullanılamaz. Ancak evinizin diğer bölümlerinde su kullanımına devam edebilirsiniz. İşlemler hızlı ve planlı şekilde yapılır.",
  },
  {
    question: "Garanti var mı?",
    answer:
      "Evet, tüm banyo tadilatı işlerimizde 2 yıl işçilik garantisi veriyoruz. Kullandığımız malzemeler için de üretici garantisi geçerlidir.",
  },
];

export default function BanyoTadilatiPage() {
  return (
    <main>
      <PageHeader
        title="Banyo Tadilatı"
        subtitle="Komple banyo yenileme hizmeti"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Banyo Tadilatı", href: "/hizmetlerimiz/banyo-tadilati" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Bath className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Banyo Tadilatı Hizmeti
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Hayalinizdeki banyoya kavuşun! Çerkezköy ve çevresinde
                    komple banyo tadilatı hizmeti sunuyoruz. Seramik döşeme,
                    tesisat yenileme, vitrifiye montajı ve su izolasyonu ile
                    anahtar teslim projeler gerçekleştiriyoruz.
                  </p>
                  <p>
                    Banyo tadilatı projelerimizde önce keşif yapıyoruz, 3D
                    tasarım sunuyoruz ve onay sonrası işlemlere başlıyoruz.
                    Eski seramik ve vitrifiye sökülür, yeni tesisat montajı
                    yapılır, su izolasyonu uygulanır ve seramik döşeme
                    gerçekleştirilir.
                  </p>
                  <p>
                    Tüm işlemlerimizde kaliteli malzeme kullanıyoruz ve
                    işçilik garantisi veriyoruz. Projeden teslimine kadar tüm
                    süreci yönetiyoruz. Tadilat sonrası banyonuz modern,
                    hijyenik ve uzun ömürlü olacak.
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
                      ₺15.000'den itibaren
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
                      href="/hizmetlerimiz/su-tesisati"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Su Tesisatı →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/kacak-tespiti"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kaçak Tespiti →
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
                <Bath className="w-12 h-12 text-primary/30" />
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

