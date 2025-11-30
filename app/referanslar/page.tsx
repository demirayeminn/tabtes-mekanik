"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/sections/PageHeader";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { references, referenceCategories } from "@/data/references";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function ReferanslarPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredReferences =
    selectedCategory === "Tümü"
      ? references
      : references.filter((ref) => ref.category === selectedCategory);

  return (
    <main>
      <PageHeader
        title="Referanslarımız"
        subtitle="Tamamlanan projelerimizden örnekler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Referanslarımız", href: "/referanslar" },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {referenceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-primary-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReferences.map((ref) => {
              const date = new Date(ref.date + "-01");
              const formattedDate = date.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
              });

              return (
                <Link
                  key={ref.id}
                  href={`/referanslar/${ref.slug}`}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-105"
                >
                  {/* Image */}
                  <ImagePlaceholder
                    aspectRatio="video"
                    text={ref.title}
                    className="rounded-t-xl"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground-muted">
                        {ref.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-heading mb-2">
                      {ref.title}
                    </h3>
                    <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                      {ref.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-foreground-muted">
                        <Calendar className="w-4 h-4" />
                        <span>{formattedDate}</span>
                      </div>
                      <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-medium">
                        {ref.category}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                      Detayları Gör
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

