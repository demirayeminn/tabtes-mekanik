import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Search, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kaçak Tespiti | Çerkezköy | Tabtes Mekanik",
  description:
    "Çerkezköy'de kameralı ve cihazlı kaçak tespit hizmeti. Kırıp dökmeden hassas tespit. Hızlı müdahale, garantili çözüm.",
};

const processSteps = [
  {
    step: 1,
    title: "İlk İnceleme",
    description:
      "Uzman ekibimiz kaçak şüphesi olan bölgeyi inceler ve görsel kontrol yapar.",
  },
  {
    step: 2,
    title: "Cihazlı Tespit",
    description:
      "Nem ölçer, termal kamera ve akustik dinleme cihazlarıyla kaçak kaynağı tespit edilir.",
  },
  {
    step: 3,
    title: "Kameralı İnceleme",
    description:
      "Gerekirse boru kamera sistemiyle boru içi görüntüleme yapılır ve kaçak noktası belirlenir.",
  },
  {
    step: 4,
    title: "Rapor ve Çözüm",
    description:
      "Tespit sonrası detaylı rapor sunulur ve onarım çözümü önerilir.",
  },
];

const features = [
  "Kameralı kaçak tespit",
  "Cihazlı nem ölçümü",
  "Termal kamera kullanımı",
  "Akustik dinleme",
  "Kırıp dökmeden tespit",
  "Hızlı müdahale",
  "Detaylı rapor",
  "Garantili çözüm",
];

const faqs = [
  {
    question: "Kaçak tespiti ne kadar sürer?",
    answer:
      "Kaçak tespiti genellikle 1-2 saat içinde tamamlanır. Karmaşık durumlarda bu süre uzayabilir. Tespit işlemi kırıp dökmeden yapıldığı için evinizde herhangi bir hasar oluşmaz.",
  },
  {
    question: "Tespit ücreti ne kadar?",
    answer:
      "Kaçak tespiti başlangıç fiyatı ₺800'dir. Kaçak tespit edildikten sonra onarım işlemi ayrıca fiyatlandırılır. Tespit sonrası onarım yaptırırsanız tespit ücreti onarım fiyatından düşülür.",
  },
  {
    question: "Hangi cihazlar kullanılıyor?",
    answer:
      "Nem ölçer, termal kamera, akustik dinleme cihazı ve boru kamera sistemi kullanıyoruz. Bu cihazlar sayesinde duvarları kırmadan kaçağın kaynağını tespit edebiliyoruz.",
  },
  {
    question: "Tespit garantili mi?",
    answer:
      "Evet, tespit işlemimiz garantilidir. Kaçak tespit edilemezse ücret alınmaz. Tespit edilen kaçağın onarımı da garantilidir.",
  },
];

export default function KacakTespitiPage() {
  return (
    <main>
      <PageHeader
        title="Kaçak Tespiti"
        subtitle="Profesyonel kaçak tespit hizmeti"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "Kaçak Tespiti", href: "/hizmetlerimiz/kacak-tespiti" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Search className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  Kaçak Tespiti Hizmeti
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Su kaçağı şüpheniz mi var? Çerkezköy ve çevresinde kameralı
                    ve cihazlı kaçak tespit hizmeti sunuyoruz. Modern teknoloji
                    cihazlarımızla duvarları kırmadan kaçağın kaynağını tespit
                    ediyoruz. Hızlı ve hassas tespit ile zaman ve maliyet
                    tasarrufu sağlıyoruz.
                  </p>
                  <p>
                    Nem ölçer, termal kamera, akustik dinleme cihazı ve boru
                    kamera sistemi kullanarak kaçak tespiti yapıyoruz. Bu
                    cihazlar sayesinde evinizde herhangi bir hasar oluşturmadan
                    kaçağın tam yerini belirliyoruz. Tespit sonrası detaylı
                    rapor sunuyoruz.
                  </p>
                  <p>
                    Kaçak tespit edildikten sonra onarım işlemini de
                    gerçekleştirebiliriz. Tüm onarım işlerimiz garantilidir.
                    Acil durumlarda 7/24 hizmet veriyoruz. Hemen arayın, aynı
                    gün müdahale edelim.
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
                      ₺800'den itibaren
                    </p>
                    <p className="text-sm text-foreground-muted mt-1">
                      * Onarım fiyatı ayrıca belirlenir
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
                  Acil kaçak tespiti için bize ulaşın.
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
                      href="/hizmetlerimiz/acil-servis"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Acil Servis →
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
                <Search className="w-12 h-12 text-primary/30" />
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

