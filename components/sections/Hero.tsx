"use client";

import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { siteContent } from "@/data/site-content";

export default function Hero() {
  const phoneNumber = siteContent.contact.phone;
  const phoneLink = `tel:+90${siteContent.contact.whatsapp}`;

  return (
    <section className="w-full min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-[#004494] via-[#0066CC] to-[#0066CC] relative">
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center py-20 lg:py-24">
        {/* TOP BADGE */}
        <div className="bg-accent text-white rounded-full px-5 py-2 text-sm font-medium inline-flex items-center gap-2 animate-pulse">
          <CheckCircle className="w-4 h-4" />
          <span>7/24 Acil Servis | Çerkezköy & Çorlu</span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-6 max-w-4xl animate-fade-in-up">
          Çerkezköy'ün Güvenilir Tesisatçısı
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl animate-fade-in-up animation-delay-100">
          Kombi montajı, su tesisatı, kaçak tespiti ve daha fazlası. Profesyonel ekip, uygun fiyat, garantili işçilik.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Primary Button */}
          <Link
            href={phoneLink}
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center transition-all hover:scale-105 shadow-lg animate-fade-in-up animation-delay-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hemen Ara: {phoneNumber}
          </Link>

          {/* Secondary Button */}
          <Link
            href="/fiyat-teklifi"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all animate-fade-in-up animation-delay-200"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12 animate-fade-in-up animation-delay-300">
          <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span>15+ Yıl Deneyim</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span>5000+ Mutlu Müşteri</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span>Garantili İşçilik</span>
          </div>
        </div>
      </div>
    </section>
  );
}
