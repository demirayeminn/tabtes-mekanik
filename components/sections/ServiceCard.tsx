"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 relative ${
        featured ? "border-2 border-accent" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-semibold">
          Popüler
        </div>
      )}

      {/* Icon Container */}
      <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mt-4">{title}</h3>

      {/* Description */}
      <p className="text-foreground-muted mt-2 text-sm leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="text-accent hover:text-accent-hover font-medium mt-4 inline-flex items-center gap-1 transition-colors"
      >
        Detaylı Bilgi
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
