"use client";

import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {services.map((service) => (
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
