import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { siteContent } from "@/data/site-content";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/urunler", label: "Ürünlerimiz" },
    { href: "/blog", label: "Blog" },
    { href: "/fiyat-teklifi", label: "Fiyat Teklifi" },
    { href: "/iletisim", label: "İletişim" },
  ];

  const services = [
    { href: "/hizmetlerimiz/yangin-sprink", label: "Yangın Sprink Sistemleri" },
    { href: "/hizmetlerimiz/kazan-dairesi", label: "Kazan Dairesi" },
    { href: "/hizmetlerimiz/kaskat-sistemler", label: "Kaskat Sistemler" },
    { href: "/hizmetlerimiz/daire-tesisati", label: "Daire Tesisatı" },
    { href: "/hizmetlerimiz/isitma-sogutma", label: "Isıtma & Soğutma" },
    { href: "/hizmetlerimiz/ciller-gruplama", label: "Çiller Gruplama" },
  ];

  return (
    <footer className="bg-brand text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COLUMN 1 - Brand */}
          <div>
            <Image
              src="/logo.jpg"
              alt="Tabtes Mekanik Tesisat"
              width={160}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-white/80">
              Çerkezköy ve çevresinin güvenilir tesisat çözüm ortağı. 15 yılı
              aşkın deneyim ile hizmetinizdeyiz.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 - Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 - Hizmetlerimiz */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 - İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span>{siteContent.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:+90${siteContent.contact.whatsapp}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <span>{siteContent.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <span>{siteContent.contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-white/60 flex-shrink-0" />
                <span>
                  Pzt-Cmt: {siteContent.contact.workingHours.weekday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2024 Tabtes Mekanik. Tüm hakları saklıdır.</p>
            <p className="text-center md:text-right">
              Çerkezköy Tesisatçı | Çorlu Tesisatçı | Tekirdağ Tesisatçı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
