import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import {
  Flame,
  Droplets,
  Search,
  Thermometer,
  Bath,
  Clock,
  Check,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tesisat Hizmetleri | Kombi, Su Tesisatı, Kaçak Tespiti | Çerkezköy",
  description:
    "Profesyonel tesisat hizmetleri: Kombi montajı ve bakımı, su tesisatı, kaçak tespiti, petek temizleme, banyo tadilatı. Çerkezköy, Çorlu, Tekirdağ.",
};

const services = [
  {
    icon: Flame,
    title: "Kombi Montajı & Bakımı",
    description:
      "Evinizin veya iş yerinizin ısınma ihtiyaçları için profesyonel kombi montaj ve bakım hizmeti sunuyoruz. Baymak, Demirdöküm, Vaillant, Bosch gibi tüm önde gelen markaların yetkili servis kalitesinde montajını gerçekleştiriyoruz. Yıllık periyodik bakım ile kombinizin ömrünü uzatıyor, enerji tasarrufu sağlıyoruz.",
    features: [
      "Tüm marka kombilerde uzman montaj",
      "Yıllık periyodik bakım hizmeti",
      "Arıza tespit ve onarım",
      "2 yıl işçilik garantisi",
      "Orijinal yedek parça kullanımı",
    ],
    price: "₺3.500'den itibaren",
    index: 1,
  },
  {
    icon: Droplets,
    title: "Su Tesisatı",
    description:
      "Yeni bina tesisatından tadilata, küçük onarımlardan komple yenilemeye kadar tüm su tesisatı işlerinizde yanınızdayız. Kaliteli PPR ve bakır borularla uzun ömürlü tesisatlar yapıyoruz. Sızdırmazlık testleri ile işin kalitesini garanti altına alıyoruz.",
    features: [
      "Yeni bina komple tesisat",
      "Tadilat ve yenileme işleri",
      "Sızdırmazlık ve basınç testleri",
      "Kaliteli malzeme garantisi",
      "Temiz ve özenli çalışma",
    ],
    price: "₺2.000'den itibaren",
    index: 2,
  },
  {
    icon: Search,
    title: "Kaçak Tespiti",
    description:
      "Kameralı ve termal cihazlarla kırıp dökmeden su kaçağı tespiti yapıyoruz. Duvar içi, döşeme altı ve gizli kaçakları hassas ekipmanlarla buluyoruz. Gereksiz kırım ve tadilat maliyetlerinden sizi kurtarıyoruz.",
    features: [
      "Kameralı boru içi tespit sistemi",
      "Termal görüntüleme teknolojisi",
      "Kırıp dökmeden hassas tespit",
      "Aynı gün detaylı rapor",
      "Tespit sonrası onarım hizmeti",
    ],
    price: "₺800'den itibaren",
    index: 3,
  },
  {
    icon: Thermometer,
    title: "Petek Temizleme",
    description:
      "Peteklerinizin verimli çalışması için profesyonel temizlik hizmeti sunuyoruz. Kombi dahil komple sistem temizliği ile ısınma verimliliğinizi artırıyor, yakıt tasarrufu sağlıyoruz. Kimyasal yıkama ve basınçlı temizlik yöntemleri kullanıyoruz.",
    features: [
      "Kombi dahil komple sistem temizliği",
      "Kimyasal yıkama işlemi",
      "Basınç testi ve kontrol",
      "Verimlilik artışı garantisi",
      "Temizlik sonrası rapor",
    ],
    price: "₺200/petek",
    index: 4,
  },
  {
    icon: Bath,
    title: "Banyo Tadilatı",
    description:
      "Banyonuzu baştan sona yeniliyoruz. Seramik döşeme, tesisat yenileme, vitrifiye montajı dahil anahtar teslim projeler sunuyoruz. Modern ve şık banyolar için komple çözümler üretiyoruz. Su ve ısı yalıtımı ile uzun ömürlü sonuçlar garantiliyoruz.",
    features: [
      "Komple banyo yenileme",
      "Seramik ve fayans döşeme",
      "Vitrifiye ve armatür montajı",
      "Su ve ısı yalıtımı",
      "Anahtar teslim proje yönetimi",
    ],
    price: "₺15.000'den itibaren",
    index: 5,
  },
  {
    icon: Clock,
    title: "7/24 Acil Servis",
    description:
      "Gece yarısı su basması, boru patlaması veya acil tesisat arızalarında 7/24 yanınızdayız. Çerkezköy ve çevresinde en hızlı müdahale ekibiyiz. 30 dakika içinde adresinizde oluyoruz. Hafta sonu ve resmi tatillerde de hizmet veriyoruz.",
    features: [
      "7/24 ulaşılabilir acil hat",
      "30 dakikada adresinizde",
      "Hafta sonu ve tatil hizmeti",
      "Acil müdahale ekibi",
      "Geçici ve kalıcı çözümler",
    ],
    price: "Duruma göre değişir",
    index: 6,
  },
];

const faqs = [
  {
    question: "Kombi bakımı ne sıklıkla yapılmalı?",
    answer:
      "Kombilerin yılda en az bir kez bakımının yapılması önerilir. Düzenli bakım ile kombinizin ömrü uzar, arıza riski azalır ve enerji verimliliği artar. Kış ayları öncesi (Eylül-Ekim) bakım yaptırmanız idealdir.",
  },
  {
    question: "Kaçak tespiti ne kadar sürer?",
    answer:
      "Standart bir kaçak tespiti işlemi ortalama 1-2 saat sürer. Ancak kaçağın yeri ve binanın yapısına göre bu süre değişebilir. Tespit sonrası aynı gün detaylı rapor sunuyoruz.",
  },
  {
    question: "Hangi bölgelere hizmet veriyorsunuz?",
    answer:
      "Çerkezköy merkez olmak üzere Kapaklı, Çorlu, Velimeşe, Marmaracık, Kızılpınar, Saray, Muratlı, Tekirdağ merkez ve Edirne bölgelerine hizmet veriyoruz.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm montaj ve tadilat işlerimizde 2 yıl işçilik garantisi veriyoruz. Kullandığımız malzemeler için üretici garantisi ayrıca geçerlidir.",
  },
  {
    question: "Hafta sonu çalışıyor musunuz?",
    answer:
      "Cumartesi günleri normal mesai saatlerinde çalışıyoruz. Pazar günleri ve resmi tatillerde sadece acil servis hizmeti veriyoruz.",
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Nakit, kredi kartı (tek çekim ve taksit), havale ve EFT ile ödeme kabul ediyoruz. Büyük projelerde taksit imkanı sunuyoruz.",
  },
];

export default function HizmetlerimizPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <PageHeader
        title="Hizmetlerimiz"
        subtitle="Profesyonel tesisat çözümleri"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
        ]}
      />

      {/* SERVICES DETAILED SECTION */}
      <section className="bg-white py-16 md:py-24">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const isOdd = service.index % 2 === 1;
          const isLast = idx === services.length - 1;

          return (
            <div
              key={service.index}
              className={`max-w-7xl mx-auto px-4 ${
                !isLast ? "border-b border-border py-16" : idx === 0 ? "" : "pt-16"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* IMAGE SIDE */}
                <div
                  className={`aspect-[4/3] rounded-2xl bg-muted overflow-hidden shadow-lg flex items-center justify-center ${
                    isOdd ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Icon className="w-20 h-20 text-primary/30" />
                </div>

                {/* CONTENT SIDE */}
                <div className={isOdd ? "lg:order-2" : "lg:order-1"}>
                  {/* Icon Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-foreground-muted mt-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mt-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground-muted">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price Indicator */}
                  <div className="mt-6 text-lg font-semibold text-primary">
                    Başlangıç fiyatı: {service.price}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/fiyat-teklifi"
                    className="mt-6 inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQ SECTION */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm group"
              >
                <summary className="p-6 font-semibold text-foreground cursor-pointer hover:bg-muted/50 flex items-center justify-between list-none">
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

      {/* CTA BANNER */}
      <CTABanner />
    </main>
  );
}

