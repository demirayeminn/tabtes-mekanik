export const siteContent = {
  contact: {
    phone: "0537 010 24 12",
    email: "tabtesmekanik@gmail.com",
    address: "Çerkezköy, Tekirdağ",
    whatsapp: "905370102412",
    workingHours: {
      weekday: "08:00 - 20:00",
      saturday: "08:00 - 20:00",
      sunday: "Sadece Acil Servis",
    },
  },
  prices: {
    // Easily update prices here
    "yangin-sprink": { min: 5000, max: 50000, unit: "proje bazlı" },
    "kazan-dairesi": { min: 10000, max: 100000, unit: "proje bazlı" },
    "kaskat-sistemler": { min: 15000, max: 150000, unit: "proje bazlı" },
    "isitma-sogutma": { min: 3000, max: 30000, unit: "proje bazlı" },
    "ciller-gruplama": { min: 20000, max: 200000, unit: "proje bazlı" },
    "su-tesisati": { min: 2000, max: 20000, unit: "proje bazlı" },
    "kacak-tespiti": { min: 800, max: 2000, unit: "işlem başına" },
    "petek-temizleme": { min: 200, max: 300, unit: "petek başına" },
    "banyo-tadilati": { min: 15000, max: 50000, unit: "proje bazlı" },
    "acil-servis": { min: 500, max: 2000, unit: "duruma göre" },
  },
  images: {
    // Image paths - easily changeable
    hero: "/images/hero-bg.jpg",
    about: "/images/about-team.jpg",
    services: {
      "yangin-sprink": "/images/services/yangin-sprink.jpg",
      "kazan-dairesi": "/images/services/kazan-dairesi.jpg",
      "kaskat-sistemler": "/images/services/kaskat.jpg",
      "isitma-sogutma": "/images/services/isitma-sogutma.jpg",
      "ciller-gruplama": "/images/services/ciller.jpg",
      "su-tesisati": "/images/services/su-tesisati.jpg",
      "kacak-tespiti": "/images/services/kacak-tespiti.jpg",
      "petek-temizleme": "/images/services/petek.jpg",
      "banyo-tadilati": "/images/services/banyo.jpg",
      "acil-servis": "/images/services/acil.jpg",
    },
  },
};

// Helper function to get price display
export function getPriceDisplay(serviceSlug: string): string {
  const price =
    siteContent.prices[serviceSlug as keyof typeof siteContent.prices];
  if (!price) return "Fiyat için arayın";

  if (price.min === price.max) {
    return `₺${price.min.toLocaleString("tr-TR")} / ${price.unit}`;
  }
  return `₺${price.min.toLocaleString("tr-TR")} - ₺${price.max.toLocaleString("tr-TR")} / ${price.unit}`;
}

