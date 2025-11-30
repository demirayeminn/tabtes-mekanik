import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Thermometer, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Petek Temizleme | Çerkezköy | Tabtes Mekanik",
  description:
    "Çerkezköy'de profesyonel petek temizleme hizmeti. Petek ve sistem temizliği ile ısınma verimliliğini artırın. ₺200/petek.",
};

const processSteps = [
  {
    step: 1,
    title: "Sistem Kontrolü",
    description:
      "Uzman ekibimiz petekleri ve sistemi kontrol eder, temizlik gereksinimini belirler.",
  },
  {
    step: 2,
    title: "Sistem Boşaltma",
    description:
      "Kalorifer sistemi güvenli şekilde boşaltılır ve petekler sökülür.",
  },
  {
    step: 3,
    title: "Temizlik İşlemi",
    description:
      "Kimyasal temizleyici ve basınçlı su ile petekler ve sistem temizlenir.",
  },
  {
    step: 4,
    title: "Sistem Doldurma",
    description:
      "Temizlik sonrası sistem tekrar doldurulur, hava tahliyesi yapılır ve test edilir.",
  },
];

const features = [
  "Petek başına temizlik",
  "Sistem temizliği",
  "Kimyasal temizleyici",
  "Basınçlı su ile yıkama",
  "Hava tahliyesi",
  "Sistem testi",
  "Verimlilik artışı",
  "Yakıt tasarrufu",
];

const faqs = [
  {
    question: "Petek temizliği ne sıklıkla yapılmalı?",
    answer:
      "Normal kullanımda petek temizliği 2-3 yılda bir yapılmalıdır. Eski sistemlerde veya sorun varsa her yıl temizlik önerilir. Temizlik sonrası %30'a kadar yakıt tasarrufu sağlanabilir.",
  },
  {
    question: "Petek temizliği ne kadar sürer?",
    answer:
      "Petek sayısına göre değişmekle birlikte, ortalama bir daire için 4-6 saat sürmektedir. Sistem büyüklüğüne göre bu süre uzayabilir.",
  },
  {
    question: "Temizlik sırasında su kesintisi olur mu?",
    answer:
      "Evet, petek temizliği sırasında kalorifer sistemi boşaltıldığı için ısınma geçici olarak durur. İşlem tamamlandıktan sonra sistem tekrar devreye alınır.",
  },
  {
    question: "Petek temizliği fiyatı ne kadar?",
    answer:
      "Petek temizliği petek başına ₺200'den başlamaktadır. Sistem temizliği dahildir. Petek sayısına göre toplam fiyat belirlenir.",
  },
];

export default function PetekTemizlemePage() {
  return (
    <main>
      <PageHeader
        title="Petek Temizleme"
        subtitle="Profesyonel petek ve sistem temizliği"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Petek Temizleme", href: "/hizmetlerimiz/petek-temizleme" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Thermometer className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Petek Temizleme Hizmeti
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Petekleriniz yeterince ısıtmıyor mu? Çerkezköy ve çevresinde
                    profesyonel petek temizleme hizmeti sunuyoruz. Petek ve
                    sistem temizliği ile ısınma verimliliğinizi artırıyoruz.
                    Temizlik sonrası %30'a kadar yakıt tasarrufu sağlayabilirsiniz.
                  </p>
                  <p>
                    Kalorifer sistemi içindeki su zamanla tortu biriktirir, pas
                    oluşturur ve hava kabarcıkları birikir. Bu birikimler
                    peteğin ısıtma verimini düşürür. Profesyonel temizlik ile
                    bu sorunları çözüyoruz.
                  </p>
                  <p>
                    Petek temizliği işlemimizde kimyasal temizleyici ve basınçlı
                    su kullanıyoruz. Petekler sökülür, temizlenir ve tekrar
                    monte edilir. Sistem temizliği de yapılır. İşlem sonrası
                    hava tahliyesi yapılır ve sistem test edilir.
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
                      Fiyat
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      ₺200 / Petek
                    </p>
                    <p className="text-sm text-foreground-muted mt-1">
                      * Sistem temizliği dahildir
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
                  Petek temizliği için bize ulaşın.
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
                      href="/hizmetlerimiz/kombi"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kombi Bakımı →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hizmetlerimiz/su-tesisati"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Su Tesisatı →
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
                <Thermometer className="w-12 h-12 text-primary/30" />
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

