"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setIsSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const regions = [
    "Çerkezköy",
    "Kapaklı",
    "Çorlu",
    "Velimeşe",
    "Marmaracık",
    "Kızılpınar",
    "Saray",
    "Muratlı",
    "Tekirdağ Merkez",
    "Edirne",
  ];

  return (
    <main>
      {/* PAGE HEADER */}
      <PageHeader
        title="İletişim"
        subtitle="Bize ulaşın, sorularınızı yanıtlayalım"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim", href: "/iletisim" },
        ]}
      />

      {/* MAIN CONTENT SECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT SIDE: CONTACT FORM */}
            <div className="bg-muted rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground font-heading">
                Mesaj Gönderin
              </h2>
              <p className="text-foreground-muted mt-2">
                Formu doldurun, en kısa sürede dönüş yapalım
              </p>

              {isSuccess ? (
                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium">
                    Mesajınız alındı! En kısa sürede dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  {/* Ad Soyad */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-white border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  {/* E-posta */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Konu */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    >
                      <option value="">Konu seçin...</option>
                      <option value="fiyat-teklifi">Fiyat Teklifi</option>
                      <option value="teknik-destek">Teknik Destek</option>
                      <option value="sikayet-oneri">Şikayet/Öneri</option>
                      <option value="is-basvurusu">İş Başvurusu</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-border rounded-lg p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT SIDE: CONTACT INFO */}
            <div>
              <h2 className="text-2xl font-bold text-foreground font-heading">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6 mt-8">
                {/* Adres */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Adres</h3>
                    <p className="text-foreground-muted mt-1">
                      Çerkezköy Mahallesi, Atatürk Caddesi, Çerkezköy/Tekirdağ
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefon</h3>
                    <a
                      href="tel:+905370102412"
                      className="text-primary font-semibold hover:underline mt-1 block"
                    >
                      0537 010 24 12
                    </a>
                    <p className="text-foreground-muted text-sm mt-1">
                      7/24 Acil Servis Hattı
                    </p>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-posta</h3>
                    <a
                      href="mailto:tabtesmekanik@gmail.com"
                      className="text-primary hover:underline mt-1 block"
                    >
                      tabtesmekanik@gmail.com
                    </a>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-foreground-muted mt-1">
                      Pazartesi - Cumartesi: 08:00 - 20:00
                    </p>
                    <p className="text-foreground-muted text-sm mt-1">
                      Pazar: Sadece Acil Servis
                    </p>
                  </div>
                </div>
              </div>

              {/* QUICK CONTACT BUTTONS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Hemen Ara Button */}
                <a
                  href="tel:+905370102412"
                  className="bg-accent text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/905370102412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden bg-white shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47942.47344584499!2d27.96!3d41.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4eb4e9b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s%C3%87erkezk%C3%B6y%2C%20Tekirda%C4%9F!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Çerkezköy Konum"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-foreground font-heading text-center">
            Hizmet Verdiğimiz Bölgeler
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-primary-light text-primary rounded-lg p-3 text-center font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

