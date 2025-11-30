import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Thermometer, Check, ChevronDown, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Çiller Gruplama | Çerkezköy | Tabtes Mekanik",
  description:
    "Endüstriyel soğutma için çiller sistemleri. Fabrika ve işletmeler için profesyonel çözümler. Çerkezköy çiller servisi.",
};

const processSteps = [
  {
    step: 1,
    title: "İhtiyaç Analizi",
    description:
      "Soğutma ihtiyacı analiz edilir, uygun çiller kapasitesi belirlenir ve sistem tasarımı yapılır.",
  },
  {
    step: 2,
    title: "Çiller Seçimi",
    description:
      "Hava soğutmalı veya su soğutmalı çiller seçilir, ekipmanlar belirlenir.",
  },
  {
    step: 3,
    title: "Montaj ve Bağlantı",
    description:
      "Çiller montaj edilir, soğutma hatları bağlanır ve kontrol sistemleri kurulur.",
  },
  {
    step: 4,
    title: "Test ve Devreye Alma",
    description:
      "Sistem test edilir, soğutma performansı kontrol edilir ve kullanıma hazır hale getirilir.",
  },
];

const features = [
  "Endüstriyel soğutma",
  "Hava soğutmalı çiller",
  "Su soğutmalı çiller",
  "Yüksek verimlilik",
  "Otomatik kontrol",
  "Periyodik bakım",
  "7/24 acil servis",
  "Uzman mühendislik",
];

const faqs = [
  {
    question: "Çiller sistemi nedir?",
    answer:
      "Çiller (chiller) sistemi, endüstriyel soğutma için kullanılan merkezi soğutma sistemidir. Soğutucu akışkan kullanarak soğuk su üretir ve bu su ile binaların veya proseslerin soğutulmasını sağlar. Fabrikalar, AVM'ler, oteller ve endüstriyel tesisler için idealdir.",
  },
  {
    question: "Hava soğutmalı mı yoksa su soğutmalı mı tercih edilmeli?",
    answer:
      "Hava soğutmalı çillerler daha ekonomik ve kolay kurulur, ancak daha fazla yer kaplar. Su soğutmalı çillerler daha verimli ve kompakt olur, ancak soğutma kulesi gerektirir. Projenize göre en uygun seçeneği keşif sırasında belirliyoruz.",
  },
  {
    question: "Bakım ne sıklıkla yapılmalı?",
    answer:
      "Çiller sistemleri yılda en az 2 kez bakım gerektirir. Filtre temizliği, soğutucu akışkan kontrolü, kompresör bakımı ve sistem testleri yapılmalıdır. Periyodik bakım paketlerimiz ile sisteminizin verimli çalışmasını sağlıyoruz.",
  },
  {
    question: "Kurulum maliyeti ne kadar?",
    answer:
      "Çiller sistemi kurulum maliyeti, kapasiteye ve sistem tipine göre değişir. Küçük sistemler için ₺100.000'den, büyük endüstriyel sistemler için ₺1.000.000+'dan başlar. Keşif sonrası detaylı fiyat teklifi sunulur.",
  },
];

export default function CillerGruplamaPage() {
  return (
    <main>
      <PageHeader
        title="Çiller Gruplama"
        subtitle="Endüstriyel soğutma sistemleri"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          {
            label: "Çiller Gruplama",
            href: "/hizmetlerimiz/ciller-gruplama",
          },
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
                  Çiller Gruplama Sistemleri
                </h2>
                <div className="text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Endüstriyel soğutma için çiller sistemleri kurulumu ve
                    bakımı hizmeti sunuyoruz. Fabrika ve işletmeler için
                    profesyonel çözümler geliştiriyoruz. Çerkezköy ve çevresinde
                    uzman mühendislik ekibimizle hizmet veriyoruz.
                  </p>
                  <p>
                    Çiller (chiller) sistemi, endüstriyel soğutma için kullanılan
                    merkezi soğutma sistemidir. Soğutucu akışkan kullanarak
                    soğuk su üretir ve bu su ile binaların veya proseslerin
                    soğutulmasını sağlar. Fabrikalar, AVM'ler, oteller ve
                    endüstriyel tesisler için idealdir.
                  </p>
                  <p>
                    Hava soğutmalı veya su soğutmalı çiller seçenekleri
                    sunuyoruz. Sistem tasarımı, montaj ve bakım hizmetlerimiz
                    garantilidir. Periyodik bakım paketlerimiz ile sisteminizin
                    verimli çalışmasını sağlıyoruz ve enerji tasarrufu
                    sağlıyoruz.
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
                      href="/hizmetlerimiz/isitma-sogutma"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      Isıtma & Soğutma →
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

