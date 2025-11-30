"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from "lucide-react";
import { references } from "@/data/references";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function ReferencesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newPosition =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Referanslarımız
          </h2>
          <p className="text-foreground-muted text-lg">
            Tamamlanan projelerimizden örnekler
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {references.map((ref) => (
              <Link
                key={ref.id}
                href={`/referanslar/${ref.slug}`}
                className="flex-shrink-0 w-80 bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-105"
              >
                {/* Image Placeholder */}
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
                  <p className="text-foreground-muted text-sm line-clamp-2">
                    {ref.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                    Detayları Gör
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Tümünü Gör
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
