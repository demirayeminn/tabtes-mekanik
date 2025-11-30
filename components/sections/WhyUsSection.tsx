import { Check } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      title: "15+ Yıl Deneyim",
      description: "Sektörde uzun yıllara dayanan tecrübe ve uzmanlık",
    },
    {
      title: "Garantili İşçilik",
      description: "Tüm işlerimizde 2 yıl garanti veriyoruz",
    },
    {
      title: "Şeffaf Fiyatlandırma",
      description: "Gizli maliyet yok, işe başlamadan fiyat bilgisi",
    },
    {
      title: "Aynı Gün Servis",
      description: "Acil durumlarda aynı gün müdahale garantisi",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Image Placeholder */}
          <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden flex items-center justify-center">
            <p className="text-foreground-muted">Görsel Alanı</p>
          </div>

          {/* RIGHT SIDE - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              Neden Tabtes Mekanik?
            </h2>
            <p className="text-foreground-muted mt-4">
              15 yılı aşkın deneyimimizle Çerkezköy ve çevresinde güvenilir
              tesisat hizmeti sunuyoruz.
            </p>

            {/* Features List */}
            <div className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground-muted mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
