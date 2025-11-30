export interface Reference {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  description: string;
  images: string[]; // Array for multiple images
  date: string;
}

export const references: Reference[] = [
  {
    id: 1,
    slug: "cerkezkoy-villa-kombi",
    title: "Villa Kombi Montajı",
    location: "Çerkezköy",
    category: "Isıtma Sistemleri",
    description:
      "Müstakil villada komple ısıtma sistemi kurulumu. Yerden ısıtma ve radyatör kombinasyonu ile maksimum konfor sağlandı.",
    images: [
      "/references/villa-1.jpg",
      "/references/villa-2.jpg",
      "/references/villa-3.jpg",
    ],
    date: "2024-01",
  },
  {
    id: 2,
    slug: "kapakli-apartman-tesisat",
    title: "Apartman Tesisat Yenileme",
    location: "Kapaklı",
    category: "Su Tesisatı",
    description:
      "12 daireli apartmanda komple tesisat yenileme projesi. PPR boru sistemi ile 50 yıl garantili çözüm.",
    images: [
      "/references/apartman-1.jpg",
      "/references/apartman-2.jpg",
    ],
    date: "2024-02",
  },
  {
    id: 3,
    slug: "corlu-isyeri-banyo",
    title: "İşyeri Banyo Tadilatı",
    location: "Çorlu",
    category: "Tadilat",
    description:
      "Ticari işyerinde 4 adet banyo komple yenileme. Modern tasarım ve kaliteli malzeme kullanımı.",
    images: [
      "/references/banyo-1.jpg",
      "/references/banyo-2.jpg",
      "/references/banyo-3.jpg",
    ],
    date: "2024-01",
  },
  {
    id: 4,
    slug: "velimese-petek-temizlik",
    title: "Müstakil Ev Petek Temizliği",
    location: "Velimeşe",
    category: "Petek Temizleme",
    description:
      "18 petekli müstakil evde komple sistem temizliği. %30 verimlilik artışı sağlandı.",
    images: ["/references/petek-1.jpg", "/references/petek-2.jpg"],
    date: "2023-12",
  },
  {
    id: 5,
    slug: "tekirdag-fabrika-tesisat",
    title: "Fabrika Su Tesisatı",
    location: "Tekirdağ",
    category: "Endüstriyel",
    description:
      "5000 m² fabrikada komple su ve yangın tesisatı. Sprinkler sistemi dahil anahtar teslim proje.",
    images: [
      "/references/fabrika-1.jpg",
      "/references/fabrika-2.jpg",
      "/references/fabrika-3.jpg",
    ],
    date: "2023-11",
  },
  {
    id: 6,
    slug: "cerkezkoy-kacak-tespit",
    title: "Daire Kaçak Tespiti",
    location: "Çerkezköy",
    category: "Kaçak Tespiti",
    description:
      "Apartman dairesinde kameralı kaçak tespiti. Kırım yapmadan sorun tespit edildi ve giderildi.",
    images: ["/references/kacak-1.jpg", "/references/kacak-2.jpg"],
    date: "2024-03",
  },
];

export const referenceCategories = [
  "Tümü",
  "Isıtma Sistemleri",
  "Su Tesisatı",
  "Tadilat",
  "Petek Temizleme",
  "Endüstriyel",
  "Kaçak Tespiti",
];

