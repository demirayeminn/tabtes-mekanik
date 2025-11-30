"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/urunler", label: "Ürünlerimiz" },
    { href: "/fiyat-teklifi", label: "Fiyat Teklifi" },
    { href: "/iletisim", label: "İletişim" },
  ];

  const phoneNumber = siteContent.contact.phone;

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full h-10 bg-brand flex items-center justify-center">
        <a
          href={`tel:+90${siteContent.contact.whatsapp}`}
          className="flex items-center text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span>7/24 Acil Servis: {phoneNumber}</span>
        </a>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`w-full h-16 bg-white sticky top-0 z-50 transition-shadow duration-200 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* LEFT - Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Tabtes Mekanik Tesisat"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* CENTER - Navigation (hidden on mobile, show on lg) */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Blog after İletişim */}
            <span className="text-foreground-muted">|</span>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center gap-4">
            {/* Phone display (hidden on mobile, show on md) */}
            <a
              href={`tel:+90${siteContent.contact.whatsapp}`}
              className="hidden md:flex items-center gap-2 text-foreground-muted text-sm hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/fiyat-teklifi"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
            >
              Hemen Teklif Al
            </Link>

            {/* MOBILE MENU - Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-foreground p-2"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Top - Close Button + Logo */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center"
              >
                <Image
                  src="/logo.jpg"
                  alt="Tabtes Mekanik Tesisat"
                  width={140}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={closeMenu}
                className="text-foreground p-2"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Center - Navigation Links */}
            <div className="flex-1 flex flex-col px-4 py-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-foreground text-xl py-4 font-medium hover:text-primary transition-colors border-b border-border"
                >
                  {link.label}
                </Link>
              ))}
              {/* Blog in mobile menu */}
              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-foreground text-xl py-4 font-medium hover:text-primary transition-colors border-b border-border"
              >
                Blog
              </Link>
            </div>

            {/* Bottom - Phone + CTA Button */}
            <div className="p-4 border-t border-border space-y-4">
              <a
                href={`tel:+90${siteContent.contact.whatsapp}`}
                className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">{phoneNumber}</span>
              </a>
              <Link
                href={`tel:+90${siteContent.contact.whatsapp}`}
                onClick={closeMenu}
                className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
