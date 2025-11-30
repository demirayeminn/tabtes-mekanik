import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Check, ChevronDown, Phone, Clock } from "lucide-react";
import { getPriceDisplay } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Yangın Sprink Sistemleri | Çerkezköy | Tabtes Mekanik",
  description:
    "Endüstriyel ve ticari binalar için yangın sprinkler sistem montajı ve bakımı. TSE standartlarına uygun kurulum. Çerkezköy yangın sprinkler servisi.",
};

const processSteps = [
  {
    step: 1,
    title: "Proje ve Keşif",
    description:
      "Uzman ekibimiz binanızı inceler, yangın risk analizi yapar ve en uygun sprinkler sistemini tasarlar.",
  },
  {
    step: 2,
    title: "TSE Onaylı Montaj",
    description:
      "TSE standartlarına uygun malzemeler kullanılarak sprinkler sistemi montajı gerçekleştirilir.",
  },
  {
    step: 3,
    title: "Test ve Devreye Alma",
    description:
      "Sistem test edilir, basınç kontrolleri yapılır ve yangın güvenlik sertifikası verilir.",
  },
  {
    step: 4,
    title: "Periyodik Bakım",
    description:
      "Düzenli bakım ve kontrol hizmeti ile sistemin her zaman hazır durumda olması sağlanır.",
  },
];

const features = [
  "TSE standartlarına uygun kurulum",
  "Endüstriyel ve ticari binalar",
  "Otomatik sprinkler sistemleri",
  "Yangın güvenlik sertifikası",
  "Periyodik bakım hizmeti",
  "7/24 acil müdahale",
  "Uzman mühendislik ekibi",
  "Garantili işçilik",
];

const faqs = [
  {
    question: "Yangın sprinkler sistemi hangi binalarda zorunludur?",
    answer:
      "Endüstriyel tesisler, ticari binalar, oteller, hastaneler, okullar ve belirli büyüklükteki binalarda yangın sprinkler sistemi zorunludur. Bina tipine ve kullanım amacına göre yasal gereklilikler değişir. Detaylı bilgi için keşif yapılması gerekir.",
  },
  {
    question: "Sprinkler sistemi montajı ne kadar sürer?",
    answer:
      "Sprinkler sistemi montaj süresi bina büyüklüğüne ve sistem karmaşıklığına göre değişir. Küçük ticari binalar için 1-2 hafta, büyük endüstriyel tesisler için 1-3 ay sürebilir. Keşif sonrası kesin süre bildirilir.",
  },
  {
    question: "Bakım ne sıklıkla yapılmalı?",
    answer:
      "Yangın sprinkler sistemleri yılda en az 2 kez kontrol edilmelidir. Aylık görsel kontroller ve yıllık detaylı testler yapılmalıdır. Periyodik bakım paketlerimiz ile sisteminizin her zaman hazır durumda olmasını sağlıyoruz.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm yangın sprinkler sistem montajlarımızda 2 yıl işçilik garantisi veriyoruz. Kullandığımız malzemeler için de üretici garantisi geçerlidir. Garanti kapsamındaki tüm sorunlar ücretsiz çözülür.",
  },
];

export default function YanginSprinkPage() {
  return (
    <main>
      <PageHeader
        title="Yangın Sprink Sistemleri"
        subtitle="TSE standartlarına uygun yangın güvenlik sistemleri"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          {
            label: "Yangın Sprink Sistemleri",
            href: "/hizmetlerimiz/yangin-sprink",
          },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Shield className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Yangın Sprinkler Sistemleri
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Endüstriyel ve ticari binalar için yangın sprinkler sistem
                    montajı ve bakımı hizmeti sunuyoruz. TSE standartlarına uygun
                    kurulum ile binalarınızın yangın güvenliğini sağlıyoruz.
                    Çerkezköy ve çevresinde 15 yıllık deneyimimizle profesyonel
                    hizmet veriyoruz.
                  </p>
                  <p>
                    Yangın sprinkler sistemleri, yangın anında otomatik olarak
                    devreye giren ve yangını söndüren kritik güvenlik
                    sistemleridir. Endüstriyel tesisler, ticari binalar,
                    oteller, hastaneler ve okullar gibi büyük yapılarda
                    zorunludur. Sistemin doğru tasarımı ve montajı hayati
                    öneme sahiptir.
                  </p>
                  <p>
                    Tüm montaj işlemlerimiz TSE standartlarına uygun
                    gerçekleştirilir. Kaliteli malzeme kullanımı, uzman
                    mühendislik ekibi ve detaylı test işlemleri ile sistemin
                    her zaman hazır durumda olmasını sağlıyoruz. Montaj sonrası
                    yangın güvenlik sertifikası veriyoruz ve periyodik bakım
                    hizmeti sunuyoruz.
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
                      {getPriceDisplay("yangin-sprink")}
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
                      href="/hizmetlerimiz/kazan-dairesi"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kazan Dairesi →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/kaskat-sistemler"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kaskat Sistemler →
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
                <Shield className="w-12 h-12 text-primary/30" />
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

