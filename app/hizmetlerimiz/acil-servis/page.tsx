import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Clock, Check, ChevronDown, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "7/24 Acil Servis | Çerkezköy | Tabtes Mekanik",
  description:
    "Çerkezköy'de 7/24 acil tesisat servisi. Gece gündüz acil müdahale. Su kaçağı, kombi arızası, tıkanıklık. Hızlı çözüm.",
};

const processSteps = [
  {
    step: 1,
    title: "Acil Çağrı",
    description:
      "7/24 hattımızı arayın, acil durumunuzu bildirin. Hemen ekibimiz yola çıkar.",
  },
  {
    step: 2,
    title: "Hızlı Müdahale",
    description:
      "Çerkezköy ve çevresinde ortalama 30-60 dakika içinde adresinizdeyiz.",
  },
  {
    step: 3,
    title: "Acil Çözüm",
    description:
      "Uzman ekibimiz sorunu tespit eder ve acil müdahale ile çözüm sağlar.",
  },
  {
    step: 4,
    title: "Kalıcı Onarım",
    description:
      "Acil müdahale sonrası kalıcı çözüm için planlama yapılır ve onarım gerçekleştirilir.",
  },
];

const features = [
  "7/24 hizmet",
  "Hızlı müdahale",
  "Acil su kaçağı",
  "Kombi arızası",
  "Tıkanıklık açma",
  "Gaz kaçağı",
  "Uzman ekip",
  "Garantili çözüm",
];

const faqs = [
  {
    question: "Acil servis ne kadar sürede gelir?",
    answer:
      "Çerkezköy ve çevresinde ortalama 30-60 dakika içinde adresinizdeyiz. Trafik durumuna göre bu süre değişebilir. Acil durumlarda öncelik veriyoruz.",
  },
  {
    question: "Acil servis ücreti ne kadar?",
    answer:
      "Acil servis ücreti duruma göre değişir. Temel müdahale ücreti ₺500'den başlar. Yapılan işlem ve kullanılan malzemeye göre toplam fiyat belirlenir.",
  },
  {
    question: "Hangi acil durumlarda hizmet veriyorsunuz?",
    answer:
      "Su kaçağı, kombi arızası, tıkanıklık, gaz kaçağı, petek patlaması, su kesintisi gibi tüm acil tesisat durumlarında hizmet veriyoruz. 7/24 yanınızdayız.",
  },
  {
    question: "Gece de hizmet veriyor musunuz?",
    answer:
      "Evet, 7/24 hizmet veriyoruz. Gece, hafta sonu ve resmi tatillerde de acil servis hizmetimiz devam eder. Hemen arayın, aynı gün çözüm sunalım.",
  },
];

export default function AcilServisPage() {
  return (
    <main>
      <PageHeader
        title="7/24 Acil Servis"
        subtitle="Gece gündüz acil müdahale"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: "7/24 Acil Servis", href: "/hizmetlerimiz/acil-servis" },
        ]}
      />

      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-[16/6] rounded-2xl bg-primary-light flex items-center justify-center">
            <Clock className="w-24 h-24 text-primary/30" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                  7/24 Acil Servis Hizmeti
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Tesisat acil durumlarında yanınızdayız! Çerkezköy ve
                    çevresinde 7/24 acil servis hizmeti sunuyoruz. Su kaçağı,
                    kombi arızası, tıkanıklık, gaz kaçağı gibi tüm acil
                    durumlarda hızlı müdahale garantisi veriyoruz.
                  </p>
                  <p>
                    Acil servis ekibimiz 7/24 hazır durumda. Çağrı aldığımızda
                    ortalama 30-60 dakika içinde adresinizdeyiz. Uzman
                    ekipmanlarımız ve deneyimli ekibimizle acil sorunları hızlı
                    şekilde çözüyoruz.
                  </p>
                  <p>
                    Gece, hafta sonu ve resmi tatillerde de hizmet veriyoruz.
                    Acil müdahale sonrası kalıcı çözüm için planlama yapıyoruz
                    ve onarım işlemlerini gerçekleştiriyoruz. Tüm işlemlerimiz
                    garantilidir.
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

              <div className="bg-accent rounded-xl p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Acil Durum mu Var?
                    </h3>
                    <p className="text-lg mb-4">Hemen Arayın!</p>
                    <a
                      href="tel:+905370102412"
                      className="text-3xl font-bold hover:underline"
                    >
                      0537 010 24 12
                    </a>
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
                  7/24 acil servis hattımızı arayın.
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
                      href="/hizmetlerimiz/kombi"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Kombi Servisi →
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
                <Clock className="w-12 h-12 text-primary/30" />
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

