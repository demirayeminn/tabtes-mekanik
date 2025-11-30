import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import {
  Shield,
  Clock,
  Heart,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | Tabtes Mekanik | Çerkezköy Tesisatçı",
  description:
    "Tabtes Mekanik - 15 yıllık deneyim ile Çerkezköy ve Trakya'da güvenilir tesisat hizmeti. Ekibimizi ve hikayemizi tanıyın.",
};

export default function HakkimizdaPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <PageHeader
        title="Hakkımızda"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      {/* SECTION: HİKAYEMİZ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="text-accent font-semibold uppercase tracking-wide text-sm">
                Tabtes Mekanik Tesisat
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mt-2">
                15 Yıllık Tecrübe, Binlerce Mutlu Müşteri
              </h2>
              <div className="space-y-4 mt-6 text-foreground-muted leading-relaxed">
                <p>
                  2009 yılında Çerkezköy'de küçük bir atölye olarak yola çıktık.
                  Bugün Trakya'nın en güvenilir tesisat firmalarından biri
                  haline geldik.
                </p>
                <p>
                  Müşteri memnuniyetini her şeyin önünde tutuyoruz. Kaliteli
                  malzeme, uzman ekip ve şeffaf fiyatlandırma ile hizmet
                  veriyoruz.
                </p>
                <p>
                  Amacımız sadece sorunu çözmek değil, müşterilerimizle uzun
                  vadeli güven ilişkisi kurmaktır.
                </p>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden shadow-xl flex items-center justify-center">
              <p className="text-foreground-muted">Ekip Fotoğrafı</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RAKAMLARLA BİZ */}
      <section className="bg-primary py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">15+</div>
              <div className="text-white/80 mt-2">Yıl Deneyim</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">5000+</div>
              <div className="text-white/80 mt-2">Mutlu Müşteri</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <div className="text-white/80 mt-2">Günlük Servis</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold">%100</div>
              <div className="text-white/80 mt-2">Memnuniyet</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DEĞERLERİMİZ */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 - Güvenilirlik */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mt-4">
                Güvenilirlik
              </h3>
              <p className="text-foreground-muted mt-2">
                Verdiğimiz sözü tutarız. Tüm işlerimizde garanti veririz.
              </p>
            </div>

            {/* Card 2 - Dakiklik */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Clock className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mt-4">
                Dakiklik
              </h3>
              <p className="text-foreground-muted mt-2">
                Randevu saatine uyarız. Zamanınıza saygı duyarız.
              </p>
            </div>

            {/* Card 3 - Müşteri Odaklılık */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-foreground mt-4">
                Müşteri Odaklılık
              </h3>
              <p className="text-foreground-muted mt-2">
                Müşteri memnuniyeti bizim için her şeyden önemlidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EKİBİMİZ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
              Uzman Ekibimiz
            </h2>
            <p className="text-foreground-muted mt-4">
              Deneyimli ve sertifikalı ustalarımız
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Team Member 1 */}
            <div>
              <div className="aspect-square rounded-xl bg-muted flex items-center justify-center">
                <User className="w-16 h-16 text-foreground-muted" />
              </div>
              <h3 className="font-semibold text-foreground mt-4 text-center">
                Ali YILDIZ
              </h3>
              <p className="text-foreground-muted text-sm text-center">
                Usta Tekniker
              </p>
            </div>

            {/* Team Member 2 */}
            <div>
              <div className="aspect-square rounded-xl bg-muted flex items-center justify-center">
                <User className="w-16 h-16 text-foreground-muted" />
              </div>
              <h3 className="font-semibold text-foreground mt-4 text-center">
                Tayip YILDIZ
              </h3>
              <p className="text-foreground-muted text-sm text-center">
                Usta Tekniker
              </p>
            </div>

            {/* Team Member 3 */}
            <div>
              <div className="aspect-square rounded-xl bg-muted flex items-center justify-center">
                <User className="w-16 h-16 text-foreground-muted" />
              </div>
              <h3 className="font-semibold text-foreground mt-4 text-center">
                Bayram YILDIZ
              </h3>
              <p className="text-foreground-muted text-sm text-center">
                Usta Tekniker
              </p>
            </div>

            {/* Team Member 4 */}
            <div>
              <div className="aspect-square rounded-xl bg-muted flex items-center justify-center">
                <User className="w-16 h-16 text-foreground-muted" />
              </div>
              <h3 className="font-semibold text-foreground mt-4 text-center">
                Emin DEMİRAY
              </h3>
              <p className="text-foreground-muted text-sm text-center">
                Ustabaşı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </main>
  );
}

