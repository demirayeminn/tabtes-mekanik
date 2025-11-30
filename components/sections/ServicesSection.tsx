"use client";

import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  // Anasayfada gösterilecek hizmetler (belirtilen sıraya göre)
  const homepageServicePaths = [
    "/hizmetlerimiz/yangin-sprink",
    "/hizmetlerimiz/kazan-dairesi",
    "/hizmetlerimiz/kaskat-sistemler",
    "/hizmetlerimiz/isitma-sogutma",
    "/hizmetlerimiz/ciller-gruplama",
    "/hizmetlerimiz/su-tesisati",
    "/hizmetlerimiz/kacak-tespiti",
    "/hizmetlerimiz/acil-servis",
  ];

  // Sadece belirtilen hizmetleri göster
  const displayServices = services.filter((service) =>
    homepageServicePaths.includes(service.href)
  );

  // Başlıkları düzelt (hizmetlerimiz sayfasındaki gibi)
  const formattedServices = displayServices.map((service) => {
    let title = service.title;
    // Başlıkları düzelt
    if (service.href === "/hizmetlerimiz/yangin-sprink") {
      title = "Yangın Sprink Sistemleri";
    } else if (service.href === "/hizmetlerimiz/kaskat-sistemler") {
      title = "Kaskat Kazan Sistemleri";
    } else if (service.href === "/hizmetlerimiz/isitma-sogutma") {
      title = "Isıtma & Soğutma Sistemleri";
    }
    return {
      ...service,
      title,
    };
  });

  // Belirtilen sıraya göre sırala
  const orderedServices = homepageServicePaths
    .map((path) => formattedServices.find((s) => s.href === path))
    .filter((service): service is typeof formattedServices[0] => service !== undefined);

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Profesyonel Hizmetlerimiz
          </h2>
          <p className="text-foreground-muted mt-4 max-w-2xl mx-auto">
            Tüm tesisat ihtiyaçlarınız için yanınızdayız
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {orderedServices.map((service) => (
            <ServiceCard
              key={service.href}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              featured={service.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
