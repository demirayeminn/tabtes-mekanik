"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Info } from "lucide-react";

export default function UrunlerPage() {
  const [activeCategory, setActiveCategory] = useState("tumu");

  const filteredProducts =
    activeCategory === "tumu"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const brands = [
    "Baymak",
    "Demirdöküm",
    "Vaillant",
    "Bosch",
    "ECA",
    "Grohe",
    "Artema",
    "Wavin",
  ];

  return (
    <main>
      {/* PAGE HEADER */}
      <PageHeader
        title="Ürünlerimiz"
        subtitle="Çalıştığımız markalar ve ürünler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Ürünlerimiz", href: "/urunler" },
        ]}
      />

      {/* BRANDS SECTION */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl font-semibold text-foreground">
            Güvendiğimiz Markalar
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-muted rounded flex items-center justify-center"
              >
                <span className="text-foreground-muted font-medium text-sm">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-muted py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 font-medium cursor-pointer transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-foreground border border-border hover:bg-primary-light"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <section className="bg-muted py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-primary-light rounded-2xl p-8 text-center">
            <Info className="w-8 h-8 text-primary mx-auto" />
            <p className="text-foreground mt-4">
              Ürün fiyatları ve stok durumu için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner />
    </main>
  );
}

