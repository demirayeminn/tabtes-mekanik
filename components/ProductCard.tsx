"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="aspect-square bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Package className="w-16 h-16 text-foreground-muted/30" />
        </div>
        {/* Brand Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
          {product.brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-sm text-foreground-muted uppercase tracking-wide">
          {product.brand}
        </div>
        <h3 className="font-semibold text-foreground text-lg mt-1">
          {product.name}
        </h3>

        {/* Features */}
        <div className="mt-3 space-y-1 flex-1">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="text-sm text-foreground-muted flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 pt-0">
        <Link
          href="/iletisim"
          className="w-full bg-primary-light text-primary hover:bg-primary hover:text-white rounded-lg py-2.5 font-medium transition-colors inline-block text-center"
        >
          Bilgi Al
        </Link>
      </div>
    </div>
  );
}

