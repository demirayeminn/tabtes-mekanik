import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Warehouse, Check, ChevronDown, Phone, Clock } from "lucide-react";
import { getPriceDisplay } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Kazan Dairesi Kurulumu | Çerkezköy | Tabtes Mekanik",
  description:
    "Merkezi ısıtma sistemleri için kazan dairesi kurulumu, bakımı ve onarımı. Profesyonel mühendislik hizmeti. Çerkezköy kazan dairesi servisi.",
};

const processSteps = [
  {
    step: 1,
    title: "Mühendislik Tasarımı",
    description:
      "Uzman mühendislerimiz binanın ihtiyacına göre kazan dairesi tasarımı yapar ve proje hazırlar.",
  },
  {
    step: 2,
    title: "Kazan Seçimi ve Montaj",
    description:
      "Uygun kapasitede kazan seçilir ve TSE standartlarına uygun şekilde montajı gerçekleştirilir.",
  },
  {
    step: 3,
    title: "Yanma ve Güvenlik Sistemleri",
    description:
      "Yanma sistemi, baca ve güvenlik ekipmanları montajı yapılır. Tüm sistemler test edilir.",
  },
  {
    step: 4,
    title: "Devreye Alma ve Eğitim",
    description:
      "Sistem devreye alınır, kullanım eğitimi verilir ve periyodik bakım planı oluşturulur.",
  },
];

const features = [
  "Merkezi ısıtma sistemleri",
  "Endüstriyel kazan montajı",
  "TSE standartlarına uygun",
  "Yanma ve güvenlik sistemleri",
  "Baca montajı",
  "Periyodik bakım",
  "7/24 acil servis",
  "Uzman mühendislik ekibi",
];

const faqs = [
  {
    question: "Kazan dairesi kurulumu ne kadar sürer?",
    answer:
      "Kazan dairesi kurulum süresi kazan kapasitesine ve sistem karmaşıklığına göre değişir. Küçük binalar için 2-3 hafta, büyük endüstriyel tesisler için 1-2 ay sürebilir. Proje onayı sonrası kesin süre bildirilir.",
  },
  {
    question: "Hangi tip kazanlar için hizmet veriyorsunuz?",
    answer:
      "Doğalgaz, fuel-oil, kömür ve elektrikli kazanlar için kurulum, bakım ve onarım hizmeti veriyoruz. Endüstriyel ve konut tipi tüm kazan sistemlerinde çalışıyoruz.",
  },
  {
    question: "Bakım ne sıklıkla yapılmalı?",
    answer:
      "Kazan dairesi bakımı yılda en az 2 kez yapılmalıdır. Kış sezonu öncesi ve sonrası bakım kritik öneme sahiptir. Periyodik bakım paketlerimiz ile sisteminizin verimli çalışmasını sağlıyoruz.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm kazan dairesi kurulumlarımızda 2 yıl işçilik garantisi veriyoruz. Kazan ve ekipmanlar için üretici garantisi geçerlidir. Garanti kapsamındaki tüm sorunlar ücretsiz çözülür.",
  },
];

export default function KazanDairesiPage() {
  return (
    <main>
      <PageHeader
        title="Kazan Dairesi"
        subtitle="Profesyonel kazan dairesi kurulumu ve bakımı"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Kazan Dairesi", href: "/hizmetlerimiz/kazan-dairesi" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Warehouse className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Kazan Dairesi Kurulumu ve Bakımı
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Merkezi ısıtma sistemleri için kazan dairesi kurulumu,
                    bakımı ve onarımı hizmeti sunuyoruz. Profesyonel
                    mühendislik ekibimiz ile binalarınızın ısıtma ihtiyacını
                    karşılayan kazan dairesi sistemleri kuruyoruz. Çerkezköy ve
                    çevresinde 15 yıllık deneyimimizle hizmet veriyoruz.
                  </p>
                  <p>
                    Kazan dairesi kurulumu, binanın ısıtma ihtiyacına göre
                    tasarlanmalı ve TSE standartlarına uygun şekilde
                    gerçekleştirilmelidir. Doğalgaz, fuel-oil, kömür veya
                    elektrikli kazan seçenekleri sunuyoruz. Her bina tipine
                    uygun çözümler geliştiriyoruz.
                  </p>
                  <p>
                    Kurulum sonrası periyodik bakım hizmeti sunuyoruz. Düzenli
                    bakım ile kazanın verimli çalışmasını sağlıyoruz ve yakıt
                    tasarrufu sağlıyoruz. Tüm işlemlerimiz garantilidir ve 7/24
                    acil servis desteği sunuyoruz.
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
                      Fiyat Aralığı
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {getPriceDisplay("kazan-dairesi")}
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
                      href="/hizmetlerimiz/kaskat-sistemler"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kaskat Sistemler →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/yangin-sprink"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Yangın Sprink →
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
                <Warehouse className="w-12 h-12 text-primary/30" />
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

