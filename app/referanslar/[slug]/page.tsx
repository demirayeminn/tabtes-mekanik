import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { references } from "@/data/references";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface ReferenceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return references.map((ref) => ({
    slug: ref.slug,
  }));
}

export async function generateMetadata({
  params,
}: ReferenceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const reference = references.find((r) => r.slug === slug);

  if (!reference) {
    return {
      title: "Referans Bulunamadı",
    };
  }

  return {
    title: `${reference.title} | Referanslar | Tabtes Mekanik`,
    description: reference.description,
  };
}

export default async function ReferenceDetailPage({
  params,
}: ReferenceDetailPageProps) {
  const { slug } = await params;
  const reference = references.find((r) => r.slug === slug);

  if (!reference) {
    notFound();
  }

  const date = new Date(reference.date + "-01");
  const formattedDate = date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
  });

  // Get related references (same category, exclude current)
  const relatedReferences = references
    .filter((r) => r.category === reference.category && r.id !== reference.id)
    .slice(0, 3);

  return (
    <main>
      <PageHeader
        title={reference.title}
        subtitle={reference.category}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Referanslarımız", href: "/referanslar" },
          { label: reference.title, href: `/referanslar/${reference.slug}` },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Back Link */}
              <Link
                href="/referanslar"
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Referanslara Dön
              </Link>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-foreground-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{reference.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
                <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-sm font-medium">
                  {reference.category}
                </span>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-heading">
                  Proje Görüntüleri
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reference.images.map((image, index) => (
                    <ImagePlaceholder
                      key={index}
                      aspectRatio="video"
                      text={`${reference.title} - Görsel ${index + 1}`}
                      className="rounded-xl"
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-foreground font-heading mb-4">
                  Proje Detayları
                </h3>
                <p className="text-foreground-muted leading-relaxed text-lg">
                  {reference.description}
                </p>
              </div>

              {/* Before/After Section */}
              <div className="bg-muted rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground font-heading mb-6">
                  Öncesi ve Sonrası
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Öncesi</h4>
                    <ImagePlaceholder
                      aspectRatio="video"
                      text="Öncesi Görsel"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sonrası</h4>
                    <ImagePlaceholder
                      aspectRatio="video"
                      text="Sonrası Görsel"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Projects */}
              {relatedReferences.length > 0 && (
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground font-heading mb-4">
                    Benzer Projeler
                  </h3>
                  <ul className="space-y-4">
                    {relatedReferences.map((relatedRef) => (
                      <li key={relatedRef.id}>
                        <Link
                          href={`/referanslar/${relatedRef.slug}`}
                          className="text-foreground-muted hover:text-primary transition-colors block"
                        >
                          <h4 className="font-semibold text-foreground mb-1">
                            {relatedRef.title}
                          </h4>
                          <p className="text-sm line-clamp-2">
                            {relatedRef.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-primary-light rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground font-heading mb-4">
                  Benzer Proje mi İstiyorsunuz?
                </h3>
                <p className="text-foreground-muted mb-4">
                  Hemen arayın, ücretsiz keşif yapalım!
                </p>
                <a
                  href="tel:+905370102412"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Hemen Ara
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

